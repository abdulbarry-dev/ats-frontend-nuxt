<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-8 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Breadcrumb -->
      <nav class="mb-6 fade-in-up">
        <ol
          class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
        >
          <li>
            <NuxtLink
              to="/companies"
              class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >Companies</NuxtLink
            >
          </li>
          <li><Icon name="mdi:chevron-right" class="w-4 h-4" /></li>
          <li
            class="text-gray-900 dark:text-white font-medium transition-colors duration-300"
          >
            {{ company.name }}
          </li>
        </ol>
      </nav>

      <!-- Company Header -->
      <div
        class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 overflow-hidden mb-6 fade-in-up transition-colors duration-300"
        style="animation-delay: 100ms"
      >
        <!-- Cover Image -->
        <div
          class="h-48 bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-600 dark:to-emerald-800 transition-colors duration-300"
        ></div>

        <div class="p-8">
          <div class="flex flex-col lg:flex-row gap-6 -mt-24 lg:-mt-16">
            <!-- Company Logo -->
            <div
              class="w-32 h-32 bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-lg rounded-2xl flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 flex-shrink-0 transition-colors duration-300"
            >
              {{ company.logo }}
            </div>

            <!-- Company Info -->
            <div class="flex-1 lg:mt-16">
              <div
                class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4"
              >
                <div>
                  <div class="flex items-center gap-3 mb-2">
                    <h1
                      class="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                    >
                      {{ company.name }}
                    </h1>
                    <span
                      v-if="company.featured"
                      class="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors duration-300"
                    >
                      <Icon name="mdi:star" class="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                  <p
                    class="text-lg text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300"
                  >
                    {{ company.tagline }}
                  </p>
                </div>
                <button
                  class="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap duration-300"
                >
                  <Icon name="mdi:heart-outline" class="w-5 h-5" />
                  Follow Company
                </button>
              </div>

              <!-- Quick Stats -->
              <div class="flex flex-wrap gap-6 text-sm">
                <div
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:domain"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <span class="font-semibold">{{ company.industry }}</span>
                </div>
                <div
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:account-group"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <span class="font-semibold">{{ company.size }}</span>
                </div>
                <div
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:map-marker"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <span class="font-semibold">{{ company.headquarters }}</span>
                </div>
                <div
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:calendar"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <span class="font-semibold"
                    >Founded {{ company.founded }}</span
                  >
                </div>
                <div
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:web"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  <a
                    :href="company.website"
                    target="_blank"
                    class="font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >Visit Website</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- About -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 150ms"
          >
            <h2
              class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:information"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              About {{ company.name }}
            </h2>
            <div class="prose prose-gray max-w-none">
              <p
                class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300"
              >
                {{ company.description }}
              </p>
              <p
                class="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
              >
                {{ company.detailedDescription }}
              </p>
            </div>
          </div>

          <!-- Mission & Values -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 200ms"
          >
            <h2
              class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:target"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              Mission & Values
            </h2>
            <div class="space-y-4">
              <div>
                <h3
                  class="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                >
                  Our Mission
                </h3>
                <p
                  class="text-gray-700 dark:text-gray-300 transition-colors duration-300"
                >
                  {{ company.mission }}
                </p>
              </div>
              <div>
                <h3
                  class="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                >
                  Core Values
                </h3>
                <ul class="grid sm:grid-cols-2 gap-3">
                  <li
                    v-for="(value, idx) in company.values"
                    :key="idx"
                    class="flex items-center gap-2 text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    <Icon
                      name="mdi:check-circle"
                      class="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 transition-colors duration-300"
                    />
                    <span>{{ value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Open Positions -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 250ms"
          >
            <div class="flex items-center justify-between mb-6">
              <h2
                class="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 transition-colors duration-300"
              >
                <Icon
                  name="mdi:briefcase"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
                Open Positions
                <span
                  class="text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  >({{ company.jobs.length }})</span
                >
              </h2>
              <NuxtLink
                to="/jobs"
                class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm flex items-center gap-1 transition-colors duration-300"
              >
                View All Jobs
                <Icon name="mdi:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
            <div class="space-y-4">
              <div
                v-for="job in company.jobs"
                :key="job.id"
                class="border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all cursor-pointer duration-300"
              >
                <div class="flex items-start justify-between gap-4 mb-3">
                  <div class="flex-1">
                    <h3
                      class="font-bold text-gray-900 dark:text-white mb-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    >
                      {{ job.title }}
                    </h3>
                    <div
                      class="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
                    >
                      <span class="flex items-center gap-1">
                        <Icon name="mdi:map-marker" class="w-4 h-4" />
                        {{ job.location }}
                      </span>
                      <span class="flex items-center gap-1">
                        <Icon name="mdi:briefcase-outline" class="w-4 h-4" />
                        {{ job.type }}
                      </span>
                      <span class="flex items-center gap-1">
                        <Icon name="mdi:currency-usd" class="w-4 h-4" />
                        {{ job.salary }}
                      </span>
                    </div>
                  </div>
                  <NuxtLink
                    :to="`/jobs/${job.id}`"
                    class="px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors text-sm whitespace-nowrap duration-300"
                  >
                    Apply Now
                  </NuxtLink>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(skill, idx) in job.skills.slice(0, 5)"
                    :key="idx"
                    class="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded text-xs font-medium transition-colors duration-300"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Office Locations -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 300ms"
          >
            <h2
              class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:map-marker-multiple"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              Office Locations
            </h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="(location, idx) in company.officeLocations"
                :key="idx"
                class="border border-gray-200 dark:border-slate-700 rounded-lg p-4 transition-colors duration-300"
              >
                <h3
                  class="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:office-building"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                  {{ location.city }}
                </h3>
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                >
                  {{ location.address }}
                </p>
                <p
                  class="text-xs text-gray-500 dark:text-gray-500 transition-colors duration-300"
                >
                  {{ location.employees }} employees
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Company Stats -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 150ms"
          >
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            >
              Company Overview
            </h3>
            <div class="space-y-4">
              <div>
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                >
                  Company Size
                </p>
                <p
                  class="font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                >
                  {{ company.size }}
                </p>
              </div>
              <div
                class="border-t border-gray-200 dark:border-slate-700 pt-4 transition-colors duration-300"
              >
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                >
                  Industry
                </p>
                <p
                  class="font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                >
                  {{ company.industry }}
                </p>
              </div>
              <div
                class="border-t border-gray-200 dark:border-slate-700 pt-4 transition-colors duration-300"
              >
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                >
                  Headquarters
                </p>
                <p
                  class="font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                >
                  {{ company.headquarters }}
                </p>
              </div>
              <div
                class="border-t border-gray-200 dark:border-slate-700 pt-4 transition-colors duration-300"
              >
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                >
                  Founded
                </p>
                <p
                  class="font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                >
                  {{ company.founded }}
                </p>
              </div>
              <div
                class="border-t border-gray-200 dark:border-slate-700 pt-4 transition-colors duration-300"
              >
                <p
                  class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors duration-300"
                >
                  Open Positions
                </p>
                <p
                  class="font-semibold text-emerald-600 dark:text-emerald-400 text-xl transition-colors duration-300"
                >
                  {{ company.jobs.length }}
                </p>
              </div>
            </div>
          </div>

          <!-- Benefits & Perks -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 200ms"
          >
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:gift"
                class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              Benefits & Perks
            </h3>
            <div class="space-y-3">
              <div
                v-for="(benefit, idx) in company.benefits"
                :key="idx"
                class="flex items-start gap-3"
              >
                <div
                  class="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                >
                  <Icon
                    name="mdi:check"
                    class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <p
                    class="font-semibold text-gray-900 dark:text-white text-sm transition-colors duration-300"
                  >
                    {{ benefit.name }}
                  </p>
                  <p
                    class="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300"
                  >
                    {{ benefit.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 250ms"
          >
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300"
            >
              <Icon
                name="mdi:code-tags"
                class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              />
              Tech Stack
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, idx) in company.techStack"
                :key="idx"
                class="px-3 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Social Links -->
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:shadow-slate-900/50 border border-gray-200 dark:border-slate-700 p-6 fade-in-up transition-colors duration-300"
            style="animation-delay: 300ms"
          >
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            >
              Connect With Us
            </h3>
            <div class="space-y-3">
              <a
                v-for="(social, idx) in company.socialLinks"
                :key="idx"
                :href="social.url"
                target="_blank"
                class="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
                <span class="font-medium">{{ social.platform }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useSeoMeta } from "nuxt/app";  

const route = useRoute();
const companyId = route.params.id;

// Mock company data - In production, fetch from API
const company = ref({
  id: companyId,
  name: "TechCorp Innovations",
  logo: "TC",
  tagline: "Building the future of cloud technology",
  description:
    "Leading technology company specializing in cloud solutions and AI-powered enterprise software.",
  detailedDescription:
    "We are a forward-thinking technology company dedicated to transforming how businesses operate through innovative cloud solutions and artificial intelligence. Our team of world-class engineers and designers work together to create products that empower organizations to achieve more.",
  industry: "Technology",
  size: "1,000-5,000 employees",
  headquarters: "San Francisco, CA",
  founded: 2015,
  website: "https://techcorp.example.com",
  featured: true,
  mission:
    "To empower every organization on the planet to achieve more through innovative cloud technology and AI solutions.",
  values: [
    "Innovation First",
    "Customer Success",
    "Integrity & Trust",
    "Diversity & Inclusion",
    "Continuous Learning",
    "Sustainable Growth",
  ],
  benefits: [
    {
      name: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage",
    },
    {
      name: "Remote Work",
      description: "Flexible remote and hybrid work options",
    },
    {
      name: "401(k) Match",
      description: "Up to 6% company match on retirement savings",
    },
    {
      name: "Learning Budget",
      description: "$2,000 annual learning and development budget",
    },
    {
      name: "Stock Options",
      description: "Equity compensation for all employees",
    },
    { name: "Unlimited PTO", description: "Take time off when you need it" },
    { name: "Parental Leave", description: "16 weeks paid parental leave" },
    { name: "Gym Membership", description: "Free membership to local gyms" },
  ],
  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Redis",
    "GraphQL",
  ],
  jobs: [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$140k - $200k",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    },
    {
      id: 2,
      title: "Product Designer",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $170k",
      skills: [
        "Figma",
        "UI/UX",
        "Design Systems",
        "Prototyping",
        "User Research",
      ],
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Austin, TX / Remote",
      type: "Full-time",
      salary: "$130k - $180k",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    },
    {
      id: 4,
      title: "Machine Learning Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150k - $220k",
      skills: ["Python", "TensorFlow", "PyTorch", "ML Ops", "Data Engineering"],
    },
  ],
  officeLocations: [
    {
      city: "San Francisco, CA",
      address: "123 Market Street, San Francisco, CA 94105",
      employees: "500+",
    },
    {
      city: "Austin, TX",
      address: "456 Congress Ave, Austin, TX 78701",
      employees: "200+",
    },
    {
      city: "New York, NY",
      address: "789 Broadway, New York, NY 10003",
      employees: "300+",
    },
    {
      city: "London, UK",
      address: "321 Oxford Street, London, UK W1D 2HG",
      employees: "150+",
    },
  ],
  socialLinks: [
    { platform: "LinkedIn", icon: "mdi:linkedin", url: "https://linkedin.com" },
    { platform: "Twitter", icon: "mdi:twitter", url: "https://twitter.com" },
    { platform: "GitHub", icon: "mdi:github", url: "https://github.com" },
    { platform: "Facebook", icon: "mdi:facebook", url: "https://facebook.com" },
    {
      platform: "Instagram",
      icon: "mdi:instagram",
      url: "https://instagram.com",
    },
  ],
});

useSeoMeta({
  title: `${company.value.name} - Company Profile | FindPoint`,
  description: company.value.description,
});
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

.prose {
  max-width: 100%;
}
</style>
