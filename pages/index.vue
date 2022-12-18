<template>
  <div>
    <Main />
    <easy-steps-slider />
    <MainForm /> 
  </div>
</template>

<script>
import Main from '../components/Main.vue';
import EasyStepsSlider from '../components/sections/EasyStepsSlider.vue';
import MainForm from '../components/sections/MainForm.vue';
export default {
  components: {Main, EasyStepsSlider, MainForm},
};
</script>

<style lang="scss" scoped></style>
