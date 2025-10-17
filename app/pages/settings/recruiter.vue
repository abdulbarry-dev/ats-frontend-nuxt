<template>
  <div class="container mx-auto px-4 py-10">
    <div class="bg-white rounded-2xl shadow-md p-8">
      <h2 class="text-2xl font-semibold">Recruiter Settings</h2>
      <p class="text-sm text-gray-600">Settings for managing job posts and team access.</p>

      <div class="mt-6 space-y-4 max-w-2xl">
        <label class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">Team members</div>
            <div class="text-sm text-gray-500">Invite or remove team members</div>
          </div>
          <NuxtLink to="/admin/users" class="text-emerald-600">Manage</NuxtLink>
        </label>

        <label class="flex items-center justify-between p-3 border rounded-lg">
          <div>
            <div class="font-medium">Posting defaults</div>
            <div class="text-sm text-gray-500">Default settings for new job posts</div>
          </div>
          <NuxtLink to="/jobs/manage" class="text-emerald-600">Edit</NuxtLink>
        </label>

        <div class="flex items-center gap-3 mt-3">
          <button @click="save" class="px-4 py-2 bg-emerald-600 text-white rounded-lg">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Recruiter Settings - FindPoint' })
function save() { console.log('Recruiter settings saved') }
</script>

<style scoped>
.custom-input { width:100%; padding:0.75rem; border:1px solid #e5e7eb; border-radius:0.5rem }
</style>
