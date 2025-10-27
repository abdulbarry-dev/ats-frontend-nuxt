export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: true, // Enable SSR for best performance

  future: {
    compatibilityVersion: 4,
  },

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
    classSuffix: "",
    preference: "system", // default theme
    fallback: "light",
    storageKey: "nuxt-color-mode", // localStorage key
    dataValue: "theme",
  },

  // Nuxt Image module config for automatic optimization
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    format: ["webp", "avif"],
    quality: 80,
    domains: [],
    presets: {
      default: {
        modifiers: {
          format: "webp",
          quality: 80,
        },
      },
    },
  },

  // Tailwind CSS configuration for Nuxt module
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },

 

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 124,
    },
    serverBundle: {
      collections: ["mdi", "lucide", "tabler", "ri", "fa6-solid"],
    },
  },

  // App configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        // Preload and swap fonts for performance
        {
          rel: "preload",
          href: "/fonts/inter-var-latin.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
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

  // CSS files
  css: ["~/assets/css/tailwind.css"],

  // Build configuration for compression and analysis
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
    routeRules: {
      "/**": {
        cache: {
          swr: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
        },
      },
    },
  },


  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },

  // Router prefetching strategy
  // (prefetchLinks is not supported in Nuxt 4 router config)

  // TypeScript performance
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
