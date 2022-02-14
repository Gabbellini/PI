<template>
  <button :class="actionType" :disabled="disabled" @click="$emit('click')">
    {{ content }}
  </button>
</template>

<script lang="ts">
export default {
  name: "ActionButton",

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    content: {
      type: String,
      required: false,
      default: "",
    },

    actionType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  width: fit-content;
  height: 30px;

  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;

  border: 1px solid #4e4e4e;
}

button:hover {
  background: #4e4e4e;
  color: #fff;
}
</style>
