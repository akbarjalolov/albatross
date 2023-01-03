<template>
    <div class="lg:py-[60px]">
        <section-title title="Reviews" class=""/>
        <client-only>
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
      <swiper-slide v-for="(item, index) in data" :key="index" class="review-slide">
            <h3 class="text-white font-medium text-[20px] lg:text-[28px] leading-130">{{item.title}}</h3>
            <p class="text-white font-normal text-[13px] lg:text-[16px] leading-140 mt-3">{{item.content}}</p>
            <h4 class="text-white font-medium text-[16px] lg:text-[20px] leading-130 mt-[26px]">{{item.rate}}</h4>
            <div class="flex items-center">
                <img v-for="(i,index) in item.rate" :key="index" src="@/static/icons/star.svg" alt="">
            </div>
            <div class="flex items-center justify-between flex-col lg:flex-row">
                <div class="flex flex-col">
                    <h4 class="text-white font-medium text-[16px] lg:text-[20px] leading-[26px] mt-[24px]">{{item.person}}</h4>
                    <h6 class="text-white opacity-30 font-normal text-[12px] lg:text-[14px] leading-[16px] lg:leading-[24px] mt-[4px]">{{item.position}}</h6>
                </div>
                <img :src="item.img" class="max-h-[40px] lg:max-h-[60px] h-full w-auto" alt="">
            </div>
      </swiper-slide>
    </swiper>
    </client-only>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'

    export default {
  components: { SectionTitle },
        data(){
            return {
                data: [
                     {
                    img: require('@/static/img/logo-rev.png'),
                    title: 'Outstanding service!',
                    content: "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
                    rate: 5,
                    person: "Malika Sharipova",
                    position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori"        
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    title: 'Outstanding service!',
                    content: "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
                    rate: 4,
                    person: "Malika Sharipova",
                    position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori"        
                  },
                  {
                    img: require('@/static/img/logo-rev.png'),
                    title: 'Outstanding service!',
                    content: "Brad was very kind, and helped me with the process. I would recommend them because of his kindness and concern for the customer. He followed up with me and answered all of my questions- maintained communication with my husband and I. Thanks Brad ! Brad was very kind, and helped me with the process.",
                    rate: 5,
                    person: "Malika Sharipova",
                    position: "“CARE CSR” konsalting kompaniyasi asoschisi va direktori"        
                  },
                ]
            }
        }
    }
</script>

<style lang="scss">
    .parentSwiper .swiper-wrapper {
  display: flex;
}

.parentSwiper .review-slide {
  width: 950px !important;
  height: 350px !important;
  background-image: url('@/static/img/review-card-bg.png');
  background-position: center;
  background-size: cover;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px;
  margin-right: 20px;
}

@media screen and (max-width: 1024px) {
  .parentSwiper .review-slide {
    width: 700px !important;
    height: auto !important;
  }
}
  
@media screen and (max-width: 768px) {
  .parentSwiper .review-slide {
    width: 343px !important;
    height: auto !important;
  }
}

</style>