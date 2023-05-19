<template>
  <section class="sidebar d-flex flex-column justify-content-between h-100">
    <!-- top  -->
    <div class="">
      <!-- Brand Logo  -->
      <div
        class="brand_wrapper d-flex justify-content-center align-items-center header_height px-2"
      >
        <div
          class="logo rounded-circle d-flex justify-content-center align-items-center"
        >
          PM
        </div>
      </div>
      <!-- Navigation  -->
      <nav>
        <div class="d-flex flex-column bb-h-primary align-items-center mt-1">
          <span class="material-symbols-outlined icon py-3"> home </span>
          <span class="material-symbols-outlined icon py-3"> pace </span>
        </div>
        <div class="d-flex flex-column align-items-center">
          <span class="material-symbols-outlined icon py-3"> group </span>
          <span class="material-symbols-outlined icon py-3"> work </span>
        </div>
      </nav>
    </div>
    <nav class="d-block d-md-none">
      <ul class="d-flex flex-column align-items-center">
        <BaseNav></BaseNav>
      </ul>
    </nav>
    <!-- bottom -->
    <nav class="d-flex flex-column align-items-center">
      <span
        class="material-symbols-outlined icon py-3"
        v-if="light"
        @click="themeSwitcher('dark'), $emit('themeSwitcher', light)"
      >
        dark_mode
      </span>
      <span
        v-else
        class="material-symbols-outlined icon py-3"
        @click="themeSwitcher('light'), $emit('themeSwitcher', light)"
      >
        light_mode
      </span>

      <span class="material-symbols-outlined icon py-3"> add </span>
      <span class="material-symbols-outlined icon py-3"> help </span>
      <!-- profile wrapper  -->
      <div>
        <div class="profile-wrapper my-3 text-center py-1">
          <img
            src="./../../assets/images/waiter.png"
            class="icon"
            alt="profile_image"
          />
        </div>
      </div>
    </nav>
  </section>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const light = ref();
    const getTheme = localStorage.getItem("theme");
    getTheme == "light" ? (light.value = true) : (light.value = false);

    function themeSwitcher(value: string) {
      if (value == "dark") {
        light.value = false;
      } else {
        light.value = true;
      }
    }
    return { light, themeSwitcher };
  },
};
</script>
