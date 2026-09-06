<script setup>
const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  showPage: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="paiza-frame" aria-hidden="true">
    <div
      v-if="props.showTitle || $slidev.themeConfigs?.header"
      class="paiza-frame-brand"
    >
      <span
        v-if="props.showTitle && $slidev.configs.title"
        class="paiza-frame-title"
      >
        {{ $slidev.configs.title }}
      </span>
      <span v-if="$slidev.themeConfigs?.header" class="paiza-frame-header">
        {{ $slidev.themeConfigs.header }}
      </span>
    </div>
    <div
      v-if="$slidev.themeConfigs?.footer || props.showPage"
      class="paiza-frame-footer"
    >
      <span v-if="$slidev.themeConfigs?.footer">{{
        $slidev.themeConfigs.footer
      }}</span>
      <span v-if="props.showPage" class="paiza-frame-page">
        {{ String($slidev.nav.currentPage).padStart(2, "0") }}
      </span>
    </div>
  </div>
</template>
