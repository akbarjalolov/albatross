<template>
  <button
    class="bg-dBlue duration-200 h-fit hover:!bg-darkBlue text-white rounded-lg w-full p-[10px] border-dBlue border-2"
    :class="dynamicClass"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    dynamicClass: {
      type: String
    }
  }
}
</script>

<style lang="scss">

</style>
