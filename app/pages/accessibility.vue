<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <PageHeader title="Accessibility Statement" />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <h2>Our Commitment to Accessibility</h2>
          <p>
            We are committed to ensuring that our website is accessible to everyone,
            including people with disabilities. We strive to provide a positive user
            experience for all our visitors.
          </p>

          <h3>Accessibility Standards</h3>
          <p>
            Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1
            Level AA standards. We regularly review and update our website to improve accessibility.
          </p>

          <h3>Features</h3>
          <ul>
            <li>High contrast mode support</li>
            <li>Keyboard navigation</li>
            <li>Screen reader compatibility</li>
            <li>Responsive design for mobile devices</li>
            <li>Alternative text for images</li>
          </ul>

          <h3>Contact Us</h3>
          <p>
            If you encounter any accessibility issues or have suggestions for improvement,
            please contact us at <a href="mailto:accessibility@example.com">accessibility@example.com</a>.
          </p>

          <h3>Last Updated</h3>
          <p>October 31, 2025</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";

useHead({
  title: "Accessibility Statement",
  meta: [
    {
      name: "description",
      content: "Our commitment to web accessibility and inclusive design practices."
    }
  ]
});
</script>