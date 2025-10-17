<template>
  <div class="w-full max-w-4xl mx-auto p-6 lg:p-10">
    <header class="flex items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Billing</h2>
        <p class="text-sm text-gray-500 mt-1">Invoices and payment history</p>
      </div>

      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <div class="text-xs text-gray-500">Plan</div>
          <div class="font-medium">ProReadwise Reader</div>
        </div>
        <button class="px-3 py-2 bg-emerald-600 text-white rounded-md text-sm hover:bg-emerald-700">Manage billing</button>
      </div>
    </header>

    <div class="mt-6 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-xs text-gray-400">Last invoice</div>
          <div class="text-lg font-semibold">$1,082.09</div>
          <div class="text-sm text-gray-500">Oct 10, 2020</div>
        </div>

        <div class="text-sm text-gray-700">Visa •••• 4584</div>
      </div>
    </div>

    <div class="mt-6 bg-white rounded-xl border border-gray-100 p-2 shadow-sm">
      <table class="w-full text-left text-sm">
        <thead class="text-xs text-gray-500 uppercase">
          <tr>
            <th class="py-2 pr-4">Date</th>
            <th class="py-2 pr-4">Description</th>
            <th class="py-2 pr-4">Status</th>
            <th class="py-2 pr-4">Total</th>
            <th class="py-2 pr-4">Invoice</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-50">
            <td class="py-3 pr-4 text-gray-700">{{ row.date }}</td>
            <td class="py-3 pr-4 text-gray-600">{{ row.description }}</td>
            <td class="py-3 pr-4">
              <span :class="['px-2 py-1 rounded text-xs font-medium', row.status === 'PAID' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-600']">{{ row.status }}</span>
            </td>
            <td class="py-3 pr-4 text-gray-700">{{ row.total }}</td>
            <td class="py-3 pr-4 text-emerald-600"><NuxtLink :to="`/invoices/${row.invoice}`">{{ row.invoice }}</NuxtLink></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useHead({ title: 'Billing - FindPoint' })

const activeTab = ref<'membership'|'additional'|'history'>('history')

const rows = ref([
  { id: 1, date: 'Oct 10, 2020', description: '1,861 Searches', method: 'Visa •••• 4584', status: 'REFUNDED', total: '$1,082.09', invoice: '1245987' },
  { id: 2, date: 'Oct 9, 2020', description: '1,343 Searches', method: 'Visa •••• 4584', status: 'PAID', total: '$1,082.09', invoice: '1245987' },
  { id: 3, date: 'Oct 9, 2020', description: '1,343 Searches', method: 'Visa •••• 4584', status: 'PAID', total: '$1,082.09', invoice: '1245987' },
  { id: 4, date: 'Oct 9, 2020', description: '1,343 Searches', method: 'Visa •••• 4584', status: 'PAID', total: '$1,082.09', invoice: '1245987' }
])
</script>

<style scoped>
.rounded-2xl { border-radius: 14px; }
table td, table th { white-space: nowrap; }
</style>
