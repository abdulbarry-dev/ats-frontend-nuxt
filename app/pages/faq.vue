<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 sm:py-20">
      <div class="container mx-auto px-4 max-w-5xl text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 fade-in-up">
          <Icon name="mdi:help-circle-outline" class="w-8 h-8" />
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold mb-4 fade-in-up" style="animation-delay: 100ms;">
          Frequently Asked Questions
        </h1>
        <p class="text-emerald-100 text-lg max-w-2xl mx-auto fade-in-up" style="animation-delay: 150ms;">
          Find answers to common questions about FindPoint. Can't find what you're looking for? Contact our support team.
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 max-w-5xl -mt-8 pb-16">
      <!-- Search Bar -->
      <div class="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8 fade-in-up" style="animation-delay: 200ms;">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Search for answers..." 
            class="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-lg"
          >
        </div>
        <p v-if="searchQuery && filteredFaqs.length > 0" class="mt-3 text-sm text-gray-600">
          Found {{ filteredFaqs.length }} result{{ filteredFaqs.length !== 1 ? 's' : '' }}
        </p>
      </div>

      <!-- Category Tabs -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8 fade-in-up" style="animation-delay: 250ms;">
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="[
              'px-4 py-2.5 rounded-lg font-medium transition-all',
              selectedCategory === cat.id 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <Icon :name="cat.icon" class="w-4 h-4 inline mr-2" />
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid sm:grid-cols-3 gap-4 mb-8 fade-in-up" style="animation-delay: 300ms;">
        <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
          <div class="flex items-center justify-between mb-2">
            <Icon name="mdi:comment-question-outline" class="w-8 h-8 opacity-80" />
            <span class="text-3xl font-bold">{{ faqs.length }}</span>
          </div>
          <p class="text-emerald-100">Total Questions</p>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div class="flex items-center justify-between mb-2">
            <Icon name="mdi:folder-multiple-outline" class="w-8 h-8 opacity-80" />
            <span class="text-3xl font-bold">{{ categories.length }}</span>
          </div>
          <p class="text-blue-100">Categories</p>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div class="flex items-center justify-between mb-2">
            <Icon name="mdi:account-question-outline" class="w-8 h-8 opacity-80" />
            <span class="text-3xl font-bold">24/7</span>
          </div>
          <p class="text-purple-100">Support Available</p>
        </div>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <!-- No Results -->
        <div v-if="filteredFaqs.length === 0" class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center fade-in-up">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="mdi:file-search-outline" class="w-10 h-10 text-gray-400" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">No results found</h3>
          <p class="text-gray-600 mb-6">Try adjusting your search or browse by category</p>
          <button @click="searchQuery = ''; selectedCategory = 'all'" class="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
            Clear Search
          </button>
        </div>

        <!-- FAQ Accordion Items -->
        <div 
          v-for="(faq, index) in filteredFaqs" 
          :key="faq.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md fade-in-up"
          :style="`animation-delay: ${350 + index * 30}ms;`"
        >
          <button 
            @click="toggleFaq(faq.id)"
            class="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors group"
          >
            <div class="flex-1 pr-4">
              <div class="flex items-start gap-3">
                <div :class="[
                  'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                  openFaqs.includes(faq.id) ? 'bg-emerald-100' : 'bg-gray-100 group-hover:bg-emerald-50'
                ]">
                  <Icon 
                    name="mdi:help-circle" 
                    :class="[
                      'w-5 h-5 transition-colors',
                      openFaqs.includes(faq.id) ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-600'
                    ]" 
                  />
                </div>
                <div class="flex-1">
                  <h3 :class="[
                    'font-semibold text-lg mb-1 transition-colors',
                    openFaqs.includes(faq.id) ? 'text-emerald-600' : 'text-gray-900 group-hover:text-emerald-600'
                  ]">
                    {{ faq.question }}
                  </h3>
                  <div class="flex items-center gap-2 text-xs text-gray-500">
                    <span class="px-2 py-1 bg-gray-100 rounded-md">{{ getCategoryName(faq.category) }}</span>
                    <span v-if="faq.popular" class="px-2 py-1 bg-amber-100 text-amber-700 rounded-md flex items-center gap-1">
                      <Icon name="mdi:star" class="w-3 h-3" />
                      Popular
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0',
              openFaqs.includes(faq.id) ? 'bg-emerald-600 rotate-180' : 'bg-gray-100 group-hover:bg-emerald-100'
            ]">
              <Icon 
                name="mdi:chevron-down" 
                :class="[
                  'w-5 h-5 transition-colors',
                  openFaqs.includes(faq.id) ? 'text-white' : 'text-gray-500 group-hover:text-emerald-600'
                ]" 
              />
            </div>
          </button>
          
          <!-- Answer -->
          <Transition name="expand">
            <div v-if="openFaqs.includes(faq.id)" class="px-6 pb-6">
              <div class="pl-[52px] pr-4">
                <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ faq.answer }}</p>
                  <div v-if="faq.links && faq.links.length > 0" class="mt-4 pt-4 border-t border-gray-300">
                    <p class="text-sm font-semibold text-gray-900 mb-2">Related Links:</p>
                    <div class="flex flex-wrap gap-2">
                      <NuxtLink 
                        v-for="(link, idx) in faq.links" 
                        :key="idx"
                        :to="link.url"
                        class="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        <Icon name="mdi:arrow-right" class="w-4 h-4" />
                        {{ link.text }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
                <!-- Helpful feedback -->
                <div class="mt-4 flex items-center justify-between">
                  <p class="text-sm text-gray-600">Was this helpful?</p>
                  <div class="flex gap-2">
                    <button @click="markHelpful(faq.id, true)" class="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-200 transition-colors flex items-center gap-1">
                      <Icon name="mdi:thumb-up" class="w-4 h-4" />
                      Yes
                    </button>
                    <button @click="markHelpful(faq.id, false)" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                      <Icon name="mdi:thumb-down" class="w-4 h-4" />
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Still Have Questions CTA -->
      <div class="mt-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 sm:p-12 text-center text-white fade-in-up">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
          <Icon name="mdi:chat-question-outline" class="w-8 h-8" />
        </div>
        <h2 class="text-3xl font-bold mb-4">Still have questions?</h2>
        <p class="text-emerald-100 mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our friendly support team is here to help you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
            <Icon name="mdi:email-outline" class="w-5 h-5" />
            Contact Support
          </NuxtLink>
          <NuxtLink to="/help" class="px-8 py-4 bg-emerald-800/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-emerald-800/70 transition-colors inline-flex items-center justify-center gap-2">
            <Icon name="mdi:book-open-outline" class="w-5 h-5" />
            Help Center
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'FAQ - Frequently Asked Questions | FindPoint',
  description: 'Find answers to common questions about FindPoint job platform, applications, and more.'
})

interface FAQ {
  id: number
  category: string
  question: string
  answer: string
  popular?: boolean
  links?: { text: string; url: string }[]
}

// State
const searchQuery = ref('')
const selectedCategory = ref('all')
const openFaqs = ref<number[]>([])

// Categories
const categories = [
  { id: 'all', name: 'All Questions', icon: 'mdi:view-grid' },
  { id: 'general', name: 'General', icon: 'mdi:information' },
  { id: 'jobs', name: 'Jobs', icon: 'mdi:briefcase' },
  { id: 'applications', name: 'Applications', icon: 'mdi:file-document' },
  { id: 'account', name: 'Account', icon: 'mdi:account' },
  { id: 'pricing', name: 'Pricing', icon: 'mdi:currency-usd' },
]

// FAQ Data
const faqs = ref<FAQ[]>([
  {
    id: 1,
    category: 'general',
    question: 'What is FindPoint?',
    answer: 'FindPoint is a comprehensive job search platform that connects talented professionals with amazing career opportunities. We help job seekers discover their perfect role and assist companies in finding the right talent for their teams.\n\nOur platform offers advanced search filters, personalized job recommendations, application tracking, and direct communication with recruiters.',
    popular: true,
    links: [
      { text: 'Browse Jobs', url: '/jobs' },
      { text: 'About Us', url: '/about' }
    ]
  },
  {
    id: 2,
    category: 'account',
    question: 'How do I create an account?',
    answer: 'Creating an account is simple:\n\n1. Click the "Sign Up" button in the top right corner\n2. Choose to sign up with email or social accounts (Google, LinkedIn)\n3. Fill in your basic information\n4. Verify your email address\n5. Complete your profile to get started\n\nOnce registered, you can browse jobs, save favorites, and apply directly through our platform.',
    popular: true,
    links: [
      { text: 'Sign Up Now', url: '/auth/signup' }
    ]
  },
  {
    id: 3,
    category: 'jobs',
    question: 'How do I search for jobs?',
    answer: 'Our job search is designed to be intuitive and powerful:\n\n• Use the search bar to enter job titles, keywords, or company names\n• Add location filters to find jobs in your preferred area\n• Apply advanced filters: job type, salary range, experience level, industry\n• Save your searches to receive email alerts for new matching jobs\n• Use the "Remote" filter to find work-from-home opportunities\n\nYou can also browse jobs by category or explore companies directly.',
    popular: true,
    links: [
      { text: 'Browse All Jobs', url: '/jobs' },
      { text: 'Companies', url: '/companies' }
    ]
  },
  {
    id: 4,
    category: 'applications',
    question: 'How do I apply for a job?',
    answer: 'Applying for jobs on FindPoint is straightforward:\n\n1. Click on any job listing that interests you\n2. Review the job description and requirements\n3. Click the "Apply Now" button\n4. Upload your resume (PDF, DOC, or DOCX)\n5. Fill in the application form\n6. Submit your application\n\nYou can track all your applications from your dashboard and receive real-time updates on their status.',
    popular: true,
    links: [
      { text: 'My Applications', url: '/candidates/applications' }
    ]
  },
  {
    id: 5,
    category: 'applications',
    question: 'Can I track my application status?',
    answer: 'Yes! We provide comprehensive application tracking:\n\n• View all your applications in one place from your dashboard\n• See real-time status updates (Submitted, Under Review, Interview, Rejected, Offer)\n• Receive email and in-app notifications for status changes\n• Access interview schedules and recruiter messages\n• Download your application history\n\nYou\'ll always know where you stand in the hiring process.',
    popular: false
  },
  {
    id: 6,
    category: 'account',
    question: 'How do I update my profile?',
    answer: 'Keep your profile up-to-date to attract more opportunities:\n\n1. Go to Settings from the user menu\n2. Navigate to the Profile section\n3. Update your information: bio, skills, experience, education\n4. Upload a professional photo\n5. Add your resume and portfolio links\n6. Set your job preferences and availability\n7. Save your changes\n\nA complete profile increases your visibility to recruiters by up to 70%!',
    popular: false,
    links: [
      { text: 'Edit Profile', url: '/candidates/profile' }
    ]
  },
  {
    id: 7,
    category: 'jobs',
    question: 'Can I save jobs to apply later?',
    answer: 'Absolutely! Saving jobs is a great way to organize your job search:\n\n• Click the heart/bookmark icon on any job listing\n• Access all saved jobs from your "Saved Jobs" page\n• Receive reminders before application deadlines\n• Remove jobs from saved list anytime\n• Export your saved jobs list\n\nSaved jobs help you keep track of opportunities you\'re interested in without losing them.',
    popular: false,
    links: [
      { text: 'View Saved Jobs', url: '/candidates/saved' }
    ]
  },
  {
    id: 8,
    category: 'pricing',
    question: 'Is FindPoint free to use?',
    answer: 'Yes! FindPoint is completely free for job seekers. You can:\n\n✓ Create a profile\n✓ Search and browse unlimited jobs\n✓ Apply to as many jobs as you want\n✓ Track your applications\n✓ Communicate with recruiters\n✓ Set up job alerts\n\nAll at no cost. We make money by charging companies to post jobs and access our talent pool.',
    popular: true
  },
  {
    id: 9,
    category: 'general',
    question: 'How does the job recommendation system work?',
    answer: 'Our AI-powered recommendation system uses:\n\n• Your profile information (skills, experience, education)\n• Your job search history and preferences\n• Jobs you\'ve viewed, saved, and applied to\n• Your stated preferences (location, salary, job type)\n• Machine learning algorithms to find the best matches\n\nThe more you use FindPoint, the better our recommendations become. You\'ll receive personalized job suggestions via email and in your dashboard.',
    popular: false
  },
  {
    id: 10,
    category: 'applications',
    question: 'What happens after I submit an application?',
    answer: 'Here\'s the typical application journey:\n\n1. Your application is received and confirmed (you get an email)\n2. The hiring team reviews your application (1-3 business days)\n3. If selected, you\'ll be contacted for an interview\n4. You may go through multiple interview rounds\n5. Final decision: job offer or rejection notice\n\nYou\'ll receive notifications at each stage. Average response time is 5-7 business days, but this varies by company.',
    popular: false
  },
  {
    id: 11,
    category: 'account',
    question: 'How do I delete my account?',
    answer: 'We\'re sorry to see you go! To delete your account:\n\n1. Go to Settings\n2. Navigate to Account Settings\n3. Scroll to the bottom and click "Delete Account"\n4. Confirm your decision\n5. Your account will be permanently deleted within 30 days\n\nNote: This action is irreversible. All your data, applications, and saved jobs will be permanently removed.',
    popular: false,
    links: [
      { text: 'Account Settings', url: '/settings/account' }
    ]
  },
  {
    id: 12,
    category: 'general',
    question: 'How can I contact support?',
    answer: 'We\'re here to help! You can reach our support team through:\n\n📧 Email: support@findpoint.com\n💬 Live Chat: Available Mon-Fri, 9 AM - 6 PM EST\n📞 Phone: +1 (555) 123-4567\n📝 Contact Form: Available on our Contact page\n\nAverage response time:\n• Live Chat: Immediate\n• Email: Within 24 hours\n• Phone: Immediate during business hours\n\nFor urgent issues, we recommend using live chat or phone support.',
    popular: true,
    links: [
      { text: 'Contact Us', url: '/contact' },
      { text: 'Help Center', url: '/help' }
    ]
  },
  {
    id: 13,
    category: 'jobs',
    question: 'Can I apply for remote jobs?',
    answer: 'Yes! We have thousands of remote job opportunities:\n\n• Use the "Remote" filter in job search\n• Browse our dedicated remote jobs section\n• Set your preference to "Remote Only" in your profile\n• Receive alerts for new remote positions\n\nRemote jobs span across all industries and experience levels, from entry-level to executive positions.',
    popular: true,
    links: [
      { text: 'Browse Remote Jobs', url: '/jobs?type=remote' }
    ]
  },
  {
    id: 14,
    category: 'pricing',
    question: 'Are there any premium features?',
    answer: 'Currently, all features are free for job seekers. However, we\'re developing premium features that will include:\n\n• Priority application (your application is seen first)\n• Advanced analytics on your job search\n• Resume review by professionals\n• Career coaching sessions\n• Exclusive job opportunities\n\nThese premium features will be optional, and core functionality will always remain free.',
    popular: false
  },
  {
    id: 15,
    category: 'general',
    question: 'Is my personal information secure?',
    answer: 'Absolutely! We take data security very seriously:\n\n🔒 All data is encrypted using industry-standard SSL/TLS\n🛡️ We comply with GDPR and CCPA regulations\n🔐 Your password is hashed and never stored in plain text\n👥 We never sell your personal information to third parties\n📊 You control what information is visible to employers\n🔍 Regular security audits and penetration testing\n\nRead our full Privacy Policy for more details on how we protect your data.',
    popular: true,
    links: [
      { text: 'Privacy Policy', url: '/privacy' },
      { text: 'Security', url: '/security' }
    ]
  }
])

// Computed
const filteredFaqs = computed(() => {
  let result = faqs.value

  // Filter by category
  if (selectedCategory.value !== 'all') {
    result = result.filter(faq => faq.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(faq => 
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    )
  }

  // Sort: popular first
  return result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
})

// Methods
const toggleFaq = (id: number) => {
  const index = openFaqs.value.indexOf(id)
  if (index > -1) {
    openFaqs.value.splice(index, 1)
  } else {
    openFaqs.value.push(id)
  }
}

const getCategoryName = (categoryId: string) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category?.name || categoryId
}

const markHelpful = (faqId: number, helpful: boolean) => {
  // TODO: Implement API call to track helpful feedback
  console.log(`FAQ ${faqId} marked as ${helpful ? 'helpful' : 'not helpful'}`)
  // Show success toast notification
}
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

/* Expand transition for FAQ answers */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style>