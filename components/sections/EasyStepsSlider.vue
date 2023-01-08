<template>
  <div class="relative py-[30px] lg:py-[60px]">
    <img class="absolute hidden lg:block left-[1%] top-[7%]" src="@/static/img/arrow-1.png" alt="" />
    <div class="container mx-auto h-[400px] lg:h-auto">
        <section-title title="Easy Steps" />
        <client-only>
        <swiper
          class="swiper step-swiper !flex mt-[28px]"
          :slides-per-view="3"
          :slides-per-group="1"
          :slides-per-group-skip="3"
          :centered-slides="false"
          :grab-cursor="true"
          :speed="5000"
          :infinity="true"
          :loop="true"
          :keyboard="{ enabled: true }"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 100 }"  
       >  
      <swiper-slide v-for="(item, index) in steps" :key="index" class="group group-steps border max-w-[385px] w-full border-solid border-[#D3D3D5] duration-300 hover:bg-dark hover:border-b-2 hover:border-b-dBlue rounded-3xl p-[24px]">
            <h3 class="title-gradient group-hover:border-[#00AFEF] duration-300">{{item.step}}</h3>
                <p class="text-dark group-hover:text-white duration-300 font-medium text-[18px] lg:text-[24px] leading-130 mt-[16px] cursor-pointer">{{item.title}}</p>
                <p class="text-dark group-hover:text-white duration-300 font-normal text-[13px] lg:text-[16px] leading-140 mt-[12px] cursor-pointer">{{item.context}}</p>
      </swiper-slide>
    </swiper>
    </client-only>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
export default {
  name: "MyComponent",
  components: { SectionTitle },
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
            },
        ],
    };
  },
};
</script>

<style>

.step-swiper .swiper-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
}
</style>