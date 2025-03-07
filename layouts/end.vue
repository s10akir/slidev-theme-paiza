<template>
  <div class="slidev-layout end text-white" :class="$slidev.themeConfigs?.service">
    <div class="my-auto w-full">
      <slot />
      <img class="end-logo" src="./logo.svg" />
    </div>
  </div>
</template>

<style scoped>
.end {
  background-color: var(--slidev-theme-primary);
  color: var(--slidev-theme-anti);
}

.end-logo {
  position: absolute;
  bottom: -10%;
  right: -5%;
  width: 50%;
  margin: 0;
  padding: 0;
  opacity: 0.3;
}
</style>
