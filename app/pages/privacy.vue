<template>
  <div class="container mx-auto px-4 py-12">
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
      <div class="px-6 py-10 md:px-12 md:py-12">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
          <p class="mt-3 text-gray-600">Last updated: October 17, 2025</p>
          <p class="mt-6 text-lg text-gray-700">Your privacy matters. This policy explains what data we collect and how we use it to improve your experience.</p>
        </div>

        <div class="mt-8 md:mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- TOC -->
          <aside class="md:col-span-1 hidden md:block">
            <nav class="sticky top-6">
              <h4 class="text-sm font-semibold text-gray-600 mb-3">On this page</h4>
              <ul class="space-y-2 text-sm text-gray-600">
                <li><a href="#introduction" class="hover:text-emerald-600">Introduction</a></li>
                <li><a href="#information" class="hover:text-emerald-600">Information we collect</a></li>
                <li><a href="#use" class="hover:text-emerald-600">How we use information</a></li>
                <li><a href="#sharing" class="hover:text-emerald-600">Sharing & disclosure</a></li>
                <li><a href="#security" class="hover:text-emerald-600">Security</a></li>
                <li><a href="#contact" class="hover:text-emerald-600">Contact</a></li>
              </ul>
            </nav>
          </aside>

          <!-- Content -->
          <section class="md:col-span-3 prose max-w-none text-gray-700">
            <h2 id="introduction">Introduction</h2>
            <p>FindPoint respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your information.</p>

            <h3 id="information">Information we collect</h3>
            <details class="mb-4 rounded-lg border border-gray-100 p-4">
              <summary class="font-medium cursor-pointer">Types of information</summary>
              <p class="mt-3">We collect information you provide (e.g., name, email, resume) and data collected automatically (e.g., usage, device info).</p>
            </details>

            <h3 id="use">How we use information</h3>
            <details class="mb-4 rounded-lg border border-gray-100 p-4">
              <summary class="font-medium cursor-pointer">Purposes</summary>
              <p class="mt-3">We use data to operate the service, personalize your experience, communicate with you, and improve our products.</p>
            </details>

            <h3 id="sharing">Sharing & disclosure</h3>
            <details class="mb-4 rounded-lg border border-gray-100 p-4">
              <summary class="font-medium cursor-pointer">Who we share with</summary>
              <p class="mt-3">We may share data with service providers, partners, and in legal circumstances. We never sell your personal data.</p>
            </details>

            <h3 id="security">Security</h3>
            <p>We implement reasonable measures to protect your information, but no method is 100% secure. Contact us if you suspect unauthorized access.</p>

            <h3 id="contact">Contact</h3>
            <p>If you have questions about this policy or your data, reach out to us at <a href="mailto:privacy@findpoint.com" class="text-emerald-600">privacy@findpoint.com</a>.</p>
          </section>
        </div>
      </div>

      <div class="bg-gray-50 border-t border-gray-100 px-6 py-6 md:px-12">
        <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 class="font-semibold text-gray-900">Questions about your data?</h4>
            <p class="text-sm text-gray-600">Email our privacy team and we'll respond within 3 business days.</p>
          </div>
          <a href="mailto:privacy@findpoint.com" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg">Contact Privacy Team</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Privacy Policy - FindPoint' })
</script>
