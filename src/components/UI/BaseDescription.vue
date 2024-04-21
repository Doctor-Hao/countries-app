<template>
  <div class="flex gap-1">
    <base-text :size="sizeName" weight="600" :text="name" tag="p" />
    <base-text
      v-if="!Array.isArray(description)"
      :size="sizeDescription"
      weight="300"
      :text="description"
      tag="p"
    />
    <base-text
      v-else
      v-for="(item, index) in description"
      :key="index"
      :size="sizeDescription"
      weight="300"
      :text="item.name ? item.name : item"
      tag="p"
    />
  </div>
</template>

<script>
import BaseText from "@/components/UI/BaseText";

export default {
  components: { BaseText },
  props: {
    sizeName: String,
    sizeDescription: String,
    name: String,
    description: [String, Number, Array],
  },
};
</script>
