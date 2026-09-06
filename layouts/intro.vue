<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
</script>

<template>
  <div class="slidev-layout intro" :class="$slidev.themeConfigs?.service">
    <PaizaFrame />
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
