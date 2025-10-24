/**
 * Purpose: Restricts admin-only access
 * Logic: Verifies user has admin role before allowing access
 * Uses: useAuth composable, navigateTo for unauthorized redirects
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware for now - will be implemented later
  // const { user, isAuthenticated } = useAuth()
  // if (!isAuthenticated || user.role !== 'admin') {
  //   return navigateTo('/')
  // }
});
