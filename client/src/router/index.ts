import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
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
            "../../infraestructure/presentation/views/Administrative/AdministrativePanel.vue"
          ),
        children: [
          {
            path: "noticias",
            name: "news",
            component: () =>
              import(
                "../../infraestructure/presentation/views/Administrative/News.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
