<template>
  <base-header />
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
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
