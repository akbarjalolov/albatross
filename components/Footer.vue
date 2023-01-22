<template>
  <footer class="footer flex flex-col items-center justify-center py-[32px]">
    <div class="container mx-auto items-center justify-center">
      <div
        class="flex items-center gap-[24px] justify-center"
        data-aos="fade-up"
      >
        <a href="/">
          <img
            class="h-[36px] lg:h-[48px] w-auto object-cover"
            src="@/static/img/logo-white.png"
            alt=""
          />
        </a>
        <a href="/">
          <img
            class="h-[36px] lg:h-[48px] w-auto object-cover"
            src="@/static/img/logo-fmcsa.png"
            alt=""
          />
        </a>
      </div>
      <h5
        class="
          font-normal
          text-[13px]
          lg:text-[16px]
          leading-[22px]
          text-[#F5F8FC]
          mt-[24px]
          text-center
          w-[70%]
          lg:w-[55%]
          mx-auto
        "
        data-aos="fade-up"
      >
        {{ settings?.footer_info }}
      </h5>
      <div class="footer-socials flex items-center justify-center mt-24 gap-2">

        <a
          :href="settings?.instagram"
          data-aos="fade-up"
          :data-aos-delay="'00'"
          class="
            bg-[#11304D]
            transition-all
            duration-300
            hover:bg-[#00AFEF]
            f-social
            rounded-full
            flex
            items-center
            justify-center
            w-[40px]
            h-[40px]
          "
        >
          <img src="@/static/icons/f-insta.svg" />
        </a>

        <a
          :href="settings?.linkedin"
          data-aos="fade-up"
          :data-aos-delay="'100'"
          class="
            bg-[#11304D]
            transition-all
            duration-300
            hover:bg-[#00AFEF]
            f-social
            rounded-full
            flex
            items-center
            justify-center
            w-[40px]
            h-[40px]
          "
        >
          <img src="@/static/icons/f-linkedin.svg" />
        </a>

        <a
          :href="settings?.facebook"
          data-aos="fade-up"
          :data-aos-delay="'200'"
          class="
            bg-[#11304D]
            transition-all
            duration-300
            hover:bg-[#00AFEF]
            f-social
            rounded-full
            flex
            items-center
            justify-center
            w-[40px]
            h-[40px]
          "
        >
          <img src="@/static/icons/f-face.svg" />
        </a>

        <a
          :href="settings?.twitter"
          data-aos="fade-up"
          :data-aos-delay="'300'"
          class="
            bg-[#11304D]
            transition-all
            duration-300
            hover:bg-[#00AFEF]
            f-social
            rounded-full
            flex
            items-center
            justify-center
            w-[40px]
            h-[40px]
          "
        >
          <img src="@/static/icons/f-twit.svg" />
        </a>

        <a
          :href="settings?.instagram"
          data-aos="fade-up"
          :data-aos-delay="'400'"
          class="
            bg-[#11304D]
            transition-all
            duration-300
            hover:bg-[#00AFEF]
            f-social
            rounded-full
            flex
            items-center
            justify-center
            w-[40px]
            h-[40px]
          "
        >
          <img src="@/static/icons/f-tg.svg" />
        </a>

      </div>
      <div
        class="
          w-full
          px-[16px]
          flex flex-wrap flex-col
          md:flex-row
          items-center
          justify-between
          mt-[16px]
          md:mt-[64px]
          border-b border-solid border-[#11304D]
          pb-24
        "
      >
        <nuxt-link
          :to="item.link"
          v-for="(item, index) in footerLinks"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index + 1 + '00'"
          class="
            font-normal
            leading-130
            text-[16px] text-white
            opacity-60
            duration-300
            hover:opacity-100
          "
        >
          {{ item.text }}
        </nuxt-link>
      </div>
      <div
        class="
          flex
          px-[16px]
          items-center
          flex-col
          md:flex-row
          justify-between
          mt-24
        "
      >
        <div class="flex flex-wrap items-center gap-[24px]">
          <a
            class="flex items-center gap-[8px] hover-underline"
            href="mailto:info@albatrosllc.com"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <span
              class="
                bg-[#11304D]
                transition-all
                duration-300
                hover:bg-[#00AFEF]
                f-social
                rounded-full
                flex
                items-center
                justify-center
                w-[40px]
                h-[40px]
                cursor-pointer
              "
            >
              <img src="@/static/icons/mail.svg" />
            </span>
            <a :href="`mailto:${settings?.email}`" class="text-white font-normal text-[16px] leading-130">
              {{ settings?.email }}
            </a>
          </a>
          <a
            class="flex items-center gap-[8px] hover-underline"
            :href="`tel: ${settings?.phone_number}`"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <span
              class="
                bg-[#11304D]
                transition-all
                duration-300
                hover:bg-[#00AFEF]
                f-social
                rounded-full
                flex
                items-center
                justify-center
                w-[40px]
                h-[40px]
                cursor-pointer
              "
            >
              <img src="@/static/icons/call.svg" />
            </span>
            <h4 class="text-white font-normal text-[16px] leading-130">
              {{ settings?.phone_number }}
            </h4>
          </a>
        </div>
        <h4
          class="
            text-white
            font-normal
            text-[16px]
            leading-130
            mt-[16px]
            md:mt-0
          "
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          © {{ currentYear }} Albatros LLC. All rights reserved.
        </h4>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapState({
      settings: (state) => state.settings,
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchSettings");
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socials: [
        {
          link: "https://instagram.com",
          img: require("@/static/icons/f-insta.svg"),
        },
        {
          link: "https://instagram.com",
          img: require("@/static/icons/f-linkedin.svg"),
        },
        {
          link: "https://instagram.com",
          img: require("@/static/icons/f-face.svg"),
        },
        {
          link: "https://instagram.com",
          img: require("@/static/icons/f-twit.svg"),
        },
        {
          link: "https://instagram.com",
          img: require("@/static/icons/f-tg.svg"),
        },
      ],
      footerText:
        "To begin, fill out our customized form with your first vehicle shipping details to get your custom Auto Transport quote. Shortly after that, you will receive your quote on your email and as a text message. You can book online through the link you receive in your email, or you can contact one of our exper",
      footerLinks: [
        { link: "/about", text: "About us" },
        { link: "/about", text: "Who we serve" },
        { link: "/how-it-works", text: "How it works" },
        { link: "/contacts", text: "Contacts" },
        { link: "/transport-options", text: "Transport options" },
        { link: "/blogs", text: "Blog" },
        { link: "/about", text: "Terms of use" },
        { link: "/about", text: "Privacy policy" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-image: url("@/static/img/footer-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hover-underline {
  transition: all ease 0.3s;

  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
    text-underline-offset: 2px;
  }
}
</style>
