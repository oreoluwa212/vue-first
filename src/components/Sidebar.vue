<template>
    <aside class="sidebar">
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.name" :class="{ active: isActive(item.path) }">
          <router-link :to="item.path">
            <item.icon class="menu-icon" />
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
import { HistoryIcon, HomeIcon, WalletIcon } from './icons/icons';

  
  export default {
    data() {
      return {
        menuItems: [
          { name: "Dashboard", path: "/", icon: HomeIcon },
          { name: "Wallet", path: "/wallet", icon: WalletIcon },
          { name: "History", path: "/history", icon: HistoryIcon },
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
  .sidebar {
    width: 240px;
    height: 100vh;
    background-color: #f4f7fa;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: 0;
    top: 0;
  }
  
  .menu {
    list-style: none;
    padding: 20px 0;
    margin: 0;
  }
  
  .menu li {
    margin-bottom: 15px;
  }
  
  .menu li.active {
    background-color: #e6f7ff;
  }
  
  .menu li a {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    text-decoration: none;
    color: #333333;
  }
  
  .menu li a:hover {
    background-color: #d4ebf9;
    border-radius: 5px;
  }
  
  .menu-icon {
    margin-right: 10px;
    font-size: 18px;
  }
  </style>
  