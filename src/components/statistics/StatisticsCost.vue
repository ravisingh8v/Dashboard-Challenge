<template>
  <section class="px-4 h-100 d-flex flex-column">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Cost"></StatisticsCardHeader>
    <div class="mt-2 chartContainer flex-grow-1">
      <canvas
        ref="costChart"
        width="100"
        height="100"
        area-label="cost-chart"
      ></canvas>
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
    const costChart = ref();
    const data = ["3.3", "4.5", "6"];

    onMounted(() => {
      // options
      // Chart Data
      const chartData = {
        labels: [`actual`, "planned", "budget"],
        datasets: [
          {
            label: "",
            categoryPercentage: 1.0, // notice here
            barPercentage: 1.0,
            data: data,
            backgroundColor: ["#9da4ad", "#6bc76e", "#4fcbc2"],
            barThickness: 40,
            // scales: {
            //   x: {
            //     barPercentage: 1,
            //     categoryPercentage: 1,
            //   },
            // },
          },
        ],
      };
      // Chart js
      new Chart(costChart.value.getContext("2d"), {
        type: "bar",
        data: chartData,
        options: {
          plugins: {
            legend: {
              labels: {
                color: "red",
                generateLabels: (chart: any) => {
                  // console.log(chart);
                  const label = chart.data.labels?.map(
                    (label: any, index: any) => ({
                      text: label,
                      strokeStyle:
                        chart.data.datasets[0]?.backgroundColor[index],
                      fillStyle: chart.data.datasets[0]?.backgroundColor[index],
                      colorStyle:
                        chart.data.datasets[0]?.backgroundColor[index],
                      hidden: false,
                    })
                  );
                  return label;
                },
                usePointStyle: true,
                pointStyle: "circle",
              },
            },
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 50,
              right: 50,
              top: 0,
              bottom: 0,
            },
          },
          scales: {
            y: {
              ticks: {
                stepSize: 1.5,
              },
              grid: {
                // display: false,
                color: "gray",
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
                // color: "gray",
              },
            },
          },
        },
      });
    });

    return { costChart };
  },
};
</script>
<style lang="scss" scoped>
.chartContainer {
  height: 100%;
}
</style>
