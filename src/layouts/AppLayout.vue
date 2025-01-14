<template>
   <div>
      <Sidebar />

      <div class="main-content">
         <Header />
         <main>
            <slot />
         </main>
      </div>
   </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
   components: {
      Sidebar,
      Header,
   },
};
</script>

<style scoped>
.main-content {
   margin-left: 240px;
   padding: 20px;
}
</style>