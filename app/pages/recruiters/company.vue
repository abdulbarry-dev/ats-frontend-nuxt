<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Company Profile</h1>
        <p class="text-gray-600">Manage your company information and branding</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Main Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Basic Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 100ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:office-building" class="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Basic Information</h2>
                <p class="text-sm text-gray-500">Company details and identity</p>
              </div>
            </div>

            <div class="space-y-5">
              <!-- Company Logo Upload -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:image" class="w-4 h-4 text-emerald-600" />
                  Company Logo
                </label>
                <div class="flex items-center gap-4">
                  <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md">
                    CP
                  </div>
                  <div class="flex-1">
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors cursor-pointer group">
                      <Icon name="mdi:cloud-upload" class="w-10 h-10 text-gray-400 group-hover:text-emerald-600 mx-auto mb-2 transition-colors" />
                      <p class="text-sm text-gray-600 mb-1">
                        <span class="text-emerald-600 font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p class="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                      <input type="file" class="hidden" accept="image/*">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Company Name -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:domain" class="w-4 h-4 text-emerald-600" />
                  Company Name <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. TechCorp Inc."
                  value="TechCorp Inc."
                  class="custom-input"
                >
              </div>

              <!-- Industry -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:briefcase" class="w-4 h-4 text-emerald-600" />
                    Industry
                  </label>
                  <select class="custom-input">
                    <option value="">Select Industry</option>
                    <option selected>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:account-group" class="w-4 h-4 text-emerald-600" />
                    Company Size
                  </label>
                  <select class="custom-input">
                    <option value="">Select Size</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option selected>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>501-1000 employees</option>
                    <option>1000+ employees</option>
                  </select>
                </div>
              </div>

              <!-- Founded Year -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:calendar" class="w-4 h-4 text-emerald-600" />
                    Founded Year
                  </label>
                  <input 
                    type="number" 
                    placeholder="2020"
                    value="2020"
                    class="custom-input"
                  >
                </div>

                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:map-marker" class="w-4 h-4 text-emerald-600" />
                    Headquarters
                  </label>
                  <input 
                    type="text" 
                    placeholder="San Francisco, CA"
                    value="San Francisco, CA"
                    class="custom-input"
                  >
                </div>
              </div>

              <!-- Description -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:text-box" class="w-4 h-4 text-emerald-600" />
                  Company Description <span class="text-red-500">*</span>
                </label>
                <textarea 
                  rows="6" 
                  placeholder="Tell candidates about your company, mission, and culture..."
                  class="custom-textarea"
                >We are a leading technology company focused on innovative solutions that transform the way businesses operate. Our mission is to empower teams with cutting-edge tools and exceptional service.</textarea>
                <p class="input-help">This will be visible to candidates on job postings</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 200ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:phone" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Contact Information</h2>
                <p class="text-sm text-gray-500">How candidates can reach you</p>
              </div>
            </div>

            <div class="space-y-5">
              <!-- Email -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:email-outline" class="w-4 h-4 text-emerald-600" />
                  Company Email <span class="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="contact@company.com"
                  value="contact@techcorp.com"
                  class="custom-input"
                >
              </div>

              <!-- Phone -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:phone-outline" class="w-4 h-4 text-emerald-600" />
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  value="+1 (555) 987-6543"
                  class="custom-input"
                >
              </div>

              <!-- Website -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:web" class="w-4 h-4 text-emerald-600" />
                  Website URL
                </label>
                <input 
                  type="url" 
                  placeholder="https://www.yourcompany.com"
                  value="https://www.techcorp.com"
                  class="custom-input"
                >
              </div>

              <!-- Address -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:map-marker" class="w-4 h-4 text-emerald-600" />
                  Office Address
                </label>
                <textarea 
                  rows="3" 
                  placeholder="123 Main Street, Suite 100, City, State, ZIP"
                  class="custom-textarea"
                >123 Tech Boulevard, Suite 500, San Francisco, CA 94102</textarea>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 300ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:share-variant" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Social Media</h2>
                <p class="text-sm text-gray-500">Connect your social profiles</p>
              </div>
            </div>

            <div class="space-y-5">
              <!-- LinkedIn -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:linkedin" class="w-4 h-4 text-blue-600" />
                  LinkedIn
                </label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/company/yourcompany"
                  value="https://linkedin.com/company/techcorp"
                  class="custom-input"
                >
              </div>

              <!-- Twitter -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:twitter" class="w-4 h-4 text-blue-400" />
                  Twitter
                </label>
                <input 
                  type="url" 
                  placeholder="https://twitter.com/yourcompany"
                  value="https://twitter.com/techcorp"
                  class="custom-input"
                >
              </div>

              <!-- Facebook -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:facebook" class="w-4 h-4 text-blue-600" />
                  Facebook
                </label>
                <input 
                  type="url" 
                  placeholder="https://facebook.com/yourcompany"
                  class="custom-input"
                >
              </div>

              <!-- Instagram -->
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:instagram" class="w-4 h-4 text-pink-600" />
                  Instagram
                </label>
                <input 
                  type="url" 
                  placeholder="https://instagram.com/yourcompany"
                  class="custom-input"
                >
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 fade-in-up" style="animation-delay: 400ms;">
            <button 
              type="button"
              class="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="mdi:cancel" class="w-5 h-5" />
              Cancel
            </button>
            <button 
              type="submit"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Icon name="mdi:content-save" class="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 space-y-6">
            <!-- Preview Card -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up" style="animation-delay: 200ms;">
              <div class="flex items-center gap-3 mb-4">
                <Icon name="mdi:eye" class="w-5 h-5 text-gray-600" />
                <h3 class="font-bold text-gray-900">Preview</h3>
              </div>
              <div class="space-y-4">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                  CP
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-1">TechCorp Inc.</h4>
                  <p class="text-sm text-gray-600 mb-2">Technology • 51-200 employees</p>
                  <p class="text-xs text-gray-500 line-clamp-3">We are a leading technology company focused on innovative solutions...</p>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <p class="text-xs text-gray-500 mb-2">This is how your company appears to candidates</p>
                </div>
              </div>
            </div>

            <!-- Tips Card -->
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 fade-in-up" style="animation-delay: 300ms;">
              <div class="flex items-center mb-4">
                <Icon name="mdi:lightbulb-on" class="w-6 h-6 text-emerald-600 mr-2" />
                <h3 class="font-bold text-gray-900">Profile Tips</h3>
              </div>
              <ul class="space-y-3 text-sm text-gray-700">
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Upload a clear, professional logo</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Write a compelling company description</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Keep contact information up to date</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Link your active social media profiles</span>
                </li>
              </ul>
            </div>

            <!-- Stats Card -->
            <div class="bg-blue-50 rounded-xl p-6 border border-blue-200 fade-in-up" style="animation-delay: 400ms;">
              <div class="flex items-center mb-4">
                <Icon name="mdi:chart-line" class="w-6 h-6 text-blue-600 mr-2" />
                <h3 class="font-bold text-gray-900">Profile Stats</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Profile Views</span>
                  <span class="text-lg font-bold text-gray-900">234</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Followers</span>
                  <span class="text-lg font-bold text-gray-900">89</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Completion</span>
                  <span class="text-lg font-bold text-emerald-600">85%</span>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-blue-200">
                <div class="w-full bg-blue-200 rounded-full h-2 mb-2">
                  <div class="bg-emerald-500 h-2 rounded-full" style="width: 85%"></div>
                </div>
                <p class="text-xs text-gray-600">Complete your profile to attract more candidates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Company Profile - FindPoint',
  description: 'Manage your company information and branding'
})

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el)
  })
})
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
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
  outline: none;
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

/* Textarea Styles */
.custom-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #1f2937;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1.5px solid #d1d5db;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
  outline: none;
  resize: vertical;
  font-family: inherit;
}

.custom-textarea:hover {
  border-color: #10b981;
}

.custom-textarea:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.custom-textarea::placeholder {
  color: #9ca3af;
}

/* Select Styles */
select.custom-input {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

/* Help Text */
.input-help {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.375rem;
}
</style>
