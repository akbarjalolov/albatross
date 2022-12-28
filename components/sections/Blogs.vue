<template>
    <div class="relative">
        <img class="hidden lg:block absolute left-[1%] top-[7%]" src="@/static/img/arrow-1.png" alt="" />
        <div class="container mx-auto py-[30px] lg:py-[60px]">
            <section-title title="Blogs" />
            <div class="container px-[16px] mx-auto mt-32">
                <div class="grid grid-cols-12 gap-[20px]">
                    <div class="col-span-12 md:col-span-7">
                        <nuxt-link :to="`/blogs/${blogs[0].slug}`" class="thumbnail-blog block relative h-full">
                        <img class="absolute w-full h-full top-0 left-0 object-cover" :src="blogs[0].img" :alt="blogs[0].title">
                        <img src="@/static/img/blog-shadow.png" class="absolute w-full h-full top-0 left-0" alt="">
                        <div class="relative h-[inherit] flex flex-col justify-between">
                            <h4 class="text-white leading-130 text-[20px] lg:text-[28px] font-medium">
                                {{blogs[0].person}}
                            </h4>
                            <h5 class="text-lightGray leading-130 text-[13px] lg:text-[16px] font-normal mt-[4px]">
                            {{blogs[0].position}}
                            </h5>
                            <h4 class="mt-[160px] text-white leading-130 text-[20px] lg:text-[28px] font-medium">
                                {{blogs[0].title}}
                            </h4>
                            <button class="flex items-center mt-20 gap-[12px] group">
                                <h4 class="text-dBlue text-[16px] lg:text-[20px] leading-130 font-normal">Learn more</h4>
                            <img class="border border-solid border-dBlue duration-200 rounded-full w-[28px] p-4 h-auto object-cover group-hover:translate-x-1" src="@/static/icons/arrow-right-blue.svg"/>
                            </button>
                        </div>
                    </nuxt-link>
                    </div>
                    <div class="col-span-12 md:col-span-5">
                        <div class="flex flex-col bg-white blogs rounded-2xl p-[28px]">
                            <nuxt-link :to="`/blogs/${item.slug}`" v-for="(item,index) in blogs.slice(1,4)" :key="index" class="flex justify-center align-items-center gap-4 group border-b border-solid border-[#E6ECF0] last:border-b-0 py-[20px]">
                                <img :src="item.img" class="min-w-[80px] h-[48px] object-cover rounded-[4px] border border-solid border-[#E6ECF0]" alt="">
                                <div class="flex flex-col">
                                    <h4 class="text-dark duration-300 group-hover:text-dBlue font-medium text-[15px] lg:text-[18px] leading-130">{{item.title}}</h4>
                                    <div class="flex items-center mt-[8px] gap-[6px]">
                                        <img src="@/static/icons/user.svg" alt="">
                                        <h6 class="text-[#74787D] font-normal text-[14px] leading-130"   >{{item.person}}</h6>
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/blogs" class="flex items-center mt-20 gap-[12px] group duration-300 hover:gap-[20px]">
                                <h4 class="text-dBlue text-[20px] leading-130 font-normal">See all</h4>
                            <img class="border border-solid border-dBlue duration-200 rounded-full w-[28px] p-4 h-auto object-cover group-hover:translate-x-1" src="@/static/icons/arrow-right-blue.svg"/>
                            </nuxt-link>
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
                        img: 'https://picsum.photos/650/650',
                        slug: 'news1'
                    },
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/600/600',
                        slug: 'news2'
                    },
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/500/500',
                        slug: 'news3'
                    },
                    {
                        title: 'Lowest Quote Isn’t Always the Best Option Car Shipping',
                        person: 'David Branson',
                        position: 'Account executive, Auto Transport Expert',
                        img: 'https://picsum.photos/400/400',
                        slug: 'news4'
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
    .blogs {
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
        border-radius: 16px;
    }
</style>