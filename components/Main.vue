<template>
  <div class="main-section relative min-h-[98vh] w-full flex flex-col">
    <Header />
    <h1 class="bg-stroke-text">Shipping</h1>
    <h4
      class="text-white font-semibold text-[48px] leading-130 text-center mt-[135px]"
    >
      {{ mainText }}
    </h4>
    <p class="text-dGray font-normal leading-130 text-xl mt-[12px] text-center">{{ subtext }}</p>
    <c-button :text="buttonText" dynamicClass="max-w-[220px] mx-auto mt-[24px]"></c-button>

    <div class="w-full relative mt-[100px] ">
        <!-- <img class="absolute left-0 top-[20px] w-[262px]" src="@/static/img/line-1.png" alt=""> -->
        <div class="w-[1400px] mx-auto relative">
            <div class="absolute left-0 top-0 min-w-[190px] bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
                <img class="max-w-[32px] h-auto object-cover" src="@/static/icons/headphone.png"/>
                <h3 class="text-dark text-sm leading-130 font-medium mt-8">Quote & Reservation</h3>
            </div>
            <!-- <img class="absolute left-[20px] top-[20px] w-[262px]" src="@/static/img/line-2.png" alt=""> -->

            <div class="absolute top-0 left-[42%] translate-[50%, 50%] min-w-[190px] bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
                <div class="relative">
                  <img class="absolute top-[-50px] left-[15px] max-w-[124px] h-auto object-cover" src="@/static/img/truck-mini.png"/>
                  <h3 class="text-dark text-sm leading-130 font-medium mt-8 relative">Pickup from destination</h3>
                </div>
            </div>
            <div class="absolute top-0 right-0 min-w-[190px] bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
                <img class="max-w-[32px] h-auto object-cover" src="@/static/icons/circle-check.png"/>
                <h3 class="text-dark text-sm leading-130 font-medium mt-8">Delivery & Payment</h3>
            </div>
        </div>
    </div>
    <div class="container mt-[140px] relative mx-auto flex items-center justify-between">
        <div class="w-full flex items-center justify-between">
            <button class="group flex items-center justify-center">
                <img class="border border-solid border-white group-hover:border-dBlue duration-200 rounded-full w-[28px] p-4 h-auto object-cover" src="@/static/icons/arrow-down-white.svg"/>
                <p class="text-white text-[16px] leading-130 font-normal ml-[12px] duration-200 group-hover:text-dBlue">learn more</p>
            </button>
            <div class="flex items-center">
                <div :class="{'bg-dBlue' : index == 0}" v-for="(item,index) in statistic" :key="index" class="h-[100px] w-[100px] border-solid border border-dBlue flex flex-col items-center justify-center rounded-full">
                    <h3 class="text-[white] leading-130 text-[24px] font-medium">{{item.count}}</h3>
                    <h3 class="text-[white] leading-130 text-[12px] font-normal">{{item.name}}</h3>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CButton from './CButton.vue';
export default {
  components: { CButton },
  data() {
    return {
      mainText: "We just want to get your job done!",
      subtext: 'As Soon As Possible',
      buttonText: 'Get a quote',
      statistic: [
        {
          count: 1218,
          name: 'cars shipped',
        },
        {
          count: 970,
          name: 'happy clients',
        },
        {
          count: 0,
          name: 'fatal mistakes',
        },
        {
            count: 650,
            name: 'orders per year',
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  background-image: linear-gradient(
      180deg,
      rgba(26, 27, 38, 0) -12.71%,
      rgba(3, 20, 16, 0.34) -12.7%,
      #1a1b26 100%
    ),
    url("@/static/img/main-bg.png");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}

.bg-stroke-text {
    font-style: normal;
    font-weight: 600;
    font-size: 196px;
    line-height: 130%;
    letter-spacing: 0.33em;
    opacity: 0.1;
    text-align: center;
    text-transform: uppercase;
    color: black;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #FFFFFF;
    position: absolute;
    transform: translate(-50%, 0%);
    left: 50%;
}
</style>
