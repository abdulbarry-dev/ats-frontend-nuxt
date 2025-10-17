<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Candidate Dashboard</h1>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="text-3xl font-bold text-emerald-600 mb-2">12</div>
        <div class="text-gray-600">Applications</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="text-3xl font-bold text-emerald-600 mb-2">5</div>
        <div class="text-gray-600">Interviews</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div class="text-3xl font-bold text-emerald-600 mb-2">8</div>
        <div class="text-gray-600">Saved Jobs</div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <p class="text-gray-600">Your recent applications and updates will appear here.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Dashboard - FindPoint' })
</script>
