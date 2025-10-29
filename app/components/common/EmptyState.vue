<script setup lang="ts">
import { computed } from "vue";
/**
 * EmptyState - Display when no data is available
 *
 * Shows a friendly message with icon, title, description, and optional action.
 * Used across the application for empty lists, searches, etc.
 *
 * @example
 * <EmptyState
 *   icon="mdi:briefcase-outline"
 *   title="No jobs found"
 *   description="Try adjusting your search filters"
 *   action-text="Browse all jobs"
 *   action-link="/jobs"
 * />
 */

interface Props {
  /** Iconify icon name */
  icon: string;
  /** Main title */
  title: string;
  /** Description text */
  description: string;
  /** Action button text */
  actionText?: string;
  /** Action button link */
  actionLink?: string;
  /** Icon color theme */
  iconColor?: "emerald" | "blue" | "purple" | "gray";
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  iconColor: "gray",
  size: "md",
});

const emit = defineEmits<{
  action: [];
}>();

const iconColorClasses = computed(() => {
  const colors = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    gray: "bg-gray-100 text-gray-600",
  };
  return colors[props.iconColor];
});

const sizeClasses = computed(() => {
  const sizes = {
    sm: {
      icon: "w-12 h-12",
      iconSize: "w-6 h-6",
      title: "text-lg",
      description: "text-sm",
      padding: "p-6",
    },
    md: {
      icon: "w-16 h-16",
      iconSize: "w-8 h-8",
      title: "text-xl",
      description: "text-base",
      padding: "p-8",
    },
    lg: {
      icon: "w-20 h-20",
      iconSize: "w-10 h-10",
      title: "text-2xl",
      description: "text-lg",
      padding: "p-12",
    },
  };
  return sizes[props.size];
});

const handleAction = () => {
  if (!props.actionLink) {
    emit("action");
  }
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center"
    :class="sizeClasses.padding"
  >
    <!-- Icon -->
    <div
      class="rounded-full flex items-center justify-center mb-4"
      :class="[iconColorClasses, sizeClasses.icon]"
    >
      <Icon :name="icon" :class="sizeClasses.iconSize" />
    </div>

    <!-- Title -->
    <h3 class="font-bold text-gray-900 mb-2" :class="sizeClasses.title">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 max-w-md mb-6" :class="sizeClasses.description">
      {{ description }}
    </p>

    <!-- Action Button -->
    <NuxtLink
      v-if="actionLink"
      :to="actionLink"
      class="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
    >
      {{ actionText }}
      <Icon name="mdi:arrow-right" class="w-4 h-4" />
    </NuxtLink>

    <button
      v-else-if="actionText"
      @click="handleAction"
      class="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
    >
      {{ actionText }}
      <Icon name="mdi:arrow-right" class="w-4 h-4" />
    </button>

    <!-- Slot for custom actions -->
    <div v-if="$slots.actions" class="mt-4">
      <slot name="actions" />
    </div>
  </div>
</template>
