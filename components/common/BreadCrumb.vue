<template>
    <div class="bg-gray-100 py-[12px] w-full">
        <div class="container mx-auto flex items-center px-[16px]">
            <nuxt-link class="flex items-center gap-[16px]" to="/">
                <img src="@/static/icons/home.svg" alt="">
                <h4 class="text-dark font-normal leading-130 text-[16px]">Home</h4>
            </nuxt-link>
            <span class="text-[#74787D] mx-[12px] font-normal leading-130 text-[13px] lg:text-[16px]">/</span>
             <h5 v-for="(item,index) in links" :key="index" class="flex items-center gap-[16px]" :to="item.link" >
                <h4 class="font-normal leading-130 text-[16px] text-dBlue">{{item.name}}</h4>
            </h5>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            links: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>