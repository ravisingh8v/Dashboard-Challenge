<template>
  <section class="h-100 overflow-auto">
    <div class="row gx-0 h-100 pb-3">
      <div class="health_wrapper item-height col-12 col-md-6 col-xxl-4">
        <StatisticsHealth></StatisticsHealth>
      </div>

      <div class="col-12 col-md-6 col-xxl-4 task_wrapper item-height">
        <StatisticsTasks></StatisticsTasks>
      </div>

      <div class="col-12 col-md-6 col-xxl-4 progress_wrapper item-height">
        <StatisticsProgress></StatisticsProgress>
      </div>

      <div class="col-12 col-md-6 col-xxl-4 time_wrapper item-height">
        <StatisticsTime></StatisticsTime>
      </div>

      <div class="col-12 col-md-6 col-xxl-4 cost_wrapper item-height">
        <StatisticsCost></StatisticsCost>
      </div>

      <div class="col-12 col-md-6 col-xxl-4 workload_wrapper item-height">
        <StatisticsWorkload></StatisticsWorkload>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import StatisticsHealth from "@/components/statistics/StatisticsHealth.vue";
import StatisticsTasks from "@/components/statistics/StatisticsTasks.vue";
import StatisticsProgress from "@/components/statistics/StatisticsProgress.vue";
import StatisticsTime from "@/components/statistics/StatisticsTime.vue";
import StatisticsCost from "@/components/statistics/StatisticsCost.vue";
import StatisticsWorkload from "@/components/statistics/StatisticsWorkload.vue";
export default {
  components: {
    StatisticsHealth,
    StatisticsTasks,
    StatisticsProgress,
    StatisticsTime,
    StatisticsCost,
    StatisticsWorkload,
  },
};
</script>
<style scoped lang="scss">
.item-height {
  min-height: 50%;
  @media (max-width: 1400px) {
    min-height: 60%;
  }
}
</style>
