<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
</script>

<template>
  <div class="slidev-layout default" :class="$slidev.themeConfigs?.service">
    <PaizaFrame />
    <slot />
  </div>
</template>
