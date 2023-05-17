<template>
  <section class="px-4 d-flex flex-column h-100">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Progress"></StatisticsCardHeader>
    <div id="chartContainer" class="mt-4">
      <canvas
        ref="progressBar"
        height=""
        width=""
        area-label="progress-bar"
      ></canvas>
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";
import { defineComponent } from "vue";
import { onMounted, ref } from "vue";
import { Chart } from "chart.js/auto";
export default defineComponent({
  components: { StatisticsCardHeader },
  setup() {
    const progressBar = ref();
    onMounted(() => {
      new Chart(progressBar.value, {
        type: "bar",
        data: {
          labels: [
            "Congrats",
            "Design",
            "Procurement",
            "Construction",
            "Post Con...",
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
              ticks: {
                //   stepSize: 10,
                //   callback: function (value) {
                //     return value + "%";
                //   },
              },
              grid: {
                display: false,
              },
            },
            y: {
              afterFit: function (scale: any) {
                scale.width = 160;
              },
              ticks: {
                font: {
                  size: 16,
                },
                // color: "white",
                // align: "start",
                crossAlign: "far",
              },

              grid: {
                display: false,
              },
            },
          },
        },
        plugins: [customDataLabels],
      });
    });
    const customDataLabels = {
      id: "customDataLabels",
      afterDatasetsDraw(chart: any) {
        // console.log(chart);
        const {
          ctx,
          data,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;
        ctx.save();
        data.datasets[0].data.forEach((dataPoint: any, index: any) => {
          const { x, y } = chart
            .getDatasetMeta(0)
            .data[index].tooltipPosition();

          ctx.font = "normal 16px sans-serif";
          ctx.fillStyle = data.datasets[0].backgroundColor[index];
          (ctx.align = "right"), (ctx.textBaseline = "middle");
          ctx.fillText(dataPoint + "%", 110, y);
        });
      },
    };

    return { progressBar };
  },
});
</script>
<style scoped lang="scss">
#chartContainer {
  height: 300px;
  padding-right: 40px;
}
</style>
