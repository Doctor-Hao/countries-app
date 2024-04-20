import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/country/:id",
    name: "CountryDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CountryDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
