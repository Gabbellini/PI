<template>
  {{ isMenuOpened }}
  <div class="menu">
    <nav :class="['nav', isMenuOpened ? 'open' : 'close']">
      <ul class="list">
        <li class="item">
          <router-link :to="{ name: 'news' }" class="link" @click="toggleMenu"
            >Painel adminstrativo</router-link
          >
        </li>
        <li class="item" @click="logout">Sair</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import store from "../../../../repository/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const toggleMenu = async () => {
      await store.dispatch("menu_state/setMenuState", !isMenuOpened.value);
    };

    const isMenuOpened = computed(() => {
      return store.getters["menu_state/isOpen"];
    });

    const logout = () => {
      localStorage.clear();
      alert("Logout realizado");
    };

    return {
      isMenuOpened,
      toggleMenu,
      logout,
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
  height: calc(100% - 60px);
  justify-content: space-between;
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

.nav.close {
  animation: close-menu 0.25s forwards ease-in-out;
}

.nav.open {
  animation: open-menu 0.25s forwards ease-in-out;
}

.link {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
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
