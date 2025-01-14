<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 text-[#013C61]">
    <h1 class="text-[34px] leading-[46px]">Welcome to GetChange</h1>
    <p class="text-[18px] leading-[18px]">
      Create your free account and enjoy our services.
    </p>
    <button class="mt-6 bg-green-500 text-white px-6 py-2 rounded-md text-[18px] leading-[22px]"
      @click="$router.push('/auth')">
      Sign Up Now
    </button>
  </div>
</template>

<script>
export default {};
</script>
