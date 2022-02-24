<template>
  <button class="btn" @click="$emit('click')">
    <span class="btn__icon">{{ image }}</span>
    <span :class="['btn__title']"> {{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      required: true,
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  border: 1px solid #2491e4;

  min-height: 30px;
  padding: 0 1rem;

  color: #2491e4;
  background: transparent;

  cursor: pointer;
  transition: 0.2s all ease-in-out;

  border-radius: 2px;
}

.btn:hover,
.btn:focus {
  background: #2491e4;
  color: #fff;
  outline: none;
}

@media screen and (max-width: 420px) {
  .btn {
    position: fixed;
    right: 1rem;
    bottom: 1rem;

    z-index: 5;

    width: 40px;
    height: 40px;

    padding: 0;
    border-radius: 50%;

    color: #fff;
    background: #2491e4;

    box-shadow: 0 2px 10px #2491e480;
  }

  .btn__icon {
    font-size: 1.2rem;
  }

  .btn__title {
    display: none;
  }
}
</style>
