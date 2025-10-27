<template>
  <div class="container mx-auto px-4 py-12 transition-colors duration-300">
    <div
      class="bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-slate-900/50 overflow-hidden transition-colors duration-300"
    >
      <div class="px-6 py-10 md:px-12">
        <div class="max-w-3xl mx-auto text-center">
          <h1
            class="text-4xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300"
          >
            Terms of Service
          </h1>
          <p
            class="mt-3 text-gray-600 dark:text-gray-400 transition-colors duration-300"
          >
            Please read these terms carefully before using FindPoint.
          </p>
        </div>

        <div
          class="mt-8 max-w-5xl mx-auto prose dark:prose-invert text-gray-700 dark:text-gray-300 transition-colors duration-300"
        >
          <h2
            class="text-gray-900 dark:text-white transition-colors duration-300"
          >
            1. Acceptance
          </h2>
          <p>
            By accessing or using FindPoint, you agree to these Terms. If you do
            not agree, do not use the service.
          </p>

          <h2
            class="text-gray-900 dark:text-white transition-colors duration-300"
          >
            2. Use of Service
          </h2>
          <p>
            You may use the Service in compliance with all applicable laws. You
            are responsible for the content you submit.
          </p>

          <h2
            class="text-gray-900 dark:text-white transition-colors duration-300"
          >
            3. Account & Security
          </h2>
          <p>
            Keep your account credentials secure. Notify us immediately of any
            unauthorized access.
          </p>

          <h2
            class="text-gray-900 dark:text-white transition-colors duration-300"
          >
            4. Limitations
          </h2>
          <p>
            We provide the Service "as is" and are not liable for indirect
            damages to the fullest extent permitted by law.
          </p>

          <h2
            class="text-gray-900 dark:text-white transition-colors duration-300"
          >
            5. Changes
          </h2>
          <p>
            We may update these Terms. We will notify users of material changes.
          </p>

          <h2
            class="text-gray-900 dark:text-white transition-colors duration-300"
          >
            6. Contact
          </h2>
          <p>
            If you have questions about these Terms, contact
            <a
              href="mailto:legal@findpoint.com"
              class="text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
              >legal@findpoint.com</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


import { useHead } from "nuxt/app";
useHead({ title: "Terms of Service - FindPoint" });
</script>
