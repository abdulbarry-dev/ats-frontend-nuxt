<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <!-- Back Button & Header -->
      <NuxtLink
        to="/recruiters/settings"
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 transition-colors"
      >
        <Icon name="mdi:arrow-left" class="w-5 h-5" />
        Back to Settings
      </NuxtLink>

      <div class="mb-8">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Account Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your recruiter account information and security
        </p>
      </div>

      <!-- Personal Information -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Personal Information
          </h2>
          <button
            v-if="!editingPersonal"
            @click="editingPersonal = true"
            class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="mdi:pencil" class="w-4 h-4" />
            Edit
          </button>
        </div>

        <div v-if="!editingPersonal" class="space-y-4">
          <div>
            <label class="text-sm font-medium text-gray-500 dark:text-gray-400"
              >Full Name</label
            >
            <p class="text-gray-900 dark:text-white mt-1">
              {{ accountData.fullName }}
            </p>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 dark:text-gray-400"
              >Email Address</label
            >
            <p
              class="text-gray-900 dark:text-white mt-1 flex items-center gap-2"
            >
              {{ accountData.email }}
              <span
                class="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full"
                >Verified</span
              >
            </p>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 dark:text-gray-400"
              >Phone Number</label
            >
            <p class="text-gray-900 dark:text-white mt-1">
              {{ accountData.phone }}
            </p>
          </div>
          <div>
            <label class="text-sm font-medium text-gray-500 dark:text-gray-400"
              >Job Title</label
            >
            <p class="text-gray-900 dark:text-white mt-1">
              {{ accountData.jobTitle }}
            </p>
          </div>
        </div>

        <form v-else @submit.prevent="savePersonalInfo" class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Full Name</label
            >
            <input
              v-model="accountData.fullName"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              required
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Email Address</label
            >
            <input
              v-model="accountData.email"
              type="email"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              required
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Phone Number</label
            >
            <input
              v-model="accountData.phone"
              type="tel"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Job Title</label
            >
            <input
              v-model="accountData.jobTitle"
              type="text"
              placeholder="e.g., Senior Technical Recruiter"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div class="flex gap-3">
            <button
              type="submit"
              class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Save Changes
            </button>
            <button
              type="button"
              @click="editingPersonal = false"
              class="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <!-- Change Password -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Change Password
        </h2>
        <form @submit.prevent="changePassword" class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Current Password</label
            >
            <input
              v-model="passwordData.current"
              type="password"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              required
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >New Password</label
            >
            <input
              v-model="passwordData.new"
              type="password"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              required
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Confirm New Password</label
            >
            <input
              v-model="passwordData.confirm"
              type="password"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Update Password
          </button>
        </form>
      </div>

      <!-- Two-Factor Authentication -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Two-Factor Authentication
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Add an extra layer of security to your account
            </p>
          </div>
          <div class="relative inline-block w-12 h-6">
            <input
              v-model="twoFactorEnabled"
              type="checkbox"
              class="sr-only peer"
              id="2fa-toggle"
            />
            <label
              for="2fa-toggle"
              class="block w-full h-full bg-gray-200 dark:bg-slate-600 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
            >
              <span
                :class="[
                  'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                  twoFactorEnabled && 'translate-x-6',
                ]"
              ></span>
            </label>
          </div>
        </div>
        <div
          v-if="twoFactorEnabled"
          class="p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl transition-colors duration-300"
        >
          <p class="text-sm text-emerald-800 dark:text-emerald-400">
            <Icon name="mdi:check-circle" class="w-4 h-4 inline mr-1" />
            Two-factor authentication is enabled
          </p>
        </div>
      </div>

      <!-- Connected Accounts -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Connected Accounts
        </h2>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:linkedin"
                  class="w-6 h-6 text-blue-700 dark:text-blue-400"
                />
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  LinkedIn
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Connected
                </div>
              </div>
            </div>
            <button
              class="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all duration-300"
            >
              Disconnect
            </button>
          </div>

          <div
            class="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-gray-100 dark:bg-slate-600 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:github"
                  class="w-6 h-6 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  GitHub
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Not connected
                </div>
              </div>
            </div>
            <button
              class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300"
            >
              Connect
            </button>
          </div>

          <div
            class="flex items-center justify-between p-4 border border-gray-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 transition-colors"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:google"
                  class="w-6 h-6 text-red-600 dark:text-red-400"
                />
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  Google
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Not connected
                </div>
              </div>
            </div>
            <button
              class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300"
            >
              Connect
            </button>
          </div>
        </div>
      </div>

      <!-- Danger Zone -->
      <div
        class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-red-900 dark:text-red-400 mb-2">
          Danger Zone
        </h2>
        <p class="text-sm text-red-700 dark:text-red-400 mb-4">
          These actions are permanent and cannot be undone
        </p>
        <div class="flex flex-col sm:flex-row gap-3">
          <button
            class="px-4 py-2 bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-800 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300"
          >
            Deactivate Account
          </button>
          <button
            class="px-4 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const editingPersonal = ref(false);
const twoFactorEnabled = ref(false);

const accountData = ref({
  fullName: "Michael Chen",
  email: "michael.chen@techcorp.com",
  phone: "+1 (555) 987-6543",
  jobTitle: "Senior Technical Recruiter",
});

const passwordData = ref({
  current: "",
  new: "",
  confirm: "",
});

const savePersonalInfo = () => {
  editingPersonal.value = false;
  console.log("Personal info saved");
};

const changePassword = () => {
  if (passwordData.value.new !== passwordData.value.confirm) {
    alert("Passwords do not match");
    return;
  }
  console.log("Password changed");
  passwordData.value = { current: "", new: "", confirm: "" };
};

useSeoMeta({
  title: "Account Settings - FindPoint",
  description: "Manage your recruiter account settings on FindPoint",
});
</script>
