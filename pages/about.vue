<template>
  <div>
    <!-- target -->
    <div class="w-full mx-auto flex items-center justify-between gap-[40px]">
      <div class="w-[70%] pl-[32px] lg:pl-[140px] px-[16px] about-description" v-html="about?.description">
        <!-- <h4
          class="
            font-medium
            text-dark text-[26px]
            lg:text-[64px]
            leading-130
            lg:leading-[82px]
          "
        >
          We build bridges between
          <span
            class="
              font-normal
              text-[26px]
              lg:text-[64px]
              leading-130
              lg:leading-[82px]
              text-dark
              opacity-80
            "
            >drivers and customers</span
          >
        </h4>
        <p
          class="
            mt-[24px]
            font-normal
            text-dark text-[16px]
            lg:text-[20px]
            leading-130
          "
        >
          Albatros LLC, is one of the country’s top Auto Transport firms,
          specializing in the shipping of privately owned vehicles, motorcycles,
          and heavy equipment to and from all fifty states as well as
          international.
        </p> -->
      </div>
      <div class="hidden md:block">
        <img class="max-w-[550px] w-full object-cover" src="@/static/img/target.png" alt="" />
      </div>
    </div>
    <!-- truck img -->
    <div class="w-full max-h-[640px] mt-[60px]">
      <img class="w-full h-full max-h-[640px] object-cover" src="@/static/img/truck-about.jpg" alt="" />
    </div>
    <!-- cards -->
    <div class="bg-gray-100 py-[60px]">
      <div class="container mx-auto px-[16px]">
        <div class="grid grid-cols-12">
          <div class="
              col-span-12
              md:col-span-6
              lg:col-span-3
              about-card
              flex flex-col
              py-[20px]
              px-[66px]
            ">
            <div class="flex items-center justify-center">
              <div class="
                  about-card__circle
                  mr-[-60px]
                  w-[72px]
                  h-[72px]
                  bg-dBlue
                  rounded-full
                "></div>
              <h4 class="text-dark leading-130 text-[40px] font-medium">
                <number ref="number1" :from="0" :to="about?.shipped" :duration="3" :delay="0" easing="Power1.easeOut" />

              </h4>
            </div>
            <p class="
                mt-[16px]
                font-normal
                text-dark text-[20px]
                leading-130
                text-center
              ">
              Satisfied Customers
            </p>
          </div>

          <div class="
              col-span-12
              md:col-span-6
              lg:col-span-3
              about-card
              flex flex-col
              py-[20px]
              px-[66px]
            ">
            <div class="flex items-center justify-center">
              <div class="
                  about-card__circle
                  mr-[-60px]
                  w-[72px]
                  h-[72px]
                  bg-dBlue
                  rounded-full
                "></div>
              <h4 class="text-dark leading-130 text-[40px] font-medium">
                <number ref="number1" :from="0" :to="about?.clients" :duration="3" :delay="0" easing="Power1.easeOut" />
              </h4>
            </div>
            <p class="
                mt-[16px]
                font-normal
                text-dark text-[20px]
                leading-130
                text-center
              ">
              Carrier Network
            </p>
          </div>

          <div class="
              col-span-12
              md:col-span-6
              lg:col-span-3
              about-card
              flex flex-col
              py-[20px]
              px-[66px]
            ">
            <div class="flex items-center justify-center">
              <div class="
                  about-card__circle
                  mr-[-60px]
                  w-[72px]
                  h-[72px]
                  bg-dBlue
                  rounded-full
                "></div>
              <h4 class="text-dark leading-130 text-[40px] font-medium">
                <number ref="number1" :from="0" :to="about?.mistakes" :duration="3" :delay="0"
                  easing="Power1.easeOut" />
              </h4>
            </div>
            <p class="
                mt-[16px]
                font-normal
                text-dark text-[20px]
                leading-130
                text-center
              ">
              5 Star Reviews
            </p>
          </div>

          <div class="
              col-span-12
              md:col-span-6
              lg:col-span-3
              about-card
              flex flex-col
              py-[20px]
              px-[66px]
            ">
            <div class="flex items-center justify-center">
              <div class="
                  about-card__circle
                  mr-[-60px]
                  w-[72px]
                  h-[72px]
                  bg-dBlue
                  rounded-full
                "></div>
              <h4 class="text-dark leading-130 text-[40px] font-medium">
                <number ref="number1" :from="0" :to="about?.yearly_orders" :duration="3" :delay="0"
                  easing="Power1.easeOut" />

              </h4>
            </div>
            <p class="
                mt-[16px]
                font-normal
                text-dark text-[20px]
                leading-130
                text-center
              ">
              Orders per year
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- our team -->
    <div class="bg-white py-[60px]">
      <section-title title="Our Team" />
      <div class="container px-[16px] mt-[32px] mx-auto">
        <div class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-x-[20px] gap-y-[24px]
          ">
          <client-only>
            <TeamCard v-for="(item, index) in teamMembers" :key="index" :person="item" />
          </client-only>
        </div>
      </div>
    </div>
    <!-- faq -->
    <Faq :data="faq" />
    <MainForm />

    <ReviewsSlider :data="reviews" />
    <!-- <PartnersSlider :data="partners" /> -->
  </div>
</template>

<script>
import SectionTitle from "../components/SectionTitle.vue";
import TeamCard from "../components/cards/TeamCard.vue";
import Faq from "../components/sections/Faq.vue";
import ReviewsSlider from "../components/sections/ReviewsSlider.vue";
import PartnersSlider from "../components/sections/PartnersSlider.vue";
import { mapState } from "vuex";
import MainForm from "../components/sections/MainForm.vue";
export default {
  layout: "black",
  components: { SectionTitle, TeamCard, Faq, ReviewsSlider, PartnersSlider, MainForm },
  data() {
    return {
      aboutInfo: [
        { title: "10k+", desc: "Clients served" },
        { title: "12k+", desc: "Vehicle shipped" },
        { title: "8k+", desc: "Online reviews" },
        { title: "10+", desc: "Years in operation" },
      ],
      ourTeam: [
        {
          img: "https://picsum.photos/300/300",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/200/300",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/400/300",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/500/300",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/700/300",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/300/500",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/500/300",
          full_name: "John Doe",
          position: "CEO",
        },
        {
          img: "https://picsum.photos/1000/300",
          full_name: "John Doe",
          position: "CEO",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      reviews: (state) => state.reviews,
      faq: (state) => state.faq,
      teamMembers: (state) => state.teammates,
      partners: (state) => state.partners,
      about: (state) => state.settings
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchReviews");
    await this.$store.dispatch("fetchFaq");
    await this.$store.dispatch("fetchTeammates")
    await this.$store.dispatch("fetchPartners")
    await this.$store.dispatch("fetchSettings")
  },
};
</script>

<style lang="scss" scoped>
.about-card__circle {
  box-shadow: 0px 0px 16px rgba(0, 175, 239, 0.4);
}
  </style>

  <style lang=scss>

.about-description {
  p {
    font-size: 20px;
    color: #000000;
  }
}
    </style>

