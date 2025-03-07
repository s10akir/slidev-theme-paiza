<template>
  <div class="slidev-layout cover text-white" :class="$slidev.themeConfigs?.service">
    <div class="my-auto w-full">
      <slot />
      <svg class="cover-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 58.49">
        <path
          d="M30 0C13.45 0 0 13.12 0 29.24s13.45 29.25 30 29.25 30-13.12 30-29.27S46.52 0 30 0zm13.56 47.22C41.3 46 38.23 44.35 36.19 43l-.68-.44c-3.11-2-6.07-4-6.07-7.81a8.5 8.5 0 01.1-1.23c.39-2.6 4.22-3 4.5-3a65.91 65.91 0 018.84 1.21 25.24 25.24 0 016 1.7 1 1 0 00.88 0 1 1 0 00.57-.66 3.23 3.23 0 00.07-.69c0-.94-.33-2.68-2.35-4.7a16.26 16.26 0 00-5.56-3.82 25.84 25.84 0 00-8.84-8.21 18.29 18.29 0 00-6.27-3.81c-6.65-2.68-9.56.23-9.68.36a.42.42 0 00-.13.33.34.34 0 000 .2.49.49 0 00.44.31 26 26 0 013.87 1A11.4 11.4 0 0016.81 17l-.12.12a14.52 14.52 0 00-3.18 14.65c1.38 4.55 4.33 7.12 7.18 9.61a32.91 32.91 0 013.84 3.72 15.81 15.81 0 013.16 6.28C16.06 50.22 7 40.71 7 29.18 7 16.91 17.29 6.92 30 6.92s23 10 23 22.3a22 22 0 01-9.44 18z"
          fill="#fff"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  service: {
    type: String,
    default: 'career',
  }
});
</script>

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
