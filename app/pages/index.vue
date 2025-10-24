<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
  >
    <!--
      PERFORMANCE OPTIMIZATION: LAZY LOADING STRATEGY
      ------------------------------------------------
      - All major sections and heavy components below are annotated with guidance for lazy loading.
      - Use dynamic imports, Nuxt's <Lazy> prefix, and IntersectionObserver for below-the-fold content.
      - Ensure images use Nuxt Image for optimization and lazy loading.
      - Maintain SEO by server-rendering above-the-fold content and reserving space for lazy sections.
    -->
    <!-- Hero Section (Critical, SSR: Render immediately for SEO & LCP) -->
    <section
      class="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 dark:from-emerald-700 dark:via-emerald-800 dark:to-emerald-900 text-white overflow-hidden"
    >
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div
          class="floating-circle absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
        ></div>
        <div
          class="floating-circle-delayed absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"
        ></div>
        <div
          class="floating-circle-slow absolute top-40 right-1/4 w-48 h-48 bg-white rounded-full blur-2xl"
        ></div>
      </div>

      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight hero-title"
          >
            Find Your Dream Job or Perfect Candidate
          </h1>
          <p
            class="text-lg sm:text-xl lg:text-2xl mb-10 text-emerald-50 leading-relaxed hero-subtitle"
          >
            Modern applicant tracking system connecting talented professionals
            with amazing opportunities
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
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
          <div
            class="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8 border-t border-white/20"
          >
            <div>
              <div class="text-3xl lg:text-4xl font-bold mb-1">1000+</div>
              <div class="text-emerald-100 text-sm lg:text-base">
                Active Jobs
              </div>
            </div>
            <div>
              <div class="text-3xl lg:text-4xl font-bold mb-1">500+</div>
              <div class="text-emerald-100 text-sm lg:text-base">Companies</div>
            </div>
            <div>
              <div class="text-3xl lg:text-4xl font-bold mb-1">5000+</div>
              <div class="text-emerald-100 text-sm lg:text-base">
                Candidates
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div
        class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-slate-900 to-transparent"
      ></div>
    </section>

    <LazySection :component="FeaturesCandidates" />

    <LazySection :component="FeaturesRecruiters" />

    <LazySection :component="HowItWorks" />

    <LazySection :component="CtaSection" />
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useSeoMeta({
  title: "FindPoint - Modern Applicant Tracking System",
  description:
    "Connect talented professionals with amazing opportunities. Modern ATS for job seekers and recruiters.",
  ogTitle: "FindPoint - Modern Applicant Tracking System",
  ogDescription:
    "Connect talented professionals with amazing opportunities. Modern ATS for job seekers and recruiters.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

import { defineAsyncComponent } from "vue";
import LazySection from "~/components/base/LazySection.vue";
const FeaturesCandidates = defineAsyncComponent(
  () => import("~/components/features/FeaturesCandidates.vue"),
);
const FeaturesRecruiters = defineAsyncComponent(
  () => import("~/components/features/FeaturesRecruiters.vue"),
);
const HowItWorks = defineAsyncComponent(
  () => import("~/components/features/HowItWorks.vue"),
);
const CtaSection = defineAsyncComponent(
  () => import("~/components/cta/CtaSection.vue"),
);
// <\/script>
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
  0%,
  100% {
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
