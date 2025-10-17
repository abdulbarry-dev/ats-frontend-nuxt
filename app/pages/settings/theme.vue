<template>
  <div class="min-h-full w-full flex flex-col gap-6 p-6 lg:p-10">
    <header class="flex items-start justify-between">
      <div>
        <h2 class="text-2xl font-semibold text-gray-900">Appearance</h2>
        <p class="text-sm text-gray-500 mt-1">Customize the look and feel of FindPoint.</p>
      </div>
    </header>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h3 class="text-lg font-medium text-gray-800">Theme mode</h3>
        <p class="text-sm text-gray-500 mt-1">Choose light, dark, or follow system preference.</p>

        <div class="mt-4 space-y-3">
          <label class="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="radio" name="theme" class="sr-only" :checked="theme === 'light'" @change="setTheme('light')" />
            <span class="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-amber-500">
              <!-- Sun icon (clean SVG) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="3" class="text-amber-500" stroke="currentColor" />
                <path d="M12 2v1m0 18v1M4.22 4.22l.7.7M18.36 18.36l.7.7M2 12h1m18 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" stroke="currentColor" />
              </svg>
            </span>
            <div>
              <div class="text-sm font-medium text-gray-800">Light</div>
              <div class="text-xs text-gray-500">Bright and clear</div>
            </div>
          </label>

          <label class="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="radio" name="theme" class="sr-only" :checked="theme === 'dark'" @change="setTheme('dark')" />
            <span class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center text-white">
              <!-- Moon icon (clean SVG) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" />
              </svg>
            </span>
            <div>
              <div class="text-sm font-medium text-gray-800">Dark</div>
              <div class="text-xs text-gray-500">Low-light friendly</div>
            </div>
          </label>

          <label class="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <input type="radio" name="theme" class="sr-only" :checked="theme === 'system'" @change="setTheme('system')" />
            <span class="h-6 w-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-700">
              <!-- Cog / system icon (clean SVG) -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" stroke="currentColor" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09c.67 0 1.18-.4 1.51-1a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06c.45.45 1.09.6 1.66.33.45-.2.9-.33 1.51-.33H12c.61 0 1.06.13 1.51.33.57.27 1.21.12 1.66-.33l.06-.06a2 2 0 012.83 2.83l-.06.06c-.34.6-.28 1.2.05 1.82.31.6.9 1 1.51 1H21a2 2 0 010 4h-.09c-.61 0-1.06.13-1.51.33-.57.27-1.21.12-1.66-.33l-.06-.06a2 2 0 01-2.83 2.83l-.06-.06c-.45-.45-1.09-.6-1.66-.33-.45.2-.9.33-1.51.33H12" stroke="currentColor" />
              </svg>
            </span>
            <div>
              <div class="text-sm font-medium text-gray-800">System</div>
              <div class="text-xs text-gray-500">Follow your device</div>
            </div>
          </label>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h3 class="text-lg font-medium text-gray-800">Accent color</h3>
        <p class="text-sm text-gray-500 mt-1">Pick an accent color used across the app.</p>

        <div class="mt-4 grid grid-cols-6 gap-3">
          <button v-for="sw in swatches" :key="sw.name" @click="setAccent(sw.value)" :aria-pressed="accent===sw.value" class="h-10 w-10 rounded-lg shadow-sm focus:outline-none" :style="{ background: sw.value }">
          </button>
        </div>

        <div class="mt-6">
          <h4 class="text-sm font-medium text-gray-800">Font scale</h4>
          <p class="text-xs text-gray-500 mt-1">Adjust base font size for accessibility.</p>
          <div class="mt-3 flex items-center gap-3">
            <button @click="adjustFont(-1)" class="px-3 py-1 rounded-md border">A-</button>
            <div class="text-sm">{{ fontScaleLabel }}</div>
            <button @click="adjustFont(1)" class="px-3 py-1 rounded-md border">A+</button>
          </div>
        </div>
      </div>
    </section>

    <div class="mt-auto flex items-center justify-end gap-3">
      <button @click="resetDefaults" class="text-sm px-4 py-2 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">Reset</button>
      <button @click="save" class="text-sm px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const theme = ref<'light'|'dark'|'system'>('system')
const accent = ref<string>('#10b981')
const fontScale = ref(0)

const swatches = [
  { name: 'Emerald', value: '#10b981' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Rose', value: '#fb7185' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Slate', value: '#64748b' }
]

const setTheme = (t: 'light'|'dark'|'system') => { theme.value = t }
const setAccent = (c: string) => { accent.value = c }
const adjustFont = (delta: number) => { fontScale.value = Math.max(-2, Math.min(2, fontScale.value + delta)) }
const fontScaleLabel = computed(() => (fontScale.value === 0 ? 'Default' : fontScale.value > 0 ? `+${fontScale.value}` : `${fontScale.value}`))

const save = () => {
  // persist to localStorage as a lightweight placeholder
  localStorage.setItem('fp:theme', JSON.stringify({ theme: theme.value, accent: accent.value, fontScale: fontScale.value }))
}

const resetDefaults = () => {
  theme.value = 'system'
  accent.value = '#10b981'
  fontScale.value = 0
}
</script>

<style scoped>
.rounded-xl { border-radius: 12px; }
button[aria-pressed="true"] { box-shadow: 0 0 0 3px rgba(16,185,129,0.12); transform: translateY(-2px); }
</style>
