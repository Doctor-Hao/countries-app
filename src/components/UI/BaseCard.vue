<template>
  <a href="#" class="w-full">
    <div
      class="w-full bg-white border-none rounded-sm shadow-sm g-white shadow-md hover:shadow-lg transition duration-300 ease-in-out lg:pb-12 pb-6"
    >
      <div class="w-full h-40 object-cover mx-auto mb-5 shadow-sm">
        <img
          :src="imgUrl"
          alt="img countries"
          class="w-full h-40 object-cover"
        />
      </div>
      <div class="lg:px-6 px-3">
        <div class="lg:pt-6 lg:pb-4 pt-3 pb-3">
          <base-text size="18px" weight="800" :text="title" tag="p" />
        </div>
        <div>
          <div class="flex gap-1">
            <base-text size="14px" weight="500" :text="title" tag="span" />
            <base-text size="14px" weight="300" :text="title" tag="p" />
          </div>

          <p>Population: 81,770,900</p>
          <p>Region: Europe</p>
          <p>Capital: Berlin</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import BaseText from "@/components/UI/BaseText";
export default {
  components: { BaseText },
  props: {
    imgUrl: String,
    title: String,
  },
};
</script>
