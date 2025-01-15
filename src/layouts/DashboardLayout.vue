<template>
   <div class="flex flex-col h-screen w-full">
      <div class=""></div>
      <Header />
      <Sidebar />
      <div class="flex-1 ml-[100px] bg-gray-100">
         <main class="pt-[100px] px-[5%]">
            <slot />
         </main>
      </div>
   </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
   components: {
      Sidebar,
      Header,
   },
};
</script>

<style scoped></style>
