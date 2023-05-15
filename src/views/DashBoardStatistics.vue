<template>
  <section class="flex-grow-1">
    <div class="row gx-0 h-100 pb-3">
      <div class="col-4 health_wrapper">
        <StatisticsHealth></StatisticsHealth>
      </div>

      <div class="col-4 task_wrapper">
        <StatisticsTasks></StatisticsTasks>
      </div>

      <div class="col-4 progress_wrapper">
        <StatisticsProgress></StatisticsProgress>
      </div>

      <div class="col-4 time_wrapper">
        <StatisticsTime></StatisticsTime>
      </div>

      <div class="col-4 cost_wrapper">
        <StatisticsCost></StatisticsCost>
      </div>

      <div class="col-4 workload_wrapper">
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
