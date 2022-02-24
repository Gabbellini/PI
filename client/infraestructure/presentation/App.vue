<template>
  <div class="view">
    <span id="top" />
    <div v-show="isMenuOpened" class="trigger" @click="toggleMenu" />
    <router-view />
  </div>
</template>

<script lang="ts">
import store from "../../infraestructure/repository/store";
import { computed } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    async function toggleMenu() {
      await store.dispatch("menu_state/setMenuState", !isMenuOpened.value);
    }

    const isMenuOpened = computed(() => {
      return store.getters["menu_state/isOpen"];
    });

    return {
      isMenuOpened,
      toggleMenu,
    };
  },
};
</script>

<style>
:root {
  /* Colors */
  --background-color: #fafafa;
  --text-color: #121212;
  --block-border: 1px solid rgba(0, 0, 0, 0.2);
}

.view {
  background: var(--background-color);
}

.trigger {
  z-index: 5;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  transition: 0.25s all ease-in-out;
}

/*Reset css*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
