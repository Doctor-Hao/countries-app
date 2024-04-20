<template>
  <base-header />
  <router-view />
</template>

<script>
import BaseHeader from "@/components/BaseHeader";

export default {
  name: "AppView",
  components: {
    BaseHeader,
  },
};
</script>

<style></style>
