<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 py-8">
  <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
  <div class="mb-8 fade-in-up dark:bg-gray-900 dark:border-gray-800 rounded-xl">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Recruiter Dashboard
            </h1>
            <p class="text-gray-700 dark:text-gray-400">
              Welcome back! Here's your recruitment overview
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button
              class="px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm dark:shadow-none"
            >
              <Icon name="mdi:calendar-today" class="w-4 h-4 text-emerald-600 dark:text-emerald-400 drop-shadow-sm" />
              <span class="hidden sm:inline">Today</span>
            </button>
            <NuxtLink
              to="/jobs/post"
              class="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 dark:shadow-emerald-900"
            >
              <Icon name="mdi:plus-circle" class="w-5 h-5 text-white dark:text-emerald-300 drop-shadow-sm" />
              <span class="hidden sm:inline">Post Job</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Key Metrics -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 dark:bg-gray-900 dark:border-gray-800 rounded-xl">
        <!-- Active Jobs -->
        <div
          class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-lg transition-all fade-in-up"
          style="animation-delay: 100ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:briefcase" class="w-6 h-6 text-emerald-600" />
            </div>
            <span
              class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-up" class="w-3 h-3" />
              12%
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">24</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Active Jobs</div>
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <NuxtLink
              to="/jobs/manage"
              class="text-xs text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
            >
              View all
              <Icon name="mdi:arrow-right" class="w-3 h-3" />
            </NuxtLink>
          </div>
        </div>

        <!-- Total Applicants -->
        <div
          class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-lg transition-all fade-in-up"
          style="animation-delay: 150ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:account-multiple" class="w-6 h-6 text-blue-600" />
            </div>
            <span
              class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-up" class="w-3 h-3" />
              8%
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">156</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Total Applicants</div>
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <NuxtLink
              to="/recruiters/candidates"
              class="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View all
              <Icon name="mdi:arrow-right" class="w-3 h-3" />
            </NuxtLink>
          </div>
        </div>

        <!-- Interviews -->
        <div
          class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-lg transition-all fade-in-up"
          style="animation-delay: 200ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:calendar-clock" class="w-6 h-6 text-orange-600" />
            </div>
            <span
              class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold"
            >
              This week
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">12</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Scheduled Interviews</div>
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button
              class="text-xs text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
            >
              View calendar
              <Icon name="mdi:arrow-right" class="w-3 h-3" />
            </button>
          </div>
        </div>

        <!-- Offers -->
        <div
          class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md dark:hover:shadow-lg transition-all fade-in-up"
          style="animation-delay: 250ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:trophy" class="w-6 h-6 text-purple-600" />
            </div>
            <span
              class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-up" class="w-3 h-3" />
              25%
            </span>
          </div>
          <div class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">8</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Offers Extended</div>
          <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button
              class="text-xs text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
            >
              View details
              <Icon name="mdi:arrow-right" class="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

  <div class="grid lg:grid-cols-3 gap-6 mb-8 dark:bg-gray-900 dark:border-gray-800 rounded-xl">
        <!-- Recent Applications -->
        <div
          class="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 fade-in-up"
          style="animation-delay: 300ms"
        >
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                Recent Applications
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">Latest candidate submissions</p>
            </div>
            <NuxtLink
              to="/recruiters/candidates"
              class="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
            >
              View all
              <Icon name="mdi:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>

          <div class="space-y-4">
            <div
              v-for="(application, index) in recentApplications"
              :key="index"
              class="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                :class="application.avatarBg"
              >
                {{ application.initials }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2 mb-1">
                  <h3 class="font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {{ application.name }}
                  </h3>
                  <span class="text-xs text-gray-500 whitespace-nowrap">{{
                    application.time
                  }}</span>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {{ application.position }}
                </p>
                <div class="flex items-center gap-2">
                  <span
                    class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >New</span
                  >
                  <span class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Icon name="mdi:star" class="w-3 h-3 text-yellow-500" />
                    {{ application.match }}% match
                  </span>
                </div>
              </div>
              <button
                class="px-4 py-2 bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded-lg text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors flex-shrink-0"
              >
                Review
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
  <div class="space-y-6 dark:bg-gray-900 dark:border-gray-800 rounded-xl">
          <!-- Pipeline Overview -->
          <div
            class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 fade-in-up"
            style="animation-delay: 350ms"
          >
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
              Pipeline Overview
            </h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="text-sm text-gray-700 dark:text-gray-400">New</span>
                </div>
                <span class="text-sm font-bold text-gray-800 dark:text-gray-200">45</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div
                  class="bg-blue-500 h-2 rounded-full"
                  style="width: 29%"
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-sm text-gray-700 dark:text-gray-400">Reviewing</span>
                </div>
                <span class="text-sm font-bold text-gray-800 dark:text-gray-200">62</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div
                  class="bg-purple-500 h-2 rounded-full"
                  style="width: 40%"
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-sm text-gray-700 dark:text-gray-400">Interview</span>
                </div>
                <span class="text-sm font-bold text-gray-800 dark:text-gray-200">28</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div
                  class="bg-orange-500 h-2 rounded-full"
                  style="width: 18%"
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span class="text-sm text-gray-700 dark:text-gray-400">Offer</span>
                </div>
                <span class="text-sm font-bold text-gray-800 dark:text-gray-200">21</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div
                  class="bg-emerald-500 h-2 rounded-full"
                  style="width: 13%"
                ></div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div
            class="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:bg-gradient-to-br dark:from-emerald-900 dark:to-emerald-950 rounded-xl border border-emerald-200 dark:border-emerald-800 p-6 fade-in-up"
            style="animation-delay: 400ms"
          >
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Quick Actions</h3>
            <div class="space-y-2">
              <NuxtLink
                to="recruiters/jobs/post"
                class="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-all group"
              >
                <div
                  class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors"
                >
                  <Icon
                    name="mdi:plus-circle"
                    class="w-5 h-5 text-emerald-600"
                  />
                </div>
                <span class="font-medium text-gray-800 dark:text-gray-200">Post New Job</span>
              </NuxtLink>

              <NuxtLink
                to="/recruiters/candidates"
                class="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-all group"
              >
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                >
                  <Icon
                    name="mdi:account-search"
                    class="w-5 h-5 text-blue-600"
                  />
                </div>
                <span class="font-medium text-gray-800 dark:text-gray-200">Browse Candidates</span>
              </NuxtLink>

              <NuxtLink
                to="/recruiters/analytics"
                class="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-all group"
              >
                <div
                  class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors"
                >
                  <Icon name="mdi:chart-line" class="w-5 h-5 text-purple-600" />
                </div>
                <span class="font-medium text-gray-800 dark:text-gray-200">View Analytics</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Performing Jobs -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8 fade-in-up"
        style="animation-delay: 450ms"
      >
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
              Top Performing Jobs
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Based on application rate and quality
            </p>
          </div>
          <NuxtLink
            to="/jobs/manage"
            class="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium flex items-center gap-1"
          >
            Manage jobs
            <Icon name="mdi:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 dark:bg-gray-900 dark:border-gray-800 rounded-xl">
          <div
            v-for="(job, index) in topJobs"
            :key="index"
            class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md dark:hover:shadow-lg transition-all group bg-white dark:bg-gray-900"
          >
            <div class="flex items-start justify-between mb-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold"
              >
                {{ job.initial }}
              </div>
              <span
                class="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold"
                >Active</span
              >
            </div>
            <h3
              class="font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors"
            >
              {{ job.title }}
            </h3>
            <div class="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
              <span class="flex items-center gap-1">
                <Icon name="mdi:map-marker" class="w-3 h-3" />
                {{ job.location }}
              </span>
              <span class="flex items-center gap-1">
                <Icon name="mdi:clock-outline" class="w-3 h-3" />
                {{ job.posted }}
              </span>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div class="text-center">
                <div class="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {{ job.views }}
                </div>
                <div class="text-xs text-gray-500">Views</div>
              </div>
              <div class="text-center border-x border-gray-200">
                <div class="text-lg font-bold text-emerald-600 dark:text-emerald-300">
                  {{ job.applicants }}
                </div>
                <div class="text-xs text-gray-500">Applied</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-bold text-purple-600 dark:text-purple-300">
                  {{ job.shortlisted }}
                </div>
                <div class="text-xs text-gray-500">Shortlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Feed -->
      <div
        class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 fade-in-up"
        style="animation-delay: 500ms"
      >
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Recent Activity
            </h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Latest updates and notifications
            </p>
          </div>
        </div>

  <div class="space-y-4">
          <div
            v-for="(activity, index) in recentActivity"
            :key="index"
            class="flex gap-4"
          >
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              :class="activity.iconBg"
            >
              <Icon
                :name="activity.icon"
                class="w-5 h-5"
                :class="activity.iconColor"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-gray-800 dark:text-gray-200 mb-1" v-html="activity.text"></p>
              <p class="text-xs text-gray-600 dark:text-gray-400">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue";
import { useSeoMeta } from "nuxt/app";
useSeoMeta({
  title: "Recruiter Dashboard - FindPoint",
  description: "Manage your recruitment process and track hiring metrics",
});

const recentApplications = ref([
  {
    name: "Sarah Johnson",
    initials: "SJ",
    position: "Senior Software Engineer",
    time: "5 min ago",
    match: 95,
    avatarBg: "bg-gradient-to-br from-blue-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    initials: "MC",
    position: "Product Designer",
    time: "1 hour ago",
    match: 92,
    avatarBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    position: "Data Scientist",
    time: "2 hours ago",
    match: 88,
    avatarBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "David Park",
    initials: "DP",
    position: "Frontend Developer",
    time: "3 hours ago",
    match: 85,
    avatarBg: "bg-gradient-to-br from-orange-500 to-red-500",
  },
]);

const topJobs = ref([
  {
    title: "Senior Software Engineer",
    location: "San Francisco",
    posted: "2d ago",
    views: 423,
    applicants: 67,
    shortlisted: 12,
    initial: "S",
  },
  {
    title: "Product Designer",
    location: "Remote",
    posted: "5d ago",
    views: 356,
    applicants: 54,
    shortlisted: 9,
    initial: "P",
  },
  {
    title: "Data Scientist",
    location: "New York",
    posted: "1w ago",
    views: 512,
    applicants: 48,
    shortlisted: 8,
    initial: "D",
  },
]);

const recentActivity = ref([
  {
    icon: "mdi:account-plus",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    text: "<strong>Sarah Johnson</strong> applied to Senior Software Engineer",
    time: "5 minutes ago",
  },
  {
    icon: "mdi:calendar-check",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    text: "Interview scheduled with <strong>Michael Chen</strong>",
    time: "1 hour ago",
  },
  {
    icon: "mdi:file-document",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    text: "New job posting <strong>Marketing Manager</strong> published",
    time: "2 hours ago",
  },
  {
    icon: "mdi:star",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    text: "<strong>Emily Rodriguez</strong> was shortlisted",
    time: "3 hours ago",
  },
  {
    icon: "mdi:message-text",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    text: "New message from <strong>David Park</strong>",
    time: "4 hours ago",
  },
]);

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
