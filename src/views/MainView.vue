<template>
  <section class="xl:container mx-auto px-2">
    <base-search />
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-16 gap-6">
      <base-card
        v-for="(item, index) in countriesData"
        :key="index"
        :img-url="item.flags.png"
        :title="item.name"
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
      card: BaseCard,
      countriesData: [],
      isLoading: false,
      page: 1,
    };
  },
  created() {
    this.fetchUsers();
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const newData = await apiService.getUsers(
          this.countriesData.length,
          10,
        );
        this.countriesData = [...this.countriesData, ...newData];
        console.log("this.countriesData", this.countriesData);
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      } finally {
        this.isLoading = false;
      }
    },

    handleScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !this.isLoading
      ) {
        this.fetchUsers();
      }
    },
    moreInfo() {
      console.log("переход");
    },
  },
};
</script>
