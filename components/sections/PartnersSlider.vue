<template>
    <div class="bg-[#F5F8FC] py-[20px] lg:py-[60px] my-[20px]">
      <section-title title="Partners" class=""/>
      <swiper
      class="swiper parentSwiper !flex mt-[28px]"
      :slides-per-view="5"
      :slides-per-group="1"
      :slides-per-group-skip="1"
      :centered-slides="false"
      :grab-cursor="true"
      :speed="1000"
      :infinity="true"
      :loop="true"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      slidesPerView="auto"
      :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
      }"

    >
      <swiper-slide v-for="(item, index) in data" :key="index" class="partner-slide">
               <a :href="item.url" target="_blank" class="w-full h-full">
                <div class="left-gradient"></div>
                <div class="top-gradient"></div>
                <img :src="item.img" class="max-w-[80px] lg:max-w-[110px] h-auto w-full object-cover mx-auto" alt="">
                </a>
      </swiper-slide>
    </swiper>

    <swiper
      class="swiper parentSwiper !flex mt-[24px]"
      :slides-per-view="5"
      :slides-per-group="1"
      :slides-per-group-skip="1"
      :centered-slides="false"
      :grab-cursor="true"
      :speed="5000"
      :infinity="true"
      :loop="true"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 100 }"
    >
      <swiper-slide v-for="(item, index) in data" :key="index" class="partner-slide">
        <a :href="item.url" target="_blank" class="w-full h-full overflow-hidden">
          <div class="left-gradient"></div>
          <div class="top-gradient"></div>
          <img :src="item.img" class="max-w-[80px] lg:max-w-[110px] h-auto w-full object-cover mx-auto" alt="">
        </a>
      </swiper-slide>
    </swiper>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'

    export default {
  components: { SectionTitle },
        data(){
            return {
                data: [
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    url: 'https://google.com'       
                  },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .parentSwiper .swiper-wrapper {
  display: flex;
}

.parentSwiper .partner-slide {
  width: 240px !important;
  height: 80px !important;
  background-color: #FFFFFF;
  background-position: center;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 18px;
  margin-right: 24px;
  position: relative;
  overflow: hidden;
}

.parentSwiper .partner-slide:hover {
  .top-gradient {
    opacity: 1;
  }
  .left-gradient {
    opacity: 0;
  }
}

.left-gradient {
    position: absolute;
    width: 4px;
    height: 44px;
    left: 16px;
    top: 18px;
    background: linear-gradient(63.82deg, #2B0ABF 12.65%, #26C0DE 87.35%);
    border-radius: 150px;
    opacity: 1;
    transition: all 0.3s ease;
}

.top-gradient {
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
    background: linear-gradient(63.82deg, #2B0ABF 12.65%, #26C0DE 87.35%);
    border-radius: 150px;
    opacity: 0;
    transition: all 0.3s ease;
}

</style>