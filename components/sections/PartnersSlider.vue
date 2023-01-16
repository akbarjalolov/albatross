<template>
  <div class="bg-[#F5F8FC] py-[20px] lg:py-[60px]">
    <section-title title="Partners" class="" />
    <vue-marquee-slider id="marquee-slider-loop" :speed="25000" :reverse="true">
      <div v-for="(item, index) in data" :key="index" class="partner-slide">
        <a :href="item.url" target="_blank" class="min-w-[240px] w-full h-full">
          <div class="left-gradient"></div>
          <div class="top-gradient"></div>
          <img
            :src="item.img"
            class="
              max-w-[80px]
              lg:max-w-[110px]
              h-auto
              w-full
              object-cover
              mx-auto
            "
            alt=""
          />
        </a>
      </div>
    </vue-marquee-slider>

      <vue-marquee-slider id="marquee-slider-loop" :speed="25000" :reverse="true">
      <div v-for="(item, index) in data" :key="index" class="partner-slide">
        <a :href="item.url" target="_blank" class="min-w-[240px] w-full h-full">
          <div class="left-gradient"></div>
          <div class="top-gradient"></div>
          <img
            :src="item.img"
            class="
              max-w-[80px]
              lg:max-w-[110px]
              h-auto
              w-full
              object-cover
              mx-auto
            "
            alt=""
          />
        </a>
      </div>
    </vue-marquee-slider>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";

export default {
  components: { SectionTitle },
  data() {
    return {
      data: [
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
        {
          img: require("@/static/img/logo-rev.png"),
          url: "https://google.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.parentSwiper .swiper-wrapper {
  display: flex;
}

.partner-slide {
  min-width: 240px !important;
  margin-right: 24px !important;
  height: 80px !important;
  background-color: #ffffff;
  background-position: center;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 18px;
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
  background: linear-gradient(63.82deg, #2b0abf 12.65%, #26c0de 87.35%);
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
  background: linear-gradient(63.82deg, #2b0abf 12.65%, #26c0de 87.35%);
  border-radius: 150px;
  opacity: 0;
  transition: all 0.3s ease;
}
</style>