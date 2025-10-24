# Vue Awesome Paginate Integration

This document describes the integration of `vue-awesome-paginate` into the ATS Frontend Nuxt application.

## Overview

`vue-awesome-paginate` has been integrated to provide professional pagination functionality across all listing pages in the application.

## Installation

The package has been installed via pnpm:

```bash
pnpm add vue-awesome-paginate
```

## Files Modified/Created

### 1. Plugin Configuration

**File:** `app/plugins/vue-awesome-paginate.client.ts`

This plugin registers vue-awesome-paginate globally and imports necessary styles:

- Default vue-awesome-paginate styles
- Custom pagination styles that match the design system

### 2. Custom Styling

**File:** `app/assets/css/pagination.css`

Custom CSS that overrides default pagination styles to match the application's design system:

- Emerald green accent colors (#10b981)
- Rounded corners (0.5rem)
- Smooth hover transitions
- Responsive design for mobile devices
- Disabled state styling

### 3. Jobs Page

**File:** `app/pages/jobs/index.vue`

**Pagination Features:**

- 9 items per page (configurable via `itemsPerPage`)
- Automatic page reset when filters change
- Smooth scroll to top on page change
- Shows pagination only when there's more than 1 page
- Responsive design with custom arrow icons

**Implementation Details:**

```typescript
// Pagination state
const currentPage = ref(1);
const itemsPerPage = ref(9);

// Computed properties
const totalPages = computed(() =>
  Math.ceil(filteredJobs.value.length / itemsPerPage.value),
);
const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredJobs.value.slice(start, end);
});

// Page change handler
const onPageChange = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Auto-reset to page 1 on filter changes
watch(
  [searchQuery, locationQuery, filters, sortBy],
  () => {
    currentPage.value = 1;
  },
  { deep: true },
);
```

### 4. Companies Page

**File:** `app/pages/companies/index.vue`

Same pagination implementation as the Jobs page:

- 9 companies per page
- Grid and List view support
- Filter-aware pagination
- Auto-reset on search/filter changes

## Usage

### Basic Implementation

```vue
<template>
  <div>
    <!-- Display paginated items -->
    <div v-for="item in paginatedItems" :key="item.id">
      {{ item.name }}
    </div>

    <!-- Pagination component -->
    <vue-awesome-paginate
      v-if="totalPages > 1"
      :total-items="filteredItems.length"
      :items-per-page="itemsPerPage"
      :max-pages-shown="5"
      v-model="currentPage"
      :on-click="onPageChange"
      :show-breakpoint-buttons="false"
      :show-ending-buttons="true"
    >
      <template #prev-button>
        <Icon name="mdi:chevron-left" class="w-5 h-5" />
      </template>
      <template #next-button>
        <Icon name="mdi:chevron-right" class="w-5 h-5" />
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script setup lang="ts">
// State
const currentPage = ref(1);
const itemsPerPage = ref(9);
const items = ref([
  /* your data */
]);

// Computed
const totalPages = computed(() =>
  Math.ceil(items.value.length / itemsPerPage.value),
);

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return items.value.slice(start, end);
});

// Methods
const onPageChange = (page: number) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Watch for filters and reset pagination
watch(
  () => filters.value,
  () => {
    currentPage.value = 1;
  },
  { deep: true },
);
</script>
```

## Configuration Options

### Component Props

| Prop                      | Type     | Default  | Description                    |
| ------------------------- | -------- | -------- | ------------------------------ |
| `total-items`             | Number   | Required | Total number of items          |
| `items-per-page`          | Number   | 10       | Items to display per page      |
| `max-pages-shown`         | Number   | 5        | Maximum page buttons to show   |
| `v-model`                 | Number   | 1        | Current page (two-way binding) |
| `on-click`                | Function | -        | Callback when page changes     |
| `show-breakpoint-buttons` | Boolean  | true     | Show "..." buttons             |
| `show-ending-buttons`     | Boolean  | true     | Show first/last buttons        |

### Customization

You can customize the pagination appearance by modifying:

1. **Global styles:** `app/assets/css/pagination.css`
2. **Component-specific styles:** Using `:deep()` in scoped styles
3. **Colors:** Update the emerald green (#10b981) to match your brand

Example custom styling:

```css
:deep(.active-page) {
  background-color: #your-color;
  border-color: #your-color;
}

:deep(.paginate-buttons:hover:not(.active-page)) {
  border-color: #your-color;
  color: #your-color;
}
```

## Features

✅ **Responsive Design** - Adapts to mobile, tablet, and desktop  
✅ **Smooth Transitions** - All state changes are animated  
✅ **Keyboard Accessible** - Fully keyboard navigable  
✅ **Filter Integration** - Auto-resets when filters change  
✅ **Custom Icons** - Uses your existing icon library  
✅ **Scroll Management** - Auto-scrolls to top on page change  
✅ **Conditional Rendering** - Only shows when needed (multiple pages)  
✅ **Type-Safe** - Full TypeScript support

## Best Practices

1. **Always reset to page 1** when filters change
2. **Show pagination conditionally** (only when totalPages > 1)
3. **Use computed properties** for paginated data
4. **Implement smooth scrolling** to improve UX
5. **Keep items-per-page consistent** across similar pages

## Future Enhancements

Potential improvements:

- Add page size selector (10, 25, 50, 100 items)
- Persist current page in URL query params
- Add "Jump to page" input
- Implement server-side pagination for large datasets
- Add loading states during page transitions

## Troubleshooting

### Pagination not showing

- Verify `totalPages > 1`
- Check that `filteredItems.length` is correct
- Ensure the component is imported (should be automatic via plugin)

### Styles not applying

- Verify `pagination.css` is imported in the plugin
- Check for CSS specificity conflicts
- Use browser DevTools to inspect applied styles

### Page not resetting on filter change

- Add watch() on filter values
- Set `currentPage.value = 1` in the watcher
- Use `{ deep: true }` for nested objects

## Support

For issues with vue-awesome-paginate:

- Documentation: https://github.com/peshanghiwa/vue-awesome-paginate
- NPM: https://www.npmjs.com/package/vue-awesome-paginate

For custom styling or implementation questions, refer to this documentation or the implemented pages for examples.
