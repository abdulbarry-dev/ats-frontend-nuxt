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
            <Icon name="mdi:account-group" class="w-7 h-7 text-white" />
          </div>
          <div>
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            >
              Explore Candidates
            </h1>
            <p
              class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              Discover talented professionals
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
                  placeholder="Name or title..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                />
                <Icon
                  name="mdi:magnify"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-300"
                />
              </div>
            </div>

            <!-- Job Title -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Job Title</label
              >
              <select
                v-model="filters.jobTitle"
                class="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
              >
                <option value="">All Titles</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="engineer">Engineer</option>
                <option value="analyst">Analyst</option>
              </select>
            </div>

            <!-- Skills -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Skills</label
              >
              <div class="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                <label
                  v-for="skill in skillsList"
                  :key="skill.value"
                  class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    :value="skill.value"
                    v-model="filters.skills"
                    class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                  />
                  <span
                    class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                    >{{ skill.label }}</span
                  >
                </label>
              </div>
            </div>

            <!-- Experience Level -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Experience Level</label
              >
              <div class="space-y-2">
                <label
                  v-for="level in experienceLevels"
                  :key="level.value"
                  class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    :value="level.value"
                    v-model="filters.experienceLevel"
                    class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                  />
                  <span
                    class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                    >{{ level.label }}</span
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

            <!-- Availability -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Availability</label
              >
              <select
                v-model="filters.availability"
                class="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
              >
                <option value="">Any</option>
                <option value="immediate">Immediate</option>
                <option value="2weeks">2 weeks</option>
                <option value="1month">1 month</option>
                <option value="negotiable">Negotiable</option>
              </select>
            </div>

            <!-- Remote Preference -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="filters.remoteOnly"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                />
                <span
                  class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  >Open to remote work</span
                >
              </label>
            </div>

            <!-- Open to Relocation -->
            <div>
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="filters.openToRelocation"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                />
                <span
                  class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  >Open to relocation</span
                >
              </label>
            </div>
          </div>
        </div>

        <!-- Candidates Grid -->
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
                  {{ filteredCandidates.length }}
                  {{
                    filteredCandidates.length === 1 ? "Candidate" : "Candidates"
                  }}
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
                  <option value="experience">Experience</option>
                  <option value="match">Best Match</option>
                  <option value="recent">Recently Updated</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Candidates Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(candidate, index) in filteredCandidates"
              :key="candidate.id"
              class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md dark:hover:shadow-slate-900/80 transition-all duration-300 fade-in-up flex flex-col"
              :style="`animation-delay: ${300 + index * 50}ms;`"
            >
              <!-- Candidate Header -->
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:account"
                    class="w-8 h-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                </div>
                <div class="flex-1">
                  <h3
                    class="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300"
                  >
                    {{ candidate.name }}
                  </h3>
                  <p
                    class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300"
                  >
                    {{ candidate.title }}
                  </p>
                  <div
                    class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300"
                  >
                    <Icon name="mdi:map-marker" class="w-3 h-3" />
                    <span>{{ candidate.location }}</span>
                  </div>
                </div>
                <button
                  class="p-2 text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-purple-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300 flex-shrink-0"
                >
                  <Icon name="mdi:bookmark-outline" class="w-5 h-5" />
                </button>
              </div>

              <!-- Summary -->
              <p
                class="text-sm text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300 leading-relaxed"
              >
                {{ candidate.summary }}
              </p>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-2 mb-4">
                <div
                  class="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 text-center transition-colors duration-300"
                >
                  <p
                    class="text-xs text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300 font-medium"
                  >
                    Experience
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    {{ candidate.experience }} year{{ candidate.experience === 1 ? '' : 's' }}
                  </p>
                </div>
                <div
                  class="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 text-center transition-colors duration-300"
                >
                  <p
                    class="text-xs text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300 font-medium"
                  >
                    Projects
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    {{ candidate.projects }}
                  </p>
                </div>
                <div
                  class="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 text-center transition-colors duration-300"
                >
                  <p
                    class="text-xs text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300 font-medium"
                  >
                    Level
                  </p>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    {{ candidate.level }}
                  </p>
                </div>
              </div>

              <!-- Skills -->
              <div class="mb-4">
                <p
                  class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300"
                >
                  Skills:
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in candidate.skills"
                    :key="skill"
                    class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium transition-colors duration-300"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <!-- Availability Badge -->
              <div
                class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 w-fit"
                :class="
                  candidate.available
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
                "
              >
                <Icon
                  :name="candidate.available ? 'mdi:check-circle' : 'mdi:clock'"
                  class="w-4 h-4"
                />
                <span>{{ candidate.availability }}</span>
              </div>

              <!-- Preferences -->
              <div
                class="flex flex-wrap gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
              >
                <div
                  v-if="candidate.remotePreference"
                  class="flex items-center gap-1"
                >
                  <Icon
                    name="mdi:home-outline"
                    class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <span>Remote Work</span>
                </div>
                <div
                  v-if="candidate.openToRelocation"
                  class="flex items-center gap-1"
                >
                  <Icon
                    name="mdi:airplane"
                    class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <span>Open to Relocate</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-3 mt-auto">
                <button
                  @click="viewProfile(candidate)"
                  class="flex-1 px-4 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 text-sm shadow-sm hover:shadow-md"
                >
                  View Profile
                </button>
                <button
                  class="px-4 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Icon name="mdi:message" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredCandidates.length === 0"
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-12 text-center fade-in-up transition-colors duration-300"
          >
            <div
              class="w-20 h-20 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
            >
              <Icon
                name="mdi:account-group-outline"
                class="w-10 h-10 text-gray-400 dark:text-gray-500 transition-colors duration-300"
              />
            </div>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
            >
              No candidates found
            </h3>
            <p
              class="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300"
            >
              Try adjusting your filters to see more results
            </p>
            <button
              @click="clearFilters"
              class="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-emerald-600 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>

          <!-- Load More -->
          <div
            v-if="hasMore && filteredCandidates.length > 0"
            class="mt-6 text-center fade-in-up"
          >
            <button
              @click="loadMore"
              class="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
            >
              Load More Candidates
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Explore Candidates - FindPoint",
  description: "Discover talented professionals and candidates on FindPoint",
});

// Filters
const filters = ref({
  search: "",
  jobTitle: "",
  skills: [] as string[],
  experienceLevel: "",
  location: "",
  availability: "",
  remoteOnly: false,
  openToRelocation: false,
});

const sortBy = ref("name");
const hasMore = ref(false);

const skillsList = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "react", label: "React" },
  { value: "nodejs", label: "Node.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "vue", label: "Vue.js" },
  { value: "aws", label: "AWS" },
  { value: "docker", label: "Docker" },
  { value: "sql", label: "SQL" },
  { value: "mongodb", label: "MongoDB" },
];

const experienceLevels = [
  { value: "", label: "All Levels" },
  { value: "entry", label: "Entry Level" },
  { value: "mid", label: "Mid Level" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Lead" },
];

// Mock candidates data
const candidates = ref([
  {
    id: 1,
    name: "Alex Thompson",
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    summary:
      "Passionate full-stack developer with expertise in modern web technologies. Built scalable applications for Fortune 500 companies.",
    experience: 8,
    projects: 45,
    level: "Senior",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "AWS", "Docker"],
    available: true,
    availability: "Available immediately",
    remotePreference: true,
    openToRelocation: false,
  },
  {
    id: 2,
    name: "Jessica Martinez",
    title: "Product Designer",
    location: "New York, NY",
    summary:
      "Creative product designer focused on user-centered design. Experience in designing mobile and web applications from concept to launch.",
    experience: 6,
    projects: 32,
    level: "Mid",
    skills: [
      "Figma",
      "UI/UX",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
    available: true,
    availability: "2 weeks notice",
    remotePreference: true,
    openToRelocation: true,
  },
  {
    id: 3,
    name: "Ryan Foster",
    title: "DevOps Engineer",
    location: "Austin, TX",
    summary:
      "DevOps specialist with strong background in cloud infrastructure and automation. Helped companies scale from startup to enterprise.",
    experience: 7,
    projects: 28,
    level: "Senior",
    skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform", "Python"],
    available: false,
    availability: "1 month notice",
    remotePreference: true,
    openToRelocation: false,
  },
  {
    id: 4,
    name: "Sophia Lee",
    title: "Data Scientist",
    location: "Seattle, WA",
    summary:
      "Data scientist with expertise in machine learning and predictive analytics. Published researcher with multiple papers in AI conferences.",
    experience: 5,
    projects: 18,
    level: "Mid",
    skills: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "SQL",
      "R",
      "Statistics",
    ],
    available: true,
    availability: "Negotiable",
    remotePreference: false,
    openToRelocation: true,
  },
  {
    id: 5,
    name: "Marcus Johnson",
    title: "Frontend Engineer",
    location: "Boston, MA",
    summary:
      "Frontend specialist creating beautiful and performant user interfaces. Strong focus on accessibility and web performance optimization.",
    experience: 4,
    projects: 25,
    level: "Mid",
    skills: ["React", "Vue.js", "JavaScript", "CSS", "TypeScript", "Webpack"],
    available: true,
    availability: "Available immediately",
    remotePreference: true,
    openToRelocation: false,
  },
  {
    id: 6,
    name: "Emily Chen",
    title: "Mobile Developer",
    location: "Los Angeles, CA",
    summary:
      "Experienced mobile developer building native and cross-platform applications. Published over 10 apps with millions of downloads.",
    experience: 6,
    projects: 35,
    level: "Senior",
    skills: ["React Native", "iOS", "Android", "Swift", "Kotlin", "Flutter"],
    available: false,
    availability: "2 weeks notice",
    remotePreference: true,
    openToRelocation: true,
  },
]);

// Computed filtered candidates
const filteredCandidates = computed(() => {
  let result = [...candidates.value];

  // Search filter
  if (filters.value.search) {
    result = result.filter(
      (c) =>
        c.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
        c.title.toLowerCase().includes(filters.value.search.toLowerCase()),
    );
  }

  // Job title filter
  if (filters.value.jobTitle) {
    result = result.filter((c) =>
      c.title.toLowerCase().includes(filters.value.jobTitle.toLowerCase()),
    );
  }

  // Skills filter
  if (filters.value.skills.length > 0) {
    result = result.filter((c) =>
      c.skills.some((s) => filters.value.skills.includes(s.toLowerCase())),
    );
  }

  // Experience level filter
  if (filters.value.experienceLevel) {
    result = result.filter(
      (c) => c.level.toLowerCase() === filters.value.experienceLevel,
    );
  }

  // Location filter
  if (filters.value.location) {
    result = result.filter((c) =>
      c.location.toLowerCase().includes(filters.value.location.toLowerCase()),
    );
  }

  // Availability filter
  if (filters.value.availability) {
    result = result.filter((c) =>
      c.availability
        .toLowerCase()
        .includes(filters.value.availability.toLowerCase()),
    );
  }

  // Remote preference filter
  if (filters.value.remoteOnly) {
    result = result.filter((c) => c.remotePreference);
  }

  // Open to relocation filter
  if (filters.value.openToRelocation) {
    result = result.filter((c) => c.openToRelocation);
  }

  // Sort
  if (sortBy.value === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === "experience") {
    result.sort((a, b) => b.experience - a.experience);
  }

  return result;
});

const clearFilters = () => {
  filters.value = {
    search: "",
    jobTitle: "",
    skills: [],
    experienceLevel: "",
    location: "",
    availability: "",
    remoteOnly: false,
    openToRelocation: false,
  };
};

const loadMore = () => {
  console.log("Load more candidates");
};

// Use shared profile store
const { setProfile } = useProfileStore();

const viewProfile = (candidate: any) => {
  // Transform candidate data to profile format
  const profileData = {
    id: candidate.id.toString(),
    role: 'candidate' as const,
    name: candidate.name,
    title: candidate.title,
    email: `${candidate.name.toLowerCase().replace(' ', '.')}@findpoint.com`, // Mock email
    phone: '+1-555-0123', // Mock phone
    location: candidate.location,
    experience: candidate.experience,
    bio: candidate.summary,
    company: 'TechCorp Inc.', // Mock company for candidates
    skills: candidate.skills,
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Conversational' }
    ],
    socialLinks: {
      linkedin: `https://linkedin.com/in/${candidate.name.toLowerCase().replace(' ', '')}`,
      github: `https://github.com/${candidate.name.toLowerCase().replace(' ', '')}`,
      portfolio: candidate.title.toLowerCase().includes('designer') ? 'https://portfolio.example.com' : undefined
    },
    experience_details: [
      {
        position: candidate.title,
        company: 'TechCorp Inc.',
        period: `2020 - Present (${candidate.experience} years)`,
        description: `Led development of multiple projects including cutting-edge technologies. Collaborated with cross-functional teams to deliver high-quality solutions.`,
        achievements: ['Increased performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline']
      },
      {
        position: 'Previous Position',
        company: 'StartupXYZ',
        period: '2018 - 2020 (2 years)',
        description: 'Developed scalable web applications using modern frameworks. Worked closely with product managers and designers to deliver user-centric solutions.',
        achievements: ['Reduced load times by 50%', 'Implemented responsive design', 'Built reusable component library']
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        school: 'State University',
        year: '2014 - 2018',
        description: 'Graduated with honors, focused on software engineering and algorithms.'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023'
      },
      {
        name: 'Certified Scrum Master',
        issuer: 'Scrum Alliance',
        year: '2022'
      }
    ],
    stats: {
      views: Math.floor(Math.random() * 500) + 50,
      applications: candidate.projects,
      interviews: Math.floor(candidate.projects * 0.3)
    }
  };

  // Store profile data using shared store
  setProfile(candidate.id.toString(), profileData);

  // Navigate to profile page
  navigateTo(`/profile/${candidate.id}`);
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
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #475569;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
</style>
