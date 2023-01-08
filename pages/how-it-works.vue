<template>
<div>
    <BreadCrumb :links="links"/>
    <div class="container px-[16px] mx-auto">
        <section-title title="How it works?" class="mt-[32px]" />
        <div class="my-[24px] space-y-4 lg:space-y-0"   >
            <!-- card-1 -->
            <div class="flex flex-col lg:flex-row items-center border border-solid border-dGray rounded-md lg:border-none p-[12px] lg:p-0">
                <img class="max-w-[285px] w-full h-auto object-cover" src="@/static/img/how-it-works1.png" alt="">
                <div class="flex flex-col items-center justify-center lg:ml-[35px]">
                    <div class="flex items-center justify-center bg-dBlue w-[52px] h-[52px] rounded-full">
                        <p class="text-dark leading-130 text-[24px] font-medium">1</p>
                    </div>
                    <img class="max-h-[240px] h-full w-auto object-contain hidden lg:block" src="@/static/img/how-it-works-line.png" alt="">
                </div>
                <div class="flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-[130px]">
                    <h4 class="text-center text-dark font-medium text-[18px] lg:text-[24px] leading-130">
                        Schedule a car shipment online or over the phone.
                    </h4>
                    <p class="text-left text-dark font-normal text-[14px] lg:text-[18px] leading-140 mt-[12px]">
                        Schedule a vehicle shipment with Nexus and you'll be surprised at how easy it is! All you have to do is enter your car pickup and car delivery zip codes in our online car shipping quote tool (or give that information to one of our dedicated vehicle transport agents), select your vehicle type and size, choose between open or enclosed auto transport, and pick from a variety of different car shipment scheduling dates.
                    </p>
                </div>
            </div>
            <!-- card-2 -->
            <div class="flex flex-col lg:flex-row items-center border border-solid border-dGray rounded-md lg:border-none p-[12px] lg:p-0">
                <img class="max-w-[285px] w-full h-auto object-cover" src="@/static/img/how-it-works2.png" alt="">
                <div class="flex flex-col items-center justify-center lg:ml-[35px]">
                    <div class="flex items-center justify-center bg-dBlue w-[52px] h-[52px] rounded-full">
                        <p class="text-dark leading-130 text-[24px] font-medium">2</p>
                    </div>
                    <img class="max-h-[240px] h-full w-auto object-contain hidden lg:block" src="@/static/img/how-it-works-line2.png" alt="">
                </div>
                <div class="flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-[130px]">
                    <h4 class="text-center text-dark font-medium text-[18px] lg:text-[24px] leading-130">
                        Schedule a car shipment online or over the phone.
                    </h4>
                    <p class="text-left text-dark font-normal text-[14px] lg:text-[18px] leading-140 mt-[12px]">
                        Schedule a vehicle shipment with Nexus and you'll be surprised at how easy it is! All you have to do is enter your car pickup and car delivery zip codes in our online car shipping quote tool (or give that information to one of our dedicated vehicle transport agents), select your vehicle type and size, choose between open or enclosed auto transport, and pick from a variety of different car shipment scheduling dates.
                    </p>
                </div>
            </div>
            <!-- card-3 -->
            <div class="flex flex-col lg:flex-row items-center border border-solid border-dGray rounded-md lg:border-none p-[12px] lg:p-0 lg:items-start">
                <img class="max-w-[285px] w-full h-auto object-cover" src="@/static/img/how-it-works3.png" alt="">
                <div class="flex flex-col items-center justify-center lg:ml-[35px]">
                    <div class="flex items-center justify-center bg-dBlue w-[52px] h-[52px] rounded-full">
                        <p class="text-dark leading-130 text-[24px] font-medium">3</p>
                    </div>
                </div>
                <div class="flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-[130px]">
                    <h4 class="text-center text-dark font-medium text-[18px] lg:text-[24px] leading-130">
                        Schedule a car shipment online or over the phone.
                    </h4>
                    <p class="text-left text-dark font-normal text-[14px] lg:text-[18px] leading-140 mt-[12px]">
                        Schedule a vehicle shipment with Nexus and you'll be surprised at how easy it is! All you have to do is enter your car pickup and car delivery zip codes in our online car shipping quote tool (or give that information to one of our dedicated vehicle transport agents), select your vehicle type and size, choose between open or enclosed auto transport, and pick from a variety of different car shipment scheduling dates.
                    </p>
                </div>
            </div>
        </div>

    </div>
    <!-- faq -->
    <Faq />
</div>

</template>

<script>
    import BreadCrumb from '@/components/common/BreadCrumb.vue'
    import SectionTitle from '@/components/SectionTitle.vue'
    import Faq from '@/components/sections/Faq.vue'
    export default {
        layout: 'black',
        components: { BreadCrumb, SectionTitle, Faq },
        data(){
            return {
                 links: [ {
                    name: 'How it works',
                    link: '/how-it-works'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>