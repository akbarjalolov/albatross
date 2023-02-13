<template>
  <div class="bg-gray-100 py-[12px] w-full">
    <div class="container mx-auto flex items-center px-[16px]">
      <NuxtLink
        to="/"
        class="flex items-center mr-2 text-dark font-semibold leading-130 text-base hover:text-darkBlue transition duration-300"
      >
      <Preloader :loading="loading" :width="'24px'" :height="'24px'" :border-radius="'4px'" :margin="'0 0 0 16px'">
        <img class="mr-[16px]" src="@/static/icons/home.svg" alt="" />
      </Preloader>
        <i class="icon-home-fill text-xl leading-5 mr-2 text-blue" />
         <Preloader :loading="loading" :width="'50px'" :height="'24px'" :border-radius="'4px'" :margin="'0 0 0 16px'">
        <p>Home</p>
         </Preloader>
      </NuxtLink>

      <div
        v-for="(item, index) in links"
        :key="index"
        class="flex items-center mr-2"
      >
        <span class="mx-[12px] tet-[#74787D]">/</span>
        <Preloader :loading="loading" :width="'50px'" :height="'24px'" :border-radius="'4px'" :margin="'0 0 0 16px'">
        <NuxtLink
          :to="item?.link"
          :class="{
            'pointer-events-none': index === links.length - 1,
          }"
          class="transition-200 flex cursor-pointer items-center text-dBlue font-semibold leading-130 min-w-max text-base hover:!text-darkBlue breadcrumb-menu"
        >
          {{ item?.title }}
        </NuxtLink>
        </Preloader>

    </div>
  </div>
  </div>
</template>

<script>
import Preloader from "~/components/Preloader"
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Preloader,
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  background: #eef3f8;
}

.bread-crumbs {
  padding: 12px 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  li {
    display: inline-flex;
    text-transform: capitalize;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #00afef;
    }
    a {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #00afef;

      i {
        margin-right: 8px;
      }

      &:after {
        content: "/ ";
        display: block;
        position: absolute;
        right: 7px;
        top: 1px;
      }

      &:hover {
        color: #024da5;
      }
    }
  }
}
</style>