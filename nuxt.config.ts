import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  telemetry: false,

  modules: [
    "@nuxt/content",
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
  ],

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
        { innerHTML: `body { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; font-display: swap; }` },
      ],
    },
  },

  css: ["~/assets/css/tailwind.css"],

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      ignore: ["/__nuxt_content/**"],
    },
    routeRules: {
      "/**": {
        cache: { swr: true, maxAge: 60 * 60 * 24 * 7 },
      },
      "/sitemap": { redirect: "/sitemap.xml" },
    },
  },

  vite: {
    server: { hmr: { overlay: false } },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
});
