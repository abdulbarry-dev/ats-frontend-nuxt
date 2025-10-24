<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300"
          >
            <Icon name="mdi:compass" class="w-7 h-7 text-white" />
          </div>
          <div>
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            >
              Explore
            </h1>
            <p
              class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              Discover recruiters and talented professionals
            </p>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 fade-in-up"
        style="animation-delay: 100ms"
      >
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-md dark:hover:shadow-slate-900/80"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="mdi:account-tie"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
            </div>
            <div>
              <p
                class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                1,200+
              </p>
              <p
                class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                Recruiters
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-md dark:hover:shadow-slate-900/80"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="mdi:account-group"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
            </div>
            <div>
              <p
                class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                5,000+
              </p>
              <p
                class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                Candidates
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs Navigation -->
      <div
        class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-2 mb-8 fade-in-up transition-colors duration-300"
        style="animation-delay: 200ms"
      >
        <div class="flex flex-col sm:flex-row gap-2">
          <NuxtLink
            to="/explore/recruiters"
            class="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <Icon name="mdi:account-tie" class="w-5 h-5" />
            <span>Recruiters</span>
            <span
              class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold transition-colors duration-300"
              >1.2K+</span
            >
          </NuxtLink>

          <NuxtLink
            to="/explore/candidates"
            class="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
          >
            <Icon name="mdi:account-group" class="w-5 h-5" />
            <span>Candidates</span>
            <span
              class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-semibold transition-colors duration-300"
              >5K+</span
            >
          </NuxtLink>
        </div>
      </div>

      <!-- Featured Sections -->
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Top Recruiters -->
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
          style="animation-delay: 300ms"
        >
          <div class="flex items-center justify-between mb-4">
            <h2
              class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:trophy"
                class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              Top Recruiters
            </h2>
            <NuxtLink
              to="/explore/recruiters"
              class="text-sm text-emerald-600 dark:text-emerald-400 hover:underline transition-colors duration-300"
            >
              View all
            </NuxtLink>
          </div>
          <div class="space-y-4">
            <div
              v-for="recruiter in topRecruiters"
              :key="recruiter.id"
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              >
                <Icon
                  name="mdi:account-tie"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="font-semibold text-gray-900 dark:text-white text-sm truncate transition-colors duration-300"
                >
                  {{ recruiter.name }}
                </h3>
                <p
                  class="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  {{ recruiter.company }}
                </p>
              </div>
              <Icon
                name="mdi:chevron-right"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 transition-colors duration-300"
              />
            </div>
          </div>
        </div>

        <!-- Trending Profiles -->
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
          style="animation-delay: 400ms"
        >
          <div class="flex items-center justify-between mb-4">
            <h2
              class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:trending-up"
                class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              Trending Candidates
            </h2>
            <NuxtLink
              to="/explore/candidates"
              class="text-sm text-emerald-600 dark:text-emerald-400 hover:underline transition-colors duration-300"
            >
              View all
            </NuxtLink>
          </div>
          <div class="space-y-4">
            <div
              v-for="candidate in trendingCandidates"
              :key="candidate.id"
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-emerald-100 to-purple-200 dark:from-emerald-900/30 dark:to-purple-800/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              >
                <Icon
                  name="mdi:account"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="font-semibold text-gray-900 dark:text-white text-sm truncate transition-colors duration-300"
                >
                  {{ candidate.name }}
                </h3>
                <p
                  class="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  {{ candidate.title }}
                </p>
              </div>
              <Icon
                name="mdi:chevron-right"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div
        class="mt-8 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 rounded-xl shadow-lg p-8 fade-in-up transition-colors duration-300"
        style="animation-delay: 500ms"
      >
        <div class="text-center">
          <h2 class="text-2xl font-bold text-white mb-2">
            Start Exploring Today
          </h2>
          <p
            class="text-emerald-100 dark:text-emerald-50 mb-6 transition-colors duration-300"
          >
            Connect with recruiters and talented professionals
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/explore/recruiters"
              class="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-md"
            >
              Explore Recruiters
            </NuxtLink>
            <NuxtLink
              to="/explore/candidates"
              class="px-6 py-3 bg-emerald-800/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-emerald-800/70 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
            >
              Discover Candidates
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Explore - FindPoint",
  description:
    "Discover recruiters and talented professionals on FindPoint",
});

// Mock data for featured items
const topRecruiters = ref([
  { id: 1, name: "Sarah Johnson", company: "TechCorp Solutions" },
  { id: 2, name: "Michael Chen", company: "Digital Innovations" },
  { id: 3, name: "Emily Rodriguez", company: "CloudSpace Systems" },
  { id: 4, name: "David Kim", company: "DataFlow Inc" },
]);

const trendingCandidates = ref([
  { id: 1, name: "Alex Thompson", title: "Senior Full Stack Developer" },
  { id: 2, name: "Jessica Martinez", title: "Product Designer" },
  { id: 3, name: "Ryan Foster", title: "DevOps Engineer" },
  { id: 4, name: "Sophia Lee", title: "Data Scientist" },
]);
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}
</style>
