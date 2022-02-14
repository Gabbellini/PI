<template>
  <div class="content">
    <login @login="login($event)" />
  </div>
</template>

<script lang="ts">
import Login from "../../components/Adminstrative/Login.vue";
import { Credentials } from "../../../../domain/entitites/Credentials";
import { authenticationUseCases } from "../../../../domain/usecases/authentication_use_cases";
import router from "../../../../src/router";

export default {
  name: "login-view",
  components: { Login },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const login = async (credentials: Credentials) => {
      try {
        await authenticationUseCases.login(credentials);
        localStorage.setItem("userIsLogged", "true");
        await router.push({ name: "news" });
      } catch (e) {
        console.log(e);
      }
    };

    return {
      login,
    };
  },
};
</script>

<style scoped>
.content {
  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;
}
</style>
