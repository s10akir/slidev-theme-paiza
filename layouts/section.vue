<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
</script>

<template>
  <div class="slidev-layout section" :class="$slidev.themeConfigs?.service">
    <PaizaFrame />
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
