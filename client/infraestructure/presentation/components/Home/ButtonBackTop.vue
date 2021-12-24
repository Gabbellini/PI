<template>
  <button
    aria-label="Botão para voltar ao topo da página"
    @click="goToElement"
    class="btn"
    title="Voltar ao topo da página"
  >
    ^
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    elementID: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    function goToElement() {
      document
        .getElementById(props.elementID)!
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return {
      goToElement,
    };
  },
});
</script>

<style scoped>
.btn {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
