<template>
  <div
    @click="handleClick"
    class="cursor-pointer w-full bg-white border-none rounded-sm shadow-sm g-white shadow-md hover:shadow-lg transition duration-300 ease-in-out lg:pb-12 pb-6 hover:scale-105"
  >
    <div class="w-full h-40 object-cover mx-auto mb-5 shadow-sm">
      <img :src="imgUrl" alt="img countries" class="w-full h-40 object-cover" />
    </div>
    <div class="lg:px-6 px-3">
      <div class="lg:pt-6 lg:pb-4 pt-3 pb-3">
        <base-text size="18px" weight="800" :text="title" tag="p" />
      </div>
      <ul class="flex flex-col gap-1">
        <li class="flex gap-1">
          <base-text size="14px" weight="600" text="Population:" tag="p" />
          <base-text size="14px" weight="300" :text="population" tag="p" />
        </li>
        <li class="flex gap-1">
          <base-text size="14px" weight="600" text="Region:" tag="p" />
          <base-text size="14px" weight="300" :text="region" tag="p" />
        </li>
        <li class="flex gap-1">
          <base-text size="14px" weight="600" text="Capital:" tag="p" />
          <base-text size="14px" weight="300" :text="capital" tag="p" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseText from "@/components/UI/BaseText";
export default {
  components: { BaseText },
  props: {
    imgUrl: String,
    title: String,
    population: Number,
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
