<template>
    <div>
        <div class="flex items-center justify-center w-full">
          <img src="@/static/icons/section-title-icon.svg" alt="">
        </div>
      <h1 class="section-titles select-none relative">{{ title }}</h1>
      <!-- <h4 class="shadoww absolute top-0 block">{{title}}</h4> -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style lang="scss" scoped></style>