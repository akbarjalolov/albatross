<template>
  <div>
    <div class="wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "../components/Header.vue";
export default {
  name: "default",
  components: {
    Header,
  },
};
</script>

<style lang
Header="scss" scoped></style>
