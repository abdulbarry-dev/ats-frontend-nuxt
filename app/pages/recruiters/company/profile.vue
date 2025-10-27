<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Header -->
      <div class="mb-8 fade-in-up">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Company Profile
        </h1>
        <p class="text-gray-600">
          Your company information and branding overview
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Basic Information -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up"
            style="animation-delay: 100ms"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:office-building"
                  class="w-6 h-6 text-emerald-600"
                />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">
                  Basic Information
                </h2>
                <p class="text-sm text-gray-500">
                  Company details and identity
                </p>
              </div>
            </div>

            <div class="space-y-5">
              <!-- Company Logo Display -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:image" class="w-4 h-4 text-emerald-600" />
                  Company Logo
                </label>
                <div class="flex items-center gap-4">
                  <div
                    class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md"
                  >
                    {{ companyData.logoInitials || 'CP' }}
                  </div>
                </div>
              </div>

              <!-- Company Name -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:domain" class="w-4 h-4 text-emerald-600" />
                  Company Name
                </label>
                <p class="display-value">{{ companyData.name || 'TechCorp Inc.' }}</p>
              </div>

              <!-- Industry and Size -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="display-group">
                  <label class="display-label flex items-center gap-1">
                    <Icon
                      name="mdi:briefcase"
                      class="w-4 h-4 text-emerald-600"
                    />
                    Industry
                  </label>
                  <p class="display-value">{{ companyData.industry || 'Technology' }}</p>
                </div>

                <div class="display-group">
                  <label class="display-label flex items-center gap-1">
                    <Icon
                      name="mdi:account-group"
                      class="w-4 h-4 text-emerald-600"
                    />
                    Company Size
                  </label>
                  <p class="display-value">{{ companyData.size || '51-200 employees' }}</p>
                </div>
              </div>

              <!-- Founded Year and Headquarters -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="display-group">
                  <label class="display-label flex items-center gap-1">
                    <Icon
                      name="mdi:calendar"
                      class="w-4 h-4 text-emerald-600"
                    />
                    Founded Year
                  </label>
                  <p class="display-value">{{ companyData.foundedYear || '2020' }}</p>
                </div>

                <div class="display-group">
                  <label class="display-label flex items-center gap-1">
                    <Icon
                      name="mdi:map-marker"
                      class="w-4 h-4 text-emerald-600"
                    />
                    Headquarters
                  </label>
                  <p class="display-value">{{ companyData.headquarters || 'San Francisco, CA' }}</p>
                </div>
              </div>

              <!-- Description -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:text-box" class="w-4 h-4 text-emerald-600" />
                  Company Description
                </label>
                <p class="display-value whitespace-pre-line">{{ companyData.description || 'We are a leading technology company focused on innovative solutions that transform the way businesses operate. Our mission is to empower teams with cutting-edge tools and exceptional service.' }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up"
            style="animation-delay: 200ms"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
              >
                <Icon name="mdi:phone" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <p class="text-sm text-gray-500">
                  How candidates can reach you
                </p>
              </div>
            </div>

            <div class="space-y-5">
              <!-- Email -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon
                    name="mdi:email-outline"
                    class="w-4 h-4 text-emerald-600"
                  />
                  Company Email
                </label>
                <p class="display-value">
                  <a href="mailto:{{ companyData.email || 'contact@techcorp.com' }}" class="text-emerald-600 hover:text-emerald-700 transition-colors">
                    {{ companyData.email || 'contact@techcorp.com' }}
                  </a>
                </p>
              </div>

              <!-- Phone -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon
                    name="mdi:phone-outline"
                    class="w-4 h-4 text-emerald-600"
                  />
                  Phone Number
                </label>
                <p class="display-value">
                  <a href="tel:{{ companyData.phone || '+1 (555) 987-6543' }}" class="text-emerald-600 hover:text-emerald-700 transition-colors">
                    {{ companyData.phone || '+1 (555) 987-6543' }}
                  </a>
                </p>
              </div>

              <!-- Website -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:web" class="w-4 h-4 text-emerald-600" />
                  Website URL
                </label>
                <p class="display-value">
                  <a
                    :href="companyData.website || 'https://www.techcorp.com'"
                    target="_blank"
                    class="text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
                  >
                    {{ companyData.website || 'https://www.techcorp.com' }}
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                  </a>
                </p>
              </div>

              <!-- Address -->
              <div class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon
                    name="mdi:map-marker"
                    class="w-4 h-4 text-emerald-600"
                  />
                  Office Address
                </label>
                <p class="display-value whitespace-pre-line">{{ companyData.address || '123 Tech Boulevard, Suite 500\nSan Francisco, CA 94102' }}</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 fade-in-up"
            style="animation-delay: 300ms"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="mdi:share-variant"
                  class="w-6 h-6 text-purple-600"
                />
              </div>
              <div>
                <h2 class="text-xl font-bold text-gray-900">Social Media</h2>
                <p class="text-sm text-gray-500">
                  Connect your social profiles
                </p>
              </div>
            </div>

            <div class="space-y-5">
              <!-- LinkedIn -->
              <div v-if="companyData.linkedin" class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:linkedin" class="w-4 h-4 text-blue-600" />
                  LinkedIn
                </label>
                <p class="display-value">
                  <a
                    :href="companyData.linkedin"
                    target="_blank"
                    class="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                  >
                    linkedin.com/company/techcorp
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                  </a>
                </p>
              </div>

              <!-- Twitter -->
              <div v-if="companyData.twitter" class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:twitter" class="w-4 h-4 text-blue-400" />
                  Twitter
                </label>
                <p class="display-value">
                  <a
                    :href="companyData.twitter"
                    target="_blank"
                    class="text-blue-400 hover:text-blue-500 transition-colors flex items-center gap-1"
                  >
                    @techcorp
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                  </a>
                </p>
              </div>

              <!-- Facebook -->
              <div v-if="companyData.facebook" class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:facebook" class="w-4 h-4 text-blue-600" />
                  Facebook
                </label>
                <p class="display-value">
                  <a
                    :href="companyData.facebook"
                    target="_blank"
                    class="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                  >
                    facebook.com/techcorp
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                  </a>
                </p>
              </div>

              <!-- Instagram -->
              <div v-if="companyData.instagram" class="display-group">
                <label class="display-label flex items-center gap-1">
                  <Icon name="mdi:instagram" class="w-4 h-4 text-pink-600" />
                  Instagram
                </label>
                <p class="display-value">
                  <a
                    :href="companyData.instagram"
                    target="_blank"
                    class="text-pink-600 hover:text-pink-700 transition-colors flex items-center gap-1"
                  >
                    @techcorp
                    <Icon name="mdi:open-in-new" class="w-4 h-4" />
                  </a>
                </p>
              </div>

              <!-- No social media message -->
              <div v-if="!companyData.linkedin && !companyData.twitter && !companyData.facebook && !companyData.instagram" class="text-center py-8">
                <Icon name="mdi:share-variant-off" class="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p class="text-gray-500">No social media profiles added yet</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-3 fade-in-up"
            style="animation-delay: 400ms"
          >
            <button
              type="button"
              class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="mdi:arrow-left" class="w-5 h-5" />
              Back to Dashboard
            </button>
            <NuxtLink
              to="/recruiters/company/edit"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Icon name="mdi:pencil" class="w-5 h-5" />
              Edit Profile
            </NuxtLink>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 space-y-6">
            <!-- Quick Stats Card -->
            <div
              class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 fade-in-up"
              style="animation-delay: 200ms"
            >
              <div class="flex items-center gap-3 mb-4">
                <Icon name="mdi:chart-bar" class="w-5 h-5 text-gray-600" />
                <h3 class="font-bold text-gray-900">Quick Stats</h3>
              </div>
              <div class="space-y-4">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md"
                >
                  {{ companyData.logoInitials || 'CP' }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 text-lg mb-1">
                    {{ companyData.name || 'TechCorp Inc.' }}
                  </h4>
                  <p class="text-sm text-gray-600 mb-2">
                    {{ companyData.industry || 'Technology' }} • {{ companyData.size || '51-200 employees' }}
                  </p>
                  <p class="text-xs text-gray-500 line-clamp-3">
                    {{ companyData.descriptionPreview || 'We are a leading technology company focused on innovative solutions...' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Profile Completion Card -->
            <div
              class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 fade-in-up"
              style="animation-delay: 300ms"
            >
              <div class="flex items-center mb-4">
                <Icon
                  name="mdi:check-circle"
                  class="w-6 h-6 text-emerald-600 mr-2"
                />
                <h3 class="font-bold text-gray-900">Profile Completion</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-700">Basic Info</span>
                  <span class="text-emerald-600 font-semibold">
                    {{ companyData.basicInfoComplete ? 'Complete' : 'Incomplete' }}
                  </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-700">Contact Info</span>
                  <span class="text-emerald-600 font-semibold">
                    {{ companyData.contactInfoComplete ? 'Complete' : 'Incomplete' }}
                  </span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-700">Social Media</span>
                  <span class="text-emerald-600 font-semibold">
                    {{ companyData.socialInfoComplete ? 'Complete' : 'Incomplete' }}
                  </span>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-emerald-200">
                <div class="w-full bg-emerald-200 rounded-full h-2 mb-2">
                  <div
                    class="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                    :style="{ width: profileCompletion + '%' }"
                  ></div>
                </div>
                <p class="text-xs text-gray-600">
                  {{ profileCompletion }}% of your profile is complete
                </p>
              </div>
            </div>

            <!-- Activity Card -->
            <div
              class="bg-blue-50 rounded-xl p-6 border border-blue-200 fade-in-up"
              style="animation-delay: 400ms"
            >
              <div class="flex items-center mb-4">
                <Icon
                  name="mdi:timeline-clock"
                  class="w-6 h-6 text-blue-600 mr-2"
                />
                <h3 class="font-bold text-gray-900">Recent Activity</h3>
              </div>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <Icon
                    name="mdi:account-plus"
                    class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      Profile viewed by 5 candidates
                    </p>
                    <p class="text-xs text-gray-600">2 days ago</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon
                    name="mdi:email"
                    class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      Received 12 applications
                    </p>
                    <p class="text-xs text-gray-600">1 week ago</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Icon
                    name="mdi:star"
                    class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                  />
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      Profile rated 4.8/5 stars
                    </p>
                    <p class="text-xs text-gray-600">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mock company data - replace with actual data fetching
const companyData = reactive({
  name: 'TechCorp Inc.',
  logoInitials: 'TC',
  industry: 'Technology',
  size: '51-200 employees',
  foundedYear: 2020,
  headquarters: 'San Francisco, CA',
  description: 'We are a leading technology company focused on innovative solutions that transform the way businesses operate. Our mission is to empower teams with cutting-edge tools and exceptional service.',
  descriptionPreview: 'We are a leading technology company focused on innovative solutions...',
  email: 'contact@techcorp.com',
  phone: '+1 (555) 987-6543',
  website: 'https://www.techcorp.com',
  address: '123 Tech Boulevard, Suite 500\nSan Francisco, CA 94102',
  linkedin: 'https://linkedin.com/company/techcorp',
  twitter: 'https://twitter.com/techcorp',
  facebook: 'https://facebook.com/techcorp',
  instagram: 'https://instagram.com/techcorp',
  basicInfoComplete: true,
  contactInfoComplete: true,
  socialInfoComplete: true,
});

const profileCompletion = computed(() => {
  let completed = 0;
  if (companyData.basicInfoComplete) completed += 33;
  if (companyData.contactInfoComplete) completed += 33;
  if (companyData.socialInfoComplete) completed += 34;
  return completed;
});

useSeoMeta({
  title: "Company Profile - FindPoint",
  description: "View your company information and branding overview",
});

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
});
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

/* Display Group Styles */
.display-group {
  display: flex;
  flex-direction: column;
}

/* Label Styles */
.display-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

/* Value Display Styles */
.display-value {
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #1f2937;
  background-color: #f9fafb;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

/* Help Text */
.input-help {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.375rem;
}
</style>
