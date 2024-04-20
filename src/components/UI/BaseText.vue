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
      type: String,
      default: "300",
    },
    text: {
      type: [String, Number],
      default: "",
    },
    tag: {
      type: String,
      default: "div",
    },
  },
};
</script>
