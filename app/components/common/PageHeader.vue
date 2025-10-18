<script setup lang="ts">
/**
 * PageHeader - Consistent page header with title, description, breadcrumbs, and actions
 * 
 * Provides a standardized header layout used across all pages.
 * Supports breadcrumb navigation and action buttons.
 * 
 * @example
 * <PageHeader>
 *   <template #title>Dashboard</template>
 *   <template #description>Welcome to your dashboard</template>
 *   <template #actions>
 *     <Button>Action</Button>
 *   </template>
 * </PageHeader>
 */

interface Breadcrumb {
  label: string
  to?: string
  icon?: string
}

interface Props {
  /** Show background gradient */
  gradient?: boolean
  /** Breadcrumb items */
  breadcrumbs?: Breadcrumb[]
  /** Animation enabled */
  animate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gradient: false,
  animate: true
})
</script>

<template>
  <div 
    class="mb-8"
    :class="{ 
      'animate-fade-in-up': animate,
      'bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100': gradient 
    }"
  >
    <!-- Breadcrumbs -->
    <nav v-if="breadcrumbs && breadcrumbs.length" class="flex items-center gap-2 text-sm mb-4">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <NuxtLink 
          v-if="crumb.to"
          :to="crumb.to"
          class="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-1"
        >
          <Icon v-if="crumb.icon" :name="crumb.icon" class="w-4 h-4" />
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-gray-400 flex items-center gap-1">
          <Icon v-if="crumb.icon" :name="crumb.icon" class="w-4 h-4" />
          {{ crumb.label }}
        </span>
        <Icon 
          v-if="index < breadcrumbs.length - 1" 
          name="mdi:chevron-right" 
          class="w-4 h-4 text-gray-400" 
        />
      </template>
    </nav>

    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <!-- Title & Description -->
      <div class="flex-1">
        <!-- Default title slot -->
        <h1 v-if="$slots.title" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          <slot name="title" />
        </h1>
        
        <!-- Default description slot -->
        <p v-if="$slots.description" class="text-gray-600">
          <slot name="description" />
        </p>

        <!-- Meta info slot (dates, counts, etc.) -->
        <div v-if="$slots.meta" class="mt-2 flex items-center gap-4 text-sm text-gray-500">
          <slot name="meta" />
        </div>
      </div>

      <!-- Actions -->
      <div v-if="$slots.actions" class="flex items-center gap-3">
        <slot name="actions" />
      </div>
    </div>

    <!-- Additional content slot -->
    <div v-if="$slots.default" class="mt-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>
