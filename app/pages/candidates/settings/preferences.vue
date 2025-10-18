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
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Job Preferences</h1>
        <p class="text-gray-600">Set your job search preferences to get better matches</p>
      </div>

      <!-- Job Type -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Job Type</h2>
        <div class="grid sm:grid-cols-2 gap-3">
          <label 
            v-for="type in jobTypes" 
            :key="type"
            class="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all"
            :class="selectedJobTypes.includes(type) ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'"
          >
            <input 
              v-model="selectedJobTypes" 
              type="checkbox" 
              :value="type"
              class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
            />
            <span class="font-semibold text-gray-900">{{ type }}</span>
          </label>
        </div>
      </div>

      <!-- Work Location -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Work Location</h2>
        <div class="space-y-3">
          <label 
            v-for="location in workLocations" 
            :key="location.value"
            class="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all"
            :class="workLocation === location.value ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'"
          >
            <input 
              v-model="workLocation" 
              type="radio" 
              :value="location.value"
              class="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
            />
            <div class="flex-1">
              <div class="font-semibold text-gray-900">{{ location.label }}</div>
              <div class="text-sm text-gray-600">{{ location.description }}</div>
            </div>
          </label>
        </div>
      </div>

      <!-- Preferred Locations -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Preferred Locations</h2>
        <div class="space-y-4">
          <div 
            v-for="(location, index) in preferredLocations" 
            :key="index"
            class="flex items-center gap-3"
          >
            <input 
              v-model="preferredLocations[index]"
              type="text"
              placeholder="e.g., San Francisco, CA"
              class="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              @click="removeLocation(index)"
              class="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              <Icon name="mdi:close" class="w-5 h-5" />
            </button>
          </div>
          <button 
            @click="addLocation"
            class="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-emerald-500 hover:text-emerald-600 transition-all font-semibold"
          >
            <Icon name="mdi:plus" class="w-5 h-5 inline mr-2" />
            Add Location
          </button>
        </div>
      </div>

      <!-- Salary Expectations -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Salary Expectations</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Minimum Salary</label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input 
                v-model="salary.min"
                type="number"
                placeholder="50,000"
                class="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Maximum Salary</label>
            <div class="relative">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input 
                v-model="salary.max"
                type="number"
                placeholder="150,000"
                class="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Currency</label>
          <select 
            v-model="salary.currency"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="CAD">CAD - Canadian Dollar</option>
          </select>
        </div>
      </div>

      <!-- Industries -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Preferred Industries</h2>
        <div class="grid sm:grid-cols-2 gap-3">
          <label 
            v-for="industry in industries" 
            :key="industry"
            class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all hover:bg-gray-50"
            :class="selectedIndustries.includes(industry) ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200'"
          >
            <input 
              v-model="selectedIndustries" 
              type="checkbox" 
              :value="industry"
              class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
            />
            <span class="text-gray-900 text-sm">{{ industry }}</span>
          </label>
        </div>
      </div>

      <!-- Company Size -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-6">Preferred Company Size</h2>
        <div class="grid sm:grid-cols-2 gap-3">
          <label 
            v-for="size in companySizes" 
            :key="size.value"
            class="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all"
            :class="selectedCompanySizes.includes(size.value) ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'"
          >
            <input 
              v-model="selectedCompanySizes" 
              type="checkbox" 
              :value="size.value"
              class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
            />
            <div>
              <div class="font-semibold text-gray-900">{{ size.label }}</div>
              <div class="text-xs text-gray-600">{{ size.employees }}</div>
            </div>
          </label>
        </div>
      </div>

      <!-- Job Alert Preferences -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 mb-2">Job Alerts</h2>
            <p class="text-sm text-gray-600">Get notified about jobs matching your preferences</p>
          </div>
          <div class="relative inline-block w-12 h-6">
            <input 
              v-model="jobAlertsEnabled" 
              type="checkbox" 
              class="sr-only peer"
              id="job-alerts"
            />
            <label 
              for="job-alerts"
              class="block w-full h-full bg-gray-200 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
            >
              <span 
                :class="[
                  'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                  jobAlertsEnabled && 'translate-x-6'
                ]"
              ></span>
            </label>
          </div>
        </div>
        <div v-if="jobAlertsEnabled">
          <label class="block text-sm font-medium text-gray-700 mb-3">Alert Frequency</label>
          <select 
            v-model="alertFrequency"
            class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="immediate">Immediately</option>
            <option value="daily">Daily Digest</option>
            <option value="weekly">Weekly Digest</option>
          </select>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex gap-3">
        <button 
          @click="savePreferences"
          class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Save Preferences
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
const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship', 'Temporary']
const selectedJobTypes = ref(['Full-time', 'Contract'])

const workLocation = ref('hybrid')
const workLocations = [
  {
    value: 'remote',
    label: 'Remote',
    description: 'Work from anywhere'
  },
  {
    value: 'onsite',
    label: 'On-site',
    description: 'Work from office'
  },
  {
    value: 'hybrid',
    label: 'Hybrid',
    description: 'Mix of remote and on-site'
  }
]

const preferredLocations = ref(['San Francisco, CA', 'New York, NY'])

const addLocation = () => {
  preferredLocations.value.push('')
}

const removeLocation = (index: number) => {
  preferredLocations.value.splice(index, 1)
}

const salary = ref({
  min: 100000,
  max: 150000,
  currency: 'USD'
})

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'E-commerce',
  'Marketing',
  'Consulting',
  'Media & Entertainment',
  'Real Estate',
  'Manufacturing'
]
const selectedIndustries = ref(['Technology', 'Finance'])

const companySizes = [
  { value: 'startup', label: 'Startup', employees: '1-50 employees' },
  { value: 'small', label: 'Small', employees: '51-200 employees' },
  { value: 'medium', label: 'Medium', employees: '201-1000 employees' },
  { value: 'large', label: 'Large', employees: '1000+ employees' }
]
const selectedCompanySizes = ref(['startup', 'small', 'medium'])

const jobAlertsEnabled = ref(true)
const alertFrequency = ref('daily')

const savePreferences = () => {
  console.log('Preferences saved')
  // Save logic here
}

useSeoMeta({
  title: 'Job Preferences - FindPoint',
  description: 'Set your job search preferences'
})
</script>
