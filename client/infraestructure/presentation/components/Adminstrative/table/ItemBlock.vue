<template>
  <div :class="['block', { active: isActive }]" tabindex="0">
    <action-menu class="block__menu" @action="$emit($event)" />
    <div class="block__header">
      <h3 class="block__title">{{ title }}</h3>
      <div class="block__status">
        <span class="block__status__radio"></span>
        {{ isActive ? "Ativo" : "Inativo" }}
      </div>
    </div>
    <div class="block__information">
      <p class="block__description">{{ description }}</p>
      <hr class="block__line" />
      <span class="block__date">{{ formattedDate(date) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import actionMenu from "./ActionMenu.vue";
export default {
  components: { actionMenu },
  name: "itemBlock",

  props: {
    title: {
      required: true,
      type: String,
    },

    isActive: {
      required: true,
      type: Boolean,
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      default: () => false,
    },

    date: {
      required: true,
      type: String,
    },

    description: {
      required: true,
      type: String,
    },
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const formattedDate = (date: string) => {
      return date.split("T", 1)[0];
    };

    return {
      formattedDate,
    };
  },
};
</script>

<style scoped>
.block {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  height: 180px;

  padding: 1.5rem 5rem 0.5rem 5rem;
  box-sizing: border-box;

  border: 2px solid rgba(183, 202, 217, 0.3);
  border-radius: 4px;
  background: #fff;

  cursor: pointer;

  transition: 0.2s all ease;
}

.block:hover,
.block:focus {
  border: 2px solid #b7cad9;
  box-shadow: 0 8px 15px rgba(36, 145, 228, 0.1);
  outline: none;
}

.block__menu {
  position: absolute;
  top: 1.2rem;
  right: 0.8rem;
}

.block__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.block__title {
  max-width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: 1.2rem;
  line-height: 1.3rem;
  color: #677783;
}

.block.active .block__status {
  color: #73bc3a;
}

.block__title::before {
  position: absolute;
  content: url("../../../assets/static/news.png");

  left: 2rem;
  top: 1.35rem;
}

.block.active .block__title::before {
  filter: sepia(1) hue-rotate(175deg) brightness(55%) saturate(1000%);
}

.block__status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #b7cad9;
}

.block.active {
  color: #73bc3a;
}

.block__status__radio {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;

  border: 1px solid #b7cad9;
  border-radius: 50%;
}

.block.active .block__status__radio::after {
  content: "";
  display: block;
  width: 70%;
  height: 70%;
  border-radius: 50%;

  background: #73bc3a;
}

.block.active .block__status__radio {
  border: 1px solid transparent;
  background: rgba(40, 167, 69, 0.3);
}

.block__information {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.block__description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  max-width: 60%;
  color: #677783;

  font-size: 0.8rem;
  line-height: 1rem;
}

.block__line {
  width: 100%;
  opacity: 0.5;
  height: 1px;
  background: #b7cad9;
  border: none;
}

.block__date {
  font-size: 0.8rem;
  color: #677783;
}

@media screen and (max-width: 768px) {
  .block__title {
    font-size: 0.875rem;
  }

  .block__status {
    font-size: 0.7rem;
  }

  .block__description {
    font-size: 0.75rem;
    max-width: 70%;
  }

  .block__date {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 620px) {
  .block {
    gap: 0.5rem;
    height: fit-content;
    padding: 1.5rem 3rem 1.5rem 3rem;
  }

  .block__title::before {
    left: 0.8rem;
  }

  .block__description {
    max-width: none;
  }
}
</style>
