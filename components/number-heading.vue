<template>
  <div class="flex items-baseline">
    <div :class="getNoClass()" style="color: var(--slidev-theme-career-primary)">
      {{ no }}
    </div>
    <div :class="getTextClass() + (underline === true ? ' underline' : '')">{{ text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  no: Number,
  text: String,
  variant: "large" | null,
  underline: Boolean,
});

const getNoClass = () => {
  switch (props.variant) {
    case "large":
      return "text-8xl font-bold pr-2";
    case "inline":
      return "font-bold pr-2";
    default:
      return "text-5xl font-bold pr-2";
  }
};

const getTextClass = () => {
  switch (props.variant) {
    case "large":
      return "text-4xl";
    case "inline":
      return "";
    default:
      return "text-2xl";
  }
};
</script>
