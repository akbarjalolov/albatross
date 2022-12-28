export default {
  head: {
    title: 'Albatross',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/scss/style.scss'],
  env: {
    browser: true
  },
  plugins: [
    { src: '~/plugins/webFontLoader.js', ssr: false },
    { src: '~/plugins/element.js' },
    { src: '~/plugins/slider.js' },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/assets/js/scripts.js' },
    { src: '~/plugins/slick.js' },
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/number-animation.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/axios',
  
  ],

  styleResources: {
    scss: ['@/assets/scss/functions.scss'],
  },

  axios: {
    baseURL: '',
  },

  build: {
    extractCSS: true,
    cssSourceMap: false,
  },
}
