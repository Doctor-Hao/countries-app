<template>
  <section class="xl:container mx-auto px-2 mb-10">
    <base-router-back />
  </section>
</template>

<script>
import BaseRouterBack from "@/components/UI/BaseRouterBack.vue";
import apiService from "../api/countries";

export default {
  components: { BaseRouterBack },
  data() {
    return {
      countryDetails: {},
    };
  },
  created() {
    this.getCountryDetails(this.$route.params.id);
  },
  mounted() {},
  methods: {
    async getCountryDetails(countryName) {
      try {
        this.countryDetails = await apiService.getCountryDetails(countryName);
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      }
    },
  },
};
</script>
