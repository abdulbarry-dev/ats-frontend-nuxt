<template>
  <section
    ref="sectionRef"
    :class="[
      'py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 scroll-reveal',
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
          For Recruiters
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Streamline your hiring process and find the best talent
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Feature 1 -->
        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 border border-gray-200 dark:border-slate-700 group scroll-reveal"
          :class="{ 'is-visible': isVisible }"
          style="animation-delay: 100ms"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <Icon name="mdi:briefcase-plus" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Post Jobs Easily
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Create and publish job listings in minutes with our intuitive job
            posting interface
          </p>
        </div>
        <!-- Feature 2 -->
        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 border border-gray-200 dark:border-slate-700 group scroll-reveal"
          :class="{ 'is-visible': isVisible }"
          style="animation-delay: 200ms"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <Icon name="mdi:account-group" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Manage Candidates
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Review applications, organize candidates, and collaborate with your
            hiring team
          </p>
        </div>
        <!-- Feature 3 -->
        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-8 hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 border border-gray-200 dark:border-slate-700 group scroll-reveal"
          :class="{ 'is-visible': isVisible }"
          style="animation-delay: 300ms"
        >
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          >
            <Icon name="mdi:chart-box" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Analytics & Insights
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Track job performance, view engagement metrics, and optimize your
            hiring strategy
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
