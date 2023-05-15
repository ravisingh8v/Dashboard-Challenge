<template>
  <section class="px-4">
    <!-- Top Section  -->
    <StatisticsCardHeader
      :is-show="false"
      title="Health"
    ></StatisticsCardHeader>
  </section>
</template>
<script lang="ts">
import StatisticsCardHeader from "@/components/UI/StatisticsCardHeader.vue";

export default {
  components: { StatisticsCardHeader },
};
</script>
