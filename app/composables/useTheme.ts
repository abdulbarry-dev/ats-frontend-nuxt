export const useTheme = () => {
  const currentTheme = useState<'light' | 'dark'>('theme', () => 'light')
  const isAnimating = useState('themeAnimating', () => false)

  const toggleTheme = (event?: MouseEvent) => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
    
    // Start ripple animation from click position
    if (event && document.startViewTransition) {
      // Modern browsers with View Transitions API
      document.startViewTransition(() => {
        currentTheme.value = newTheme
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
      })
    } else if (event) {
      // Fallback: Custom ripple animation
      isAnimating.value = true
      const { clientX, clientY } = event
      
      // Create ripple effect
      const ripple = document.createElement('div')
      ripple.className = 'theme-ripple'
      ripple.style.cssText = `
        position: fixed;
        left: ${clientX}px;
        top: ${clientY}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: ${newTheme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      `
      document.body.appendChild(ripple)
      
      // Trigger animation
      requestAnimationFrame(() => {
        const maxDimension = Math.max(window.innerWidth, window.innerHeight) * 2.5
        ripple.style.width = `${maxDimension}px`
        ripple.style.height = `${maxDimension}px`
      })
      
      // Change theme after a slight delay for smooth transition
      setTimeout(() => {
        currentTheme.value = newTheme
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        
        // Remove ripple after animation
        setTimeout(() => {
          ripple.remove()
          isAnimating.value = false
        }, 100)
      }, 400)
    } else {
      // No event (e.g., system preference change)
      currentTheme.value = newTheme
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  }

  const initTheme = () => {
    if (process.client) {
      // Check localStorage first
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      
      if (savedTheme) {
        currentTheme.value = savedTheme
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        currentTheme.value = prefersDark ? 'dark' : 'light'
      }
      
      document.documentElement.classList.toggle('dark', currentTheme.value === 'dark')
      
      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          currentTheme.value = e.matches ? 'dark' : 'light'
          document.documentElement.classList.toggle('dark', e.matches)
        }
      })
    }
  }

  return {
    currentTheme,
    isAnimating,
    toggleTheme,
    initTheme
  }
}
