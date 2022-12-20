<template>
  <footer class="footer flex flex-col items-center justify-center py-[32px]">
    <div class="container mx-auto items-center justify-center">
      <div class="flex items-center gap-[24px] justify-center">
        <img class="h-[48px] w-auto object-cover" src="@/static/img/logo-white.png" alt="">
        <img class="h-[48px] w-auto object-cover" src="@/static/img/logo-fmcsa.png" alt="">
      </div>
      <h5 class="font-normal text-[16px] leading-[22px] text-[#F5F8FC] mt-[24px] text-center w-[55%] mx-auto">{{footerText}}</h5>
      <div class="footer-socials flex items-center justify-center mt-24 gap-2">
        <a v-for="(item,index) in socials" :key="index" :href="item.link" class="bg-[#11304D] f-social rounded-full flex items-center justify-center w-[40px] h-[40px]">
          <img :src="item.img" />
        </a>
      </div>
      <div class="w-full flex items-center justify-between mt-[64px] border-b border-solid border-[#11304D] pb-24">
        <nuxt-link :to="item.link" v-for="(item, index) in footerLinks" :key="index" class="font-normal leading-130 text-[16px] text-white opacity-60 duration-300 hover:opacity-100">
          {{item.text}}
        </nuxt-link>
      </div>
      <div class="flex items-center justify-between mt-24">
        <div class="flex items-center gap-[24px]">
          <a class="flex items-center gap-[8px]" href="mailto:info@albatrosllc.com">
            <span class="bg-[#11304D] f-social rounded-full flex  items-center justify-center w-[40px] h-[40px] cursor-pointer">
              <img src="@/static/icons/mail.svg" />
            </span>
            <h4 class="text-white font-normal text-[16px] leading-130">info@albatrosllc.com</h4>
          </a>
          <a class="flex items-center gap-[8px]" href="tel: (865) 730 4992">
            <span class="bg-[#11304D] f-social rounded-full flex  items-center justify-center w-[40px] h-[40px] cursor-pointer">
              <img src="@/static/icons/call.svg" />
            </span>
            <h4 class="text-white font-normal text-[16px] leading-130">(865) 730 4992</h4>
          </a>
        </div>
        <h4 class="text-white font-normal text-[16px] leading-130">© 2023 Albatros LLC. All rights reserved.</h4>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Footer',
    data() {
      return {
        socials: [
          {
            link: 'https://instagram.com',
            img: require('@/static/icons/f-insta.svg')
          },
          {
            link: 'https://instagram.com',
            img: require('@/static/icons/f-yt.svg')
          },
          {
            link: 'https://instagram.com',
            img: require('@/static/icons/f-face.svg')
          },
          {
            link: 'https://instagram.com',
            img: require('@/static/icons/f-twit.svg')
          },
          {
            link: 'https://instagram.com',
            img: require('@/static/icons/f-tg.svg')
          },
          ],
        footerText: 'To begin, fill out our customized form with your first vehicle shipping details to get your custom Auto Transport quote. Shortly after that, you will receive your quote on your email and as a text message. You can book online through the link you receive in your email, or you can contact one of our exper',
        footerLinks: [
          { link: '/about', text: 'About us' },
          { link: '/about', text: 'Who we serve' },
          { link: '/about', text: 'How it works' },
          { link: '/about', text: 'Contacts' },
          { link: '/about', text: 'Transport options' },
          { link: '/about', text: 'Blog' },
          { link: '/about', text: 'Terms of use' },
          { link: '/about', text: 'Privacy policy' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .footer {
    background-image: url('@/static/img/footer-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .f-social:hover {
    
  }
</style>
