<template>
  <div class="min-h-screen flex flex-col" :data-color-scheme="colorMode.value">
    <!-- Navbar -->
    <LayoutNavbar />

    <!-- Main Content -->
    <main class="flex-grow" :style="mainInlineStyle">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '#imports';

const colorMode = useColorMode();

const mainInlineStyle = {
  // Offset main content so the fixed navbar never overlaps it.
  paddingTop: 'var(--site-header-height, 4rem)',
};
</script>
