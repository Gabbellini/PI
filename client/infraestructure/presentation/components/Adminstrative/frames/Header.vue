<template>
  <header class="header">
    <div>
      <button class="header__btn" @click.prevent="toggleMenu">
        <span class="header__btn__icon" />
      </button>
      <h2 class="header__title">Noticias</h2>
    </div>
    <div class="header__profile">Olá, {{ name || "Bellini" }} &#9662;</div>
  </header>
</template>

<script>
import store from "../../../../../infraestructure/repository/store";
export default {
  name: "Header",

  props: {
    name: {
      required: false,
      type: String,
    },
  },

  setup() {
    let menuWereToggle = false;

    const toggleMenu = async () => {
      await store.dispatch("menu_state/toggle");
      await loadMenuInitialState();
    };

    const loadMenuInitialState = async () => {
      if (!menuWereToggle) {
        await store.dispatch("menu_state/toggleAnimation");
      }

      menuWereToggle = true;
    };

    return {
      toggleMenu,
    };
  },
};
</script>

<style>
.header__title {
  color: #2491e4;
}

.header__btn {
  display: none;
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

@media screen and (max-width: 1024px) {
  .header > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .header__btn {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    width: 30px;
    height: 30px;

    cursor: pointer;

    border: none;
    background: transparent;
  }

  .header__btn__icon {
    position: relative;
    display: flex;
    gap: 1rem;

    width: 80%;
    height: 2px;

    background: #b7cad9;
  }

  .header__btn__icon::before, .header__btn__icon::after {
    position: absolute;
    content: "";
    height: inherit;
    width: 100%;

    background: inherit;
  }

  .header__btn__icon::before {
    bottom: 300%;
  }

  .header__btn__icon::after {
    top: 300%;
  }

}
</style>
