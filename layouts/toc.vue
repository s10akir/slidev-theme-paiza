<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
</script>

<template>
  <div class="slidev-layout toc" :class="$slidev.themeConfigs?.service">
    <PaizaFrame />
    <div>
      <slot />
    </div>
  </div>
</template>
