<template>
  <div class="container mx-auto px-4 py-10">
    <div class="bg-white rounded-2xl shadow-md p-8">
      <h2 class="text-2xl font-semibold">Notifications</h2>
      <p class="text-sm text-gray-600">Control which notifications you receive.</p>

      <div class="mt-6 space-y-4 max-w-2xl">
        <label class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">Email notifications</div>
            <div class="text-sm text-gray-500">Receive updates by email</div>
          </div>
          <input type="checkbox" v-model="emailNotifications" class="h-5 w-5" />
        </label>

        <label class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">Push notifications</div>
            <div class="text-sm text-gray-500">Receive push notifications on mobile</div>
          </div>
          <input type="checkbox" v-model="pushNotifications" class="h-5 w-5" />
        </label>

        <div class="flex items-center gap-3 mt-3">
          <button @click="save" class="px-4 py-2 bg-emerald-600 text-white rounded-lg">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useHead({ title: 'Notification Settings - FindPoint' })

const emailNotifications = ref(true)
const pushNotifications = ref(false)

function save() { console.log('Notifications saved') }
</script>

<style scoped>
.custom-input { width:100%; padding:0.75rem; border:1px solid #e5e7eb; border-radius:0.5rem }
</style>
