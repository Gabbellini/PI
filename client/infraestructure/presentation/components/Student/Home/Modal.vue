<template>
  <div class="modal" @click="$emit('toggleModal')">
    <div class="content" @click.stop>
      <button class="modal__btn" @click.stop="$emit('toggleModal')" />
      <div
        :style="{ backgroundImage: `url(${news.image})` }"
        class="content__image"
      />
      <div class="content__information">
        <div class="content__title">{{ news.title }}</div>
        <p class="content__description">{{ news.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Modal",

  props: {
    news: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  background: rgba(0 0 0 / 70%);
  backdrop-filter: blur(3px);
  z-index: 5;
}

.modal__btn {
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  border: none;
  border-radius: 50%;

  background: #fafafa;
  z-index: 5;

  cursor: pointer;
}

.modal__btn::before,
.modal__btn::after {
  position: absolute;
  content: "";
  width: 50%;
  height: 1px;

  background: #000;
  border-radius: 4px;
}

.modal__btn::after {
  transform: rotate(45deg);
}

.modal__btn::before {
  transform: rotate(-45deg);
}

.content {
  position: relative;
  width: 90vw;
  height: 90vh;

  max-width: 700px;
  max-height: 1100px;

  background: #fafafa;

  animation: fade-in 0.2s forwards;
}

.content__image {
  width: 100%;
  height: 35%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content__information {
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 65%;
  overflow-y: auto;
}

.content__title {
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: bold;
  color: #484848;
}

.content__description {
  font-size: 0.9rem;
  color: #4e4e4e;
  line-height: 1.5rem;
}

@keyframes fade-in {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
