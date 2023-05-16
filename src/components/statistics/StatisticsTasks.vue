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
        cutout: 80,
        maintainAspectRatio: false,
        layout: {
          padding: {},
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
        elements: {
          arc: {
            borderColor: "#101321",
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
      });
    });

    return { tasksChart };
  },
};
</script>
<style lang="scss" scoped>
.chartContainer {
  height: 230px;
}
</style>
