<template>
  <component :is="tag" :style="{ fontSize: size }">{{ text }}</component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "16px",
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
