<template>
  <div class="w-full z-[100]">
    <transition name="translateX">
      <div class="bg-dark p-[16px] w-[100vw] h-[100vh]" id="myBurger" v-show="burger">
        <div class="container px-[16px] mx-auto py-[28px] flex items-center justify-end">
          <img @click="closeBurger" class="cursor-pointer max-w-[24px] h-auto object-cover"
            src="@/static/icons/close.svg" />
        </div>
        <div class="flex flex-col items-center mt-[24px] gap-[16px]">
          <nuxt-link v-for="(item, index) in headerLink" :key="index" :to="item.link" :exact="item.exact"
            class="header-menu__link text-white leading-[130%] text-[24px] xl:text-[16px] font-medium mx-2 lg:mx-4 duration-200 transition-all"
            :class="{ _active: $route.path === item.link }">
            {{ item.text }}
          </nuxt-link>
        </div>
      </div>
    </transition>
    <div class="container px-[16px] mx-auto py-[28px] flex items-center justify-between bg-transparent z-50">
      <nuxt-link to="/" data-aos="fade-right">
        <img class="max-w-[180px] lg:max-w-[215px] object-cover" src="@/static/img/logo-white.png" alt="">
      </nuxt-link>
      <div class="hidden lg:flex items-center gap-[120px] xl:gap-[150px]">
        <div class="header-menu flex items-center">
          <nuxt-link v-for="(item, index) in headerLink" :key="index" :to="item.link" :exact="item.exact"
            class="header-menu__link text-white leading-[130%] text-[13px] xl:text-[16px] font-medium mx-2 lg:mx-4 duration-200 transition-all"
            :class="{ _active: $route.path === item.link }" data-aos="fade-down" :data-aos-delay="index + 1 + '00'">
            {{ item.text }}
          </nuxt-link>
        </div>
        <div class="social-menu flex items-center justify-between">
          <a target="_blank" class="w-[24px] h-[24px] mx-[6px] object-cover" :href="settings.twitter" data-aos="fade-left" :data-aos-delay="'0'">
            <el-tooltip class="item" effect="dark" content="Twitter account" placement="top">
              <img class="w-full opacity-60 transition-all duration-300 hover:opacity-100" src="@/static/icons/twitter-header.svg" alt="" />
            </el-tooltip>
          </a>

          <a target="_blank" class="w-[24px] h-[24px] mx-[6px] object-cover" :href="settings.linkedin" data-aos="fade-left" :data-aos-delay="'0'">
            <el-tooltip class="item" effect="dark" content="Linkedin account" placement="top">
              <img class="w-full opacity-60 transition-all duration-300 hover:opacity-100" src="@/static/icons/linkedin-header.svg" alt="" />
            </el-tooltip>
          </a>

          <a target="_blank" class="w-[24px] h-[24px] mx-[6px] object-cover" :href="settings.instagram" data-aos="fade-left" :data-aos-delay="'0'">
            <el-tooltip class="item" effect="dark" content="Instagram account" placement="top">
              <img class="w-full opacity-60 transition-all duration-300 hover:opacity-100" src="@/static/icons/instagram-header.svg" alt="" />
            </el-tooltip>
          </a>
        </div>
      </div>
      <div class="lg:hidden">
        <img @click="openBurger" class="cursor-pointer" src="@/static/icons/menu.svg" />
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
    computed: {
    ...mapState({
      settings: (state) => state.settings,
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchSettings")
  },
  data() {
    return {
      activeMenu: false,
      headerLink: [
        { link: "/about", text: "About us", exact: true },
        { link: "/how-it-works", text: "How it works" },
        { link: "/transport-options", text: "Transport options" },
        // { link: "/pages/who-we-serve", text: "Who we serve" },
        { link: "/contacts", text: "Contacts" },
      ],
      socials: [
        { url: 'https://twitter.com/', img: require('@/static/icons/twitter-header.svg'), desc: 'Twitter account' },
        { url: 'https://www.instagram.com/', img: require('@/static/icons/instagram-header.svg'), desc: 'Instagram account' },
        { url: 'https://www.youtube.com/', img: require('@/static/icons/linkedin-header.svg'), desc: 'Linkedin account' }
      ],
      burger: false,
      toggle: false,
    };
  },
  watch: {
    $route() {
      this.closeBurger()
    },
  },
  methods: {
    openBurger() {
      this.burger = true
      const body = document.querySelector('body')
      body.style.overflow = 'hidden'
    },
    closeBurger() {
      this.burger = false
      const body = document.querySelector('body')
      body.style.overflow = 'auto'
    },
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


.translateX-enter{
	transform:translateX(-200px);
	opacity: 0;
}

.translateX-enter-active,.translateX-leave-active{
	transform-origin: top left 0;
	transition:.2s ease;
}

.translateX-leave-to{
	transform: translateX(-200px);
	opacity: 0;
}
</style>
