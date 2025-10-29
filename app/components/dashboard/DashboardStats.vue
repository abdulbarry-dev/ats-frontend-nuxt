<script setup lang="ts">
import { computed } from "vue";
/**
 * DashboardStats - Grid of stat cards for dashboard
 *
 * Renders a responsive grid of StatCard components.
 * Role-aware styling and behavior.
 *
 * @example
 * <DashboardStats :stats="stats" role="candidate" />
 */

interface DashboardStat {
  title: string;
  value: string | number;
  icon: string;
  color?: "emerald" | "blue" | "purple" | "orange" | "red" | "indigo" | "pink";
  trend?: {
    value: number;
    direction: "up" | "down";
  };
  subtitle?: string;
  link?: string;
  badge?: string;
}

interface Props {
  /** Array of stat data */
  stats: DashboardStat[];
  /** User role for styling */
  role?: "candidate" | "recruiter" | "admin";
  /** Grid columns (responsive) */
  columns?: 2 | 3 | 4;
  /** Loading state */
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  columns: 4,
  loading: false,
});

const gridClasses = computed(() => {
  const cols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };
  return cols[props.columns];
});
</script>

<template>
  <div class="mb-8">
    <!-- Loading State -->
    <div v-if="loading" class="grid gap-4 sm:gap-6" :class="gridClasses">
      <div
        v-for="i in columns"
        :key="i"
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-gray-200 rounded-lg"></div>
          <div class="w-16 h-6 bg-gray-200 rounded-full"></div>
        </div>
        <div class="w-20 h-8 bg-gray-200 rounded mb-2"></div>
        <div class="w-32 h-4 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div v-else class="grid gap-4 sm:gap-6" :class="gridClasses">
      <StatCard
        v-for="(stat, index) in stats"
        :key="index"
        :title="stat.title"
        :value="stat.value"
        :icon="stat.icon"
        :color="stat.color"
        :trend="stat.trend"
        :subtitle="stat.subtitle"
        :link="stat.link"
        :badge="stat.badge"
        :animation-delay="`${index * 50}ms`"
      />
    </div>

    <!-- Empty State -->
    <EmptyState
      v-if="!loading && stats.length === 0"
      icon="mdi:chart-box-outline"
      title="No stats available"
      description="Your dashboard stats will appear here once you start using the platform"
      size="sm"
    />
  </div>
</template>
