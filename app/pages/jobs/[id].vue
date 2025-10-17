<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Back Button -->
      <div class="mb-6 fade-in-up">
        <NuxtLink to="/jobs" class="inline-flex items-center text-gray-600 hover:text-emerald-600 transition-colors gap-2">
          <Icon name="mdi:arrow-left" class="w-5 h-5" />
          <span class="font-medium">Back to Jobs</span>
        </NuxtLink>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Job Header -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 100ms;">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                {{ job.companyInitial }}
              </div>
              <div class="flex-1 min-w-0">
                <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ job.title }}</h1>
                <p class="text-lg text-gray-600 mb-3">{{ job.company }}</p>
                <div class="flex flex-wrap gap-3">
                  <span class="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                    {{ job.type }}
                  </span>
                  <span class="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {{ job.experience }}
                  </span>
                  <span class="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {{ job.workLocation }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Quick Info -->
            <div class="grid sm:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Icon name="mdi:map-marker" class="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">Location</p>
                  <p class="text-sm font-semibold text-gray-900">{{ job.location }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="mdi:currency-usd" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">Salary</p>
                  <p class="text-sm font-semibold text-gray-900">{{ job.salary }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="mdi:clock-outline" class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">Posted</p>
                  <p class="text-sm font-semibold text-gray-900">{{ job.postedDate }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Job Description -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 200ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:text-box" class="w-6 h-6 text-emerald-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">Job Description</h2>
            </div>
            <div class="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p>{{ job.description }}</p>
              <p>We are looking for a talented professional to join our growing team. This role offers an exciting opportunity to work on cutting-edge projects and make a real impact.</p>
            </div>
          </div>

          <!-- Responsibilities -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 250ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:clipboard-list" class="w-6 h-6 text-blue-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">Responsibilities</h2>
            </div>
            <ul class="space-y-3">
              <li v-for="(responsibility, index) in job.responsibilities" :key="index" class="flex items-start gap-3 text-gray-600">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{{ responsibility }}</span>
              </li>
            </ul>
          </div>

          <!-- Requirements -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 300ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:list-box" class="w-6 h-6 text-purple-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">Requirements</h2>
            </div>
            <ul class="space-y-3">
              <li v-for="(requirement, index) in job.requirements" :key="index" class="flex items-start gap-3 text-gray-600">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{{ requirement }}</span>
              </li>
            </ul>
          </div>

          <!-- Nice to Have -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 350ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:star" class="w-6 h-6 text-orange-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">Nice to Have</h2>
            </div>
            <ul class="space-y-3">
              <li v-for="(item, index) in job.niceToHave" :key="index" class="flex items-start gap-3 text-gray-600">
                <Icon name="mdi:plus-circle-outline" class="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Benefits -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 400ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:gift" class="w-6 h-6 text-green-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">Benefits & Perks</h2>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div v-for="(benefit, index) in job.benefits" :key="index" class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-green-600 flex-shrink-0" />
                <span class="text-sm text-gray-700 font-medium">{{ benefit }}</span>
              </div>
            </div>
          </div>

          <!-- Skills Required -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 450ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:code-tags" class="w-6 h-6 text-indigo-600" />
              </div>
              <h2 class="text-xl font-bold text-gray-900">Skills & Technologies</h2>
            </div>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(skill, index) in job.skills" 
                :key="index"
                class="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-semibold hover:bg-indigo-100 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 space-y-6">
            <!-- Apply Card -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up" style="animation-delay: 200ms;">
              <div class="mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-2xl font-bold text-gray-900">{{ job.salary }}</span>
                  <span class="text-sm text-gray-500">/ year</span>
                </div>
                <p class="text-sm text-gray-600">Competitive salary package</p>
              </div>
              
              <button class="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-3 flex items-center justify-center gap-2">
                <Icon name="mdi:send" class="w-5 h-5" />
                Apply Now
              </button>
              
              <button class="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center gap-2">
                <Icon name="mdi:heart-outline" class="w-5 h-5" />
                Save Job
              </button>

              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-xs text-gray-500 text-center">
                  <Icon name="mdi:clock-outline" class="w-4 h-4 inline mr-1" />
                  Application deadline: {{ job.deadline }}
                </p>
              </div>
            </div>

            <!-- Company Info Card -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up" style="animation-delay: 250ms;">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {{ job.companyInitial }}
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ job.company }}</h3>
                  <p class="text-sm text-gray-500">{{ job.industry }}</p>
                </div>
              </div>
              
              <p class="text-sm text-gray-600 mb-4">{{ job.companyDescription }}</p>
              
              <div class="space-y-3 mb-4">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="mdi:domain" class="w-4 h-4 text-gray-400" />
                  <span>{{ job.companySize }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="mdi:map-marker" class="w-4 h-4 text-gray-400" />
                  <span>{{ job.companyLocation }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="mdi:web" class="w-4 h-4 text-gray-400" />
                  <a href="#" class="text-emerald-600 hover:text-emerald-700">{{ job.companyWebsite }}</a>
                </div>
              </div>

              <button class="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                View Company Profile
              </button>
            </div>

            <!-- Share Card -->
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 p-6 fade-in-up" style="animation-delay: 300ms;">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Icon name="mdi:share-variant" class="w-5 h-5 text-emerald-600" />
                Share this job
              </h3>
              <div class="flex gap-2">
                <button class="flex-1 p-2 bg-white rounded-lg hover:bg-emerald-200 transition-colors">
                  <Icon name="mdi:linkedin" class="w-5 h-5 text-blue-600 mx-auto" />
                </button>
                <button class="flex-1 p-2 bg-white rounded-lg hover:bg-emerald-200 transition-colors">
                  <Icon name="mdi:twitter" class="w-5 h-5 text-blue-400 mx-auto" />
                </button>
                <button class="flex-1 p-2 bg-white rounded-lg hover:bg-emerald-200 transition-colors">
                  <Icon name="mdi:facebook" class="w-5 h-5 text-blue-600 mx-auto" />
                </button>
                <button class="flex-1 p-2 bg-white rounded-lg hover:bg-emerald-200 transition-colors">
                  <Icon name="mdi:link-variant" class="w-5 h-5 text-gray-600 mx-auto" />
                </button>
              </div>
            </div>

            <!-- Similar Jobs -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up" style="animation-delay: 350ms;">
              <h3 class="font-bold text-gray-900 mb-4">Similar Jobs</h3>
              <div class="space-y-3">
                <div v-for="i in 3" :key="i" class="p-3 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all cursor-pointer">
                  <h4 class="font-semibold text-sm text-gray-900 mb-1">Frontend Developer</h4>
                  <p class="text-xs text-gray-600 mb-2">Company Name</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500">Remote</span>
                    <span class="text-xs font-semibold text-emerald-600">$80k - $120k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Sample job data - in real app, this would be fetched from API
const job = ref({
  title: 'Senior Software Engineer',
  company: 'TechCorp Inc.',
  companyInitial: 'T',
  location: 'San Francisco, CA',
  salary: '$120k - $180k',
  type: 'Full-time',
  experience: '5+ years',
  workLocation: 'Hybrid',
  postedDate: '2 days ago',
  deadline: 'December 31, 2025',
  industry: 'Technology',
  companySize: '201-500 employees',
  companyLocation: 'San Francisco, CA',
  companyWebsite: 'www.techcorp.com',
  companyDescription: 'Leading technology company focused on innovative solutions that transform businesses.',
  description: 'We are seeking a talented Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining scalable applications that serve millions of users worldwide.',
  responsibilities: [
    'Design and develop high-quality, scalable software solutions',
    'Collaborate with cross-functional teams to define and ship new features',
    'Write clean, maintainable, and well-documented code',
    'Participate in code reviews and provide constructive feedback',
    'Mentor junior developers and contribute to team growth',
    'Troubleshoot and debug applications to optimize performance',
    'Stay up-to-date with emerging trends and technologies'
  ],
  requirements: [
    'Bachelor\'s degree in Computer Science or related field',
    '5+ years of professional software development experience',
    'Strong proficiency in React, TypeScript, and Node.js',
    'Experience with cloud platforms (AWS, Azure, or GCP)',
    'Solid understanding of software design patterns and best practices',
    'Excellent problem-solving and analytical skills',
    'Strong communication and teamwork abilities'
  ],
  niceToHave: [
    'Experience with microservices architecture',
    'Knowledge of containerization (Docker, Kubernetes)',
    'Contributions to open-source projects',
    'Experience with CI/CD pipelines',
    'Familiarity with Agile/Scrum methodologies'
  ],
  benefits: [
    'Health, dental, and vision insurance',
    '401(k) with company match',
    'Flexible work hours',
    'Remote work options',
    'Professional development budget',
    'Gym membership',
    'Catered meals',
    'Stock options'
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL', 'Redis', 'Git']
})

useSeoMeta({
  title: `${job.value.title} at ${job.value.company} - FindPoint`,
  description: job.value.description
})

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el)
  })
})
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
