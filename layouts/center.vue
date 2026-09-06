<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
</script>

<template>
  <div
    class="slidev-layout center h-full grid place-content-center"
    :class="$slidev.themeConfigs?.service"
  >
    <PaizaFrame />
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
