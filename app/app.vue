<template>
  <div :class="{ 'site-root': !isAuthPage }">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const authPages = ['/auth/login', '/auth/signup', '/auth/reset-password', '/auth/forget-password'];
const isAuthPage = authPages.includes(route.path);
</script>

<style scoped>
/* Ensure all page content sits below the fixed header. The Navbar sets
   --site-header-height to its computed height on mount and resize. */
.site-root {
  padding-top: var(--site-header-height, 4rem); /* fallback to 64px */
  min-height: 100vh;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: background-color;
}
</style>
