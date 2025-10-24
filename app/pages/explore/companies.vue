<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header with Back Button -->
      <div class="mb-8 fade-in-up">
        <NuxtLink
          to="/explore"
          class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-4 transition-colors duration-300"
        >
          <Icon name="mdi:arrow-left" class="w-5 h-5" />
          <span>Back to Explore</span>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600 rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300"
          >
            <Icon name="mdi:office-building" class="w-7 h-7 text-white" />
          </div>
          <div>
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            >
              Explore Companies
            </h1>
            <p
              class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              Discover your next employer
            </p>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-4 gap-6">
        <!-- Filters Sidebar -->
        <div class="lg:col-span-1">
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 sticky top-8 fade-in-up transition-colors duration-300"
            style="animation-delay: 100ms"
          >
            <div class="flex items-center justify-between mb-4">
              <h2
                class="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                Filters
              </h2>
              <button
                @click="clearFilters"
                class="text-sm text-emerald-600 dark:text-emerald-400 hover:underline transition-colors duration-300"
              >
                Clear
              </button>
            </div>

            <!-- Search -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Search</label
              >
              <div class="relative">
                <input
                  v-model="filters.search"
                  type="text"
                  placeholder="Company name..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                />
                <Icon
                  name="mdi:magnify"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-300"
                />
              </div>
            </div>

            <!-- Industry -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Industry</label
              >
              <select
                v-model="filters.industry"
                class="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
              >
                <option value="">All Industries</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
            </div>

            <!-- Company Size -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Company Size</label
              >
              <div class="space-y-2">
                <label
                  v-for="size in companySizes"
                  :key="size.value"
                  class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    :value="size.value"
                    v-model="filters.sizes"
                    class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                  />
                  <span
                    class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                    >{{ size.label }}</span
                  >
                </label>
              </div>
            </div>

            <!-- Location -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Location</label
              >
              <div class="relative">
                <input
                  v-model="filters.location"
                  type="text"
                  placeholder="City, state, or country"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                />
                <Icon
                  name="mdi:map-marker"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-300"
                />
              </div>
            </div>

            <!-- Has Jobs -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="filters.hasJobs"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                />
                <span
                  class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  >Has open positions</span
                >
              </label>
            </div>

            <!-- Remote Friendly -->
            <div>
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="filters.remoteFriendly"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                />
                <span
                  class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  >Remote friendly</span
                >
              </label>
            </div>
          </div>
        </div>

        <!-- Companies Grid -->
        <div class="lg:col-span-3">
          <!-- Results Header -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-4 mb-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 200ms"
          >
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div class="flex items-center gap-2">
                <p
                  class="text-gray-900 dark:text-white font-semibold transition-colors duration-300"
                >
                  {{ filteredCompanies.length }}
                  {{ filteredCompanies.length === 1 ? "Company" : "Companies" }}
                </p>
                <span
                  class="text-gray-500 dark:text-gray-400 transition-colors duration-300"
                  >found</span
                >
              </div>

              <div class="flex items-center gap-3">
                <label
                  class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
                  >Sort by:</label
                >
                <select
                  v-model="sortBy"
                  class="px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                >
                  <option value="name">Name</option>
                  <option value="jobs">Open Jobs</option>
                  <option value="size">Company Size</option>
                  <option value="recent">Recently Added</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Companies List -->
          <div class="space-y-4">
            <div
              v-for="(company, index) in filteredCompanies"
              :key="company.id"
              class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md dark:hover:shadow-slate-900/80 transition-all duration-300 fade-in-up cursor-pointer"
              :style="`animation-delay: ${300 + index * 50}ms;`"
            >
              <div class="flex flex-col sm:flex-row gap-4">
                <!-- Company Logo -->
                <div
                  class="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:office-building"
                    class="w-10 h-10 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                </div>

                <!-- Company Info -->
                <div class="flex-1">
                  <div class="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3
                        class="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300"
                      >
                        {{ company.name }}
                      </h3>
                      <p
                        class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
                      >
                        {{ company.industry }}
                      </p>
                    </div>
                    <button
                      class="p-2 text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300"
                    >
                      <Icon name="mdi:bookmark-outline" class="w-5 h-5" />
                    </button>
                  </div>

                  <p
                    class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 transition-colors duration-300"
                  >
                    {{ company.description }}
                  </p>

                  <!-- Company Meta -->
                  <div
                    class="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
                  >
                    <div class="flex items-center gap-1">
                      <Icon name="mdi:map-marker" class="w-4 h-4" />
                      <span>{{ company.location }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Icon name="mdi:account-group" class="w-4 h-4" />
                      <span>{{ company.size }} employees</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Icon name="mdi:briefcase" class="w-4 h-4" />
                      <span
                        >{{ company.openJobs }} open
                        {{
                          company.openJobs === 1 ? "position" : "positions"
                        }}</span
                      >
                    </div>
                    <div
                      v-if="company.remote"
                      class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400"
                    >
                      <Icon name="mdi:home-outline" class="w-4 h-4" />
                      <span>Remote friendly</span>
                    </div>
                  </div>

                  <!-- Benefits Tags -->
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="benefit in company.benefits.slice(0, 3)"
                      :key="benefit"
                      class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium transition-colors duration-300"
                    >
                      {{ benefit }}
                    </span>
                    <span
                      v-if="company.benefits.length > 3"
                      class="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium transition-colors duration-300"
                    >
                      +{{ company.benefits.length - 3 }} more
                    </span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex sm:flex-col gap-2 justify-end">
                  <NuxtLink
                    :to="`/companies/${company.id}`"
                    class="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 dark:bg-emerald-500 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 dark:hover:bg-emerald-600 transition-all duration-300 text-center whitespace-nowrap shadow-sm"
                  >
                    View Profile
                  </NuxtLink>
                  <NuxtLink
                    v-if="company.openJobs > 0"
                    :to="`/jobs?company=${company.id}`"
                    class="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 text-center whitespace-nowrap"
                  >
                    View Jobs
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredCompanies.length === 0"
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-12 text-center fade-in-up transition-colors duration-300"
          >
            <div
              class="w-20 h-20 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
            >
              <Icon
                name="mdi:office-building-outline"
                class="w-10 h-10 text-gray-400 dark:text-gray-500 transition-colors duration-300"
              />
            </div>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
            >
              No companies found
            </h3>
            <p
              class="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300"
            >
              Try adjusting your filters to see more results
            </p>
            <button
              @click="clearFilters"
              class="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 dark:hover:bg-emerald-600 transition-all duration-300 shadow-sm"
            >
              Clear Filters
            </button>
          </div>

          <!-- Load More -->
          <div
            v-if="hasMore && filteredCompanies.length > 0"
            class="mt-6 text-center fade-in-up"
          >
            <button
              @click="loadMore"
              class="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
            >
              Load More Companies
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Explore Companies - FindPoint",
  description: "Discover and explore companies hiring on FindPoint",
});

// Filters
const filters = ref({
  search: "",
  industry: "",
  sizes: [] as string[],
  location: "",
  hasJobs: false,
  remoteFriendly: false,
});

const sortBy = ref("name");
const hasMore = ref(false);

const companySizes = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

// Mock companies data
const companies = ref([
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Technology",
    description:
      "Leading provider of enterprise software solutions, helping businesses transform digitally with cutting-edge technology.",
    location: "San Francisco, CA",
    size: "501-1000",
    openJobs: 12,
    remote: true,
    benefits: [
      "Health Insurance",
      "401(k)",
      "Remote Work",
      "Flexible Hours",
      "Learning Budget",
    ],
  },
  {
    id: 2,
    name: "Digital Innovations",
    industry: "Technology",
    description:
      "Innovative digital agency specializing in web and mobile application development for startups and enterprises.",
    location: "New York, NY",
    size: "51-200",
    openJobs: 8,
    remote: true,
    benefits: [
      "Health Insurance",
      "Unlimited PTO",
      "Stock Options",
      "Remote Work",
    ],
  },
  {
    id: 3,
    name: "CloudSpace Systems",
    industry: "Technology",
    description:
      "Cloud infrastructure and services provider empowering businesses with scalable and secure cloud solutions.",
    location: "Austin, TX",
    size: "201-500",
    openJobs: 15,
    remote: true,
    benefits: [
      "Health Insurance",
      "401(k)",
      "Gym Membership",
      "Catered Lunch",
      "Remote Work",
    ],
  },
  {
    id: 4,
    name: "DataFlow Analytics",
    industry: "Finance",
    description:
      "Advanced data analytics firm providing insights and intelligence for financial institutions worldwide.",
    location: "Chicago, IL",
    size: "101-200",
    openJobs: 6,
    remote: false,
    benefits: [
      "Health Insurance",
      "401(k)",
      "Bonuses",
      "Professional Development",
    ],
  },
  {
    id: 5,
    name: "HealthTech Medical",
    industry: "Healthcare",
    description:
      "Revolutionizing healthcare delivery through innovative medical technology and patient care solutions.",
    location: "Boston, MA",
    size: "501-1000",
    openJobs: 10,
    remote: false,
    benefits: [
      "Health Insurance",
      "Dental & Vision",
      "401(k)",
      "Tuition Reimbursement",
    ],
  },
  {
    id: 6,
    name: "EduLearn Platform",
    industry: "Education",
    description:
      "Online learning platform connecting students with quality education resources and expert instructors.",
    location: "Seattle, WA",
    size: "51-200",
    openJobs: 0,
    remote: true,
    benefits: [
      "Health Insurance",
      "Remote Work",
      "Learning Budget",
      "Flexible Hours",
    ],
  },
]);

// Computed filtered companies
const filteredCompanies = computed(() => {
  let result = [...companies.value];

  // Search filter
  if (filters.value.search) {
    result = result.filter((c) =>
      c.name.toLowerCase().includes(filters.value.search.toLowerCase()),
    );
  }

  // Industry filter
  if (filters.value.industry) {
    result = result.filter(
      (c) => c.industry.toLowerCase() === filters.value.industry.toLowerCase(),
    );
  }

  // Size filter
  if (filters.value.sizes.length > 0) {
    result = result.filter((c) => filters.value.sizes.includes(c.size));
  }

  // Location filter
  if (filters.value.location) {
    result = result.filter((c) =>
      c.location.toLowerCase().includes(filters.value.location.toLowerCase()),
    );
  }

  // Has jobs filter
  if (filters.value.hasJobs) {
    result = result.filter((c) => c.openJobs > 0);
  }

  // Remote friendly filter
  if (filters.value.remoteFriendly) {
    result = result.filter((c) => c.remote);
  }

  // Sort
  if (sortBy.value === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === "jobs") {
    result.sort((a, b) => b.openJobs - a.openJobs);
  }

  return result;
});

const clearFilters = () => {
  filters.value = {
    search: "",
    industry: "",
    sizes: [],
    location: "",
    hasJobs: false,
    remoteFriendly: false,
  };
};

const loadMore = () => {
  // Implementation for loading more companies
  console.log("Load more companies");
};
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

.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
