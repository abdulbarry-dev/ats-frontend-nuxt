<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header Section -->
      <div class="mb-8 fade-in-up">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4"
        >
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Manage Jobs
            </h1>
            <p class="text-gray-600">Track and manage all your job postings</p>
          </div>
          <NuxtLink
            to="/jobs/post"
            class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Icon name="mdi:plus-circle" class="w-5 h-5 mr-2" />
            Post New Job
          </NuxtLink>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow fade-in-up"
            style="animation-delay: 100ms"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 mb-1">Total Jobs</p>
                <p class="text-2xl font-bold text-gray-900">24</p>
              </div>
              <div
                class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
              >
                <Icon name="mdi:briefcase" class="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow fade-in-up"
            style="animation-delay: 150ms"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 mb-1">Active</p>
                <p class="text-2xl font-bold text-emerald-600">18</p>
              </div>
              <div
                class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
              >
                <Icon name="mdi:check-circle" class="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow fade-in-up"
            style="animation-delay: 200ms"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 mb-1">Draft</p>
                <p class="text-2xl font-bold text-orange-600">4</p>
              </div>
              <div
                class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:file-document-edit"
                  class="w-6 h-6 text-orange-600"
                />
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow fade-in-up"
            style="animation-delay: 250ms"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 mb-1">Applications</p>
                <p class="text-2xl font-bold text-blue-600">156</p>
              </div>
              <div
                class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:account-multiple"
                  class="w-6 h-6 text-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter and Search -->
      <div class="mb-6 fade-in-up" style="animation-delay: 300ms">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Search -->
            <div class="flex-1 relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs..."
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
              />
            </div>

            <!-- Filter by Status -->
            <select
              class="px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white cursor-pointer"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="closed">Closed</option>
            </select>

            <!-- Sort -->
            <select
              class="px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="most-applicants">Most Applicants</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Jobs List -->
      <div class="space-y-4">
        <!-- Job Card -->
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in-up"
          :style="`animation-delay: ${350 + index * 50}ms;`"
        >
          <div class="p-6">
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
            >
              <!-- Job Info -->
              <div class="flex-1">
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    {{ job.title.charAt(0) }}
                  </div>

                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h3
                        class="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors"
                      >
                        {{ job.title }}
                      </h3>
                      <span
                        class="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0"
                        :class="getStatusClass(job.status)"
                      >
                        {{ job.status }}
                      </span>
                    </div>

                    <div
                      class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3"
                    >
                      <div class="flex items-center gap-1">
                        <Icon name="mdi:map-marker" class="w-4 h-4" />
                        <span>{{ job.location }}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <Icon name="mdi:briefcase-outline" class="w-4 h-4" />
                        <span>{{ job.type }}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <Icon name="mdi:calendar" class="w-4 h-4" />
                        <span>Posted {{ job.postedDate }}</span>
                      </div>
                    </div>

                    <!-- Stats Row -->
                    <div class="flex flex-wrap items-center gap-6">
                      <div class="flex items-center gap-2">
                        <div
                          class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
                        >
                          <Icon
                            name="mdi:account-multiple"
                            class="w-4 h-4 text-blue-600"
                          />
                        </div>
                        <div>
                          <p class="text-xs text-gray-500">Applicants</p>
                          <p class="text-sm font-bold text-gray-900">
                            {{ job.applicants }}
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <div
                          class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
                        >
                          <Icon
                            name="mdi:eye"
                            class="w-4 h-4 text-purple-600"
                          />
                        </div>
                        <div>
                          <p class="text-xs text-gray-500">Views</p>
                          <p class="text-sm font-bold text-gray-900">
                            {{ job.views }}
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <div
                          class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"
                        >
                          <Icon
                            name="mdi:star"
                            class="w-4 h-4 text-orange-600"
                          />
                        </div>
                        <div>
                          <p class="text-xs text-gray-500">Shortlisted</p>
                          <p class="text-sm font-bold text-gray-900">
                            {{ job.shortlisted }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex lg:flex-col gap-2 lg:items-end">
                <button
                  class="flex-1 lg:flex-initial px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:eye" class="w-4 h-4" />
                  <span class="hidden sm:inline">View</span>
                </button>
                <button
                  class="flex-1 lg:flex-initial px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:pencil" class="w-4 h-4" />
                  <span class="hidden sm:inline">Edit</span>
                </button>
                <button
                  class="flex-1 lg:flex-initial px-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:dots-vertical" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Progress Bar (if job is active) -->
          <div v-if="job.status === 'Active'" class="px-6 pb-4">
            <div
              class="flex items-center justify-between text-xs text-gray-600 mb-2"
            >
              <span>Application Progress</span>
              <span
                >{{
                  Math.round((job.applicants / job.targetApplicants) * 100)
                }}%</span
              >
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                :style="`width: ${Math.min((job.applicants / job.targetApplicants) * 100, 100)}%`"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="jobs.length === 0"
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center fade-in-up"
      >
        <div
          class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Icon name="mdi:briefcase-outline" class="w-10 h-10 text-gray-400" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">No jobs posted yet</h3>
        <p class="text-gray-600 mb-6">
          Start by creating your first job posting
        </p>
        <NuxtLink
          to="/jobs/post"
          class="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          <Icon name="mdi:plus-circle" class="w-5 h-5 mr-2" />
          Post Your First Job
        </NuxtLink>
      </div>

      <!-- Pagination -->
      <div
        v-if="jobs.length > 0"
        class="mt-8 flex items-center justify-center gap-2 fade-in-up"
      >
        <button
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon name="mdi:chevron-left" class="w-5 h-5" />
        </button>
        <button
          class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium"
        >
          1
        </button>
        <button
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          2
        </button>
        <button
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          3
        </button>
        <button
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Icon name="mdi:chevron-right" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Manage Jobs - FindPoint",
  description: "Track and manage all your job postings in one place",
});

// Sample data - replace with actual API call
const jobs = ref([
  {
    title: "Senior Software Engineer",
    status: "Active",
    location: "San Francisco, CA",
    type: "Full-time",
    postedDate: "2 days ago",
    applicants: 45,
    views: 234,
    shortlisted: 8,
    targetApplicants: 100,
  },
  {
    title: "Product Designer",
    status: "Active",
    location: "Remote",
    type: "Full-time",
    postedDate: "5 days ago",
    applicants: 28,
    views: 189,
    shortlisted: 5,
    targetApplicants: 50,
  },
  {
    title: "Marketing Manager",
    status: "Draft",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "1 week ago",
    applicants: 0,
    views: 0,
    shortlisted: 0,
    targetApplicants: 30,
  },
  {
    title: "Frontend Developer",
    status: "Active",
    location: "Austin, TX",
    type: "Contract",
    postedDate: "3 days ago",
    applicants: 67,
    views: 412,
    shortlisted: 12,
    targetApplicants: 80,
  },
  {
    title: "Data Scientist",
    status: "Closed",
    location: "Boston, MA",
    type: "Full-time",
    postedDate: "2 weeks ago",
    applicants: 82,
    views: 523,
    shortlisted: 15,
    targetApplicants: 100,
  },
]);

const getStatusClass = (status: string) => {
  const classes = {
    Active: "bg-emerald-100 text-emerald-700",
    Draft: "bg-orange-100 text-orange-700",
    Closed: "bg-gray-100 text-gray-700",
  };
  return classes[status as keyof typeof classes] || "bg-gray-100 text-gray-700";
};

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
});
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
</style>
