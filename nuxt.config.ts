// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image-edge',
  ],
  app: {
    head: {
      title: 'Film Junkies',
      meta: [
        { name: 'description', content: 'Movie Database'}
      ],
    }
  }

})
