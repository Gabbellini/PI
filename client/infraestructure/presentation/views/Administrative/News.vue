<template>
  <div class="content">
    <list-header
      :entityName="'Notícia'"
      routeName="register_news"
      title="Notícias cadastradas"
      type="news"
      @searching="filter($event)"
    />
    <last-table>
      <template v-slot:header>
        <thead>
          <t-line horizontalAlignment="space-between">
            <header-column
              v-for="(object, index) in header"
              :key="index"
              :horizontalAlignment="object.horizontalAlignment"
              :is-sortable="object.isSortable"
              :max-lines="1"
              :order-by="object.orderBy"
              :width-per-cent="object.widthPerCent"
              class="column"
            >
              {{ object.title }}
            </header-column>
            <header-column
              :is-sortable="false"
              class="column"
              horizontal-alignment="center"
              width-per-cent="15"
              >Ação</header-column
            >
          </t-line>
        </thead>
      </template>
      <template v-slot:body>
        <tbody>
          <t-line
            v-for="(news, index) in arrayOfNews"
            :key="index"
            horizontalAlignment="space-between"
          >
            <Column
              v-for="(attribute, index) in attributes"
              :key="index"
              :horizontalAlignment="header[index].horizontalAlignment"
              :width-per-cent="header[index].widthPerCent"
              class="column"
            >
              <span>{{ news[attribute] }}</span>
            </Column>
            <Column
              class="column"
              horizontal-alignment="center"
              width-per-cent="15"
            >
              <action-button
                action-type="edit"
                class="action-button"
                content="editar"
                @click="editNews(news)"
              />
              <action-button
                action-type="remove"
                class="action-button"
                content="remover"
                @click="deleteNews(news)"
              />
            </Column>
          </t-line>
        </tbody>
      </template>
    </last-table>
  </div>
</template>

<script lang="ts">
import ListHeader from "../../components/Adminstrative/table/ListHeader.vue";
import { computed, onBeforeMount, ref } from "vue";
import router from "@/router";
import { News } from "../../../../domain/entitites/news";
import { TableHeader } from "../../../../domain/entitites/table_header";
import TLine from "../../components/Adminstrative/table/Line.vue";
import HeaderColumn from "../../components/Adminstrative/table/HeaderColoumn.vue";
import ActionButton from "../../components/Adminstrative/table/ActionButton.vue";
import { newsUseCases } from "../../../../domain/usecases/news_use_cases";
import Column from "../../components/Adminstrative/table/Column.vue";
import LastTable from "../../components/Adminstrative/table/LastTable.vue";
export default {
  components: {
    LastTable,
    Column,
    ActionButton,
    HeaderColumn,
    TLine,
    ListHeader,
  },

  // eslint-disable-next-line
  setup() {
    let currentPage = ref(
      String(router.currentRoute.value.params.arrayOfNewsPage) || 1
    );

    const news = ref();

    const header = [
      new TableHeader(false, "ID", "id", true, "center", 4),
      new TableHeader(false, "Nome", "title", true, "flex-start", 40),
      new TableHeader(
        false,
        "Última alteração",
        "updated_at",
        true,
        "center",
        30
      ),
    ];

    const attributes = ["ID", "title", "UpdatedAt"];

    onBeforeMount(async () => {
      try {
        news.value = (await newsUseCases.list()) || [];
      } catch (e) {
        console.log(e);
      }
    });

    /* Methods */
    function filter(payload: string) {
      input.value = payload;
    }

    async function deleteNews(currentNews: News) {
      try {
        await newsUseCases.delete(currentNews.ID);
        news.value = await newsUseCases.list();
        console.log(news.value);
      } catch (e) {
        console.log(e);
      }
    }

    async function editNews(news: News) {
      await router.push({
        name: "edit_news",
        params: { id: news.ID },
      });
    }

    /* Computed properties */
    const arrayOfNews = computed(() => {
      const arrayOfNews = news.value;
      const currentInput = input.value as string;
      return (
        arrayOfNews?.filter((news: News) =>
          news.title.toUpperCase().includes(currentInput.toUpperCase())
        ) || arrayOfNews
      );
    });

    /* Attributes */
    const input = ref("");

    return {
      input,
      arrayOfNews,
      header,
      attributes,
      currentPage,
      filter,
      deleteNews,
      editNews,
    };
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  border-radius: 10px;
}

.action-button:first-of-type {
  margin-right: 0.5rem;
}

.column:nth-child(2) > span {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.column:nth-child(3) {
  display: none;
}

.column:last-of-type {
  width: 35% !important;
}

@media screen and (min-width: 760px) {
  .column:nth-child(3) {
    display: flex;
  }

  .column:last-of-type {
    width: 15% !important;
  }
}
</style>
