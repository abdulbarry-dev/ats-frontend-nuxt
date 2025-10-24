<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <h1
          class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
        >
          Explore Companies
        </h1>
        <p
          class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
        >
          Discover leading companies and find your perfect employer
        </p>
      </div>

      <!-- Search & Filters -->
      <div
        class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-4 sm:p-6 mb-6 fade-in-up transition-colors duration-300"
        style="animation-delay: 100ms"
      >
        <div class="grid md:grid-cols-12 gap-4">
          <div class="md:col-span-7 relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <Icon
                name="mdi:magnify"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-300"
              />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search companies by name or industry..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder:text-gray-500 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all outline-none duration-300"
            />
          </div>
          <div class="md:col-span-3">
            <select
              v-model="industryFilter"
              class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all outline-none cursor-pointer duration-300"
            >
              <option value="">All Industries</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>E-commerce</option>
              <option>Education</option>
              <option>Manufacturing</option>
            </select>
          </div>
          <div class="md:col-span-2">
            <select
              v-model="sortBy"
              class="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all outline-none cursor-pointer duration-300"
            >
              <option value="name">Name</option>
              <option value="jobs">Open Jobs</option>
              <option value="size">Company Size</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Stats Overview -->
      <div
        class="grid sm:grid-cols-3 gap-4 mb-6 fade-in-up"
        style="animation-delay: 150ms"
      >
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="mdi:office-building"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
            </div>
            <div>
              <p
                class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                {{ filteredCompanies.length }}
              </p>
              <p
                class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                Companies
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="mdi:briefcase"
                class="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors duration-300"
              />
            </div>
            <div>
              <p
                class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                {{ totalJobs }}
              </p>
              <p
                class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                Open Positions
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 transition-colors duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center transition-colors duration-300"
            >
              <Icon
                name="mdi:map-marker"
                class="w-6 h-6 text-purple-600 dark:text-purple-400 transition-colors duration-300"
              />
            </div>
            <div>
              <p
                class="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
              >
                {{ totalLocations }}
              </p>
              <p
                class="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                Locations
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Results Header -->
      <div
        class="flex items-center justify-between mb-6 fade-in-up"
        style="animation-delay: 200ms"
      >
        <p
          class="text-gray-900 dark:text-white font-semibold transition-colors duration-300"
        >
          Showing
          <span
            class="text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
            >{{ filteredCompanies.length }}</span
          >
          companies
        </p>
        <div
          class="flex gap-2 bg-gray-100 dark:bg-slate-700 p-1 rounded-lg transition-colors duration-300"
        >
          <button
            @click="viewMode = 'grid'"
            :class="
              viewMode === 'grid'
                ? 'bg-white dark:bg-slate-800 shadow-sm'
                : 'text-gray-600 dark:text-gray-400'
            "
            class="px-3 py-2 rounded-md transition-all duration-300"
          >
            <Icon name="mdi:view-grid" class="w-5 h-5" />
          </button>
          <button
            @click="viewMode = 'list'"
            :class="
              viewMode === 'list'
                ? 'bg-white dark:bg-slate-800 shadow-sm'
                : 'text-gray-600 dark:text-gray-400'
            "
            class="px-3 py-2 rounded-md transition-all duration-300"
          >
            <Icon name="mdi:view-list" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Companies Grid View -->
      <div
        v-if="viewMode === 'grid'"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <NuxtLink
          v-for="(company, index) in paginatedCompanies"
          :key="company.id"
          :to="`/companies/${company.id}`"
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in-up cursor-pointer"
          :style="`animation-delay: ${250 + index * 30}ms;`"
        >
          <div class="p-6">
            <!-- Company Logo & Header -->
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                {{ company.logo }}
              </div>
              <span
                v-if="company.featured"
                class="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors duration-300"
              >
                <Icon name="mdi:star" class="w-3 h-3" />
                Featured
              </span>
            </div>

            <!-- Company Info -->
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
            >
              {{ company.name }}
            </h3>
            <p
              class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors duration-300"
            >
              {{ company.description }}
            </p>

            <!-- Company Details -->
            <div class="space-y-2 mb-4">
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                <Icon
                  name="mdi:domain"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
                <span>{{ company.industry }}</span>
              </div>
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                <Icon
                  name="mdi:account-group"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
                <span>{{ company.size }}</span>
              </div>
              <div
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                <Icon
                  name="mdi:map-marker"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
                <span>{{ company.locations }} locations</span>
              </div>
            </div>

            <!-- Footer -->
            <div
              class="pt-4 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between transition-colors duration-300"
            >
              <div
                class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                <Icon name="mdi:briefcase-outline" class="w-4 h-4" />
                <span
                  class="font-semibold text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  >{{ company.openJobs }}</span
                >
                <span>open jobs</span>
              </div>
              <div
                class="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center gap-1 transition-colors duration-300"
              >
                View Profile
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Companies List View -->
      <div v-else class="space-y-4">
        <NuxtLink
          v-for="(company, index) in paginatedCompanies"
          :key="company.id"
          :to="`/companies/${company.id}`"
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in-up cursor-pointer"
          :style="`animation-delay: ${250 + index * 30}ms;`"
        >
          <div class="p-6">
            <div class="flex flex-col lg:flex-row gap-6">
              <!-- Logo -->
              <div
                class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                {{ company.logo }}
              </div>

              <!-- Main Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-4 mb-3">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <h3
                        class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                      >
                        {{ company.name }}
                      </h3>
                      <span
                        v-if="company.featured"
                        class="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors duration-300"
                      >
                        <Icon name="mdi:star" class="w-3 h-3" />
                        Featured
                      </span>
                    </div>
                    <p
                      class="text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300"
                    >
                      {{ company.description }}
                    </p>
                  </div>
                </div>

                <div
                  class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300"
                >
                  <div class="flex items-center gap-1">
                    <Icon
                      name="mdi:domain"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span>{{ company.industry }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon
                      name="mdi:account-group"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span>{{ company.size }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon
                      name="mdi:map-marker"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span>{{ company.locations }} locations</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon
                      name="mdi:calendar"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span>Founded {{ company.founded }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon
                      name="mdi:briefcase-outline"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span
                      class="font-semibold text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                      >{{ company.openJobs }}</span
                    >
                    <span>open jobs</span>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(benefit, idx) in company.benefits.slice(0, 4)"
                    :key="idx"
                    class="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-md text-xs font-medium transition-colors duration-300"
                  >
                    {{ benefit }}
                  </span>
                  <span
                    v-if="company.benefits.length > 4"
                    class="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium transition-colors duration-300"
                  >
                    +{{ company.benefits.length - 4 }} more
                  </span>
                </div>
              </div>

              <!-- Action Button -->
              <div
                class="flex lg:flex-col gap-2 lg:items-end lg:justify-between"
              >
                <button
                  class="flex-1 lg:flex-initial px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors whitespace-nowrap duration-300"
                >
                  View Company
                </button>
              </div>
            </div>
          </div>
        </NuxtLink>
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
            name="mdi:office-building"
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
          Try adjusting your search criteria
        </p>
        <button
          @click="clearFilters"
          class="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-300"
        >
          Clear Filters
        </button>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-8 flex justify-center fade-in-up">
        <vue-awesome-paginate
          :total-items="filteredCompanies.length"
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
import { ref, computed, watch } from "vue";

useSeoMeta({
  title: "Companies - FindPoint",
  description: "Explore leading companies and discover your perfect employer",
});

// Pagination state
const currentPage = ref(1);
const itemsPerPage = ref(9);

// State
const searchQuery = ref("");
const industryFilter = ref("");
const sortBy = ref("name");
const viewMode = ref<"grid" | "list">("grid");

// Mock companies data
const companies = ref([
  {
    id: 1,
    name: "TechCorp Innovations",
    logo: "TC",
    description:
      "Leading technology company specializing in cloud solutions and AI-powered enterprise software.",
    industry: "Technology",
    size: "1,000-5,000 employees",
    locations: 12,
    founded: 2015,
    openJobs: 24,
    featured: true,
    benefits: [
      "Health Insurance",
      "Remote Work",
      "401(k) Match",
      "Learning Budget",
      "Stock Options",
    ],
  },
  {
    id: 2,
    name: "Global Finance Group",
    logo: "GF",
    description:
      "International financial services company offering banking, investment, and wealth management.",
    industry: "Finance",
    size: "5,000-10,000 employees",
    locations: 25,
    founded: 2008,
    openJobs: 18,
    featured: true,
    benefits: [
      "Competitive Salary",
      "Bonus Structure",
      "Professional Development",
      "Flexible Hours",
    ],
  },
  {
    id: 3,
    name: "HealthTech Solutions",
    logo: "HS",
    description:
      "Healthcare technology provider developing innovative solutions for patient care and medical research.",
    industry: "Healthcare",
    size: "500-1,000 employees",
    locations: 8,
    founded: 2018,
    openJobs: 15,
    featured: false,
    benefits: [
      "Health Insurance",
      "Dental & Vision",
      "Parental Leave",
      "Wellness Programs",
    ],
  },
  {
    id: 4,
    name: "EduLearn Platform",
    logo: "EL",
    description:
      "Online education platform connecting students with expert instructors worldwide.",
    industry: "Education",
    size: "200-500 employees",
    locations: 5,
    founded: 2019,
    openJobs: 12,
    featured: false,
    benefits: [
      "Remote Work",
      "Learning Credits",
      "Flexible Schedule",
      "Team Retreats",
    ],
  },
  {
    id: 5,
    name: "RetailMax E-commerce",
    logo: "RM",
    description:
      "Leading online marketplace connecting buyers and sellers with millions of products.",
    industry: "E-commerce",
    size: "10,000+ employees",
    locations: 30,
    founded: 2012,
    openJobs: 42,
    featured: true,
    benefits: [
      "Employee Discount",
      "Stock Options",
      "Career Growth",
      "Gym Membership",
    ],
  },
  {
    id: 6,
    name: "CloudSpace Systems",
    logo: "CS",
    description:
      "Cloud infrastructure and DevOps solutions provider for modern businesses.",
    industry: "Technology",
    size: "500-1,000 employees",
    locations: 6,
    founded: 2017,
    openJobs: 21,
    featured: false,
    benefits: [
      "Remote First",
      "Unlimited PTO",
      "Home Office Setup",
      "Conference Budget",
    ],
  },
  {
    id: 7,
    name: "DataDrive Analytics",
    logo: "DD",
    description:
      "Big data analytics and business intelligence solutions for enterprise clients.",
    industry: "Technology",
    size: "200-500 employees",
    locations: 4,
    founded: 2020,
    openJobs: 9,
    featured: false,
    benefits: [
      "Competitive Salary",
      "Equity",
      "Learning Budget",
      "Flexible Hours",
    ],
  },
  {
    id: 8,
    name: "Manufacturing Pro",
    logo: "MP",
    description:
      "Advanced manufacturing solutions with focus on automation and sustainability.",
    industry: "Manufacturing",
    size: "1,000-5,000 employees",
    locations: 15,
    founded: 2010,
    openJobs: 16,
    featured: false,
    benefits: [
      "Health Benefits",
      "Retirement Plan",
      "Safety Programs",
      "Career Training",
    ],
  },
  {
    id: 9,
    name: "FinanceFlow",
    logo: "FF",
    description:
      "Fintech startup revolutionizing payment processing and digital banking.",
    industry: "Finance",
    size: "100-200 employees",
    locations: 3,
    founded: 2021,
    openJobs: 8,
    featured: true,
    benefits: [
      "Startup Equity",
      "Remote Work",
      "Modern Tech Stack",
      "Fast Growth",
    ],
  },
]);

// Computed
const filteredCompanies = computed(() => {
  let result = [...companies.value];

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.industry.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query),
    );
  }

  // Industry filter
  if (industryFilter.value) {
    result = result.filter((c) => c.industry === industryFilter.value);
  }

  // Sort
  result.sort((a, b) => {
    if (sortBy.value === "name") return a.name.localeCompare(b.name);
    if (sortBy.value === "jobs") return b.openJobs - a.openJobs;
    if (sortBy.value === "size") return b.locations - a.locations;
    return 0;
  });

  return result;
});

const totalJobs = computed(() =>
  companies.value.reduce((sum, c) => sum + c.openJobs, 0),
);
const totalLocations = computed(() =>
  companies.value.reduce((sum, c) => sum + c.locations, 0),
);

// Pagination computed
const totalPages = computed(() =>
  Math.ceil(filteredCompanies.value.length / itemsPerPage.value),
);

const paginatedCompanies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredCompanies.value.slice(start, end);
});

// Methods
const onPageChange = (page: number) => {
  currentPage.value = page;
  // Scroll to top of results
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const clearFilters = () => {
  searchQuery.value = "";
  industryFilter.value = "";
  sortBy.value = "name";
  currentPage.value = 1;
};

// Watch for filter changes and reset to page 1
watch(
  [searchQuery, industryFilter, sortBy],
  () => {
    currentPage.value = 1;
  },
  { deep: true },
);
</script>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(6px);
  animation: fadeUp 420ms ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

:deep(.dark .paginate-buttons) {
  border-color: #475569;
  background-color: #1e293b;
  color: #e2e8f0;
}

:deep(.paginate-buttons:hover:not(.active-page)) {
  background-color: #f3f4f6;
  border-color: #10b981;
}

:deep(.dark .paginate-buttons:hover:not(.active-page)) {
  background-color: #334155;
  border-color: #10b981;
}

:deep(.active-page) {
  background-color: #10b981;
  border-color: #10b981;
  color: white;
}

:deep(.dark .active-page) {
  background-color: #059669;
  border-color: #059669;
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
