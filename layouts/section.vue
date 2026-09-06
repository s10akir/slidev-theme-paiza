<template>
  <div class="slidev-layout section" :class="$slidev.themeConfigs?.service">
    <div class="grid grid-cols-4 h-full">
      <div class="band-title flex items-center justify-center">
        <h1></h1>
      </div>
      <div class="content col-span-3 h-full flex items-center">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  height: 100%;

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
