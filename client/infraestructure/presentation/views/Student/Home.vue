<template>
  <div class="home">
    <HEADER />
    <MENU />
    <call id="call" class="section" />
    <missions class="section" />
    <news class="section" />
    <!-- remove it before launch-->
    <contact-us v-if="false" class="section" />
    <my-footer />
    <button-back-top class="btn" elementID="top" />
  </div>
</template>

<script>
import MyFooter from "../../components/Student/Frames/MyFooter.vue";
import Call from "../../components/Student/Home/Call.vue";
import ContactUs from "../../components/Student/Home/ContactUs.vue";
import Missions from "../../components/Student/Home/Missions.vue";
import ButtonBackTop from "../../components/Student/Home/ButtonBackTop.vue";
import News from "../../components/Student/Home/News.vue";
import HEADER from "../../components/Student/Frames/Header";
import MENU from "../../components/Student/Frames/Menu";
export default {
  components: {
    Call,
    Missions,
    ContactUs,
    MyFooter,
    ButtonBackTop,
    News,
    HEADER,
    MENU,
  },
};
</script>

<style scoped>
.home {
  height: 100%;
}

.section {
  padding: 3.5rem 1rem;
  box-sizing: border-box;
}

.btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

@media screen and (min-width: 360px) {
  .section {
    padding: 3.5rem 2rem;
  }
}
</style>
