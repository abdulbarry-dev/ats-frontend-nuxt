<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Notifications</h1>
        <p class="text-gray-600">Stay updated with your latest activity and updates</p>
      </div>

      <!-- Filter Tabs & Actions -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 fade-in-up" style="animation-delay: 100ms;">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <!-- Tabs -->
          <div class="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="activeTab === tab.id ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-2"
            >
              <Icon :name="tab.icon" class="w-4 h-4" />
              {{ tab.label }}
              <span v-if="tab.count > 0" :class="activeTab === tab.id ? 'bg-white text-emerald-600' : 'bg-emerald-600 text-white'" class="px-2 py-0.5 rounded-full text-xs font-semibold">
                {{ tab.count }}
              </span>
            </button>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2">
            <button 
              v-if="unreadCount > 0"
              @click="markAllAsRead"
              class="px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-2"
            >
              <Icon name="mdi:check-all" class="w-4 h-4" />
              Mark all as read
            </button>
            <button 
              @click="showSettings = !showSettings"
              class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Notification Settings"
            >
              <Icon name="mdi:cog" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Notification Settings Panel -->
      <Transition name="slide-fade">
        <div v-if="showSettings" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 fade-in-up">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-gray-900">Notification Preferences</h3>
            <button @click="showSettings = false" class="text-gray-400 hover:text-gray-600">
              <Icon name="mdi:close" class="w-5 h-5" />
            </button>
          </div>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="pref in preferences" :key="pref.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div class="flex items-center gap-3">
                <Icon :name="pref.icon" class="w-5 h-5 text-emerald-600" />
                <div>
                  <p class="font-medium text-gray-900 text-sm">{{ pref.label }}</p>
                  <p class="text-xs text-gray-500">{{ pref.description }}</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="pref.enabled" 
                  class="sr-only peer"
                >
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Notifications List -->
      <div class="space-y-3">
        <!-- Empty State -->
        <div v-if="filteredNotifications.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center fade-in-up">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="mdi:bell-off-outline" class="w-10 h-10 text-gray-400" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">No notifications</h3>
          <p class="text-gray-600 mb-6">You're all caught up! Check back later for updates.</p>
        </div>

        <!-- Notification Items -->
        <div 
          v-for="(notification, index) in filteredNotifications" 
          :key="notification.id"
          :class="[
            'bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden group fade-in-up cursor-pointer',
            notification.read ? 'border-gray-200 hover:shadow-md' : 'border-emerald-200 bg-emerald-50/30 hover:shadow-lg'
          ]"
          :style="`animation-delay: ${150 + index * 30}ms;`"
          @click="handleNotificationClick(notification)"
        >
          <div class="p-4 sm:p-5 flex gap-4">
            <!-- Icon -->
            <div 
              :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                getNotificationColor(notification.type).bg
              ]"
            >
              <Icon 
                :name="getNotificationIcon(notification.type)" 
                :class="['w-6 h-6', getNotificationColor(notification.type).text]"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4 mb-2">
                <div class="flex-1">
                  <h3 
                    :class="[
                      'font-bold mb-1',
                      notification.read ? 'text-gray-900' : 'text-gray-900'
                    ]"
                  >
                    {{ notification.title }}
                  </h3>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ notification.message }}</p>
                </div>
                <button 
                  @click.stop="toggleRead(notification)"
                  class="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  :title="notification.read ? 'Mark as unread' : 'Mark as read'"
                >
                  <Icon 
                    :name="notification.read ? 'mdi:email-open' : 'mdi:email'" 
                    class="w-5 h-5" 
                  />
                </button>
              </div>

              <!-- Meta Info -->
              <div class="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span class="flex items-center gap-1">
                  <Icon name="mdi:clock-outline" class="w-3.5 h-3.5" />
                  {{ formatTime(notification.time) }}
                </span>
                <span 
                  v-if="notification.category"
                  :class="[
                    'px-2 py-1 rounded-md font-medium',
                    getCategoryColor(notification.category)
                  ]"
                >
                  {{ notification.category }}
                </span>
              </div>

              <!-- Action Buttons (for certain notification types) -->
              <div v-if="notification.actions" class="flex gap-2 mt-3">
                <button 
                  v-for="action in notification.actions" 
                  :key="action.label"
                  @click.stop="handleAction(action, notification)"
                  :class="[
                    'px-4 py-2 rounded-lg font-medium text-sm transition-all',
                    action.primary 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]"
                >
                  {{ action.label }}
                </button>
              </div>
            </div>

            <!-- Unread Indicator -->
            <div v-if="!notification.read" class="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0 mt-2"></div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMore" class="mt-6 text-center fade-in-up">
        <button 
          @click="loadMore"
          :disabled="loading"
          class="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading" class="flex items-center gap-2">
            <Icon name="mdi:loading" class="w-5 h-5 animate-spin" />
            Loading...
          </span>
          <span v-else>Load More Notifications</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'Notifications - FindPoint',
  description: 'Stay updated with your latest activity and notifications'
})

interface NotificationAction {
  label: string
  primary?: boolean
  action: string
}

interface Notification {
  id: number
  type: 'job' | 'application' | 'message' | 'system' | 'company'
  title: string
  message: string
  time: Date
  read: boolean
  category?: string
  actions?: NotificationAction[]
}

// State
const activeTab = ref('all')
const showSettings = ref(false)
const loading = ref(false)

// Tabs
const tabs = computed(() => [
  { id: 'all', label: 'All', icon: 'mdi:bell', count: unreadCount.value },
  { id: 'job', label: 'Jobs', icon: 'mdi:briefcase', count: notifications.value.filter(n => !n.read && n.type === 'job').length },
  { id: 'application', label: 'Applications', icon: 'mdi:file-document', count: notifications.value.filter(n => !n.read && n.type === 'application').length },
  { id: 'message', label: 'Messages', icon: 'mdi:message', count: notifications.value.filter(n => !n.read && n.type === 'message').length },
])

// Preferences
const preferences = ref([
  { id: 1, label: 'Job Alerts', description: 'New job matches', icon: 'mdi:briefcase', enabled: true },
  { id: 2, label: 'Application Updates', description: 'Status changes', icon: 'mdi:file-check', enabled: true },
  { id: 3, label: 'Messages', description: 'Direct messages', icon: 'mdi:message', enabled: true },
  { id: 4, label: 'Company Updates', description: 'Following companies', icon: 'mdi:office-building', enabled: false },
  { id: 5, label: 'Email Notifications', description: 'Receive via email', icon: 'mdi:email', enabled: true },
  { id: 6, label: 'Push Notifications', description: 'Browser push alerts', icon: 'mdi:bell-ring', enabled: false },
])

// Mock notifications data
const notifications = ref<Notification[]>([
  {
    id: 1,
    type: 'application',
    title: 'Application Status Updated',
    message: 'Your application for Senior Frontend Engineer at TechCorp has been reviewed. The hiring team would like to schedule an interview.',
    time: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    read: false,
    category: 'Interview Request',
    actions: [
      { label: 'Schedule Interview', primary: true, action: 'schedule' },
      { label: 'View Application', action: 'view' }
    ]
  },
  {
    id: 2,
    type: 'job',
    title: 'New Job Match',
    message: 'We found a new job that matches your preferences: Product Designer at DesignHub. This position offers remote work and competitive salary.',
    time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
    category: 'Job Match',
    actions: [
      { label: 'View Job', primary: true, action: 'view-job' },
      { label: 'Not Interested', action: 'dismiss' }
    ]
  },
  {
    id: 3,
    type: 'message',
    title: 'New Message from Recruiter',
    message: 'Sarah Johnson from Global Finance Group sent you a message regarding the Financial Analyst position.',
    time: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    read: false,
    category: 'Recruiter Message'
  },
  {
    id: 4,
    type: 'company',
    title: 'Company You Follow Posted New Jobs',
    message: 'CloudSpace Systems has posted 3 new job openings that might interest you.',
    time: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
    category: 'Company Update'
  },
  {
    id: 5,
    type: 'application',
    title: 'Application Received',
    message: 'Your application for DevOps Engineer at CloudSpace Systems has been received and is under review.',
    time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    read: true,
    category: 'Application Status'
  },
  {
    id: 6,
    type: 'system',
    title: 'Profile Views Increased',
    message: 'Your profile has been viewed by 12 recruiters this week. Keep your profile updated to attract more opportunities!',
    time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    read: true,
    category: 'Profile Insights'
  },
  {
    id: 7,
    type: 'job',
    title: 'Saved Job Deadline Approaching',
    message: 'The application deadline for Backend Engineer at DataDrive Analytics is in 2 days. Don\'t miss out!',
    time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
    read: true,
    category: 'Deadline Reminder'
  },
  {
    id: 8,
    type: 'application',
    title: 'Unfortunately, Not Selected',
    message: 'Thank you for your interest in the Marketing Manager position at BrandBoost. While your qualifications are impressive, we\'ve decided to move forward with other candidates.',
    time: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
    read: true,
    category: 'Application Declined'
  },
])

// Computed
const filteredNotifications = computed(() => {
  if (activeTab.value === 'all') return notifications.value
  return notifications.value.filter(n => n.type === activeTab.value)
})

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

const hasMore = ref(false) // Set to true if you have pagination

// Methods
const markAllAsRead = () => {
  notifications.value.forEach(n => n.read = true)
}

const toggleRead = (notification: Notification) => {
  notification.read = !notification.read
}

const handleNotificationClick = (notification: Notification) => {
  if (!notification.read) {
    notification.read = true
  }
  // Handle navigation based on notification type
  console.log('Clicked notification:', notification)
}

const handleAction = (action: NotificationAction, notification: Notification) => {
  console.log('Action:', action.action, 'for notification:', notification.id)
  // Implement action handlers
}

const loadMore = () => {
  loading.value = true
  // Simulate loading more notifications
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const formatTime = (time: Date) => {
  const now = new Date()
  const diff = now.getTime() - time.getTime()
  const minutes = Math.floor(diff / 1000 / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  if (weeks < 4) return `${weeks}w ago`
  return time.toLocaleDateString()
}

const getNotificationIcon = (type: string) => {
  const icons: Record<string, string> = {
    job: 'mdi:briefcase',
    application: 'mdi:file-document-check',
    message: 'mdi:message-text',
    system: 'mdi:information',
    company: 'mdi:office-building'
  }
  return icons[type] || 'mdi:bell'
}

const getNotificationColor = (type: string) => {
  const colors: Record<string, { bg: string, text: string }> = {
    job: { bg: 'bg-blue-100', text: 'text-blue-600' },
    application: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    message: { bg: 'bg-purple-100', text: 'text-purple-600' },
    system: { bg: 'bg-amber-100', text: 'text-amber-600' },
    company: { bg: 'bg-indigo-100', text: 'text-indigo-600' }
  }
  return colors[type] || { bg: 'bg-gray-100', text: 'text-gray-600' }
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Interview Request': 'bg-green-100 text-green-700',
    'Job Match': 'bg-blue-100 text-blue-700',
    'Recruiter Message': 'bg-purple-100 text-purple-700',
    'Company Update': 'bg-indigo-100 text-indigo-700',
    'Application Status': 'bg-emerald-100 text-emerald-700',
    'Profile Insights': 'bg-amber-100 text-amber-700',
    'Deadline Reminder': 'bg-red-100 text-red-700',
    'Application Declined': 'bg-gray-100 text-gray-700'
  }
  return colors[category] || 'bg-gray-100 text-gray-700'
}
</script>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(6px);
  animation: fadeUp 420ms ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide fade transition for settings panel */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Custom scrollbar for tabs */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #059669;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #047857;
}

/* Loading animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>