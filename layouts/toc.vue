<template>
  <div class="slidev-layout toc">
    <div class="grid grid-cols-4 h-full" style="">
      <div class="toc-title flex items-center justify-center">
        <h1>TABLE OF CONTENTS</h1>
      </div>
      <div class="content col-span-3 h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.toc {
  padding: 0rem;
  height: 100%;

  .toc-title {
    text-align: center;
    height: 100%;

    color: white;

    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    background-color: var(--slidev-theme-blue);

    writing-mode: vertical-rl;
    text-orientation: sideways;

    outline: 0.125rem solid var(--slidev-theme-white);
    outline-offset: -2rem;
  }

  .content {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
}
</style>
