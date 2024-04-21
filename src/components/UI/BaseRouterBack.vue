<template>
  <button
    @click="goBack"
    class="btn-back flex gap-3 px-10 py-3 bg-white rounded-md transition duration-300 ease-in-out"
  >
    <svg
      width="20"
      height="22"
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z"
        fill="#111517"
      />
    </svg>
    <base-text :size="16" :adaptive-size="2" weight="300" text="Back" tag="p" />
  </button>
</template>

<script>
import BaseText from "@/components/UI/BaseText";

export default {
  components: { BaseText },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.btn-back:hover {
  box-shadow: 0px 0px 7px var(--box-shadow-main);
}
</style>
