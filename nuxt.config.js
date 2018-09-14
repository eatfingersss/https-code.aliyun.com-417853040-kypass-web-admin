module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {src: '~assets/css/main.css'},
    {src: 'element-ui/lib/theme-chalk/index.css'}
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  axios: {
    proxy: true, // Can be also an object with default options
    withCredentials: true
  },
  modules: [
    '@nuxtjs/axios'
  ],
  proxy: {
    // '/api/': 'http://127.0.0.1:6060'
    '/api/': 'http://www.ky105guo.top:9191/mock/18'
  },
  plugins: [
    {src: '@/plugins/element-ui'},
    {src: '@/plugins/axios'}
    // { src: '~/plugins/flexible', ssr: false }
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
