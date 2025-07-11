// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@unocss/nuxt',
  ],
  app: {
    layoutTransition: { name: 'layout' }
  },

  routeRules: {
    '/client': { ssr: false },
    '/client/contact': { ssr: false }
  }
});
