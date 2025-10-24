# Dark/Light Theme Implementation - Nuxt 4

Complete dark/light theme switching system following Nuxt 4.1.3 conventions.

## 📁 File Structure

```
app/
├── composables/
│   └── useTheme.ts              # Theme state management composable
├── components/
│   └── ui/
│       ├── ThemeToggle.vue      # Simple toggle button component
│       └── ThemeSelector.vue    # Full theme selector (Light/Dark/System)
├── plugins/
│   └── theme.client.ts          # Auto-initialize theme on app load
└── assets/
    └── css/
        └── tailwind.css         # Tailwind + dark mode styles

tailwind.config.ts               # Tailwind configuration with dark mode
```

## 🚀 Features

- ✅ **Class-based dark mode** using Tailwind CSS
- ✅ **System preference detection** with auto-sync
- ✅ **localStorage persistence** - remembers user choice
- ✅ **Smooth transitions** with optional ripple animation
- ✅ **View Transitions API** support for modern browsers
- ✅ **SSR compatible** - prevents flash of unstyled content (FOUC)
- ✅ **TypeScript** fully typed
- ✅ **Accessible** with proper ARIA labels
- ✅ **Three modes**: Light, Dark, and System

## 📖 Usage

### Using the Theme Composable

```vue
<script setup lang="ts">
const {
  theme, // Current mode: 'light' | 'dark' | 'system'
  resolvedTheme, // Actual theme: 'light' | 'dark'
  setTheme, // Set theme mode
  toggleTheme, // Toggle between light/dark
  getSystemTheme, // Get system preference
} = useTheme();
</script>

<template>
  <div>
    <p>Current mode: {{ theme }}</p>
    <p>Active theme: {{ resolvedTheme }}</p>

    <!-- Toggle with animation -->
    <button @click="toggleTheme($event)">Toggle Theme</button>

    <!-- Set specific mode -->
    <button @click="setTheme('dark', $event)">Dark Mode</button>
  </div>
</template>
```

### Using ThemeToggle Component

Simple icon button:

```vue
<template>
  <!-- Simple toggle -->
  <ThemeToggle />

  <!-- With label -->
  <ThemeToggle show-label />

  <!-- Minimal style -->
  <ThemeToggle minimal />

  <!-- Custom classes -->
  <ThemeToggle custom-class="p-3 bg-gray-100 dark:bg-slate-800" />
</template>
```

### Using ThemeSelector Component

Full selector with all three options:

```vue
<template>
  <!-- Horizontal layout (default) -->
  <ThemeSelector />

  <!-- Vertical layout -->
  <ThemeSelector layout="vertical" />

  <!-- Without label -->
  <ThemeSelector :show-label="false" />

  <!-- Custom label -->
  <ThemeSelector label="Choose Appearance" />
</template>
```

### Using Dark Mode Classes in Components

```vue
<template>
  <div class="bg-white dark:bg-slate-900">
    <!-- Background: white in light mode, slate-900 in dark mode -->

    <h1 class="text-gray-900 dark:text-white">
      <!-- Text: gray-900 in light, white in dark -->
      Title
    </h1>

    <p class="text-gray-600 dark:text-gray-300">
      <!-- Paragraph text -->
      Description
    </p>

    <button
      class="bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600"
    >
      <!-- Button with dark mode hover states -->
      Click Me
    </button>

    <!-- Using custom utility classes from tailwind.css -->
    <div class="card">
      <!-- Auto-styled card with dark mode support -->
    </div>

    <div class="backdrop-glass">
      <!-- Glass morphism effect with dark mode -->
    </div>
  </div>
</template>
```

### Custom CSS Variables

Available CSS variables from `tailwind.css`:

```css
/* Light mode (default) */
--color-bg-primary: #ffffff --color-bg-secondary: #f9fafb
  --color-bg-tertiary: #f3f4f6 --color-text-primary: #111827
  --color-text-secondary: #6b7280 --color-text-tertiary: #9ca3af
  --color-border: #e5e7eb --color-border-light: #f3f4f6
  /* Dark mode (when .dark class is on html) */ --color-bg-primary: #0f172a
  --color-bg-secondary: #1e293b --color-bg-tertiary: #334155
  --color-text-primary: #f1f5f9 --color-text-secondary: #cbd5e1
  --color-text-tertiary: #94a3b8 --color-border: #334155
  --color-border-light: #1e293b;
```

Use them in your styles:

```vue
<style scoped>
.custom-card {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}
</style>
```

## 🎨 Custom Utility Classes

Defined in `app/assets/css/tailwind.css`:

### Components Layer

```html
<!-- Card with auto dark mode -->
<div class="card">Content</div>

<!-- Primary button -->
<button class="btn-primary">Click Me</button>

<!-- Secondary button -->
<button class="btn-secondary">Cancel</button>

<!-- Input field -->
<input class="input-field" placeholder="Enter text" />

<!-- Custom scrollbar -->
<div class="custom-scrollbar overflow-y-auto">
  <!-- Scrollable content -->
</div>
```

### Utilities Layer

```html
<!-- Text gradient -->
<h1 class="text-gradient">Gradient Text</h1>

<!-- Glass effect -->
<div class="backdrop-glass">Glass morphism</div>

<!-- Smooth transitions -->
<div class="transition-smooth">Animates smoothly</div>

<!-- Hide scrollbar -->
<div class="scrollbar-hide overflow-auto">Hidden scrollbar</div>
```

## 🔧 Configuration

### Tailwind Config

The `tailwind.config.ts` includes:

- Class-based dark mode
- Custom emerald color palette
- Theme transition animations
- Fade, slide, and ripple keyframes

### Nuxt Config

In `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  // ... other config

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
    exposeConfig: { level: 2 },
    viewer: true,
  },

  css: ["~/assets/css/tailwind.css"],
});
```

## 🎭 How It Works

1. **Plugin initialization** (`theme.client.ts`):
   - Runs on app load (client-side only)
   - Reads saved preference from localStorage
   - Falls back to system preference if no saved choice
   - Applies the appropriate theme immediately

2. **Composable** (`useTheme.ts`):
   - Manages theme state with Nuxt's `useState`
   - Provides reactive theme values
   - Handles theme switching with animations
   - Syncs with localStorage and system preferences

3. **Components**:
   - `ThemeToggle`: Simple button for toggling
   - `ThemeSelector`: Full selector with 3 options

4. **Tailwind CSS**:
   - Uses `dark:` prefix for dark mode styles
   - Applies `.dark` class to `<html>` element
   - Smooth transitions built-in

## 🌟 Best Practices

1. **Always use Tailwind's dark: prefix** for consistency
2. **Test both themes** during development
3. **Use semantic colors** (bg-primary, text-primary, etc.)
4. **Provide system option** for better UX
5. **Add smooth transitions** for theme switches
6. **Consider color contrast** in both modes
7. **Test with actual dark mode preference** enabled

## 🐛 Troubleshooting

### Theme not applying on page load

- Ensure plugin is being loaded (check `.nuxt/plugins`)
- Verify Tailwind CSS is properly configured
- Check browser console for errors

### Flash of unstyled content (FOUC)

- Plugin should run before page renders
- Verify theme is in `useState` (server/client sync)

### Transitions not working

- Check browser support for View Transitions API
- Fallback ripple animation should work in all browsers
- Verify Tailwind animations are configured

## 📱 Mobile Considerations

- Uses `prefers-color-scheme` media query
- Smooth animations optimize for touch
- Accessible touch targets (44px minimum)
- Works with system dark mode on iOS/Android

## ♿ Accessibility

- Proper ARIA labels on all buttons
- Keyboard navigation support
- Focus states with ring utilities
- Semantic HTML structure
- High contrast in both modes

---

**Built with ❤️ for Nuxt 4.1.3**
