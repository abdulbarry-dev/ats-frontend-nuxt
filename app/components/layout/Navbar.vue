<template>
  <header ref="headerRef" class="fixed top-0 left-0 right-0 z-50">
    <!-- Main Navigation -->
    <nav
      class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-700 transition-colors duration-300"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-18">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="flex items-center gap-2.5 group relative z-10 ml-[-0.5rem] sm:ml-[-1rem]"
          >
            <div
              class="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md"
            >
              <Icon
                name="mdi:briefcase-search"
                class="w-5 h-5 sm:w-6 sm:h-6 text-white"
              />
            </div>
            <span
              class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent"
            >
              FindPoint
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div
            class="hidden lg:flex flex-nowrap items-center gap-2 min-w-0 max-w-full overflow-visible"
          >
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="nav-link group relative inline-flex items-center gap-2 px-3 py-2 h-10 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-xs sm:text-[0.92rem] transition-all duration-300 rounded-md whitespace-nowrap hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40 min-w-0"
              style="flex: 0 0 auto; min-width: 0; align-items: center"
            >
              <Icon
                :name="item.icon"
                class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"
              />
              <span class="block">{{ item.label }}</span>
              <span
                class="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-2/3 -translate-x-1/2 rounded-full"
              ></span>
            </NuxtLink>
          </div>

          <!-- Desktop Auth Buttons & Language -->
          <div class="hidden lg:flex items-center gap-2">
            <!-- Language Selector -->
            <div class="relative" ref="langDropdownRef">
              <button
                @click="langDropdownOpen = !langDropdownOpen"
                class="flex items-center gap-1.5 px-2.5 py-2 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50/60 dark:hover:bg-emerald-900/30 text-sm"
                aria-label="Select language"
              >
                <Icon name="mdi:translate" class="w-4 h-4" />
                <span class="text-xs font-semibold">{{
                  selectedLanguage.code.toUpperCase()
                }}</span>
                <Icon
                  name="mdi:chevron-down"
                  class="w-3.5 h-3.5 transition-transform duration-300"
                  :class="{ 'rotate-180': langDropdownOpen }"
                />
              </button>

              <!-- Language Dropdown -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div
                  v-if="langDropdownOpen"
                  class="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden z-50 transition-colors duration-300"
                >
                  <div class="py-1.5">
                    <button
                      v-for="lang in languages"
                      :key="lang.code"
                      @click="selectLanguage(lang)"
                      class="w-full flex items-center gap-2.5 px-3.5 py-2.5 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors duration-200"
                      :class="{
                        'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400':
                          selectedLanguage.code === lang.code,
                      }"
                    >
                      <span class="text-xl">{{ lang.flag }}</span>
                      <div class="flex-1 text-left">
                        <p class="font-medium text-xs dark:text-gray-200">
                          {{ lang.name }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          {{ lang.nativeName }}
                        </p>
                      </div>
                      <Icon
                        v-if="selectedLanguage.code === lang.code"
                        name="mdi:check-circle"
                        class="w-4 h-4 text-emerald-600"
                      />
                    </button>
                  </div>
                </div>
              </Transition>
            </div>

            <NuxtLink
              to="/auth/login"
              class="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-all duration-300 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 flex items-center gap-1.5 text-sm"
            >
              <Icon name="mdi:login" class="w-4 h-4" />
              Sign In
            </NuxtLink>
          </div>

          <!-- Mobile Actions -->
          <div
            class="flex lg:hidden items-center gap-1 sm:gap-2 min-w-0 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-200"
          >
            <!-- Quick Search Button (Mobile) -->
            <button
              @click="showSearch = !showSearch"
              class="p-2 sm:p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 text-gray-700 dark:text-gray-200"
              aria-label="Search"
            >
              <Icon name="mdi:magnify" class="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <!-- Mobile Menu Button -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="p-2 sm:p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300 relative"
              aria-label="Toggle menu"
            >
              <Icon
                name="mdi:menu"
                class="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 dark:text-gray-200 transition-all duration-300"
                :class="{
                  'rotate-90 opacity-0': mobileMenuOpen,
                }"
              />
              <Icon
                name="mdi:close"
                class="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 dark:text-emerald-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                :class="{
                  'rotate-90 opacity-0': !mobileMenuOpen,
                }"
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
          <div
            v-if="showSearch"
            class="lg:hidden py-3 border-t border-gray-100 dark:border-slate-700"
          >
            <div class="relative">
              <Icon
                name="mdi:magnify"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Search jobs, companies..."
                class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-all"
              />
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
        class="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl lg:hidden overflow-y-auto mobile-menu-scroll transition-colors duration-300"
      >
        <!-- Mobile Menu Header -->
        <div
          class="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white"
        >
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
              >
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
            <div
              class="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
            >
              <Icon name="mdi:briefcase" class="w-5 h-5 mx-auto mb-1" />
              <p class="text-xl font-bold">1.2K</p>
              <p class="text-xs text-emerald-100">Jobs</p>
            </div>
            <div
              class="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
            >
              <Icon name="mdi:office-building" class="w-5 h-5 mx-auto mb-1" />
              <p class="text-xl font-bold">450</p>
              <p class="text-xs text-emerald-100">Companies</p>
            </div>
            <div
              class="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center"
            >
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
            <p
              class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2"
            >
              Navigation
            </p>
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="mobile-nav-link group flex items-center gap-3 px-4 py-3.5 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl font-medium transition-all duration-300"
              @click="mobileMenuOpen = false"
            >
              <div
                class="w-10 h-10 bg-gray-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon :name="item.icon" class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <p class="font-semibold">{{ item.label }}</p>
                <p
                  class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                >
                  {{ item.description }}
                </p>
              </div>
              <Icon
                name="mdi:chevron-right"
                class="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"
              />
            </NuxtLink>
          </div>

          <!-- Quick Actions -->
          <div class="space-y-1 mb-6">
            <p
              class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2"
            >
              Quick Actions
            </p>
            <NuxtLink
              to="/candidates/saved"
              @click="mobileMenuOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl font-medium transition-all duration-300 group"
            >
              <div
                class="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="mdi:bookmark-outline" class="w-5 h-5" />
              </div>
              <span>Saved Jobs</span>
              <span
                class="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold"
                >8</span
              >
            </NuxtLink>
            <NuxtLink
              to="/candidates/applications"
              @click="mobileMenuOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-medium transition-all duration-300 group"
            >
              <div
                class="w-10 h-10 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="mdi:file-document-outline" class="w-5 h-5" />
              </div>
              <span>My Applications</span>
              <span
                class="ml-auto text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold"
                >3</span
              >
            </NuxtLink>
            <NuxtLink
              to="/notification"
              @click="mobileMenuOpen = false"
              class="w-full flex items-center gap-3 px-4 py-3.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-xl font-medium transition-all duration-300 group"
            >
              <div
                class="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="mdi:bell-outline" class="w-5 h-5" />
              </div>
              <span>Notifications</span>
              <span
                class="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold"
                >12</span
              >
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
              <NuxtLink
                to="/help"
                @click="mobileMenuOpen = false"
                class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon
                  name="mdi:help-circle-outline"
                  class="w-4 h-4 inline-block mr-1"
                />
                Help Center
              </NuxtLink>
              <NuxtLink
                to="/settings"
                @click="mobileMenuOpen = false"
                class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon
                  name="mdi:cog-outline"
                  class="w-4 h-4 inline-block mr-1"
                />
                Settings
              </NuxtLink>
              <NuxtLink
                to="/privacy"
                @click="mobileMenuOpen = false"
                class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon
                  name="mdi:shield-check-outline"
                  class="w-4 h-4 inline-block mr-1"
                />
                Privacy
              </NuxtLink>
              <NuxtLink
                to="/terms"
                @click="mobileMenuOpen = false"
                class="text-gray-600 hover:text-emerald-600 text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon
                  name="mdi:file-document-outline"
                  class="w-4 h-4 inline-block mr-1"
                />
                Terms
              </NuxtLink>
            </div>
          </div>

          <!-- Language Selector (Mobile) -->
          <div class="mt-4">
            <p
              class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2"
            >
              Language
            </p>
            <div class="space-y-1">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="selectLanguage(lang)"
                class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                :class="{
                  'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400':
                    selectedLanguage.code === lang.code,
                  'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800':
                    selectedLanguage.code !== lang.code,
                }"
              >
                <span class="text-2xl">{{ lang.flag }}</span>
                <div class="flex-1 text-left">
                  <p class="font-semibold text-sm">
                    {{ lang.name }}
                  </p>
                  <p class="text-xs opacity-70">
                    {{ lang.nativeName }}
                  </p>
                </div>
                <Icon
                  v-if="selectedLanguage.code === lang.code"
                  name="mdi:check-circle"
                  class="w-5 h-5 text-emerald-600"
                />
              </button>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-6 flex justify-center gap-3">
            <a
              href="#"
              class="w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Icon name="mdi:linkedin" class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-900/30 text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Icon name="mdi:twitter" class="w-5 h-5" />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-gray-100 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Icon name="mdi:instagram" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { onClickOutside } from "@vueuse/core";


const mobileMenuOpen = ref(false);
const showSearch = ref(false);
const langDropdownOpen = ref(false);
const langDropdownRef = ref<HTMLElement | null>(null);

// Language options
interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
];

const selectedLanguage = ref<Language>(languages[0]!);  

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang;
  langDropdownOpen.value = false;
  // TODO: Implement actual language switching logic
  console.log("Language selected:", lang.code);
};

// Close language dropdown when clicking outside
onClickOutside(langDropdownRef, () => {
  langDropdownOpen.value = false;
});

// Expose header height as a CSS variable so page content can avoid being
// hidden under the fixed navbar. We set it on document.documentElement
// so layouts and pages can read it (used by app.vue).
const headerRef = ref<HTMLElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

function updateHeaderHeight() {
  const el = headerRef.value;
  if (!el) return;
  const height = Math.ceil(el.getBoundingClientRect().height);
  document.documentElement.style.setProperty(
    "--site-header-height",
    `${height}px`,
  );
}

onMounted(() => {
  // Setup header height tracking
  updateHeaderHeight();
  if (typeof ResizeObserver !== "undefined" && headerRef.value) {
    resizeObserver = new ResizeObserver(() => updateHeaderHeight());
    resizeObserver.observe(headerRef.value);
  }
  window.addEventListener("resize", updateHeaderHeight, { passive: true });
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
  window.removeEventListener("resize", updateHeaderHeight);
});

const navItems = [
  {
    path: "/jobs",
    label: "Jobs",
    icon: "mdi:briefcase-search",
    description: "Browse opportunities",
  },
  {
    path: "/companies",
    label: "Companies",
    icon: "mdi:office-building",
    description: "Top employers",
  },
  {
    path: "/explore",
    label: "Explore",
    icon: "mdi:compass",
    description: "Discover & connect",
  },
  {
    path: "/about",
    label: "About",
    icon: "mdi:information-outline",
    description: "Our story",
  },
  {
    path: "/contact",
    label: "Contact",
    icon: "mdi:email-outline",
    description: "Get in touch",
  },
];

// Close mobile menu when route changes
const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
    showSearch.value = false;
  },
);

watch(showSearch, async () => {
  await nextTick();
  updateHeaderHeight();
});

// Prevent body scroll when mobile menu is open
watch(mobileMenuOpen, (isOpen: boolean) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = "";
});
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
  background-color: #e0f7ef;
}

.dark .router-link-active.nav-link {
  color: #34d399;
  background-color: #134e4a;
}

.router-link-active.nav-link > span:last-of-type {
  width: 66.666667%; /* 2/3 width */
}

/* Mobile nav active state */
.router-link-active.mobile-nav-link {
  background-color: #f0fdf4;
  color: #10b981;
}

.dark .router-link-active.mobile-nav-link {
  background-color: rgba(16, 185, 129, 0.15);
  color: #34d399;
}

.router-link-active.mobile-nav-link .bg-gray-100 {
  background-color: #d1fae5;
}

.dark .router-link-active.mobile-nav-link .bg-gray-100 {
  background-color: rgba(16, 185, 129, 0.25);
}

/* Smooth transitions for all interactive elements */
* {
  -webkit-tap-highlight-color: transparent;
}

button,
a,
input {
  transition-property:
    background-color, border-color, color, fill, stroke, opacity, box-shadow,
    transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
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

.dark .mobile-menu-scroll::-webkit-scrollbar-track {
  background: #1e293b;
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

.mobile-nav-link:nth-child(1) {
  animation-delay: 0.05s;
}
.mobile-nav-link:nth-child(2) {
  animation-delay: 0.1s;
}
.mobile-nav-link:nth-child(3) {
  animation-delay: 0.15s;
}
.mobile-nav-link:nth-child(4) {
  animation-delay: 0.2s;
}

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
  button,
  a {
    min-height: 44px;
    min-width: 44px;
  }
}
</style>
