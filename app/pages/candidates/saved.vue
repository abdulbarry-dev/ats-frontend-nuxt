<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-6">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            Saved Jobs
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            You have
            <span class="font-medium text-gray-800 dark:text-gray-300">3</span>
            saved job(s).
          </p>
        </div>

        <div class="flex items-center gap-3 w-full md:w-auto">
          <label class="relative flex-1 md:flex-none">
            <span
              class="absolute inset-y-0 left-3 flex items-center text-gray-400 dark:text-gray-500"
            >
              <!-- search icon -->
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              aria-label="Search saved jobs"
              placeholder="Search title, company, location"
              class="w-full md:w-80 pl-10 pr-3 py-2 border border-gray-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-400 transition-colors duration-300"
            />
          </label>

          <div class="flex items-center gap-2">
            <div class="hidden sm:flex items-center gap-2">
              <button
                class="px-3 py-1 rounded-lg border border-gray-200 dark:border-emerald-800 text-sm bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 transition-colors duration-300"
              >
                All
              </button>
              <button
                class="px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-600 text-sm bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                Remote
              </button>
              <button
                class="px-3 py-1 rounded-lg border border-gray-200 dark:border-slate-600 text-sm bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                On-site
              </button>
            </div>

            <select
              aria-label="Sort saved jobs"
              class="px-3 py-1 border border-gray-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-400 transition-colors duration-300"
            >
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
        <article
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div
                class="w-14 h-14 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-semibold text-lg"
              >
                NL
              </div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white truncate"
                  >
                    Senior Frontend Engineer
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
                    Nebula Labs ·
                    <span
                      class="inline-flex items-center text-gray-500 dark:text-gray-400"
                      >Full-time <span class="mx-2">·</span> Remote</span
                    >
                  </p>
                </div>

                <div class="flex-shrink-0 text-right">
                  <p class="text-sm text-gray-600 dark:text-gray-400">Salary</p>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    $120k - $140k
                  </p>
                </div>
              </div>

              <p
                class="mt-3 text-gray-600 dark:text-gray-400 text-sm truncate-multiline"
              >
                Build delightful user experiences in a collaborative product
                team. Work closely with designers and backend engineers to ship
                features.
              </p>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >Vue</span
                >
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >TypeScript</span
                >
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >Remote</span
                >
              </div>
            </div>
          </div>

          <footer
            class="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between gap-3"
          >
            <div class="flex items-center gap-2">
              <NuxtLink
                to="/jobs/1"
                class="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition-colors"
                >Apply</NuxtLink
              >
              <NuxtLink
                to="/jobs/1"
                class="px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >View</NuxtLink
              >
            </div>

            <div class="flex items-center gap-2">
              <button
                title="Saved"
                class="p-2 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                aria-pressed="true"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6 2a1 1 0 0 0-1 1v18l7-4 7 4V3a1 1 0 0 0-1-1H6z" />
                </svg>
              </button>

              <button
                title="Remove saved job"
                class="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
                  ></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                </svg>
              </button>
            </div>
          </footer>
        </article>

        <article
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div
                class="w-14 h-14 rounded-lg bg-gray-50 dark:bg-slate-700 flex items-center justify-center border border-gray-100 dark:border-slate-600 text-emerald-700 dark:text-emerald-400 font-semibold"
              >
                HS
              </div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white truncate"
                  >
                    Product Designer
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
                    Horizon Studio ·
                    <span
                      class="inline-flex items-center text-gray-500 dark:text-gray-400"
                      >Contract <span class="mx-2">·</span> San Francisco,
                      CA</span
                    >
                  </p>
                </div>

                <div class="flex-shrink-0 text-right">
                  <p class="text-sm text-gray-600 dark:text-gray-400">Salary</p>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    $80k - $100k
                  </p>
                </div>
              </div>

              <p
                class="mt-3 text-gray-600 dark:text-gray-400 text-sm truncate-multiline"
              >
                Lead product design initiatives and work with cross-functional
                teams to push product quality higher.
              </p>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >Figma</span
                >
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >UX</span
                >
              </div>
            </div>
          </div>

          <footer
            class="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between gap-3"
          >
            <div class="flex items-center gap-2">
              <NuxtLink
                to="/jobs/2"
                class="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition-colors"
                >Apply</NuxtLink
              >
              <NuxtLink
                to="/jobs/2"
                class="px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >View</NuxtLink
              >
            </div>

            <div class="flex items-center gap-2">
              <button
                title="Saved"
                class="p-2 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                aria-pressed="true"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6 2a1 1 0 0 0-1 1v18l7-4 7 4V3a1 1 0 0 0-1-1H6z" />
                </svg>
              </button>

              <button
                title="Remove saved job"
                class="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
                  ></path>
                  <path d="M10 11v6"></path>
                  <path d="M14 11v6"></path>
                </svg>
              </button>
            </div>
          </footer>
        </article>

        <article
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div
                class="w-14 h-14 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-semibold text-lg"
              >
                AS
              </div>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white truncate"
                  >
                    Backend Engineer (Go)
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 truncate">
                    Atlas Systems ·
                    <span
                      class="inline-flex items-center text-gray-500 dark:text-gray-400"
                      >Full-time <span class="mx-2">·</span> New York, NY</span
                    >
                  </p>
                </div>

                <div class="flex-shrink-0 text-right">
                  <p class="text-sm text-gray-600 dark:text-gray-400">Salary</p>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    $130k - $150k
                  </p>
                </div>
              </div>

              <p
                class="mt-3 text-gray-600 dark:text-gray-400 text-sm truncate-multiline"
              >
                Work on scalable services and platform-level features in a
                fast-paced engineering organization.
              </p>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >Go</span
                >
                <span
                  class="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded"
                  >Postgres</span
                >
              </div>
            </div>
          </div>

          <footer
            class="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between gap-3"
          >
            <div class="flex items-center gap-2">
              <NuxtLink
                to="/jobs/3"
                class="px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm hover:bg-emerald-700 transition-colors"
                >Apply</NuxtLink
              >
              <NuxtLink
                to="/jobs/3"
                class="px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >View</NuxtLink
              >
            </div>

            <div class="flex items-center gap-2">
              <button
                title="Saved"
                class="p-2 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                aria-pressed="true"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6 2a1 1 0 0 0-1 1v18l7-4 7 4V3a1 1 0 0 0-1-1H6z" />
                </svg>
              </button>

              <button
                title="Remove saved job"
                class="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
                  ></path>
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
