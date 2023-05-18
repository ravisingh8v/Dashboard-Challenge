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
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";
export default {
  components: { StatisticsCardHeader },
  setup() {
    const timeBar = ref();
    onMounted(() => {
      new Chart(timeBar.value, {
        type: "bar",
        data: {
          labels: [
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
              data: ["0", "0", "0"],
              backgroundColor: ["#40acf0"],
              barThickness: 25,
            },
            {
              label: "Behind",
              data: ["0", "0", "0"],
              backgroundColor: ["#f7a652"],
              barThickness: 25,
            },
            {
              label: "On Time",
              data: ["0.9", "14", "14"],
              backgroundColor: ["#6dc96a"],
              barThickness: 25,
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

          indexAxis: "y",
          scales: {
            x: {
              max: 100,
              min: -100,
              // display: false,
              ticks: {
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
                color: "white",
              },
              grid: {
                display: true,
                color: "gray",
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
                // color: "white",
                // align: "start",
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
    });
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
    const customDataLabels = {
      id: "customDataLabels",
      afterDatasetsDraw(chart: any) {
        const { ctx, data } = chart;
        ctx.save();
        console.log(data);
        data.datasets.forEach((res: any, index: any) => {
          const dataPoints = [];
          res.data.forEach((dataPoint: any, index: any) => {
            console.log(dataPoint);
            dataPoints.push(dataPoint);
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
