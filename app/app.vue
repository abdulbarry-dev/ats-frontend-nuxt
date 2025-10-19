<template>
  <div class="site-root">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
/* Global Dark Mode Styles */
:root {
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-tertiary: #f3f4f6;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-text-tertiary: #9ca3af;
  --color-border: #e5e7eb;
  --color-border-light: #f3f4f6;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

.dark {
  --color-bg-primary: #0f172a;
  --color-bg-secondary: #1e293b;
  --color-bg-tertiary: #334155;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #cbd5e1;
  --color-text-tertiary: #94a3b8;
  --color-border: #334155;
  --color-border-light: #1e293b;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.6);
}

/* Smooth theme transitions */
html {
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* View Transitions API support */
@supports (view-transition-name: none) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.5s;
  }
  
  ::view-transition-old(root) {
    animation-name: fade-out;
  }
  
  ::view-transition-new(root) {
    animation-name: fade-in;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

/* Ripple animation for theme transitions */
@keyframes theme-ripple {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
}
</style>

<style scoped>
/* Ensure all page content sits below the fixed header. The Navbar sets
   --site-header-height to its computed height on mount and resize. */
.site-root {
  padding-top: var(--site-header-height, 4rem); /* fallback to 64px */
  min-height: 100vh;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
