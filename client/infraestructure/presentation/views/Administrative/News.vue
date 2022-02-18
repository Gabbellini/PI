<template>
  <div class="news">
    <div class="container">
      <div class="sub-header">
        <h3 class="sub-header__title">Notícias</h3>
        <router-link :to="{ name: 'register_news' }">
          <main-button image="+">Cadastrar notícia</main-button>
        </router-link>
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
  </div>
</template>

<script lang="ts">
import ItemBlock from "../../components/Adminstrative/table/itemBlock.vue";
import { onBeforeMount, ref } from "vue";
import { newsUseCases } from "../../../../domain/usecases/news_use_cases";
import MainButton from "../../components/Adminstrative/MainButton.vue";
import router from '@/router';
import { News } from 'domain/entitites/news';

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
      await router.push({name: "edit_news", params: {id: news.ID}})
    }

    const removeNews = async (news: News) => {
      try {
        await newsUseCases.delete(news.ID);
        arrayOfNews.value = await newsUseCases.list();
      } catch (e) {
        console.log(e);
      }
    }

    return {
      arrayOfNews,
      goToEdition,
      removeNews,
    };
  },
};
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
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
}

.sub-header__title {
  font-size: 1.3rem;
  color: #677783;
}

a {
  text-decoration: none;
}
</style>
