import AuthPage from "@/views/AuthPage.vue";
import Employees from "../views/Employees.vue";
import HomeView from "@/views/HomeView.vue";
import Dashboard from "@/views/Dashboard.vue";
import Wallet from "@/views/Wallet.vue";
import History from "@/views/History.vue";
import { createRouter, createWebHistory } from "vue-router";

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
  {
    path: "/wallet",
    name: "wallet",
    component: Wallet,
    meta: { layout: "DashboardLayout" },
  },
  {
    path: "/history",
    name: "history",
    component: History,
    meta: { layout: "DashboardLayout" },
  },
  {
    path: "/employees",
    name: "employees",
    component: Employees,
    meta: { layout: "DashboardLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
