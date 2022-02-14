<template>
  <td
    :style="[
      { width: `${widthPerCent}%` },
      { justifyContent: horizontalAlignment },
    ]"
  >
    <slot />
  </td>
</template>

<script lang="ts">
export default {
  name: "column",

  props: {
    horizontalAlignment: {
      type: String,
      required: true,
    },

    widthPerCent: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style scoped>
td {
  position: relative;
  display: flex;
  align-items: center;

  line-height: 1.2rem;
}
</style>
