<template>
  <form class="form" @submit.prevent="login">
    <h1 class="form__title">Login</h1>
    <p class="form__description">
      Acesse a plataforma para cadastrar novas noticias
    </p>

    <div class="form__inputs">
      <base-input
        id="mail"
        v-model:model-value="email"
        label="Email"
        name="email"
        type="email"
      />
      <base-input
        id="password"
        v-model:model-value="password"
        label="Senha"
        name="password"
        type="password"
      />
    </div>

    <input class="form__button" type="submit" value="Entrar" />
  </form>
</template>

<script lang="ts">
import BaseInput from "../Student/Home/BaseInput.vue";
import { ref } from "vue";
export default {
  name: "Login",
  components: { BaseInput },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(_: any, { emit }: any) {
    const email = ref("");
    const password = ref("");

    const login = () => {
      const credentials = {
        email: email.value,
        password: password.value,
      };
      emit("login", credentials);
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.form {
  border: 1px solid rgba(0 0 0 / 20%);
  width: 90%;
  max-width: 350px;
  height: fit-content;
  min-height: 300px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 1.5rem;
}

.form__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4e4e4e;
}

.form__description {
  color: #4e4e4e;
}

.form__inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form__button {
  width: 100px;
  height: 40px;
  cursor: pointer;

  text-transform: uppercase;
  letter-spacing: 1px;

  border: none;

  background: #121212;
  color: #fff;

  opacity: 0.75;
  transition: 0.2s all;
}

.form__button:hover {
  opacity: 1;
}
</style>
