<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Notifications</h1>
        <p class="text-gray-600">Stay updated with your job search activity</p>
      </div>

      <!-- Actions Bar -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-center gap-3 flex-wrap">
            <button 
              @click="currentFilter = 'all'"
              :class="[
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                currentFilter === 'all' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              All ({{ notifications.length }})
            </button>
            <button 
              @click="currentFilter = 'unread'"
              :class="[
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2',
                currentFilter === 'unread' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Unread
              <span v-if="unreadCount > 0" class="bg-white text-emerald-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {{ unreadCount }}
              </span>
            </button>
            <button 
              @click="currentFilter = 'applications'"
              :class="[
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                currentFilter === 'applications' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Applications
            </button>
            <button 
              @click="currentFilter = 'interviews'"
              :class="[
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                currentFilter === 'interviews' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              Interviews
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button 
              @click="markAllAsRead"
              class="px-4 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <Icon name="mdi:check-all" class="w-4 h-4" />
              Mark all as read
            </button>
            <button 
              class="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              title="Settings"
            >
              <Icon name="mdi:cog" class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <!-- Notifications List -->
      <div class="space-y-3">
        <!-- Today Section -->
        <div v-if="todayNotifications.length > 0">
          <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Today
          </div>
          <div class="space-y-3">
            <div 
              v-for="notification in todayNotifications" 
              :key="notification.id"
              @click="markAsRead(notification.id)"
              :class="[
                'bg-white rounded-2xl shadow-sm border transition-all duration-300 cursor-pointer hover:shadow-md',
                notification.read ? 'border-gray-100' : 'border-emerald-200 bg-emerald-50/30'
              ]"
            >
              <div class="p-5">
                <div class="flex items-start gap-4">
                  <!-- Icon -->
                  <div 
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                      getNotificationIconClass(notification.type)
                    ]"
                  >
                    <Icon :name="getNotificationIcon(notification.type)" class="w-6 h-6" />
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-4 mb-2">
                      <div class="flex-1">
                        <h3 :class="['font-bold text-gray-900 mb-1', !notification.read && 'text-emerald-900']">
                          {{ notification.title }}
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                          {{ notification.message }}
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-xs text-gray-500 whitespace-nowrap">
                          {{ notification.time }}
                        </span>
                        <div 
                          v-if="!notification.read" 
                          class="w-2 h-2 bg-emerald-600 rounded-full"
                          title="Unread"
                        ></div>
                      </div>
                    </div>

                    <!-- Action Buttons (if applicable) -->
                    <div v-if="notification.actions" class="flex items-center gap-2 mt-3">
                      <button 
                        v-for="action in notification.actions" 
                        :key="action.label"
                        :class="[
                          'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300',
                          action.primary 
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm hover:shadow-md' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        ]"
                      >
                        {{ action.label }}
                      </button>
                    </div>

                    <!-- Tags (if applicable) -->
                    <div v-if="notification.tags" class="flex items-center gap-2 mt-3 flex-wrap">
                      <span 
                        v-for="tag in notification.tags" 
                        :key="tag"
                        class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Earlier Section -->
        <div v-if="earlierNotifications.length > 0" class="mt-8">
          <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Earlier
          </div>
          <div class="space-y-3">
            <div 
              v-for="notification in earlierNotifications" 
              :key="notification.id"
              @click="markAsRead(notification.id)"
              :class="[
                'bg-white rounded-2xl shadow-sm border transition-all duration-300 cursor-pointer hover:shadow-md',
                notification.read ? 'border-gray-100' : 'border-emerald-200 bg-emerald-50/30'
              ]"
            >
              <div class="p-5">
                <div class="flex items-start gap-4">
                  <!-- Icon -->
                  <div 
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                      getNotificationIconClass(notification.type)
                    ]"
                  >
                    <Icon :name="getNotificationIcon(notification.type)" class="w-6 h-6" />
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-4 mb-2">
                      <div class="flex-1">
                        <h3 :class="['font-bold text-gray-900 mb-1', !notification.read && 'text-emerald-900']">
                          {{ notification.title }}
                        </h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                          {{ notification.message }}
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-xs text-gray-500 whitespace-nowrap">
                          {{ notification.time }}
                        </span>
                        <div 
                          v-if="!notification.read" 
                          class="w-2 h-2 bg-emerald-600 rounded-full"
                          title="Unread"
                        ></div>
                      </div>
                    </div>

                    <!-- Tags (if applicable) -->
                    <div v-if="notification.tags" class="flex items-center gap-2 mt-3 flex-wrap">
                      <span 
                        v-for="tag in notification.tags" 
                        :key="tag"
                        class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div 
          v-if="filteredNotifications.length === 0"
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center"
        >
          <div class="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="mdi:bell-outline" class="w-10 h-10 text-gray-400" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">No notifications</h3>
          <p class="text-gray-600 max-w-md mx-auto">
            {{ currentFilter === 'unread' ? 'You\'re all caught up! No unread notifications.' : 'You don\'t have any notifications yet.' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NotificationAction {
  label: string
  primary?: boolean
}

interface Notification {
  id: number
  type: 'application' | 'interview' | 'message' | 'system' | 'reminder'
  title: string
  message: string
  time: string
  read: boolean
  category: 'today' | 'earlier'
  actions?: NotificationAction[]
  tags?: string[]
}

const currentFilter = ref<'all' | 'unread' | 'applications' | 'interviews'>('all')

const notifications = ref<Notification[]>([
  {
    id: 1,
    type: 'interview',
    title: 'Interview Confirmed',
    message: 'Your interview with TechCorp Inc. for Senior Full Stack Developer position has been confirmed for tomorrow at 2:00 PM.',
    time: '2h ago',
    read: false,
    category: 'today',
    actions: [
      { label: 'View Details', primary: true },
      { label: 'Add to Calendar' }
    ],
    tags: ['TechCorp Inc.', 'Interview']
  },
  {
    id: 2,
    type: 'application',
    title: 'Application Under Review',
    message: 'Your application for Frontend Engineer at StartupXYZ is now under review. The hiring team will contact you soon.',
    time: '5h ago',
    read: false,
    category: 'today',
    tags: ['StartupXYZ', 'Application']
  },
  {
    id: 3,
    type: 'message',
    title: 'New Message from Recruiter',
    message: 'Sarah Johnson from Digital Solutions has sent you a message regarding your application.',
    time: '6h ago',
    read: false,
    category: 'today',
    actions: [
      { label: 'Read Message', primary: true }
    ]
  },
  {
    id: 4,
    type: 'application',
    title: 'Application Received',
    message: 'InnovateTech has received your application for Lead Full Stack Engineer position. You\'ll hear back within 5-7 business days.',
    time: 'Yesterday',
    read: true,
    category: 'earlier',
    tags: ['InnovateTech', 'Application']
  },
  {
    id: 5,
    type: 'reminder',
    title: 'Profile Update Reminder',
    message: 'It\'s been a while since you updated your profile. Keep it fresh to attract more opportunities!',
    time: '2 days ago',
    read: true,
    category: 'earlier',
    actions: [
      { label: 'Update Profile', primary: true }
    ]
  },
  {
    id: 6,
    type: 'system',
    title: 'New Job Recommendations',
    message: 'We found 5 new jobs that match your profile and preferences. Check them out!',
    time: '3 days ago',
    read: true,
    category: 'earlier',
    actions: [
      { label: 'View Jobs', primary: true }
    ]
  },
  {
    id: 7,
    type: 'interview',
    title: 'Interview Feedback',
    message: 'CloudSystems has provided feedback on your interview. Login to view the details.',
    time: '4 days ago',
    read: true,
    category: 'earlier',
    tags: ['CloudSystems', 'Feedback']
  },
  {
    id: 8,
    type: 'application',
    title: 'Application Status Update',
    message: 'Your application for React Developer at Digital Solutions has moved to the next stage.',
    time: '5 days ago',
    read: true,
    category: 'earlier',
    tags: ['Digital Solutions', 'Application']
  }
])

const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

const filteredNotifications = computed(() => {
  let filtered = notifications.value

  if (currentFilter.value === 'unread') {
    filtered = filtered.filter(n => !n.read)
  } else if (currentFilter.value === 'applications') {
    filtered = filtered.filter(n => n.type === 'application')
  } else if (currentFilter.value === 'interviews') {
    filtered = filtered.filter(n => n.type === 'interview')
  }

  return filtered
})

const todayNotifications = computed(() => {
  return filteredNotifications.value.filter(n => n.category === 'today')
})

const earlierNotifications = computed(() => {
  return filteredNotifications.value.filter(n => n.category === 'earlier')
})

const getNotificationIcon = (type: string) => {
  const icons: Record<string, string> = {
    application: 'mdi:file-document-check',
    interview: 'mdi:calendar-check',
    message: 'mdi:message-text',
    system: 'mdi:bell-ring',
    reminder: 'mdi:bell-alert'
  }
  return icons[type] || 'mdi:bell'
}

const getNotificationIconClass = (type: string) => {
  const classes: Record<string, string> = {
    application: 'bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600',
    interview: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600',
    message: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600',
    system: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600',
    reminder: 'bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600'
  }
  return classes[type] || 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
}

const markAsRead = (id: number) => {
  const notification = notifications.value.find(n => n.id === id)
  if (notification) {
    notification.read = true
  }
}

const markAllAsRead = () => {
  notifications.value.forEach(n => {
    n.read = true
  })
}

useHead({ 
  title: 'Notifications - FindPoint',
  meta: [
    { name: 'description', content: 'Your notifications on FindPoint' }
  ]
})
</script>

<style scoped>
/* Smooth animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>