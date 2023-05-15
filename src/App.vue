<template>
  <section class="h-100 d-flex">
    <aside class="" id="sidebar">
      <TheSidebar @themeSwitcher="themeSwitcher"></TheSidebar>
    </aside>
    <section class="d-flex flex-column flex-grow-1 main_section">
      <header class="header_height" id="header">
        <TheHeader></TheHeader>
      </header>
      <main class="flex-grow-1 d-flex flex-column">
        <RouterView></RouterView>
      </main>
    </section>
  </section>
</template>
<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";
import { ref, computed, watch } from "vue";
export default {
  components: { TheHeader, TheSidebar },
  setup() {
    const theme = ref();
    const themeChanger = computed(() => {
      return localStorage.getItem("theme");
    });
    watch(
      themeChanger,
      () => {
        theme.value = themeChanger?.value;
      },
      { immediate: true }
    );
    document.documentElement.className = theme.value;

    function themeSwitcher(value: boolean) {
      localStorage.clear();
      if (value == true) {
        console.log("hello");
        document.documentElement.className = "light";
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.className = "dark";
        localStorage.setItem("theme", "dark");
      }
    }
    return { themeSwitcher };
  },
};
</script>

<style lang="scss">
// vks
</style>
