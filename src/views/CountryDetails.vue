<template>
  <section class="xl:container mx-auto px-5 mb-10">
    <base-router-back />
    <div
      class="grid align-center lg:grid-cols-2 grid-cols-1 lg:gap-60 gap-10 lg:my-20 my-10"
    >
      <div class="flex justify-center rounded-md lg:h-auto h-56">
        <img
          :src="countryDetails.flag"
          :alt="countryDetails.name"
          class="rounded-md lg:h-auto h-56 object-cover"
          style="
            box-shadow: 0px 0px 14px 4px var(--box-shadow-main);
            max-height: 401px;
          "
        />
      </div>
      <div class="flex flex-col align-center justify-center">
        <div class="mb-5">
          <base-text
            :size="32"
            :adaptive-size="10"
            weight="800"
            :text="countryDetails.name"
            tag="h2"
          />
        </div>
        <div class="lg:mb-16 mb-8">
          <ul class="flex flex-col flex-wrap gap-1 lg:h-40">
            <li>
              <base-description
                :name="'Native Name:'"
                :size-name="16"
                :description="countryDetails.nativeName"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Population:'"
                :size-name="16"
                :description="countryDetails.population"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Region:'"
                :size-name="16"
                :description="countryDetails.region"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Sub Region:'"
                :size-name="16"
                :description="countryDetails.subregion"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Capital:'"
                :size-name="16"
                :description="countryDetails.capital"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Top Level Domain:'"
                :size-name="16"
                :description="countryDetails.topLevelDomain"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Currencies:'"
                :size-name="16"
                :description="countryDetails.currencies"
                :size-description="16"
              />
            </li>
            <li>
              <base-description
                :name="'Languages:'"
                :size-name="16"
                :description="countryDetails.languages"
                :size-description="16"
              />
            </li>
          </ul>
        </div>
        <div
          v-if="borderCountries.length"
          class="flex flex-wrap align-center gap-3"
        >
          <base-text
            :size="16"
            weight="600"
            :text="'Border Countries:'"
            tag="p"
            class="sm:w-auto w-full"
          />
          <base-text
            v-for="(item, index) in borderCountries"
            :key="index"
            :size="14"
            weight="300"
            :text="item"
            tag="p"
            class="text-center rounded-sm min-w-24 py-1 px-2"
            style="box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseRouterBack from "@/components/UI/BaseRouterBack.vue";
import BaseDescription from "@/components/UI/BaseDescription.vue";
import BaseText from "@/components/UI/BaseText";
import apiService from "../api/countries";
import helpers from "../helpers/helpers";

export default {
  components: { BaseRouterBack, BaseDescription, BaseText },
  data() {
    return {
      countryDetails: {},
      borderCountries: {},
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
        console.log("this.countryDetails", this.countryDetails);
        if (this.countryDetails.borders)
          this.borderCountries = await helpers.getCountryName(
            this.countryDetails.borders,
          );
      } catch (error) {
        console.error("Error: ", error);
      }
    },
  },
};
</script>
