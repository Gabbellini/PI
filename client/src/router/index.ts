import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../../infraestructure/presentation/views/Student/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/admin",
    component: () =>
      import("../../infraestructure/presentation/views/RouterView.vue"),
    children: [
      {
        path: "",
        name: "admin",
        component: () =>
          import(
            "../../infraestructure/presentation/views/Administrative/Login.vue"
          ),
      },
      {
        path: "news",
        component: () =>
          import("../../infraestructure/presentation/views/RouterView.vue"),
        async beforeEnter(to, from, next) {
          const userIsLogged = JSON.parse(
            localStorage.getItem("userIsLogged") || "false"
          );

          if (!userIsLogged) {
            await router.push({ name: "admin" });
          }
          next();
        },
        children: [
          {
            path: "",
            name: "news",
            component: () =>
              import(
                "../../infraestructure/presentation/views/Administrative/News.vue"
              ),
          },
          {
            path: "edit/:id",
            name: "edit_news",
            component: () =>
              import(
                "../../infraestructure/presentation/views/Administrative/NewsManager.vue"
              ),
          },
          {
            path: "register",
            name: "register_news",
            component: () =>
              import(
                "../../infraestructure/presentation/views/Administrative/NewsManager.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
