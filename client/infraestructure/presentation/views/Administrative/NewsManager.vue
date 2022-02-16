<template>
  <div class="content">
    <form class="form" @submit.prevent="submit">
      <h2 class="form__title">
        {{
          $route.name === "edit_news" ? "Editar Noticia" : "Cadastrar noticias"
        }}
      </h2>
      <div class="form__content">
        <base-input
          id="title"
          v-model:model-value="news.title"
          label="Título"
          name="title"
          required
          type="text"
        />
        <base-input
          id="description"
          v-model:model-value="news.description"
          label="Descrição"
          name="description"
          required
          type="text-area"
        />
        <base-input
          id="url"
          v-model:model-value="news.image"
          label="URL da imagem"
          name="url"
          required
          type="url"
        />
      </div>
      <input
        :value="$route.name === 'edit_news' ? 'Finalizar edição' : 'Cadastrar'"
        class="form__button"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import BaseInput from "../../components/Student/Home/BaseInput";
import { onBeforeMount, ref } from "vue";
import { newsUseCases } from "../../../../domain/usecases/news_use_cases";
import router from "@/router";
import { News } from "../../../../domain/entitites/news";
export default {
  name: "NewsManager",
  components: { BaseInput },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const news = ref(new News());

    onBeforeMount(async () => {
      news.value = await loadNews();
    });

    const loadNews = async () => {
      try {
        const id = Number(router.currentRoute.value.params.id);
        return await newsUseCases.get(id);
      } catch (e) {
        console.log(e);
      }
    };

    const submit = async () => {
      if (router.currentRoute.value.name === "edit_news") {
        await edit();
      } else {
        await register();
      }
    };

    const edit = async () => {
      try {
        await newsUseCases.edit(news.value);
        alert("Noticia editada com sucesso");
      } catch (e) {
        alert("Erro ao editar noticia");
        console.log(e);
      }
    };

    const register = async () => {
      try {
        await newsUseCases.create(news.value);
        alert("Noticia cadastrada com sucesso");
      } catch (e) {
        alert("Erro ao cadastrar noticia");
        console.log(e);
      }
    };

    return {
      news,
      submit,
    };
  },
};
</script>

<style scoped>
.content {
  display: grid;
  place-items: center;
}

.form {
  width: 90%;
  height: fit-content;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 1rem;
  box-sizing: border-box;

  border: 1px solid rgba(0 0 0 / 20%);
}

.form__title {
  font-size: 1.4rem;
  font-weight: bold;

  color: #4e4e4e;
}

.form__content {
  display: grid;
  grid-gap: 2rem;
}

.form__button {
  width: fit-content;
  height: 40px;
  cursor: pointer;

  text-transform: uppercase;
  letter-spacing: 1px;

  border: none;

  background: #4e4e4e;
  color: #fff;

  opacity: 0.85;
  transition: 0.2s all;
}

.form__button:hover {
  opacity: 1;
}
</style>
