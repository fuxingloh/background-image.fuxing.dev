export default {
  target: 'static',
  head: {
    title: 'CSS Background Image',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:title', name: 'og:title', content: 'CSS Background Image'},
      {
        hid: 'description',
        name: 'description',
        content: 'SSG website and article to demo background image and how to do them properly'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'SSG website and article to demo background image and how to do them properly'
      },
      {name: 'og:locale', content: 'en_us'},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/logo.png'}
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {},
  build: {}
}
