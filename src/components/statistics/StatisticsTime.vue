<template>
  <section class="px-4">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Time"></StatisticsCardHeader>
    <div id="chartContainer" class="mt-3">
      <canvas ref="timeBar" height="" width="" area-label="time-bar"></canvas>
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";
import { ref, inject, computed, watch, onMounted } from "vue";
import { Chart } from "chart.js/auto";
export default {
  components: { StatisticsCardHeader },
  setup() {
    let chartInstance: any = "";
    const timeBar = ref();

    const fontColor = ref("");
    const gettingFontColor = inject<any>("fontColor");
    const getFontColor = computed(() => {
      return gettingFontColor.value;
    });
    watch(
      getFontColor,
      () => {
        fontColor.value = getFontColor.value;
      },
      { immediate: true }
    );

    const borderColor = ref("");
    const gettingBorder = inject<any>("borderColor");
    const getBorder = computed(() => {
      return gettingBorder.value;
    });
    watch(
      getBorder,
      () => {
        borderColor.value = getBorder.value;
        if (chartInstance) {
          chartInstance.destroy();
        }
        chartCreate();
        console.log("child", borderColor.value);
      },
      { immediate: true }
    );

    onMounted(() => {
      chartCreate();
    });

    function chartCreate() {
      chartInstance = new Chart(timeBar.value, {
        type: "bar",
        data: {
          labels: [
            // "",
            "Planned comple...",
            "Actual comple...",
            "Ahead",
            "",
            "",
            "",
          ],

          datasets: [
            {
              label: "Ahead",
              data: [],
              backgroundColor: ["#40acf0"],
              // barThickness: 25,
            },
            {
              label: "Behind",
              data: [],
              backgroundColor: ["#f7a652"],
              // barThickness: 25,
            },
            {
              label: "On Time",
              data: ["0.9", "14", "14", "", "", ""],
              backgroundColor: ["#6dc96a"],
              barThickness: 30,
            },
            {
              label: "",
              data: [],
              backgroundColor: "transparent",
            },
            {
              label: "",
              data: [],
              backgroundColor: "transparent",
            },
          ],
        },

        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              align: "start",
              labels: {
                font: {
                  size: 15,
                },
                usePointStyle: true,
                pointStyle: "circle",
              },
              // display: false,
            },
          },
          elements: {
            bar: {
              borderColor: "transparent",
              borderWidth: {
                top: 4,
                bottom: 4,
              },
            },
          },

          indexAxis: "y",
          scales: {
            x: {
              max: 100,
              min: -100,
              // display: false,
              ticks: {
                color: fontColor.value,
                font: {
                  size: 14,
                },
                stepSize: 25,
                callback: function (value) {
                  if (+value < 0) {
                    return -value;
                  } else {
                    return value;
                  }
                },
              },
              border: {
                display: false,
              },
              grid: {
                display: true,
                lineWidth: 1.5,
                color: borderColor.value,
              },
            },
            y: {
              afterFit: function (scale: any) {
                scale.width = 130;
              },
              ticks: {
                font: {
                  size: 15,
                },
                color: fontColor.value,
                crossAlign: "far",
              },
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          },
        },

        plugins: [customDataLabels, pluginHeight],
      });
    }
    const pluginHeight = {
      id: "pluginHeight",
      beforeInit(chart: any) {
        const originalFit = chart.legend.fit;
        chart.legend.fit = function fit() {
          originalFit.bind(chart.legend)();
          this.height += 10;
        };
      },
    };

    // Custom Data Label for showing percentage
    const customDataLabels = {
      id: "customDataLabels",
      afterDatasetsDraw(chart: any) {
        const {
          ctx,
          data,
          chartArea: { width },
        } = chart;
        ctx.save();
        data.datasets.forEach((res: any, indexOfSet: any) => {
          res.data.forEach((dataPoint: any, index: any) => {
            if (dataPoint > 0) {
              const { y } = chart
                .getDatasetMeta(indexOfSet)
                .data[index].tooltipPosition();

              ctx.fillStyle = res.backgroundColor;
              ctx.font = "15px sans-serif";
              if (dataPoint > 0) {
                if (dataPoint[index] < 1) {
                  dataPoint = "0";
                }
                ctx.textAlign = "right";
                ctx.textBaseline = "middle";
                ctx.fillText(dataPoint + "%", width / 2 + 125, y);
              }
            }
          });
        });
      },
    };

    return { timeBar };
  },
};
</script>
<style scoped lang="scss">
#chartContainer {
  height: 300px;
  // padding-right: 40px;
}
</style>
