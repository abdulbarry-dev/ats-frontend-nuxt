<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <!-- Back Button & Header -->
      <NuxtLink
        to="/candidates/settings"
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 transition-colors"
      >
        <Icon name="mdi:arrow-left" class="w-5 h-5" />
        Back to Settings
      </NuxtLink>

      <div class="mb-8">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Theme Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Choose your preferred appearance for the application
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300 animate-fade-in"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Theme Mode
        </h2>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            v-for="option in themeOptions"
            :key="option.value"
            @click="setTheme(option.value)"
            :aria-pressed="colorMode.value === option.value"
            :class="[
              'flex-1 flex flex-col items-center justify-center px-6 py-5 rounded-xl border transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-500',
              colorMode.value === option.value
                ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 shadow-lg scale-105'
                : 'border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 hover:border-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-emerald-900/20 opacity-90 hover:opacity-100',
            ]"
          >
            <Icon
              :name="option.icon"
              class="w-9 h-9 mb-2 text-emerald-600 dark:text-emerald-400 transition-all duration-500"
            />
            <span
              class="font-semibold text-gray-900 dark:text-white text-base"
              >{{ option.label }}</span
            >
            <span class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{
              option.desc
            }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from "#imports";

const colorMode = useColorMode();

const themeOptions = [
  {
    value: "light",
    label: "Light",
    icon: "mdi:weather-sunny",
    desc: "Bright and clear interface",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "mdi:weather-night",
    desc: "Easy on the eyes",
  },
];

function setTheme(theme: string) {
  colorMode.preference = theme;
  colorMode.value = theme;
  // Force update to localStorage for persistence
  if (process.client) {
    try {
      localStorage.setItem("nuxt-color-mode", theme);
    } catch (e) {}
  }
}
</script>

<style scoped>
button:focus {
  outline: 2px solid #10b981;
  outline-offset: 2px;
}
.animate-fade-in {
  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
