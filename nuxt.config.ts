import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  telemetry: false,

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@formkit/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "@nuxtjs/seo",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
  ],
  //  @ts-ignore: color-mode module options are provided by the @nuxtjs/color-mode module but not in Nuxt's base types
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },

  app: {
    baseURL: "/findpoint-frontend/",
    buildAssetsDir: "/_nuxt/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
        },
      ],
      style: [
        {
          innerHTML: `body { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-display: swap; }`,
        },
      ],
    },
  },

  css: ["~/assets/css/tailwind.css"],

  nitro: {
    compressPublicAssets: true,
    baseURL: "/findpoint-frontend/",
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      failOnError: false,
    },
    routeRules: {
      "/**": {
        cache: { swr: true, maxAge: 60 * 60 * 24 * 7 },
      },
      "/sitemap": { redirect: "/sitemap.xml" },
      "/__nuxt_content/**": { prerender: false },
      "/api/**": { prerender: false },
    },
    preset: "github-pages",
  },

  vite: {
    server: { hmr: { overlay: false } },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
  // @ts-ignore: robots module options are provided by the @nuxt/robots module but not in Nuxt's base types
  robots: {
    robotsTxt: false,
    sitemap: "/sitemap.xml",
  },
});
