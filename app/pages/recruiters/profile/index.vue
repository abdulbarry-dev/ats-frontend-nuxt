<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <!-- Profile Header -->
    <div
      class="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 text-white transition-colors duration-300"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          class="flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <!-- Avatar Section -->
          <div class="relative">
            <div
              class="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm border-4 border-white/20 overflow-hidden shadow-2xl"
            >
              <img
                v-if="profile.avatar"
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600"
              >
                <Icon name="mdi:account" class="w-20 h-20 text-white" />
              </div>
            </div>
            <div
              class="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg"
            >
              <Icon name="mdi:check-bold" class="w-5 h-5 text-white" />
            </div>
          </div>

          <!-- Profile Info -->
          <div class="flex-1">
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3"
            >
              <div>
                <h1 class="text-3xl sm:text-4xl font-bold mb-2">
                  {{ profile.name }}
                </h1>
                <p class="text-emerald-100 text-lg">Recruiter at {{ profile.company }}</p>
              </div>
              <NuxtLink
                to="/recruiters/profile/edit"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Icon name="mdi:pencil" class="w-5 h-5" />
                Edit Profile
              </NuxtLink>
            </div>

            <!-- Quick Stats -->
            <div class="flex flex-wrap gap-4 text-sm">
              <div
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:map-marker" class="w-4 h-4" />
                <span>{{ profile.location }}</span>
              </div>
              <div
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:briefcase" class="w-4 h-4" />
                <span>{{ profile.yearsExperience }} years recruiting</span>
              </div>
              <div
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:email" class="w-4 h-4" />
                <span>{{ profile.email }}</span>
              </div>
              <div
                v-if="profile.phone"
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:phone" class="w-4 h-4" />
                <span>{{ profile.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column - Main Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- About Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:account-details"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ profile.bio }}
            </p>
          </div>

          <!-- Company Information -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
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
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {{ profile.companyDescription }}
            </p>
            <div v-if="profile.companyWebsite" class="mt-4">
              <a 
                :href="profile.companyWebsite" 
                target="_blank" 
                class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
              >
                <Icon name="mdi:web" class="w-5 h-5" />
                Visit Company Website
                <Icon name="mdi:open-in-new" class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Industries Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:domain"
                  class="w-6 h-6 text-purple-600 dark:text-purple-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Industries
              </h2>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="industry in profile.industries"
                :key="industry"
                class="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-900/20 text-purple-700 dark:text-purple-400 rounded-lg font-medium text-sm hover:from-purple-100 hover:to-purple-200/50 dark:hover:from-purple-900/40 dark:hover:to-purple-900/30 transition-all duration-300 border border-purple-200 dark:border-purple-800"
              >
                {{ industry }}
              </span>
            </div>
          </div>

          <!-- Specializations Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:star-circle"
                  class="w-6 h-6 text-orange-600 dark:text-orange-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Specializations
              </h2>
            </div>
            <div class="space-y-3">
              <div
                v-for="specialization in profile.specializations"
                :key="specialization.title"
                class="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-slate-700/50 dark:to-slate-700/30 rounded-xl border border-gray-100 dark:border-slate-600"
              >
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">
                  {{ specialization.title }}
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ specialization.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="space-y-6">
          <!-- Skills Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:star"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Skills
              </h2>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in profile.skills"
                :key="skill"
                class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-900/30 dark:to-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg font-medium text-sm hover:from-emerald-100 hover:to-emerald-200/50 dark:hover:from-emerald-900/40 dark:hover:to-emerald-900/30 transition-all duration-300 border border-emerald-200 dark:border-emerald-800"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Languages Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:translate"
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Languages
              </h2>
            </div>
            <div class="space-y-3">
              <div
                v-for="lang in profile.languages"
                :key="lang.name"
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <span class="font-medium text-gray-700 dark:text-gray-300">{{
                  lang.name
                }}</span>
                <span
                  class="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
                >
                  {{ lang.proficiency }}
                </span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:link-variant"
                  class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Social Links
              </h2>
            </div>
            <div class="space-y-3">
              <a
                v-if="profile.socialLinks.linkedin"
                :href="profile.socialLinks.linkedin"
                target="_blank"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-900/20 rounded-lg hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-blue-900/40 dark:hover:to-blue-900/30 transition-all duration-300 group"
              >
                <Icon
                  name="mdi:linkedin"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
                <span
                  class="text-sm font-medium text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-200"
                  >LinkedIn</span
                >
                <Icon
                  name="mdi:open-in-new"
                  class="w-4 h-4 text-blue-600 dark:text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                v-if="profile.socialLinks.twitter"
                :href="profile.socialLinks.twitter"
                target="_blank"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-sky-50 to-sky-100/50 dark:from-sky-900/30 dark:to-sky-900/20 rounded-lg hover:from-sky-100 hover:to-sky-200/50 dark:hover:from-sky-900/40 dark:hover:to-sky-900/30 transition-all duration-300 group"
              >
                <Icon
                  name="mdi:twitter"
                  class="w-5 h-5 text-sky-600 dark:text-sky-400"
                />
                <span
                  class="text-sm font-medium text-sky-900 dark:text-sky-300 group-hover:text-sky-700 dark:group-hover:text-sky-200"
                  >Twitter</span
                >
                <Icon
                  name="mdi:open-in-new"
                  class="w-4 h-4 text-sky-600 dark:text-sky-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          <!-- Recruitment Stats Section -->
          <div
            class="bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 rounded-2xl shadow-lg p-6 text-white transition-colors duration-300"
          >
            <h3 class="font-bold text-lg mb-4">Recruitment Stats</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span>Positions Filled</span>
                <span class="font-semibold">{{ stats.positionsFilled }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span>Active Searches</span>
                <span class="font-semibold">{{ stats.activeSearches }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span>Success Rate</span>
                <span class="font-semibold">{{ stats.successRate }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Recruiter profile data
const profile = ref({
  name: 'Jane Smith',
  title: 'Senior Technical Recruiter',
  email: 'jane.smith@acmecorp.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  company: 'Acme Corp',
  yearsExperience: 7,
  bio: 'Passionate technical recruiter with 7+ years of experience connecting top engineering talent with innovative companies. Specialized in helping tech startups build high-performing engineering teams that drive growth and innovation.',
  companyDescription: 'Acme Corp is a leading recruitment agency specializing in connecting top talent with industry leaders across technology, finance, and healthcare sectors.',
  companyWebsite: 'https://www.acmecorp.com',
  industries: ['Tech', 'Finance', 'Healthcare', 'E-commerce', 'SaaS'],
  specializations: [
    { 
      title: 'Technical Recruitment', 
      description: 'Specialized in recruiting software engineers, data scientists, and technical leadership roles.' 
    },
    { 
      title: 'Executive Search', 
      description: 'Experience in placing C-level executives and VPs in fast-growing startups and established enterprises.' 
    },
    { 
      title: 'Remote Team Building', 
      description: 'Expert in building distributed engineering teams across multiple time zones and cultures.' 
    }
  ],
  skills: ['Technical Screening', 'Talent Acquisition', 'Networking', 'Salary Negotiation', 'Candidate Relationship Management'],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Fluent' },
    { name: 'French', proficiency: 'Intermediate' }
  ],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith'
  },
  stats: {
    placements: 145,
    activeJobs: 12,
    successRate: 92
  }
})

const stats = ref({
  positionsFilled: 0,
  activeSearches: 0,
  successRate: 0,
})

const fetchRecruiterStats = async () => {
  try {
    const completedPlacements = await fetchCompletedPlacements()
    stats.value.positionsFilled = completedPlacements.length

    const activeJobs = await fetchActiveJobs()
    stats.value.activeSearches = activeJobs.length

    const totalAttemptedPlacements = await fetchTotalAttemptedPlacements()
    stats.value.successRate = totalAttemptedPlacements > 0
      ? Math.round((completedPlacements.length / totalAttemptedPlacements) * 100)
      : 0
  } catch (error) {
    console.error('Failed to fetch recruiter stats:', error)
  }
}

onMounted(fetchRecruiterStats)

// Simulated API calls
const fetchCompletedPlacements = async () => {
  await new Promise(resolve => setTimeout(resolve, 100))
  return Array.from({ length: 145 }, (_, i) => ({ id: i, title: `Job Placement ${i}` }))
}

const fetchActiveJobs = async () => {
  await new Promise(resolve => setTimeout(resolve, 100))
  return Array.from({ length: 12 }, (_, i) => ({ id: i, title: `Active Job ${i}` }))
}

const fetchTotalAttemptedPlacements = async () => {
  await new Promise(resolve => setTimeout(resolve, 100))
  return 158
}

useSeoMeta({
  title: 'Recruiter Profile - FindPoint',
  description: 'View and manage your recruiter profile on FindPoint',
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
