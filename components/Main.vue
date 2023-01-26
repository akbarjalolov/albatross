<template>
  <div class="main-section relative min-h-[98vh] w-full flex flex-col">
    <Header />
    <div class="bg-stroke-text">
      <div class="typing-demo">
        AUTO SHIPMENT
      </div>
    </div>
    <h4 class="text-white font-semibold text-[20px] md:text-[48px] leading-130 text-center mt-[30px] lg:mt-[135px]"
      data-aos="fade-up">
      {{ mainText }}
    </h4>
    <h4 class="text-dGray font-normal leading-130 text-[14px] lg:text-xl mt-[12px] text-center" data-aos="fade-up">{{
      subtext
    }}</h4>
    <div class="w-full max-w-[450px] lg:max-w-[1400px] flex justify-center mx-auto">
      <img class="w-full h-auto object-cover max-w-[105px] lg:max-w-[575px]" src="@/static/img/line-button.png"
        data-aos="fade-right" data-aos-delay="400" />
      <c-button :text="buttonText" dynamicClass="max-w-[200px] min-w-[180px] mx-auto mt-[24px]" data-aos="fade-up"
        data-aos-delay="400"></c-button>
      <div class="w-full"></div>
    </div>
    <div class="w-full mt-[35px] lg:mt-[100px]">
      <div class="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-0 items-center justify-center mx-auto">
        <div class="hidden lg:block">
          <img class="w-full h-auto object-cover" src="@/static/img/line-1.png" data-aos="fade-right"
            data-aos-delay="400" />


        </div>
        <div
          class="max-w-[190px] w-full bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
          <img class="max-w-[32px] h-auto object-cover" src="@/static/icons/headphone.png" />
          <h3 class="text-dark text-sm leading-130 font-medium mt-8">Quote & Reservation</h3>
        </div>
        <div class="hidden lg:block">
          <img class="w-full h-auto object-cover" src="@/static/img/line-2.png" data-aos="fade" data-aos-delay="400" />
        </div>
        <div
          class="max-w-[190px] w-full items-center bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
          <div class="relative">
            <img class="absolute top-[-50px] left-[15px] max-w-[124px] h-auto object-cover"
              src="@/static/img/truck-mini.png" />
            <h3 class="text-dark text-sm leading-130 font-medium mt-[16px] relative">Pickup from destination</h3>
          </div>
        </div>
        <div class="hidden lg:block">
          <img class="w-full h-auto object-cover" src="@/static/img/line-3.png" data-aos="fade" data-aos-delay="400" />
        </div>
        <div
          class="max-w-[190px] w-full bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
          <img class="max-w-[32px] h-auto object-cover" src="@/static/icons/circle-check.png" />
          <h3 class="text-dark text-sm leading-130 font-medium mt-8">Delivery & Payment</h3>
        </div>
        <div class="hidden lg:block">
          <img class="w-full h-auto object-cover rotate-180" src="@/static/img/line-4.png" data-aos="fade-left"
            data-aos-delay="400">
        </div>
      </div>
    </div>
    <div class="container mt-[30px] lg:mt-[140px] relative mx-auto flex items-center justify-between">
      <div class="w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between">
        <button @click="scrollToDown" class="to-down group flex items-center justify-center">
          <div
            class="border border-solid border-white group-hover:border-dBlue duration-200 rounded-full w-[28px] p-4 h-auto">
            <span class="arrow-container block object-cover">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99984 3.89581V14.1041" stroke="white" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M11.9167 11.1875L9 14.1042" stroke="white" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M6.0835 11.1875L9.00016 14.1042" stroke="white" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <h6 class="text-white text-[16px] leading-130 font-normal ml-[12px] duration-200 group-hover:text-dBlue">Learn
            more</h6>
        </button>
        <div class="flex items-center flex-wrap mt-[30px] lg:mt-0">

          <div class="bg-dBLue h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] border-solid border border-dBlue flex flex-col items-center justify-center rounded-full mr-[12px]"
            data-aos="fade-left" :data-aos-delay="'00'">
            <h3 v-if="settings.shipped" class="text-white leading-130 text-[12px] lg:text-[24px] font-medium">
              <number ref="number1" :from="0" :to="settings.shipped" :duration="5" :delay="0" easing="Power1.easeOut" />
            </h3>
            <h3 class="text-white leading-130 text-[10px] lg:text-[12px] font-normal">cars shipped</h3>
          </div>

          <div class="bg-dBLue h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] border-solid border border-dBlue flex flex-col items-center justify-center rounded-full mr-[12px]"
            data-aos="fade-left" :data-aos-delay="'100'">
            <h3 v-if="settings.clients" class="text-white leading-130 text-[12px] lg:text-[24px] font-medium">
              <number ref="number1" :from="0" :to="settings.clients" :duration="5" :delay="0" easing="Power1.easeOut" />
            </h3>
            <h3 class="text-white leading-130 text-[10px] lg:text-[12px] font-normal">happy clients</h3>
          </div>

          <div class="bg-dBLue h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] border-solid border border-dBlue flex flex-col items-center justify-center rounded-full mr-[12px]"
            data-aos="fade-left" :data-aos-delay="'200'">
            <h3 v-if="settings.mistakes == 0" class="text-white leading-130 text-[12px] lg:text-[24px] font-medium">
              0
            </h3>
            <h3 v-else-if="settings.mistakes" class="text-white leading-130 text-[12px] lg:text-[24px] font-medium">
              <number ref="number1" :from="0" :to="settings.mistakes" :duration="5" :delay="0" easing="Power1.easeOut" />
            </h3>
            <h3 class="text-white leading-130 text-[10px] lg:text-[12px] font-normal">fatal mistakes</h3>
          </div>

          <div class="bg-dBLue h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] border-solid border border-dBlue flex flex-col items-center justify-center rounded-full mr-[12px]"
            data-aos="fade-left" :data-aos-delay="'300'">
            <h3 v-if="settings.yearly_orders" class="text-white leading-130 text-[12px] lg:text-[24px] font-medium">
              <number ref="number1" :from="0" :to="settings.yearly_orders" :duration="5" :delay="0" easing="Power1.easeOut" />
            </h3>
            <h3 class="text-white leading-130 text-[10px] lg:text-[12px] font-normal">orders per year</h3>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from './CButton.vue';
import { mapState } from 'vuex';
export default {
  layout: 'default',
  components: { CButton },

  data() {
    return {
      mainText: "We just want to get your job done!",
      subtext: 'As Soon As Possible',
      buttonText: 'Get a quote',
      carsShipped: 0,
      happyClients: 0,
      fatalMistakes: 0,
      ordersPerYear: 0,
    };
  },
  computed: {
    ...mapState({
      settings: (state) => state.settings,
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchSettings")
  },
  methods: {
    scrollToDown() {
      document.querySelector('#easySteps').scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  background-image: linear-gradient(180deg,
      rgba(26, 27, 38, 0) -12.71%,
      rgba(3, 20, 16, 0.34) -12.7%,
      #1a1b26 100%),
    url("@/static/img/main-bg.png");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 60px;
}

.bg-stroke-text {
    font-style: normal;
    font-weight: 600;
    font-size: 120px;
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
    margin-top: 4%;
}

@media (max-width: 1100px) {
  .bg-stroke-text {
    font-size: 120px;
  }
}

@media (min-width: 900px) and (max-width: 1099px) {
  .bg-stroke-text {
    font-size: 110px;
  }
}


@media (min-width: 600px) and (max-width: 899px) {
  .bg-stroke-text {
    font-size: 80px;
  }
}

@media (min-width: 375px) and (max-width: 599px) {
  .bg-stroke-text {
    font-size: 50px;
  }
}

.wrapper {
  height: 100vh;
  /*This part is important for centering*/
  display: grid;
  place-items: center;
}

.typing-demo {
  width: 100%;
  animation: typing 2s steps(12), blink .5s step-end alternate;
  white-space: nowrap;
  overflow: hidden;
  // border-right: 3px solid white;
}

@keyframes typing {
  from {
    width: 0
  }
}

@keyframes blink {
  50% {
    border-color: transparent
  }
}


.to-down:hover .arrow-container svg path {
  stroke: #00AFEF !important;
}

@keyframes bounce {
  50% {
    transform: translateY(-3px);
  }
}

.arrow-container {
  animation: bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
</style>
