<template>
  <section class="xl:container mx-auto px-2">
    <base-search />
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:mx-0 md:mx-0 mx-10 lg:gap-16 gap-12"
    >
      <base-card
        v-for="(item, index) in countriesData"
        :key="index"
        :img-url="item.flags.png"
        :title="item.name"
        :population="item.population"
        :region="item.region"
        :capital="item.capital"
        @click="moreInfo"
      />
    </div>
  </section>
</template>

<script>
import BaseSearch from "@/components/UI/BaseSearch";
import BaseCard from "@/components/UI/BaseCard";
import apiService from "../api/countries";

export default {
  components: {
    BaseCard,
    BaseSearch,
  },
  data() {
    return {
      countriesData: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  mounted() {},
  methods: {
    async fetchUsers() {
      try {
        this.countriesData = await apiService.getUsers();
        console.log("this.countriesData", this.countriesData);
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      }
    },
    moreInfo() {
      console.log("переход");
    },
  },
};
</script>
