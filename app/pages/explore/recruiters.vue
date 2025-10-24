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
            <Icon name="mdi:account-tie" class="w-7 h-7 text-white" />
          </div>
          <div>
            <h1
              class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            >
              Explore Recruiters
            </h1>
            <p
              class="text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              Connect with hiring professionals
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
                  placeholder="Name or company..."
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                />
                <Icon
                  name="mdi:magnify"
                  class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-300"
                />
              </div>
            </div>

            <!-- Company -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Company</label
              >
              <select
                v-model="filters.company"
                class="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
              >
                <option value="">All Companies</option>
                <option value="techcorp">TechCorp Solutions</option>
                <option value="digital">Digital Innovations</option>
                <option value="cloudspace">CloudSpace Systems</option>
                <option value="dataflow">DataFlow Analytics</option>
              </select>
            </div>

            <!-- Specialization -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Specialization</label
              >
              <div class="space-y-2">
                <label
                  v-for="spec in specializations"
                  :key="spec.value"
                  class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    :value="spec.value"
                    v-model="filters.specializations"
                    class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                  />
                  <span
                    class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                    >{{ spec.label }}</span
                  >
                </label>
              </div>
            </div>

            <!-- Experience -->
            <div class="mb-6">
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300"
                >Experience</label
              >
              <select
                v-model="filters.experience"
                class="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
              >
                <option value="">Any Experience</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
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

            <!-- Active Hiring -->
            <div>
              <label class="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  v-model="filters.activeHiring"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-500 border-gray-300 dark:border-slate-600 rounded focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                />
                <span
                  class="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300"
                  >Currently hiring</span
                >
              </label>
            </div>
          </div>
        </div>

        <!-- Recruiters Grid -->
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
                  {{ filteredRecruiters.length }}
                  {{
                    filteredRecruiters.length === 1 ? "Recruiter" : "Recruiters"
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
                  <option value="openings">Open Positions</option>
                  <option value="recent">Recently Active</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Recruiters List -->
          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(recruiter, index) in filteredRecruiters"
              :key="recruiter.id"
              class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md dark:hover:shadow-slate-900/80 transition-all duration-300 fade-in-up flex flex-col min-h-[360px]"
              :style="`animation-delay: ${300 + index * 50}ms;`"
            >
              <!-- Recruiter Header -->
              <div class="flex items-start gap-4 mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:account-tie"
                    class="w-8 h-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-lg font-bold text-gray-900 dark:text-white mb-1 truncate transition-colors duration-300"
                  >
                    {{ recruiter.name }}
                  </h3>
                  <p
                    class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                  >
                    {{ recruiter.title }}
                  </p>
                  <NuxtLink
                    :to="`/companies/${recruiter.companyId}`"
                    class="text-sm text-emerald-600 dark:text-emerald-400 hover:underline transition-colors duration-300"
                  >
                    {{ recruiter.company }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Bio -->
              <p
                class="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 transition-colors duration-300"
              >
                {{ recruiter.bio }}
              </p>

              <!-- Stats -->
              <div class="grid grid-cols-2 gap-3 mb-4">
                <div
                  class="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 transition-colors duration-300"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <Icon
                      name="mdi:briefcase"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span
                      class="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300"
                      >Experience</span
                    >
                  </div>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    {{ recruiter.experience }} years
                  </p>
                </div>
                <div
                  class="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 transition-colors duration-300"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <Icon
                      name="mdi:account-check"
                      class="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    />
                    <span
                      class="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300"
                      >Placements</span
                    >
                  </div>
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                  >
                    {{ recruiter.placements }}+
                  </p>
                </div>
              </div>

              <!-- Specializations -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="spec in recruiter.specializations.slice(0, 2)"
                  :key="spec"
                  class="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium transition-colors duration-300"
                >
                  {{ spec }}
                </span>
                <span
                  v-if="recruiter.specializations.length > 2"
                  class="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium transition-colors duration-300"
                >
                  +{{ recruiter.specializations.length - 2 }}
                </span>
              </div>

              <!-- Open Positions -->
              <div
                class="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg transition-colors duration-300"
              >
                <div
                  class="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-400 transition-colors duration-300"
                >
                  <Icon name="mdi:briefcase-clock" class="w-4 h-4" />
                  <span class="font-medium"
                    >{{ recruiter.openPositions }} open
                    {{
                      recruiter.openPositions === 1 ? "position" : "positions"
                    }}</span
                  >
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-2">
                <button
                  @click="viewProfile(recruiter)"
                  class="flex-1 px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 text-sm"
                >
                  View Profile
                </button>
                <button
                  class="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  <Icon name="mdi:message" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div
            v-if="filteredRecruiters.length === 0"
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-12 text-center fade-in-up transition-colors duration-300"
          >
            <div
              class="w-20 h-20 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
            >
              <Icon
                name="mdi:account-tie-outline"
                class="w-10 h-10 text-gray-400 dark:text-gray-500 transition-colors duration-300"
              />
            </div>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
            >
              No recruiters found
            </h3>
            <p
              class="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300"
            >
              Try adjusting your filters to see more results
            </p>
            <button
              @click="clearFilters"
              class="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>

          <!-- Load More -->
          <div
            v-if="hasMore && filteredRecruiters.length > 0"
            class="mt-6 text-center fade-in-up"
          >
            <button
              @click="loadMore"
              class="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
            >
              Load More Recruiters
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Explore Recruiters - FindPoint",
  description: "Connect with hiring professionals and recruiters on FindPoint",
});

// Use shared profile store
const { setProfile } = useProfileStore();

// Filters
const filters = ref({
  search: "",
  company: "",
  specializations: [] as string[],
  experience: "",
  location: "",
  activeHiring: false,
});

const sortBy = ref("name");
const hasMore = ref(false);

const specializations = [
  { value: "technology", label: "Technology" },
  { value: "engineering", label: "Engineering" },
  { value: "sales", label: "Sales & Marketing" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "executive", label: "Executive Search" },
];

// Mock recruiters data
const recruiters = ref([
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Technical Recruiter",
    company: "TechCorp Solutions",
    companyId: 1,
    bio: "Passionate about connecting top tech talent with innovative companies. Specializing in software engineering and data science roles with 8+ years of experience.",
    experience: 8,
    placements: 150,
    specializations: ["Technology", "Engineering", "Data Science"],
    location: "San Francisco, CA",
    openPositions: 12,
    activeHiring: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Lead Recruiter",
    company: "Digital Innovations",
    companyId: 2,
    bio: "Building diverse and talented teams in the digital space. Focus on product design, UX/UI, and creative roles across multiple industries.",
    experience: 6,
    placements: 120,
    specializations: ["Design", "Product", "Creative"],
    location: "New York, NY",
    openPositions: 8,
    activeHiring: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Talent Acquisition Manager",
    company: "CloudSpace Systems",
    companyId: 3,
    bio: "Expert in cloud infrastructure and DevOps hiring. Helping companies build world-class engineering teams with cutting-edge cloud expertise.",
    experience: 10,
    placements: 200,
    specializations: ["Cloud", "DevOps", "Infrastructure"],
    location: "Austin, TX",
    openPositions: 15,
    activeHiring: true,
  },
  {
    id: 4,
    name: "David Kim",
    title: "Financial Services Recruiter",
    company: "DataFlow Analytics",
    companyId: 4,
    bio: "Specialized in placing finance professionals in analytics and data-driven roles. Deep understanding of the financial services industry.",
    experience: 7,
    placements: 95,
    specializations: ["Finance", "Analytics", "Data"],
    location: "Chicago, IL",
    openPositions: 6,
    activeHiring: true,
  },
  {
    id: 5,
    name: "Jennifer Williams",
    title: "Healthcare Recruitment Specialist",
    company: "HealthTech Medical",
    companyId: 5,
    bio: "Connecting healthcare professionals with innovative medical technology companies. Focus on clinical and technical healthcare roles.",
    experience: 9,
    placements: 175,
    specializations: ["Healthcare", "Medical Tech", "Clinical"],
    location: "Boston, MA",
    openPositions: 10,
    activeHiring: true,
  },
  {
    id: 6,
    name: "Robert Taylor",
    title: "Executive Search Consultant",
    company: "Leadership Partners",
    companyId: 7,
    bio: "Executive search specialist helping organizations find C-level and senior leadership talent across multiple industries.",
    experience: 15,
    placements: 85,
    specializations: ["Executive", "Leadership", "C-Suite"],
    location: "Seattle, WA",
    openPositions: 0,
    activeHiring: false,
  },
]);

// Computed filtered recruiters
const filteredRecruiters = computed(() => {
  let result = [...recruiters.value];

  // Search filter
  if (filters.value.search) {
    result = result.filter(
      (r) =>
        r.name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
        r.company.toLowerCase().includes(filters.value.search.toLowerCase()),
    );
  }

  // Company filter
  if (filters.value.company) {
    result = result.filter((r) =>
      r.company.toLowerCase().includes(filters.value.company),
    );
  }

  // Specializations filter
  if (filters.value.specializations.length > 0) {
    result = result.filter((r) =>
      r.specializations.some((s) =>
        filters.value.specializations.includes(s.toLowerCase()),
      ),
    );
  }

  // Experience filter
  if (filters.value.experience) {
    let min = 0;
    let max = Infinity;

    if (filters.value.experience.includes("+")) {
      const parsed = parseInt(filters.value.experience, 10);
      min = Number.isNaN(parsed) ? 0 : parsed;
    } else {
      const parts = filters.value.experience.split("-");
      const parsedMin = parseInt(parts[0] ?? "0", 10);
      min = Number.isNaN(parsedMin) ? 0 : parsedMin;
      if (parts[1]) {
        const parsedMax = parseInt(parts[1], 10);
        max = Number.isNaN(parsedMax) ? Infinity : parsedMax;
      }
    }

    result = result.filter((r) => r.experience >= min && r.experience <= max);
  }

  // Location filter
  if (filters.value.location) {
    result = result.filter((r) =>
      r.location.toLowerCase().includes(filters.value.location.toLowerCase()),
    );
  }

  // Active hiring filter
  if (filters.value.activeHiring) {
    result = result.filter((r) => r.openPositions > 0);
  }

  // Sort
  if (sortBy.value === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === "experience") {
    result.sort((a, b) => b.experience - a.experience);
  } else if (sortBy.value === "openings") {
    result.sort((a, b) => b.openPositions - a.openPositions);
  }

  return result;
});

const clearFilters = () => {
  filters.value = {
    search: "",
    company: "",
    specializations: [],
    experience: "",
    location: "",
    activeHiring: false,
  };
};

const loadMore = () => {
  console.log("Load more recruiters");
};

const viewProfile = (recruiter: any) => {
  // Transform recruiter data to profile format
  const profileData = {
    id: recruiter.id.toString(),
    role: 'recruiter' as const,
    name: recruiter.name,
    title: recruiter.title,
    email: `${recruiter.name.toLowerCase().replace(' ', '.')}@findpoint.com`, // Mock email
    phone: '+1-555-0123', // Mock phone
    location: recruiter.location,
    yearsExperience: recruiter.experience,
    bio: recruiter.bio,
    company: recruiter.company,
    companyDescription: `${recruiter.company} is a leading recruiting firm specializing in connecting top talent with innovative companies. With over 10 years in the industry, we have successfully placed hundreds of candidates in diverse roles across various sectors.`,
    companyWebsite: 'https://www.' + recruiter.company.toLowerCase().replace(/\s+/g, '') + '.com',
    industries: recruiter.specializations, // Use specializations as industries
    specializations: recruiter.specializations.map((spec: string) => ({
      title: spec,
      description: `Experienced in recruiting for ${spec} roles, with extensive network and industry knowledge.`
    })),
    skills: ['Talent Sourcing', 'Candidate Screening', 'Interviewing', 'Negotiation', 'HR Systems'],
    languages: [
      { name: 'English', proficiency: 'Native' },
      { name: 'Spanish', proficiency: 'Conversational' }
    ],
    socialLinks: {
      linkedin: `https://linkedin.com/in/${recruiter.name.toLowerCase().replace(' ', '')}`,
      github: undefined,
      portfolio: undefined,
      twitter: `https://twitter.com/${recruiter.name.toLowerCase().replace(' ', '')}`
    },
    experience_details: [
      {
        position: recruiter.title,
        company: recruiter.company,
        period: `${recruiter.experience} years`,
        description: recruiter.bio,
        achievements: [`${recruiter.placements} successful placements`, `Specialized in ${recruiter.specializations.join(', ')}`, `Led ${recruiter.openPositions} active searches`]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Business Administration',
        school: 'State University',
        year: '2010 - 2014',
        description: 'Graduated with honors, focused on management and marketing.'
      }
    ],
    certifications: [
      {
        name: 'Certified Professional Recruiter',
        issuer: 'Recruiting Organization',
        year: '2020'
      }
    ],
    stats: {
      positionsFilled: recruiter.placements,
      activeSearches: recruiter.openPositions,
      successRate: Math.floor((recruiter.placements / (recruiter.placements + 5)) * 100) // Mock success rate calculation
    }
  };

  // Store profile data using shared store
  setProfile(recruiter.id.toString(), profileData);

  // Navigate to profile page
  navigateTo(`/profile/${recruiter.id}`);
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
