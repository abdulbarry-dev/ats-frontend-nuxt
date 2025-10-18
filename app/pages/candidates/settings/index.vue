<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Settings</h1>
        <p class="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <!-- Settings Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Account Settings -->
        <NuxtLink 
          to="/candidates/settings/account"
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:account-circle" class="w-7 h-7 text-emerald-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                Account
              </h3>
              <p class="text-sm text-gray-600 mb-3">
                Manage your account details, email, and password
              </p>
              <div class="flex items-center text-emerald-600 text-sm font-semibold">
                Manage account
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Profile Settings -->
        <NuxtLink 
          to="/candidates/settings/profile"
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:account-edit" class="w-7 h-7 text-blue-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                Profile
              </h3>
              <p class="text-sm text-gray-600 mb-3">
                Update your profile information and resume
              </p>
              <div class="flex items-center text-blue-600 text-sm font-semibold">
                Edit profile
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Notification Settings -->
        <NuxtLink 
          to="/candidates/settings/notifications"
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:bell-ring" class="w-7 h-7 text-purple-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                Notifications
              </h3>
              <p class="text-sm text-gray-600 mb-3">
                Control email and push notification preferences
              </p>
              <div class="flex items-center text-purple-600 text-sm font-semibold">
                Manage notifications
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Preferences -->
        <NuxtLink 
          to="/candidates/settings/preferences"
          class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
        >
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:cog" class="w-7 h-7 text-orange-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                Preferences
              </h3>
              <p class="text-sm text-gray-600 mb-3">
                Set your job preferences and search criteria
              </p>
              <div class="flex items-center text-orange-600 text-sm font-semibold">
                Update preferences
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Privacy & Security -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:shield-check" class="w-7 h-7 text-red-600" />
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                Privacy & Security
              </h3>
              <p class="text-sm text-gray-600 mb-3">
                Manage privacy settings and security options
              </p>
              <div class="flex items-center text-red-600 text-sm font-semibold">
                View settings
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button class="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 text-left">
            <Icon name="mdi:download" class="w-5 h-5 text-emerald-600" />
            <div>
              <div class="font-semibold text-gray-900 text-sm">Export Data</div>
              <div class="text-xs text-gray-600">Download your data</div>
            </div>
          </button>
          
          <button class="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 text-left">
            <Icon name="mdi:history" class="w-5 h-5 text-blue-600" />
            <div>
              <div class="font-semibold text-gray-900 text-sm">Activity Log</div>
              <div class="text-xs text-gray-600">View your activity</div>
            </div>
          </button>
          
          <button class="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 text-left">
            <Icon name="mdi:help-circle" class="w-5 h-5 text-purple-600" />
            <div>
              <div class="font-semibold text-gray-900 text-sm">Help Center</div>
              <div class="text-xs text-gray-600">Get support</div>
            </div>
          </button>
          
          <button class="flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-300 text-left">
            <Icon name="mdi:delete" class="w-5 h-5 text-red-600" />
            <div>
              <div class="font-semibold text-red-900 text-sm">Delete Account</div>
              <div class="text-xs text-red-600">Permanent action</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Settings - FindPoint',
  description: 'Manage your candidate account settings on FindPoint'
})
</script>