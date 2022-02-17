<template>
  <nav class="nav">
    <ul class="list">
      <li
        v-for="(item, index) of items"
        :key="index"
        :class="[
          'item',
          `item--${item.icon}`,
          { selected: item.route.name === $route.name },
        ]"
      >
        <router-link :to="item.route" class="item__link">{{
          item.title
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
class Item {
  public title;
  public route;
  public icon;

  constructor(title: string, route: { name: string }, icon: string) {
    this.title = title;
    this.route = route;
    this.icon = icon;
  }
}

export default {
  name: "Menu",

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const items: Array<Item> = [
      new Item("Notícias", { name: "news" }, "news"),
      new Item("Usuários", { name: "" }, "news"),
      new Item("Shop", { name: "" }, "news"),
    ];
    return {
      items,
    };
  },
};
</script>

<style scoped>
.nav,
.list {
  height: 100%;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.item.selected > .item__link {
  color: #2491e4;
}

.item.selected::before {
  filter: sepia(1) hue-rotate(175deg) brightness(55%) saturate(1000%);
}

.item--news::before {
  content: "";
  width: 20px;
  height: 20px;
  background: url("../../../assets/static/news.png") center / contain no-repeat;
}

.item__link {
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 400;
  color: #b8cadb;
}
</style>
