import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/:id",
    name: "CountryDetails",
    component: () =>
      import(
        /* webpackChunkName: "CountryDetails" */ "../views/CountryDetails.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
