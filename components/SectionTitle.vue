<template>
    <div>
        <div class="flex items-center justify-center w-full" :class="{'!justify-start' : isWhite}">
          <img src="@/static/icons/section-title-icon.svg" alt="">
        </div>
      <h1 class="section-titles select-none relative" :class="{'!text-white' : isWhite, 'text-center' : center}">{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "",
      },
      isWhite: {
        default: false
      },
      center: {
        default: true
      }
    },
  };
  </script>
  
  <style lang="scss" scoped></style>