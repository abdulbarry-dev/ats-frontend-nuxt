<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12 lg:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <!-- Brand Section -->
          <div class="lg:col-span-4">
            <NuxtLink to="/" class="inline-flex items-center space-x-2 mb-4 group">
              <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300">
                <span class="text-white font-bold text-xl">F</span>
              </div>
              <span class="text-2xl font-bold text-white">FindPoint</span>
            </NuxtLink>
            <p class="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Connecting talented professionals with amazing opportunities. Your career journey starts here.
            </p>
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Twitter">
                <Icon name="mdi:twitter" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="LinkedIn">
                <Icon name="mdi:linkedin" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Facebook">
                <Icon name="mdi:facebook" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" class="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 group" aria-label="Instagram">
                <Icon name="mdi:instagram" class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="lg:col-span-2">
            <h3 class="text-white font-bold mb-4 text-lg">Platform</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/jobs" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Browse Jobs
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/companies" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Companies
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  About Us
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div class="lg:col-span-2">
            <h3 class="text-white font-bold mb-4 text-lg">Support</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/help" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Help Center
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Contact Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  FAQ
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div class="lg:col-span-2">
            <h3 class="text-white font-bold mb-4 text-lg">Legal</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/privacy" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Terms of Service
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cookies" class="text-gray-400 hover:text-emerald-400 transition-colors inline-flex items-center group">
                  <Icon name="mdi:chevron-right" class="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Cookie Policy
                </NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} FindPoint. All rights reserved.
          </p>
          <div class="flex flex-wrap items-center gap-6 text-sm">
            <NuxtLink to="/sitemap" class="text-gray-500 hover:text-emerald-400 transition-colors">
              Sitemap
            </NuxtLink>
            <NuxtLink to="/accessibility" class="text-gray-500 hover:text-emerald-400 transition-colors">
              Accessibility
            </NuxtLink>
            <div class="flex items-center gap-2 text-gray-500">
              <Icon name="mdi:earth" class="w-4 h-4" />
              <select class="bg-transparent border-none outline-none cursor-pointer hover:text-emerald-400 transition-colors">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const email = ref('')

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log('Subscribe email:', email.value)
  // TODO: Implement API call
  email.value = ''
}
</script>

<style scoped>
/* Add smooth hover animations */
a, button {
  transition: all 0.3s ease;
}
</style>
