<template>
  <div
    class="container mx-auto py-[28px] flex items-center justify-between bg-transparent z-50"
  >
    <nuxt-link to="/">
      <img
        class="max-w-[215px] object-cover"
        src="@/static/img/logo-white.png"
        alt=""
      />
    </nuxt-link>
    <div class="header-menu flex items-center">
      <nuxt-link
        v-for="(item, index) in headerLink"
        :key="index"
        :to="item.link"
        :exact="item.exact"
        class="header-menu__link text-[white] leading-[130%] text-[16px] font-medium mx-4 duration-200 transition-all" 
        :class="{ _active: $route.path === item.link }"
      >
        {{ item.text }}
      </nuxt-link>
    </div>
    <div class="social-menu flex items-center justify-between">
      <a class="w-[24px] h-[24px] mx-[6px] object-cover" :href="item.url" v-for="(item,index) in socials" :key="index">
        <img class="w-full icon-hover-blue" :src="item.img" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      activeMenu: false,
      headerLink: [
        { link: "", text: "About us", exact: true },
        { link: "", text: "How it works" },
        { link: "", text: "Transport options" },
        { link: "", text: "Who we serve" },
        { link: "", text: "Contacts" },
      ],
      socials: [
        { url: 'https://twitter.com/', img: require('@/static/icons/twitter-svg.svg') },
        { url: 'https://web.telegram.org/', img: require('@/static/icons/telegram-svg.svg') },
        { url: 'https://www.instagram.com/', img: require('@/static/icons/instagram-svg.svg') },
        { url: 'https://www.youtube.com/', img: require('@/static/icons/youtube-svg.svg')}
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
  .header-menu__link {
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 1.6px;
      background-color: #fff;
      transition: width 0.3s ease;
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .icon-hover-blue {
    transition: all 0.3s ease;
    &:hover {
      filter: invert(47%) sepia(100) saturate(1000%) hue-rotate(183deg) brightness(83%) contrast(170%);
    }
  }
</style>
