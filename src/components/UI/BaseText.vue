<template>
  <component
    :is="tag"
    :style="{
      fontSize: size,
      fontWeight: weight,
    }"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "16px",
    },
    weight: {
      type: Number,
      default: 300,
    },
    text: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "div",
    },
  },
};
</script>
