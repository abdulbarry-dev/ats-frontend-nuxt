<template>
  <header ref="headerRef" class="fixed top-0 left-0 right-0 z-50">
    <!-- Main Navigation -->
    <nav class="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-18">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2.5 group relative z-10">
            <div class="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
              <Icon name="mdi:briefcase-search" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              FindPoint
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-2">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path" 
              class="nav-link group relative inline-flex items-center gap-2 px-4 py-2.5 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50/60"
            >
              <Icon :name="item.icon" class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              <span>{{ item.label }}</span>
              <span class="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-2/3 -translate-x-1/2 rounded-full"></span>
            </NuxtLink>
          </div>

          <!-- Desktop Auth Buttons -->
          <div class="hidden lg:flex items-center gap-3">
            <NuxtLink 
              to="/auth/login" 
              class="px-5 py-2.5 text-gray-700 hover:text-emerald-600 font-semibold transition-all duration-300 rounded-lg hover:bg-emerald-50 flex items-center gap-2"
            >
              <Icon name="mdi:login" class="w-4 h-4" />
              Sign In
            </NuxtLink>
            <NuxtLink 
              to="/auth/register" 
              class="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Icon name="mdi:rocket-launch" class="w-4 h-4" />
              Get Started
            </NuxtLink>
          </div>

          <!-- Mobile Actions -->
          <div class="flex lg:hidden items-center gap-2 sm:gap-3">
            <!-- Quick Search Button (Mobile) -->
            <button 
              @click="showSearch = !showSearch"
              class="p-2 sm:p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300 text-gray-700"
              aria-label="Search"
            >
              <Icon name="mdi:magnify" class="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <!-- Mobile Menu Button -->
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="p-2 sm:p-2.5 rounded-xl hover:bg-emerald-50 transition-all duration-300 relative"
              aria-label="Toggle menu"
            >
              <Icon 
                name="mdi:menu" 
                class="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 transition-all duration-300"
                :class="{ 'rotate-90 opacity-0': mobileMenuOpen }"
              />
              <Icon 
                name="mdi:close" 
                class="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="{ 'rotate-90 opacity-0': !mobileMenuOpen }"
              />
            </button>
          </div>
        </div>

        <!-- Mobile Search Bar -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform -translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <div v-if="showSearch" class="lg:hidden py-3 border-t border-gray-100">
            <div class="relative">
              <Icon name="mdi:magnify" class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search jobs, companies..."
                class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
            </div>
          </div>
        </Transition>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
        @click="mobileMenuOpen = false"
      ></div>
    </Transition>

    <!-- Mobile Menu Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-x-full"
      enter-to-class="transform translate-x-0"
      leave-active-class="transition duration-250 ease-in"
      leave-from-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto mobile-menu-scroll"
      >
        <!-- Mobile Menu Header -->
        <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Icon name="mdi:briefcase-search" class="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 class="font-bold text-lg">FindPoint</h3>
                <p class="text-xs text-emerald-100">Your Career, Simplified</p>
              </div>
            </div>
            <button 
              @click="mobileMenuOpen = false"
              class="p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Icon name="mdi:close" class="w-6 h-6" />
            </button>
          </div>

          <!-- Quick Stats (Mobile) -->
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <Icon name="mdi:briefcase" class="w-5 h-5 mx-auto mb-1" />
              <p class="text-xl font-bold">1.2K</p>
              <p class="text-xs text-emerald-100">Jobs</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <Icon name="mdi:office-building" class="w-5 h-5 mx-auto mb-1" />
              <p class="text-xl font-bold">450</p>
              <p class="text-xs text-emerald-100">Companies</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <Icon name="mdi:account-group" class="w-5 h-5 mx-auto mb-1" />
              <p class="text-xl font-bold">8.5K</p>
              <p class="text-xs text-emerald-100">Users</p>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Content -->
        <div class="p-4">
          <!-- Main Navigation Links -->
          <div class="space-y-1 mb-6">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Navigation</p>
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path" 
              class="mobile-nav-link group flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl font-medium transition-all duration-300"
              @click="mobileMenuOpen = false"
            >
              <div class="w-10 h-10 bg-gray-100 group-hover:bg-emerald-100 rounded-lg flex items-center justify-center transition-colors">
                <Icon :name="item.icon" class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <p class="font-semibold">{{ item.label }}</p>
                <p class="text-xs text-gray-500 group-hover:text-emerald-600">{{ item.description }}</p>
              </div>
              <Icon name="mdi:chevron-right" class="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </NuxtLink>
          </div>

          <!-- Quick Actions -->
          <div class="space-y-1 mb-6">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Quick Actions</p>
            <NuxtLink to="/candidates/saved" @click="mobileMenuOpen = false" class="w-full flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl font-medium transition-all duration-300 group">
              <div class="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="mdi:bookmark-outline" class="w-5 h-5" />
              </div>
              <span>Saved Jobs</span>
              <span class="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">8</span>
            </NuxtLink>
            <NuxtLink to="/candidates/applications" @click="mobileMenuOpen = false" class="w-full flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-medium transition-all duration-300 group">
              <div class="w-10 h-10 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="mdi:file-document-outline" class="w-5 h-5" />
              </div>
              <span>My Applications</span>
              <span class="ml-auto text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">3</span>
            </NuxtLink>
            <NuxtLink  to="/notification" @click="mobileMenuOpen = false" class="w-full flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-medium transition-all duration-300 group">
              <div class="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="mdi:bell-outline" class="w-5 h-5" />
              </div>
              <span>Notifications</span>
              <span class="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold">12</span>
            </NuxtLink>
          </div>

          <!-- Auth Section -->
          <div class="pt-4 border-t border-gray-100 space-y-3">
            <NuxtLink 
              to="/auth/login" 
              class="mobile-auth-btn w-full flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
              @click="mobileMenuOpen = false"
            >
              <Icon name="mdi:login" class="w-5 h-5" />
              Sign In
            </NuxtLink>
            <NuxtLink 
              to="/auth/register" 
              class="mobile-auth-btn w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg"
              @click="mobileMenuOpen = false"
            >
              <Icon name="mdi:rocket-launch" class="w-5 h-5" />
              Get Started Free
            </NuxtLink>
          </div>

          <!-- Footer Links -->
          <div class="mt-6 pt-6 border-t border-gray-100">
            <div class="grid grid-cols-2 gap-2 text-sm">
              <NuxtLink to="/help" @click="mobileMenuOpen = false" class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon name="mdi:help-circle-outline" class="w-4 h-4 inline-block mr-1" />
                Help Center
              </NuxtLink>
              <NuxtLink to="/settings" @click="mobileMenuOpen = false" class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon name="mdi:cog-outline" class="w-4 h-4 inline-block mr-1" />
                Settings
              </NuxtLink>
              <NuxtLink to="/privacy" @click="mobileMenuOpen = false" class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon name="mdi:shield-check-outline" class="w-4 h-4 inline-block mr-1" />
                Privacy
              </NuxtLink>
              <NuxtLink to="/terms" @click="mobileMenuOpen = false" class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Icon name="mdi:file-document-outline" class="w-4 h-4 inline-block mr-1" />
                Terms
              </NuxtLink>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-6 flex justify-center gap-3">
            <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg flex items-center justify-center transition-all duration-300">
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg flex items-center justify-center transition-all duration-300">
              <Icon name="mdi:twitter" class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-purple-50 text-gray-600 hover:text-purple-600 rounded-lg flex items-center justify-center transition-all duration-300">
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const showSearch = ref(false)

// Expose header height as a CSS variable so page content can avoid being
// hidden under the fixed navbar. We set it on document.documentElement
// so layouts and pages can read it (used by app.vue).
const headerRef = ref<HTMLElement | null>(null)

function updateHeaderHeight() {
  const el = headerRef.value
  if (!el) return
  const height = Math.ceil(el.getBoundingClientRect().height)
  document.documentElement.style.setProperty('--site-header-height', `${height}px`)
}

onMounted(() => {
  updateHeaderHeight()
  window.addEventListener('resize', updateHeaderHeight, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeaderHeight)
})

const navItems = [
  { 
    path: '/jobs', 
    label: 'Find Jobs', 
    icon: 'mdi:briefcase-search',
    description: 'Browse opportunities'
  },
  { 
    path: '/companies', 
    label: 'Companies', 
    icon: 'mdi:office-building',
    description: 'Top employers'
  },
  { 
    path: '/about', 
    label: 'About Us', 
    icon: 'mdi:information-outline',
    description: 'Our story'
  },
  { 
    path: '/contact', 
    label: 'Contact', 
    icon: 'mdi:email-outline',
    description: 'Get in touch'
  }
]

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
  showSearch.value = false
})

// Prevent body scroll when mobile menu is open
watch(mobileMenuOpen, (isOpen: boolean) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Smooth backdrop blur */
nav {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Active nav link indicator */
.router-link-active.nav-link {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.08);
}

.router-link-active.nav-link > span:last-of-type {
  width: 66.666667%; /* 2/3 width */
}

/* Mobile nav active state */
.router-link-active.mobile-nav-link {
  background-color: #f0fdf4;
  color: #10b981;
}

.router-link-active.mobile-nav-link .bg-gray-100 {
  background-color: #d1fae5;
}

/* Smooth transitions */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Custom scrollbar for mobile menu */
.mobile-menu-scroll {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.mobile-menu-scroll::-webkit-scrollbar {
  width: 6px;
}

.mobile-menu-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.mobile-menu-scroll::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 3px;
}

.mobile-menu-scroll::-webkit-scrollbar-thumb:hover {
  background: #059669;
}

/* Mobile menu animation stagger */
.mobile-nav-link {
  animation: slideInRight 0.3s ease-out forwards;
  opacity: 0;
}

.mobile-nav-link:nth-child(1) { animation-delay: 0.05s; }
.mobile-nav-link:nth-child(2) { animation-delay: 0.1s; }
.mobile-nav-link:nth-child(3) { animation-delay: 0.15s; }
.mobile-nav-link:nth-child(4) { animation-delay: 0.2s; }

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Better touch targets for mobile */
@media (max-width: 768px) {
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
}
</style>
