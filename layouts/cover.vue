<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
</script>

<template>
  <div class="slidev-layout cover" :class="$slidev.themeConfigs?.service">
    <PaizaFrame :show-title="false" :show-page="false" />
    <div class="cover-content my-auto w-full">
      <slot />
    </div>
    <img class="cover-logo" src="./logo.svg" alt="" />
  </div>
</template>

<style scoped>
.cover-logo {
  position: absolute;
  right: -4%;
  bottom: -18%;
  width: 38%;
  margin: 0;
  opacity: 0.15;
  pointer-events: none;
}

.cover-content {
  position: relative;
  z-index: 1;
}
</style>
