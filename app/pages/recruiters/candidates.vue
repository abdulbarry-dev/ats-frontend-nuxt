<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8">
  <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
  <div class="mb-8 fade-in-up">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Candidates
            </h1>
            <p class="text-gray-600 dark:text-gray-400">
              Manage and review all your job applicants
            </p>
          </div>
          <div class="flex items-center gap-3">
            <button
              class="px-4 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Icon name="mdi:filter-variant" class="w-4 h-4" />
              Filters
            </button>
            <button
              class="px-4 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Icon name="mdi:download" class="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        <!-- Stats Overview -->
  <div class="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          <div
            class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow"
          >
            <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Total</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white">124</p>
          </div>
          <div
            class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow"
          >
            <p class="text-xs text-blue-600 dark:text-blue-400 mb-1">New</p>
            <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">28</p>
          </div>
          <div
            class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700 hover:shadow-md transition-shadow"
          >
            <p class="text-xs text-purple-600 dark:text-purple-400 mb-1">Reviewing</p>
            <p class="text-2xl font-bold text-purple-600 dark:text-purple-400">45</p>
          </div>
          <div
            class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700 hover:shadow-md transition-shadow"
          >
            <p class="text-xs text-orange-600 dark:text-orange-400 mb-1">Interview</p>
            <p class="text-2xl font-bold text-orange-600 dark:text-orange-400">32</p>
          </div>
          <div
            class="bg-white dark:bg-slate-800 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700 hover:shadow-md transition-shadow"
          >
            <p class="text-xs text-emerald-600 dark:text-emerald-400 mb-1">Shortlisted</p>
            <p class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">19</p>
          </div>
        </div>
      </div>

      <!-- Search and Filter Bar -->
      <div
        class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-4 mb-6 fade-in-up"
        style="animation-delay: 100ms"
      >
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Search -->
          <div class="flex-1 relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, or skills..."
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all outline-none bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
            />
          </div>

          <!-- Job Filter -->
          <select
            class="px-4 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all outline-none bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 cursor-pointer min-w-[180px]"
          >
            <option value="">All Positions</option>
            <option>Software Engineer</option>
            <option>Product Designer</option>
            <option>Data Scientist</option>
            <option>Marketing Manager</option>
          </select>

          <!-- Status Filter -->
          <select
            class="px-4 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-all outline-none bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 cursor-pointer min-w-[150px]"
          >
            <option value="">All Status</option>
            <option>New</option>
            <option>Reviewing</option>
            <option>Interview</option>
            <option>Shortlisted</option>
            <option>Rejected</option>
          </select>

          <!-- View Toggle -->
          <div class="flex gap-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
            <button class="px-3 py-2 bg-white dark:bg-slate-900 rounded-md shadow-sm">
              <Icon name="mdi:view-grid" class="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </button>
            <button
              class="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <Icon name="mdi:view-list" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Candidates Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div
          v-for="(candidate, index) in candidates"
          :key="index"
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in-up"
          :style="`animation-delay: ${150 + index * 50}ms;`"
        >
          <!-- Card Header with Background -->
          <div
            class="h-24 bg-gradient-to-r relative"
            :class="candidate.bgGradient"
          >
            <div class="absolute -bottom-12 left-6">
              <div
                class="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-br shadow-lg flex items-center justify-center text-white font-bold text-2xl overflow-hidden"
                :class="candidate.avatarGradient"
              >
                <img
                  v-if="candidate.avatar"
                  :src="candidate.avatar"
                  class="w-full h-full object-cover"
                />
                <span v-else>{{ candidate.initials }}</span>
              </div>
            </div>
            <!-- Rating Badge -->
            <div
              class="absolute top-4 right-4 bg-white dark:bg-slate-900 px-3 py-1 rounded-full shadow-md flex items-center gap-1"
            >
              <Icon name="mdi:star" class="w-4 h-4 text-yellow-500" />
              <span class="text-sm font-bold text-gray-900 dark:text-white">{{
                candidate.rating
              }}</span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="pt-14 px-6 pb-6">
            <!-- Name and Position -->
            <div class="mb-4">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 transition-colors"
              >
                {{ candidate.name }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ candidate.position }}</p>
              <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Icon name="mdi:map-marker" class="w-3.5 h-3.5" />
                <span>{{ candidate.location }}</span>
              </div>
            </div>

            <!-- Status Badge -->
            <div class="mb-4">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                :class="getStatusClass(candidate.status) + ' dark:' + getStatusClass(candidate.status).replace('bg-', 'bg-').replace('text-', 'text-').replace('-100', '-900').replace('-700', '-400')"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="getStatusDotClass(candidate.status)"
                ></span>
                {{ candidate.status }}
              </span>
            </div>

            <!-- Skills -->
            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, idx) in candidate.skills.slice(0, 3)"
                  :key="idx"
                  class="px-2.5 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-md text-xs font-medium"
                >
                  {{ skill }}
                </span>
                <span
                  v-if="candidate.skills.length > 3"
                  class="px-2.5 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium"
                >
                  +{{ candidate.skills.length - 3 }}
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div
              class="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-slate-700"
            >
              <div class="text-center">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Experience</p>
                <p class="text-sm font-bold text-gray-900 dark:text-white">
                  {{ candidate.experience }}
                </p>
              </div>
              <div class="text-center border-x border-gray-200 dark:border-slate-700">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Match</p>
                <p class="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {{ candidate.match }}%
                </p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-1">Applied</p>
                <p class="text-sm font-bold text-gray-900 dark:text-white">
                  {{ candidate.appliedDays }}d
                </p>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <Icon name="mdi:email-outline" class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <span class="truncate">{{ candidate.email }}</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <Icon name="mdi:phone-outline" class="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <span>{{ candidate.phone }}</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="grid grid-cols-2 gap-2">
              <button
                class="px-4 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 dark:hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="mdi:eye" class="w-4 h-4" />
                View
              </button>
              <button
                class="px-4 py-2.5 border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="mdi:message-outline" class="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="candidates.length === 0"
        class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-12 text-center fade-in-up"
      >
        <div
          class="w-20 h-20 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Icon name="mdi:account-search" class="w-10 h-10 text-gray-400 dark:text-gray-500" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
          No candidates found
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Try adjusting your filters or search criteria
        </p>
      </div>

      <!-- Pagination -->
      <div
        v-if="candidates.length > 0"
        class="mt-8 flex items-center justify-center gap-2 fade-in-up"
      >
        <button
          class="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon name="mdi:chevron-left" class="w-5 h-5" />
        </button>
        <button
          class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium dark:bg-emerald-700"
        >
          1
        </button>
        <button
          class="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
        >
          2
        </button>
        <button
          class="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
        >
          3
        </button>
        <button
          class="px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
        >
          <Icon name="mdi:chevron-right" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useSeoMeta } from 'nuxt/app';
import { ref, onMounted } from 'vue';

useSeoMeta({
  title: "Candidates - FindPoint",
  description: "Manage and review all your job applicants",
});

// Sample candidate data
const candidates = ref([
  {
    name: "Sarah Johnson",
    initials: "SJ",
    position: "Senior Software Engineer",
    location: "San Francisco, CA",
    status: "Interview",
    rating: 4.8,
    experience: "8 yrs",
    match: 95,
    appliedDays: 2,
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    skills: ["React", "TypeScript", "Node.js", "Python"],
    bgGradient: "from-blue-500 to-purple-500",
    avatarGradient: "from-blue-600 to-purple-600",
    avatar: null,
  },
  {
    name: "Michael Chen",
    initials: "MC",
    position: "Product Designer",
    location: "Remote",
    status: "Shortlisted",
    rating: 4.9,
    experience: "6 yrs",
    match: 92,
    appliedDays: 3,
    email: "michael.c@email.com",
    phone: "+1 (555) 234-5678",
    skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    bgGradient: "from-emerald-500 to-teal-500",
    avatarGradient: "from-emerald-600 to-teal-600",
    avatar: null,
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    position: "Data Scientist",
    location: "New York, NY",
    status: "Reviewing",
    rating: 4.7,
    experience: "5 yrs",
    match: 88,
    appliedDays: 5,
    email: "emily.r@email.com",
    phone: "+1 (555) 345-6789",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    bgGradient: "from-purple-500 to-pink-500",
    avatarGradient: "from-purple-600 to-pink-600",
    avatar: null,
  },
  {
    name: "David Park",
    initials: "DP",
    position: "Frontend Developer",
    location: "Austin, TX",
    status: "New",
    rating: 4.6,
    experience: "4 yrs",
    match: 85,
    appliedDays: 1,
    email: "david.p@email.com",
    phone: "+1 (555) 456-7890",
    skills: ["Vue.js", "Nuxt", "JavaScript", "CSS"],
    bgGradient: "from-orange-500 to-red-500",
    avatarGradient: "from-orange-600 to-red-600",
    avatar: null,
  },
  {
    name: "Jessica Williams",
    initials: "JW",
    position: "Marketing Manager",
    location: "Boston, MA",
    status: "Interview",
    rating: 4.8,
    experience: "7 yrs",
    match: 90,
    appliedDays: 4,
    email: "jessica.w@email.com",
    phone: "+1 (555) 567-8901",
    skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
    bgGradient: "from-pink-500 to-rose-500",
    avatarGradient: "from-pink-600 to-rose-600",
    avatar: null,
  },
  {
    name: "James Anderson",
    initials: "JA",
    position: "DevOps Engineer",
    location: "Seattle, WA",
    status: "Reviewing",
    rating: 4.5,
    experience: "6 yrs",
    match: 87,
    appliedDays: 6,
    email: "james.a@email.com",
    phone: "+1 (555) 678-9012",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    bgGradient: "from-cyan-500 to-blue-500",
    avatarGradient: "from-cyan-600 to-blue-600",
    avatar: null,
  },
  {
    name: "Sophia Lee",
    initials: "SL",
    position: "UX Researcher",
    location: "Chicago, IL",
    status: "New",
    rating: 4.7,
    experience: "5 yrs",
    match: 89,
    appliedDays: 1,
    email: "sophia.l@email.com",
    phone: "+1 (555) 789-0123",
    skills: [
      "User Research",
      "Usability Testing",
      "Data Analysis",
      "Wireframing",
    ],
    bgGradient: "from-indigo-500 to-purple-500",
    avatarGradient: "from-indigo-600 to-purple-600",
    avatar: null,
  },
  {
    name: "Robert Martinez",
    initials: "RM",
    position: "Backend Engineer",
    location: "Denver, CO",
    status: "Shortlisted",
    rating: 4.9,
    experience: "9 yrs",
    match: 94,
    appliedDays: 3,
    email: "robert.m@email.com",
    phone: "+1 (555) 890-1234",
    skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL"],
    bgGradient: "from-green-500 to-emerald-500",
    avatarGradient: "from-green-600 to-emerald-600",
    avatar: null,
  },
  {
    name: "Amanda Taylor",
    initials: "AT",
    position: "Product Manager",
    location: "Los Angeles, CA",
    status: "Interview",
    rating: 4.8,
    experience: "8 yrs",
    match: 93,
    appliedDays: 2,
    email: "amanda.t@email.com",
    phone: "+1 (555) 901-2345",
    skills: [
      "Agile",
      "Product Strategy",
      "Roadmapping",
      "Stakeholder Management",
    ],
    bgGradient: "from-yellow-500 to-orange-500",
    avatarGradient: "from-yellow-600 to-orange-600",
    avatar: null,
  },
]);

const getStatusClass = (status: string) => {
  const classes = {
    New: "bg-blue-100 text-blue-700",
    Reviewing: "bg-purple-100 text-purple-700",
    Interview: "bg-orange-100 text-orange-700",
    Shortlisted: "bg-emerald-100 text-emerald-700",
    Rejected: "bg-red-100 text-red-700",
  };
  return classes[status as keyof typeof classes] || "bg-gray-100 text-gray-700";
};

const getStatusDotClass = (status: string) => {
  const classes = {
    New: "bg-blue-500",
    Reviewing: "bg-purple-500",
    Interview: "bg-orange-500",
    Shortlisted: "bg-emerald-500",
    Rejected: "bg-red-500",
  };
  return classes[status as keyof typeof classes] || "bg-gray-500";
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
