<template>
  <footer class="footer">
    <div class="footer__logo">
      <img
        alt="Logo do grêmio estudantil (auto falante)"
        class="logo"
        height="40"
        src="../../../../../infraestructure/presentation/assets/static/logo-white-360px.webp"
        width="145"
      />
      <div class="social-media">
        <a
          class="link link--instagram"
          href="https://www.instagram.com/ifsc.gaspar/"
          rel="noopener noreferrer"
          target="_blank"
          title="Ir para o instagram do grêmio estudantil"
        />
        <a
          class="link link--facebook"
          href="https://pt-br.facebook.com/ifsc.gaspar/"
          rel="noopener noreferrer"
          target="_blank"
          title="Ir para o facebook do grêmio estudantil"
        />
        <a
          class="link link--youtube"
          href="https://www.youtube.com/c/ifscgaspar1"
          rel="noopener noreferrer"
          target="_blank"
          title="Ir para o youtube do grêmio estudantil"
        />
      </div>
    </div>
    <div class="copyright">
      &copy; Gêmio 2021 - Todos os direitos reservados
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.footer {
  background-color: var(--text-color);
  padding: 1rem;
  min-height: 100px;
}

.footer__logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.social-media {
  display: flex;
  gap: 0.5rem;
}

.link {
  width: 26px;
  height: 30px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.link--instagram {
  background-image: url("../../../../../infraestructure/presentation/assets/static/instagram-white.webp");
}
.link--facebook {
  background-image: url("../../../../../infraestructure/presentation/assets/static/facebook-white.webp");
}
.link--youtube {
  background-image: url("../../../../../infraestructure/presentation/assets/static/youtube-white.webp");
}

.copyright {
  font-size: 0.8rem;

  color: #fafafa;
}

@media screen and (min-width: 360px) {
  .social-media {
    gap: 1.5rem;
  }
}

@media screen and (min-width: 768px) {
  .footer {
    padding: 1rem 4rem;
  }
}

@media screen and (min-width: 1024px) {
  .logo {
    content: url("../../../../../infraestructure/presentation/assets/static/logo-white-1024px.webp");
    width: 250px;
    height: auto;
  }
  .link {
    width: 40px;
    height: 40px;
  }

  .link--instagram {
    background-image: url("../../../../../infraestructure/presentation/assets/static/instagram-white-1024px.webp") !important;
  }
  .link--facebook {
    background-image: url("../../../../../infraestructure/presentation/assets/static/facebook-white-1024px.webp") !important;
  }
  .link--youtube {
    background-image: url("../../../../../infraestructure/presentation/assets/static/youtube-white-1024px.webp") !important;
  }
}
</style>
