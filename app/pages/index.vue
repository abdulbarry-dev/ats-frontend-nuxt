<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="floating-circle absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="floating-circle-delayed absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        <div class="floating-circle-slow absolute top-40 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight hero-title">
            Find Your Dream Job or Perfect Candidate
          </h1>
          <p class="text-lg sm:text-xl lg:text-2xl mb-10 text-emerald-50 leading-relaxed hero-subtitle">
            Modern applicant tracking system connecting talented professionals with amazing opportunities
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <NuxtLink 
              to="/jobs" 
              class="w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Browse Jobs
            </NuxtLink>
            <NuxtLink 
              to="/auth/register" 
              class="w-full sm:w-auto px-8 py-4 bg-emerald-800/50 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-emerald-800/70 transition-all border-2 border-white/30 hover:border-white/50"
            >
              Get Started Free
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/20">
            <div>
              <div class="text-3xl lg:text-4xl font-bold mb-1">1000+</div>
              <div class="text-emerald-100 text-sm lg:text-base">Active Jobs</div>
            </div>
            <div>
              <div class="text-3xl lg:text-4xl font-bold mb-1">500+</div>
              <div class="text-emerald-100 text-sm lg:text-base">Companies</div>
            </div>
            <div>
              <div class="text-3xl lg:text-4xl font-bold mb-1">5000+</div>
              <div class="text-emerald-100 text-sm lg:text-base">Candidates</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>

    <!-- Features Section - For Candidates -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            For Job Seekers
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to land your next opportunity
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Feature 1 -->
          <div class="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group scroll-reveal" style="animation-delay: 100ms;">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon name="mdi:magnify" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Smart Job Search
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Find relevant opportunities with advanced filters, keyword search, and personalized recommendations
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group scroll-reveal" style="animation-delay: 200ms;">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon name="mdi:account-circle" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Build Your Profile
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Create a compelling profile, upload your resume, and showcase your skills to employers
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group scroll-reveal" style="animation-delay: 300ms;">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon name="mdi:chart-timeline-variant" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Track Applications
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Monitor all your applications in one place and get real-time status updates
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - For Recruiters -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            For Recruiters
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your hiring process and find the best talent
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Feature 1 -->
          <div class="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 group scroll-reveal" style="animation-delay: 100ms;">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon name="mdi:briefcase-plus" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Post Jobs Easily
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Create and publish job listings in minutes with our intuitive job posting interface
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 group scroll-reveal" style="animation-delay: 200ms;">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon name="mdi:account-group" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Manage Candidates
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Review applications, organize candidates, and collaborate with your hiring team
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 group scroll-reveal" style="animation-delay: 300ms;">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon name="mdi:chart-box" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Analytics & Insights
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Track job performance, view engagement metrics, and optimize your hiring strategy
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle, #10b981 1px, transparent 1px); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 relative">
            <!-- Connecting line for desktop -->
            <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 mx-12" style="z-index: 0;"></div>
            
            <!-- Step 1 -->
            <div class="text-center relative scroll-reveal" style="animation-delay: 100ms;">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10">
                <Icon name="mdi:account-plus" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Create Account</h3>
              <p class="text-gray-600">Sign up as a candidate or recruiter in seconds</p>
            </div>

            <!-- Step 2 -->
            <div class="text-center relative scroll-reveal" style="animation-delay: 200ms;">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10">
                <Icon name="mdi:file-document-edit" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Complete Profile</h3>
              <p class="text-gray-600">Add your details, resume, or job postings</p>
            </div>

            <!-- Step 3 -->
            <div class="text-center relative scroll-reveal" style="animation-delay: 300ms;">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10">
                <Icon name="mdi:handshake" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Start Matching</h3>
              <p class="text-gray-600">Apply to jobs or review qualified candidates</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-lg lg:text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
          Join thousands of professionals and companies using our platform
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/auth/register?type=candidate" 
            class="w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sign Up as Candidate
          </NuxtLink>
          <NuxtLink 
            to="/auth/register?type=recruiter" 
            class="w-full sm:w-auto px-8 py-4 bg-emerald-800/50 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-emerald-800/70 transition-all border-2 border-white/30 hover:border-white/50"
          >
            Sign Up as Recruiter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useSeoMeta({
  title: 'FindPoint - Modern Applicant Tracking System',
  description: 'Connect talented professionals with amazing opportunities. Modern ATS for job seekers and recruiters.',
  ogTitle: 'FindPoint - Modern Applicant Tracking System',
  ogDescription: 'Connect talented professionals with amazing opportunities. Modern ATS for job seekers and recruiters.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// Scroll animation on mount
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

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Hero animations */
@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: heroFadeIn 1s ease-out;
}

.hero-subtitle {
  animation: heroFadeIn 1s ease-out 0.2s both;
}

/* Floating circles */
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.floating-circle {
  animation: float 6s ease-in-out infinite;
}

.floating-circle-delayed {
  animation: float 8s ease-in-out infinite;
  animation-delay: 2s;
}

.floating-circle-slow {
  animation: float 10s ease-in-out infinite;
  animation-delay: 1s;
}

/* Scroll reveal animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-reveal {
  opacity: 0;
  transition: all 0.6s ease-out;
}

.scroll-reveal.is-visible {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
