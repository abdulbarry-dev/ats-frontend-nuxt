<template>
  <ColorScheme tag="div" class="min-h-screen" :class="{ 'site-root': !isAuthPage }">
    <NuxtRouteAnnouncer />
    <NuxtLayout v-if="!isAuthPage">
      <NuxtPage />
    </NuxtLayout>
    <NuxtPage v-else />
  </ColorScheme>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useColorMode } from '#imports';

const colorMode = useColorMode();
const route = useRoute();
const isAuthPage = computed(
  () => route.path === '/auth' || route.path.startsWith('/auth/'),
);

if (process.client) {
  watchEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(colorMode.value);
    root.setAttribute('data-theme', colorMode.value);
  });
}
</script>

<style scoped>
:global(:root) {
  --site-header-height: 4rem;
}

/* Ensure all page content sits below the fixed header. The Navbar sets
   --site-header-height to its computed height on mount and resize. */
.site-root {
  min-height: 100vh;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: background-color;
}
</style>
