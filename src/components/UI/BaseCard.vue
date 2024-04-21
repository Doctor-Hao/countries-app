<template>
  <div
    @click="handleClick"
    class="cursor-pointer w-full bg-white border-none rounded-sm shadow-sm g-white shadow-md hover:shadow-lg transition duration-300 ease-in-out lg:pb-12 pb-6 hover:scale-105"
  >
    <div class="w-full h-40 object-cover mx-auto mb-5 shadow-sm">
      <img :src="imgUrl" :alt="title" class="w-full h-40 object-cover" />
    </div>
    <div class="lg:px-6 px-3">
      <div class="lg:pt-6 lg:pb-4 pt-3 pb-3">
        <base-text :size="18" weight="800" :text="title" tag="p" />
      </div>
      <ul class="flex flex-col gap-1">
        <base-description
          :name="'Population:'"
          :size-name="14"
          :description="population"
          :size-description="14"
        />
        <base-description
          :name="'Region:'"
          :size-name="14"
          :description="region"
          :size-description="14"
        />
        <base-description
          :name="'Capital:'"
          :size-name="14"
          :description="capital"
          :size-description="14"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import BaseText from "@/components/UI/BaseText";
import BaseDescription from "@/components/UI/BaseDescription";
export default {
  components: { BaseText, BaseDescription },
  props: {
    imgUrl: String,
    title: String,
    population: [String, Number],
    region: String,
    capital: String,
  },
  methods: {
    handleClick() {
      this.$emit("cardClicked", {
        title: this.title,
      });
    },
  },
};
</script>
