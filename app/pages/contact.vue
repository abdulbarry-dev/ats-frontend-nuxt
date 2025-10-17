<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div class="text-center animate-fade-in-up">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Icon name="mdi:email-outline" class="w-10 h-10" />
          </div>
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p class="text-xl text-emerald-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Contact Information Cards -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Quick Contact Methods -->
          <div class="bg-white rounded-2xl shadow-sm p-6 animate-fade-in-up" style="animation-delay: 100ms">
            <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="mdi:phone-in-talk" class="w-6 h-6 text-emerald-600" />
              Quick Contact
            </h2>
            <div class="space-y-4">
              <a 
                v-for="method in contactMethods" 
                :key="method.type"
                :href="method.link"
                class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors group"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                  <Icon :name="method.icon" class="w-6 h-6 text-emerald-600" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-900 mb-1">{{ method.type }}</h3>
                  <p class="text-sm text-gray-600 truncate">{{ method.value }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ method.description }}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Office Hours -->
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-sm p-6 animate-fade-in-up" style="animation-delay: 200ms">
            <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="mdi:clock-outline" class="w-6 h-6 text-emerald-600" />
              Office Hours
            </h2>
            <div class="space-y-3">
              <div v-for="day in officeHours" :key="day.day" class="flex justify-between items-center">
                <span class="text-gray-700 font-medium">{{ day.day }}</span>
                <span class="text-gray-600 text-sm">{{ day.hours }}</span>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-emerald-200">
              <div class="flex items-center gap-2 text-sm text-emerald-700">
                <Icon name="mdi:information" class="w-5 h-5" />
                <span>We typically respond within 24 hours</span>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-2xl shadow-sm p-6 animate-fade-in-up" style="animation-delay: 300ms">
            <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Icon name="mdi:share-variant" class="w-6 h-6 text-emerald-600" />
              Connect With Us
            </h2>
            <div class="grid grid-cols-2 gap-3">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.link"
                target="_blank"
                class="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                <Icon :name="social.icon" class="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                <span class="text-sm font-medium text-gray-700">{{ social.name }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 150ms">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p class="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name & Email Row -->
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon name="mdi:account" class="w-5 h-5 text-gray-400" />
                    </div>
                    <input 
                      v-model="form.name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon name="mdi:email" class="w-5 h-5 text-gray-400" />
                    </div>
                    <input 
                      v-model="form.email"
                      type="email" 
                      required
                      placeholder="john@example.com"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                  </div>
                </div>
              </div>

              <!-- Phone & Subject Row -->
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span class="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon name="mdi:phone" class="w-5 h-5 text-gray-400" />
                    </div>
                    <input 
                      v-model="form.phone"
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Icon name="mdi:tag" class="w-5 h-5 text-gray-400" />
                    </div>
                    <select 
                      v-model="form.subject"
                      required
                      class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option v-for="topic in subjects" :key="topic" :value="topic">{{ topic }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Icon name="mdi:chevron-down" class="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <textarea 
                    v-model="form.message"
                    rows="6" 
                    required
                    placeholder="Tell us how we can help you..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                  <div class="absolute bottom-3 right-3 text-xs text-gray-400">
                    {{ form.message.length }} / 500
                  </div>
                </div>
              </div>

              <!-- Privacy Agreement -->
              <div class="flex items-start gap-3">
                <input 
                  v-model="form.agreeToPrivacy"
                  type="checkbox" 
                  id="privacy"
                  required
                  class="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                >
                <label for="privacy" class="text-sm text-gray-600">
                  I agree to the 
                  <NuxtLink to="/privacy" class="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</NuxtLink> 
                  and understand that my information will be used to respond to my inquiry.
                </label>
              </div>

              <!-- Submit Button -->
              <div class="flex items-center gap-4">
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Icon v-if="!isSubmitting" name="mdi:send" class="w-5 h-5" />
                  <Icon v-else name="mdi:loading" class="w-5 h-5 animate-spin" />
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </button>
                <button 
                  type="button"
                  @click="resetForm"
                  class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Reset
                </button>
              </div>
            </form>

            <!-- Success Message -->
            <Transition name="fade">
              <div v-if="showSuccess" class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div class="flex items-center gap-3">
                  <Icon name="mdi:check-circle" class="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 class="font-semibold text-emerald-900">Message sent successfully!</h3>
                    <p class="text-sm text-emerald-700">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- FAQ Quick Links -->
          <div class="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm p-6 animate-fade-in-up" style="animation-delay: 250ms">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:help-circle" class="w-6 h-6 text-blue-600" />
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900 mb-2">Looking for quick answers?</h3>
                <p class="text-sm text-gray-600 mb-3">
                  Check out our FAQ page for instant answers to common questions.
                </p>
                <NuxtLink 
                  to="/faq" 
                  class="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Visit FAQ Page</span>
                  <Icon name="mdi:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Location Section -->
      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 350ms">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:map-marker" class="w-6 h-6 text-emerald-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Our Location</h2>
          </div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <Icon name="mdi:office-building" class="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <h3 class="font-semibold text-gray-900">Headquarters</h3>
                <p class="text-gray-600">123 Business Avenue, Suite 100</p>
                <p class="text-gray-600">San Francisco, CA 94105</p>
                <p class="text-gray-600">United States</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="mdi:earth" class="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <h3 class="font-semibold text-gray-900">International Office</h3>
                <p class="text-gray-600">456 Global Street</p>
                <p class="text-gray-600">London, UK EC1A 1BB</p>
                <p class="text-gray-600">United Kingdom</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-8 animate-fade-in-up" style="animation-delay: 400ms">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon name="mdi:frequently-asked-questions" class="w-6 h-6 text-purple-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Support Resources</h2>
          </div>
          <div class="space-y-3">
            <a 
              v-for="resource in supportResources" 
              :key="resource.title"
              :href="resource.link"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors group"
            >
              <div class="flex items-center gap-3">
                <Icon :name="resource.icon" class="w-5 h-5 text-emerald-600" />
                <div>
                  <h3 class="font-semibold text-gray-900">{{ resource.title }}</h3>
                  <p class="text-sm text-gray-600">{{ resource.description }}</p>
                </div>
              </div>
              <Icon name="mdi:chevron-right" class="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | FindPoint',
  description: 'Get in touch with FindPoint. We\'re here to help with any questions about job searching, applications, or our platform.',
  ogTitle: 'Contact Us | FindPoint',
  ogDescription: 'Have questions? Contact the FindPoint team for support and assistance.',
})

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  agreeToPrivacy: boolean
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agreeToPrivacy: false,
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const contactMethods = [
  {
    type: 'Email',
    value: 'support@findpoint.com',
    description: 'Best for detailed inquiries',
    icon: 'mdi:email',
    link: 'mailto:support@findpoint.com',
  },
  {
    type: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri, 9AM-6PM EST',
    icon: 'mdi:phone',
    link: 'tel:+15551234567',
  },
  {
    type: 'Live Chat',
    value: 'Available 24/7',
    description: 'Instant support online',
    icon: 'mdi:chat',
    link: '#',
  },
]

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

const socialLinks = [
  { name: 'LinkedIn', icon: 'mdi:linkedin', link: 'https://linkedin.com' },
  { name: 'Twitter', icon: 'mdi:twitter', link: 'https://twitter.com' },
  { name: 'Facebook', icon: 'mdi:facebook', link: 'https://facebook.com' },
  { name: 'Instagram', icon: 'mdi:instagram', link: 'https://instagram.com' },
]

const subjects = [
  'General Inquiry',
  'Job Search Help',
  'Application Support',
  'Account Issues',
  'Technical Support',
  'Partnership Opportunities',
  'Media & Press',
  'Other',
]

const supportResources = [
  {
    title: 'Help Center',
    description: 'Browse articles and guides',
    icon: 'mdi:book-open-variant',
    link: '/help',
  },
  {
    title: 'FAQ',
    description: 'Quick answers to common questions',
    icon: 'mdi:help-circle',
    link: '/faq',
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users',
    icon: 'mdi:forum',
    link: '/community',
  },
]

const submitForm = async () => {
  if (!form.value.agreeToPrivacy) {
    return
  }

  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Show success message
  showSuccess.value = true
  isSubmitting.value = false
  
  // Reset form after 3 seconds
  setTimeout(() => {
    resetForm()
    showSuccess.value = false
  }, 3000)

  // In production, send to backend API
  console.log('Form submitted:', form.value)
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeToPrivacy: false,
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom select arrow positioning */
select {
  background-image: none;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
