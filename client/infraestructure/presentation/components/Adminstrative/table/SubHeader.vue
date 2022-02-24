<template>
  <div class="sub-header">
    <h2 class="sub-header__title">{{ title }}</h2>
    <main-button
      :form="buttonForm"
      :image="buttonIcon"
      :title="buttonTitle"
      :type="buttonType"
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
      required: false,
      type: String,
    },
    buttonType: {
      required: false,
      type: String,
    },
    buttonForm: {
      required: false,
      type: [String, Number],
    },
  },
};
</script>

<style scoped>
.sub-header {
  width: 100%;
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
