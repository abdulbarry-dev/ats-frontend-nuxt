<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Saved Jobs</h1>
          <p class="text-sm text-gray-500 mt-1">You have <span class="font-medium text-gray-800">3</span> saved job(s).</p>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <label class="relative flex-1 md:flex-none">
            <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <!-- search icon -->
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input aria-label="Search saved jobs" placeholder="Search title, company, location" class="w-full md:w-80 pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          </label>

          <div class="flex items-center gap-2">
            <div class="hidden sm:flex items-center gap-2">
              <button class="px-3 py-1 rounded-lg border border-gray-200 text-sm bg-emerald-50 text-emerald-700">All</button>
              <button class="px-3 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-600">Remote</button>
              <button class="px-3 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-600">On-site</button>
            </div>

            <select aria-label="Sort saved jobs" class="px-3 py-1 border border-gray-200 rounded-lg bg-white text-sm">
              <option>Most recent</option>
              <option>Highest salary</option>
              <option>Company A–Z</option>
            </select>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold text-lg">NL</div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">Senior Frontend Engineer</h3>
                  <p class="text-sm text-gray-600 truncate">Nebula Labs · <span class="inline-flex items-center text-gray-500">Full-time <span class="mx-2">·</span> Remote</span></p>
                </div>

                <div class="flex-shrink-0 text-right">
                  <p class="text-sm text-gray-600">Salary</p>
                  <p class="text-sm font-medium text-gray-900">$120k - $140k</p>
                </div>
              </div>

              <p class="mt-3 text-gray-600 text-sm truncate-multiline">Build delightful user experiences in a collaborative product team. Work closely with designers and backend engineers to ship features.</p>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Vue</span>
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">TypeScript</span>
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Remote</span>
              </div>
            </div>
          </div>

          <footer class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <NuxtLink to="/jobs/1" class="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700">Apply</NuxtLink>
              <NuxtLink to="/jobs/1" class="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">View</NuxtLink>
            </div>

            <div class="flex items-center gap-2">
              <button title="Saved" class="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50" aria-pressed="true">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6 2a1 1 0 0 0-1 1v18l7-4 7 4V3a1 1 0 0 0-1-1H6z" />
                </svg>
              </button>

              <button title="Remove saved job" class="p-2 rounded-lg text-gray-400 hover:bg-gray-50">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                </svg>
              </button>
            </div>
          </footer>
        </article>

        <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 text-emerald-700 font-semibold">HS</div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">Product Designer</h3>
                  <p class="text-sm text-gray-600 truncate">Horizon Studio · <span class="inline-flex items-center text-gray-500">Contract <span class="mx-2">·</span> San Francisco, CA</span></p>
                </div>

                <div class="flex-shrink-0 text-right">
                  <p class="text-sm text-gray-600">Salary</p>
                  <p class="text-sm font-medium text-gray-900">$80k - $100k</p>
                </div>
              </div>

              <p class="mt-3 text-gray-600 text-sm truncate-multiline">Lead product design initiatives and work with cross-functional teams to push product quality higher.</p>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Figma</span>
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">UX</span>
              </div>
            </div>
          </div>

          <footer class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <NuxtLink to="/jobs/2" class="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700">Apply</NuxtLink>
              <NuxtLink to="/jobs/2" class="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">View</NuxtLink>
            </div>

            <div class="flex items-center gap-2">
              <button title="Saved" class="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50" aria-pressed="true">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6 2a1 1 0 0 0-1 1v18l7-4 7 4V3a1 1 0 0 0-1-1H6z" />
                </svg>
              </button>

              <button title="Remove saved job" class="p-2 rounded-lg text-gray-400 hover:bg-gray-50">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                </svg>
              </button>
            </div>
          </footer>
        </article>

        <article class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-14 h-14 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold text-lg">AS</div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">Backend Engineer (Go)</h3>
                  <p class="text-sm text-gray-600 truncate">Atlas Systems · <span class="inline-flex items-center text-gray-500">Full-time <span class="mx-2">·</span> New York, NY</span></p>
                </div>

                <div class="flex-shrink-0 text-right">
                  <p class="text-sm text-gray-600">Salary</p>
                  <p class="text-sm font-medium text-gray-900">$130k - $150k</p>
                </div>
              </div>

              <p class="mt-3 text-gray-600 text-sm truncate-multiline">Work on scalable services and platform-level features in a fast-paced engineering organization.</p>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Go</span>
                <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Postgres</span>
              </div>
            </div>
          </div>

          <footer class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <NuxtLink to="/jobs/3" class="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700">Apply</NuxtLink>
              <NuxtLink to="/jobs/3" class="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">View</NuxtLink>
            </div>

            <div class="flex items-center gap-2">
              <button title="Saved" class="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50" aria-pressed="true">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6 2a1 1 0 0 0-1 1v18l7-4 7 4V3a1 1 0 0 0-1-1H6z" />
                </svg>
              </button>

              <button title="Remove saved job" class="p-2 rounded-lg text-gray-400 hover:bg-gray-50">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                </svg>
              </button>
            </div>
          </footer>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
