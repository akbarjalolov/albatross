<template>
  <div>
    <Main />
    <EasyStepsSlider />
    <MainForm /> 
    <ReviewsSlider />
    <PartnersSlider />
    <Blogs />
  </div>
</template>

<script>
import Main from '../components/Main.vue';
import EasyStepsSlider from '../components/sections/EasyStepsSlider.vue';
import MainForm from '../components/sections/MainForm.vue';
import ReviewsSlider from '../components/sections/ReviewsSlider.vue'
import Blogs from '../components/sections/Blogs.vue'
import PartnersSlider from '../components/sections/PartnersSlider.vue';
export default {
  components: {Main, EasyStepsSlider, MainForm, ReviewsSlider, Blogs, PartnersSlider},
};
</script>

<style lang="scss" scoped></style>
