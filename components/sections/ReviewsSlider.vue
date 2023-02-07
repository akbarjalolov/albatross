<template>
  <div v-if="data && data.length" class="lg:py-[60px] mt-[24px] lg:mt-0">
    <section-title data-aos="fade-up" title="Reviews" class="" />
    <div>
      <client-only>
      <VueSlickCarousel class="parentSwiper !flex mt-[32px]" v-bind="settings">
        <a :href="item.url" v-for="(item, index) in data" :key="index" data-aos="fade-up" :data-aos-delay="index + 1 +'00'" class="review-slide ">
          <div class="flex flex-col justify-between h-[100%]">
          <div>
          <h3 class="text-white font-medium text-[20px] lg:text-[28px] leading-130">
            {{ item.title }}
          </h3>
          <h6 class="
            text-white
            font-normal
            text-[13px]
            lg:text-[16px]
            leading-140
            mt-3
          ">
            {{ item.description }}
          </h6>
          <h4 class="
            text-white
            font-medium
            text-[16px]
            lg:text-[20px]
            leading-130
            mt-[26px]
          ">
            {{ item.rate }}
          </h4>
        </div>
        <div>
          <div class="flex items-center">
            <img v-for="(i, index) in item.rate" :key="index" src="@/static/icons/star.svg" alt="" />
          </div>
          <div class="flex items-center justify-between flex-col lg:flex-row">
            <div class="flex flex-col">
              <h4 class="
                text-white
                font-medium
                text-[16px]
                lg:text-[20px]
                leading-[26px]
                mt-[24px]
              ">
                {{ item.full_name }}
              </h4>
              <h6 class="
                text-white
                opacity-30
                font-normal
                text-[12px]
                lg:text-[14px]
                leading-[16px]
                lg:leading-[24px]
                mt-[4px]
              ">
                {{ item.address }}
              </h6>
            </div>
            <img :src="item.logo_url" class="h-auto lg:max-h-[60px] w-auto" alt="" />
          </div>
        </div>
      </div>
        </a>
      </VueSlickCarousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { SectionTitle, VueSlickCarousel },

  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1.72,
        slidesToScroll: 1,
        loop: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 617,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },

        ],
      }
    };
  },
  props: {
    data: {
      type: Array || Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.parentSwiper .swiper-wrapper {
  display: flex;
}

.parentSwiper .review-slide {
  background-image: url("@/static/img/review-card-bg.png");
  background-position: center;
  background-size: cover;
  border-radius: 32px;
  flex-direction: column;
  padding: 28px;
  height: 349px;
}
</style>

<!-- <style lang="scss">
.slick-list .slick-track .slick-slide {
  max-width: 974px !important;
}

@media screen and (max-width: 768px) {
  .slick-list .slick-track .slick-slide {
  max-width: 370px !important;
}
}

@media screen and (max-width: 400px) {
  .slick-list .slick-track .slick-slide {
  max-width: 315px !important;
}
} -->
</style>