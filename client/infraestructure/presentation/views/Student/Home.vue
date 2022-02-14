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
    <a
      class="btn"
      href="https://api.whatsapp.com/send?phone=5547992344331&text=Ol%C3%A1%2C%20estou%20no%20site%20oficial%20do%20gr%C3%AAmio%20estudantil%20e%20gostaria%20de%20dar%20uma%20sugest%C3%A3o."
      target="_blank"
      title="Entre em contato"
    ></a>
  </div>
</template>

<script>
import MyFooter from "../../components/Student/Frames/MyFooter.vue";
import Call from "../../components/Student/Home/Call.vue";
import ContactUs from "../../components/Student/Home/ContactUs.vue";
import Missions from "../../components/Student/Home/Missions.vue";
import News from "../../components/Student/Home/News.vue";
import HEADER from "../../components/Student/Frames/Header";
import MENU from "../../components/Student/Frames/Menu";
export default {
  components: {
    Call,
    Missions,
    ContactUs,
    MyFooter,
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
  height: 50px;
  width: 50px;
  bottom: 1rem;
  right: 1rem;

  border: none;
  background: url("../../assets/static/whatsapp.png") no-repeat transparent;
  background-size: cover;

  cursor: pointer;
  transition: 0.2s all;
}

.btn:hover {
  transform: scale(1.2);
}

@media screen and (min-width: 360px) {
  .section {
    padding: 3.5rem 2rem;
  }
}
</style>
