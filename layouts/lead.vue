<template>
  <div class="slidev-layout lead" :class="$slidev.themeConfigs?.service">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.lead {
  outline: 0.125rem solid var(--slidev-theme-primary);
  outline-offset: -2rem;
}
</style>
