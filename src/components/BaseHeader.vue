<template>
  <div
    class="bg-white shadow lg:mb-12 lg:px-3 lg:py-5 px-2 py-2 mb-6"
    style="box-shadow: 0 2px 10px rgba(152, 152, 152, 0.5)"
  >
    <div class="xl:container mx-auto">
      <router-link to="/">
        <base-text
          class="inline-block transition duration-300 ease-in-out hover:text-blue-500"
          size="24px"
          weight="800"
          :text="text"
          tag="h1"
      /></router-link>
    </div>
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
  data() {
    return {
      text: "Where in the world?",
    };
  },
};
</script>

<style scoped lang="scss"></style>
