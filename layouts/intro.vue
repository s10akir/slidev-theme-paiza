<template>
  <div class="slidev-layout intro" :class="$slidev.themeConfigs?.service">
    <div class="grid grid-cols-4 h-full" style="">
      <div class="band-title flex items-center justify-center">
        <h1></h1>
      </div>
      <div class="content col-span-3 h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  padding: 0rem;
  height: 100%;

  outline: 0.125rem solid var(--slidev-theme-primary);
  outline-offset: -2rem;

  .band-title {
    text-align: center;
    height: 100%;

    color: white;

    margin-left: 50%;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    background-color: var(--slidev-theme-primary);

    writing-mode: vertical-rl;
    text-orientation: sideways;
  }

  .content {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
}
</style>
