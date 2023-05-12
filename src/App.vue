<template>
  <section class="h-100 d-flex">
    <aside class="" id="sidebar">
      <TheSidebar></TheSidebar>
    </aside>
    <section class="d-flex flex-column flex-grow-1 main_section">
      <header class="header_height border-bottom border-secondary" id="header">
        <TheHeader></TheHeader>
      </header>
      <main class="flex-grow-1">
        <DashBoardStatistics></DashBoardStatistics>
      </main>
    </section>
  </section>
</template>
<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";
import DashBoardStatistics from "./components/dashboard/DashBoardStatistics.vue";
export default {
  components: { TheHeader, TheSidebar, DashBoardStatistics },
  setup() {
    document.documentElement.className = "dark";
    return {};
  },
};
</script>

<style lang="scss">
// vks
</style>
