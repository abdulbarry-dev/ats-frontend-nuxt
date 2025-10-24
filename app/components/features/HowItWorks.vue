<template>
  <section
    ref="sectionRef"
    :class="[
      'py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden scroll-reveal',
      { 'is-visible': isVisible },
    ]"
  >
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 left-0 w-full h-full"
        style="
          background-image: radial-gradient(
            circle,
            #10b981 1px,
            transparent 1px
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="text-center mb-16 scroll-reveal"
        :class="{ 'is-visible': isVisible }"
      >
        <h2
          class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          How It Works
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get started in three simple steps
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 relative">
          <div
            class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-800 mx-12"
            style="z-index: 0"
          ></div>
          <!-- Step 1 -->
          <div
            class="text-center relative scroll-reveal"
            :class="{ 'is-visible': isVisible }"
            style="animation-delay: 100ms"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10"
            >
              <Icon name="mdi:account-plus" class="w-8 h-8" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              Create Account
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Sign up as a candidate or recruiter in seconds
            </p>
          </div>
          <!-- Step 2 -->
          <div
            class="text-center relative scroll-reveal"
            :class="{ 'is-visible': isVisible }"
            style="animation-delay: 200ms"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10"
            >
              <Icon name="mdi:file-document-edit" class="w-8 h-8" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              Complete Profile
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Add your details, resume, or job postings
            </p>
          </div>
          <!-- Step 3 -->
          <div
            class="text-center relative scroll-reveal"
            :class="{ 'is-visible': isVisible }"
            style="animation-delay: 300ms"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300 relative z-10"
            >
              <Icon name="mdi:handshake" class="w-8 h-8" />
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              Start Matching
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Apply to jobs or review qualified candidates
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!sectionRef.value) return;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisible.value = true;
        observer && observer.disconnect();
      }
    },
    { threshold: 0.1 },
  );
  observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  observer && observer.disconnect();
});
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: none;
}
</style>
