<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Browse Jobs</h1>
        <p class="text-gray-600">Discover your next career opportunity</p>
      </div>

      <!-- Search Bar with Filters -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6 fade-in-up" style="animation-delay: 100ms;">
        <div class="grid lg:grid-cols-12 gap-4">
          <!-- Search Input -->
          <div class="lg:col-span-5 relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Job title, keywords, or company..." 
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
            >
          </div>

          <!-- Location Input -->
          <div class="lg:col-span-3 relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:map-marker" class="w-5 h-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              v-model="locationQuery"
              placeholder="City or remote" 
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
            >
          </div>

          <!-- Search Button -->
          <div class="lg:col-span-2">
            <button class="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Icon name="mdi:magnify" class="w-5 h-5" />
              Search
            </button>
          </div>

          <!-- Advanced Filters Toggle -->
          <div class="lg:col-span-2">
            <button 
              @click="showFilters = !showFilters"
              class="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="mdi:filter-variant" class="w-5 h-5" />
              Filters
              <Icon :name="showFilters ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Advanced Filters Panel -->
        <Transition name="slide-fade">
          <div v-if="showFilters" class="mt-6 pt-6 border-t border-gray-200">
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <!-- Job Type -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Job Type</label>
                <select v-model="filters.jobType" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none cursor-pointer">
                  <option value="">All Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Temporary</option>
                </select>
              </div>

              <!-- Experience Level -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
                <select v-model="filters.experience" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none cursor-pointer">
                  <option value="">All Levels</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                  <option>Lead</option>
                  <option>Manager</option>
                  <option>Executive</option>
                </select>
              </div>

              <!-- Salary Range -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Salary Range</label>
                <select v-model="filters.salary" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none cursor-pointer">
                  <option value="">Any Salary</option>
                  <option>$0 - $50k</option>
                  <option>$50k - $80k</option>
                  <option>$80k - $120k</option>
                  <option>$120k - $180k</option>
                  <option>$180k+</option>
                </select>
              </div>

              <!-- Remote -->
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Work Location</label>
                <select v-model="filters.workLocation" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none cursor-pointer">
                  <option value="">All</option>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <!-- Active Filters & Clear -->
            <div class="mt-4 flex flex-wrap items-center gap-3">
              <span class="text-sm font-medium text-gray-600">Active Filters:</span>
              <button 
                v-if="hasActiveFilters"
                @click="clearFilters"
                class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center gap-1"
              >
                <Icon name="mdi:close-circle" class="w-4 h-4" />
                Clear All
              </button>
              <span v-else class="text-sm text-gray-500 italic">No filters applied</span>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Results Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 fade-in-up" style="animation-delay: 200ms;">
        <div>
          <p class="text-gray-900 font-semibold">
            <span class="text-emerald-600">{{ filteredJobs.length }}</span> jobs found
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
          <select v-model="sortBy" class="px-4 py-2 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none cursor-pointer text-sm">
            <option value="newest">Newest First</option>
            <option value="salary-high">Highest Salary</option>
            <option value="salary-low">Lowest Salary</option>
            <option value="company">Company Name</option>
          </select>

          <!-- View Toggle -->
          <div class="flex gap-1 bg-gray-100 p-1 rounded-lg">
            <button 
              @click="viewMode = 'grid'"
              :class="viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'"
              class="px-3 py-2 rounded-md transition-all"
            >
              <Icon name="mdi:view-grid" class="w-5 h-5" />
            </button>
            <button 
              @click="viewMode = 'list'"
              :class="viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'"
              class="px-3 py-2 rounded-md transition-all"
            >
              <Icon name="mdi:view-list" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Job Listings Grid View -->
      <div v-if="viewMode === 'grid'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(job, index) in paginatedJobs" 
          :key="index"
          class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in-up cursor-pointer"
          :style="`animation-delay: ${250 + index * 50}ms;`"
        >
          <!-- Job Header -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                {{ job.companyInitial }}
              </div>
              <div class="flex flex-col items-end gap-2">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-semibold"
                  :class="getJobTypeClass(job.type)"
                >
                  {{ job.type }}
                </span>
                <button class="w-8 h-8 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-colors group/save">
                  <Icon name="mdi:heart-outline" class="w-5 h-5 text-gray-600 group-hover/save:text-emerald-600 transition-colors" />
                </button>
              </div>
            </div>

            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
              {{ job.title }}
            </h3>
            
            <p class="text-sm text-gray-600 mb-4">{{ job.company }}</p>

            <!-- Job Details -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="mdi:map-marker" class="w-4 h-4 text-emerald-600" />
                <span>{{ job.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="mdi:currency-usd" class="w-4 h-4 text-emerald-600" />
                <span>{{ job.salary }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="mdi:briefcase-outline" class="w-4 h-4 text-emerald-600" />
                <span>{{ job.experience }}</span>
              </div>
            </div>

            <!-- Skills -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="(skill, idx) in job.skills.slice(0, 3)" 
                :key="idx"
                class="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium"
              >
                {{ skill }}
              </span>
              <span 
                v-if="job.skills.length > 3"
                class="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
              >
                +{{ job.skills.length - 3 }}
              </span>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-200">
              <span class="text-xs text-gray-500 flex items-center gap-1">
                <Icon name="mdi:clock-outline" class="w-3.5 h-3.5" />
                {{ job.postedDate }}
              </span>
              <NuxtLink :to="`/jobs/${job.id}`" class="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1">
                View Details
                <Icon name="mdi:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Listings List View -->
      <div v-else class="space-y-4">
        <div 
          v-for="(job, index) in paginatedJobs" 
          :key="index"
          class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in-up cursor-pointer"
          :style="`animation-delay: ${250 + index * 30}ms;`"
        >
          <div class="p-6">
            <div class="flex flex-col lg:flex-row lg:items-center gap-4">
              <!-- Logo -->
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {{ job.companyInitial }}
              </div>

              <!-- Job Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2 mb-2">
                  <div class="flex-1 min-w-0">
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                      {{ job.title }}
                    </h3>
                    <p class="text-sm text-gray-600 mb-2">{{ job.company }}</p>
                  </div>
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0"
                    :class="getJobTypeClass(job.type)"
                  >
                    {{ job.type }}
                  </span>
                </div>

                <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <div class="flex items-center gap-1">
                    <Icon name="mdi:map-marker" class="w-4 h-4 text-emerald-600" />
                    <span>{{ job.location }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon name="mdi:currency-usd" class="w-4 h-4 text-emerald-600" />
                    <span>{{ job.salary }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon name="mdi:briefcase-outline" class="w-4 h-4 text-emerald-600" />
                    <span>{{ job.experience }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon name="mdi:clock-outline" class="w-4 h-4 text-emerald-600" />
                    <span>{{ job.postedDate }}</span>
                  </div>
                </div>

                <!-- Skills -->
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(skill, idx) in job.skills" 
                    :key="idx"
                    class="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-medium"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex lg:flex-col gap-2 lg:items-end">
                <button class="flex-1 lg:flex-initial px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  <Icon name="mdi:arrow-right" class="w-4 h-4" />
                  Apply Now
                </button>
                <button class="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                  <Icon name="mdi:heart-outline" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredJobs.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center fade-in-up">
        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="mdi:briefcase-search" class="w-10 h-10 text-gray-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">No jobs found</h3>
        <p class="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
        <button 
          @click="clearFilters"
          class="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          Clear Filters
        </button>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-8 flex justify-center fade-in-up">
        <vue-awesome-paginate
          :total-items="filteredJobs.length"
          :items-per-page="itemsPerPage"
          :max-pages-shown="5"
          v-model="currentPage"
          :on-click="onPageChange"
          :show-breakpoint-buttons="false"
          :show-ending-buttons="true"
        >
          <template #prev-button>
            <span class="flex items-center gap-1">
              <Icon name="mdi:chevron-left" class="w-5 h-5" />
            </span>
          </template>
          <template #next-button>
            <span class="flex items-center gap-1">
              <Icon name="mdi:chevron-right" class="w-5 h-5" />
            </span>
          </template>
        </vue-awesome-paginate>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Browse Jobs - FindPoint',
  description: 'Discover your next career opportunity from thousands of job listings'
})

// Pagination state
const currentPage = ref(1)
const itemsPerPage = ref(9)

// Search & Filter State
const searchQuery = ref('')
const locationQuery = ref('')
const showFilters = ref(false)
const sortBy = ref('newest')
const viewMode = ref('grid')

const filters = ref({
  jobType: '',
  experience: '',
  salary: '',
  workLocation: ''
})

// Sample Job Data
const jobs = ref([
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    companyInitial: 'T',
    location: 'San Francisco, CA',
    salary: '$120k - $180k',
    type: 'Full-time',
    experience: '5+ years',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'],
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'DesignHub',
    companyInitial: 'D',
    location: 'Remote',
    salary: '$90k - $130k',
    type: 'Full-time',
    experience: '3+ years',
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
    postedDate: '1 day ago'
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataFlow Analytics',
    companyInitial: 'D',
    location: 'New York, NY',
    salary: '$100k - $150k',
    type: 'Full-time',
    experience: '4+ years',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Statistics'],
    postedDate: '3 days ago'
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'WebSolutions',
    companyInitial: 'W',
    location: 'Austin, TX',
    salary: '$80k - $120k',
    type: 'Contract',
    experience: '2+ years',
    skills: ['Vue.js', 'JavaScript', 'CSS', 'HTML', 'Webpack'],
    postedDate: '5 days ago'
  },
  {
    id: 5,
    title: 'Marketing Manager',
    company: 'BrandBoost',
    companyInitial: 'B',
    location: 'Boston, MA',
    salary: '$70k - $100k',
    type: 'Full-time',
    experience: '5+ years',
    skills: ['SEO', 'Content Strategy', 'Analytics', 'Social Media', 'PPC'],
    postedDate: '1 week ago'
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    companyInitial: 'C',
    location: 'Seattle, WA',
    salary: '$110k - $160k',
    type: 'Full-time',
    experience: '4+ years',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    postedDate: '4 days ago'
  },
  {
    id: 7,
    title: 'UX Researcher',
    company: 'UserFirst Design',
    companyInitial: 'U',
    location: 'Remote',
    salary: '$85k - $125k',
    type: 'Full-time',
    experience: '3+ years',
    skills: ['User Research', 'Usability Testing', 'Data Analysis', 'Interviews'],
    postedDate: '2 days ago'
  },
  {
    id: 8,
    title: 'Backend Engineer',
    company: 'ServerSide Inc.',
    companyInitial: 'S',
    location: 'Denver, CO',
    salary: '$95k - $140k',
    type: 'Full-time',
    experience: '4+ years',
    skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Redis'],
    postedDate: '6 days ago'
  },
  {
    id: 9,
    title: 'Product Manager',
    company: 'InnovateCo',
    companyInitial: 'I',
    location: 'Los Angeles, CA',
    salary: '$100k - $150k',
    type: 'Full-time',
    experience: '5+ years',
    skills: ['Agile', 'Product Strategy', 'Roadmapping', 'Analytics', 'Leadership'],
    postedDate: '3 days ago'
  }
])

// Computed
const filteredJobs = computed(() => {
  let result = [...jobs.value]
  
  // Apply search
  if (searchQuery.value) {
    result = result.filter(job => 
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    job.skills.some((skill: string) => skill.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }
  
  // Apply location filter
  if (locationQuery.value) {
    result = result.filter(job => 
      job.location.toLowerCase().includes(locationQuery.value.toLowerCase())
    )
  }
  
  // Apply filters
  if (filters.value.jobType) {
    result = result.filter(job => job.type === filters.value.jobType)
  }
  
  // Apply sorting
  if (sortBy.value === 'newest') {
    // Already sorted by newest
  } else if (sortBy.value === 'company') {
    result.sort((a, b) => a.company.localeCompare(b.company))
  }
  
  return result
})

const hasActiveFilters = computed(() => {
  return filters.value.jobType || filters.value.experience || 
         filters.value.salary || filters.value.workLocation ||
         searchQuery.value || locationQuery.value
})

// Pagination computed
const totalPages = computed(() => Math.ceil(filteredJobs.value.length / itemsPerPage.value))

const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredJobs.value.slice(start, end)
})

// Methods
const onPageChange = (page: number) => {
  currentPage.value = page
  // Scroll to top of results
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const clearFilters = () => {
  searchQuery.value = ''
  locationQuery.value = ''
  filters.value = {
    jobType: '',
    experience: '',
    salary: '',
    workLocation: ''
  }
  currentPage.value = 1
}

const getJobTypeClass = (type: string) => {
  const classes = {
    'Full-time': 'bg-emerald-100 text-emerald-700',
    'Part-time': 'bg-blue-100 text-blue-700',
    'Contract': 'bg-orange-100 text-orange-700',
    'Internship': 'bg-purple-100 text-purple-700',
    'Temporary': 'bg-gray-100 text-gray-700'
  }
  return classes[type as keyof typeof classes] || 'bg-gray-100 text-gray-700'
}

// Watch for filter changes and reset to page 1
watch([searchQuery, locationQuery, filters, sortBy], () => {
  currentPage.value = 1
}, { deep: true })

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.fade-in-up.is-visible {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Slide Fade Transition */
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

/* Line clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom pagination styles */
:deep(.pagination-container) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

:deep(.paginate-buttons) {
  min-width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #374151;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.paginate-buttons:hover:not(.active-page)) {
  background-color: #f3f4f6;
  border-color: #10b981;
}

:deep(.active-page) {
  background-color: #10b981;
  border-color: #10b981;
  color: white;
}

:deep(.back-button),
:deep(.next-button) {
  min-width: 2.5rem;
}

:deep(.back-button[disabled]),
:deep(.next-button[disabled]) {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
