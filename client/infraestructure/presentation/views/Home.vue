<template>
  <div class="home">
    <call class="section" id="call" />
    <missions class="section" />
    <news class="section" />
    <contact-us class="section" />
    <my-footer />
    <button-back-top class="btn" elementID="top" />
  </div>
</template>

<script>
import MyFooter from "../components/MyFooter.vue";
import Call from "../components/Home/Call.vue";
import ContactUs from "../components/Home/ContactUs.vue";
import Missions from "../components/Home/Missions.vue";
import ButtonBackTop from "../components/Home/ButtonBackTop.vue";
import News from "../components/Home/News.vue";
export default {
  components: { Call, Missions, ContactUs, MyFooter, ButtonBackTop, News },
};
</script>

<style scoped>
.home {
  height: 100%;
}

.section {
  padding: 3.5rem 1rem;
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
