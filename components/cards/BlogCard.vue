<template>
  <div>
    <nuxt-link :to="`/blogs/${data.slug}`"  
      v-if="isThumbnail"
      class="
        lg:max-h-[290px]
        h-full
        w-full
        bg-white
        cursor-pointer
        blok-card
        border border-solid border-[#F0F0F0]
        overflow-hidden
        rounded-[20px]
        flex flex-col
        lg:flex-row
        justify-between
      "
    >
      <img
        class="max-h-[185px] lg:max-h-[290px] w-full object-cover"
        :src="data.img"
        alt="img-auto"
      />
      <div class="p-[12px] flex flex-col justify-between">
        <div>
          <h4 class="text-dark leading-[140%] text-[16px] font-medium">
            {{ data.title }}
          </h4>
          <p
            class="
              text-darks
              leading-[130%]
              text-[13px]
              font-normal
              mt-[8px]
              line-clamp-2
            "
          >
            {{ data.desc }}
          </p>
        </div>
        <div class="flex items-end justify-between mt-[40px]">
          <div class="flex flex-col">
            <h4 class="text-dBlue leading-130 text-[14px] font-medium">
              {{ data.author.name }}
            </h4>
            <h4 class="text-lightGray leading-130 text-[14px] font-normal">
              {{ data.author.position }}
            </h4>
          </div>
          <h4 class="text-lightGray leading-130 text-[14px] font-normal">
            {{ data.date }}
          </h4>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link :to="`/blogs/${data.slug}`"
      v-else
      class="
        max-h-[360px]
        h-full
        w-full
        bg-white
        cursor-pointer
        blok-card
        border border-solid border-[#F0F0F0]
        overflow-hidden
        rounded-[20px]
        flex flex-col
        justify-between
      "
    >
      <img
        class="max-h-[185px] h-full w-full object-cover"
        :src="data.img"
        alt="img-auto"
      />
      <div class="p-[12px]">
        <h4 class="text-dark leading-[140%] text-[16px] font-medium">
          {{ data.title }}
        </h4>
        <p
          class="
            text-darks
            leading-[130%]
            text-[13px]
            font-normal
            mt-[8px]
            line-clamp-2
          "
        >
          {{ data.desc }}
        </p>
        <div class="flex items-cetner justify-between mt-[40px]">
          <h4 class="text-dBlue leading-130 text-[14px] font-medium">
            {{ data.author.name }}
          </h4>
          <h4 class="text-lightGray leading-130 text-[14px] font-normal">
            {{ data.date }}
          </h4>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    isThumbnail: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-arrow {
  &:hover .btn-svg {
    path {
      stroke: #00afef;
    }
  }
}
.blok-card {
  transition: all ease 0.3s;
  &:hover {
    box-shadow: 0px 6px 20px rgba(18, 40, 47, 0.2);
  }
}
</style>