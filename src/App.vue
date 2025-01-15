<script>
import { RouterView } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

export default {
   components: {
      AuthLayout,
      AppLayout,
      DashboardLayout,
      RouterView,
   },
   computed: {
      currentLayout() {
         const layout = this.$route.meta.layout;
         return layout === "AuthLayout"
            ? AuthLayout
            : layout === "DashboardLayout"
               ? DashboardLayout
               : AppLayout;
      },
   },
};
</script>

<template>
   <component :is="currentLayout">
      <RouterView />
   </component>
</template>
