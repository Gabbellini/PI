<template>
  <div class="card">
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
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
  },
});
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  justify-content: center;

  width: 240px;
  height: 300px;

  padding: 1rem;
  box-sizing: border-box;
  border-radius: 7px;

  border: var(--block-border);

  transition: 0.2s all ease-in-out;
}

.card:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.card__title {
  position: absolute;
  top: -1.2rem;

  padding: 0.5rem;
  border-radius: 7px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  background: var(--background-color);

  vertical-align: center;
}

.card__description {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  line-height: 1.2rem;
}

.card__description::before {
  display: block;
  content: url("../../assets/static/card-icon.png");
  width: 100px;
  height: 100px;
}
</style>
