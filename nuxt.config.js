export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shadow Frens NFT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NFT Collection on Solana combining unique utilities and original art with 200 hand-drawn traits' },
      { hid: 'og:image', property: 'og:image', content: './og.png' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Shadow Frens NFT' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'NFT Collection on Solana combining unique utilities and original art with 200 hand-drawn traits' },
      { hid: 'twitter:image', property: 'twitter:image', content: './og.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './logo-ico.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/normalize',
    '~/assets/styles/helpers',
    '~/assets/styles/variables',
    '~/assets/styles/globals'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: './'
  },
  styleResources: {
    scss: ['./assets/styles/*.*']
  }
}
