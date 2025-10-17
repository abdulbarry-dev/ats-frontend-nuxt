<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">My Applications</h1>
          <p class="text-sm text-gray-500 mt-1">Manage your recent applications and their status.</p>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <label class="relative flex-1 md:flex-none">
            <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input v-model="search" aria-label="Search applications" placeholder="Search by title or company" class="w-full md:w-80 pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          </label>

          <select v-model="statusFilter" class="px-3 py-1 border border-gray-200 rounded-lg bg-white text-sm">
            <option value="all">All status</option>
            <option value="under-review">Under Review</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
            <option value="offer">Offer</option>
          </select>

          <select v-model="sortBy" class="px-3 py-1 border border-gray-200 rounded-lg bg-white text-sm">
            <option value="recent">Most recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </header>

    <main>
      <div v-if="filteredApplications.length === 0" class="text-center py-16">
        <p class="text-gray-600">No applications match your search or filters.</p>
        <NuxtLink to="/jobs" class="inline-flex items-center mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg">Browse jobs</NuxtLink>
      </div>

      <div v-else class="space-y-4">
        <article v-for="app in filteredApplications" :key="app.id" class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div class="flex justify-between items-start gap-4">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
                <img v-if="app.logo" :src="app.logo" :alt="app.company + ' logo'" class="object-contain w-full h-full" />
                <div v-else class="text-emerald-700 font-semibold">{{ initials(app.company) }}</div>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ app.title }}</h3>
                <p class="text-sm text-gray-600">{{ app.company }} · {{ app.location }}</p>
                <p class="text-sm text-gray-500 mt-2">Applied {{ timeAgo(app.appliedAt) }}</p>
              </div>
            </div>

            <div class="flex flex-col items-end gap-3">
              <span :class="statusClass(app.status)" class="px-3 py-1 rounded-full text-sm font-medium">{{ statusLabel(app.status) }}</span>
              <div class="flex items-center gap-2">
                <NuxtLink :to="`/jobs/${app.jobId}`" class="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">View</NuxtLink>
                <button @click="withdraw(app.id)" class="px-3 py-2 bg-red-50 text-red-700 border border-red-100 rounded-lg text-sm hover:bg-red-100">Withdraw</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
useHead({ title: 'My Applications - FindPoint' })

const search = ref('')
const statusFilter = ref<'all' | 'under-review' | 'interview' | 'rejected' | 'offer'>('all')
const sortBy = ref<'recent' | 'oldest'>('recent')

const applications = ref([
  { id: 'a1', jobId: '1', title: 'Software Engineer', company: 'Nebula Labs', logo: '', location: 'Remote', status: 'under-review', appliedAt: '2025-10-10' },
  { id: 'a2', jobId: '2', title: 'Product Designer', company: 'Horizon Studio', logo: '', location: 'San Francisco, CA', status: 'interview', appliedAt: '2025-09-28' },
  { id: 'a3', jobId: '3', title: 'Data Scientist', company: 'Atlas Systems', logo: '', location: 'New York, NY', status: 'rejected', appliedAt: '2025-09-05' },
  { id: 'a4', jobId: '4', title: 'Frontend Developer', company: 'Aster Labs', logo: '', location: 'Austin, TX', status: 'offer', appliedAt: '2025-08-01' }
])

const filteredApplications = computed(() => {
  let list = applications.value.slice()

  if (statusFilter.value !== 'all') list = list.filter(a => a.status === statusFilter.value)

  if (search.value && search.value.trim()) {
    const q = search.value.toLowerCase()
    list = list.filter(a => (a.title + ' ' + a.company).toLowerCase().includes(q))
  }

  list.sort((a, b) => {
    const da = new Date(a.appliedAt).getTime()
    const db = new Date(b.appliedAt).getTime()
    return sortBy.value === 'recent' ? db - da : da - db
  })

  return list
})

function initials(name: string) {
  return name ? name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase() : ''
}

function timeAgo(dateStr: string) {
  const d = new Date(dateStr)
  const diff = Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24))
  if (diff <= 0) return 'today'
  if (diff === 1) return '1 day ago'
  return `${diff} days ago`
}

function statusLabel(status: string) {
  return {
    'under-review': 'Under Review',
    'interview': 'Interview',
    'rejected': 'Rejected',
    'offer': 'Offer'
  }[status] || 'Unknown'
}

function statusClass(status: string) {
  switch (status) {
    case 'under-review': return 'bg-blue-50 text-blue-600'
    case 'interview': return 'bg-amber-50 text-amber-700'
    case 'rejected': return 'bg-red-50 text-red-600'
    case 'offer': return 'bg-emerald-50 text-emerald-700'
    default: return 'bg-gray-50 text-gray-700'
  }
}

function withdraw(id: string) {
  const idx = applications.value.findIndex(a => a.id === id)
  if (idx > -1) applications.value.splice(idx, 1)
}
</script>

<style scoped>
.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
