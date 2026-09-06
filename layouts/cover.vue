<template>
  <div class="slidev-layout cover text-white" :class="$slidev.themeConfigs?.service">
    <div class="my-auto w-full">
      <slot />
      <img class="cover-logo" src="./logo.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.cover {
  --slidev-theme-emphasis: var(--slidev-theme-anti);
  background-color: var(--slidev-theme-primary);
  color: var(--slidev-theme-anti);
  outline: var(--slidev-theme-frame-width) solid var(--slidev-theme-anti);
  outline-offset: calc(-1 * var(--slidev-theme-frame-inset));
}

.cover-logo {
  position: absolute;
  bottom: -10%;
  right: -5%;
  width: 50%;
  margin: 0;
  padding: 0;
  opacity: 0.3;
}
</style>
