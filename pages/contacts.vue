<template>
  <div>
    <BreadCrumb :links="links" />
    <div class="container px-[16px] mx-auto">
      <section-title title="Contacts" class="mt-[32px]" />
      <div class="grid grid-cols-12 gap-[32px] my-[32px]">
        <div class="col-span-12 md:col-span-6 lg:col-span-7">
          <h2 class="text-dark font-normal text-[22px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[52px]">
            Love to hear from you.
          </h2>
          <h4 class="mt-2 text-dark font-semibold text-[22px] md:text-[40px] leading-[36px] lg:leading-[52px]">
            Get in touch 👋
          </h4>
          <h6 class="mt-5 text-dark font-normal text-[16px] md:text-[20px] leading-140">
            To request a quote or want to discuss about order, contact us
            directly or fill out the form and we will get back to you prompty
          </h6>
          <div class="flex flex-col gap-[16px] mt-[36px]">
            <a
              class="flex items-center gap-[8px] hover-underline"
              href="https://google.com"
            >
              <span
                class="
                  bg-[#11304D]
                  transition-all
                  duration-300
                  hover:bg-[#00AFEF]
                  f-social
                  rounded-full
                  flex
                  items-center
                  justify-center
                  min-w-[40px]
                  h-[40px]
                  cursor-pointer
                "
              >
                <img src="@/static/icons/map-pin.svg" />
              </span>
              <h4 class="text-dark duration-300 hover:text-dBlue font-normal text-[16px] leading-130">
                151 New Park Ave, Hartford, CT 06106 United States
              </h4>
            </a>
            <a
              class="flex items-center gap-[8px] hover-underline"
              href="mailto:info@albatrosllc.com"
            >
              <span
                class="
                  bg-[#11304D]
                  transition-all
                  duration-300
                  hover:bg-[#00AFEF]
                  f-social
                  rounded-full
                  flex
                  items-center
                  justify-center
                  min-w-[40px]
                  h-[40px]
                  cursor-pointer
                "
              >
                <img src="@/static/icons/mail.svg" />
              </span>
              <h4 class="text-dark duration-300 hover:text-dBlue font-normal text-[16px] leading-130">
                info@albatrosllc.com
              </h4>
            </a>
            <a
              class="flex items-center gap-[8px] hover-underline"
              href="tel:info@albatrosllc.com"
            >
              <span
                class="
                  bg-[#11304D]
                  transition-all
                  duration-300
                  hover:bg-[#00AFEF]
                  f-social
                  rounded-full
                  flex
                  items-center
                  justify-center
                  min-w-[40px]
                  h-[40px]
                  cursor-pointer
                "
              >
                <img src="@/static/icons/phone-call.svg" />
              </span>
              <h4 class="text-dark duration-300 hover:text-dBlue font-normal text-[16px] leading-130">
                +1 (203) 302-05-45
              </h4>
            </a>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-5">
          <div class="bg-[#07192A] rounded-[16px] p-[16px] md:p-[28px]">
            <div class="flex flex-col gap-[20px]">
              <div class="relative">
                <input
                  class="text-white"
                  id="input"
                  type="text"
                  placeholder="Your name"
                  required
                  v-model="form.fullName"
                />
                <label
                  class="
                    absolute
                    bg-[#07192A]
                    text-white
                    font-semibold
                    text-sm
                    leading-140
                    left-[12px]
                    top-[-7px]
                    px-1
                  "
                  >Name</label
                >
              </div>
              <div class="relative">
                <input
                  class="text-white"
                  id="input"
                  type="text"
                  placeholder="Your phone number"
                  required
                  v-model="form.phone"
                />
                <label
                  class="
                    absolute
                    bg-[#07192A]
                    text-white
                    font-semibold
                    text-sm
                    leading-140
                    left-[12px]
                    top-[-7px]
                    px-1
                  "
                  >Phone number</label
                >
              </div>
              <div class="relative">
                <input
                  class="text-white"
                  id="input"
                  type="text"
                  placeholder="example@albatros.com"
                  required
                  v-model="form.mail"
                />
                <label
                  class="
                    absolute
                    bg-[#07192A]
                    text-white
                    font-semibold
                    text-sm
                    leading-140
                    left-[12px]
                    top-[-7px]
                    px-1
                  "
                  >Email</label
                >
              </div>
              <div class="relative">
                <textarea
                  class="text-white min-h-[132px]"
                  id="input"
                  type="text"
                  placeholder="Type your message"
                  required
                  v-model="form.message"
                />
                <label
                  class="
                    absolute
                    bg-[#07192A]
                    text-white
                    font-semibold
                    text-sm
                    leading-140
                    left-[12px]
                    top-[-7px]
                    px-1
                  "
                  >Message</label
                >
              </div>
              <CButton dynamicClass="md:mt-[44px]" text="Send"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- faq -->
    <Faq />
  </div>
</template>

<script>
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import Faq from "@/components/sections/Faq.vue";
import CButton from '../components/CButton.vue';
export default {
  layout: "black",
  components: { BreadCrumb, SectionTitle, Faq, CButton },
  data() {
    return {
      form: {
        fullName: "",
        phone: "",
        mail: "",
        message: "",
      },
      links: [
        {
          name: "Contacts",
          link: "/contacts",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
input,
textarea {
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  margin: 0 0 1em;
  padding: 6px 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0px 6px 20px rgba(18, 40, 47, 0.06);
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  resize: none;
  outline: none;
}
input[type="text"]:focus,
textarea:focus {
  border-color: #00bafa;
}
</style>