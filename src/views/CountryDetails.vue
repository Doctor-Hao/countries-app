<template>
  <section class="xl:container mx-auto px-5 mb-10">
    <base-router-back />
    <div
      class="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 lg:my-20 my-10"
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
      <div>
        <div class="mb-5">
          <base-text
            size="2em"
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
                :size-name="'16px'"
                :description="countryDetails.nativeName"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Population:'"
                :size-name="'16px'"
                :description="countryDetails.population"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Region:'"
                :size-name="'16px'"
                :description="countryDetails.region"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Sub Region:'"
                :size-name="'16px'"
                :description="countryDetails.subregion"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Capital:'"
                :size-name="'16px'"
                :description="countryDetails.capital"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Top Level Domain:'"
                :size-name="'16px'"
                :description="countryDetails.topLevelDomain"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Currencies:'"
                :size-name="'16px'"
                :description="countryDetails.currencies"
                :size-description="'16px'"
              />
            </li>
            <li>
              <base-description
                :name="'Languages:'"
                :size-name="'16px'"
                :description="countryDetails.languages"
                :size-description="'16px'"
              />
            </li>
          </ul>
        </div>
        <div>
          <base-description
            :name="'Border Countries:'"
            :size-name="'16px'"
            :description="countryDetails.borderCountries"
            :size-description="'16px'"
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

export default {
  components: { BaseRouterBack, BaseDescription, BaseText },
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
        console.log("countryDetails", this.countryDetails);
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
      }
    },
  },
};
</script>
