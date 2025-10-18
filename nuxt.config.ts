export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/seo'
  ],
   formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 124
    },
    serverBundle: {
      // Include all locally installed Iconify collections here so Nuxt can
      // bundle them server-side and avoid client downloads from the CDN.
      collections: ['mdi', 'lucide', 'tabler', 'ri', 'fa6-solid']
    }
  }
})