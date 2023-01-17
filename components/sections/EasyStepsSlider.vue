<template>
  <div id="easySteps" class="relative py-[30px] lg:py-[60px]">
    <img
      class="absolute hidden lg:block left-[1%] top-[7%] vert-move"
      src="@/static/img/arrow-1.png"
      alt=""
    />
    <div class="container mx-auto h-[300px] md:h-auto">
      <section-title title="Easy Steps" />
      <VueSlickCarousel class="parentSwiper" v-bind="settings">
        <div
          v-for="(item, index) in steps"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index + 1 + '00'"
          class="
            group group-steps
            max-w-[385px]
            w-full
            border-2 border-solid border-[#D3D3D5]
            duration-300
            hover:bg-dark hover:border-b-2 hover:border-b-dBlue
            rounded-3xl
            p-[24px]
          "
        >
          <h3 class="title-gradient group-hover:border-[#00AFEF] duration-300">
            {{ item.step }}
          </h3>
          <p
            class="
              text-dark
              group-hover:text-white
              duration-300
              font-medium
              text-[18px]
              lg:text-[24px]
              leading-130
              mt-[16px]
              cursor-pointer
            "
          >
            {{ item.title }}
          </p>
          <p
            class="
              text-dark
              group-hover:text-white
              duration-300
              font-normal
              text-[13px]
              lg:text-[16px]
              leading-140
              mt-[12px]
              cursor-pointer
            "
          >
            {{ item.context }}
          </p>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
 import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: "MyComponent",
  components: { SectionTitle, VueSlickCarousel },
  data() {
    return {
      steps: [
        {
          step: "01",
          title: "How trucking works?",
          context:
            "Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.",
        },
        {
          step: "02",
          title: "How trucking works?",
          context:
            "Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.",
        },
        {
          step: "03",
          title: "How trucking works?",
          context:
            "Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.",
        },
      ],
      settings: {
        "dots": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 800,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 680,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    };
  },
};
</script>

<style>
 .parentSwiper {
  display: flex;
  justify-content: space-between;
 } 
</style>
