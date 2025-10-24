<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4"
        >
          <div>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Analytics Dashboard
            </h1>
            <p class="text-gray-600">
              Track your recruitment performance and insights
            </p>
          </div>
          <div class="flex items-center gap-3">
            <!-- Date Range Filter -->
            <select
              class="px-4 py-2.5 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-white cursor-pointer text-sm"
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
            <button
              class="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Icon name="mdi:download" class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <!-- Key Metrics Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
      >
        <!-- Total Views -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all fade-in-up"
          style="animation-delay: 100ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:eye" class="w-6 h-6 text-blue-600" />
            </div>
            <span
              class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-up" class="w-3 h-3" />
              12.5%
            </span>
          </div>
          <h3 class="text-sm font-medium text-gray-600 mb-1">Total Views</h3>
          <p class="text-3xl font-bold text-gray-900 mb-1">2,345</p>
          <p class="text-xs text-gray-500">vs 2,089 last month</p>
        </div>

        <!-- Applications -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all fade-in-up"
          style="animation-delay: 150ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:file-document" class="w-6 h-6 text-emerald-600" />
            </div>
            <span
              class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-up" class="w-3 h-3" />
              8.3%
            </span>
          </div>
          <h3 class="text-sm font-medium text-gray-600 mb-1">Applications</h3>
          <p class="text-3xl font-bold text-gray-900 mb-1">293</p>
          <p class="text-xs text-gray-500">vs 271 last month</p>
        </div>

        <!-- Conversion Rate -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all fade-in-up"
          style="animation-delay: 200ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:chart-line" class="w-6 h-6 text-purple-600" />
            </div>
            <span
              class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-down" class="w-3 h-3" />
              2.1%
            </span>
          </div>
          <h3 class="text-sm font-medium text-gray-600 mb-1">
            Conversion Rate
          </h3>
          <p class="text-3xl font-bold text-gray-900 mb-1">12.5%</p>
          <p class="text-xs text-gray-500">vs 12.8% last month</p>
        </div>

        <!-- Avg. Time to Hire -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all fade-in-up"
          style="animation-delay: 250ms"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:clock-outline" class="w-6 h-6 text-orange-600" />
            </div>
            <span
              class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1"
            >
              <Icon name="mdi:arrow-down" class="w-3 h-3" />
              3 days
            </span>
          </div>
          <h3 class="text-sm font-medium text-gray-600 mb-1">
            Avg. Time to Hire
          </h3>
          <p class="text-3xl font-bold text-gray-900 mb-1">18 days</p>
          <p class="text-xs text-gray-500">vs 21 days last month</p>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="grid lg:grid-cols-2 gap-6 mb-8">
        <!-- Application Trends Chart -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
          style="animation-delay: 300ms"
        >
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-1">
                Application Trends
              </h2>
              <p class="text-sm text-gray-500">Last 30 days</p>
            </div>
            <div class="flex items-center gap-2">
              <button
                class="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium"
              >
                Daily
              </button>
              <button
                class="px-3 py-1.5 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Weekly
              </button>
              <button
                class="px-3 py-1.5 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                Monthly
              </button>
            </div>
          </div>

          <!-- Placeholder Chart Area -->
          <div
            class="h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-dashed border-gray-300"
          >
            <div class="text-center">
              <Icon
                name="mdi:chart-areaspline"
                class="w-16 h-16 text-gray-400 mx-auto mb-3"
              />
              <p class="text-gray-600 font-medium">Line Chart</p>
              <p class="text-sm text-gray-500">Application trends over time</p>
            </div>
          </div>
        </div>

        <!-- Top Performing Jobs -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
          style="animation-delay: 350ms"
        >
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-1">
                Top Performing Jobs
              </h2>
              <p class="text-sm text-gray-500">By applications received</p>
            </div>
          </div>

          <div class="space-y-4">
            <div
              v-for="(job, index) in topJobs"
              :key="index"
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div
                class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
              >
                {{ index + 1 }}
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-gray-900 truncate mb-1">
                  {{ job.title }}
                </h3>
                <p class="text-xs text-gray-500">{{ job.location }}</p>
              </div>
              <div class="text-right">
                <p class="text-lg font-bold text-emerald-600">
                  {{ job.applications }}
                </p>
                <p class="text-xs text-gray-500">applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Stats Row -->
      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <!-- Source Analysis -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
          style="animation-delay: 400ms"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:source-branch" class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900">Traffic Sources</h2>
              <p class="text-xs text-gray-500">Where candidates find you</p>
            </div>
          </div>

          <div class="space-y-4">
            <div
              v-for="source in trafficSources"
              :key="source.name"
              class="space-y-2"
            >
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium text-gray-700">{{ source.name }}</span>
                <span class="font-bold text-gray-900"
                  >{{ source.percentage }}%</span
                >
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="h-2 rounded-full transition-all duration-500"
                  :class="source.color"
                  :style="`width: ${source.percentage}%`"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Application Status -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
          style="animation-delay: 450ms"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:format-list-checks"
                class="w-6 h-6 text-purple-600"
              />
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900">
                Application Status
              </h2>
              <p class="text-xs text-gray-500">Current pipeline breakdown</p>
            </div>
          </div>

          <div class="space-y-3">
            <div
              v-for="status in applicationStatus"
              :key="status.name"
              class="flex items-center justify-between p-3 rounded-lg bg-gray-50"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-3 h-3 rounded-full"
                  :class="status.dotColor"
                ></div>
                <span class="text-sm font-medium text-gray-700">{{
                  status.name
                }}</span>
              </div>
              <span class="text-lg font-bold text-gray-900">{{
                status.count
              }}</span>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
          style="animation-delay: 500ms"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center"
            >
              <Icon name="mdi:bell-ring" class="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900">Recent Activity</h2>
              <p class="text-xs text-gray-500">Latest updates</p>
            </div>
          </div>

          <div class="space-y-4">
            <div
              v-for="(activity, index) in recentActivities"
              :key="index"
              class="flex gap-3"
            >
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                :class="activity.iconBg"
              >
                <Icon
                  :name="activity.icon"
                  class="w-4 h-4"
                  :class="activity.iconColor"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900 font-medium mb-1">
                  {{ activity.title }}
                </p>
                <p class="text-xs text-gray-500">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Performance Table -->
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
        style="animation-delay: 550ms"
      >
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-lg font-bold text-gray-900 mb-1">
              Job Performance Details
            </h2>
            <p class="text-sm text-gray-500">
              Comprehensive metrics for all active jobs
            </p>
          </div>
          <button
            class="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Icon name="mdi:filter-variant" class="w-4 h-4" />
            Filter
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-900"
                >
                  Job Title
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-900"
                >
                  Views
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-900"
                >
                  Applications
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-900"
                >
                  Conv. Rate
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-900"
                >
                  Shortlisted
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="(job, index) in performanceData"
                :key="index"
                class="hover:bg-gray-50 transition-colors"
              >
                <td class="py-4 px-4">
                  <div class="font-medium text-gray-900">{{ job.title }}</div>
                  <div class="text-xs text-gray-500">{{ job.department }}</div>
                </td>
                <td class="py-4 px-4 text-gray-900">{{ job.views }}</td>
                <td class="py-4 px-4 text-gray-900">{{ job.applications }}</td>
                <td class="py-4 px-4">
                  <span
                    class="font-semibold"
                    :class="
                      job.convRate >= 15
                        ? 'text-green-600'
                        : job.convRate >= 10
                          ? 'text-orange-600'
                          : 'text-red-600'
                    "
                  >
                    {{ job.convRate }}%
                  </span>
                </td>
                <td class="py-4 px-4 text-gray-900">{{ job.shortlisted }}</td>
                <td class="py-4 px-4">
                  <span
                    class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold"
                  >
                    {{ job.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Analytics Dashboard - FindPoint",
  description:
    "Track your recruitment performance and insights with detailed analytics",
});

// Sample data
const topJobs = ref([
  {
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    applications: 67,
  },
  { title: "Product Designer", location: "Remote", applications: 54 },
  { title: "Data Scientist", location: "New York, NY", applications: 48 },
  { title: "Frontend Developer", location: "Austin, TX", applications: 42 },
  { title: "Marketing Manager", location: "Boston, MA", applications: 38 },
]);

const trafficSources = ref([
  { name: "Direct", percentage: 35, color: "bg-emerald-500" },
  { name: "LinkedIn", percentage: 28, color: "bg-blue-500" },
  { name: "Indeed", percentage: 20, color: "bg-orange-500" },
  { name: "Company Website", percentage: 12, color: "bg-purple-500" },
  { name: "Others", percentage: 5, color: "bg-gray-400" },
]);

const applicationStatus = ref([
  { name: "New Applications", count: 45, dotColor: "bg-blue-500" },
  { name: "Under Review", count: 28, dotColor: "bg-yellow-500" },
  { name: "Shortlisted", count: 18, dotColor: "bg-purple-500" },
  { name: "Interview", count: 12, dotColor: "bg-orange-500" },
  { name: "Offered", count: 5, dotColor: "bg-emerald-500" },
]);

const recentActivities = ref([
  {
    title: "New application received",
    time: "5 minutes ago",
    icon: "mdi:file-document",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Candidate shortlisted",
    time: "1 hour ago",
    icon: "mdi:star",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Interview scheduled",
    time: "2 hours ago",
    icon: "mdi:calendar-check",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Job posting viewed 50 times",
    time: "3 hours ago",
    icon: "mdi:eye",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]);

const performanceData = ref([
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    views: 423,
    applications: 67,
    convRate: 15.8,
    shortlisted: 12,
    status: "Active",
  },
  {
    title: "Product Designer",
    department: "Design",
    views: 356,
    applications: 54,
    convRate: 15.2,
    shortlisted: 9,
    status: "Active",
  },
  {
    title: "Data Scientist",
    department: "Data",
    views: 512,
    applications: 48,
    convRate: 9.4,
    shortlisted: 8,
    status: "Active",
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    views: 389,
    applications: 42,
    convRate: 10.8,
    shortlisted: 7,
    status: "Active",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    views: 298,
    applications: 38,
    convRate: 12.8,
    shortlisted: 6,
    status: "Active",
  },
]);

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.fade-in-up.is-visible {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
