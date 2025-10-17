<template>
  <div class="container mx-auto px-4 py-10">
    <div class="bg-white rounded-2xl shadow-md p-8">
      <h2 class="text-2xl font-semibold">Account</h2>
      <p class="text-sm text-gray-600">Manage email, password and connected accounts.</p>

      <form @submit.prevent="save" class="mt-6 space-y-4 max-w-2xl">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" class="mt-1 custom-input" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" class="mt-1 custom-input" />
        </div>

        <div class="flex items-center gap-3">
          <button type="submit" class="px-4 py-2 bg-emerald-600 text-white rounded-lg">Save changes</button>
          <button type="button" @click="disconnect" class="px-4 py-2 border rounded-lg text-sm">Disconnect social accounts</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useHead({ title: 'Account Settings - FindPoint' })

const email = ref('alex@example.com')
const password = ref('')

function save() { console.log('Account saved') }
function disconnect() { console.log('Disconnect socials') }
</script>

<style scoped>
.custom-input { width:100%; padding:0.75rem; border:1px solid #e5e7eb; border-radius:0.5rem }
</style>
