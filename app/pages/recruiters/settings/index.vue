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
          Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your recruiter account settings and preferences
        </p>
      </div>

      <!-- Settings Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Account Settings -->
        <NuxtLink
          to="/recruiters/settings/account"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:account-circle"
                class="w-7 h-7 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
              >
                Account
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Manage your account details, email, and password
              </p>
              <div
                class="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-semibold"
              >
                Manage account
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Profile Settings -->
        <NuxtLink
          to="/recruiters/settings/profile"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:account-edit"
                class="w-7 h-7 text-blue-600 dark:text-blue-400"
              />
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                Profile
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Update your recruiter profile and bio
              </p>
              <div
                class="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold"
              >
                Edit profile
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Notification Settings -->
        <NuxtLink
          to="/recruiters/settings/notifications"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:bell-ring"
                class="w-7 h-7 text-purple-600 dark:text-purple-400"
              />
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
              >
                Notifications
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Control email and push notification preferences
              </p>
              <div
                class="flex items-center text-purple-600 dark:text-purple-400 text-sm font-semibold"
              >
                Manage notifications
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Billing Settings -->
        <NuxtLink
          to="/recruiters/settings/billing"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:credit-card"
                class="w-7 h-7 text-orange-600 dark:text-orange-400"
              />
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
              >
                Billing
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Manage subscription and payment methods
              </p>
              <div
                class="flex items-center text-orange-600 dark:text-orange-400 text-sm font-semibold"
              >
                View billing
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Recruiter Settings -->
        <NuxtLink
          to="/recruiters/settings/recruiter"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:office-building"
                class="w-7 h-7 text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
              >
                Recruiter & Company
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Company details and hiring preferences
              </p>
              <div
                class="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold"
              >
                Update settings
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Privacy & Security -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <Icon
                name="mdi:shield-check"
                class="w-7 h-7 text-red-600 dark:text-red-400"
              />
            </div>
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
              >
                Privacy & Security
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Manage privacy settings and security options
              </p>
              <div
                class="flex items-center text-red-600 dark:text-red-400 text-sm font-semibold"
              >
                View settings
                <Icon
                  name="mdi:arrow-right"
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div
        class="mt-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 transition-colors duration-300"
      >
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-xl transition-all duration-300 text-left"
          >
            <Icon
              name="mdi:download"
              class="w-5 h-5 text-emerald-600 dark:text-emerald-400"
            />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white text-sm">
                Export Data
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                Download your data
              </div>
            </div>
          </button>

          <button
            class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-xl transition-all duration-300 text-left"
          >
            <Icon
              name="mdi:chart-bar"
              class="w-5 h-5 text-blue-600 dark:text-blue-400"
            />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white text-sm">
                View Analytics
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                Hiring insights
              </div>
            </div>
          </button>

          <button
            class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-xl transition-all duration-300 text-left"
          >
            <Icon
              name="mdi:help-circle"
              class="w-5 h-5 text-purple-600 dark:text-purple-400"
            />
            <div>
              <div class="font-semibold text-gray-900 dark:text-white text-sm">
                Help Center
              </div>
              <div class="text-xs text-gray-600 dark:text-gray-400">
                Get support
              </div>
            </div>
          </button>

          <button
            class="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-all duration-300 text-left"
          >
            <Icon
              name="mdi:delete"
              class="w-5 h-5 text-red-600 dark:text-red-400"
            />
            <div>
              <div class="font-semibold text-red-900 dark:text-red-400 text-sm">
                Delete Account
              </div>
              <div class="text-xs text-red-600 dark:text-red-400">
                Permanent action
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Settings - FindPoint",
  description: "Manage your recruiter account settings on FindPoint",
});
</script>
