<script setup>
import PaizaFrame from "../components/paiza-frame.vue";
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: "cover",
  },
});

const style = computed(() =>
  handleBackground(props.image, false, props.backgroundSize),
);
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="w-full h-full" :style="style" />
    <div
      class="slidev-layout default image-content"
      :class="[props.class, $slidev.themeConfigs?.service]"
    >
      <PaizaFrame />
      <slot />
    </div>
  </div>
</template>
