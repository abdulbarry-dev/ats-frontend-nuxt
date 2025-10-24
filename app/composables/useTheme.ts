/**
 * Theme Composable for Dark/Light Mode
 * Manages theme state, localStorage persistence, and system preference detection
 */

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const useTheme = () => {
  // State management using Nuxt's useState for SSR compatibility
  const theme = useState<ThemeMode>("theme-mode", () => "light");
  const resolvedTheme = useState<ResolvedTheme>(
    "resolved-theme",
    () => "light",
  );
  const isAnimating = useState<boolean>("theme-animating", () => false);

  /**
   * Get system color scheme preference
   */
  const getSystemTheme = (): ResolvedTheme => {
    if (process.client) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  /**
   * Resolve the actual theme based on current mode
   */
  const resolveTheme = (mode: ThemeMode): ResolvedTheme => {
    if (mode === "system") {
      return getSystemTheme();
    }
    return mode;
  };

  /**
   * Apply theme to DOM
   */
  const applyTheme = (newResolvedTheme: ResolvedTheme) => {
    if (process.client) {
      const html = document.documentElement;

      if (newResolvedTheme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }

      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          "content",
          newResolvedTheme === "dark" ? "#0f172a" : "#ffffff",
        );
      }
    }
  };

  /**
   * Save theme preference to localStorage
   */
  const saveTheme = (mode: ThemeMode) => {
    if (process.client) {
      try {
        localStorage.setItem("theme-preference", mode);
      } catch (error) {
        console.warn("Failed to save theme preference:", error);
      }
    }
  };

  /**
   * Load theme preference from localStorage
   */
  const loadTheme = (): ThemeMode => {
    if (process.client) {
      try {
        const saved = localStorage.getItem(
          "theme-preference",
        ) as ThemeMode | null;
        if (saved && ["light", "dark", "system"].includes(saved)) {
          return saved;
        }
      } catch (error) {
        console.warn("Failed to load theme preference:", error);
      }
    }
    return "light"; // Default to light mode
  };

  /**
   * Set theme mode with optional animation
   */
  const setTheme = (mode: ThemeMode, event?: MouseEvent) => {
    // Prevent rapid toggles
    if (isAnimating.value) return;

    const newResolvedTheme = resolveTheme(mode);

    // Check if View Transitions API is supported
    if (process.client && event && "startViewTransition" in document) {
      isAnimating.value = true;
      // @ts-ignore - startViewTransition is not in TypeScript lib yet
      const transition = document.startViewTransition(() => {
        theme.value = mode;
        resolvedTheme.value = newResolvedTheme;
        applyTheme(newResolvedTheme);
        saveTheme(mode);
      });

      transition.finished.finally(() => {
        isAnimating.value = false;
      });
    } else {
      // Instant transition without heavy animations
      theme.value = mode;
      resolvedTheme.value = newResolvedTheme;
      applyTheme(newResolvedTheme);
      saveTheme(mode);
    }
  };

  /**
   * Toggle between light and dark (skips system)
   */
  const toggleTheme = (event?: MouseEvent) => {
    const newMode = resolvedTheme.value === "light" ? "dark" : "light";
    setTheme(newMode, event);
  };

  /**
   * Initialize theme on app load
   */
  const initTheme = () => {
    if (process.client) {
      // Load saved preference
      const savedMode = loadTheme();
      theme.value = savedMode;

      // Resolve and apply theme
      const resolved = resolveTheme(savedMode);
      resolvedTheme.value = resolved;
      applyTheme(resolved);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (theme.value === "system") {
          const newResolved = e.matches ? "dark" : "light";
          resolvedTheme.value = newResolved;
          applyTheme(newResolved);
        }
      };

      // Use the modern API if available, fallback to deprecated one
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleSystemThemeChange);
      } else {
        // @ts-ignore - deprecated but needed for older browsers
        mediaQuery.addListener(handleSystemThemeChange);
      }
    }
  };

  return {
    // State
    theme: readonly(theme),
    resolvedTheme: readonly(resolvedTheme),
    isAnimating: readonly(isAnimating),

    // Methods
    setTheme,
    toggleTheme,
    initTheme,
    getSystemTheme,
  };
};
