<script setup lang="ts">
/**
 * DashboardActivity - Activity feed component
 *
 * Displays recent activities with icons, timestamps, and actions.
 * Role-aware content and styling.
 *
 * @example
 * <DashboardActivity
 *   :activities="activities"
 *   role="candidate"
 *   title="Recent Activity"
 * />
 */

interface Activity {
  id: string;
  type: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description?: string;
  time: string;
  link?: string;
  actionText?: string;
}

interface Props {
  /** Activity items */
  activities: Activity[];
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** User role */
  role?: "candidate" | "recruiter" | "admin";
  /** Maximum items to show */
  maxItems?: number;
  /** Show "view all" link */
  showViewAll?: boolean;
  /** View all link destination */
  viewAllLink?: string;
  /** Loading state */
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Recent Activity",
  description: "Latest updates and notifications",
  maxItems: 5,
  showViewAll: true,
  loading: false,
});

const displayedActivities = computed(() => {
  return props.activities.slice(0, props.maxItems);
});

const hasMore = computed(() => {
  return props.activities.length > props.maxItems;
});
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-fade-in-up"
  >
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-1">{{ title }}</h2>
        <p v-if="description" class="text-sm text-gray-500">
          {{ description }}
        </p>
      </div>
      <NuxtLink
        v-if="showViewAll && viewAllLink"
        :to="viewAllLink"
        class="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
      >
        View all
        <Icon name="mdi:arrow-right" class="w-4 h-4" />
      </NuxtLink>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="space-y-4">
      <div v-for="i in 3" :key="i" class="flex gap-4 animate-pulse">
        <div class="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
        <div class="flex-1 space-y-2">
          <div class="w-3/4 h-4 bg-gray-200 rounded"></div>
          <div class="w-1/2 h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Activity List -->
    <div v-else-if="displayedActivities.length > 0" class="space-y-4">
      <div
        v-for="activity in displayedActivities"
        :key="activity.id"
        class="flex gap-4 group"
      >
        <!-- Icon -->
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          :class="activity.iconBg"
        >
          <Icon
            :name="activity.icon"
            class="w-5 h-5"
            :class="activity.iconColor"
          />
        </div>

        <!-- Content -->
        <div class="flex-1 min-w-0">
          <!-- Title -->
          <div class="flex items-start justify-between gap-2 mb-1">
            <component
              :is="activity.link ? 'NuxtLink' : 'p'"
              :to="activity.link"
              class="text-sm font-medium text-gray-900"
              :class="{
                'hover:text-emerald-600 transition-colors': activity.link,
              }"
              v-html="activity.title"
            />
            <span class="text-xs text-gray-500 whitespace-nowrap">{{
              activity.time
            }}</span>
          </div>

          <!-- Description -->
          <p v-if="activity.description" class="text-sm text-gray-600 mb-2">
            {{ activity.description }}
          </p>

          <!-- Action Button -->
          <NuxtLink
            v-if="activity.actionText && activity.link"
            :to="activity.link"
            class="text-xs text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {{ activity.actionText }}
            <Icon name="mdi:arrow-right" class="w-3 h-3" />
          </NuxtLink>
        </div>
      </div>

      <!-- Show more indicator -->
      <div v-if="hasMore && viewAllLink" class="pt-4 border-t border-gray-200">
        <NuxtLink
          :to="viewAllLink"
          class="text-sm text-gray-600 hover:text-emerald-600 font-medium flex items-center justify-center gap-1 transition-colors"
        >
          View {{ activities.length - maxItems }} more activities
          <Icon name="mdi:chevron-down" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>

    <!-- Empty State -->
    <EmptyState
      v-else
      icon="mdi:history"
      title="No activity yet"
      description="Your recent activities will appear here"
      size="sm"
    />

    <!-- Custom slot for additional content -->
    <div v-if="$slots.footer" class="mt-6 pt-6 border-t border-gray-200">
      <slot name="footer" />
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
