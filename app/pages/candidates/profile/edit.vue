<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-8 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <NuxtLink
            to="/candidates/profile"
            class="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Icon
              name="mdi:arrow-left"
              class="w-6 h-6 text-gray-600 dark:text-gray-400"
            />
          </NuxtLink>
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
              Edit Profile
            </h1>
            <p class="text-gray-600 dark:text-gray-400">
              Update your professional information
            </p>
          </div>
        </div>
      </div>

      <form @submit.prevent="saveProfile" class="max-w-4xl">
        <!-- Personal Information Section -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:account"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Personal Information
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Avatar Upload -->
            <div class="md:col-span-2">
              <label
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                >Profile Photo</label
              >
              <div class="flex items-center gap-6">
                <div
                  class="w-24 h-24 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden"
                >
                  <img
                    v-if="form.avatar"
                    :src="form.avatar"
                    alt="Avatar"
                    class="w-full h-full object-cover"
                  />
                  <Icon
                    v-else
                    name="mdi:account"
                    class="w-16 h-16 text-white"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors mb-2"
                  >
                    Upload Photo
                  </button>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    JPG, PNG or GIF. Max size 2MB
                  </p>
                </div>
              </div>
            </div>

            <!-- Full Name -->
            <div>
              <label
                for="name"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Full Name *</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>

            <!-- Job Title -->
            <div>
              <label
                for="title"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Job Title *</label
              >
              <input
                id="title"
                v-model="form.title"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="e.g., Senior Full Stack Developer"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Email *</label
              >
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Phone</label
              >
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <!-- Location -->
            <div>
              <label
                for="location"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Location *</label
              >
              <input
                id="location"
                v-model="form.location"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="San Francisco, CA"
              />
            </div>

            <!-- Years of Experience -->
            <div>
              <label
                for="experience"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Years of Experience</label
              >
              <input
                id="experience"
                v-model.number="form.experience"
                type="number"
                min="0"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="5"
              />
            </div>

            <!-- Bio -->
            <div class="md:col-span-2">
              <label
                for="bio"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >Professional Summary *</label
              >
              <textarea
                id="bio"
                v-model="form.bio"
                required
                rows="4"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300 resize-none"
                placeholder="Tell us about yourself, your experience, and what you're looking for..."
              ></textarea>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {{ form.bio.length }}/500 characters
              </p>
            </div>
          </div>
        </div>

        <!-- Social Links Section -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
            >
              <Icon
                name="mdi:link-variant"
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
              Social Links
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label
                for="linkedin"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                <Icon name="mdi:linkedin" class="w-4 h-4 inline-block mr-1" />
                LinkedIn
              </label>
              <input
                id="linkedin"
                v-model="form.socialLinks.linkedin"
                type="url"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div>
              <label
                for="github"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                <Icon name="mdi:github" class="w-4 h-4 inline-block mr-1" />
                GitHub
              </label>
              <input
                id="github"
                v-model="form.socialLinks.github"
                type="url"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent transition-colors duration-300"
                placeholder="https://github.com/username"
              />
            </div>

            <div class="md:col-span-2">
              <label
                for="portfolio"
                class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                <Icon name="mdi:web" class="w-4 h-4 inline-block mr-1" />
                Portfolio Website
              </label>
              <input
                id="portfolio"
                v-model="form.socialLinks.portfolio"
                type="url"
                class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:border-transparent transition-colors duration-300"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
        >
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:star"
                  class="w-6 h-6 text-purple-600 dark:text-purple-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Skills
              </h2>
            </div>
            <button
              type="button"
              @click="addSkill"
              class="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm flex items-center gap-2"
            >
              <Icon name="mdi:plus" class="w-4 h-4" />
              Add Skill
            </button>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div
              v-for="(skill, index) in form.skills"
              :key="index"
              class="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 group hover:from-purple-100 hover:to-purple-200/50 dark:hover:from-purple-900/40 dark:hover:to-purple-900/30 transition-all duration-300"
            >
              <input
                v-model="skill.name"
                type="text"
                placeholder="Skill name (e.g., JavaScript)"
                class="flex-1 px-3 py-2 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-sm transition-colors duration-300"
              />
              <button
                type="button"
                @click="removeSkill(index)"
                class="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors flex-shrink-0"
                title="Remove skill"
              >
                <Icon name="mdi:close-circle" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Languages Section -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
        >
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:translate"
                  class="w-6 h-6 text-orange-600 dark:text-orange-400"
                />
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                Languages
              </h2>
            </div>
            <button
              type="button"
              @click="addLanguage"
              class="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm flex items-center gap-2"
            >
              <Icon name="mdi:plus" class="w-4 h-4" />
              Add Language
            </button>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(lang, index) in form.languages"
              :key="index"
              class="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl transition-colors duration-300"
            >
              <div class="flex-1 space-y-2">
                <input
                  v-model="lang.name"
                  type="text"
                  placeholder="Language"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white dark:placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors duration-300"
                />
                <select
                  v-model="lang.proficiency"
                  class="w-full px-3 py-2 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors duration-300"
                >
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Beginner">Beginner</option>
                </select>
              </div>
              <button
                type="button"
                @click="removeLanguage(index)"
                class="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
              >
                <Icon name="mdi:delete" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
          <button
            type="submit"
            class="px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Icon name="mdi:content-save" class="w-5 h-5" />
            Save Changes
          </button>
          <NuxtLink
            to="/candidates/profile"
            class="px-8 py-3 bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="mdi:close" class="w-5 h-5" />
            Cancel
          </NuxtLink>
        </div>

        <!-- Save Success Message -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-2 opacity-0"
        >
          <div
            v-if="showSuccessMessage"
            class="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <Icon name="mdi:check-circle" class="w-6 h-6" />
            <span class="font-semibold">Profile updated successfully!</span>
          </div>
        </Transition>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useHead, navigateTo } from "nuxt/app";

// Form data
const form = ref({
  name: "Sarah Johnson",
  title: "Senior Full Stack Developer",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  experience: 5,
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies.",

  socialLinks: {
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    portfolio: "https://sarahjohnson.dev",
  },

  skills: [
    { name: "JavaScript/TypeScript" },
    { name: "React & Vue.js" },
    { name: "Node.js & Express" },
  ],

  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Spanish", proficiency: "Fluent" },
  ],
});

const showSuccessMessage = ref(false);

// Add new skill
const addSkill = () => {
  form.value.skills.push({ name: "" });
};

// Remove skill
const removeSkill = (index: number) => {
  form.value.skills.splice(index, 1);
};

// Add new language
const addLanguage = () => {
  form.value.languages.push({ name: "", proficiency: "Intermediate" });
};

// Remove language
const removeLanguage = (index: number) => {
  form.value.languages.splice(index, 1);
};

// Save profile
const saveProfile = () => {
  // TODO: Implement API call to save profile
  console.log("Saving profile:", form.value);

  // Show success message
  showSuccessMessage.value = true;

  // Hide after 3 seconds
  setTimeout(() => {
    showSuccessMessage.value = false;
    // Navigate back to profile view
    navigateTo("/candidates/profile");
  }, 2000);
};

// SEO
useHead({
  title: "Edit Profile - FindPoint",
  meta: [
    {
      name: "description",
      content: "Edit your candidate profile on FindPoint",
    },
  ],
});
</script>

<style scoped>
/* Form styling is handled by Tailwind classes */
</style>
