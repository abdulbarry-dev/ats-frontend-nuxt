<template>
  <div class="container mx-auto px-4 py-10">
    <div class="bg-white rounded-2xl shadow-md p-8">
      <div class="flex items-center gap-6">
        <div class="w-20 h-20 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl font-bold text-emerald-700">AB</div>
        <div>
          <h2 class="text-2xl font-semibold">Profile</h2>
          <p class="text-sm text-gray-600">Update your personal information.</p>
        </div>
      </div>

      <form @submit.prevent="save" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">First name</label>
          <input v-model="firstName" class="mt-1 custom-input" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Last name</label>
          <input v-model="lastName" class="mt-1 custom-input" />
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700">Bio</label>
          <textarea v-model="bio" class="mt-1 custom-input h-28"></textarea>
        </div>

        <div class="md:col-span-2 flex items-center gap-3 mt-3">
          <button type="submit" class="px-4 py-2 bg-emerald-600 text-white rounded-lg">Save</button>
          <button type="button" @click="reset" class="px-4 py-2 border rounded-lg">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
useHead({ title: 'Profile Settings - FindPoint' })

const firstName = ref('Alex')
const lastName = ref('Brown')
const bio = ref('Passionate professional...')

function save() {
  console.log('Save profile', { firstName: firstName.value, lastName: lastName.value, bio: bio.value })
}

function reset() {
  firstName.value = 'Alex'
  lastName.value = 'Brown'
  bio.value = 'Passionate professional...'
}
</script>

<style scoped>
.custom-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}
</style>
