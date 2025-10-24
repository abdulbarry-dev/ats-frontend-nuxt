<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <!-- Profile Header -->
    <div
      class="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 text-white transition-colors duration-300"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          class="flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <!-- Avatar Section -->
          <div class="relative">
            <div
              class="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm border-4 border-white/20 overflow-hidden shadow-2xl"
            >
              <img
                v-if="profile.avatar"
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600"
              >
                <Icon name="mdi:account" class="w-20 h-20 text-white" />
              </div>
            </div>
            <div
              class="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg"
            >
              <Icon name="mdi:check-bold" class="w-5 h-5 text-white" />
            </div>
          </div>

          <!-- Profile Info -->
          <div class="flex-1">
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3"
            >
              <div>
                <h1 class="text-3xl sm:text-4xl font-bold mb-2">
                  {{ profile.name }}
                </h1>
                <p class="text-emerald-100 text-lg">{{ profile.title }}</p>
              </div>
              <NuxtLink
                to="/candidates/profile/edit"
                class="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Icon name="mdi:pencil" class="w-5 h-5" />
                Edit Profile
              </NuxtLink>
            </div>

            <!-- Quick Stats -->
            <div class="flex flex-wrap gap-4 text-sm">
              <div
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:map-marker" class="w-4 h-4" />
                <span>{{ profile.location }}</span>
              </div>
              <div
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:briefcase" class="w-4 h-4" />
                <span>{{ profile.experience }} years experience</span>
              </div>
              <div
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:email" class="w-4 h-4" />
                <span>{{ profile.email }}</span>
              </div>
              <div
                v-if="profile.phone"
                class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <Icon name="mdi:phone" class="w-4 h-4" />
                <span>{{ profile.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column - Main Info -->
        <div class="lg:col-span-2 space-y-6">
          <!-- About Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:account-details"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
            </div>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ profile.bio }}
            </p>
          </div>

          <!-- Experience Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:briefcase"
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>
            <div class="space-y-6">
              <div
                v-for="(exp, index) in profile.experience_details"
                :key="index"
                class="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-slate-600 last:border-0 last:pb-0"
              >
                <div
                  class="absolute -left-2 top-0 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white dark:border-slate-800"
                ></div>
                <div
                  class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2"
                >
                  <div>
                    <h3 class="font-bold text-gray-900 dark:text-white text-lg">
                      {{ exp.position }}
                    </h3>
                    <p
                      class="text-emerald-600 dark:text-emerald-400 font-medium"
                    >
                      {{ exp.company }}
                    </p>
                  </div>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {{ exp.period }}
                  </span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {{ exp.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="achievement in exp.achievements"
                    :key="achievement"
                    class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full font-medium"
                  >
                    {{ achievement }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:school"
                  class="w-6 h-6 text-purple-600 dark:text-purple-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div class="space-y-6">
              <div
                v-for="(edu, index) in profile.education"
                :key="index"
                class="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-slate-600 last:border-0 last:pb-0"
              >
                <div
                  class="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-white dark:border-slate-800"
                ></div>
                <div
                  class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2"
                >
                  <div>
                    <h3 class="font-bold text-gray-900 dark:text-white">
                      {{ edu.degree }}
                    </h3>
                    <p class="text-purple-600 dark:text-purple-400 font-medium">
                      {{ edu.school }}
                    </p>
                  </div>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {{ edu.year }}
                  </span>
                </div>
                <p
                  v-if="edu.description"
                  class="text-gray-600 dark:text-gray-400 text-sm"
                >
                  {{ edu.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Certifications Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:certificate"
                  class="w-6 h-6 text-orange-600 dark:text-orange-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h2>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="cert in profile.certifications"
                :key="cert.name"
                class="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white dark:from-slate-700/50 dark:to-slate-700/30 rounded-xl border border-gray-100 dark:border-slate-600 hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-sm transition-all duration-300"
              >
                <Icon
                  name="mdi:medal"
                  class="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4
                    class="font-semibold text-gray-900 dark:text-white text-sm"
                  >
                    {{ cert.name }}
                  </h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ cert.issuer }} • {{ cert.year }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="space-y-6">
          <!-- Skills Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:star"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Skills
              </h2>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in profile.skills"
                :key="skill.name"
                class="px-4 py-2 bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-900/30 dark:to-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-lg font-medium text-sm hover:from-emerald-100 hover:to-emerald-200/50 dark:hover:from-emerald-900/40 dark:hover:to-emerald-900/30 transition-all duration-300 border border-emerald-200 dark:border-emerald-800"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>

          <!-- Languages Section -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:translate"
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Languages
              </h2>
            </div>
            <div class="space-y-3">
              <div
                v-for="lang in profile.languages"
                :key="lang.name"
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <span class="font-medium text-gray-700 dark:text-gray-300">{{
                  lang.name
                }}</span>
                <span
                  class="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
                >
                  {{ lang.proficiency }}
                </span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:link-variant"
                  class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Social Links
              </h2>
            </div>
            <div class="space-y-3">
              <a
                v-if="profile.socialLinks.linkedin"
                :href="profile.socialLinks.linkedin"
                target="_blank"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-900/20 rounded-lg hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-blue-900/40 dark:hover:to-blue-900/30 transition-all duration-300 group"
              >
                <Icon
                  name="mdi:linkedin"
                  class="w-5 h-5 text-blue-600 dark:text-blue-400"
                />
                <span
                  class="text-sm font-medium text-blue-900 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-blue-200"
                  >LinkedIn</span
                >
                <Icon
                  name="mdi:open-in-new"
                  class="w-4 h-4 text-blue-600 dark:text-blue-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                v-if="profile.socialLinks.github"
                :href="profile.socialLinks.github"
                target="_blank"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-slate-700/50 dark:to-slate-700/30 rounded-lg hover:from-gray-100 hover:to-gray-200/50 dark:hover:from-slate-700 dark:hover:to-slate-600/50 transition-all duration-300 group"
              >
                <Icon
                  name="mdi:github"
                  class="w-5 h-5 text-gray-700 dark:text-gray-300"
                />
                <span
                  class="text-sm font-medium text-gray-900 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200"
                  >GitHub</span
                >
                <Icon
                  name="mdi:open-in-new"
                  class="w-4 h-4 text-gray-600 dark:text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                v-if="profile.socialLinks.portfolio"
                :href="profile.socialLinks.portfolio"
                target="_blank"
                class="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-emerald-100/50 dark:from-emerald-900/30 dark:to-emerald-900/20 rounded-lg hover:from-emerald-100 hover:to-emerald-200/50 dark:hover:from-emerald-900/40 dark:hover:to-emerald-900/30 transition-all duration-300 group"
              >
                <Icon
                  name="mdi:web"
                  class="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                />
                <span
                  class="text-sm font-medium text-emerald-900 dark:text-emerald-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-200"
                  >Portfolio</span
                >
                <Icon
                  name="mdi:open-in-new"
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          <!-- Profile Stats -->
          <div
            class="bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 rounded-2xl shadow-lg p-6 text-white transition-colors duration-300"
          >
            <h3 class="font-bold text-lg mb-4">Profile Stats</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="mdi:eye" class="w-5 h-5" />
                  <span class="text-sm">Profile Views</span>
                </div>
                <span class="font-bold text-xl">{{ profile.stats.views }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="mdi:file-document" class="w-5 h-5" />
                  <span class="text-sm">Applications</span>
                </div>
                <span class="font-bold text-xl">{{
                  profile.stats.applications
                }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Icon name="mdi:account-check" class="w-5 h-5" />
                  <span class="text-sm">Interviews</span>
                </div>
                <span class="font-bold text-xl">{{
                  profile.stats.interviews
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mock candidate profile data
const profile = ref({
  name: "Sarah Johnson",
  title: "Senior Full Stack Developer",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  experience: 5,
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Strong advocate for clean code, test-driven development, and agile methodologies. Love solving complex problems and creating intuitive user experiences.",

  experience_details: [
    {
      position: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Leading development of enterprise-level applications using React, Node.js, and AWS. Managing a team of 5 developers and implementing CI/CD pipelines.",
      achievements: [
        "Led migration to microservices",
        "Improved performance by 40%",
        "Mentored 5 junior developers",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple web applications using modern JavaScript frameworks. Collaborated with designers and product managers to deliver high-quality features.",
      achievements: [
        "Built 3 major features",
        "Reduced load time by 50%",
        "Implemented responsive design",
      ],
    },
    {
      position: "Junior Developer",
      company: "WebSolutions Ltd.",
      period: "2018 - 2019",
      description:
        "Started career developing frontend applications with React and Vue.js. Learned best practices and modern development workflows.",
      achievements: [
        "Completed 20+ projects",
        "Learned TDD",
        "Achieved 95% code coverage",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      year: "2014 - 2018",
      description:
        "Graduated with honors. Focused on software engineering and web technologies.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "General Assembly",
      year: "2018",
      description:
        "Intensive 12-week program covering modern web development stack.",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon",
      year: "2023",
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      year: "2022",
    },
    {
      name: "Node.js Application Development",
      issuer: "Linux Foundation",
      year: "2021",
    },
    { name: "Agile & Scrum Master", issuer: "Scrum Alliance", year: "2020" },
  ],

  skills: [
    { name: "JavaScript/TypeScript" },
    { name: "React & Vue.js" },
    { name: "Node.js & Express" },
    { name: "Python & Django" },
    { name: "AWS & Cloud Services" },
    { name: "MongoDB & PostgreSQL" },
    { name: "Docker & Kubernetes" },
    { name: "GraphQL & REST APIs" },
  ],

  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Fluent" },
    { name: "French", proficiency: "Intermediate" },
  ],

  socialLinks: {
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    portfolio: "https://sarahjohnson.dev",
  },

  stats: {
    views: 1247,
    applications: 23,
    interviews: 8,
  },
});

// SEO
useHead({
  title: "My Profile - FindPoint",
  meta: [
    {
      name: "description",
      content: "View and manage your candidate profile on FindPoint",
    },
  ],
});
</script>

<style scoped>
/* Smooth animations */
.hover\:shadow-md {
  transition: box-shadow 0.3s ease;
}

/* Skill bar animation on mount */
@keyframes fillBar {
  from {
    width: 0;
  }
}
</style>
