<template>
 <div class="relative">
    <img class="absolute right-[-100px] top-[0px] opacity-10" src="@/static/img/target.png" alt="">
    <img class="absolute left-0 top-[50px]" src="@/static/img/arrow-1.png" alt="">
   <div class="container mx-auto px-[16px] mb-[32px]">
    <div class="max-w-[350px] md:max-w-[750px] mx-auto flex flex-col justify-center items-center">
      <img class="w-full h-auto object-cover" src="@/static/img/error-img.png" alt="error-img">
      <h1 class="text-dark text-[18px] md:text-[24px] font-medium text-center leading-130 ">Oooops, page not found</h1>
      <h4 class="text-dark text-[13px] md:text-[16px] font-normal text-center leading-130 mt-[12px]">
        This page doesn’t exist or was removed.
        We suggest you get back to home
      </h4>
      <nuxt-link class="mt-[32px]" to="/">
         <CButton dynamicClass="px-[48px]" text="Back to Home" />
      </nuxt-link>
    </div>
  </div>
 </div>
</template>

<script>

  export default {
    name: 'error',
    layout: 'black',
  }
</script>

<style lang="scss" scoped></style>
