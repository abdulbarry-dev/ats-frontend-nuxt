<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-emerald-600 mb-4">404</h1>
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '404 - Page Not Found' })
</script>
