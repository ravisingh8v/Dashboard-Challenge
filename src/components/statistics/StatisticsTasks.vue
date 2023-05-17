<template>
  <section class="px-4">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Tasks"></StatisticsCardHeader>
    <div class="mt-2 chartContainer">
      <canvas
        id="tasksChart"
        ref="tasksChart"
        area-label="tasks-chart"
      ></canvas>
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";
import { Chart } from "chart.js/auto";
import { ref, onMounted } from "vue";
export default {
  components: { StatisticsCardHeader },
  setup() {
    const tasksChart = ref();
    const data = [10, 6, 2];

    onMounted(() => {
      const chartOptions = {
        cutout: 87,
        borderWidth: 1,
        offset: 5,
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {},
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 15,
              },
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
        elements: {
          arc: {
            borderColor: "transparent",
            // borderWidth: 5,
          },
        },
      };

      const chartData = {
        labels: [`Not Started (${"10"})`, "Complete (8)", "In Progress (2)"],
        datasets: [
          {
            label: "My First Dataset",
            data: data,
            backgroundColor: ["#9da4ad", "#6bc76e", "#4fcbc2"],
          },
        ],
      };

      new Chart(tasksChart.value.getContext("2d"), {
        type: "doughnut",
        data: chartData,
        options: chartOptions,
        plugins: [spacing, customDataLabels],
      });
    });
    const spacing = {
      id: "increase-legend-spacing",
      beforeInit(chart: any) {
        // Get reference to the original fit function
        const originalFit = chart.legend.fit;

        // Override the fit function
        chart.legend.fit = function fit() {
          // Call original function and bind scope in order to use `this` correctly inside it
          originalFit.bind(chart.legend)();
          // Change the height as suggested in another answers
          this.height += 40;
        };
      },
    };
    // Created Custom Labels
    const customDataLabels = {
      id: "customDataLabels",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      afterDatasetsDraw(chart: any, args: any, pluginOption: any) {
        const {
          ctx,
          data,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          chartArea: { top, bottom, left, right, width, height },
        } = chart;
        ctx.save();
        data.datasets[0].data.forEach((dataPoint: any, index: any) => {
          console.log(dataPoint);
          const { x, y } = chart
            .getDatasetMeta(0)
            .data[index].tooltipPosition();

          const halfWidth = width / 2;
          const halfHeight = height / 2;
          ctx.font = "normal 20px sans-serif ";
          ctx.fillStyle = data.datasets[0].backgroundColor[index];
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const xLine = x >= halfWidth ? x + 20 : x - 20;
          const yLine = y >= halfHeight ? y + 20 : y - 20;
          // const extraLine = x >= halfWidth ? 30 : -30;
          // ctx.moveTo(x, y);
          ctx.fillText(dataPoint, xLine, yLine);
        });
      },
    };
    return { tasksChart };
  },
};
</script>
<style lang="scss" scoped>
.chartContainer {
  height: 280px;
}
</style>
