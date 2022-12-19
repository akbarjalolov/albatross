<template>
    <div class="main-form">
        <div class="container mx-auto py-[60px]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div class="flex flex-col justify-between items-start">
                    <div class="flex flex-col justify-start items-start">
                        <section-title title="Route details" isWhite='true' />
                        <h4 class="text-lightGray text-[16px] leading-130 font-normal mt-[8px]">Our dispatchers will receive your call</h4>
                    </div>
                    <div class="flex items-center gap-[16px]">
                        <img src="@/static/icons/headset.svg" alt="head">
                        <div class="flex flex-col">
                            <a href="tel: +8657304992" class="text-white leading-130 font-medium text-[28px] duration-300 hover:text-dBlue">(865) 730 4992</a>
                            <h4 class="text-[#ffffffd2] text-[16px] leading-[19px] font-normal">Phone number in case of anything</h4>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-[20px]">
                    <div class="flex flex-col relative">
                        <img class="max-w-[24px] h-auto object-cover absolute top-[38px] left-[18px]" src="@/static/icons/map-location.svg" alt="">
                        <label for="fromCity" class="text-white text-[14px] leading-140 font-medium">From</label>
                        <input class="text-white bg-[#323636] border border-solid border-[#5C6670] rounded-md px-[16px] pl-[62px] py-[12px] mt-[8px] transition-all duration-200 focus:border-dBlue" type="text" placeholder="ZIP or City, State">
                    </div>
                    <div class="flex flex-col relative">
                        <img class="max-w-[24px] h-auto object-cover absolute top-[38px] left-[18px]" src="@/static/icons/map-location 03.svg" alt="">
                        <label for="fromCity" class="text-white text-[14px] leading-140 font-medium">To</label>
                        <input class="text-white bg-[#323636] border border-solid border-[#5C6670] rounded-md px-[16px] pl-[62px] py-[12px] mt-[8px] transition-all duration-200 focus:border-dBlue" type="text" placeholder="ZIP or City, State">
                    </div>
                    <div class="flex flex-col relative">
                        <img class="max-w-[24px] h-auto object-cover absolute top-[38px] left-[18px]" src="@/static/icons/calendar 01.svg" alt="">
                        <label for="fromCity" class="text-white text-[14px] leading-140 font-medium">Time</label>
                        <input class="text-white bg-[#323636] border border-solid border-[#5C6670] rounded-md px-[16px] pl-[62px] py-[12px] mt-[8px] transition-all duration-200 focus:border-dBlue" type="date" placeholder="Pickup a date">
                    </div>
                    <div class="flex flex-col relative">
                        <img class="max-w-[24px] h-auto object-cover absolute top-[38px] left-[18px]" src="@/static/icons/car.svg" alt="">
                        <label for="fromCity" class="text-white text-[14px] leading-140 font-medium">Vehicle</label>
                        <input class="text-white bg-[#323636] border border-solid border-[#5C6670] rounded-md px-[16px] pl-[62px] py-[12px] mt-[8px] transition-all duration-200 focus:border-dBlue" type="text" placeholder="ZIP or City, State">
                    </div>
                    <CButton text="Send details" dynamicClass="mt-[28px]"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../SectionTitle.vue'
    export default {
  components: { SectionTitle },
        
    }
</script>

<style lang="scss" scoped>
    .main-form {
        background-image: url('@/static/img/form-bg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;

    }
</style>