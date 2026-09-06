<template>
  <aside class="slide-note">
    <slot />
  </aside>
</template>

<style scoped>
.slide-note {
  position: absolute;
  inset-inline: var(--slidev-theme-frame-inset);
  bottom: 0.65rem;
  z-index: 2;
  margin: 0;
  color: var(--slidev-theme-annotation);
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.35;
  text-align: left;
  white-space: nowrap;
}
</style>
