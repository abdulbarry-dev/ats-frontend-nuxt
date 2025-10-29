<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4 transition-colors duration-300"
  >
    <div class="text-center">
      <h1
        class="text-6xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 transition-colors duration-300"
      >
        404
      </h1>
      <h2
        class="text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
      >
        Page Not Found
      </h2>
      <p
        class="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300"
      >
        The page you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/"
        class="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-300"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useHead } from "nuxt/app";


useHead({ title: "404 - Page Not Found" });
</script>
