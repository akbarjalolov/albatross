<template>
  <div>
    <!-- <div v-if="$fetchState.pending" class="preloader"></div>
    <div v-else-if="$fetchState.error" class="error">Something is wrong here!</div> -->
    <!-- <header /> -->
    <div class="wrapper">
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
     components: {
    }
  }
</script>

<style lang
Header="scss" scoped></style>
