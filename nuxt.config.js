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
  ssr: true,
  plugins: [
    { src: '~/plugins/webFontLoader.js', ssr: false },
    { src: '~/plugins/element.js' },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/assets/js/scripts.js' },
    { src: '~/plugins/number-animation.js', ssr: false },
    { src: '~/plugins/slick.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/vee-validate.js' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/axios',
    "vue-toastification/nuxt"

  ],

  styleResources: {
    scss: ['@/assets/scss/functions.scss'],
  },

  axios: {
    baseURL: process.env.BASE_URL || "http://107.173.122.114:8000/api/swagger/"
  },


  build: {
    extractCSS: true,
    cssSourceMap: false,
  },
}
