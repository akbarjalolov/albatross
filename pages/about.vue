<template>
    <div>
        <div class="w-full max-w-[1500px] mx-auto flex items-center justify-between gap-[40px]">
            <div class="pl-[140px]">
                <h4 class="font-medium text-dark text-[64px] leading-[82px]">We build bridges between <span class="font-normal text-[64px] leading-[82px] text-dark opacity-80">drivers and customers</span></h4>
                <p class="mt-[24px] font-normal text-dark text-[20px] leading-130">Albatros LLC, is one of the country’s top Auto Transport firms, specializing in the shipping of privately owned vehicles, motorcycles, and heavy equipment to and from all fifty states as well as international.</p>
            </div>
            <div>
                <img class="max-w-[550px] w-full object-cover" src="@/static/img/target.png" alt="">
            </div>
        </div>
        <div class="w-full max-h-[640px] mt-[60px]">
            <img class="w-full h-full object-cover" src="@/static/img/truck-about.png" alt="">
        </div>
        <div class="bg-gray-100 py-[60px]">
            <div class="container mx-auto px-[16px]">
                <div class="grid grid-cols-12">
                    <div v-for="(item,index) in aboutInfo" :key="index" class="col-span-3 about-card flex flex-col py-[20px] px-[66px]">
                        <div class="flex items-center">
                            <div class="about-card__circle mr-[-60px] w-[72px] h-[72px] bg-dBlue rounded-full"></div>
                            <h4 class="text-dark  leading-130 text-[40px] font-medium">{{item.title}}</h4>
                        </div>
                        <p class="mt-[16px] font-normal text-dark text-[20px] leading-130 ">{{item.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                aboutInfo: [
                    { title: '10k+', desc: 'Clients served' },
                    { title: '12k+', desc: 'Vehicle shipped' },
                    { title: '8k+', desc: 'Online reviews' },
                    { title: '10+', desc: 'Years in operation' },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about-card__circle {
        box-shadow: 0px 0px 16px rgba(0, 175, 239, 0.4);
    }
</style>