<template>
  <div class="relative">
    <img
      class="hidden lg:block absolute left-[1%] top-[7%] vert-move"
      src="@/static/img/arrow-1.png"
      alt=""
    />
    <div class="container mx-auto py-[30px] lg:py-[60px]">
      <section-title title="Blogs" data-aos="fade-up" />
      <div
        v-if="blogs && blogs.length"
        class="container px-[16px] mx-auto mt-32"
      >
        <div class="grid grid-cols-12 gap-[20px]">
          <div
            class="col-span-12 md:col-span-7"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <nuxt-link
              :to="`/blogs/${blogs[0]?.slug}`"
              class="thumbnail-blog block relative h-full"
            >
              <img
                class="absolute w-full h-full top-0 left-0 object-cover"
                :src="blogs[0]?.image_url"
                :alt="blogs[0]?.title"
              />
              <img
                src="@/static/img/blog-shadow.png"
                class="absolute w-full h-full top-0 left-0"
                alt=""
              />
              <div class="relative h-[inherit] flex flex-col justify-between">
                <Preloader
                  :loading="loading"
                  :height="'24px'"
                  :width="'100%'"
                  :border-radius="'4px'"
                  :dark="false"
                >
                  <h4
                    class="
                      text-white
                      leading-130
                      text-[20px]
                      lg:text-[28px]
                      font-medium
                    "
                  >
                    {{ blogs[0]?.full_name }}
                  </h4>
                </Preloader>
                <Preloader
                  :loading="loading"
                  :height="'24px'"
                  :width="'100%'"
                  :border-radius="'4px'"
                  :margin="'4px 0 0 0'"
                  :dark="false"
                >
                  <h5
                    class="
                      text-lightGray
                      leading-130
                      text-[13px]
                      lg:text-[16px]
                      font-normal
                      mt-[4px]
                    "
                  >
                    {{ blogs[0]?.position }}
                  </h5>
                </Preloader>
                <Preloader
                  :loading="loading"
                  :height="'24px'"
                  :width="'100%'"
                  :border-radius="'4px'"
                  :margin="'160px 0 0 0'"
                  :dark="false"
                >
                  <h4
                    class="
                      mt-[160px]
                      text-white
                      leading-130
                      text-[20px]
                      lg:text-[28px]
                      font-medium
                    "
                  >
                    {{ blogs[0]?.title }}
                  </h4>
                </Preloader>
                <Preloader
                  :loading="loading"
                  :height="'24px'"
                  :width="'100%'"
                  :border-radius="'4px'"
                  :margin="'20px 0 0 0'"
                  :dark="false"
                >
                  <button class="flex items-center mt-20 gap-[12px] group">
                    <h4
                      class="
                        text-dBlue text-[16px]
                        lg:text-[20px]
                        leading-130
                        font-normal
                      "
                    >
                      Learn more
                    </h4>
                    <img
                      class="
                        border border-solid border-dBlue
                        duration-200
                        rounded-full
                        w-[28px]
                        p-4
                        h-auto
                        object-cover
                        group-hover:translate-x-1
                      "
                      src="@/static/icons/arrow-right-blue.svg"
                    />
                  </button>
                </Preloader>
              </div>
            </nuxt-link>
          </div>
          <div class="col-span-12 md:col-span-5">
            <div
              class="
                h-full
                flex flex-col
                justify-between
                bg-white
                blogs
                rounded-2xl
                p-[14px]
                lg:p-[28px]
              "
            >
              <div>
                <client-only>
                  <nuxt-link
                    :to="`/blogs/${item.slug}`"
                    v-for="(item, index) in blogs.slice(1, 4)"
                    :key="index"
                    class="
                      flex
                      align-items-center
                      gap-4
                      group
                      border-b border-solid border-[#E6ECF0]
                      last:border-b-0
                      py-[20px]
                    "
                  >
                    <Preloader
                      :loading="loading"
                      :height="'48px'"
                      :width="'80px'"
                      :border-radius="'4px'"
                      :dark="false"
                    >
                      <img
                        :src="item?.image_url"
                        class="
                          min-w-[80px]
                          h-[48px]
                          object-cover
                          rounded-[4px]
                          border border-solid border-[#E6ECF0]
                        "
                        :alt="item?.name"
                      />
                    </Preloader>
                    <div class="flex flex-col">
                      <Preloader
                        :loading="loading"
                        :height="'18px'"
                        :width="'100%'"
                        :border-radius="'4px'"
                        :dark="false"
                      >
                        <h4
                          class="
                            text-dark
                            duration-300
                            group-hover:text-dBlue
                            font-medium
                            text-[15px]
                            lg:text-[18px]
                            leading-130
                          "
                        >
                          {{ item.title }}
                        </h4>
                      </Preloader>
                      <div class="flex items-center mt-[8px] gap-[6px]">
                        <img
                          v-if="!loading"
                          src="@/static/icons/user.svg"
                          alt=""
                        />
                        <Preloader
                          :loading="loading"
                          :height="'18px'"
                          :width="'200px'"
                          :border-radius="'4px'"
                          :dark="false"
                        >
                          <h6
                            class="
                              text-[#74787D]
                              font-normal
                              text-[14px]
                              leading-130
                            "
                          >
                            {{ item.full_name }}
                          </h6>
                        </Preloader>
                      </div>
                    </div>
                  </nuxt-link>
                </client-only>
              </div>

              <nuxt-link
                to="/blogs"
                data-aos="fade-right"
                :data-aos-delay="300"
                class="
                  flex
                  justify-end
                  md:justify-start
                  items-center
                  mt-20
                  gap-[12px]
                  group
                  duration-300
                  hover:gap-[20px]
                "
              >
                <h4 class="text-dBlue text-[20px] leading-130 font-normal">
                  See all
                </h4>
                <img
                  class="
                    border border-solid border-dBlue
                    duration-200
                    rounded-full
                    w-[28px]
                    p-4
                    h-auto
                    object-cover
                    group-hover:translate-x-1
                  "
                  src="@/static/icons/arrow-right-blue.svg"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../SectionTitle.vue";
import Preloader from "~/components/Preloader.vue";
export default {
  components: { SectionTitle, Preloader },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
        this.loading = false
    }, 1000);
  },
  props: ["blogs"],
};
</script>

<style lang="scss" scoped>
.thumbnail-blog {
  overflow: hidden;
  background: linear-gradient(180deg, rgba(34, 35, 44, 0.6) 0%, #22232c 100%);
  padding: 28px;
  border-radius: 16px;
}
.blogs {
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  border-radius: 16px;
}
</style>