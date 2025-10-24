import { ref, watch } from 'vue'

// Global profile store for navigation with localStorage persistence
const profileStore = ref<Record<string, any>>({})

// Load from localStorage on initialization
const STORAGE_KEY = 'findpoint-profiles'
try {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    profileStore.value = JSON.parse(stored)
  }
} catch (error) {
  console.warn('Failed to load profile data from localStorage:', error)
  // Clear corrupted data
  localStorage.removeItem(STORAGE_KEY)
}

// Watch for changes and persist to localStorage
watch(profileStore, (newProfiles) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfiles))
  } catch (error) {
    console.warn('Failed to save profile data to localStorage:', error)
  }
}, { deep: true })

export const useProfileStore = () => {
  const setProfile = (id: string, profile: any) => {
    if (!profile || typeof profile !== 'object') {
      console.warn('Invalid profile data provided to setProfile')
      return
    }

    // Ensure profile has required fields
    if (!profile.id) {
      profile.id = id
    }
    if (!profile.name) {
      console.warn('Profile missing name field')
    }
    if (!profile.role) {
      console.warn('Profile missing role field')
    }

    profileStore.value[id] = { ...profile }
  }

  const getProfile = (id: string) => {
    if (!id) {
      console.warn('No profile ID provided to getProfile')
      return null
    }

    const profile = profileStore.value[id]
    if (!profile) {
      return null
    }

    // Validate that we have the minimum required data
    if (!profile.name || !profile.role) {
      console.warn(`Profile ${id} is missing required fields`)
      return null
    }

    return profile
  }

  const clearProfile = (id: string) => {
    if (profileStore.value[id]) {
      delete profileStore.value[id]
      // Update localStorage immediately
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profileStore.value))
      } catch (error) {
        console.warn('Failed to update localStorage after clearing profile:', error)
      }
    }
  }

  const hasProfile = (id: string) => {
    const profile = profileStore.value[id]
    return profile && profile.name && profile.role
  }

  return {
    setProfile,
    getProfile,
    clearProfile,
    hasProfile,
  }
}
