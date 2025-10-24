<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-8 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <NuxtLink
            to="/recruiters/profile"
            class="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Icon
              name="mdi:arrow-left"
              class="w-6 h-6 text-gray-600 dark:text-gray-400"
            />
          </NuxtLink>
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
              Edit Recruiter Profile
            </h1>
            <p class="text-gray-600 dark:text-gray-400">
              Update your professional information
            </p>
          </div>
        </div>
      </div>

      <form @submit.prevent="saveProfile" class="max-w-4xl space-y-8">
        <!-- Personal Information Section -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:account"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Personal Information
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Full Name -->
            <div>
              <label
                for="name"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Full Name *</label
              >
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>

            <!-- Job Title -->
            <div>
              <label
                for="jobTitle"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Job Title *</label
              >
              <input
                id="jobTitle"
                v-model="formData.jobTitle"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="e.g., Senior Technical Recruiter"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Email *</label
              >
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Phone</label
              >
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        </div>

        <!-- Company Information Section -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:office-building"
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Company Information
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Company Name -->
            <div>
              <label
                for="companyName"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Company Name *</label
              >
              <input
                id="companyName"
                v-model="formData.companyName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                placeholder="Acme Corp"
              />
            </div>

            <!-- Company Website -->
            <div>
              <label
                for="companyWebsite"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Company Website</label
              >
              <input
                id="companyWebsite"
                v-model="formData.companyWebsite"
                type="url"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <!-- Company Description -->
          <div class="mt-6">
            <label
              for="companyDescription"
              class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >Company Description</label
            >
            <textarea
              id="companyDescription"
              v-model="formData.companyDescription"
              rows="4"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
              placeholder="Describe your company and its mission"
            ></textarea>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex justify-end space-x-4">
          <button
            type="button"
            @click="cancelEdit"
            class="px-8 py-3 bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="mdi:close" class="w-5 h-5" />
            Cancel
          </button>
          <button
            type="submit"
            class="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Icon name="mdi:content-save" class="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

useSeoMeta({
  title: 'Edit Recruiter Profile | ATS',
  description: 'Update your recruiter profile information and preferences',
})

const router = useRouter()
const formData = ref({
  name: '',
  jobTitle: '',
  email: '',
  phone: '',
  companyName: '',
  companyWebsite: '',
  companyDescription: '',
})

const saveProfile = async () => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('Profile saved:', formData.value)
    alert('Profile updated successfully!')
    router.push('/recruiters/profile')
  } catch (error) {
    console.error('Failed to save profile:', error)
  }
}

const cancelEdit = () => {
  if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
    router.push('/recruiters/profile')
  }
}
</script>

<style scoped>
.container {
  max-width: 48rem;
}
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
