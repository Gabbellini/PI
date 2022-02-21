<template>
  <button
    class="btn"
    @click.stop="toggleModal"
    @focus="toggleModal"
    @touch="toggleModal"
    @mouseenter="toggleModal"
    @mouseleave="toggleModal"
  >
    <div class="btn__point" />
    <div class="menu" v-if="isModalOpened" @mouseenter.stop>
      <ul class="menu__list">
        <li class="menu__item">
          <button
            @click.stop="$emit('action', 'edit')"
            class="menu__button"
          >
            Editar
          </button>
        </li>
        <li class="menu__item">
          <button
            @click.stop="$emit('action', 'remove')"
            class="menu__button"
            @blur="toggleModal"
          >
            Remover
          </button>
        </li>
      </ul>
    </div>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "actionMenu",

  setup() {
    const isModalOpened = ref(false);

    const handleClickEvents = () => {
      isModalOpened.value = !isModalOpened.value;
    };

    const handleFocusEvents = () => {
      isModalOpened.value = !isModalOpened.value;
    };

    const handleMouseEvents = () => {
      isModalOpened.value = !isModalOpened.value;
    };

    const toggleModal = (e: Event | MouseEvent) => {
      e.stopImmediatePropagation();

      console.log(e.type);

      switch (e.type) {
        case "click":
        case "touch":
          handleClickEvents();
          break;
        case "focus":
        case "blur":
          handleFocusEvents();
          break;
        case "mouseenter":
        case "mouseleave":
          handleMouseEvents();
          break;
      }
    };

    return {
      isModalOpened,
      toggleModal,
    };
  },
};
</script>

<style scoped>
.trigger-area {
  position: fixed;
  z-index: 5;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  border: none;
  border-radius: 50%;
  background: transparent;

  cursor: pointer;
  transition: 0.2s all ease-in-out;
}

.btn__point {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 0.17rem;
  min-width: 0.17rem;

  border-radius: 50%;
  border: 1px solid #b7cad9;

  padding: 0;

  transition: 0.2s all ease-in-out;
}

.btn:hover .btn__point, .btn:focus .btn__point {
  background: #b7cad9;
}

.btn:focus {
  outline: none;
}

.btn__point::before,
.btn__point::after {
  position: absolute;
  display: flex;
  content: "";

  min-width: inherit;
  min-height: inherit;

  padding: inherit;

  border: inherit;
  border-radius: inherit;

  background: inherit;
}

.btn__point::before {
  top: calc(100% + 0.2rem);
}

.btn__point::after {
  bottom: calc(100% + 0.2rem);
}

.menu {
  position: absolute;
  top: 0;
  left: 80%;
  width: 100px;
  height: fit-content;

  border-radius: 2px;
  background: #fff;
  z-index: 9;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu__item:not(.menu__item:last-of-type) {
  border-bottom: 1px solid #b7cad957;
}

.menu__button {
  width: 100%;
  height: 25px;

  text-align: left;
  text-transform: uppercase;

  font-size: 0.65rem;

  border: none;
  background: #fff;
  color: #677783;

  cursor: pointer;
  z-index: 999;

  transition: 0.1s all ease-in-out;
}

.menu__button:hover, .menu__button:focus {
  background: #2491e4;
  color: #fff;
  outline: none;
}

.menu__line {
  height: calc(1rem / 60);

  margin: 0;
  border: none;
}

@media screen and (max-width: 900px) {
  .menu {
    left: -280%;
    top: 120%;
  }
}
</style>
