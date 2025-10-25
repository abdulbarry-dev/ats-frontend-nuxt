<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <!-- Back Button & Header -->
      <NuxtLink
        to="/recruiters/settings"
        class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 transition-colors"
      >
        <Icon name="mdi:arrow-left" class="w-5 h-5" />
        Back to Settings
      </NuxtLink>

      <div class="mb-8">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          Billing Settings
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your subscription and payment methods
        </p>
      </div>

      <!-- Current Plan -->
      <div
        class="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-start justify-between mb-4">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Plan
              </h2>
              <span
                class="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full"
                >Active</span
              >
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              Full access to all recruiting features
            </p>
          </div>
          <div class="text-right">
            <div class="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              $99
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              per month
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4 mt-6">
          <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Unlimited job postings
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Advanced analytics
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <Icon name="mdi:check-circle" class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Priority support
          </div>
        </div>

        <div class="flex gap-3 mt-6">
          <button
            class="px-6 py-3 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-emerald-600 dark:border-emerald-400 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all duration-300"
          >
            Change Plan
          </button>
          <button
            class="px-6 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300"
          >
            View All Plans
          </button>
        </div>
      </div>

      <!-- Payment Methods -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Payment Methods
          </h2>
          <button
            class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="mdi:plus" class="w-4 h-4" />
            Add Card
          </button>
        </div>

        <div class="space-y-4">
          <div
            v-for="card in paymentMethods"
            :key="card.id"
            class="flex items-center justify-between p-4 border-2 rounded-xl transition-all"
            :class="
              card.isDefault
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                : 'border-gray-200 dark:border-slate-600'
            "
          >
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-lg flex items-center justify-center"
              >
                <Icon name="mdi:credit-card" class="w-6 h-6 text-white" />
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-semibold text-gray-900 dark:text-white"
                    >•••• {{ card.last4 }}</span
                  >
                  <span
                    v-if="card.isDefault"
                    class="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full"
                    >Default</span
                  >
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Expires {{ card.expiry }}
                </div>
              </div>
            </div>
            <div class="flex gap-2">
              <button
                v-if="!card.isDefault"
                class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all text-sm"
              >
                Set as Default
              </button>
              <button
                class="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all"
              >
                <Icon name="mdi:delete" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Billing History -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            Billing History
          </h2>
          <button
            class="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="mdi:download" class="w-4 h-4" />
            Download All
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200 dark:border-slate-700">
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Date
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Description
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Amount
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Status
                </th>
                <th
                  class="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="invoice in invoices"
                :key="invoice.id"
                class="border-b border-gray-100 dark:border-slate-700 last:border-0"
              >
                <td class="py-4 px-4 text-sm text-gray-900 dark:text-white">
                  {{ invoice.date }}
                </td>
                <td class="py-4 px-4 text-sm text-gray-900 dark:text-white">
                  {{ invoice.description }}
                </td>
                <td
                  class="py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  ${{ invoice.amount }}
                </td>
                <td class="py-4 px-4">
                  <span
                    :class="[
                      'px-3 py-1 text-xs font-semibold rounded-full',
                      invoice.status === 'Paid'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                        : invoice.status === 'Pending'
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
                    ]"
                  >
                    {{ invoice.status }}
                  </span>
                </td>
                <td class="py-4 px-4">
                  <button
                    class="text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-semibold"
                  >
                    <Icon name="mdi:download" class="w-4 h-4 inline mr-1" />
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Billing Information -->
      <div
        class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Billing Information
        </h2>
        <form class="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Company Name</label
            >
            <input
              v-model="billingInfo.companyName"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Tax ID / VAT</label
            >
            <input
              v-model="billingInfo.taxId"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Billing Address</label
            >
            <input
              v-model="billingInfo.address"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >City</label
            >
            <input
              v-model="billingInfo.city"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >ZIP Code</label
            >
            <input
              v-model="billingInfo.zipCode"
              type="text"
              class="w-full px-4 py-3 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition-colors"
            />
          </div>
          <div class="sm:col-span-2">
            <button
              type="submit"
              @click.prevent="saveBillingInfo"
              class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Save Billing Information
            </button>
          </div>
        </form>
      </div>

      <!-- Cancel Subscription -->
      <div
        class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 transition-colors duration-300"
      >
        <h2 class="text-xl font-bold text-red-900 dark:text-red-400 mb-2">
          Cancel Subscription
        </h2>
        <p class="text-sm text-red-700 dark:text-red-400 mb-4">
          Canceling your subscription will disable all recruiting features
        </p>
        <button
          class="px-4 py-2 bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-800 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300"
        >
          Cancel Subscription
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const paymentMethods = ref([
  {
    id: 1,
    last4: "4242",
    expiry: "12/25",
    isDefault: true,
  },
  {
    id: 2,
    last4: "8888",
    expiry: "06/26",
    isDefault: false,
  },
]);

const invoices = ref([
  {
    id: 1,
    date: "Oct 1, 2025",
    description: "Professional Plan - Monthly",
    amount: 99,
    status: "Paid",
  },
  {
    id: 2,
    date: "Sep 1, 2025",
    description: "Professional Plan - Monthly",
    amount: 99,
    status: "Paid",
  },
  {
    id: 3,
    date: "Aug 1, 2025",
    description: "Professional Plan - Monthly",
    amount: 99,
    status: "Paid",
  },
]);

const billingInfo = ref({
  companyName: "TechCorp Inc.",
  taxId: "US-123456789",
  address: "123 Tech Street, Suite 400",
  city: "San Francisco",
  zipCode: "94102",
});

const saveBillingInfo = () => {
  console.log("Billing information saved");
};

useSeoMeta({
  title: "Billing Settings - FindPoint",
  description: "Manage your subscription and billing information",
});
</script>
