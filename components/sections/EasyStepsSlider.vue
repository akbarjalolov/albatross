<template>
  <div class="relative py-[60px]">
    <img class="absolute left-[1%] top-[7%]" src="@/static/img/arrow-1.png" alt="" />
    <div class="container mx-auto">
        <section-title title="Easy Steps" />
        <VueSlickCarousel v-bind="settings" :arrows="true" :dots="true">
            <div v-for="(item, index) in steps" :key="index" class="group group-steps border border-solid border-[#D3D3D5] duration-300 hover:bg-dark hover:border-b-2 hover:border-b-dBlue rounded-3xl p-[24px]">
                <h3 class="title-gradient group-hover:border-[#00AFEF] duration-300">{{item.step}}</h3>
                <p class="text-dark group-hover:text-white duration-300 font-medium text-[24px] leading-130 mt-[16px] cursor-pointer">{{item.title}}</p>
                <p class="text-dark group-hover:text-white duration-300 font-normal text-[16px] leading-140 mt-[12px] cursor-pointer">{{item.context}}</p>
            </div>

        </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import SectionTitle from "../SectionTitle.vue";
export default {
  name: "MyComponent",
  components: { VueSlickCarousel, SectionTitle },
  data() {
    return {
        steps: [
            {
                step: '01',
                title: 'How trucking works?',
                context: 'Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.'
            },
            {
                step: '02',
                title: 'How trucking works?',
                context: 'Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.'
            },
            {
                step: '03',
                title: 'How trucking works?',
                context: 'Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.'
            }
        ],
      settings: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        sliceBetween: '20px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
.slick-slide {
	margin: 0 10px;
    max-width: 384px;
}

@media screen and (max-width: 1024px) {
    .slick-slide {
        max-width: 90% !important;
        margin: 0 10px 0;
    }
    
}
    
.slick-list {
	margin: 0 -10px;
    margin-top: 32px !important;
}
</style>