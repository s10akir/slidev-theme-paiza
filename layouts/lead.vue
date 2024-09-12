<template>
  <div class="slidev-layout lead">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.lead {
  outline: 0.125rem solid var(--slidev-theme-blue);
  outline-offset: -2rem;
}
</style>
