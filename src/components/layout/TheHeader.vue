<template>
  <section class="color-secondary row gx-0 align-items-center h-100 px-4">
    <div class="col-4 d-flex h-100 align-items-center">
      <h3 class="m-0 fw-normal">Govalle Construction</h3>
      <!-- profiles wrappers -->
      <div class="ms-3 d-flex">
        <div class="profile-wrapper">
          <img src="./../../assets/images/waiter.png" alt="" />
        </div>
        <div class="profile-wrapper partner_logo">
          <span>GP</span>
        </div>
      </div>
    </div>
    <!-- navigation -->
    <nav class="col-4 h-100">
      <ul class="d-flex justify-content-center h-100">
        <li class="d-flex align-items-center">
          <RouterLink class="router_link" to="/">
            <span class="material-symbols-outlined icon"> list </span>
          </RouterLink>
        </li>
        <li class="d-flex align-items-center">
          <RouterLink class="router_link" to="/cellular">
            <span class="material-symbols-outlined bar_chart_icon icon">
              signal_cellular_alt
            </span>
          </RouterLink>
        </li>
        <li class="d-flex align-items-center">
          <RouterLink class="router_link" to="/article">
            <span class="material-symbols-outlined icon"> article </span>
          </RouterLink>
        </li>
        <li class="d-flex align-items-center">
          <RouterLink class="router_link" to="/statistics">
            <span class="material-symbols-outlined icon"> earthquake </span>
          </RouterLink>
        </li>
        <li class="d-flex align-items-center">
          <RouterLink class="router_link" to="/calendar">
            <span class="material-symbols-outlined icon"> calendar_month </span>
          </RouterLink>
        </li>
        <li class="d-flex align-items-center">
          <RouterLink class="router_link" to="/description">
            <span class="material-symbols-outlined icon"> description </span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="col-4"></div>
  </section>
</template>
<script lang="ts">
export default {};
</script>
