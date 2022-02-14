<template>
  <header class="header">
    <div class="contain-title">
      <h2 class="title">{{ title }}</h2>
      <router-link :to="{ name: 'register_news' }" class="link">
        <button class="btn">Cadastrar {{ entityName }}</button>
      </router-link>
    </div>
    <div class="header-content">
      <div class="contain-search">
        <input
          :placeholder="`Pesquisar ${entityName.toLowerCase()} pelo nome`"
          class="input input--search"
          data-search
          type="search"
          @input="emitInput($event.target)"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(props: any, { emit }: any) {
    /* Methods */
    function emitInput(input: HTMLInputElement) {
      emit("searching", input.value.trim());
    }

    /* Computed properties */

    return {
      emitInput,
    };
  },

  props: {
    title: {
      required: true,
      type: String,
    },

    type: {
      required: true,
      type: String,
    },

    routeName: {
      required: true,
      type: String,
    },

    entityName: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.header {
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
}

.contain-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.title {
  color: #121212;
  order: 1;
  font-size: 1.2rem;
}

.contain-search {
  position: relative;
  width: 100%;
}

.input {
  border-radius: 4px;
  background: transparent;
  color: #121212;
  padding: 0.3rem 0.5rem;
  min-height: 30px;
}

.btn {
  border: 1px solid #4e4e4e;
  background: transparent;
  height: 30px;

  cursor: pointer;
}

.btn:hover {
  background: #4e4e4e;
  color: #fff;
}

.input--search {
  width: 100%;
}
.link {
  order: 1;
  margin-right: 1rem;
}
</style>
