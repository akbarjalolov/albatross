<template>
  <div>
    <BreadCrumb :links="links" />
    <div class="container px-[16px] mx-auto">
      <section-title title="How it works?" class="mt-[32px]" />
      <div class="my-[24px] space-y-4 lg:space-y-0">
        <!-- card-1 -->
        <div class="
            flex flex-col
            lg:flex-row
            items-center
            border border-solid border-dGray
            rounded-md
            lg:border-none
            p-[12px]
            lg:p-0
          ">
          <img class="max-w-[285px] w-full h-auto object-cover" src="@/static/img/how-it-works1.png" alt="" />
          <div class="flex flex-col items-center justify-center lg:ml-[35px]">
            <div class="
                flex
                items-center
                justify-center
                bg-dBlue
                w-[52px]
                h-[52px]
                rounded-full
              ">
              <h6 class="text-dark leading-130 text-[24px] font-medium">1</h6>
            </div>
            <img class="max-h-[240px] h-full w-auto object-contain hidden lg:block"
              src="@/static/img/how-it-works-line.png" alt="" />
          </div>
          <div class="
              flex flex-col
              items-center
              lg:items-start
              justify-center
              lg:justify-start lg:ml-[130px]
            ">
            <h4 class="
                text-center text-dark
                font-medium
                text-[18px]
                lg:text-[24px]
                leading-130
              ">
              Get quote and Place order
            </h4>
            <p class="
                text-left text-dark
                font-normal
                text-[14px]
                lg:text-[18px]
                leading-140
                mt-[12px]
              ">
              Receive a custom quote that's designed to meet your car shipping needs and budget by calling (865)
              381-8015 or clicking on the “Get a Quote” button.

              If you're happy with the estimate for shipping your car, you can finalize your order either by ordering
              online or speaking with one of our car shipping experts.
            </p>
          </div>
        </div>
        <!-- card-2 -->
        <div class="
            flex flex-col
            lg:flex-row
            items-center
            border border-solid border-dGray
            rounded-md
            lg:border-none
            p-[12px]
            lg:p-0
          ">
          <img class="max-w-[285px] w-full h-auto object-cover" src="@/static/img/how-it-works2.png" alt="" />
          <div class="flex flex-col items-center justify-center lg:ml-[35px]">
            <div class="
                flex
                items-center
                justify-center
                bg-dBlue
                w-[52px]
                h-[52px]
                rounded-full
              ">
              <h6 class="text-dark leading-130 text-[24px] font-medium">2</h6>
            </div>
            <img class="max-h-[240px] h-full w-auto object-contain hidden lg:block"
              src="@/static/img/how-it-works-line2.png" alt="" />
          </div>
          <div class="
              flex flex-col
              items-center
              lg:items-start
              justify-center
              lg:justify-start lg:ml-[130px]
            ">
            <h4 class="
                text-center text-dark
                font-medium
                text-[18px]
                lg:text-[24px]
                leading-130
              ">
              Schedule Pickup
            </h4>
            <p class="
                text-left text-dark
                font-normal
                text-[14px]
                lg:text-[18px]
                leading-140
                mt-[12px]
              ">
              Our car shipping experts will take care of everything and schedule a pickup date, time and locations that
              is convenient to you. On the day of pick up, both trucker and you will inspect your vehicle and sign a
              Bill of Lading. Then you can kiss a goodbye, pack your bags, and let us take care of the rest. During the
              transit, our experts will give you regular updates on your vehicle shipment.
            </p>
          </div>
        </div>
        <!-- card-3 -->
        <div class="
            flex flex-col
            lg:flex-row
            items-center
            border border-solid border-dGray
            rounded-md
            lg:border-none
            p-[12px]
            lg:p-0 lg:items-start
          ">
          <img class="max-w-[285px] w-full h-auto object-cover" src="@/static/img/how-it-works3.png" alt="" />
          <div class="flex flex-col items-center justify-center lg:ml-[35px]">
            <div class="
                flex
                items-center
                justify-center
                bg-dBlue
                w-[52px]
                h-[52px]
                rounded-full
              ">
              <h6 class="text-dark leading-130 text-[24px] font-medium">3</h6>
            </div>
          </div>
          <div class="
              flex flex-col
              items-center
              lg:items-start
              justify-center
              lg:justify-start lg:ml-[130px]
            ">
            <h4 class="
                text-center text-dark
                font-medium
                text-[18px]
                lg:text-[24px]
                leading-130
              ">
              Receive your vehicle
            </h4>
            <p class="
                text-left text-dark
                font-normal
                text-[14px]
                lg:text-[18px]
                leading-140
                mt-[12px]
              ">
              It's a reunion Day, a day we expect the most here at Albatross Auto Shipping. Upon delivery, the driver
              will call you to schedule a drop-off time and place of your choice. Once you receive your vehicle, you and
              the driver conduct a final vehicle inspection to make sure it was delivered safely and then sign off a
              BOL. And that's it! Just like that, you receive your vehicle hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
    <MainForm />
    <!-- faq -->
    <Faq :data="faq" />

  </div>
</template>

<script>
import { mapState } from "vuex";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import Faq from "@/components/sections/Faq.vue";
import MainForm from "../components/sections/MainForm.vue";
export default {
  layout: "black",
  computed: {
    ...mapState({
      faq: (state) => state.faq,
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchFaq");
  },
  components: { BreadCrumb, SectionTitle, Faq, MainForm },
  data() {
    return {
      links: [
        {
          title: "How it works",
          link: "/how-it-works",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>