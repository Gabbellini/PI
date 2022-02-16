<template>
  <header class="header">
    <h2 class="header__title">Noticias</h2>
    <div class="header__profile">Olá {{ name || "Bellini" }}</div>
  </header>
</template>

<script>
export default {
  name: "Header",

  props: {
    name: {
      required: false,
      type: String,
    },
  },
};
</script>

<style>
.header__title {
  color: #2491e4;
}

.header__profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;

  cursor: pointer;
  font-weight: bold;
  opacity: 0.75;
}

.header__profile::after {
  content: ">";
  transform: rotate(90deg);
}
</style>
