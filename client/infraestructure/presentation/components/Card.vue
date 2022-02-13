<template>
  <div :style="`background-image: url(${image})`" class="card">
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

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
      required: false,
      type: String,
      default: () => "",
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

  width: 350px;
  height: 200px;

  border-radius: 7px;

  background-color: rgba(0, 0, 0, 0.5) !important;
  background-blend-mode: color !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;

  box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.4);
  margin: 1rem 0;
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  height: 100%;
  width: 100%;

  gap: 0.5rem;

  padding: 0.8rem;
  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.35);
  color: #fafafa;

  border-radius: 4px;
}

.card__title {
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.5rem;
}

.card__description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;

  line-height: 1.2rem;
}
</style>
