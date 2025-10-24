<template>
  <div class="bg-white dark:bg-slate-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900 text-white py-20 overflow-hidden transition-colors duration-300"
    >
      <div
        class="absolute inset-0 opacity-10 dark:opacity-20 transition-opacity duration-300"
      >
        <div
          class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center fade-in-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6">About FindPoint</h1>
          <p
            class="text-xl lg:text-2xl text-emerald-50 dark:text-emerald-100 leading-relaxed transition-colors duration-300"
          >
            Transforming the way companies find talent and candidates discover
            opportunities
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section
      class="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="fade-in-left">
              <h2
                class="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
              >
                Our Mission
              </h2>
              <p
                class="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300"
              >
                At FindPoint, we believe finding the right job or the perfect
                candidate shouldn't be complicated. Our mission is to create a
                seamless, efficient, and transparent hiring experience for
                everyone.
              </p>
              <p
                class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300"
              >
                We leverage modern technology to connect talented professionals
                with companies that value their skills, fostering meaningful
                career growth and business success.
              </p>
            </div>
            <div class="fade-in-right">
              <div
                class="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 rounded-2xl p-8 shadow-lg dark:shadow-slate-900/50 transition-colors duration-300"
              >
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    >
                      <Icon name="mdi:target" class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        class="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300"
                      >
                        Innovation
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300"
                      >
                        Cutting-edge technology for modern hiring
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    >
                      <Icon name="mdi:handshake" class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        class="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300"
                      >
                        Trust
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300"
                      >
                        Transparent and honest connections
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    >
                      <Icon
                        name="mdi:rocket-launch"
                        class="w-6 h-6 text-white"
                      />
                    </div>
                    <div>
                      <h3
                        class="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300"
                      >
                        Growth
                      </h3>
                      <p
                        class="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300"
                      >
                        Empowering careers and businesses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section
      class="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16 fade-in-up transition-colors duration-300"
          >
            Our Impact
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 border border-gray-100 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 fade-in-up"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div
                class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
              >
                <Icon
                  :name="stat.icon"
                  class="w-8 h-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                />
              </div>
              <div
                class="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2 transition-colors duration-300"
              >
                {{ stat.value }}
              </div>
              <div
                class="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-300"
              >
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section
      class="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2
            class="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16 fade-in-up transition-colors duration-300"
          >
            Our Values
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(value, index) in values"
              :key="index"
              class="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-sm hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-300 fade-in-up"
              :style="{ animationDelay: `${index * 150}ms` }"
            >
              <div
                class="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300"
              >
                <Icon :name="value.icon" class="w-8 h-8 text-white" />
              </div>
              <h3
                class="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300"
              >
                {{ value.title }}
              </h3>
              <p
                class="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300"
              >
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section
      class="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2
            class="text-4xl font-bold text-gray-900 dark:text-white mb-6 fade-in-up transition-colors duration-300"
          >
            Join Our Journey
          </h2>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto fade-in-up transition-colors duration-300"
            style="animation-delay: 100ms"
          >
            We're building the future of recruitment, and we'd love for you to
            be part of it. Whether you're looking for your dream job or the
            perfect candidate, FindPoint is here to help.
          </p>
          <div class="fade-in-up" style="animation-delay: 200ms">
            <NuxtLink
              to="/auth/register"
              class="inline-block px-8 py-4 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { icon: "mdi:briefcase", value: "10K+", label: "Active Jobs" },
  { icon: "mdi:account-group", value: "50K+", label: "Candidates" },
  { icon: "mdi:office-building", value: "2K+", label: "Companies" },
  { icon: "mdi:check-circle", value: "95%", label: "Success Rate" },
];

const values = [
  {
    icon: "mdi:lightbulb-on",
    title: "Innovation",
    description:
      "We constantly evolve our platform with the latest technology to provide the best user experience and efficiency in hiring.",
  },
  {
    icon: "mdi:account-heart",
    title: "People First",
    description:
      "Every feature we build focuses on making the hiring journey better for both candidates and recruiters.",
  },
  {
    icon: "mdi:shield-check",
    title: "Integrity",
    description:
      "We maintain the highest standards of transparency, security, and ethical practices in everything we do.",
  },
];

useSeoMeta({
  title: "About Us - FindPoint",
  description:
    "Learn about FindPoint's mission to transform recruitment and connect talented professionals with amazing opportunities.",
  ogTitle: "About Us - FindPoint",
  ogDescription:
    "Learn about FindPoint's mission to transform recruitment and connect talented professionals with amazing opportunities.",
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}
</style>
