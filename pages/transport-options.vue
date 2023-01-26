<template>
  <div class="bg-gray-100">
    <BreadCrumb :links="links" />
    <div class="container px-[16px] mx-auto">
      <section-title title="Transport options" class="mt-[32px]" />
      <div class="container mx-auto px-[16px] my-[32px]">
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-x-[20px] gap-y-[24px]
          "
        >
          <client-only>
            <TransportCard
              v-for="item in optionsList"
              :data="item"
              :key="item.id"
            >
            </TransportCard>
          </client-only>
        </div>
      </div>
    </div>
    <MainForm />
  </div>
</template>

<script>
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import TransportCard from "@/components/cards/TransportCard.vue";
import MainForm from "@/components/sections/MainForm.vue";
import { mapState } from "vuex";
export default {
  layout: "black",
  components: { BreadCrumb, SectionTitle, TransportCard, MainForm },
  data() {
    return {
      transportCardData: [
        {
          img: "https://picsum.photos/300/300",
          title: "Open transport",
          desc: "Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure.",
        },
        {
          img: "https://picsum.photos/300/350",
          title: "Door-to-Door Car Shipping",
          desc: "At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping.",
        },
        {
          img: "https://picsum.photos/300/400",
          title: "Enclosed Auto Transport",
          desc: "Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B.",
        },
        {
          img: "https://picsum.photos/300/300",
          title: "Open transport",
          desc: "Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure.",
        },
        {
          img: "https://picsum.photos/300/350",
          title: "Door-to-Door Car Shipping",
          desc: "At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping.",
        },
        {
          img: "https://picsum.photos/300/400",
          title: "Enclosed Auto Transport",
          desc: "Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B.",
        },
      ],
      links: [
        {
          title: "Transport options",
          link: "/transport-options",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      optionsList: (state) => state.transportOptions,
    }),
  },
  fetch() {
    this.$store.dispatch("fetchTransportOptions");
  },
};
</script>

<style lang="scss" scoped>
</style>