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
          Recruiter & Company Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your company information and hiring preferences
        </p>
      </div>

      <!-- Company Information -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Company Information
        </h2>
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Company Name</label
              >
              <input
                v-model="companyData.name"
                type="text"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              />
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Industry</label
              >
              <select
                v-model="companyData.industry"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              >
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Company Description</label
            >
            <textarea
              v-model="companyData.description"
              rows="4"
              placeholder="Tell candidates about your company..."
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors resize-none"
            ></textarea>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Company Size</label
              >
              <select
                v-model="companyData.size"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              >
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Founded Year</label
              >
              <input
                v-model="companyData.foundedYear"
                type="number"
                placeholder="2010"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Company Website</label
            >
            <input
              v-model="companyData.website"
              type="url"
              placeholder="https://yourcompany.com"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
        </div>
      </div>

      <!-- Hiring Preferences -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Hiring Preferences
        </h2>
        <div class="space-y-6">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
              >Preferred Hiring Locations</label
            >
            <div class="space-y-3">
              <div
                v-for="(location, index) in hiringPreferences.locations"
                :key="index"
                class="flex items-center gap-3"
              >
                <input
                  v-model="hiringPreferences.locations[index]"
                  type="text"
                  placeholder="e.g., San Francisco, CA"
                  class="flex-1 px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
                />
                <button
                  @click="removeLocation(index)"
                  class="p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all"
                >
                  <Icon name="mdi:close" class="w-5 h-5" />
                </button>
              </div>
              <button
                @click="addLocation"
                class="w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl text-gray-600 dark:text-gray-400 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-semibold"
              >
                <Icon name="mdi:plus" class="w-5 h-5 inline mr-2" />
                Add Location
              </button>
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
              >Remote Work Policy</label
            >
            <div class="space-y-2">
              <label
                v-for="policy in remoteWorkPolicies"
                :key="policy.value"
                class="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all"
                :class="
                  hiringPreferences.remotePolicy === policy.value
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                    : 'border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500'
                "
              >
                <input
                  v-model="hiringPreferences.remotePolicy"
                  type="radio"
                  :value="policy.value"
                  class="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <div class="font-semibold text-gray-900 dark:text-white">
                    {{ policy.label }}
                  </div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">
                    {{ policy.description }}
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
              >Typical Job Types</label
            >
            <div class="grid sm:grid-cols-2 gap-3">
              <label
                v-for="type in jobTypes"
                :key="type"
                class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-slate-700/50"
                :class="
                  hiringPreferences.jobTypes.includes(type)
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                    : 'border-gray-200 dark:border-slate-600'
                "
              >
                <input
                  v-model="hiringPreferences.jobTypes"
                  type="checkbox"
                  :value="type"
                  class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <span class="text-gray-900 dark:text-white text-sm">{{
                  type
                }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Management -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Team Management
          </h2>
          <button
            class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="mdi:account-plus" class="w-4 h-4" />
            Invite Member
          </button>
        </div>

        <div class="space-y-4">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold"
              >
                {{ member.initials }}
              </div>
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ member.name }}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  {{ member.role }} • {{ member.email }}
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <button
                v-if="member.role !== 'Owner'"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-lg transition-all text-sm"
              >
                Change Role
              </button>
              <button
                v-if="member.role !== 'Owner'"
                class="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all"
              >
                <Icon name="mdi:delete" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex gap-3">
        <button
          @click="saveSettings"
          class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          Save Changes
        </button>
        <button
          class="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSeoMeta } from "nuxt/app";


const companyData = ref({
  name: "TechCorp Inc.",
  industry: "Technology",
  description:
    "We're a fast-growing technology company building innovative solutions for the modern workplace. Join our talented team and help shape the future of work.",
  size: "51-200",
  foundedYear: 2018,
  website: "https://techcorp.com",
});

const hiringPreferences = ref({
  locations: ["San Francisco, CA", "New York, NY", "Austin, TX"],
  remotePolicy: "hybrid",
  jobTypes: ["Full-time", "Contract"],
});

const remoteWorkPolicies = [
  {
    value: "onsite",
    label: "On-site Only",
    description: "All positions require working from the office",
  },
  {
    value: "hybrid",
    label: "Hybrid",
    description: "Mix of remote and in-office work",
  },
  {
    value: "remote",
    label: "Fully Remote",
    description: "All positions can be done remotely",
  },
  {
    value: "flexible",
    label: "Flexible",
    description: "Varies by position",
  },
];

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
  "Temporary",
];

const teamMembers = ref([
  {
    id: 1,
    name: "Michael Chen",
    email: "michael.chen@techcorp.com",
    role: "Owner",
    initials: "MC",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.w@techcorp.com",
    role: "Admin",
    initials: "SW",
  },
  {
    id: 3,
    name: "David Martinez",
    email: "david.m@techcorp.com",
    role: "Recruiter",
    initials: "DM",
  },
]);

const addLocation = () => {
  hiringPreferences.value.locations.push("");
};

const removeLocation = (index: number) => {
  hiringPreferences.value.locations.splice(index, 1);
};

const saveSettings = () => {
  console.log("Recruiter settings saved");
};

useSeoMeta({
  title: "Recruiter & Company Settings - FindPoint",
  description: "Manage your company information and hiring preferences",
});
</script>
