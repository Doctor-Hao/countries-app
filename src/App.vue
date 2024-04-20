<template>
  <base-header />
  <router-view />
</template>

<script>
import BaseHeader from "@/components/BaseHeader";

export default {
  name: "HomeView",
  components: {
    BaseHeader,
  },
};
</script>

<style>
body {
  font-size: 20px;
}
</style>
