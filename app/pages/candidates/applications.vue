<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          My Applications
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Track and manage all your job applications
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-4 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:file-document-multiple"
                class="w-5 h-5 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ applications.length }}
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">Total</div>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-4 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:clock-outline"
                class="w-5 h-5 text-blue-600 dark:text-blue-400"
              />
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ statusCount("under-review") }}
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                In Review
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-4 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:calendar-check"
                class="w-5 h-5 text-amber-600 dark:text-amber-400"
              />
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ statusCount("interview") }}
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                Interviews
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-4 hover:shadow-md transition-all duration-300"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:star-circle"
                class="w-5 h-5 text-purple-600 dark:text-purple-400"
              />
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ statusCount("offer") }}
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">Offers</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters & Search -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-4 mb-6 transition-colors duration-300"
      >
        <div class="flex flex-col lg:flex-row gap-4">
          <!-- Search -->
          <div class="relative flex-1">
            <Icon
              name="mdi:magnify"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              v-model="search"
              type="text"
              placeholder="Search by job title or company name..."
              class="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-600 rounded-xl bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:bg-white dark:focus:bg-slate-600 transition-all"
            />
          </div>

          <!-- Filter Buttons -->
          <div class="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
            <button
              @click="statusFilter = 'all'"
              :class="[
                'px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300',
                statusFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600',
              ]"
            >
              All ({{ applications.length }})
            </button>
            <button
              @click="statusFilter = 'under-review'"
              :class="[
                'px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300',
                statusFilter === 'under-review'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600',
              ]"
            >
              In Review ({{ statusCount("under-review") }})
            </button>
            <button
              @click="statusFilter = 'interview'"
              :class="[
                'px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300',
                statusFilter === 'interview'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600',
              ]"
            >
              Interview ({{ statusCount("interview") }})
            </button>
            <button
              @click="statusFilter = 'offer'"
              :class="[
                'px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300',
                statusFilter === 'offer'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600',
              ]"
            >
              Offers ({{ statusCount("offer") }})
            </button>
            <button
              @click="statusFilter = 'rejected'"
              :class="[
                'px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300',
                statusFilter === 'rejected'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600',
              ]"
            >
              Rejected ({{ statusCount("rejected") }})
            </button>
          </div>

          <!-- Sort -->
          <select
            v-model="sortBy"
            class="px-4 py-2.5 border border-gray-200 dark:border-slate-600 rounded-xl bg-gray-50 dark:bg-slate-700 text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:bg-white dark:focus:bg-slate-600 transition-all cursor-pointer"
          >
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      <!-- Applications List -->
      <div
        v-if="filteredApplications.length === 0"
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-16 text-center transition-colors duration-300"
      >
        <div
          class="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Icon
            name="mdi:briefcase-search-outline"
            class="w-12 h-12 text-gray-400"
          />
        </div>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
          No applications found
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
          {{
            search
              ? "Try adjusting your search or filters"
              : "Start applying to jobs to see them here"
          }}
        </p>
        <NuxtLink
          to="/jobs"
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Icon name="mdi:briefcase-search" class="w-5 h-5" />
          Browse Jobs
        </NuxtLink>
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="app in filteredApplications"
          :key="app.id"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 overflow-hidden group"
        >
          <div class="p-6">
            <div
              class="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <!-- Left: Company & Job Info -->
              <div class="flex items-start gap-4 flex-1">
                <!-- Company Logo -->
                <div
                  class="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-slate-600 overflow-hidden group-hover:scale-105 transition-transform duration-300"
                >
                  <img
                    v-if="app.logo"
                    :src="app.logo"
                    :alt="app.company + ' logo'"
                    class="object-contain w-full h-full"
                  />
                  <div
                    v-else
                    class="text-emerald-700 dark:text-emerald-400 font-bold text-lg"
                  >
                    {{ initials(app.company) }}
                  </div>
                </div>

                <!-- Job Details -->
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                  >
                    {{ app.title }}
                  </h3>
                  <p
                    class="text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2"
                  >
                    <Icon name="mdi:office-building" class="w-4 h-4" />
                    {{ app.company }}
                  </p>

                  <div class="flex flex-wrap items-center gap-3 text-sm">
                    <span
                      class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"
                    >
                      <Icon
                        name="mdi:map-marker"
                        class="w-4 h-4 text-gray-400"
                      />
                      {{ app.location }}
                    </span>
                    <span
                      class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"
                    >
                      <Icon
                        name="mdi:clock-outline"
                        class="w-4 h-4 text-gray-400"
                      />
                      Applied {{ timeAgo(app.appliedAt) }}
                    </span>
                    <span
                      v-if="app.salary"
                      class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold"
                    >
                      <Icon name="mdi:currency-usd" class="w-4 h-4" />
                      {{ app.salary }}
                    </span>
                  </div>

                  <!-- Progress Timeline (if interview) -->
                  <div
                    v-if="app.status === 'interview' || app.status === 'offer'"
                    class="mt-4 pt-4 border-t border-gray-100"
                  >
                    <div class="flex items-center gap-2">
                      <div class="flex items-center gap-1">
                        <div
                          class="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"
                        >
                          <Icon name="mdi:check" class="w-4 h-4 text-white" />
                        </div>
                        <div class="text-xs font-medium text-gray-700">
                          Applied
                        </div>
                      </div>
                      <div class="h-0.5 w-8 bg-emerald-600"></div>
                      <div class="flex items-center gap-1">
                        <div
                          class="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"
                        >
                          <Icon name="mdi:check" class="w-4 h-4 text-white" />
                        </div>
                        <div class="text-xs font-medium text-gray-700">
                          Review
                        </div>
                      </div>
                      <div
                        :class="[
                          'h-0.5 w-8',
                          app.status === 'offer'
                            ? 'bg-emerald-600'
                            : 'bg-gray-200',
                        ]"
                      ></div>
                      <div class="flex items-center gap-1">
                        <div
                          :class="[
                            'w-6 h-6 rounded-full flex items-center justify-center',
                            app.status === 'offer'
                              ? 'bg-emerald-600'
                              : 'bg-amber-600',
                          ]"
                        >
                          <Icon
                            :name="
                              app.status === 'offer'
                                ? 'mdi:check'
                                : 'mdi:calendar'
                            "
                            class="w-4 h-4 text-white"
                          />
                        </div>
                        <div class="text-xs font-medium text-gray-700">
                          Interview
                        </div>
                      </div>
                      <div
                        :class="[
                          'h-0.5 w-8',
                          app.status === 'offer'
                            ? 'bg-emerald-600'
                            : 'bg-gray-200',
                        ]"
                      ></div>
                      <div class="flex items-center gap-1">
                        <div
                          :class="[
                            'w-6 h-6 rounded-full flex items-center justify-center',
                            app.status === 'offer'
                              ? 'bg-emerald-600'
                              : 'bg-gray-200',
                          ]"
                        >
                          <Icon name="mdi:trophy" class="w-4 h-4 text-white" />
                        </div>
                        <div class="text-xs font-medium text-gray-700">
                          Offer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Status & Actions -->
              <div class="flex flex-col items-end gap-4 lg:min-w-[200px]">
                <!-- Status Badge -->
                <span
                  :class="[
                    'px-4 py-2 rounded-xl text-sm font-bold shadow-sm',
                    statusClass(app.status),
                  ]"
                >
                  {{ statusLabel(app.status) }}
                </span>

                <!-- Action Buttons -->
                <div class="flex items-center gap-2 w-full">
                  <NuxtLink
                    :to="`/jobs/${app.jobId}`"
                    class="flex-1 px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-all duration-300 text-center"
                  >
                    View Job
                  </NuxtLink>
                  <button
                    @click="showWithdrawDialog(app.id)"
                    class="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300"
                    title="Withdraw application"
                  >
                    <Icon name="mdi:close-circle" class="w-5 h-5" />
                  </button>
                </div>

                <!-- Additional Actions -->
                <button
                  v-if="app.status === 'interview'"
                  class="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:calendar-plus" class="w-4 h-4" />
                  Schedule Interview
                </button>
                <button
                  v-if="app.status === 'offer'"
                  class="w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="mdi:file-document-check" class="w-4 h-4" />
                  View Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Withdraw Confirmation Dialog -->
    <Transition name="modal">
      <div
        v-if="withdrawDialogOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="withdrawDialogOpen = false"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all"
        >
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
            >
              <Icon name="mdi:alert-circle" class="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">
                Withdraw Application?
              </h3>
              <p class="text-sm text-gray-600">This action cannot be undone</p>
            </div>
          </div>

          <p class="text-gray-600 mb-6">
            Are you sure you want to withdraw your application? You won't be
            able to recover it.
          </p>

          <div class="flex gap-3">
            <button
              @click="withdrawDialogOpen = false"
              class="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              @click="confirmWithdraw"
              class="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const search = ref("");
const statusFilter = ref<
  "all" | "under-review" | "interview" | "rejected" | "offer"
>("all");
const sortBy = ref<"recent" | "oldest">("recent");
const withdrawDialogOpen = ref(false);
const applicationToWithdraw = ref<string | null>(null);

const applications = ref([
  {
    id: "a1",
    jobId: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    logo: "",
    location: "San Francisco, CA",
    status: "under-review",
    appliedAt: "2025-10-15",
    salary: "$120k - $150k",
  },
  {
    id: "a2",
    jobId: "2",
    title: "Frontend Engineer",
    company: "StartupXYZ",
    logo: "",
    location: "Remote",
    status: "interview",
    appliedAt: "2025-10-10",
    salary: "$100k - $130k",
  },
  {
    id: "a3",
    jobId: "3",
    title: "React Developer",
    company: "Digital Solutions",
    logo: "",
    location: "New York, NY",
    status: "rejected",
    appliedAt: "2025-09-28",
    salary: "$110k - $140k",
  },
  {
    id: "a4",
    jobId: "4",
    title: "Lead Full Stack Engineer",
    company: "InnovateTech",
    logo: "",
    location: "Austin, TX",
    status: "offer",
    appliedAt: "2025-09-20",
    salary: "$130k - $160k",
  },
  {
    id: "a5",
    jobId: "5",
    title: "Software Engineer",
    company: "CloudSystems",
    logo: "",
    location: "Seattle, WA",
    status: "under-review",
    appliedAt: "2025-10-12",
    salary: "$115k - $145k",
  },
  {
    id: "a6",
    jobId: "6",
    title: "Full Stack Developer",
    company: "GrowthStartup",
    logo: "",
    location: "Remote",
    status: "interview",
    appliedAt: "2025-10-05",
    salary: "$125k - $155k",
  },
]);

const filteredApplications = computed(() => {
  let list = applications.value.slice();

  if (statusFilter.value !== "all") {
    list = list.filter((a) => a.status === statusFilter.value);
  }

  if (search.value && search.value.trim()) {
    const q = search.value.toLowerCase();
    list = list.filter((a) =>
      (a.title + " " + a.company).toLowerCase().includes(q),
    );
  }

  list.sort((a, b) => {
    const da = new Date(a.appliedAt).getTime();
    const db = new Date(b.appliedAt).getTime();
    return sortBy.value === "recent" ? db - da : da - db;
  });

  return list;
});

const statusCount = (status: string) => {
  return applications.value.filter((a) => a.status === status).length;
};

const initials = (name: string) => {
  return name
    ? name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";
};

const timeAgo = (dateStr: string) => {
  const d = new Date(dateStr);
  const diff = Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return "today";
  if (diff === 1) return "1 day ago";
  if (diff < 7) return `${diff} days ago`;
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  return `${Math.floor(diff / 30)} months ago`;
};

const statusLabel = (status: string) => {
  return (
    {
      "under-review": "Under Review",
      interview: "Interview Scheduled",
      rejected: "Not Selected",
      offer: "Offer Received",
    }[status] || "Unknown"
  );
};

const statusClass = (status: string) => {
  switch (status) {
    case "under-review":
      return "bg-blue-100 text-blue-700 border border-blue-200";
    case "interview":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "rejected":
      return "bg-red-100 text-red-700 border border-red-200";
    case "offer":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    default:
      return "bg-gray-100 text-gray-700 border border-gray-200";
  }
};

const showWithdrawDialog = (id: string) => {
  applicationToWithdraw.value = id;
  withdrawDialogOpen.value = true;
};

const confirmWithdraw = () => {
  if (applicationToWithdraw.value) {
    const idx = applications.value.findIndex(
      (a) => a.id === applicationToWithdraw.value,
    );
    if (idx > -1) {
      applications.value.splice(idx, 1);
    }
  }
  withdrawDialogOpen.value = false;
  applicationToWithdraw.value = null;
};

useHead({
  title: "My Applications - FindPoint",
  meta: [
    {
      name: "description",
      content: "Track and manage all your job applications",
    },
  ],
});
</script>

<style scoped>
/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>
