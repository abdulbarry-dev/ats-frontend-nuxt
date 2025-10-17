<template>
  <div class="min-h-screen w-full bg-gray-50 flex items-center justify-center">
    <!-- Centered full-viewport panel that never forces vertical scroll -->
    <section
      class="w-full max-w-6xl h-screen mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 lg:p-10"
      role="region"
      aria-label="Settings"
    >
      <!-- Left column: navigation (sticky, accessible) -->
      <aside
        class="col-span-1 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col"
        aria-labelledby="settings-heading"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 id="settings-heading" class="text-xl font-semibold text-gray-800">Settings</h2>
          <button
            class="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 rounded-md"
            aria-label="Close settings">
            <!-- placeholder for an icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </button>
        </div>

        <nav class="flex-1 overflow-auto" aria-label="Settings navigation">
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/settings/profile"
                class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                <!-- icon -->
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A11.955 11.955 0 0112 15c2.21 0 4.28.598 6.021 1.637M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span class="flex-1">Profile</span>
                <span class="text-xs text-gray-400">Edit</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/settings/account" class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.866-3.582 7-8 7" />
                  </svg>
                </span>
                <span class="flex-1">Account</span>
                <span class="text-xs text-gray-400">Security</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/settings/notifications" class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14H5.4a2.032 2.032 0 01-1.995 1.595L2 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                <span class="flex-1">Notifications</span>
                <span class="text-xs text-gray-400">Preferences</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/settings/billing" class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3" />
                  </svg>
                </span>
                <span class="flex-1">Billing</span>
                <span class="text-xs text-gray-400">Invoices</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/settings/theme" class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M6.343 17.657l-.707.707M17.657 17.657l.707-.707M6.343 6.343l-.707-.707" />
                  </svg>
                </span>
                <span class="flex-1">Theme</span>
                <span class="text-xs text-gray-400">Appearance</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/settings/candidate" class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m-7 8h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <span class="flex-1">Candidate Settings</span>
                <span class="text-xs text-gray-400">Profiles</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/settings/recruiter" class="group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                <span class="flex-none text-emerald-500 group-hover:text-emerald-600" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </span>
                <span class="flex-1">Recruiter Settings</span>
                <span class="text-xs text-gray-400">Team</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <footer class="mt-4 text-xs text-gray-400">
          <p class="truncate">FindPoint • <NuxtLink to="/privacy" class="underline">Privacy</NuxtLink></p>
        </footer>
      </aside>

    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'

useHead({ title: 'Settings - FindPoint' })

const route = useRoute()
const isIndexRoute = computed(() => route.path === '/settings' || route.path === '/settings/')
</script>

<style scoped>
/* Keep layout full viewport with smooth subtle animations */
.rounded-2xl { border-radius: 14px; }
/* Provide a comfortable focus ring for keyboard users */
button:focus { outline: none; }
button:focus-visible { box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12); }

/* Respect reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .group:hover { transform: translateY(-1px); transition: transform 160ms ease; }
}

/* Ensure no internal vertical scrollbars appear on standard viewports */
html, body, #__nuxt, .min-h-screen { height: 100%; }
</style>
 