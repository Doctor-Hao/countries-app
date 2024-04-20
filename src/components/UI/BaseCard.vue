<template>
  <div class="bg-white border-none rounded-sm shadow-sm">
    <div class="w-full max-h-160 mb-5">
      <img src="#" alt="img" />
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
</template>

<script>
import BaseText from "@/components/UI/BaseText";
export default {
  name: "HelloWorld",
  components: { BaseText },
  props: {
    title: String,
  },
};
</script>
