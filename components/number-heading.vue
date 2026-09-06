<template>
  <div class="flex items-baseline">
    <div :class="getNoClass()" style="color: var(--slidev-theme-primary)">
      {{ no }}
    </div>
    <div :class="getTextClass() + (underline === true ? ' underline' : '')">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  no: Number,
  text: String,
  variant: {
    type: String,
    validator: (value) => ["large", "inline"].includes(value),
  },
  underline: Boolean,
});

const getNoClass = () => {
  switch (props.variant) {
    case "large":
      return "text-8xl font-light pr-4";
    case "inline":
      return "font-light pr-4";
    default:
      return "text-5xl font-light pr-4";
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
