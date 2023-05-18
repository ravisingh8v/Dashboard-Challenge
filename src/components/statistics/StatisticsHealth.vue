<template>
  <section class="px-4">
    <!-- Top Section  -->
    <StatisticsCardHeader
      :is-show="false"
      title="Health"
    ></StatisticsCardHeader>
    <div class="mt-3">
      <table class="w-100">
        <tbody>
          <tr class="table_row">
            <td class="">Time</td>
            <td>14% ahead of schedule</td>
          </tr>
          <tr class="table_row">
            <td class="">Tasks</td>
            <td>14% ahead of schedule</td>
          </tr>
          <tr class="table_row">
            <td class="">Workload</td>
            <td>14% ahead of schedule</td>
          </tr>
          <tr class="table_row">
            <td class="">Progress</td>
            <td>14% ahead of schedule</td>
          </tr>
          <tr class="table_row">
            <td class="">Cost</td>
            <td>14% ahead of schedule</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";

export default {
  components: { StatisticsCardHeader },
};
</script>
<style lang="scss" scoped>
//fb
</style>
