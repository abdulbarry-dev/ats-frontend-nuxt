<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <!-- Welcome Header -->
    <div
      class="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 text-white"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h1 class="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, {{ userName }}! 👋
            </h1>
            <p class="text-emerald-100 dark:text-emerald-200 text-lg">
              Here's what's happening with your job search
            </p>
          </div>
          <div class="flex items-center gap-3">
            <NuxtLink
              to="/jobs"
              class="px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Icon name="mdi:briefcase-search" class="w-5 h-5" />
              Browse Jobs
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Applications -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300 group"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:file-document-multiple"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <span
              class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full"
            >
              +2 this week
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {{ stats.applications }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Total Applications
          </div>
          <NuxtLink
            to="/candidates/applications"
            class="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium mt-2 inline-flex items-center gap-1"
          >
            View all <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Interviews -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300 group"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:calendar-check"
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
              />
            </div>
            <span
              class="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
            >
              3 upcoming
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {{ stats.interviews }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Interviews Scheduled
          </div>
          <button
            class="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mt-2 inline-flex items-center gap-1"
          >
            View schedule <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </button>
        </div>

        <!-- Saved Jobs -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300 group"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:heart"
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
              />
            </div>
            <span
              class="text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full"
            >
              Active
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {{ stats.savedJobs }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">Saved Jobs</div>
          <NuxtLink
            to="/candidates/saved"
            class="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium mt-2 inline-flex items-center gap-1"
          >
            View saved <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Profile Views -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300 group"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:eye"
                class="w-6 h-6 text-orange-600 dark:text-orange-400"
              />
            </div>
            <span
              class="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full"
            >
              +45 this month
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {{ stats.profileViews }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Profile Views
          </div>
          <NuxtLink
            to="/candidates/profile"
            class="text-xs text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium mt-2 inline-flex items-center gap-1"
          >
            View profile <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Recent Applications -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden transition-colors duration-300"
          >
            <div class="p-6 border-b border-gray-100 dark:border-slate-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
                  >
                    <Icon
                      name="mdi:briefcase-clock"
                      class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                    />
                  </div>
                  <div>
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                      Recent Applications
                    </h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Track your application progress
                    </p>
                  </div>
                </div>
                <NuxtLink
                  to="/candidates/applications"
                  class="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1"
                >
                  View All
                  <Icon name="mdi:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>

            <div class="divide-y divide-gray-100 dark:divide-slate-700">
              <div
                v-for="application in recentApplications"
                :key="application.id"
                class="p-6 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer group"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  >
                    <Icon
                      v-if="!application.companyLogo"
                      name="mdi:office-building"
                      class="w-6 h-6 text-gray-600 dark:text-gray-400"
                    />
                    <img
                      v-else
                      :src="application.companyLogo"
                      :alt="application.company"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3
                          class="font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                        >
                          {{ application.position }}
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                          {{ application.company }} • {{ application.location }}
                        </p>
                      </div>
                      <span
                        class="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                        :class="getStatusClass(application.status)"
                      >
                        {{ application.status }}
                      </span>
                    </div>
                    <div
                      class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400"
                    >
                      <span class="flex items-center gap-1">
                        <Icon name="mdi:clock-outline" class="w-4 h-4" />
                        Applied {{ application.appliedDate }}
                      </span>
                      <span class="flex items-center gap-1">
                        <Icon name="mdi:currency-usd" class="w-4 h-4" />
                        {{ application.salary }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recommended Jobs -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden transition-colors duration-300"
          >
            <div class="p-6 border-b border-gray-100 dark:border-slate-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
                  >
                    <Icon
                      name="mdi:star-circle"
                      class="w-6 h-6 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div>
                    <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                      Recommended for You
                    </h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Jobs matching your profile
                    </p>
                  </div>
                </div>
                <NuxtLink
                  to="/jobs"
                  class="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                >
                  Browse All
                  <Icon name="mdi:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>

            <div class="divide-y divide-gray-100 dark:divide-slate-700">
              <div
                v-for="job in recommendedJobs"
                :key="job.id"
                class="p-6 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer group"
              >
                <div class="flex items-start justify-between gap-4 mb-3">
                  <div class="flex items-start gap-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <Icon
                        name="mdi:briefcase"
                        class="w-6 h-6 text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <div>
                      <h3
                        class="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1"
                      >
                        {{ job.title }}
                      </h3>
                      <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {{ job.company }}
                      </p>
                      <div class="flex flex-wrap gap-2">
                        <span
                          class="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                          >{{ job.type }}</span
                        >
                        <span
                          class="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                          >{{ job.location }}</span
                        >
                        <span
                          class="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-md font-semibold"
                          >{{ job.salary }}</span
                        >
                      </div>
                    </div>
                  </div>
                  <button
                    class="p-2 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
                  >
                    <Icon
                      name="mdi:heart-outline"
                      class="w-5 h-5 text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                    />
                  </button>
                </div>
                <div
                  class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                >
                  <Icon name="mdi:clock-outline" class="w-4 h-4" />
                  Posted {{ job.postedDate }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Quick Actions -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 transition-colors duration-300"
          >
            <h3
              class="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <Icon name="mdi:lightning-bolt" class="w-5 h-5 text-yellow-500" />
              Quick Actions
            </h3>
            <div class="space-y-3">
              <NuxtLink
                to="/candidates/profile/edit"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:from-emerald-100 hover:to-emerald-200/50 dark:hover:from-emerald-900/30 dark:hover:to-emerald-800/30 rounded-xl transition-all duration-300 group"
              >
                <div
                  class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center"
                >
                  <Icon name="mdi:account-edit" class="w-5 h-5 text-white" />
                </div>
                <div class="flex-1">
                  <div
                    class="font-semibold text-gray-900 dark:text-white text-sm"
                  >
                    Update Profile
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">
                    Keep it fresh
                  </div>
                </div>
                <Icon
                  name="mdi:chevron-right"
                  class="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform"
                />
              </NuxtLink>

              <NuxtLink
                to="/jobs"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 rounded-xl transition-all duration-300 group"
              >
                <div
                  class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
                >
                  <Icon name="mdi:magnify" class="w-5 h-5 text-white" />
                </div>
                <div class="flex-1">
                  <div
                    class="font-semibold text-gray-900 dark:text-white text-sm"
                  >
                    Search Jobs
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">
                    Find opportunities
                  </div>
                </div>
                <Icon
                  name="mdi:chevron-right"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
                />
              </NuxtLink>

              <button
                class="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200/50 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 rounded-xl transition-all duration-300 group"
              >
                <div
                  class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center"
                >
                  <Icon name="mdi:cloud-upload" class="w-5 h-5 text-white" />
                </div>
                <div class="flex-1 text-left">
                  <div
                    class="font-semibold text-gray-900 dark:text-white text-sm"
                  >
                    Upload Resume
                  </div>
                  <div class="text-xs text-gray-600 dark:text-gray-400">
                    Update your CV
                  </div>
                </div>
                <Icon
                  name="mdi:chevron-right"
                  class="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          <!-- Upcoming Interviews -->
          <div
            class="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl shadow-lg p-6 text-white transition-colors duration-300"
          >
            <h3 class="font-bold mb-4 flex items-center gap-2">
              <Icon name="mdi:calendar-star" class="w-5 h-5" />
              Upcoming Interviews
            </h3>
            <div class="space-y-4">
              <div
                v-for="interview in upcomingInterviews"
                :key="interview.id"
                class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div class="font-semibold mb-1">{{ interview.company }}</div>
                <div class="text-sm text-blue-100 dark:text-blue-200 mb-2">
                  {{ interview.position }}
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <Icon name="mdi:calendar" class="w-4 h-4" />
                  {{ interview.date }}
                </div>
              </div>
            </div>
          </div>

          <!-- Profile Completion -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 transition-colors duration-300"
          >
            <h3 class="font-bold text-gray-900 dark:text-white mb-4">
              Profile Strength
            </h3>
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-600 dark:text-gray-400"
                  >Completion</span
                >
                <span
                  class="text-sm font-bold text-emerald-600 dark:text-emerald-400"
                  >{{ profileCompletion }}%</span
                >
              </div>
              <div
                class="h-3 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
                  :style="{ width: profileCompletion + '%' }"
                ></div>
              </div>
            </div>
            <ul class="space-y-2 text-sm">
              <li
                class="flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <Icon name="mdi:check-circle" class="w-4 h-4" />
                <span>Basic info completed</span>
              </li>
              <li
                class="flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <Icon name="mdi:check-circle" class="w-4 h-4" />
                <span>Resume uploaded</span>
              </li>
              <li class="flex items-center gap-2 text-gray-400">
                <Icon name="mdi:circle-outline" class="w-4 h-4" />
                <span>Add skills</span>
              </li>
              <li class="flex items-center gap-2 text-gray-400">
                <Icon name="mdi:circle-outline" class="w-4 h-4" />
                <span>Add certifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useHead } from "nuxt/app";


const userName = ref("Sarah");

const stats = ref({
  applications: 12,
  interviews: 5,
  savedJobs: 8,
  profileViews: 247,
});

const recentApplications = ref([
  {
    id: 1,
    position: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    status: "Under Review",
    appliedDate: "2 days ago",
    salary: "$120k - $150k",
    companyLogo: null,
  },
  {
    id: 2,
    position: "Frontend Engineer",
    company: "StartupXYZ",
    location: "Remote",
    status: "Interview Scheduled",
    appliedDate: "5 days ago",
    salary: "$100k - $130k",
    companyLogo: null,
  },
  {
    id: 3,
    position: "React Developer",
    company: "Digital Solutions",
    location: "New York, NY",
    status: "Applied",
    appliedDate: "1 week ago",
    salary: "$110k - $140k",
    companyLogo: null,
  },
]);

const recommendedJobs = ref([
  {
    id: 1,
    title: "Lead Full Stack Engineer",
    company: "InnovateTech",
    type: "Full-time",
    location: "Remote",
    salary: "$130k - $160k",
    postedDate: "1 day ago",
  },
  {
    id: 2,
    title: "Senior React Developer",
    company: "CloudSystems",
    type: "Full-time",
    location: "Austin, TX",
    salary: "$115k - $145k",
    postedDate: "3 days ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "GrowthStartup",
    type: "Contract",
    location: "San Francisco, CA",
    salary: "$125k - $155k",
    postedDate: "5 days ago",
  },
]);

const upcomingInterviews = ref([
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Full Stack Developer",
    date: "Tomorrow, 2:00 PM",
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Frontend Engineer",
    date: "Dec 22, 10:00 AM",
  },
]);

const profileCompletion = ref(75);

const getStatusClass = (status: string) => {
  const classes: Record<string, string> = {
    "Under Review": "bg-yellow-100 text-yellow-700",
    "Interview Scheduled": "bg-blue-100 text-blue-700",
    Applied: "bg-gray-100 text-gray-700",
    Rejected: "bg-red-100 text-red-700",
    Accepted: "bg-green-100 text-green-700",
  };
  return classes[status] || "bg-gray-100 text-gray-700";
};

useHead({
  title: "Dashboard - FindPoint",
  meta: [
    { name: "description", content: "Your candidate dashboard on FindPoint" },
  ],
});
</script>

<style scoped>
/* Smooth animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
