<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>

<style>
.default {
  padding-left: 5.5rem;
  padding-right: 5.5rem;
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;

  outline: 0.125rem solid var(--slidev-theme-career-primary);
  outline-offset: -2rem;

  h1 {
    font-weight: 700;
  }
}
</style>
