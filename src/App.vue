<template>
  <section class="h-100 d-flex">
    <aside class="" id="sidebar">
      <TheSidebar @themeSwitcher="themeSwitcher"></TheSidebar>
    </aside>
    <section class="d-flex w-100 flex-column h-100 main_section">
      <header class="header_height flex-shrink-0" id="header">
        <TheHeader></TheHeader>
      </header>
      <main class="d-flex flex-column flex-grow-1 overflow-auto">
        <RouterView></RouterView>
      </main>
    </section>
  </section>
</template>
<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";
import { ref, computed, watch, provide } from "vue";
export default {
  components: { TheHeader, TheSidebar },
  setup() {
    const theme = ref();
    const doughnutBorderColor = ref();
    const borderColor = ref();
    const fontColor = ref();
    const themeChanger = computed(() => {
      return localStorage.getItem("theme");
    });
    watch(
      themeChanger,
      () => {
        theme.value = themeChanger?.value;
        console.log(theme.value);
      },
      { immediate: true }
    );

    // default
    document.documentElement.className = theme.value || "dark";
    if (localStorage.getItem("theme") == "light") {
      borderColor.value = "#dfe8f1";
      doughnutBorderColor.value = "white";
      fontColor.value = "grey";
      localStorage.clear();
      localStorage.setItem("theme", "light");
    } else {
      borderColor.value = "#363947";
      doughnutBorderColor.value = "#101422";
      fontColor.value = "white";
      localStorage.setItem("theme", "dark");
    }

    // onClick Theme change BUtton
    function themeSwitcher(value: boolean) {
      localStorage.clear();
      if (value == true) {
        borderColor.value = "#dfe8f1";
        doughnutBorderColor.value = "white";
        fontColor.value = "grey";
        document.documentElement.className = "light";
        localStorage.setItem("theme", "light");
      } else {
        borderColor.value = "#363947";
        doughnutBorderColor.value = "#101422";
        fontColor.value = "white";
        document.documentElement.className = "dark";
        localStorage.setItem("theme", "dark");
      }
    }
    provide("borderColor", borderColor);
    provide("doughnutBorderColor", doughnutBorderColor);
    provide("fontColor", fontColor);
    return { themeSwitcher };
  },
};
</script>

<style lang="scss">
// vks
</style>
