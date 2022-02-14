<template>
  <div class="menu">
    <nav :class="['nav', isMenuOpened ? 'open' : 'close']">
      <ul class="list">
        <li class="item item--goal">Nossos objetivos</li>
        <li class="item item--contact">Entre em contato</li>
        <li class="item item--newspaper">Jornal do grêmio</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import store from "../../../../repository/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    function toggleMenu() {
      store.dispatch("toggleMenu");
    }

    const isMenuOpened = computed(() => {
      return store.getters.isMenuOpened;
    });

    return {
      isMenuOpened,
      toggleMenu,
    };
  },
});
</script>

<style scoped>
.nav {
  position: fixed !important;
  height: 100vh !important;
  top: 60px !important;
  left: 0 !important;
  z-index: 999998;

  background: #181818;
  box-shadow: 2px 0 4px #00000084;
}

.list {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  box-sizing: border-box;
}

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--background-color);
  overflow: hidden;
  padding: 1rem 0;
  text-overflow: clip;
  white-space: nowrap;

  cursor: pointer;
}

.item:hover {
  background: #2d2d2d;
}

.item--goal::before {
  content: url("../../../../../infraestructure/presentation/assets/static/goal.png");
  position: relative;
}

.item--newspaper::before {
  content: url("../../../../../infraestructure/presentation/assets/static/newspaper.png");
  position: relative;
}

.item--contact::before {
  content: url("../../../../../infraestructure/presentation/assets/static/contact.png");
  position: relative;
}

.nav.close {
  animation: close-menu 0.25s forwards ease-in-out;
}

.nav.open {
  animation: open-menu 0.25s forwards ease-in-out;
}

@keyframes close-menu {
  from {
    width: 250px;
  }

  to {
    width: 0;
  }
}

@keyframes open-menu {
  from {
    width: 0;
  }

  to {
    width: 250px;
  }
}
</style>
