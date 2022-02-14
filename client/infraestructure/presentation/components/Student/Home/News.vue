<template>
  <section class="newspaper">
    <modal
      v-show="isModalOpened"
      :news="currentNews"
      @toggleModal="toggleModal"
    />
    <h2 class="title">Jornal do grêmio</h2>
    <ul class="list">
      <li
        v-for="(item, index) of news"
        :key="index"
        class="item"
        @click="loadCurrentNews(item)"
      >
        <card
          :description="item.description"
          :image="item.image"
          :title="item.title"
          width="25%"
        >
        </card>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import "vue3-carousel/dist/carousel.css";

import Card from "./Card.vue";
import { newsUseCases } from "../../../../../domain/usecases/news_use_cases";
import Modal from "./Modal.vue";
import { News } from "../../../../../domain/entitites/news";

export default {
  components: { Modal, Card },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const news = ref();
    const currentNews = ref(new News());
    const isModalOpened = ref(false);

    onBeforeMount(async () => {
      const value = await loadNews();
      news.value = value ? value : [];
    });

    const loadNews = async () => {
      try {
        return await newsUseCases.list();
      } catch (e) {
        alert(e);
      }
    };

    const toggleModal = () => {
      isModalOpened.value = !isModalOpened.value;
    };

    const loadCurrentNews = (news: News) => {
      toggleModal();
      currentNews.value = news;
    };

    const settings = {
      itemsToShow: 1,
      snapAlign: "center",
    };

    const breakpoints = {
      500: {
        itemsToShow: 1.0,
      },

      550: {
        itemsToShow: 1.25,
      },

      600: {
        itemsToShow: 1.35,
      },

      650: {
        itemsToShow: 1.55,
      },

      700: {
        itemsToShow: 1.65,
      },

      750: {
        itemsToShow: 1.75,
      },

      800: {
        itemsToShow: 1.85,
      },

      850: {
        itemsToShow: 1.95,
      },

      900: {
        itemsToShow: 2,
      },

      950: {
        itemsToShow: 2.25,
      },

      1024: {
        itemsToShow: 2.5,
      },

      1048: {
        itemsToShow: 2.5,
      },

      1200: {
        itemsToShow: 3.25,
      },

      1350: {
        itemsToShow: 3.5,
      },

      1500: {
        itemsToShow: 3.75,
      },

      1650: {
        itemsToShow: 4.2,
      },

      1800: {
        itemsToShow: 4.5,
      },
    };

    watch(
      () => isModalOpened.value,
      () => {
        if (isModalOpened.value) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    );

    return {
      news,
      settings,
      breakpoints,
      isModalOpened,
      currentNews,
      toggleModal,
      loadCurrentNews,
    };
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  height: fit-content;
}

.title {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 6rem;
  font-size: 1.375rem;
}

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media screen and (min-width: 600px) {
  .newspaper {
    padding-top: 3rem;
  }
  .title {
    font-size: 2.25rem;
  }

  .list {
    flex-direction: row;
    justify-content: space-between;
  }

  .item {
    width: calc(50% - 1rem);
  }
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 3.058rem;
  }
}

@media screen and (min-width: 1024px) {
  .item {
    width: calc(33.333% - 1rem);
  }
}

@media screen and (min-width: 1600px) {
  .item {
    width: calc(25% - 1rem);
  }
}
</style>
