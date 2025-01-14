import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthPage from "../views/AuthPage.vue";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/auth", name: "auth", component: AuthPage },
    { path: "/", name: "home", component: HomeView },
    { path: "/dashboard", name: "dashboard", component: Dashboard },
  ],
});

export default router;
