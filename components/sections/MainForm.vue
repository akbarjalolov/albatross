<template>
    <div class="main-form">
        <div class="container px-[16px] mx-auto py-[60px]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div class="flex flex-col justify-between items-start">
                    <div class="flex flex-col justify-start items-start">
                        <SectionTitle title="Route details" isWhite='true' />
                        <h4 class="text-lightGray text-[16px] leading-130 font-normal mt-[8px]">Our dispatchers will receive your call</h4>
                    </div>
                    <div class="flex items-center gap-[16px] mt-[16px] lg:mt-0">
                        <img src="@/static/icons/headset.svg" alt="head">
                        <div class="flex flex-col">
                            <a href="tel: +8657304992" class="text-white leading-130 font-medium text-[22px] lg:text-[28px] duration-300 hover:text-dBlue">(865) 730 4992</a>
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
                        <img class="max-w-[24px] z-[2] h-auto object-cover absolute top-[32px] left-[18px]" src="@/static/icons/calendar 01.svg" alt="">
                        <label for="fromCity" class="text-white text-[14px] leading-140 font-medium">Time</label>
                        <date-picker placeholder="21/12/2022" v-model="time2" type="date"></date-picker>
                        <!-- <input class="text-white bg-[#323636] border border-solid border-[#5C6670] rounded-md px-[16px] pl-[62px] py-[12px] mt-[8px] transition-all duration-200 focus:border-dBlue" type="text" placeholder="Pickup a date"> -->
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
import SectionTitle from '@/components/SectionTitle.vue'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
    export default {
      components: {
        SectionTitle, DatePicker
      },
      data(){
        return {
            time2: ''
        }
      }
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

<style lang="scss">
    .mx-datepicker {
        width: 100% !important;
        .mx-input-wrapper {
            .mx-input {
                background: #323636 !important;
                border: 1px solid #5C6670 !important;
                border-radius: 6px !important;
                padding: 12px 52px !important;
                height: 46px;
                color: #fff !important;
                width: 100% !important;
            }
            .mx-icon-calendar {
                display: none;
            }
        }
    }
</style>