module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    colors: {
      darks: '#333333',
      dark: '#22232C',
      dBlue: '#00AFEF',
      darkBlue: '#047BAD',
      white: '#FFFFFF',
      dGray: '#BBBCB9',
      lightGray: '#A7B2BD',
      gray: {
        100: '#F5F8FC'
      }
    },
    lineHeight: {
      120: '120%',
      130: '130%',
      137: '137%',
      132: '132%',
      140: '140%',
      150: '150%',
    },
  },
   plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
