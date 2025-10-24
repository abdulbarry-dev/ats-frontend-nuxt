<template>
  <!--
    SCROLL ANIMATION OPTIMIZATION:
    - Add 'scroll-reveal' class to root section.
    - Use IntersectionObserver in <script setup> to add 'is-visible' when in viewport.
    - .is-visible triggers fade-in and slide-up animation (see style pseudocode).
    - Clean up observer on unmount.
  -->
  <section
    class="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900 text-white transition-colors duration-300 scroll-reveal"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
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
</template>
