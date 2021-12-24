<template>
  <section class="newspapper">
    <h2 class="title">Jornal do grêmio</h2>

    <carousel :settings="settings" :breakpoints="breakpoints" :wrapAround="true" >
      <slide v-for="(item, index) in news" :key="index" class="carousel">
        <card :title="item.title" :description="item.description" />
      </slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </carousel>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

import Card from "../Card.vue";

export default {
  components: { Carousel, Slide, Card, Navigation, Pagination },
  setup() {
    onMounted(() => {
      fetch("http://localhost:3001/api/get")
        .then((response) => response.json())
        .then((response) => (news.value = response))
        .catch((err) => alert(err));
    });

    const news = ref([]);
    const settings = {
      itemsToShow: 1,
      snapAlign: "center",
    };

    const breakpoints =  {
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
        itemsToShow: 1.55
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

      
    }

    return {
      news,
      settings,
      breakpoints,
    };
  },
};
</script>

<style scoped>
.news {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.title {
  text-align: center;
  color: var(--text-color);

  margin-bottom: 6rem;

  font-size: 1.375rem;
}


.carousel {
  cursor: grab;
}


@media screen and (min-width: 600px) {
  .newspapper {
    padding-top: 3rem;
  }
  .title {
    font-size: 2.25rem;
  }
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 3.058rem;
  }
}
</style>
