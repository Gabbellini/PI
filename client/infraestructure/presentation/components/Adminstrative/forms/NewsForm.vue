<template>
  <form :id="id" class="news" @submit.prevent="submit">
    <div class="news__figure">
      <input
        v-model="newsObject.image"
        class="news__image--link input"
        placeholder="URL da imagem"
        required
        type="url"
      />
      <img
        v-if="isImageURLValid"
        :alt="`Ilustração da notícia: ${newsObject.title}`"
        :src="newsObject.image"
        class="news__image"
      />
      <div v-else class="news__image--no-image">
        <span v-if="!isImageURLValid">URL da imagem é inválida</span>
      </div>
    </div>
    <div class="news__information">
      <input
        v-model="newsObject.title"
        class="news__title input"
        placeholder="Título"
        required
        @input="$emit('update:news', newsObject)"
      />
      <span
        class="news__description input"
        contenteditable
        data-description
        role="textbox"
        >{{ newsObject.description }}
      </span>
    </div>
  </form>
</template>

<script lang="ts">
import { News } from "../../../../../domain/entitites/news";
import { onBeforeMount, ref } from "vue";

export default {
  name: "NewsForm",
  props: {
    news: {
      type: Object,
      required: true,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      default: () => new News(),
    },
    id: {
      required: true,
      type: [Number, String],
    },
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props) {
    const newsObject = ref();
    const isImageURLValid = ref(false);

    onBeforeMount(() => {
      loadNews();
    });

    const handleInvalidImageURL = async (imageURL: string) => {
      try {
        await fetch(imageURL, { method: "GET" });
        isImageURLValid.value = true;
      } catch (e) {
        console.log(e);
      }
    };

    const loadNews = async () => {
      newsObject.value = props.news;
      if (newsObject.value.image) {
        await handleInvalidImageURL(newsObject.value.image);
      }
    };

    const fillNonReactiveAttributes = () => {
      const { innerText } = document.querySelector("[data-description]");
      newsObject.value.description = innerText;
    };

    const submit = () => {
      fillNonReactiveAttributes();
    };

    return {
      newsObject,
      isImageURLValid,
      submit,
    };
  },
};
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.news__figure {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.news__image--link {
  width: 100%;
  box-sizing: border-box;
}

.news__image,
.news__image--no-image {
  width: 100%;
  height: 35%;
  max-height: 450px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.news__image--no-image {
  background: rgba(0 0 0 / 50%);
  height: 450px;

  display: grid;
  place-items: center;

  font-size: 2rem;
  text-transform: uppercase;

  color: #fff;
}

.news__information {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 65%;
  overflow-y: auto;
}

.news__title {
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: bold;
  color: #677783;
}

.news__description {
  text-align: justify;
  font-size: 0.8rem;
  color: #677783;
  line-height: 1.5rem;
  resize: vertical;
  max-width: 1000px;
  min-height: 300px;
}

.news__description:empty::before,
::placeholder {
  content: "Descrição";
  color: gray !important;
  font-size: 1rem !important;
  font-weight: normal !important;
}

.input {
  border: 2px solid #b7cad9;
  border-radius: 2px;
  padding: 0.5rem;
  background: transparent;
}

.input:focus {
  border: 2px solid #2491e4;
  outline: none;
}
</style>
