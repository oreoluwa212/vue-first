<template>
  <aside class="fixed top-0 left-0 h-full w-[120px] bg-white shadow-md pt-[5%] z-1">
    <ul class="flex flex-col items-center mt-6 space-y-6">
      <li 
        v-for="item in menuItems" 
        :key="item.name" 
        :class="isActive(item.path) ? 'bg-blue-100 text-blue-500 rounded-full' : ''"
        class="p-3 hover:bg-blue-50 rounded-full transition"
      >
        <router-link :to="item.path">
          <img :src="item.icon" alt="icon" class="w-6 h-6" />
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Dashboard", path: "/dashboard", icon: new URL('@/assets/images/home.svg', import.meta.url).href },
        { name: "Employees", path: "/employees", icon: new URL('@/assets/images/employees.svg', import.meta.url).href },
        { name: "Wallet", path: "/wallet", icon: new URL('@/assets/images/wallet.svg', import.meta.url).href },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
</style>
