import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthPage from "../views/AuthPage.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
    meta: { layout: "AuthLayout" },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: "AppLayout" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { layout: "DashboardLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
