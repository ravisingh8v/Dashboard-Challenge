<template>
  <section class="px-4">
    <!-- Top Section  -->
    <StatisticsCardHeader title="Progress"></StatisticsCardHeader>
    <div ref="chartContainer"></div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";
import { defineComponent } from "vue";
import * as d3 from "d3";
import { onMounted, ref } from "vue";
export default defineComponent({
  components: { StatisticsCardHeader },
  setup() {
    const chartContainer = ref();
    onMounted(() => {
      const data = [10, 20, 30, 40, 50];
      const width = 200;
      const height = 250;
      const margin = { top: 0, bottom: 0, left: 0, right: 0 };

      const xScale = d3
        .scaleBand<number>()
        .domain(data.map((d, i) => i))
        .range([0, 500])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data) || 0]) // Ensure a default value for undefined data
        .range([500, 0]);

      const container = d3
        .select(chartContainer.value)
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      console.log(container);

      container
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(i) || "".toString()) // Convert to string
        .attr("y", (d) => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => 500 - yScale(d));
    });
    return { chartContainer };
  },
});
</script>
