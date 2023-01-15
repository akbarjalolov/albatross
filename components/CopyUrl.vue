<template>
  <div
    class="border max-w-[214px] bg-[#F5F8FC] rounded-[8px] flex items-center gap-2 justify-between"
    @click="copy()"
  >
    <div class="w-full relative" :class="maxWidth">
      <h3
        class="text-[#181919] text-[16px] font-semibold py-[8px] pl-[12px] truncate"
      >
        allbatross.com{{ $route.path }}
      </h3>
      <transition name="fade">
        <div
          v-if="copyLink"
          class="bg-[#484848db] py-[10px] w-full text-center text-white text-[12px] font-normal absolute top-0 left-0 rounded-[2px]"
        >
          Text copied
        </div>
      </transition>
    </div>
    <button
      class="group w-[36px] h-[37px] flex items-center justify-center bg-[#FBFBFB] hover:bg-mainBlue transition duration-300 hover:bg-[#d4d3d3] rounded-r-[8px]"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="7.99902" width="12" height="12" rx="1.5" stroke="#828F89" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 7.99902V5.99902C16 4.89445 15.1046 3.99902 14 3.99902H6C4.89543 3.99902 4 4.89445 4 5.99902V13.999C4 15.1036 4.89543 15.999 6 15.999H8" stroke="#828F89" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </button>
  </div>
</template>

<script>
export default {
  name: 'LinkCopy',
  props: {
    maxWidth: {
      type: String,
      default: 'w-[165px]',
    },
  },
  data() {
    return {
      copyLink: false,
    }
  },
  methods: {
    copy() {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.value = window.location.href
      input.select()
      input.focus()
      document.execCommand('copy')
      input.remove()
      this.copyLink = true
      setTimeout(() => {
        this.copyLink = false
      }, 2000)
    },
  },
}
</script>

<style scoped>
.fade-enter-active {
  animation: fade 0.4s ease-out;
}
.fade-leave-active {
  animation: fade 0.4s ease-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
