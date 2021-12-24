<template>
  <form
    class="form"
    action="https://formsubmit.co/9c32e7ea270c9f55ed91e6a53303652e"
    method="POST"
  >
    <div class="contain-fields">
      <div class="field">
        <label class="label" for="name">Nome</label>
        <input
          class="input"
          maxlength="80"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>

      <div class="field">
        <label class="label" for="email">Email</label>
        <input
          class="input"
          maxlength="100"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label" for="message">Mensagem</label>
      <textarea
        class="input input--textarea"
        maxlength="240"
        name="message"
        id="message"
        cols="30"
        rows="5"
      />
    </div>

    <input
      class="input"
      type="hidden"
      name="_next"
      value="http://gremio-estudantil-ifsc-gaspar.000webhostapp.com/"
    />
    <input type="hidden" name="_captcha" value="false" />
    <button class="btn" type="submit">Enviar comentário</button>
  </form>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 1rem;
}

.contain-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
}

.label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.input {
  border-radius: 7px;
  min-height: 40px;

  padding: 1rem;
  box-sizing: border-box;

  background: var(--background-color);
  border: var(--block-border);
  color: var(--text-color);
}

.input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
  box-shadow: none;
}

.input--textarea {
  resize: none;
}

.btn {
  width: 100%;
  max-width: 600px;
  min-height: 60px;

  font-size: 1rem;

  background: var(--text-color);
  color: var(--background-color);

  border: none;
  border-radius: 7px;

  cursor: pointer;

  margin-top: 1rem;
}
</style>
