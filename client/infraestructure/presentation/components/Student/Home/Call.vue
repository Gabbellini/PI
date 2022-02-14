<template>
  <section class="call">
    <div class="call__text">
      <h1 class="call__text__title">Grêmio - IFSC<br />Gaspar</h1>
      <h2 class="call__text__subtitle">
        Por uma escola que pertence a<br />
        todos/as os estudantes
      </h2>
    </div>
  </section>
</template>

<style scoped>
.call {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vw;
  background: url("../../../../../infraestructure/presentation/assets/static/call-background-360px.webp")
    #000 no-repeat;
  background-size: cover !important;
  background-position: center !important;
  padding: 0 1rem;
  box-sizing: border-box;
}

.call__text {
  text-align: center;
  color: var(--background-color);
}

.call__text__title {
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 2rem;
}

.call__text__subtitle {
  line-height: 1.8rem;
  font-size: 1.3rem;
}

@media screen and (min-width: 424px) {
  .call__text__title {
    font-size: 2.85rem;
    line-height: 3rem;
  }

  .call__text__subtitle {
    font-size: 1.6rem;
    line-height: 2.25rem;
  }
}

@media screen and (min-width: 500px) {
  .call {
    background: url("../../../../../infraestructure/presentation/assets/static/call-backgrond-768px.webp")
      #000 no-repeat;
  }

  .call__text__title {
    margin-bottom: 3rem;
  }
}

@media screen and (min-width: 600px) {
  .call__text__title {
    font-size: 3.5rem;
    line-height: 3.8rem;
  }

  .call__text__subtitle {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
}

@media screen and (min-width: 768px) {
  .call__text__title {
    font-size: 4.8rem;
    line-height: 5.5rem;
  }

  .call__text__subtitle {
    font-size: 2.933rem;
    line-height: 3.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .call {
    height: calc(100vh - 60px);
  }
}
</style>
