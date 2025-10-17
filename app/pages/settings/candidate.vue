<template>
  <div class="container mx-auto px-4 py-10">
    <div class="bg-white rounded-2xl shadow-md p-8">
      <h2 class="text-2xl font-semibold">Candidate Settings</h2>
      <p class="text-sm text-gray-600">Preferences for job matching and visibility.</p>

      <div class="mt-6 space-y-4 max-w-2xl">
        <label class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">Job preferences</div>
            <div class="text-sm text-gray-500">Set preferred locations and job types</div>
          </div>
          <NuxtLink to="/settings/profile" class="text-emerald-600">Edit</NuxtLink>
        </label>

        <label class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">Visibility</div>
            <div class="text-sm text-gray-500">Allow recruiters to view your profile</div>
          </div>
          <input type="checkbox" v-model="visibleToRecruiters" class="h-5 w-5" />
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
useHead({ title: 'Candidate Settings - FindPoint' })

const visibleToRecruiters = ref(true)
function save() { console.log('Candidate settings saved') }
</script>

<style scoped>
.custom-input { width:100%; padding:0.75rem; border:1px solid #e5e7eb; border-radius:0.5rem }
</style>
