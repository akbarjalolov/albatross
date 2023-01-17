<template>
  <div class="lg:py-[60px] ">
    <section-title data-aos="fade-up" title="Reviews" class="" />
    <div>
      <VueSlickCarousel class="parentSwiper !flex mt-[32px]" v-bind="settings">
        <div v-for="(item, index) in data" :key="index" data-aos="fade-up" :data-aos-delay="index + 1 +'00'" class="review-slide">
          <h3 class="text-white font-medium text-[20px] lg:text-[28px] leading-130">
            {{ item.title }}
          </h3>
          <p class="
            text-white
            font-normal
            text-[13px]
            lg:text-[16px]
            leading-140
            mt-3
          ">
            {{ item.content }}
          </p>
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
                {{ item.person }}
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
                {{ item.position }}
              </h6>
            </div>
            <img :src="item.img" class="max-h-[40px] lg:max-h-[60px] h-full w-auto" alt="" />
          </div>
        </div>
      </VueSlickCarousel>
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
        autoplay: true,
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
      },
      data: [
        {
          img: require("@/static/img/logo-rev.png"),
          title: "Outstanding service!",
          content:
            "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
          rate: 5,
          person: "Malika Sharipova",
          position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          title: "Outstanding service!",
          content:
            "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
          rate: 4,
          person: "Malika Sharipova",
          position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          title: "Outstanding service!",
          content:
            "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
          rate: 5,
          person: "Malika Sharipova",
          position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          title: "Outstanding service!",
          content:
            "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
          rate: 5,
          person: "Malika Sharipova",
          position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori",
        },
      ],
    };
  },
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