<template>
    <carousel>
      <li class="item" v-for="(item, index) in list" :key="index" data-item :ref="setItem">
        <card :title="item.title" :description="item.description" class="card" :ref="setCard"/>
      </li>
  
</template>

<script>
import { defineComponent } from "vue";
import Card from "./Card.vue";
import carousel from 'vue-owl-carousel'

export default defineComponent({
  components: { Card, carousel },

    setup() {
    
    
    },

  props: {
    list: {
      type: Array,
      required: true,
    }
  }

  });
</script>

<style scoped>

.carousel {
  position: relative;
  width: 80%;
  height: 200px;
  overflow: hidden;
  border: 1px solid black;
}

.list {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  gap: .5%;
  height: 100%;
  width: 4000px;
  will-change: transform;
  background: black;
}

.item {
  position: relative;
  overflow: hidden;
  filter: grayscale(100%);
  left: .5%;
  top: 2.5%;
  height: 95%;
}

</style>
