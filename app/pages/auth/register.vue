<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-emerald-50/20 to-gray-50 px-4 py-12">
    <div class="max-w-lg w-full">
      <!-- Back Button -->
      <NuxtLink 
        to="/" 
        class="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-medium mb-6 transition-colors fade-in-up group"
      >
        <Icon name="mdi:arrow-left" class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </NuxtLink>

      <!-- Logo & Title -->
      <div class="text-center mb-8 fade-in-up" style="animation-delay: 50ms;">
        <NuxtLink to="/" class="inline-flex items-center justify-center gap-2.5 mb-6 group">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <Icon name="mdi:briefcase-search" class="w-7 h-7 text-white" />
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            FindPoint
          </span>
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
        <p class="text-gray-600">Join thousands finding their dream jobs</p>
      </div>

      <!-- Main Card -->
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 fade-in-up" style="animation-delay: 150ms;">
        <!-- Social Sign Up Buttons -->
        <div class="space-y-3 mb-6">
          <button 
            type="button"
            class="w-full px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <button 
            type="button"
            class="w-full px-6 py-3.5 bg-[#0077B5] border-2 border-[#0077B5] text-white rounded-xl font-semibold hover:bg-[#006399] hover:border-[#006399] transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Icon name="mdi:linkedin" class="w-5 h-5" />
            <span>Continue with LinkedIn</span>
          </button>
        </div>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">Or sign up with email</span>
          </div>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-5">
          <!-- User Type Selection -->
          <div class="input-group">
            <label class="input-label flex items-center gap-2">
              <Icon name="mdi:account-circle-outline" class="w-4 h-4 text-emerald-600" />
              I am joining as
            </label>
            <div class="grid grid-cols-2 gap-3">
              <button 
                type="button"
                @click="userType = 'candidate'"
                :class="[
                  'px-4 py-3 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2',
                  userType === 'candidate' 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                ]"
              >
                <Icon name="mdi:account-search" class="w-5 h-5" />
                Candidate
              </button>
              <button 
                type="button"
                @click="userType = 'recruiter'"
                :class="[
                  'px-4 py-3 border-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2',
                  userType === 'recruiter' 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                ]"
              >
                <Icon name="mdi:briefcase-account" class="w-5 h-5" />
                Recruiter
              </button>
            </div>
          </div>

          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="input-group">
              <label class="input-label">First Name</label>
              <input 
                v-model="firstName"
                type="text" 
                placeholder="John"
                required
                class="custom-input"
              >
            </div>
            <div class="input-group">
              <label class="input-label">Last Name</label>
              <input 
                v-model="lastName"
                type="text" 
                placeholder="Doe"
                required
                class="custom-input"
              >
            </div>
          </div>
          
          <!-- Email Input -->
          <div class="input-group">
            <label class="input-label flex items-center gap-2">
              <Icon name="mdi:email-outline" class="w-4 h-4 text-emerald-600" />
              Email Address
            </label>
            <div class="relative">
              <input 
                v-model="email"
                type="email" 
                placeholder="john.doe@example.com"
                required
                class="custom-input pl-11"
              >
              <Icon name="mdi:email-outline" class="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          <!-- Password Input -->
          <div class="input-group">
            <label class="input-label flex items-center gap-2">
              <Icon name="mdi:lock-outline" class="w-4 h-4 text-emerald-600" />
              Password
            </label>
            <div class="relative">
              <input 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Create a strong password"
                required
                class="custom-input pl-11 pr-11"
              >
              <Icon name="mdi:lock-outline" class="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon :name="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" class="w-5 h-5" />
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-1.5">Must be at least 8 characters</p>
          </div>

          <!-- Terms & Conditions -->
          <label class="flex items-start gap-2.5 cursor-pointer group">
            <input 
              type="checkbox" 
              v-model="acceptTerms"
              required
              class="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0 transition-colors"
            >
            <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              I agree to the <NuxtLink to="/terms" class="text-emerald-600 hover:text-emerald-700 font-medium">Terms of Service</NuxtLink> and <NuxtLink to="/privacy" class="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</NuxtLink>
            </span>
          </label>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Icon name="mdi:account-plus" class="w-5 h-5" />
            Create Account
          </button>
        </form>

        <!-- Sign In Link -->
        <p class="mt-6 text-center text-sm text-gray-600">
          Already have an account? 
          <NuxtLink to="/auth/login" class="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
            Sign in
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Create Account - FindPoint',
  description: 'Create your FindPoint account and start your job search journey'
})

const userType = ref('candidate')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const acceptTerms = ref(false)

const handleRegister = () => {
  // Handle registration logic here
  console.log('Registration attempt:', { 
    userType: userType.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  })
}
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

.custom-input.pl-11 {
  padding-left: 2.75rem;
}

.custom-input.pr-11 {
  padding-right: 2.75rem;
}

.custom-input:hover {
  border-color: #10b981;
}

.custom-input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.custom-input::placeholder {
  color: #9ca3af;
}
</style>
