<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <!-- Back Button & Header -->
      <NuxtLink 
        to="/candidates/settings"
        class="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
      >
        <Icon name="mdi:arrow-left" class="w-5 h-5" />
        Back to Settings
      </NuxtLink>

      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Notification Settings</h1>
        <p class="text-gray-600">Choose how you want to be notified about updates</p>
      </div>

      <!-- Email Notifications -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Email Notifications</h2>
        <div class="space-y-4">
          <div 
            v-for="notification in emailNotifications" 
            :key="notification.id"
            class="flex items-start justify-between py-4 border-b border-gray-100 last:border-0"
          >
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 mb-1">{{ notification.title }}</h3>
              <p class="text-sm text-gray-600">{{ notification.description }}</p>
            </div>
            <div class="relative inline-block w-12 h-6 ml-4">
              <input 
                v-model="notification.enabled" 
                type="checkbox" 
                class="sr-only peer"
                :id="`email-${notification.id}`"
              />
              <label 
                :for="`email-${notification.id}`"
                class="block w-full h-full bg-gray-200 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
              >
                <span 
                  :class="[
                    'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                    notification.enabled && 'translate-x-6'
                  ]"
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Push Notifications -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Push Notifications</h2>
        <div class="space-y-4">
          <div 
            v-for="notification in pushNotifications" 
            :key="notification.id"
            class="flex items-start justify-between py-4 border-b border-gray-100 last:border-0"
          >
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 mb-1">{{ notification.title }}</h3>
              <p class="text-sm text-gray-600">{{ notification.description }}</p>
            </div>
            <div class="relative inline-block w-12 h-6 ml-4">
              <input 
                v-model="notification.enabled" 
                type="checkbox" 
                class="sr-only peer"
                :id="`push-${notification.id}`"
              />
              <label 
                :for="`push-${notification.id}`"
                class="block w-full h-full bg-gray-200 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
              >
                <span 
                  :class="[
                    'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                    notification.enabled && 'translate-x-6'
                  ]"
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Notification Frequency -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Notification Frequency</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">Email Digest</label>
            <div class="space-y-2">
              <label 
                v-for="option in digestOptions" 
                :key="option.value"
                class="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-all"
              >
                <input 
                  v-model="emailDigest" 
                  type="radio" 
                  :value="option.value"
                  class="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <div class="font-semibold text-gray-900">{{ option.label }}</div>
                  <div class="text-sm text-gray-600">{{ option.description }}</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Do Not Disturb -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 mb-2">Do Not Disturb</h2>
            <p class="text-sm text-gray-600">Pause all notifications during specific hours</p>
          </div>
          <div class="relative inline-block w-12 h-6">
            <input 
              v-model="doNotDisturb.enabled" 
              type="checkbox" 
              class="sr-only peer"
              id="dnd-toggle"
            />
            <label 
              for="dnd-toggle"
              class="block w-full h-full bg-gray-200 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
            >
              <span 
                :class="[
                  'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                  doNotDisturb.enabled && 'translate-x-6'
                ]"
              ></span>
            </label>
          </div>
        </div>
        
        <div v-if="doNotDisturb.enabled" class="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
            <input 
              v-model="doNotDisturb.startTime"
              type="time"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">End Time</label>
            <input 
              v-model="doNotDisturb.endTime"
              type="time"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex gap-3">
        <button 
          @click="saveSettings"
          class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Save Changes
        </button>
        <button 
          class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Reset to Default
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emailNotifications = ref([
  {
    id: 'new-jobs',
    title: 'New Job Matches',
    description: 'Get notified when new jobs match your preferences',
    enabled: true
  },
  {
    id: 'application-updates',
    title: 'Application Updates',
    description: 'Updates on your application status',
    enabled: true
  },
  {
    id: 'interview-reminders',
    title: 'Interview Reminders',
    description: 'Reminders about upcoming interviews',
    enabled: true
  },
  {
    id: 'messages',
    title: 'Messages from Recruiters',
    description: 'When a recruiter sends you a message',
    enabled: true
  },
  {
    id: 'profile-views',
    title: 'Profile Views',
    description: 'When employers view your profile',
    enabled: false
  },
  {
    id: 'weekly-summary',
    title: 'Weekly Summary',
    description: 'Weekly summary of your job search activity',
    enabled: true
  }
])

const pushNotifications = ref([
  {
    id: 'urgent-updates',
    title: 'Urgent Updates',
    description: 'Critical updates about your applications',
    enabled: true
  },
  {
    id: 'interview-alerts',
    title: 'Interview Alerts',
    description: 'Immediate alerts for interview invitations',
    enabled: true
  },
  {
    id: 'new-messages',
    title: 'New Messages',
    description: 'Instant notifications for new messages',
    enabled: false
  }
])

const emailDigest = ref('daily')

const digestOptions = [
  {
    value: 'realtime',
    label: 'Real-time',
    description: 'Get notified immediately'
  },
  {
    value: 'daily',
    label: 'Daily Digest',
    description: 'Once per day summary'
  },
  {
    value: 'weekly',
    label: 'Weekly Digest',
    description: 'Once per week summary'
  },
  {
    value: 'never',
    label: 'Never',
    description: 'No email notifications'
  }
]

const doNotDisturb = ref({
  enabled: false,
  startTime: '22:00',
  endTime: '08:00'
})

const saveSettings = () => {
  console.log('Settings saved')
  // Save logic here
}

useSeoMeta({
  title: 'Notification Settings - FindPoint',
  description: 'Manage your notification preferences'
})
</script>
