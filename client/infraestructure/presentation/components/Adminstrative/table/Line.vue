<template>
  <tr :style="{ justifyContent: horizontalAlignment }">
    <label v-if="isLabelFor" :for="isLabelFor" />
    <slot />
  </tr>
</template>

<script>
export default {
  name: "t-line",

  props: {
    horizontalAlignment: {
      type: String,
      required: false,
    },

    isLabelFor: {
      type: [String, Number],
      required: false,
    },
  },
};
</script>

<style scoped>
tr {
  position: relative;

  display: flex;
  flex-grow: 1;

  background: transparent;

  padding: 0 1.5rem;

  border-bottom: 1px solid rgba(0 0 0 / 10%);
  height: 50px;

  color: var(--text-color);
  font-size: 0.8rem;
}

label {
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;
}
</style>
