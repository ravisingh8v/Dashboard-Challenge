<template>
  <section class="px-4 d-flex flex-column h-100">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Progress"></StatisticsCardHeader>
    <div
      id="chartContainer"
      class="d-flex justify-content-center align-items-center flex-grow-1"
    >
      <canvas ref="progressBar" area-label="progress-bar"></canvas>
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";
import { defineComponent } from "vue";
import { onMounted, ref, watch, computed, inject } from "vue";
import { Chart } from "chart.js/auto";
export default defineComponent({
  components: { StatisticsCardHeader },
  setup() {
    const progressBar = ref();
    let chartInstance: any = "";

    const fontColor = ref("");
    const gettingFontColor = inject<any>("fontColor");
    const getFontColor = computed(() => {
      return gettingFontColor.value;
    });
    watch(
      getFontColor,
      () => {
        fontColor.value = getFontColor.value;
        if (chartInstance) {
          chartInstance.destroy();
        }
        createChart();
      },
      { immediate: true }
    );

    onMounted(() => {
      createChart();
    });
    function createChart() {
      if (progressBar.value) {
        chartInstance = new Chart(progressBar.value, {
          type: "bar",
          data: {
            labels: [
              "Congrats",
              "Design",
              "Procurement",
              "Construction",
              "Post Const...",
              "Project Col...",
            ],

            datasets: [
              {
                label: "",
                data: ["100", "80", "19", "0.5", "0.5", "0.5"],
                backgroundColor: [
                  "#6acb6d",
                  "#67cb6c",
                  "#df5a9d",
                  // "yellow",
                  "#7f848e",
                  "#7f848e",
                  "#7f848e",
                ],
                barThickness: 40,
              },
            ],
          },

          options: {
            plugins: {
              legend: {
                display: false,
              },
            },

            elements: {
              bar: {
                borderColor: "transparent",
                borderWidth: {
                  top: 10,
                  bottom: 10,
                },
              },
            },
            maintainAspectRatio: false,
            // responsive: true,
            indexAxis: "y",
            scales: {
              x: {
                display: false,

                grid: {
                  display: false,
                },
              },
              y: {
                afterFit: function (scale: any) {
                  scale.width = 160;
                },
                ticks: {
                  color: fontColor.value,
                  font: {
                    size: 15,
                  },
                  // color: "white",
                  // align: "start",
                  crossAlign: "far",
                  padding: 20,
                },

                grid: {
                  display: false,
                },
              },
            },
          },
          plugins: [customDataLabels],
        });
      }
    }
    const customDataLabels = {
      id: "customDataLabels",
      afterDatasetsDraw(chart: any) {
        // console.log(chart);
        const { ctx, data } = chart;
        ctx.save();
        data.datasets[0].data.forEach((dataPoint: any, index: any) => {
          const { y } = chart.getDatasetMeta(0).data[index].tooltipPosition();

          ctx.font = "normal 16px sans-serif";
          ctx.fillStyle = data.datasets[0].backgroundColor[index];
          (ctx.textAlign = "right"), (ctx.textBaseline = "middle");

          if (dataPoint > 0 && dataPoint < 1) {
            dataPoint = 0;
          }
          ctx.fillText(dataPoint + "%", 150, y);
        });
      },
    };

    return { progressBar };
  },
});
</script>
<style scoped lang="scss">
#chartContainer {
  padding-right: 40px;
  width: 100%;
}
</style>
