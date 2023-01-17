<template>
  <div id="easySteps" class="relative py-[30px] lg:py-[60px]">
    <img class="absolute hidden lg:block left-[1%] top-[7%] vert-move" src="@/static/img/arrow-1.png" alt="" />
    <div class="container mx-auto h-[400px] lg:h-auto">
        <section-title title="Easy Steps" />
        <client-only>
        <div
          class="swiper step-swiper flex justify-between mt-[28px]"
       >  
      <div v-for="(item, index) in steps" :key="index" data-aos="fade-up" :data-aos-delay="item.aosDelay"
 class="group group-steps max-w-[385px] w-full border-2 border-solid border-[#D3D3D5] duration-300 hover:bg-dark hover:border-b-2 hover:border-b-dBlue rounded-3xl p-[24px]">
            <h3 class="title-gradient group-hover:border-[#00AFEF] duration-300">{{item.step}}</h3>
                <p class="text-dark group-hover:text-white duration-300 font-medium text-[18px] lg:text-[24px] leading-130 mt-[16px] cursor-pointer">{{item.title}}</p>
                <p class="text-dark group-hover:text-white duration-300 font-normal text-[13px] lg:text-[16px] leading-140 mt-[12px] cursor-pointer">{{item.context}}</p>
      </div>
    </div>
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
                context: 'Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.',
                aosDelay: 0
            },
            {
                step: '02',
                title: 'How trucking works?',
                context: 'Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.',
                aosDelay: 100
            },
            {
                step: '03',
                title: 'How trucking works?',
                context: 'Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well.',
                aosDelay: 200
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

img.vert-move {
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
img.vert-move {
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

</style>