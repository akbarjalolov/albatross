<template>
  <div>
    <div class="wrapper">
      <HeaderBlack />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderBlack from "../components/HeaderBlack.vue";
export default {
  name: "default",
  components: {
    HeaderBlack,
  },
};
</script>

<style lang
Header="scss" scoped></style>
