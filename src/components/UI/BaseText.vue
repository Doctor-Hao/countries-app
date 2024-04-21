<template>
  <component
    :is="tag"
    :style="{
      fontSize: calcSize,
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
      type: Number,
      default: 16,
    },
    adaptiveSize: {
      type: Number,
      default: 0,
      required: false,
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
  computed: {
    calcSize() {
      return `calc(${this.size - this.adaptiveSize}px + ${this.adaptiveSize} * ((100vw - 320px) / 1920))`;
    },
  },
};
</script>
