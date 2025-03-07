<template>
  <div
    class="label"
    :class="`label-${color} ${outline ? 'label-outline' : 'label-fill'}`"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "success",
  },
  outline: {
    type: Boolean,
    default: true,
  },
});

const style = computed(() => {
  return {
    background: props.outline ? "transparent" : "bg-text-" + props.color,
  };
});
</script>

<style scoped>
.label {
  font-size: 0.625rem;
  border: 0.0625rem solid;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.9375rem;
  width: fit-content;
  display: inline-block;
  font-weight: 600;

  &-success {
    @apply text-success bg-success;
  }

  &-attention {
    @apply text-attention bg-attention;
  }

  &-annotation {
    @apply text-annotation bg-annotation;
  }

  &-outline {
    @apply bg-transparent;
  }

  &-fill {
    @apply text-text-anti;
  }
}
</style>
