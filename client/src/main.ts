import { createApp } from "vue";
import App from "../infraestructure/presentation/App.vue";
import router from "./router";
import store from "../infraestructure/repository/store";

createApp(App).use(store).use(router).mount("#app");

const handleWithMarkup = () => {
  const link = document.querySelector(
    'a[href="https://www.000webhost.com/?utm_source=000webhostapp&utm_campaign=000_logo&utm_medium=website&utm_content=footer_img"]'
  ) as HTMLAnchorElement;

  if (link) {
    link.innerHTML = "";
    link.href = "";
    clearInterval(refresInterval);
  }
};

const refresInterval = setInterval(handleWithMarkup, 1);
