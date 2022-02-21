<template>
  <div class="container">
    <div class="sub-header">
      <h3 class="sub-header__title">Notícias</h3>
      <main-button @click="goToRegiter" image="+" title="Cadastrar notícia" />
    </div>
    <ol class="list">
      <li v-for="(news, index) of arrayOfNews" :key="index">
        <item-block
          :date="news.UpdatedAt"
          :description="news.description"
          :is-active="!news.DeletedAt"
          :title="news.title"
          @click="goToEdition(news)"
          @edit="goToEdition(news)"
          @remove="removeNews(news)"
        />
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import ItemBlock from "../../components/Adminstrative/table/itemBlock.vue";
import { onBeforeMount, ref } from "vue";
import { newsUseCases } from "../../../../domain/usecases/news_use_cases";
import MainButton from "../../components/Adminstrative/MainButton.vue";
import router from "@/router";
import { News } from "domain/entitites/news";

export default {
  components: { MainButton, ItemBlock },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const arrayOfNews = ref();

    onBeforeMount(async () => {
      await loadNews();
    });

    const loadNews = async () => {
      try {
        arrayOfNews.value = await newsUseCases.list();
      } catch (e) {
        console.log(e);
      }
    };

    const goToEdition = async (news: News) => {
      await router.push({ name: "edit_news", params: { id: news.ID } });
    };

    const goToRegiter = async () => {
      await router.push({ name: "register_news" });
    };

    const removeNews = async (news: News) => {
      try {
        await newsUseCases.delete(news.ID);
        arrayOfNews.value = await newsUseCases.list();
      } catch (e) {
        console.log(e);
      }
    };

    return {
      arrayOfNews,
      goToRegiter,
      goToEdition,
      removeNews,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sub-header__title {
  font-size: 1.3rem;
  height: fit-content;
  color: #677783;
}

a {
  text-decoration: none;
}
</style>
