<template>
  <div class="sub-header">
    <h2 class="sub-header__title">{{ title }}</h2>
    <main-button
      :image="buttonIcon"
      :title="buttonTitle"
      @click="$emit('mainActionWereCalled')"
    />
  </div>
</template>

<script>
import MainButton from "../MainButton";
export default {
  components: { MainButton },

  props: {
    title: {
      required: true,
      type: String,
    },
    buttonTitle: {
      required: true,
      type: String,
    },
    buttonIcon: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
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
</style>
