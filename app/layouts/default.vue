<template>
  <div class="min-h-screen flex flex-col">
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
// Layout for public-facing pages
</script>

