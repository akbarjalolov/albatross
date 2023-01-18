<template>
  <div>
    <pre>{{faq}}</pre>
    <Main />
    <EasyStepsSlider />
    <MainForm />
    <ReviewsSlider :data="reviews"/>
    <PartnersSlider />
    <Blogs />
    <Faq :data="faq"/>
  </div>
</template>

<script>
import Main from "../components/Main.vue";
import EasyStepsSlider from "../components/sections/EasyStepsSlider.vue";
import MainForm from "../components/sections/MainForm.vue";
import ReviewsSlider from "../components/sections/ReviewsSlider.vue";
import Blogs from "../components/sections/Blogs.vue";
import PartnersSlider from "../components/sections/PartnersSlider.vue";
import Faq from "../components/sections/Faq.vue";
import aosMixin from "~/mixins/aos";
import { mapState } from "vuex";
export default {
  components: {
    Main,
    EasyStepsSlider,
    MainForm,
    ReviewsSlider,
    Blogs,
    PartnersSlider,
    Faq,
  },
  mixins: [aosMixin],
  computed: {
    ...mapState({
      reviews: (state) => state.reviews,
      faq: (state) => state.faq
    }),
  },
  async fetch() {
    await this.$store.dispatch("fetchReviews")
    await this.$store.dispatch("fetchFaq")
  },
};
</script>


