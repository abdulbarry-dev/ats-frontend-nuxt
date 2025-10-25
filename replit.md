# FindPoint - Modern Applicant Tracking System

## Overview
This is a Nuxt 4 application for an Applicant Tracking System (ATS) called "FindPoint". It connects talented professionals with amazing opportunities, serving both job seekers and recruiters.

**Project Name:** ats-frontend-nuxt  
**Framework:** Nuxt 4.1.3 with Vue 3.5.22  
**Build Tool:** Vite 7.1.10  
**Server:** Nitro 2.12.7  
**Package Manager:** npm (supports pnpm)  
**Last Updated:** October 25, 2025

## Project Architecture

### Tech Stack
- **Frontend Framework:** Nuxt 4 with Vue 3
- **Styling:** Tailwind CSS with dark mode support
- **State Management:** Pinia
- **Forms:** FormKit
- **Icons:** @nuxt/icon with multiple icon collections (mdi, lucide, tabler, ri, fa6-solid)
- **SEO:** @nuxtjs/seo
- **Content:** @nuxt/content
- **Image Optimization:** @nuxt/image
- **Database (dependency):** better-sqlite3

### Key Features
- Server-Side Rendering (SSR) enabled for optimal performance
- Role-based authentication system (Candidate, Recruiter, Admin)
- Responsive design with device detection
- Dark mode / light mode theming
- Image optimization with automatic format conversion (WebP, AVIF)
- SEO-optimized with structured data
- Pagination support

### Directory Structure
```
├── app/
│   ├── assets/css/         # Global styles and Tailwind configuration
│   ├── components/         # Vue components organized by feature
│   │   ├── base/          # Base components (LazySection)
│   │   ├── common/        # Common components (EmptyState, PageHeader, StatCard)
│   │   ├── cta/           # Call-to-action components
│   │   ├── dashboard/     # Dashboard components
│   │   ├── features/      # Feature showcase components
│   │   ├── forms/         # Form components
│   │   ├── jobs/          # Job-related components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── ui/            # UI components
│   ├── composables/       # Vue composables for reusable logic
│   ├── layouts/           # Nuxt layouts
│   ├── middleware/        # Route middleware (auth, role-based access)
│   ├── pages/             # File-based routing pages
│   │   ├── auth/         # Authentication pages
│   │   ├── candidates/   # Candidate portal
│   │   ├── recruiters/   # Recruiter portal
│   │   └── ...           # Other pages
│   └── plugins/          # Nuxt plugins (currently placeholders)
├── content/              # Nuxt Content files
├── public/               # Static assets
├── server/               # Server-side API routes (structure defined, not implemented)
├── shared/               # Shared utilities, types, and schemas
└── types/                # TypeScript type definitions

```

## Development Setup

### Prerequisites
- Node.js v20.19.3 or higher
- npm 10.8.2 or higher

### Installation
Dependencies are automatically installed when running the development server.

### Running the Development Server
The project is configured to run on port 5000 (required for Replit):
```bash
npm run dev
```

Server will start at: `http://0.0.0.0:5000/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Replit Configuration

### Development Server Settings
The application is configured for the Replit environment:
- **Host:** 0.0.0.0 (allows external connections)
- **Port:** 5000 (Replit's required port)
- **HMR (Hot Module Replacement):** Configured with overlay disabled

### Deployment
- **Type:** Autoscale (stateless)
- **Build Command:** `npm run build`
- **Run Command:** `npm run preview`

## User Roles & Features

### Candidate Portal
- Profile management
- Job applications
- Saved jobs
- Interview schedules
- Notifications
- Settings (account, profile, notifications, preferences, theme)

### Recruiter Portal
- Job posting and management
- Candidate search and filtering
- Company profile management
- Analytics dashboard
- Settings (account, profile, notifications, billing, recruiter info)

### Authentication
Authentication middleware is defined but not fully implemented yet. The system supports:
- Login
- Registration
- Password reset
- Role-based access control (Candidate, Recruiter, Admin)

## Current State

### Completed
- Project structure and file organization
- Nuxt 4 configuration with all necessary modules
- Tailwind CSS setup with dark mode
- Layout components (Navbar, Footer)
- Page structure for all user roles
- Middleware setup for authentication and role-based access
- SEO configuration
- Icon system setup
- Replit environment configuration

### Placeholders / Not Yet Implemented
- API endpoints (server/api/* directories have README files only)
- Authentication logic (middleware exists but is commented out)
- Plugins (api.ts, device.ts, seo.ts, toast.client.ts are empty)
- Backend database integration
- Form validation schemas
- Shared utilities and types

## Environment Notes

### Known Warnings
The following warnings appear during development but don't affect functionality:
- Empty plugins: api.ts, device.ts, seo.ts, toast.client.ts (these are placeholders)
- Missing routes: /sitemap, /accessibility, font files (these will be added as needed)

### Performance Optimizations
- Vite code splitting enabled
- Asset compression enabled (Nitro)
- SWR caching configured for all routes (1 week max age)
- Image optimization with automatic format conversion
- Font preloading for better performance
- Tailwind CSS purging in production

## Recent Changes
- **October 25, 2025:** Initial setup for Replit environment
  - Configured dev server to use port 5000 with host 0.0.0.0
  - Added Vite HMR configuration for Replit proxy
  - Set up deployment configuration (autoscale)
  - All dependencies installed and working
  - Development server running successfully
