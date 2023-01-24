<template>
    <div class="bg-gray-100 rounded-[16px] w-full flex items-end justify-end h-[350px]">
        <div class="bg-dark rounded-[16px] w-full h-[240px] flex flex-col items-center justify-center">
            <img class="border border-solid border-gray-100 object-cover w-[172px] h-[172px] rounded-full mt-[-30%]" :src="person?.image_url" alt="">
            <h4 class="text-white text-[24px] leading-130 font-medium mt-[32px] text-center">{{person.full_name}}</h4>
            <p class="text-white text-[16px] leading-130 font-normal mt-[8px] text-center">{{person.position}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            person : {
                type: Object,
                default: () => {}
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>