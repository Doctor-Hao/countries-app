<template>
  <div class="xl:container mx-auto px-2">
    <base-search />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import BaseSearch from "@/components/UI/BaseSearch";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    BaseSearch,
    HelloWorld,
  },
};
</script>
