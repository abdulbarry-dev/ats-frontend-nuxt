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
          Profile Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your public recruiter profile
        </p>
      </div>

      <!-- Profile Visibility -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-start justify-between mb-4">
          <div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Profile Visibility
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Control who can see your recruiter profile
            </p>
          </div>
          <div class="relative inline-block w-12 h-6">
            <input
              v-model="profilePublic"
              type="checkbox"
              class="sr-only peer"
              id="profile-public"
            />
            <label
              for="profile-public"
              class="block w-full h-full bg-gray-200 dark:bg-slate-600 rounded-full cursor-pointer peer-checked:bg-emerald-600 transition-colors duration-300"
            >
              <span
                :class="[
                  'absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300',
                  profilePublic && 'translate-x-6',
                ]"
              ></span>
            </label>
          </div>
        </div>
        <div
          v-if="profilePublic"
          class="p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl transition-colors duration-300"
        >
          <p class="text-sm text-emerald-800 dark:text-emerald-400">
            <Icon name="mdi:eye" class="w-4 h-4 inline mr-1" />
            Your profile is visible to candidates
          </p>
        </div>
        <div
          v-else
          class="p-4 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl transition-colors duration-300"
        >
          <p class="text-sm text-gray-700 dark:text-gray-300">
            <Icon name="mdi:eye-off" class="w-4 h-4 inline mr-1" />
            Your profile is hidden from public view
          </p>
        </div>
      </div>

      <!-- Professional Bio -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Professional Bio
        </h2>
        <div class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Bio</label
            >
            <textarea
              v-model="profileData.bio"
              rows="5"
              placeholder="Tell candidates about your recruiting experience and expertise..."
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300 resize-none"
            ></textarea>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {{ profileData.bio.length }}/500 characters
            </p>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Years of Experience</label
            >
            <select
              v-model="profileData.experience"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
            >
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Specializations</label
            >
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="(spec, index) in profileData.specializations"
                :key="index"
                class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm flex items-center gap-2"
              >
                {{ spec }}
                <button
                  @click="removeSpecialization(index)"
                  class="hover:text-emerald-900 dark:hover:text-emerald-300"
                >
                  <Icon name="mdi:close" class="w-4 h-4" />
                </button>
              </span>
            </div>
            <div class="flex gap-2">
              <input
                v-model="newSpecialization"
                type="text"
                placeholder="Add a specialization..."
                class="flex-1 px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
                @keyup.enter="addSpecialization"
              />
              <button
                @click="addSpecialization"
                class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications & Credentials -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Certifications & Credentials
        </h2>
        <div class="space-y-4">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl flex items-start justify-between"
          >
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                {{ cert.name }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ cert.issuer }} • Issued {{ cert.date }}
              </p>
            </div>
            <button
              @click="removeCertification(index)"
              class="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 p-2 rounded-lg transition-all"
            >
              <Icon name="mdi:delete" class="w-5 h-5" />
            </button>
          </div>
          <button
            class="w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl text-gray-600 dark:text-gray-400 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-semibold"
          >
            <Icon name="mdi:plus" class="w-5 h-5 inline mr-2" />
            Add Certification
          </button>
        </div>
      </div>

      <!-- Social Links -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Social Links
        </h2>
        <div class="space-y-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >LinkedIn Profile</label
            >
            <div class="relative">
              <Icon
                name="mdi:linkedin"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
              />
              <input
                v-model="socialLinks.linkedin"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Twitter Profile</label
            >
            <div class="relative">
              <Icon
                name="mdi:twitter"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
              />
              <input
                v-model="socialLinks.twitter"
                type="url"
                placeholder="https://twitter.com/yourusername"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Website</label
            >
            <div class="relative">
              <Icon
                name="mdi:web"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
              />
              <input
                v-model="socialLinks.website"
                type="url"
                placeholder="https://yourwebsite.com"
                class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors duration-300"
              />
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
        <NuxtLink
          to="/recruiters/profile"
          class="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
        >
          View Profile
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const profilePublic = ref(true);
const newSpecialization = ref("");

const profileData = ref({
  bio: "Experienced technical recruiter specializing in software engineering and product roles. Passionate about connecting top talent with innovative companies.",
  experience: "6-10",
  specializations: ["Technical Recruiting", "Software Engineering", "Product Management"],
});

const certifications = ref([
  {
    name: "Certified Professional Recruiter (CPR)",
    issuer: "National Association of Personnel Services",
    date: "Jan 2022",
  },
  {
    name: "LinkedIn Certified Professional - Recruiter",
    issuer: "LinkedIn",
    date: "Mar 2023",
  },
]);

const socialLinks = ref({
  linkedin: "https://linkedin.com/in/michaelchen",
  twitter: "https://twitter.com/michaelchen",
  website: "https://techrecruiterpro.com",
});

const addSpecialization = () => {
  if (newSpecialization.value.trim()) {
    profileData.value.specializations.push(newSpecialization.value.trim());
    newSpecialization.value = "";
  }
};

const removeSpecialization = (index: number) => {
  profileData.value.specializations.splice(index, 1);
};

const removeCertification = (index: number) => {
  certifications.value.splice(index, 1);
};

const saveSettings = () => {
  console.log("Profile settings saved");
};

useSeoMeta({
  title: "Profile Settings - FindPoint",
  description: "Manage your recruiter profile settings",
});
</script>
