<template>
    <div class="container mx-auto relative">
        <img class="absolute left-[1%] top-[7%]" src="@/static/img/arrow-1.png" alt="" />
        <section-title title="Blogs" />
        <div class="container mx-auto">
            <div class="grid grid-cols-12">
                <div class="col-span-7">
                    <div class="thumbnail-blog relative">
                    <img class="absolute w-full h-full top-0 left-0 object-cover" :src="blogs[0].img" :alt="blogs[0].title">
                    <img src="@/static/img/blog-shadow.png" class="absolute w-full h-full top-0 left-0" alt="">
                    <div class="relative">
                        <h4 class="text-white leading-130 text-[28px] font-medium">
                            {{blogs[0].person}}
                        </h4>
                        <h5 class="text-lightGray leading-130 text-[16px] font-normal mt-[4px]">
                        {{blogs[0].position}}
                        </h5>
                        <h4 class="mt-[160px] text-white leading-130 text-[28px] font-medium">
                            {{blogs[0].title}}
                        </h4>
                        <button class="flex items-center mt-20 gap-[12px] group">
                            <h4 class="text-dBlue text-[20px] leading-130 font-normal">Learn more</h4>
                           <img class="border border-solid border-dBlue duration-200 rounded-full w-[28px] p-4 h-auto object-cover group-hover:translate-x-1" src="@/static/icons/arrow-right-blue.svg"/>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-span-5">
                    <div class="flex flex-col bg-white shadow-sm rounded-2xl p-[28px]">
                        <div v-for="(item,index) in blogs" :key="index" class="flex justify-center align-items-center gap-4">
                            <img :src="item.img" class="w-[80px] h-[48px] object-cover" alt="">
                            <div class="flex flex-col">
                                <h4>{{item.title}}</h4>
                                <div class="flex itemss-center">
                                    <img src="@/static/icons/user.svg" alt="">
                                    <h6>{{item.person}}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'
    export default {
  components: { SectionTitle },
        data(){
            return {
                blogs: [
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/500/500'
                    },
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/500/500'
                    },
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/500/500'
                    },
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/500/500'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .thumbnail-blog {
        overflow: hidden;
        background: linear-gradient(180deg, rgba(34, 35, 44, 0.6) 0%, #22232C 100%);
        padding: 28px;
        border-radius: 16px;
    }
</style>