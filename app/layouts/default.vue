<template>
  <div class="min-h-screen flex flex-col" data-color-scheme="{{colorMode.value}}">
    <!-- Navbar -->
    <LayoutNavbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
</script>
