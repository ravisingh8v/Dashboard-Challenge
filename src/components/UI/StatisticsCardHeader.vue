<template>
  <div class="d-flex justify-content-between align-items-center mt-4">
    <div>
      <h4 class="fw-normal">{{ title }}</h4>
    </div>
    <!-- action buttons -->
    <div class="d-flex align-items-center">
      <div v-if="isShow">
        <span class="fs-3 me-1 material-symbols-outlined icon">
          fullscreen
        </span>
      </div>
      <div v-if="isShow">
        <span class="fs-3 me-1 material-symbols-outlined icon"> settings </span>
      </div>
      <div>
        <span class="fs-3 material-symbols-outlined icon"> help </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    isShow: {
      default: true,
    },
    title: {
      required: true,
    },
  },
};
</script>
