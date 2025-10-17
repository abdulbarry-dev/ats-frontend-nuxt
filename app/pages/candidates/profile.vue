<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p class="text-gray-600">Manage your personal information and career profile</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Main Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Profile Photo -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 100ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:account-circle" class="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Profile Photo</h2>
                <p class="text-sm text-gray-500">Update your profile picture</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-6">
              <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                JD
              </div>
              <div class="flex-1 text-center sm:text-left">
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-emerald-500 transition-colors cursor-pointer group">
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

          <!-- Personal Information -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 150ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:account" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Personal Information</h2>
                <p class="text-sm text-gray-500">Basic details about yourself</p>
              </div>
            </div>

            <div class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:account-outline" class="w-4 h-4 text-emerald-600" />
                    First Name <span class="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="John"
                    value="John"
                    class="custom-input"
                  >
                </div>

                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:account-outline" class="w-4 h-4 text-emerald-600" />
                    Last Name <span class="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    value="Doe"
                    class="custom-input"
                  >
                </div>
              </div>

              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:email-outline" class="w-4 h-4 text-emerald-600" />
                  Email Address <span class="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="john.doe@example.com"
                  value="john.doe@example.com"
                  class="custom-input"
                >
              </div>

              <div class="grid sm:grid-cols-2 gap-4">
                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:phone-outline" class="w-4 h-4 text-emerald-600" />
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    value="+1 (555) 123-4567"
                    class="custom-input"
                  >
                </div>

                <div class="input-group">
                  <label class="input-label flex items-center gap-1">
                    <Icon name="mdi:map-marker-outline" class="w-4 h-4 text-emerald-600" />
                    Location
                  </label>
                  <input 
                    type="text" 
                    placeholder="San Francisco, CA"
                    value="San Francisco, CA"
                    class="custom-input"
                  >
                </div>
              </div>

              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:text-box-outline" class="w-4 h-4 text-emerald-600" />
                  Professional Title
                </label>
                <input 
                  type="text" 
                  placeholder="Senior Software Engineer"
                  value="Senior Software Engineer"
                  class="custom-input"
                >
              </div>

              <div class="input-group">
                <label class="input-label flex items-center gap-1">
                  <Icon name="mdi:text" class="w-4 h-4 text-emerald-600" />
                  About Me
                </label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us about yourself, your experience, and career goals..."
                  class="custom-textarea"
                >Passionate software engineer with 5+ years of experience building scalable web applications. Specialized in React, TypeScript, and cloud technologies.</textarea>
              </div>
            </div>
          </div>

          <!-- Work Experience -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 200ms;">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="mdi:briefcase" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-gray-900">Work Experience</h2>
                  <p class="text-sm text-gray-500">Your professional background</p>
                </div>
              </div>
              <button class="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors flex items-center gap-2">
                <Icon name="mdi:plus" class="w-4 h-4" />
                Add
              </button>
            </div>

            <div class="space-y-4">
              <div class="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="font-semibold text-gray-900">Senior Software Engineer</h3>
                    <p class="text-sm text-gray-600">TechCorp Inc.</p>
                  </div>
                  <div class="flex gap-2">
                    <button class="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Icon name="mdi:pencil" class="w-4 h-4" />
                    </button>
                    <button class="p-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Icon name="mdi:delete" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Icon name="mdi:calendar" class="w-4 h-4" />
                  <span>Jan 2020 - Present</span>
                </div>
                <p class="text-sm text-gray-600">Led development of scalable web applications, mentored junior developers, and improved system performance by 40%.</p>
              </div>

              <div class="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="font-semibold text-gray-900">Software Engineer</h3>
                    <p class="text-sm text-gray-600">StartupXYZ</p>
                  </div>
                  <div class="flex gap-2">
                    <button class="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Icon name="mdi:pencil" class="w-4 h-4" />
                    </button>
                    <button class="p-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Icon name="mdi:delete" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Icon name="mdi:calendar" class="w-4 h-4" />
                  <span>Jun 2018 - Dec 2019</span>
                </div>
                <p class="text-sm text-gray-600">Built RESTful APIs, implemented CI/CD pipelines, and collaborated with cross-functional teams.</p>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 250ms;">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Icon name="mdi:school" class="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-gray-900">Education</h2>
                  <p class="text-sm text-gray-500">Academic qualifications</p>
                </div>
              </div>
              <button class="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors flex items-center gap-2">
                <Icon name="mdi:plus" class="w-4 h-4" />
                Add
              </button>
            </div>

            <div class="space-y-4">
              <div class="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                    <p class="text-sm text-gray-600">University of Technology</p>
                  </div>
                  <div class="flex gap-2">
                    <button class="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Icon name="mdi:pencil" class="w-4 h-4" />
                    </button>
                    <button class="p-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Icon name="mdi:delete" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Icon name="mdi:calendar" class="w-4 h-4" />
                  <span>2014 - 2018</span>
                </div>
                <p class="text-sm text-gray-600">GPA: 3.8/4.0 • Dean's List • Computer Science Society President</p>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 300ms;">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Icon name="mdi:code-tags" class="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-gray-900">Skills</h2>
                  <p class="text-sm text-gray-500">Your technical & soft skills</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="input-group">
                <label class="input-label">Add Skills</label>
                <div class="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="e.g. JavaScript, React, Leadership..."
                    class="custom-input flex-1"
                  >
                  <button class="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Add
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <span v-for="skill in skills" :key="skill" class="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-semibold flex items-center gap-2 group hover:bg-indigo-100 transition-colors">
                  {{ skill }}
                  <button class="text-indigo-400 hover:text-indigo-600">
                    <Icon name="mdi:close" class="w-4 h-4" />
                  </button>
                </span>
              </div>
            </div>
          </div>

          <!-- Documents -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up" style="animation-delay: 350ms;">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Icon name="mdi:file-document" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Documents</h2>
                <p class="text-sm text-gray-500">Upload your resume and certificates</p>
              </div>
            </div>

            <div class="space-y-4">
              <!-- Resume Upload -->
              <div>
                <label class="input-label">Resume / CV</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-emerald-500 transition-colors cursor-pointer group text-center">
                  <Icon name="mdi:file-pdf-box" class="w-12 h-12 text-gray-400 group-hover:text-emerald-600 mx-auto mb-3 transition-colors" />
                  <p class="text-sm text-gray-600 mb-1">
                    <span class="text-emerald-600 font-semibold">Click to upload resume</span>
                  </p>
                  <p class="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                  <input type="file" class="hidden" accept=".pdf,.doc,.docx">
                </div>
              </div>

              <!-- Uploaded Files -->
              <div class="space-y-2">
                <div class="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div class="flex items-center gap-3">
                    <Icon name="mdi:file-pdf-box" class="w-8 h-8 text-red-600" />
                    <div>
                      <p class="text-sm font-semibold text-gray-900">John_Doe_Resume.pdf</p>
                      <p class="text-xs text-gray-500">Uploaded 2 days ago • 1.2 MB</p>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <button class="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Icon name="mdi:download" class="w-5 h-5" />
                    </button>
                    <button class="p-2 text-gray-600 hover:text-red-600 transition-colors">
                      <Icon name="mdi:delete" class="w-5 h-5" />
                    </button>
                  </div>
                </div>
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
              Save Profile
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 space-y-6">
            <!-- Profile Completion -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up" style="animation-delay: 200ms;">
              <div class="flex items-center gap-3 mb-4">
                <Icon name="mdi:chart-donut" class="w-6 h-6 text-emerald-600" />
                <h3 class="font-bold text-gray-900">Profile Strength</h3>
              </div>
              <div class="mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-2xl font-bold text-emerald-600">85%</span>
                  <span class="text-sm text-gray-500">Strong</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500" style="width: 85%"></div>
                </div>
              </div>
              <p class="text-xs text-gray-600 mb-3">Complete your profile to improve visibility to recruiters</p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-600" />
                  <span>Profile photo added</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="mdi:check-circle" class="w-4 h-4 text-green-600" />
                  <span>Work experience added</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <Icon name="mdi:circle-outline" class="w-4 h-4 text-gray-400" />
                  <span>Add more skills</span>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 p-6 fade-in-up" style="animation-delay: 250ms;">
              <h3 class="font-bold text-gray-900 mb-4">Your Activity</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Profile Views</span>
                  <span class="text-lg font-bold text-gray-900">342</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Applications</span>
                  <span class="text-lg font-bold text-gray-900">12</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">Saved Jobs</span>
                  <span class="text-lg font-bold text-gray-900">8</span>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up" style="animation-delay: 300ms;">
              <h3 class="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div class="space-y-2">
                <NuxtLink to="/jobs" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-all group">
                  <Icon name="mdi:magnify" class="w-5 h-5 text-gray-600 group-hover:text-emerald-600" />
                  <span class="text-sm font-medium">Browse Jobs</span>
                </NuxtLink>
                <button class="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-all group text-left">
                  <Icon name="mdi:file-document" class="w-5 h-5 text-gray-600 group-hover:text-emerald-600" />
                  <span class="text-sm font-medium">View Applications</span>
                </button>
                <button class="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-all group text-left">
                  <Icon name="mdi:cog" class="w-5 h-5 text-gray-600 group-hover:text-emerald-600" />
                  <span class="text-sm font-medium">Account Settings</span>
                </button>
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
  title: 'My Profile - FindPoint',
  description: 'Manage your personal information and career profile'
})

const skills = ref([
  'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 
  'Python', 'AWS', 'Docker', 'PostgreSQL', 'Git'
])

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
</style>
