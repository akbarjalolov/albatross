<template>
  <div v-if="data && data.length" class="bg-[#F5F8FC] py-[60px] partners-slider">
    <section-title title="Partners"  class="mb-[36px]" />
    <div class="mb-[24px]">
      <VueSlickCarousel v-bind="settings" class="parentSwiper">
        <div v-for="(item, index) in data" :key="index" class="partner-slide">
          <a :href="item.url" target="_blank" class="w-full h-full ">
            <div class="left-gradient"></div>
            <div class="top-gradient"></div>
            <img :src="item.logo_url" class="
                  w-auto
                  lg:max-h-[45px]
                  h-full
                  object-contain
                  mx-auto
                " alt="" />
          </a>
        </div>
      </VueSlickCarousel>
    </div>
    <!-- <div data-aos="fade-up" data-aos-delay="200">
        <VueSlickCarousel v-bind="settings2">
          <div v-for="(item, index) in data" :key="index" class="partner-slide">
            <a
              :href="item.url"
              target="_blank"
              class="min-w-[240px] w-full h-full"
            >
              <div class="left-gradient"></div>
              <div class="top-gradient"></div>
              <img
                :src="item.logo_url"
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
        </VueSlickCarousel>
    </div> -->
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
import VueSlickCarousel from "vue-slick-carousel";
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
        slidesToShow: 6,
        slidesToScroll: 1,
        loop: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
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
      // settings2: {
      //   dots: false,
      //   arrows: false,
      //   centerMode: true,
      //   infinite: true,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
      //   slidesToShow: 6,
      //   slidesToScroll: 1,
      //   loop: true,
      //   responsive: [
      //     {
      //       breakpoint: 991,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //       },
      //     },
      //     {
      //       breakpoint: 617,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //       },
      //     },
      //   ],
      // },
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.slick-slide {
  min-width: 240px !important;
}

.partner-slide {
  width: 240px !important;
  height: 80px;
  background-color: #ffffff;
  background-position: center;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  padding: 18px;
  position: relative;
  overflow: hidden;

  img {
    transition: 0.3s all;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    pointer-events: none;
  }

  &:hover {
    img {
      -webkit-filter: grayscale(0%);
      /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }

  }
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