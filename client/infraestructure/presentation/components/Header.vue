<template>
  <header class="header">
    <button
      class="button"
      aria-label="Botão para abri o menu"
      @click="toggleMenu"
    >
      <div :class="['btn', { open: isMenuOpened }]" />
    </button>
    <router-link :to="{ name: 'home' }">
      <img
        class="logo"
        width="158"
        height="40"
        src="../assets/static/logo-360px.webp"
        alt="Logo do grêmio estudantil (auto falante)"
      />
    </router-link>
  </header>
</template>

<script lang="ts">
import store from "../../../infraestructure/repository/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Header",

  setup() {
    function toggleMenu() {
      store.dispatch("toggleMenu");
    }

    const isMenuOpened = computed(() => {
      return store.getters.isMenuOpened;
    });

    return { isMenuOpened, toggleMenu };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: -webkit-sticky;
  position: sticky;
  height: 60px;

  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  padding: 0 1rem;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  background: var(--background-color);

  z-index: 1;
}

.button {
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.btn {
  position: relative !important;

  display: flex !important;
  justify-content: center !important;

  height: 2px !important;
  width: 30px !important;
  padding: 0 !important;

  background: #121212 !important;
  transition: 0.2s all ease-in-out;

  z-index: 999999;
}

.btn::before {
  content: "";
  position: absolute;

  width: 100%;
  height: 2px;
  top: -0.5rem;

  background: #121212;
  transition: 0.2s all ease-in-out;
}

.btn::after {
  content: "" !important;
  position: absolute !important;

  width: 100% !important;
  height: 2px !important;
  bottom: -0.5rem !important;

  background: #121212 !important;
  transition: 0.2s all ease-in-out;
}

.btn.open {
  align-items: center;
  transition: 0.2s all ease-in-out;
  transform: translateY(-2px) rotate(45deg);
}

.btn.open::before {
  transition: 0.2s all ease-in-out;
  opacity: 0;
}

.btn.open::after {
  transition: 0.2s all ease-in-out;
  transform: translateY(-8px) rotate(90deg);
}
</style>
