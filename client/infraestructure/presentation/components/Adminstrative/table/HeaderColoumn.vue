<template>
  <th
    :style="[
      { width: `${widthPerCent}%` },
      { justifyContent: horizontalAlignment },
    ]"
  >
    <button v-if="isSortable" @click="$emit('orderBy', orderBy)" />
    <slot data-slot />
    <span v-if="isSortable"> &nbsp; &duarr; </span>
  </th>
</template>

<script>
export default {
  name: "HeaderColumn",

  props: {
    isSortable: {
      type: Boolean,
      required: true,
    },

    horizontalAlignment: {
      type: String,
      required: true,
    },

    widthPerCent: {
      type: [Number, String],
      required: true,
    },

    orderBy: {
      type: String,
      required: false,
    },

    maxLines: {
      required: false,
      type: [String, Number],
    },
  },
};
</script>

<style scoped>
th {
  position: relative;

  display: flex;
  align-items: center;

  font-size: 1rem;
  color: #414141;
}

button {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: transparent;
  border: none;

  cursor: pointer;
}
</style>
