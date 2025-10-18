/**
 * useUserRole - Role-aware composable
 * 
 * Provides user role information and role-based utilities
 * Used throughout the app for conditional rendering and navigation
 */

import type { UserRole, User } from './../../types'

export const useUserRole = () => {
  // In production, this would come from authentication state
  const user = useState<User | null>('user', () => null)
  
  /**
   * Current user role
   */
  const role = computed<UserRole | null>(() => user.value?.role || null)
  
  /**
   * Check if user is a candidate
   */
  const isCandidate = computed(() => role.value === 'candidate')
  
  /**
   * Check if user is a recruiter
   */
  const isRecruiter = computed(() => role.value === 'recruiter')
  
  /**
   * Check if user is an admin
   */
  const isAdmin = computed(() => role.value === 'admin')
  
  /**
   * Check if user is authenticated
   */
  const isAuthenticated = computed(() => !!user.value)
  
  /**
   * Get dashboard route based on role
   */
  const dashboardRoute = computed(() => {
    if (isCandidate.value) return '/candidates'
    if (isRecruiter.value) return '/recruiters'
    if (isAdmin.value) return '/admin'
    return '/'
  })
  
  /**
   * Get profile route based on role
   */
  const profileRoute = computed(() => {
    if (isCandidate.value) return '/candidates/profile'
    if (isRecruiter.value) return '/recruiters/profile'
    return '/profile'
  })
  
  /**
   * Get settings route based on role
   */
  const settingsRoute = computed(() => {
    if (isCandidate.value) return '/candidates/settings'
    if (isRecruiter.value) return '/recruiters/settings'
    return '/settings'
  })
  
  /**
   * Get role-specific navigation items
   */
  const navigationItems = computed(() => {
    if (isCandidate.value) {
      return [
        { label: 'Dashboard', to: '/candidates', icon: 'mdi:view-dashboard' },
        { label: 'Browse Jobs', to: '/jobs', icon: 'mdi:briefcase-search' },
        { label: 'Applications', to: '/candidates/applications', icon: 'mdi:file-document-multiple' },
        { label: 'Saved Jobs', to: '/candidates/saved', icon: 'mdi:heart' },
        { label: 'Profile', to: '/candidates/profile', icon: 'mdi:account' },
      ]
    }
    
    if (isRecruiter.value) {
      return [
        { label: 'Dashboard', to: '/recruiters', icon: 'mdi:view-dashboard' },
        { label: 'Post Job', to: '/recruiters/jobs/post', icon: 'mdi:plus-circle' },
        { label: 'Manage Jobs', to: '/recruiters/jobs/manage', icon: 'mdi:briefcase-edit' },
        { label: 'Candidates', to: '/recruiters/candidates', icon: 'mdi:account-group' },
        { label: 'Analytics', to: '/recruiters/analytics', icon: 'mdi:chart-line' },
        { label: 'Company', to: '/recruiters/company', icon: 'mdi:office-building' },
      ]
    }
    
    return []
  })
  
  /**
   * Get role display name
   */
  const roleDisplayName = computed(() => {
    if (isCandidate.value) return 'Candidate'
    if (isRecruiter.value) return 'Recruiter'
    if (isAdmin.value) return 'Admin'
    return 'Guest'
  })
  
  /**
   * Get role-specific theme color
   */
  const roleColor = computed(() => {
    if (isCandidate.value) return 'blue'
    if (isRecruiter.value) return 'emerald'
    if (isAdmin.value) return 'purple'
    return 'gray'
  })
  
  /**
   * Set user (mock function - in production this would be handled by auth)
   */
  const setUser = (userData: User) => {
    user.value = userData
  }
  
  /**
   * Clear user (logout)
   */
  const clearUser = () => {
    user.value = null
  }
  
  /**
   * Check if user has specific role
   */
  const hasRole = (checkRole: UserRole) => {
    return role.value === checkRole
  }
  
  /**
   * Check if user has any of the specified roles
   */
  const hasAnyRole = (...roles: UserRole[]) => {
    return role.value ? roles.includes(role.value) : false
  }
  
  return {
    // State
    user,
    role,
    
    // Computed
    isCandidate,
    isRecruiter,
    isAdmin,
    isAuthenticated,
    dashboardRoute,
    profileRoute,
    settingsRoute,
    navigationItems,
    roleDisplayName,
    roleColor,
    
    // Methods
    setUser,
    clearUser,
    hasRole,
    hasAnyRole,
  }
}
