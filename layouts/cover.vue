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
  background-color: var(--slidev-theme-primary);
  color: var(--slidev-theme-anti);
  outline: 0.125rem solid var(--slidev-theme-anti);
  outline-offset: -2rem;
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
