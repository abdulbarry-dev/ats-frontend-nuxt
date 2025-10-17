<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div class="text-center animate-fade-in-up">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Icon name="mdi:cookie" class="w-10 h-10" />
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p class="text-xl text-emerald-100 max-w-2xl mx-auto">
            Understanding how we use cookies to enhance your experience
          </p>
          <div class="mt-6 flex items-center justify-center gap-6 text-sm">
            <div class="flex items-center gap-2">
              <Icon name="mdi:calendar" class="w-5 h-5" />
              <span>Last Updated: October 17, 2025</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="mdi:clock-outline" class="w-5 h-5" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cookie Banner Preview -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
      <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-emerald-200 animate-fade-in-up" style="animation-delay: 100ms">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Icon name="mdi:cookie-check" class="w-6 h-6 text-emerald-600" />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">Quick Cookie Settings</h3>
            <p class="text-sm text-gray-600 mb-4">
              We use cookies to improve your experience. You can manage your preferences here.
            </p>
            <div class="flex flex-wrap gap-2">
              <button 
                @click="acceptAll" 
                class="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
              >
                Accept All
              </button>
              <button 
                @click="showPreferences = !showPreferences" 
                class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Manage Preferences
              </button>
              <button 
                @click="rejectAll" 
                class="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cookie Preferences Panel -->
    <Transition name="slide-down">
      <div v-if="showPreferences" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-gray-900">Cookie Preferences</h3>
            <button @click="showPreferences = false" class="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="mdi:close" class="w-6 h-6" />
            </button>
          </div>
          
          <div class="space-y-4">
            <div v-for="category in cookieCategories" :key="category.id" class="border border-gray-200 rounded-xl p-4">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <Icon :name="category.icon" class="w-5 h-5 text-emerald-600" />
                    <h4 class="font-semibold text-gray-900">{{ category.name }}</h4>
                    <span v-if="category.required" class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                      Required
                    </span>
                  </div>
                  <p class="text-sm text-gray-600">{{ category.description }}</p>
                </div>
                <div class="ml-4">
                  <button
                    @click="toggleCookie(category.id)"
                    :disabled="category.required"
                    :class="[
                      'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                      cookiePreferences[category.id as keyof CookiePreferences] ? 'bg-emerald-600' : 'bg-gray-300',
                      category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    ]"
                  >
                    <span
                      :class="[
                        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                        cookiePreferences[category.id as keyof CookiePreferences] ? 'translate-x-6' : 'translate-x-1'
                      ]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex justify-end gap-3">
            <button 
              @click="savePreferences" 
              class="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Table of Contents -->
      <div class="bg-white rounded-2xl shadow-sm p-6 mb-8 animate-fade-in-up" style="animation-delay: 200ms">
        <h2 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="mdi:format-list-bulleted" class="w-5 h-5 text-emerald-600" />
          Table of Contents
        </h2>
        <nav class="space-y-2">
          <a 
            v-for="section in sections" 
            :key="section.id"
            :href="`#${section.id}`"
            class="block text-gray-600 hover:text-emerald-600 transition-colors pl-4 border-l-2 border-transparent hover:border-emerald-600 py-1"
          >
            {{ section.title }}
          </a>
        </nav>
      </div>

      <!-- Content Sections -->
      <div class="space-y-8">
        <!-- What Are Cookies -->
        <section id="what-are-cookies" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 300ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:cookie" class="w-6 h-6 text-emerald-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
          </div>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our platform, and improving our services.
            </p>
            <p class="text-gray-600 leading-relaxed mt-4">
              These files contain information that is transferred to your device's hard drive. They allow our website to recognize your device and store some information about your preferences or past actions.
            </p>
          </div>
        </section>

        <!-- How We Use Cookies -->
        <section id="how-we-use" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 350ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:cog" class="w-6 h-6 text-blue-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">How We Use Cookies</h2>
          </div>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 leading-relaxed mb-6">
              We use cookies for various purposes to enhance your experience on FindPoint:
            </p>
            <div class="grid gap-4">
              <div v-for="purpose in cookiePurposes" :key="purpose.title" class="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <div class="flex-shrink-0">
                  <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Icon :name="purpose.icon" class="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ purpose.title }}</h3>
                  <p class="text-sm text-gray-600">{{ purpose.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Types of Cookies -->
        <section id="types" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 400ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:cookie-settings" class="w-6 h-6 text-purple-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
          </div>
          <div class="space-y-6">
            <div v-for="type in cookieTypes" :key="type.name" class="border-l-4 pl-6 py-2" :class="type.borderClass">
              <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                {{ type.name }}
                <span v-if="type.required" class="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                  Required
                </span>
                <span v-else class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                  Optional
                </span>
              </h3>
              <p class="text-gray-600 text-sm mb-3">{{ type.description }}</p>
              <div class="bg-gray-50 rounded-lg p-3">
                <h4 class="text-xs font-semibold text-gray-700 mb-2">Examples:</h4>
                <ul class="space-y-1">
                  <li v-for="example in type.examples" :key="example" class="text-xs text-gray-600 flex items-start gap-2">
                    <Icon name="mdi:check-circle" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{{ example }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Third-Party Cookies -->
        <section id="third-party" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 450ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:web" class="w-6 h-6 text-amber-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Third-Party Cookies</h2>
          </div>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 leading-relaxed mb-6">
              In addition to our own cookies, we may use third-party cookies from trusted partners:
            </p>
            <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <div class="grid sm:grid-cols-2 gap-4">
                <div v-for="partner in thirdPartyPartners" :key="partner.name" class="bg-white rounded-lg p-4 shadow-sm">
                  <div class="flex items-center gap-3 mb-2">
                    <Icon :name="partner.icon" class="w-5 h-5 text-amber-600" />
                    <h3 class="font-semibold text-gray-900">{{ partner.name }}</h3>
                  </div>
                  <p class="text-sm text-gray-600">{{ partner.purpose }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Managing Cookies -->
        <section id="managing" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 500ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:shield-check" class="w-6 h-6 text-emerald-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
          </div>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 leading-relaxed mb-6">
              You have full control over how cookies are used on our website. Here's how you can manage them:
            </p>
            <div class="grid gap-4">
              <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
                <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="mdi:cog-outline" class="w-5 h-5 text-emerald-600" />
                  On Our Website
                </h3>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Icon name="mdi:check" class="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Use the cookie preferences panel above to customize your settings</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <Icon name="mdi:check" class="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Access cookie settings anytime from your account preferences</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="mdi:web" class="w-5 h-5 text-blue-600" />
                  Browser Settings
                </h3>
                <p class="text-sm text-gray-600 mb-3">
                  Most browsers allow you to control cookies through their settings:
                </p>
                <div class="grid sm:grid-cols-2 gap-3">
                  <a 
                    v-for="browser in browsers" 
                    :key="browser.name"
                    :href="browser.link"
                    target="_blank"
                    class="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Icon :name="browser.icon" class="w-4 h-4" />
                    <span>{{ browser.name }}</span>
                    <Icon name="mdi:open-in-new" class="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Cookie Duration -->
        <section id="duration" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 550ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:timer-sand" class="w-6 h-6 text-indigo-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Cookie Duration</h2>
          </div>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 leading-relaxed mb-6">
              Cookies can be session-based or persistent:
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <div class="flex items-center gap-2 mb-3">
                  <Icon name="mdi:clock-fast" class="w-6 h-6 text-indigo-600" />
                  <h3 class="font-semibold text-gray-900">Session Cookies</h3>
                </div>
                <p class="text-sm text-gray-600">
                  Temporary cookies that expire when you close your browser. Used for essential functionality like maintaining your login state during a browsing session.
                </p>
              </div>
              <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <div class="flex items-center gap-2 mb-3">
                  <Icon name="mdi:clock-outline" class="w-6 h-6 text-purple-600" />
                  <h3 class="font-semibold text-gray-900">Persistent Cookies</h3>
                </div>
                <p class="text-sm text-gray-600">
                  Remain on your device for a set period (usually 30 days to 2 years). Used to remember your preferences and provide personalized experiences across visits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Your Rights -->
        <section id="your-rights" class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 600ms">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:account-check" class="w-6 h-6 text-rose-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <div class="prose prose-gray max-w-none">
            <p class="text-gray-600 leading-relaxed mb-6">
              Under data protection laws, you have the following rights regarding cookies:
            </p>
            <div class="space-y-3">
              <div v-for="right in userRights" :key="right.title" class="flex gap-4 p-4 bg-gray-50 rounded-xl">
                <Icon :name="right.icon" class="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ right.title }}</h3>
                  <p class="text-sm text-gray-600">{{ right.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-lg p-8 text-white animate-fade-in-up" style="animation-delay: 650ms">
          <div class="text-center max-w-2xl mx-auto">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
              <Icon name="mdi:email-outline" class="w-8 h-8" />
            </div>
            <h2 class="text-2xl font-bold mb-3">Questions About Our Cookie Policy?</h2>
            <p class="text-emerald-100 mb-6">
              If you have any questions or concerns about how we use cookies, please don't hesitate to contact us.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                <Icon name="mdi:message" class="w-5 h-5" />
                Contact Support
              </NuxtLink>
              <NuxtLink 
                to="/privacy" 
                class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-medium"
              >
                <Icon name="mdi:shield-lock" class="w-5 h-5" />
                Privacy Policy
              </NuxtLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cookie Policy | FindPoint',
  description: 'Learn about how FindPoint uses cookies to enhance your experience, protect your privacy, and improve our services.',
  ogTitle: 'Cookie Policy | FindPoint',
  ogDescription: 'Understanding how we use cookies to provide you with the best job search experience.',
})

interface CookiePreferences {
  essential: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

const showPreferences = ref(false)

const cookiePreferences = ref<CookiePreferences>({
  essential: true,
  functional: true,
  analytics: true,
  marketing: false,
})

const cookieCategories = [
  {
    id: 'essential',
    name: 'Essential Cookies',
    description: 'Required for the website to function properly. These cannot be disabled.',
    icon: 'mdi:shield-check',
    required: true,
  },
  {
    id: 'functional',
    name: 'Functional Cookies',
    description: 'Remember your preferences and settings to provide enhanced functionality.',
    icon: 'mdi:cog',
    required: false,
  },
  {
    id: 'analytics',
    name: 'Analytics Cookies',
    description: 'Help us understand how you use our website to improve your experience.',
    icon: 'mdi:chart-line',
    required: false,
  },
  {
    id: 'marketing',
    name: 'Marketing Cookies',
    description: 'Used to deliver personalized advertisements relevant to you.',
    icon: 'mdi:bullhorn',
    required: false,
  },
]

const sections = [
  { id: 'what-are-cookies', title: 'What Are Cookies?' },
  { id: 'how-we-use', title: 'How We Use Cookies' },
  { id: 'types', title: 'Types of Cookies' },
  { id: 'third-party', title: 'Third-Party Cookies' },
  { id: 'managing', title: 'Managing Cookies' },
  { id: 'duration', title: 'Cookie Duration' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'contact', title: 'Contact Us' },
]

const cookiePurposes = [
  {
    title: 'Authentication',
    description: 'Keep you logged in and secure while using our platform',
    icon: 'mdi:lock',
  },
  {
    title: 'Personalization',
    description: 'Remember your preferences and customize your experience',
    icon: 'mdi:account-cog',
  },
  {
    title: 'Analytics',
    description: 'Understand how you use our website to improve our services',
    icon: 'mdi:chart-bar',
  },
  {
    title: 'Performance',
    description: 'Monitor and optimize website speed and functionality',
    icon: 'mdi:speedometer',
  },
]

const cookieTypes = [
  {
    name: 'Strictly Necessary Cookies',
    description: 'These cookies are essential for you to browse the website and use its features.',
    required: true,
    borderClass: 'border-red-500',
    examples: [
      'Session management and authentication',
      'Security and fraud prevention',
      'Load balancing and performance',
    ],
  },
  {
    name: 'Functional Cookies',
    description: 'These cookies enable enhanced functionality and personalization.',
    required: false,
    borderClass: 'border-blue-500',
    examples: [
      'Language preferences',
      'Region selection',
      'User interface customization',
    ],
  },
  {
    name: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website.',
    required: false,
    borderClass: 'border-purple-500',
    examples: [
      'Page view tracking',
      'User behavior analysis',
      'Feature usage statistics',
    ],
  },
  {
    name: 'Marketing Cookies',
    description: 'These cookies track your online activity to help advertisers deliver more relevant advertising.',
    required: false,
    borderClass: 'border-amber-500',
    examples: [
      'Targeted advertising',
      'Social media integration',
      'Conversion tracking',
    ],
  },
]

const thirdPartyPartners = [
  {
    name: 'Google Analytics',
    purpose: 'Website analytics and performance monitoring',
    icon: 'mdi:google-analytics',
  },
  {
    name: 'Social Media',
    purpose: 'Social sharing and authentication features',
    icon: 'mdi:share-variant',
  },
  {
    name: 'Advertising',
    purpose: 'Relevant job recommendations and partnerships',
    icon: 'mdi:bullhorn',
  },
  {
    name: 'Payment Processors',
    purpose: 'Secure payment processing for premium features',
    icon: 'mdi:credit-card',
  },
]

const browsers = [
  { name: 'Chrome', icon: 'mdi:google-chrome', link: 'https://support.google.com/chrome/answer/95647' },
  { name: 'Firefox', icon: 'mdi:firefox', link: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
  { name: 'Safari', icon: 'mdi:apple-safari', link: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  { name: 'Edge', icon: 'mdi:microsoft-edge', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
]

const userRights = [
  {
    title: 'Right to Consent',
    description: 'You have the right to give or withdraw consent for non-essential cookies at any time.',
    icon: 'mdi:hand-okay',
  },
  {
    title: 'Right to Access',
    description: 'You can request information about the cookies we use and how we use them.',
    icon: 'mdi:file-document',
  },
  {
    title: 'Right to Delete',
    description: 'You can delete cookies from your browser at any time through your browser settings.',
    icon: 'mdi:delete',
  },
  {
    title: 'Right to Object',
    description: 'You can object to the processing of your data through cookies for marketing purposes.',
    icon: 'mdi:block-helper',
  },
]

const toggleCookie = (id: string) => {
  if (id !== 'essential' && id in cookiePreferences.value) {
    cookiePreferences.value[id as keyof CookiePreferences] = !cookiePreferences.value[id as keyof CookiePreferences]
  }
}

const acceptAll = () => {
  Object.keys(cookiePreferences.value).forEach(key => {
    cookiePreferences.value[key as keyof CookiePreferences] = true
  })
  showPreferences.value = false
  // In production, save preferences to localStorage or backend
  console.log('All cookies accepted')
}

const rejectAll = () => {
  Object.keys(cookiePreferences.value).forEach(key => {
    if (key !== 'essential') {
      cookiePreferences.value[key as keyof CookiePreferences] = false
    }
  })
  showPreferences.value = false
  // In production, save preferences to localStorage or backend
  console.log('Non-essential cookies rejected')
}

const savePreferences = () => {
  showPreferences.value = false
  // In production, save preferences to localStorage or backend
  console.log('Cookie preferences saved:', cookiePreferences.value)
}
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

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #059669;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #047857;
}
</style>