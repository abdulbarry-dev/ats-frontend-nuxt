<template>
  <div class="site-root">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
/* Ensure all page content sits below the fixed header. The Navbar sets
   --site-header-height to its computed height on mount and resize. */
.site-root {
  padding-top: var(--site-header-height, 4rem); /* fallback to 64px */
}
</style>
