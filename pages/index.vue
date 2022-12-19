<template>
  <div>
    <Main />
    <easy-steps-slider />
    <MainForm /> 
    <ReviewsSlider />
    <Blogs />
  </div>
</template>

<script>
import Main from '../components/Main.vue';
import EasyStepsSlider from '../components/sections/EasyStepsSlider.vue';
import MainForm from '../components/sections/MainForm.vue';
import ReviewsSlider from '../components/sections/ReviewsSlider.vue'
import Blogs from '../components/sections/Blogs.vue'
export default {
  components: {Main, EasyStepsSlider, MainForm, ReviewsSlider, Blogs},
};
</script>

<style lang="scss" scoped></style>
