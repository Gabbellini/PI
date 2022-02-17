<template>
  <button class="btn" @click="$emit('click')">
    <span v-if="image" class="btn__icon" role="none">{{ image }}</span>
    <slot />
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    image: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  gap: 0.5rem;

  border: 1px solid #2491e4;

  padding: 0.5rem 1rem;

  color: #2491e4;
  background: transparent;

  cursor: pointer;
  transition: 0.2s all ease-in-out;

  border-radius: 2px;
}

.btn:hover {
  background: #2491e4;
  color: #fff;
}
</style>
