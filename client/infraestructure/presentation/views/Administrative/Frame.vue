<template>
  <div class="frame">
    <span :class="['trigger-area', { visible: isMenuOpened }]" @click="toggleMenu"/>
    <div
      :class="[
        'frame__left',
        { open: shouldApplyAnimation && isMenuOpened },
        { close: shouldApplyAnimation && !isMenuOpened },
      ]"
    >
      <Logo class="top" />
      <Menu class="bottom" />
    </div>
    <div class="frame__right">
      <Header class="top" />
      <div class="view bottom">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Menu from "../../components/Adminstrative/frames/Menu.vue";
import Header from "../../components/Adminstrative/frames/Header.vue";
import Logo from "../../components/Adminstrative/frames/Logo.vue";
import { computed, ComputedRef, onBeforeMount } from "vue";
import store from "../../../../infraestructure/repository/store";

export default {
  name: "frame",
  components: { Header, Menu, Logo },

  setup() {
    onBeforeMount(async () => {
      await loadMenuInitialState();
    });

    const isMenuOpened: ComputedRef<boolean> = computed(() => {
      return store.getters["menu_state/isOpen"];
    });

    const shouldApplyAnimation: ComputedRef<boolean> = computed(() => {
      return store.getters["menu_state/shouldAnimate"];
    });

    const loadMenuInitialState = async () => {
      await handleMenuResposivity();
      window.addEventListener("resize", handleMenuResposivity);
    };

    const handleMenuResposivity = async (): Promise<void> => {
      if (window.innerWidth <= 1024) {
        await store.dispatch("menu_state/setMenuState", false);
      } else {
        await store.dispatch("menu_state/setMenuState", true);
      }
    };

    const toggleMenu = async () => {
      await store.dispatch("menu_state/toggle");
    };

    return {
      isMenuOpened,
      shouldApplyAnimation,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&display=swap");
* {
  font-family: "Inter", sans-serif;
}

.frame {
  display: flex;

  height: 100vh;
  width: 100vw;

  border-radius: 6px;
  background: #fff;
}

.top {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  box-sizing: border-box;
}

.bottom {
  height: calc(100% - 5rem);
  border-top: 1px solid #b7cad9;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.view {
  display: flex;
  padding: 2rem 10vw;
  flex-direction: column;
  align-items: center;
  background: #f9fbfc;
  overflow-y: auto;
}

.frame__left {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 13rem;
  border-right: 1px solid #b7cad9;
}

.frame__left.open {
  animation: open_menu 0.2s linear forwards;
}

.frame__left.close {
  animation: close_menu 0.2s linear forwards;
}

.frame__right {
  width: calc(100% - 13rem);
}

@keyframes open_menu {
  to {
    transform: translateX(0);
  }
  from {
    transform: translateX(-100%);
  }
}

@keyframes close_menu {
  to {
    transform: translateX(-100%);
  }
  from {
    transform: translateX(0);
  }
}

@media screen and (max-width: 1024px) {
  .frame__right {
    flex: 1;
  }

  .frame__left {
    position: absolute;
    background: #fff;
    z-index: 1;
    transform: translateX(-100%);
    z-index: 10;
  }

  .trigger-area {
    display: none;
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 9;

    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.15);
  }

  .trigger-area.visible {
    display: block;
  }
}

@media screen and (max-width: 620px) {
  .view {
    padding: 2rem 5vw;
  }
}
</style>
