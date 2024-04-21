<template>
  <section class="xl:container mx-auto px-2 mb-10">
    <base-search @input-value="handleInput" />
    <div
      v-if="countriesList.length"
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:mx-0 md:mx-0 mx-5 lg:gap-16 gap-12"
    >
      <base-card
        v-for="(item, index) in countriesList"
        :key="index"
        :img-url="item.flag"
        :title="item.name"
        :population="item.population"
        :region="item.region"
        :capital="item.capital"
        @card-clicked="moreInfo"
      />
    </div>
    <div v-else class="flex justify-center">
      <base-text
        size="20px"
        weight="600"
        :text="'Нет данных ' + searchValue"
        tag="p"
      />
    </div>
  </section>
</template>

<script>
import router from "@/router";
import BaseSearch from "@/components/UI/BaseSearch";
import BaseText from "@/components/UI/BaseText";
import BaseCard from "@/components/UI/BaseCard";
import apiService from "../api/countries";

export default {
  components: {
    BaseText,
    BaseCard,
    BaseSearch,
  },
  data() {
    return {
      searchValue: "",
      countriesData: [],
    };
  },
  created() {
    this.getCountries();
  },
  mounted() {},
  computed: {
    countriesList() {
      if (this.searchValue.trim().length > 0) {
        return this.countriesData.filter((county) =>
          county.name
            .toLowerCase()
            .includes(this.searchValue.trim().toLowerCase()),
        );
      }
      return this.countriesData;
    },
  },
  methods: {
    async getCountries() {
      try {
        this.countriesData = await apiService.getCountries();
      } catch (error) {
        console.error("Error: ", error);
      }
    },
    moreInfo(countryName) {
      router.push({
        name: "CountryDetails",
        params: { id: countryName.title },
      });
    },
    handleInput(value) {
      this.searchValue = value;
    },
  },
};
</script>
