<template>
  <section class="contact">
    <h2 class="title">Entre em contato</h2>
    <h3 class="subtitle">
      Entre em contato conosco pelas redes socias <br />
      ou nos deixe um comentário.
    </h3>
    <div class="social-media">
      <a
        class="link link--instagram"
        href="https://www.instagram.com/ifsc.gaspar/"
        rel="noopener noreferrer"
        target="_blank"
        title="ir para o instagram do grêmio estudantil"
      />
      <a
        class="link link--facebook"
        href="https://pt-br.facebook.com/ifsc.gaspar/"
        rel="noopener noreferrer"
        target="_blank"
        title="ir para o facebook do grêmio estudantil"
      />
      <a
        class="link link--youtube"
        href="https://www.youtube.com/c/ifscgaspar1"
        rel="noopener noreferrer"
        target="_blank"
        title="ir para o youtube do grêmio estudantil"
      />
    </div>

    <mail-form />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MailForm from "./MailForm.vue";

export default defineComponent({
  components: { MailForm },
});
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.03);
  padding: 2rem 1rem 0;
}

.title {
  text-align: center;
  color: var(--text-color);

  margin-bottom: 0.5rem;

  font-size: 1.375rem;
}

.subtitle {
  font-size: 0.9rem;
  line-height: 1.5rem;
  text-align: center;
}

.social-media {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.link {
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.link--instagram {
  background-image: url("../../../../../infraestructure/presentation/assets/static/instagram.webp");
}
.link--facebook {
  background-image: url("../../../../../infraestructure/presentation/assets/static/facebook.webp");
}
.link--youtube {
  background-image: url("../../../../../infraestructure/presentation/assets/static/youtube.webp");
}

@media screen and (min-width: 600px) {
  .contact {
    padding-top: 3rem;
  }
  .title {
    font-size: 2.25rem;
  }
  .subtitle {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 3.058rem;
  }

  .subtitle {
    font-size: 1.561rem;
    line-height: 1.85rem;
  }

  .link {
    width: 50px;
    height: 50px;
  }

  .link--instagram {
    background-image: url("../../../../../infraestructure/presentation/assets/static/instagram-768px.webp");
  }
  .link--facebook {
    background-image: url("../../../../../infraestructure/presentation/assets/static/facebook-768px.webp");
  }
  .link--youtube {
    background-image: url("../../../../../infraestructure/presentation/assets/static/youtube-768px.webp");
  }
}
</style>
