<template>
  <div class="card">
    <div :style="`background-image: url(${image})`" class="card__image" />
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },

    description: {
      required: true,
      type: String,
    },

    image: {
      required: true,
      type: String,
    },

    width: {
      required: false,
      type: String,
    },
  },
});
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  width: 100%;
  height: 100%;

  padding: 0.5rem;
  box-sizing: border-box;

  cursor: pointer;
  transition: 0.2s all linear;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0 0 0 / 20%);
  transform: scale(1.02);
}

.card__image {
  width: 100%;
  height: 150px;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.card__content {
  padding: 0.5rem 0.5rem 0.5rem 0;
  box-sizing: border-box;
  width: 100%;
}

.card__title {
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: bold;
  color: #484848;
  margin-bottom: 0.5rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__description {
  font-size: 0.9rem;
  color: #4e4e4e;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;

  line-height: 1.2rem;
}

@media screen and (min-width: 420px) {
  .card__image {
    height: 200px;
  }
}

@media screen and (min-width: 500px) {
  .card__image {
    height: 250px;
  }
}

@media screen and (min-width: 600px) {
  .card__image {
    height: 200px;
  }
}

@media screen and (min-width: 1400px) {
  .card__image {
    height: 250px;
  }
}
</style>
