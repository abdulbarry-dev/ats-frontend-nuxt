<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50/20 to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 px-4 py-12 transition-colors duration-300"
  >
    <div class="max-w-md w-full">
      <!-- Back Button -->
      <NuxtLink
        to="/auth/login"
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium mb-6 transition-colors fade-in-up group"
      >
        <Icon
          name="mdi:arrow-left"
          class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
        />
        <span>Back to Login</span>
      </NuxtLink>

      <!-- Logo & Title -->
      <div class="text-center mb-8 fade-in-up" style="animation-delay: 50ms">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center gap-2.5 mb-6 group"
        >
          <div
            class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg"
          >
            <Icon name="mdi:briefcase-search" class="w-7 h-7 text-white" />
          </div>
          <span
            class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            FindPoint
          </span>
        </NuxtLink>
        <div
          class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
        >
          <Icon
            name="mdi:lock-reset"
            class="w-8 h-8 text-emerald-600 dark:text-emerald-400"
          />
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Forgot Password?
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          No worries, we'll send you reset instructions
        </p>
      </div>

      <!-- Main Card -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 p-8 fade-in-up transition-colors duration-300"
        style="animation-delay: 150ms"
      >
        <form @submit.prevent="handleForgotPassword" class="space-y-5">
          <!-- Email Input -->
          <div class="input-group">
            <label class="input-label flex items-center gap-2">
              <Icon
                name="mdi:email-outline"
                class="w-4 h-4 text-emerald-600 dark:text-emerald-400"
              />
              Email Address
            </label>
            <div class="relative">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email address"
                required
                class="custom-input pl-11"
              />
              <Icon
                name="mdi:email-outline"
                class="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              />
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
              We'll send a password reset link to this email
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Icon name="mdi:email-fast" class="w-5 h-5" />
            Send Reset Link
          </button>
        </form>

        <!-- Back to Login -->
        <div class="mt-6 text-center">
          <NuxtLink
            to="/auth/login"
            class="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors"
          >
            <Icon name="mdi:arrow-left" class="w-4 h-4" />
            Back to sign in
          </NuxtLink>
        </div>
      </div>

      <!-- Help Text -->
      <div class="mt-6 text-center fade-in-up" style="animation-delay: 250ms">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Need help?
          <a
            href="mailto:support@findpoint.com"
            class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
            >Contact Support</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSeoMeta } from "nuxt/app";

definePageMeta({
  layout: 'auth'
});

useSeoMeta({
  title: "Forgot Password - FindPoint",
  description: "Reset your FindPoint account password",
});

const email = ref("");

const handleForgotPassword = () => {
  // Handle forgot password logic here
  console.log("Password reset requested for:", email.value);
};
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Input Group Styles */
.input-group {
  display: flex;
  flex-direction: column;
}

/* Label Styles */
.input-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.dark .input-label {
  color: #e5e7eb;
}

/* Input Styles */
.custom-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #1f2937;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1.5px solid #d1d5db;
  border-radius: 0.75rem;
  transition: all 0.15s ease-in-out;
  outline: none;
}

.dark .custom-input {
  color: #e5e7eb;
  background-color: #1e293b;
  border-color: #475569;
}

.custom-input.pl-11 {
  padding-left: 2.75rem;
}

.custom-input:hover {
  border-color: #10b981;
}

.dark .custom-input:hover {
  border-color: #34d399;
}

.custom-input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.dark .custom-input:focus {
  border-color: #34d399;
  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.15);
}

.custom-input::placeholder {
  color: #9ca3af;
}

.dark .custom-input::placeholder {
  color: #64748b;
}
</style>
