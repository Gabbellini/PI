<template>
  <vue-tailwind-pagination
    :current="currentPage"
    :per-page="regsPerPage"
    :total="regsPerPage * pages"
    text-before-input="Ir para página nº"
    text-after-input="ir"
    @page-changed="$emit('page-changed', $event)"
  />
</template>

<script>
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import "@ocrv/vue-tailwind-pagination/dist/style.css";

export default {
  name: "Pagination",
  components: { VueTailwindPagination },

  props: {
    pages: {
      required: true,
      type: Number,
    },

    regsPerPage: {
      required: true,
      type: Number,
    },

    currentPage: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style scoped></style>
