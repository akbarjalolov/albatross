<template>
    <div>
        <h4>Reviews</h4>
        <swiper
      class="swiper parentSwiper !flex mt-[28px]"
      :slides-per-view="5"
      :slides-per-group="2"
      :slides-per-group-skip="1"
      :centered-slides="false"
      :grab-cursor="true"
      :speed="5000"
      :infinity="true"
      :loop="true"
      :keyboard="{ enabled: true }"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 100 }"
    >
      <swiper-slide v-for="(item, index) in data" :key="index" class="slide">
        <a class="inline-block w-ful h-full relative group" :href="item.url">
          <img class="w-full h-full object-cover" :src="item.img" alt="" />
          <div
            class="absolute w-full h-full top-0 left-0 opacity-0 duration-150 group-hover:opacity-100 bg-[#1160e88e] flex items-center justify-center"
          >
          </div>
        </a>
      </swiper-slide>
    </swiper>

    </div>
</template>

<script>

    export default {
        data(){
            return {
                data: [
                     {
                    img: 'https://picsum.photos/400/500',
                    title: 'title2'        
                },
                 {
                    img: 'https://picsum.photos/500/400',
                    title: 'title3'        
                }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .parentSwiper .swiper-wrapper {
  display: flex;
}

.parentSwiper .slide {
  width: 280px !important;
  height: 280px !important;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>