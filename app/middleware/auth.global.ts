/**
 * Purpose: Redirects unauthenticated users
 * Logic: Global middleware that checks authentication status on all routes
 * Uses: useAuth composable, navigateTo for redirects
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware for now - will be implemented later
  // const { isAuthenticated } = useAuth()
  // if (!isAuthenticated && to.path !== '/auth/login') {
  //   return navigateTo('/auth/login')
  // }
});
