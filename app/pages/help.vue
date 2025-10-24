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
            Help & FAQ
          </h1>
          <p
            class="mt-3 text-gray-600 dark:text-gray-400 transition-colors duration-300"
          >
            Find quick answers to common questions about using FindPoint.
          </p>
        </div>

        <div
          class="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <aside class="hidden md:block md:col-span-1">
            <nav
              class="sticky top-6 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300"
            >
              <h4
                class="font-semibold mb-3 text-gray-900 dark:text-white transition-colors duration-300"
              >
                Categories
              </h4>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#account"
                    class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    >Account</a
                  >
                </li>
                <li>
                  <a
                    href="#applications"
                    class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    >Applications</a
                  >
                </li>
                <li>
                  <a
                    href="#billing"
                    class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    >Billing</a
                  >
                </li>
                <li>
                  <a
                    href="#privacy"
                    class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                    >Privacy</a
                  >
                </li>
              </ul>
            </nav>
          </aside>

          <section class="md:col-span-2 prose max-w-none text-gray-700">
            <h2 id="account">Account</h2>
            <details class="mb-4 p-4 border rounded-lg">
              <summary class="font-medium cursor-pointer">
                How do I create an account?
              </summary>
              <p class="mt-3">
                Click the "Get Started" button in the header, choose your user
                type, and follow the registration flow.
              </p>
            </details>

            <details class="mb-4 p-4 border rounded-lg">
              <summary class="font-medium cursor-pointer">
                I forgot my password — what should I do?
              </summary>
              <p class="mt-3">
                Use the "Forgot password" link on the login page to request a
                reset email.
              </p>
            </details>

            <h2 id="applications">Applications</h2>
            <details class="mb-4 p-4 border rounded-lg">
              <summary class="font-medium cursor-pointer">
                How do I track my applications?
              </summary>
              <p class="mt-3">
                Go to "My Applications" from your account menu to view status
                updates and messages from employers.
              </p>
            </details>

            <h2 id="billing">Billing</h2>
            <details class="mb-4 p-4 border rounded-lg">
              <summary class="font-medium cursor-pointer">
                How are payments handled?
              </summary>
              <p class="mt-3">
                Payments are handled through our secure payment partners. We do
                not store full card data on our servers.
              </p>
            </details>

            <h2 id="privacy">Privacy</h2>
            <details class="mb-4 p-4 border rounded-lg">
              <summary class="font-medium cursor-pointer">
                How is my data used?
              </summary>
              <p class="mt-3">
                We use data to match you with jobs and to provide the service —
                review our
                <NuxtLink to="/privacy" class="text-emerald-600"
                  >Privacy Policy</NuxtLink
                >
                for full details.
              </p>
            </details>

            <div class="mt-6">
              <h3 class="text-lg font-semibold">Still need help?</h3>
              <p class="text-sm text-gray-600 mt-2">
                Contact our support team and we’ll get back within 48 hours.
              </p>
              <a
                href="mailto:support@findpoint.com"
                class="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-emerald-600 text-white rounded-lg"
                >Contact Support</a
              >
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: "Help - FindPoint" });
</script>
