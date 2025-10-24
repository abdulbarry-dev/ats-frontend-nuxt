<template>
  <section
    ref="sectionRef"
    :class="[
      'py-20 bg-white dark:bg-slate-800 transition-colors duration-300 scroll-reveal',
      { 'is-visible': isVisible },
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="text-center mb-16 scroll-reveal"
        :class="{ 'is-visible': isVisible }"
      >
        <h2
          class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          For Job Seekers
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Everything you need to land your next opportunity
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Feature 1 -->
        <div
          class="bg-gray-50 dark:bg-slate-900 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 group scroll-reveal"
          :class="{ 'is-visible': isVisible }"
          style="animation-delay: 100ms"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <Icon name="mdi:magnify" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Smart Job Search
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Find relevant opportunities with advanced filters, keyword search,
            and personalized recommendations
          </p>
        </div>
        <!-- Feature 2 -->
        <div
          class="bg-gray-50 dark:bg-slate-900 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 group scroll-reveal"
          :class="{ 'is-visible': isVisible }"
          style="animation-delay: 200ms"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <Icon name="mdi:account-circle" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Build Your Profile
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Create a compelling profile, upload your resume, and showcase your
            skills to employers
          </p>
        </div>
        <!-- Feature 3 -->
        <div
          class="bg-gray-50 dark:bg-slate-900 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 group scroll-reveal"
          :class="{ 'is-visible': isVisible }"
          style="animation-delay: 300ms"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <Icon
              name="mdi:chart-timeline-variant"
              class="w-8 h-8 text-white"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Track Applications
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Monitor all your applications in one place and get real-time status
            updates
          </p>
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
