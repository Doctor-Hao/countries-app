<template>
  <div class="bg-white px-sm-20 md:px-30 lg:px-40 py-sm-20 md:py-30 lg:py-40">
    <base-text size="100px" :text="text" tag="h1" />
  </div>
</template>

<script>
import BaseText from "@/components/UI/BaseText";

export default {
  name: "HelloWorld",
  components: { BaseText },
  props: {
    msg: String,
  },
  data: function () {
    return {
      text: "Where in the world?",
    };
  },
};
</script>

<style scoped lang="scss"></style>
