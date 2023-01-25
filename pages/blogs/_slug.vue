<template>
  <div>
    <BreadCrumb :links="links" />
    <div class="container px-[16px] mx-auto">
      <div class="container mx-auto px-[16px] my-[32px]">
        <img
          :src="slugData?.image_url"
          class="w-full max-h-[480px] h-full rounded-[30px] object-contain"
          alt=""
        />
        <div class="max-w-[990px] w-full mx-auto flex flex-col">
          <h4
            class="mt-[16px] md:mt-[32px] font-semibold text-[20px] md:text-[32px] leading-[140%] text-dark"
          >
            {{ slugData?.title }}
          </h4>
          <div class="flex space-x-1 flex-wrap items-center mt-2">
            <h4 class="text-dBlue font-semibold text-xl leading-130">
              {{ slugData?.full_name }}
            </h4>
            <div class="w-[4px] h-[4px] rounded-full bg-dBlue"></div>
            <h4 class="text-[#74787D] font-normal text-sm leading-130">
              {{ slugData?.position }}
            </h4>
            <div class="w-[4px] h-[4px] rounded-full bg-dBlue"></div>
            <h4 class="text-[#74787D] font-normal text-sm leading-130">
              {{ slugData?.published_at }}
            </h4>
          </div>
          <div class="content-styles mt-[16px] md:mt-[32px]" v-html="slugData?.content"></div>
          <div class="flex items-end justify-end mt-[16px] md:mt-[32px]">
            <CopyUrl />
          </div>
        </div>
        <div class="mt-[24px] md:mt-[64px]">
          <SectionTitle title="Related Posts" />
        </div>
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-x-[20px] gap-y-[24px]
            mt-[32px]
          "
        >
          <BlogCard v-for="item in relatedPosts" :data="item" :key="item.id">
          </BlogCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import CopyUrl from "@/components/CopyUrl.vue";
import BlogCard from '@/components/cards/BlogCard.vue'
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  layout: "black",
  components: { BreadCrumb, CopyUrl, SectionTitle, BlogCard },
  data() {
    return {
      // slugData: {
      //   img: "https://picsum.photos/1200/500",
      //   title: "Lowest Quote Isn’t Always the Best Option Car Shipping",
      //   author: {
      //     name: "David Branson",
      //     position: "Account executive, Auto Transport Expert",
      //   },
      //   publishedData: "12.12.2022",
      //   content:
      //     "Everyone enjoys a good smoking bargain. It's no surprise that 76 percent of customers say price comparison shopping is a regular part of their buying habits. Furthermore, 61 percent of customers see discounts and coupons as inducements to purchase. Seeking bargains is not just human nature, but it may also help you remain within your budget. However, whether it's apparel, gadgets, or services like auto transportation, you don't want to trade quality for the price. When it comes to automobile transportation, cheaper does not necessarily imply better. Continue reading to learn how to identify the top vehicle shipping companies.",
      // },
      relatedPosts: [
        {
          img: "https://picsum.photos/300/300",
          title: "Open transport",
          slug: "blog-2",
          author: {
            name: "John Doe",
            position: "Account executive, Auto Transport Expert",
          },
          date: "12.12.2021",
          desc: "Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure.",
        },
        {
          img: "https://picsum.photos/300/350",
          title: "Door-to-Door Car Shipping",
          slug: "blog-2",
          author: {
            name: "John Doe",
            position: "Account executive, Auto Transport Expert",
          },
          date: "12.12.2021",
          desc: "At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping.",
        },
        {
          img: "https://picsum.photos/300/400",
          title: "Enclosed Auto Transport",
          slug: "blog-2",
          author: {
            name: "John Doe",
            position: "Account executive, Auto Transport Expert",
          },
          date: "12.12.2021",
          desc: "Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B.",
        },
      ],
      links: [
        {
          title: "Blog",
          link: "/blogs",
        },
        {
          title: '',
          link: "aaa",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      slugData: (state) => state.blogSlug,
    }),
  },
  mounted() {
    console.log(this.$route)
  },
  async fetch(){
     this.$store.dispatch("fetchBlogSlug", this.$route.params.slug)
  }
};
</script>

<style lang="scss">
.content-styles {
  padding-bottom: 32px;
  border-bottom: 1px solid #e0e0e0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    margin: 12px 0;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
  }

  img {
    border: 1px solid #e6ecf0;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    max-height: 480px;
    margin: 32px 0;
    object-fit: cover;
  }

  ul {
    list-style-type: circle;
    padding-left: 20px;
    margin: 12px 0;
    li {
      list-style-type: disc;
    }
  }
}
</style>