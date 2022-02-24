<template>
  <div class="content">
    <sub-header
      :button-form="actionName"
      :button-title="actionName"
      :title="`${actionName} notícia`"
      button-type="submit"
    />
    <news-form
      v-if="news.ID || actionName === 'Cadastrar'"
      :id="actionName"
      v-model:news="news"
      :news="news"
      @submit="submit"
    />
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { newsUseCases } from "../../../../domain/usecases/news_use_cases";
import router from "@/router";
import { News } from "../../../../domain/entitites/news";
import SubHeader from "../../components/Adminstrative/table/SubHeader";
import NewsForm from "../../components/Adminstrative/forms/NewsForm";
export default {
  name: "NewsManager",
  components: { NewsForm, SubHeader },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const news = ref(new News());
    const actionName = ref("");
    let route;
    const ViewConfigByRouteName = {
      edit_news: { title: "Editar", method: "edit" },
      register_news: { title: "Cadastrar", method: "register" },
    };

    onBeforeMount(async () => {
      await loadNews();
      await loadRouteConfigs();
    });

    const loadNews = async () => {
      try {
        const id = Number(router.currentRoute.value.params.id);
        news.value = await newsUseCases.get(id);
      } catch (e) {
        console.log(e);
      }
    };

    const loadRouteConfigs = () => {
      route = router.currentRoute.value;
      actionName.value = ViewConfigByRouteName[route.name].title;
    };

    const submit = async () => {
      const action = ViewConfigByRouteName[route.name].method;
      if (action === "edit") {
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
      actionName,
      submit,
    };
  },
};
</script>

<style scoped>
.content {
  display: grid;
  place-items: center;
  width: 100%;
  grid-gap: 2rem;
}
</style>
