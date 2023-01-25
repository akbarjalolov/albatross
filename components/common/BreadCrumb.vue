<template>
    <div class="bg-gray-100 py-[12px] w-full">
        <div class="container mx-auto flex items-center px-[16px]">
            <!-- <nuxt-link class="flex items-center gap-[16px]" to="/">
                <h4 class="text-dark font-normal leading-130 text-[16px]">Home</h4>
            </nuxt-link>
            <span class="text-[#74787D] mx-[12px] font-normal leading-130 text-[13px] lg:text-[16px]">/</span>
             <h5 v-for="(item,index) in links" :key="index" class="flex items-center gap-[16px]" :to="item.link" >
                <h4 class="font-normal leading-130 text-[16px] text-dBlue">{{item.name}}</h4>
            </h5> -->
             <ul class="bread-crumbs">
              <li class=" flex items-center justify-center">
                <img class="mr-[16px]" src="@/static/icons/home.svg" alt="">
                <nuxt-link to="/" class="text-dark">
                  Home
                </nuxt-link>
              </li>
              <span class="text-[#74787D] mx-3">/</span>
              <template v-if="links && links.length">   
                <li v-for="(item,index) in links" :key="index" >
                  <span v-if="index + 1 === links.length">{{ item.title }}</span>
                  <nuxt-link :to="item.link" v-else>{{ item.title }}</nuxt-link>
                </li>
              </template>
            </ul>

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
    .breadcrumbs {
  background: #EEF3F8;
}

.bread-crumbs {
  padding: 12px 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  li {
    display: inline-flex;
    text-transform: capitalize;
    a {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #00AFEF;

      i {
        margin-right: 8px;
      }

      &:after {
        content: "/ ";
        display: block;
        position: absolute;
        right: 7px;
        top: 1px;
      }

      &:hover {
        color: #024DA5;
      }
    }
  }
}

</style>