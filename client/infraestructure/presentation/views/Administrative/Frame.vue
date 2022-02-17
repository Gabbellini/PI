<template>
  <div class="frame">
    <div class="frame__left">
      <Logo class="top" />
      <Menu class="bottom" />
    </div>
    <div class="frame__right">
      <Header class="top" />
      <router-view class="bottom main"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Menu from "../../components/Adminstrative/frames/Menu.vue";
import Header from "../../components/Adminstrative/frames/Header.vue";
import Logo from "../../components/Adminstrative/frames/Logo.vue";

export default {
  name: "frame",

  components: { Header, Menu, Logo },
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

.main {
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

.frame__right {
  flex: 1;
}
</style>
