<template>
  <div>
    <Main data-aos="fade-up"/>
    <EasyStepsSlider data-aos="fade-up"/>
    <MainForm data-aos="fade-up"/> 
    <ReviewsSlider data-aos="fade-up"/>
    <PartnersSlider data-aos="fade-up"/>
    <Blogs data-aos="fade-up"/>
  </div>
</template>

<script>
import Main from '../components/Main.vue';
import EasyStepsSlider from '../components/sections/EasyStepsSlider.vue';
import MainForm from '../components/sections/MainForm.vue';
import ReviewsSlider from '../components/sections/ReviewsSlider.vue'
import Blogs from '../components/sections/Blogs.vue'
import PartnersSlider from '../components/sections/PartnersSlider.vue';
import aosMixin from '~/mixins/aos'
export default {
  components: {Main, EasyStepsSlider, MainForm, ReviewsSlider, Blogs, PartnersSlider},
  mixins: [aosMixin],
};
</script>

<style lang="scss" scoped></style>
