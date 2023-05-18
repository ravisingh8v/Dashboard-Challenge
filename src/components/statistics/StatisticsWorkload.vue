<template>
  <section class="px-4">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Workload"></StatisticsCardHeader>
    <div id="chartContainer" class="mt-3">
      <canvas
        ref="workloadBar"
        height=""
        width=""
        area-label="workload-bar"
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
    const workloadBar = ref();
    onMounted(() => {
      new Chart(workloadBar.value, {
        type: "bar",
        data: {
          labels: ["Mike", "Jennifer", "Brandon", "sam", "George"],
          datasets: [
            {
              label: "Completed",
              data: [4, 2, 0, 0, 0],
              backgroundColor: "#68cc6d",
              barThickness: 20,
            },
            {
              label: "Remaining",
              data: [0, 2, 1, 3, 1],
              backgroundColor: "#50cac1",
              barThickness: 20,
            },
            {
              label: "Overdue",
              data: [0, 0, 0, 0, 0],
              backgroundColor: "#f0504c",
              barThickness: 20,
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
            },
          },
          indexAxis: "y",
          scales: {
            x: {
              max: 8,
              grid: {
                color: "gray",
              },
              ticks: {
                stepSize: 2,
                padding: 20,
              },
              border: {
                display: false,
              },

              stacked: true,
            },
            y: {
              stacked: true,
              afterFit: function (scale: any) {
                scale.width = 100;
              },
              grid: {
                display: false,
              },
              ticks: {
                crossAlign: "far",
                font: {
                  size: 15,
                },
              },
            },
          },
        },
        plugins: [pluginHeight],
      });
    });
    const pluginHeight = {
      id: "pluginHeight",
      beforeInit(chart: any) {
        const originalFit = chart.legend.fit;
        chart.legend.fit = function fit() {
          originalFit.bind(chart.legend)();
          this.height += 40;
        };
      },
    };

    return { workloadBar };
  },
};
</script>
<style scoped lang="scss">
#chartContainer {
  height: 300px;
}
</style>
