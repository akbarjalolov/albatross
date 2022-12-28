<template>
  <div class="main-section relative min-h-[98vh] w-full flex flex-col">
    <Header />
    <div class="bg-stroke-text">
      <div class="typing-demo">
         SHIPPING
      </div>
    </div>

    <h4
      class="text-white font-semibold text-[20px] md:text-[48px] leading-130 text-center mt-[30px] lg:mt-[135px]"
    >
      {{ mainText }}
    </h4>
    <p class="text-dGray font-normal leading-130 text-[14px] lg:text-xl mt-[12px] text-center">{{ subtext }}</p>
    <div class="w-full max-w-[450px] lg:max-w-[1400px] flex justify-center mx-auto">
        <img class="w-full h-auto object-cover max-w-[105px] lg:max-w-[575px]" src="@/static/img/line-button.png"/>
        <c-button :text="buttonText" dynamicClass="max-w-[200px] min-w-[180px] mx-auto mt-[24px]"></c-button>
        <div class="w-full"></div>
    </div>
    <div class="w-full mt-[35px] lg:mt-[100px]">
        <div class="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-0 items-center justify-center mx-auto">
             <div class="hidden lg:block">
                <img class="w-full h-auto object-cover" src="@/static/img/line-1.png"/>
            </div>
            <div class="max-w-[190px] w-full bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
                <img class="max-w-[32px] h-auto object-cover" src="@/static/icons/headphone.png"/>
                <h3 class="text-dark text-sm leading-130 font-medium mt-8">Quote & Reservation</h3>
            </div>
            <div class="hidden lg:block">
                <img class="w-full h-auto object-cover" src="@/static/img/line-2.png"/>
            </div>
            <div class="max-w-[190px] w-full items-center bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
                <div class="relative">
                  <img class="absolute top-[-50px] left-[15px] max-w-[124px] h-auto object-cover" src="@/static/img/truck-mini.png"/>
                  <h3 class="text-dark text-sm leading-130 font-medium mt-[16px] relative">Pickup from destination</h3>
                </div>
            </div>
            <div class="hidden lg:block">
                <img class="w-full h-auto object-cover" src="@/static/img/line-3.png"/>
            </div>
            <div class="max-w-[190px] w-full bg-white border border-solid border-dBlue rounded-xl flex flex-col p-[12px] min-h-[82px]">
                <img class="max-w-[32px] h-auto object-cover" src="@/static/icons/circle-check.png"/>
                <h3 class="text-dark text-sm leading-130 font-medium mt-8">Delivery & Payment</h3>
            </div>
            <div class="hidden lg:block">
              <img class="w-full h-auto object-cover rotate-180" src="@/static/img/line-4.png">
            </div>
        </div>
    </div>
    <div class="container mt-[30px] lg:mt-[140px] relative mx-auto flex items-center justify-between">
        <div class="w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between">
            <button class="group flex items-center justify-center">
                <img class="border border-solid border-white group-hover:border-dBlue duration-200 rounded-full w-[28px] p-4 h-auto object-cover" src="@/static/icons/arrow-down-white.svg"/>
                <p class="text-white text-[16px] leading-130 font-normal ml-[12px] duration-200 group-hover:text-dBlue">learn more</p>
            </button>
            <div class="flex items-center flex-wrap mt-[30px] lg:mt-0">
                <div :class="{'bg-dBlue' : index == 0}" v-for="(item,index) in statistic" :key="index" class="h-[80px] lg:h-[100px] w-[80px] lg:w-[100px] border-solid border border-dBlue flex flex-col items-center justify-center rounded-full">
                    <h3 class="text-[white] leading-130 text-[12px] lg:text-[24px] font-medium">
                       <number
                          ref="number1"
                          :from="0"
                          :to="item.count"
                          :duration="5"
                          :delay="2"
                          easing="Power1.easeOut"/>
                      </h3>
                    <h3 class="text-[white] leading-130 text-[10px] lg:text-[12px] font-normal">{{item.name}}</h3>
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
      options: {
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
      },
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
  methods: {
  }
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
  padding-bottom: 60px;
}

.bg-stroke-text {
    font-style: normal;
    font-weight: 600;
    font-size: 160px;
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
  width: 11ch;
  animation: typing 2s steps(8), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white;
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

</style>
