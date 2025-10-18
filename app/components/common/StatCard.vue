<script setup lang="ts">
/**
 * StatCard - Reusable metric card component
 * 
 * Displays a stat with icon, value, label, optional trend, and link.
 * Used across candidate and recruiter dashboards.
 * 
 * @example
 * <StatCard 
 *   title="Active Jobs"
 *   :value="24"
 *   icon="mdi:briefcase"
 *   color="emerald"
 *   :trend="{ value: 12, direction: 'up' }"
 *   link="/jobs/manage"
 * />
 */

interface Trend {
  value: number
  direction: 'up' | 'down'
}

interface Props {
  /** Card title/label */
  title: string
  /** Metric value to display */
  value: string | number
  /** Iconify icon name */
  icon: string
  /** Color theme for icon and accents */
  color?: 'emerald' | 'blue' | 'purple' | 'orange' | 'red' | 'indigo' | 'pink'
  /** Optional trend indicator */
  trend?: Trend
  /** Optional subtitle/description */
  subtitle?: string
  /** Optional link for navigation */
  link?: string
  /** Optional badge text */
  badge?: string
  /** Animation delay for stagger effect */
  animationDelay?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'emerald',
  animationDelay: '0ms'
})

const colorClasses = computed(() => {
  const colors = {
    emerald: {
      iconBg: 'bg-emerald-100',
      iconText: 'text-emerald-600',
      linkText: 'text-emerald-600 hover:text-emerald-700'
    },
    blue: {
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-600',
      linkText: 'text-blue-600 hover:text-blue-700'
    },
    purple: {
      iconBg: 'bg-purple-100',
      iconText: 'text-purple-600',
      linkText: 'text-purple-600 hover:text-purple-700'
    },
    orange: {
      iconBg: 'bg-orange-100',
      iconText: 'text-orange-600',
      linkText: 'text-orange-600 hover:text-orange-700'
    },
    red: {
      iconBg: 'bg-red-100',
      iconText: 'text-red-600',
      linkText: 'text-red-600 hover:text-red-700'
    },
    indigo: {
      iconBg: 'bg-indigo-100',
      iconText: 'text-indigo-600',
      linkText: 'text-indigo-600 hover:text-indigo-700'
    },
    pink: {
      iconBg: 'bg-pink-100',
      iconText: 'text-pink-600',
      linkText: 'text-pink-600 hover:text-pink-700'
    }
  }
  
  return colors[props.color]
})

const trendClasses = computed(() => {
  if (!props.trend) return null
  
  return {
    bg: props.trend.direction === 'up' ? 'bg-green-100' : 'bg-red-100',
    text: props.trend.direction === 'up' ? 'text-green-700' : 'text-red-700',
    icon: props.trend.direction === 'up' ? 'mdi:arrow-up' : 'mdi:arrow-down'
  }
})

const Component = computed(() => props.link ? resolveComponent('NuxtLink') : 'div')
</script>

<template>
  <component 
    :is="Component"
    :to="link"
    class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all animate-fade-in-up"
    :style="{ animationDelay }"
    :class="{ 'cursor-pointer': link }"
  >
    <!-- Header: Icon and Trend/Badge -->
    <div class="flex items-center justify-between mb-4">
      <div class="w-12 h-12 rounded-lg flex items-center justify-center" :class="colorClasses.iconBg">
        <Icon :name="icon" class="w-6 h-6" :class="colorClasses.iconText" />
      </div>
      
      <!-- Trend Indicator -->
      <span 
        v-if="trend && trendClasses" 
        class="px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
        :class="[trendClasses.bg, trendClasses.text]"
      >
        <Icon :name="trendClasses.icon" class="w-3 h-3" />
        {{ trend.value }}%
      </span>
      
      <!-- Badge -->
      <span 
        v-else-if="badge"
        class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold"
      >
        {{ badge }}
      </span>
    </div>

    <!-- Value -->
    <div class="text-3xl font-bold text-gray-900 mb-1">
      {{ value }}
    </div>

    <!-- Title -->
    <div class="text-sm text-gray-600 mb-1">
      {{ title }}
    </div>

    <!-- Subtitle -->
    <div v-if="subtitle" class="text-xs text-gray-500">
      {{ subtitle }}
    </div>

    <!-- Link Footer -->
    <div v-if="link" class="mt-3 pt-3 border-t border-gray-200">
      <div class="text-xs font-medium flex items-center gap-1" :class="colorClasses.linkText">
        View all
        <Icon name="mdi:arrow-right" class="w-3 h-3" />
      </div>
    </div>

    <!-- Slot for custom footer -->
    <div v-if="$slots.footer" class="mt-3 pt-3 border-t border-gray-200">
      <slot name="footer" />
    </div>
  </component>
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
