<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <div class="flex items-center text-sm text-gray-600 mb-4">
          <NuxtLink to="/jobs/manage" class="hover:text-emerald-600 transition-colors flex items-center">
            <Icon name="mdi:arrow-left" class="w-4 h-4 mr-1" />
            Back to My Jobs
          </NuxtLink>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-3">Post a New Job</h1>
        <p class="text-lg text-gray-600">Fill in the details below to create your job posting</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Basic Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 fade-in-up" style="animation-delay: 100ms;">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                <Icon name="mdi:briefcase" class="w-6 h-6 text-emerald-600" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Basic Information</h2>
            </div>

            <div class="space-y-5">
              <div class="input-group">
                <label class="input-label">
                  Job Title <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Senior Software Engineer"
                  class="custom-input"
                >
                <p class="input-help">A clear, descriptive job title helps attract the right candidates</p>
              </div>

              <div class="grid md:grid-cols-2 gap-5">
                <div class="input-group">
                  <label class="input-label">Department</label>
                  <select class="custom-input">
                    <option value="">Select Department</option>
                    <option>Engineering</option>
                    <option>Product</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Human Resources</option>
                    <option>Finance</option>
                    <option>Operations</option>
                  </select>
                </div>

                <div class="input-group">
                  <label class="input-label">Experience Level</label>
                  <select class="custom-input">
                    <option value="">Select Level</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Lead</option>
                    <option>Manager</option>
                    <option>Director</option>
                    <option>Executive</option>
                  </select>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-5">
                <div class="input-group">
                  <label class="input-label">
                    Employment Type <span class="text-red-500">*</span>
                  </label>
                  <select class="custom-input">
                    <option value="">Select Type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Temporary</option>
                    <option>Internship</option>
                  </select>
                </div>

                <div class="input-group">
                  <label class="input-label">Workplace Type</label>
                  <select class="custom-input">
                    <option value="">Select Type</option>
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Location & Salary -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 200ms;">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Icon name="mdi:map-marker" class="w-6 h-6 text-blue-600" />
              </div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900">Location & Compensation</h2>
            </div>

            <div class="space-y-5">
              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:map-marker-outline" class="w-4 h-4 text-emerald-600" />
                  Location <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. San Francisco, CA or Remote"
                  class="custom-input"
                >
              </div>

              <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:currency-usd" class="w-4 h-4 text-emerald-600" />
                    Minimum Salary
                  </label>
                  <div class="relative">
                    <span class="salary-prefix">$</span>
                    <input 
                      type="text" 
                      placeholder="50,000"
                      class="custom-input salary-input"
                    >
                  </div>
                </div>

                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:currency-usd" class="w-4 h-4 text-emerald-600" />
                    Maximum Salary
                  </label>
                  <div class="relative">
                    <span class="salary-prefix">$</span>
                    <input 
                      type="text" 
                      placeholder="80,000"
                      class="custom-input salary-input"
                    >
                  </div>
                </div>
              </div>

              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:clock-outline" class="w-4 h-4 text-emerald-600" />
                  Salary Period
                </label>
                <select class="custom-input">
                  <option>Per Year</option>
                  <option>Per Month</option>
                  <option>Per Hour</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Job Description -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 fade-in-up" style="animation-delay: 300ms;">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <Icon name="mdi:text-box" class="w-6 h-6 text-purple-600" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Job Details</h2>
            </div>

            <div class="space-y-5">
              <div class="input-group">
                <label class="input-label">
                  Job Description <span class="text-red-500">*</span>
                </label>
                <textarea 
                  rows="8" 
                  placeholder="Describe the role, responsibilities, and what makes this position exciting..."
                  class="custom-textarea"
                ></textarea>
                <p class="input-help">Minimum 100 characters</p>
              </div>

              <div class="input-group">
                <label class="input-label">Requirements</label>
                <textarea 
                  rows="6" 
                  placeholder="• Bachelor's degree in Computer Science or related field&#10;• 5+ years of experience in software development&#10;• Proficiency in JavaScript, React, and Node.js"
                  class="custom-textarea"
                ></textarea>
              </div>

              <div class="input-group">
                <label class="input-label">Nice to Have</label>
                <textarea 
                  rows="4" 
                  placeholder="• Experience with TypeScript&#10;• Knowledge of cloud platforms (AWS, Azure)&#10;• Open source contributions"
                  class="custom-textarea"
                ></textarea>
              </div>

              <div class="input-group">
                <label class="input-label">Benefits & Perks</label>
                <textarea 
                  rows="4" 
                  placeholder="• Health, dental, and vision insurance&#10;• 401(k) with company match&#10;• Flexible work hours&#10;• Remote work options"
                  class="custom-textarea"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Application Settings -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 fade-in-up" style="animation-delay: 400ms;">
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <Icon name="mdi:cog" class="w-6 h-6 text-orange-600" />
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Application Settings</h2>
            </div>

            <div class="space-y-5">
              <div class="input-group">
                <label class="input-label">Application Deadline</label>
                <input 
                  type="date" 
                  class="custom-input"
                >
              </div>

              <div class="input-group">
                <label class="input-label">Number of Positions</label>
                <input 
                  type="number" 
                  value="1"
                  min="1"
                  class="custom-input"
                >
              </div>

              <div class="space-y-3 pt-2">
                <label class="custom-checkbox">
                  <input type="checkbox" class="checkbox-input">
                  <span class="checkbox-label">Notify me when someone applies</span>
                </label>
                
                <label class="custom-checkbox">
                  <input type="checkbox" class="checkbox-input" checked>
                  <span class="checkbox-label">Show salary range to candidates</span>
                </label>
                
                <label class="custom-checkbox">
                  <input type="checkbox" class="checkbox-input" checked>
                  <span class="checkbox-label">Feature this job on the homepage</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4 fade-in-up" style="animation-delay: 500ms;">
            <button 
              type="button"
              class="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Save as Draft
            </button>
            <button 
              type="submit"
              class="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Publish Job
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 space-y-6">
            <!-- Tips Card -->
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 fade-in-up" style="animation-delay: 200ms;">
              <div class="flex items-center mb-4">
                <Icon name="mdi:lightbulb-on" class="w-6 h-6 text-emerald-600 mr-2" />
                <h3 class="font-bold text-gray-900">Tips for Success</h3>
              </div>
              <ul class="space-y-3 text-sm text-gray-700">
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Write a clear, specific job title</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Include salary range for transparency</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>List must-have vs nice-to-have skills</span>
                </li>
                <li class="flex items-start">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Highlight company culture and benefits</span>
                </li>
              </ul>
            </div>

            <!-- Preview Card -->
            <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm fade-in-up" style="animation-delay: 300ms;">
              <div class="flex items-center mb-4">
                <Icon name="mdi:eye" class="w-6 h-6 text-gray-600 mr-2" />
                <h3 class="font-bold text-gray-900">Preview</h3>
              </div>
              <p class="text-sm text-gray-600 mb-4">See how your job posting will appear to candidates</p>
              <button 
                type="button"
                class="w-full px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Preview Job Post
              </button>
            </div>

            <!-- Help Card -->
            <div class="bg-blue-50 rounded-xl p-6 border border-blue-200 fade-in-up" style="animation-delay: 400ms;">
              <div class="flex items-center mb-3">
                <Icon name="mdi:help-circle" class="w-6 h-6 text-blue-600 mr-2" />
                <h3 class="font-bold text-gray-900">Need Help?</h3>
              </div>
              <p class="text-sm text-gray-600 mb-4">Check our guide for creating effective job postings</p>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                View Posting Guide
                <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Post a Job - FindPoint',
  description: 'Create and publish a job posting to find the perfect candidates for your team.'
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
.custom-input[type="select"],
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

/* Checkbox Styles */
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  width: 1.125rem;
  height: 1.125rem;
  margin: 0;
  color: #10b981;
  background-color: #ffffff;
  border: 1.5px solid #d1d5db;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.checkbox-input:hover {
  border-color: #10b981;
}

.checkbox-input:checked {
  background-color: #10b981;
  border-color: #10b981;
}

.checkbox-input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.checkbox-label {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  color: #374151;
}

/* Number Input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
  cursor: pointer;
}

/* Date Input */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

/* Salary Input with Dollar Prefix */
.salary-prefix {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  font-weight: 500;
  font-size: 0.9375rem;
  pointer-events: none;
  z-index: 10;
}

.salary-input {
  padding-left: 2rem !important;
}
</style>
