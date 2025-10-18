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
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Profile Settings</h1>
        <p class="text-gray-600">Manage your public profile and resume</p>
      </div>

      <!-- Profile Visibility -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 mb-2">Profile Visibility</h2>
            <p class="text-sm text-gray-600">Control who can see your profile</p>
          </div>
          <div class="relative inline-block w-12 h-6">
            <input 
              v-model="profilePublic" 
              type="checkbox" 
              class="sr-only peer"
              id="profile-public"
            />
            <label 
              for="profile-public"
              class="block w-full h-full bg-gray-200 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
            >
              <span 
                :class="[
                  'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                  profilePublic && 'translate-x-6'
                ]"
              ></span>
            </label>
          </div>
        </div>
        <div v-if="profilePublic" class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <p class="text-sm text-emerald-800">
            <Icon name="mdi:eye" class="w-4 h-4 inline mr-1" />
            Your profile is visible to recruiters and employers
          </p>
        </div>
        <div v-else class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
          <p class="text-sm text-gray-700">
            <Icon name="mdi:eye-off" class="w-4 h-4 inline mr-1" />
            Your profile is hidden from public view
          </p>
        </div>
      </div>

      <!-- Resume Management -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Resume Management</h2>
        
        <!-- Current Resume -->
        <div v-if="currentResume" class="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Icon name="mdi:file-document" class="w-6 h-6 text-white" />
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ currentResume.name }}</div>
                <div class="text-sm text-gray-600">{{ currentResume.size }} • Uploaded {{ currentResume.uploadedAt }}</div>
              </div>
            </div>
            <div class="flex gap-2">
              <button class="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-all">
                <Icon name="mdi:download" class="w-5 h-5" />
              </button>
              <button class="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-all">
                <Icon name="mdi:delete" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Upload New Resume -->
        <div class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
          <Icon name="mdi:cloud-upload" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 class="font-semibold text-gray-900 mb-2">Upload New Resume</h3>
          <p class="text-sm text-gray-600 mb-4">Drag and drop or click to browse</p>
          <input type="file" class="hidden" accept=".pdf,.doc,.docx" />
          <button class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all">
            Choose File
          </button>
          <p class="text-xs text-gray-500 mt-3">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
        </div>
      </div>

      <!-- Job Search Status -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Job Search Status</h2>
        <div class="space-y-3">
          <label 
            v-for="status in jobSearchStatuses" 
            :key="status.value"
            class="flex items-start gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all"
            :class="jobSearchStatus === status.value ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'"
          >
            <input 
              v-model="jobSearchStatus" 
              type="radio" 
              :value="status.value"
              class="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />
            <div>
              <div class="font-semibold text-gray-900">{{ status.label }}</div>
              <div class="text-sm text-gray-600">{{ status.description }}</div>
            </div>
          </label>
        </div>
      </div>

      <!-- Profile Completeness -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Profile Completeness</h2>
        
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-gray-700">Profile Strength</span>
            <span class="text-sm font-bold text-emerald-600">{{ profileCompletion }}%</span>
          </div>
          <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
              :style="{ width: profileCompletion + '%' }"
            ></div>
          </div>
        </div>

        <div class="space-y-3">
          <div 
            v-for="item in profileItems" 
            :key="item.id"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
          >
            <div class="flex items-center gap-3">
              <Icon 
                :name="item.completed ? 'mdi:check-circle' : 'mdi:circle-outline'" 
                :class="['w-5 h-5', item.completed ? 'text-emerald-600' : 'text-gray-400']"
              />
              <span :class="['text-sm font-medium', item.completed ? 'text-gray-900' : 'text-gray-600']">
                {{ item.label }}
              </span>
            </div>
            <NuxtLink 
              v-if="!item.completed"
              to="/candidates/profile/edit"
              class="text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Complete
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Social Links</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
            <div class="relative">
              <Icon name="mdi:linkedin" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                v-model="socialLinks.linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
            <div class="relative">
              <Icon name="mdi:github" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                v-model="socialLinks.github"
                type="url"
                placeholder="https://github.com/yourusername"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Portfolio Website</label>
            <div class="relative">
              <Icon name="mdi:web" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                v-model="socialLinks.portfolio"
                type="url"
                placeholder="https://yourportfolio.com"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
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
        <NuxtLink 
          to="/candidates/profile"
          class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const profilePublic = ref(true)
const jobSearchStatus = ref('actively-looking')

const currentResume = ref({
  name: 'Sarah_Johnson_Resume_2025.pdf',
  size: '245 KB',
  uploadedAt: '2 weeks ago'
})

const jobSearchStatuses = [
  {
    value: 'actively-looking',
    label: 'Actively Looking',
    description: 'I am actively searching and applying for jobs'
  },
  {
    value: 'open-to-offers',
    label: 'Open to Offers',
    description: 'I am not actively searching but open to the right opportunity'
  },
  {
    value: 'casually-browsing',
    label: 'Casually Browsing',
    description: 'I am just exploring what\'s out there'
  },
  {
    value: 'not-looking',
    label: 'Not Looking',
    description: 'I am not interested in new opportunities right now'
  }
]

const profileCompletion = ref(75)

const profileItems = ref([
  { id: 1, label: 'Basic information', completed: true },
  { id: 2, label: 'Resume uploaded', completed: true },
  { id: 3, label: 'Work experience added', completed: true },
  { id: 4, label: 'Skills added', completed: false },
  { id: 5, label: 'Certifications added', completed: false },
  { id: 6, label: 'Social links added', completed: true }
])

const socialLinks = ref({
  linkedin: 'https://linkedin.com/in/sarahjohnson',
  github: 'https://github.com/sarahjohnson',
  portfolio: 'https://sarahjohnson.dev'
})

const saveSettings = () => {
  console.log('Profile settings saved')
  // Save logic here
}

useSeoMeta({
  title: 'Profile Settings - FindPoint',
  description: 'Manage your profile settings'
})
</script>
