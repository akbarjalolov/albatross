<template>
  <nuxt-link
    :to="`/pages/${data?.slug}`"
    class="
      max-h-[564px]
      h-full
      w-full
      bg-white
      cursor-pointer
      border border-solid border-[#F0F0F0]
      rounded-[20px]
      p-[8px]
      flex flex-col
      justify-between
    "
  >
    <Preloader
      :loading="loading"
      :height="'214px'"
      :width="'100%'"
      :border-radius="'16px'"
      :dark="false"
    >
      <img
        class="max-h-[214px] h-full w-full object-cover rounded-[16px]"
        :src="data?.image_url"
        alt="img-auto"
      />
    </Preloader>
    <div class="p-[12px]">
      <Preloader
        :loading="loading"
        :height="'20px'"
        :width="'100%'"
        :border-radius="'4px'"
        :margin="'4px 0 0 0'"
        :dark="false"
      >
        <h4 class="text-dark leading-130 text-[20px] font-medium mt-[20px]">
          {{ data?.title }}
        </h4>
      </Preloader>
      <Preloader
        :loading="loading"
        :height="'40px'"
        :width="'100%'"
        :border-radius="'4px'"
        :margin="'4px 0 0 0'"
        :dark="false"
      >
        <h6
          class="
            text-dark
            leading-130
            text-[18px]
            font-normal
            mt-[12px]
            line-clamp-3
          "
        >
          {{ data?.short_content }}
        </h6>
      </Preloader>
      <Preloader
        :loading="loading"
        :height="'40px'"
        :width="'100%'"
        :border-radius="'50px'"
        :margin="'45px 0 0 0'"
        :dark="false"
      >
        <button
          class="
            btn-arrow
            mt-[45px]
            hover:bg-dBlue
            duration-200
            h-fit
            border-solid
            text-dBlue
            hover:text-white
            w-full
            flex
            items-center
            justify-center
            gap-[12px]
            p-[10px]
            rounded-full
            border-dBlue border-2
          "
        >
          Learn more
          <span>
            <svg
              class="btn-svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83325 9.99998L15.1666 9.99998"
                stroke="#00AFEF"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 7.33333L15.1667 10"
                stroke="#00AFEF"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 12.6667L15.1667 10"
                stroke="#00AFEF"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1"
                y="19.5"
                width="19"
                height="19"
                rx="9.5"
                transform="rotate(-90 1 19.5)"
                stroke="#00AFEF"
              />
            </svg>
          </span>
        </button>
      </Preloader>
    </div>
  </nuxt-link>
</template>

<script>
import Preloader from "~/components/Preloader.vue";
export default {
  components: {
    Preloader,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-arrow {
  &:hover .btn-svg {
    rect {
      stroke: #fff;
    }
    path {
      stroke: #fff;
    }
  }
}
</style>