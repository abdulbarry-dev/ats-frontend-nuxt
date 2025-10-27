<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Page Header -->
    <header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
              Job Applications
            </h1>
            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Track your application progress and manage your job search
            </p>
          </div>
          <div class="flex items-center space-x-3">
            <NuxtLink
              to="/jobs"
              class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              <Icon name="mdi:briefcase-plus-outline" class="w-4 h-4 mr-2" />
              Browse Jobs
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Overview -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Icon name="mdi:file-document-multiple-outline" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Total</dt>
              <dd class="text-2xl font-semibold text-gray-900 dark:text-white">{{ totalApplications }}</dd>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Icon name="mdi:clock-outline" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">In Review</dt>
              <dd class="text-2xl font-semibold text-gray-900 dark:text-white">{{ statusCount("under-review") }}</dd>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Icon name="mdi:calendar" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Interviews</dt>
              <dd class="text-2xl font-semibold text-gray-900 dark:text-white">{{ statusCount("interview") }}</dd>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="mdi:trophy" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Offers</dt>
              <dd class="text-2xl font-semibold text-gray-900 dark:text-white">{{ statusCount("offer") }}</dd>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters and Search -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <!-- Search -->
          <div class="relative col-span-1 lg:col-span-2">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by job title or company..."
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <!-- Status Filter -->
          <div class="col-span-1">
            <select
              v-model="statusFilter"
              class="block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Status</option>
              <option value="under-review">Under Review</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <!-- Sort -->
          <div class="col-span-1">
            <select
              v-model="sortBy"
              class="block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Applications Grid -->
      <div v-if="filteredApplications.length === 0" class="text-center py-12">
        <div class="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
          <Icon name="mdi:briefcase-search" class="w-12 h-12 text-gray-400" />
        </div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No applications found</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          {{ searchQuery ? 'Try adjusting your search criteria.' : 'Start applying to jobs to see them here.' }}
        </p>
        <NuxtLink
          to="/jobs"
          class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
        >
          <Icon name="mdi:briefcase-plus-outline" class="w-4 h-4 mr-2" />
          Browse Available Jobs
        </NuxtLink>
      </div>

      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        <div
          v-for="app in filteredApplications"
          :key="app.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start justify-between">
            <!-- Main Content -->
            <div class="flex items-start space-x-4 flex-1">
              <!-- Company Logo -->
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center border-2 border-gray-200 dark:border-gray-600">
                  <img
                    v-if="app.logo"
                    :src="app.logo"
                    :alt="`${app.company} logo`"
                    class="w-full h-full rounded-lg object-cover"
                  />
                  <span v-else class="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {{ initials(app.company) }}
                  </span>
                </div>
              </div>

              <!-- Job Info -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                      {{ app.title }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
                      <Icon name="mdi:office-building" class="w-4 h-4 mr-1" />
                      {{ app.company }}
                    </p>
                  </div>
                  <span
                    :class="statusBadgeClass(app.status)"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ml-4"
                  >
                    {{ statusLabel(app.status) }}
                  </span>
                </div>

                <!-- Meta Info -->
                <div class="mt-3 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div class="flex items-center">
                    <Icon name="mdi:map-marker" class="w-4 h-4 mr-1" />
                    {{ app.location }}
                  </div>
                  <div v-if="app.salary" class="flex items-center text-green-600 dark:text-green-400">
                    <Icon name="mdi:currency-usd" class="w-4 h-4 mr-1" />
                    {{ app.salary }}
                  </div>
                  <div class="flex items-center">
                    <Icon name="mdi:clock-outline" class="w-4 h-4 mr-1" />
                    Applied {{ timeAgo(app.appliedAt) }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Progress Indicator -->
          <div v-if="app.status === 'interview' || app.status === 'offer'" class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Application Progress</span>
              <span class="text-gray-500 dark:text-gray-500">{{ progressText(app.status) }}</span>
            </div>
            <div class="mt-2">
              <div class="flex space-x-4">
                <div class="flex-1">
                  <div class="flex items-center">
                    <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                    <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">Applied</span>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Icon name="mdi:check" class="w-3 h-3 text-white" />
                    </div>
                    <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">Review</span>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <div :class="[
                      'w-6 h-6 rounded-full flex items-center justify-center',
                      app.status === 'offer' ? 'bg-green-500' : 'bg-yellow-500'
                    ]">
                      <Icon :name="app.status === 'offer' ? 'mdi:check' : 'mdi:calendar'" class="w-3 h-3 text-white" />
                    </div>
                    <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">Interview</span>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center">
                    <div :class="[
                      'w-6 h-6 rounded-full flex items-center justify-center',
                      app.status === 'offer' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                    ]">
                      <Icon name="mdi:trophy" class="w-3 h-3" :class="app.status === 'offer' ? 'text-white' : 'text-gray-500'" />
                    </div>
                    <span class="ml-2 text-xs text-gray-500 dark:text-gray-400">Offer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="mt-4 flex items-center justify-end space-x-3">
            <NuxtLink
              :to="`/jobs/${app.jobId}`"
              class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View Details
            </NuxtLink>
            <button
              v-if="app.status === 'interview'"
              class="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md font-medium transition-colors"
            >
              Schedule Interview
            </button>
            <button
              v-if="app.status === 'offer'"
              class="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md font-medium transition-colors"
            >
              View Offer
            </button>
            <button
              @click="withdrawApplication(app.id)"
              class="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium transition-colors"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Withdraw Modal -->
    <Transition name="modal">
      <div
        v-if="withdrawModal.open"
        class="fixed inset-0 z-50 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Icon name="mdi:alert-circle" class="h-6 w-6 text-red-600" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                    Withdraw Application
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Are you sure you want to withdraw your application? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                @click="confirmWithdraw"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Withdraw
              </button>
              <button
                @click="withdrawModal.open = false"
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import { ref, computed } from "vue";

const searchQuery = ref("");
const statusFilter = ref("");
const sortBy = ref("newest");
const withdrawModal = ref({ open: false, applicationId: "" });

const totalApplications = computed(() => applications.value.length);

const applications = ref([
  {
    id: "a1",
    jobId: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    logo: "",
    location: "San Francisco, CA",
    status: "under-review",
    appliedAt: "2025-10-15",
    salary: "$120k - $150k",
  },
  {
    id: "a2",
    jobId: "2",
    title: "Frontend Engineer",
    company: "StartupXYZ",
    logo: "",
    location: "Remote",
    status: "interview",
    appliedAt: "2025-10-10",
    salary: "$100k - $130k",
  },
  {
    id: "a3",
    jobId: "3",
    title: "React Developer",
    company: "Digital Solutions",
    logo: "",
    location: "New York, NY",
    status: "rejected",
    appliedAt: "2025-09-28",
    salary: "$110k - $140k",
  },
  {
    id: "a4",
    jobId: "4",
    title: "Lead Full Stack Engineer",
    company: "InnovateTech",
    logo: "",
    location: "Austin, TX",
    status: "offer",
    appliedAt: "2025-09-20",
    salary: "$130k - $160k",
  },
  {
    id: "a5",
    jobId: "5",
    title: "Software Engineer",
    company: "CloudSystems",
    logo: "",
    location: "Seattle, WA",
    status: "under-review",
    appliedAt: "2025-10-12",
    salary: "$115k - $145k",
  },
  {
    id: "a6",
    jobId: "6",
    title: "Full Stack Developer",
    company: "GrowthStartup",
    logo: "",
    location: "Remote",
    status: "interview",
    appliedAt: "2025-10-05",
    salary: "$125k - $155k",
  },
]);

const filteredApplications = computed(() => {
  let filtered = applications.value;

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (app) =>
        app.title.toLowerCase().includes(query) ||
        app.company.toLowerCase().includes(query)
    );
  }

  // Status filter
  if (statusFilter.value) {
    filtered = filtered.filter((app) => app.status === statusFilter.value);
  }

  // Sort
  filtered.sort((a, b) => {
    const dateA = new Date(a.appliedAt).getTime();
    const dateB = new Date(b.appliedAt).getTime();

    if (sortBy.value === "newest") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  return filtered;
});

const statusCount = (status: string) => {
  return applications.value.filter((app) => app.status === status).length;
};

const statusLabel = (status: string) => {
  const labels = {
    "under-review": "Under Review",
    interview: "Interview",
    rejected: "Not Selected",
    offer: "Offer Received",
  };
  return labels[status as keyof typeof labels] || "Unknown";
};

const statusBadgeClass = (status: string) => {
  const classes = {
    "under-review": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    interview: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    offer: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };
  return classes[status as keyof typeof classes] || "bg-gray-100 text-gray-800";
};

const initials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const timeAgo = (dateStr: string) => {
  const now = new Date();
  const date = new Date(dateStr);
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));

  if (diffInDays === 0) return "today";
  if (diffInDays === 1) return "yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
};

const progressText = (status: string) => {
  const progress = {
    interview: "Interview Stage",
    offer: "Offer Received",
  };
  return progress[status as keyof typeof progress] || "";
};

const withdrawApplication = (id: string) => {
  withdrawModal.value.open = true;
  withdrawModal.value.applicationId = id;
};

const confirmWithdraw = () => {
  const index = applications.value.findIndex(
    (app) => app.id === withdrawModal.value.applicationId
  );
  if (index > -1) {
    applications.value.splice(index, 1);
  }
  withdrawModal.value.open = false;
  withdrawModal.value.applicationId = "";
};

useHead({
  title: "Job Applications - FindPoint",
  meta: [
    {
      name: "description",
      content: "Track and manage your job applications",
    },
  ],
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>
