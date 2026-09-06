<template>
  <div
    class="label"
    :class="`label-${color} ${outline ? 'label-outline' : 'label-fill'}`"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "success",
    validator: (value) => ["success", "attention", "annotation"].includes(value),
  },
  outline: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.label {
  font-size: 0.625rem;
  border: 0.0625rem solid;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  width: fit-content;
  display: inline-block;
  font-weight: 600;

  color: var(--label-color);
  background-color: var(--label-color);
}

.label-success {
  --label-color: var(--slidev-theme-success);
}

.label-attention {
  --label-color: var(--slidev-theme-attention);
}

.label-annotation {
  --label-color: var(--slidev-theme-annotation);
}

.label-outline {
  background-color: transparent;
}

.label-fill {
  color: var(--slidev-theme-anti);
}
</style>
