<template>
  <main class="missions">
    <h2 class="title">Nossos objetivos</h2>

    <ul class="cards">
      <li class="card">
        <card-mission
          title="Ensino de alto nível"
          description="Nossa chapa se baseia no principio de ensino popular com o objetivo de estabelecer as bases para  formação de pessoas, com educação completa e de alto nível."
        />
      </li>

      <li class="card">
        <card-mission
          title="MEP"
          description="O MEP (Movimento por um escola popular), é um coletivo sem fins lucrativos que prepara os estudantes para a vida e o mercado de trabalho de forma criativa."
        />
      </li>

      <li class="card">
        <card-mission
          title="Escola"
          description="A escola deve apoiar o pensamento crítico e a diversidade e formar não somente bons alunos mas também, bons cidadãos."
        />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardMission from "./CardMission.vue";

export default defineComponent({
  components: { CardMission },
});
</script>

<style scoped>
.missions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
  color: var(--text-color);

  margin-bottom: 3rem;

  font-size: 1.375rem;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media screen and (min-width: 600px) {
  .missions {
    padding: 0 1rem;
  }

  .cards {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .title {
    font-size: 2.25rem;
    margin-bottom: 4rem;
  }
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 3.058rem;
    margin-bottom: 5rem;
  }

  .cards {
    gap: 5rem;
  }
}
</style>
