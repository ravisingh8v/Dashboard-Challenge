<template>
  <section class="px-4 h-100 d-flex flex-column">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Cost"></StatisticsCardHeader>
    <div class="chartContainer flex-grow-1 mt-3">
      <canvas ref="costChart" area-label="cost-chart"></canvas>
      <!-- width="100" -->
      <!-- height="100" -->
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";
import { ref, onMounted, inject, computed, watch } from "vue";
import { Chart } from "chart.js/auto";
export default {
  components: { StatisticsCardHeader },
  setup() {
    const costChart = ref();
    let chartInstance: any = null;
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
        createChart();
        console.log("child", borderColor.value);
      },
      { immediate: true }
    );

    onMounted(() => {
      createChart();
    });

    function createChart() {
      const data = ["3.3", "4.5", "6"];
      // options
      // Chart Data
      const chartData = {
        labels: [""],
        datasets: [
          // { label: "", data: "0" },

          {
            label: "Actual",
            // categoryPercentage: 1.0,
            // barPercentage: 1.0,
            data: data[0],
            backgroundColor: ["#84bb5d"],
            barThickness: 60,
          },
          {
            label: "Planned",
            // categoryPercentage: 1.0,
            // barPercentage: 1.0,
            data: "4.5",
            backgroundColor: ["#54d2f9"],
            barThickness: 60,
          },
          {
            label: "Budget",
            // categoryPercentage: 1.0,
            // barPercentage: 1.0,
            data: "6",
            backgroundColor: ["#4198e0"],
            barThickness: 60,
          },
          // { label: "", data: "0" },
        ],
      };
      // const legendMarginLeft = {
      //   id: "legendMarginLeft",
      //   afterInit(chart: Chart, args: any, options: any) {
      //     console.log(chart);
      //     const fitValue = chart.legend;
      //   },
      // };
      // Chart js
      chartInstance = new Chart(costChart.value, {
        type: "bar",
        data: chartData,
        // OPTIONS
        options: {
          maintainAspectRatio: false,
          responsive: true,
          // PLUGINS
          plugins: {
            legend: {
              position: "top",
              align: "start",
              labels: {
                font: {
                  size: 15,
                },
                color: "gray",
                usePointStyle: true,
                pointStyle: "circle",
              },
            },
          },
          // LAYOUT
          layout: {
            padding: {
              bottom: 10,
              right: 20,
            },
          },
          // SCALE
          scales: {
            y: {
              ticks: {
                callback: function (value, index) {
                  if (index == 0) {
                    return "$" + value;
                  } else {
                    return value + "k";
                  }
                },
                stepSize: 1.5,
                color: fontColor.value,
                font: {
                  size: 15,
                },
                padding: 20,
              },
              grid: {
                color: borderColor.value,
                lineWidth: 1.5,
              },
              border: {
                display: false,
              },
            },
            x: {
              // position: "center",
              grid: {
                display: false,
              },
            },
          },
          // ELEMENTS
          elements: {
            bar: {
              borderColor: "transparent",
              borderWidth: {
                left: 4,
                right: 4,
              },
            },
          },
        },
        plugins: [plugin],
      });
    }
    // to space between legend and chart
    const plugin = {
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
    return { costChart };
  },
};
</script>
<style lang="scss" scoped>
.chartContainer {
  height: 280px;
}
</style>
