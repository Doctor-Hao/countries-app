<template>
  <div class="xl:container mx-auto px-2">
    <base-search />
    <base-card :title="title" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import BaseSearch from "@/components/UI/BaseSearch";
import BaseCard from "@/components/UI/BaseCard";
import HelloWorld from "@/components/HelloWorld.vue";
import apiService from "../api/countries";

export default {
  name: "HomeView",
  components: {
    BaseCard,
    BaseSearch,
    HelloWorld,
  },
  data() {
    return {
      title: "Germany",
      countriesData: [],
    };
  },
  mounted() {
    this.countriesData = apiService.getUsers();
  },
  methods: {},
};
</script>
