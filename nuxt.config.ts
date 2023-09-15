// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  app: {
      head: {
          link: [
              {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com'
              },
              {
                  rel: 'preconnect',
                  href: 'https://fonts.gstatic.com',
                  crossorigin: ''
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap',
              }
          ]
      }
  },

  css: ['~/assets/styles/main.sass'],

  components: [
      { path: '~/components/Sidebar', prefix: 'Sidebar' },
      '~/components'
  ],

  // devtools: { enabled: true },

  modules: [
      '@pinia/nuxt',
  ],

  pinia: {
      autoImports: [
          'defineStore',
      ],
  },

  runtimeConfig: {
      public: {
          api: 'https://jsonplaceholder.typicode.com'
      }
  },

  // mode: 'static'
})
