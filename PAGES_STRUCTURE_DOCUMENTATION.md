# 📄 Complete Pages Structure Documentation

## Overview
This document provides a comprehensive guide to all pages in the FindPoint ATS (Applicant Tracking System) Nuxt application. Each page's purpose, role, features, and user access are detailed below.

---

## 📁 Directory Structure

```
app/pages/
├── 404.vue                      # Error page
├── about.vue                    # About company page
├── contact.vue                  # Contact form page
├── cookies.vue                  # Cookie policy page
├── faq.vue                      # Frequently asked questions
├── help.vue                     # Help center page
├── index.vue                    # Homepage/Landing page
├── notification.vue             # Notification center
├── privacy.vue                  # Privacy policy page
├── terms.vue                    # Terms of service page
├── auth/                        # Authentication pages
│   ├── forgot-password.vue      # Password recovery
│   ├── login.vue                # User login
│   ├── register.vue             # User registration
│   └── reset-password.vue       # Password reset form
├── candidates/                  # Candidate-specific pages
│   ├── applications.vue         # View job applications
│   ├── index.vue                # Candidate dashboard
│   ├── profile.vue              # Candidate profile
│   └── saved.vue                # Saved jobs list
├── companies/                   # Company pages
│   ├── [id].vue                 # Single company detail
│   └── index.vue                # Companies listing
├── jobs/                        # Job-related pages
│   ├── [id].vue                 # Single job detail
│   ├── index.vue                # Jobs listing
│   ├── manage.vue               # Manage posted jobs
│   └── post.vue                 # Post new job
├── profile/                     # User profile pages
│   └── index.vue                # Public profile view
├── recruiters/                  # Recruiter-specific pages
│   ├── analytics.vue            # Recruitment analytics
│   ├── candidates.vue           # Browse candidates
│   ├── company.vue              # Company profile management
│   └── index.vue                # Recruiter dashboard
└── settings/                    # Settings pages
    ├── account.vue              # Account settings
    ├── candidate.vue            # Candidate settings
    ├── index.vue                # Settings hub
    ├── notifications.vue        # Notification preferences
    ├── profile.vue              # Profile settings
    ├── recruiter.vue            # Recruiter settings
    ├── theme.vue                # Theme preferences
    └── billing/
        └── index.vue            # Billing & subscription
```

---

## 🏠 Public Pages (No Authentication Required)

### `index.vue` - Homepage/Landing Page
**Route:** `/`  
**Role:** Main entry point of the application  
**Access:** Public (all users)

**Purpose:**
- Welcome visitors and showcase the platform
- Display value proposition and key features
- Featured job listings preview
- Call-to-action for registration/login
- Statistics and testimonials

**Key Features:**
- Hero section with search
- Featured companies
- Popular job categories
- How it works section
- CTA buttons for candidates and recruiters

**User Journey:**
- First touchpoint for new visitors
- Directs to registration or job search
- Provides overview of platform capabilities

---

### `about.vue` - About Us Page
**Route:** `/about`  
**Role:** Company information and mission  
**Access:** Public (all users)

**Purpose:**
- Tell the company story
- Display mission, vision, and values
- Showcase team members
- Build trust with users

**Key Features:**
- Company history
- Team section
- Core values
- Statistics/achievements
- Contact information

**User Journey:**
- Learn about the company
- Build confidence in the platform
- Find team contact information

---

### `contact.vue` - Contact Page
**Route:** `/contact`  
**Role:** Communication hub  
**Access:** Public (all users)

**Purpose:**
- Provide multiple ways to reach support
- Contact form for inquiries
- Display office locations
- Show business hours

**Key Features:**
- Multi-field contact form (name, email, phone, subject, message)
- Quick contact methods (email, phone, live chat)
- Office hours display
- Social media links
- Location information (HQ & International)
- Support resources links
- Success/error feedback
- Privacy policy agreement

**User Journey:**
- Get help with questions
- Report issues
- Business inquiries
- Support requests

---

### `cookies.vue` - Cookie Policy Page
**Route:** `/cookies`  
**Role:** GDPR compliance and transparency  
**Access:** Public (all users)

**Purpose:**
- Explain cookie usage
- Provide cookie management controls
- GDPR compliance
- User privacy transparency

**Key Features:**
- Interactive cookie preferences panel
- 4 cookie categories (Essential, Functional, Analytics, Marketing)
- Accept/Reject/Customize options
- Detailed explanations of each cookie type
- Third-party cookies disclosure
- Browser settings links (Chrome, Firefox, Safari, Edge)
- Table of contents navigation
- User rights section
- Contact for questions

**User Journey:**
- Understand cookie usage
- Manage privacy preferences
- Learn about data collection
- Exercise GDPR rights

---

### `faq.vue` - Frequently Asked Questions
**Route:** `/faq`  
**Role:** Self-service support  
**Access:** Public (all users)

**Purpose:**
- Answer common questions
- Reduce support tickets
- Improve user understanding
- Quick problem resolution

**Key Features:**
- Search functionality across all FAQs
- 6 categories (All, General, Jobs, Applications, Account, Pricing)
- 15 comprehensive Q&A entries
- Accordion UI with smooth animations
- Popular questions badges
- Category filtering
- Helpful/Not helpful feedback buttons
- Contact support CTA
- Empty state handling
- Related links within answers

**User Journey:**
- Find quick answers
- Search by keyword
- Browse by category
- Escalate to support if needed

---

### `help.vue` - Help Center
**Route:** `/help`  
**Role:** Documentation and guides hub  
**Access:** Public (all users)

**Purpose:**
- Comprehensive help documentation
- User guides and tutorials
- Troubleshooting resources
- Feature explanations

**Key Features:**
- Searchable knowledge base
- Categorized articles
- Step-by-step guides
- Video tutorials
- Common issues solutions

**User Journey:**
- Learn how to use features
- Troubleshoot problems
- Access tutorials
- Find detailed documentation

---

### `privacy.vue` - Privacy Policy
**Route:** `/privacy`  
**Role:** Legal compliance and transparency  
**Access:** Public (all users)

**Purpose:**
- Explain data collection practices
- User rights information
- Legal compliance (GDPR, CCPA)
- Data security measures

**Key Features:**
- Detailed privacy policy
- Data collection explanations
- User rights section
- Data security information
- Third-party services disclosure
- Contact for privacy concerns

**User Journey:**
- Understand data usage
- Learn about privacy rights
- Review security measures
- Contact privacy team

---

### `terms.vue` - Terms of Service
**Route:** `/terms`  
**Role:** Legal agreement  
**Access:** Public (all users)

**Purpose:**
- Platform usage terms
- User responsibilities
- Service limitations
- Legal protections

**Key Features:**
- Terms and conditions
- User obligations
- Service disclaimers
- Termination policies
- Dispute resolution

**User Journey:**
- Review before registration
- Understand obligations
- Legal reference

---

### `404.vue` - Error Page
**Route:** `*` (catch-all)  
**Role:** Handle not found errors  
**Access:** Public (all users)

**Purpose:**
- Graceful error handling
- Guide users back to valid pages
- Maintain brand experience during errors

**Key Features:**
- Friendly error message
- Navigation links to main pages
- Search functionality
- Home/Back buttons
- Helpful suggestions

**User Journey:**
- Encounter broken/invalid link
- Find way back to valid content
- Search for intended page

---

## 🔐 Authentication Pages

### `auth/login.vue` - Login Page
**Route:** `/auth/login`  
**Role:** User authentication entry  
**Access:** Public (unauthenticated users only)

**Purpose:**
- User login functionality
- Session creation
- Role-based redirection

**Key Features:**
- Email/password form
- Remember me checkbox
- Password visibility toggle
- Social login options (Google, LinkedIn)
- Forgot password link
- Registration link
- Form validation
- Error handling
- Loading states

**User Journey:**
- Enter credentials
- Redirect to dashboard based on role
- Access "forgot password" if needed

**Security:**
- Password encryption
- CSRF protection
- Rate limiting
- Session management

---

### `auth/register.vue` - Registration Page
**Route:** `/auth/register`  
**Role:** New user onboarding  
**Access:** Public (unauthenticated users only)

**Purpose:**
- Create new user accounts
- Role selection (candidate/recruiter)
- Initial profile setup

**Key Features:**
- Multi-step registration form
- Role selection (candidate vs recruiter)
- Email verification
- Password strength indicator
- Terms acceptance checkbox
- Social registration options
- Form validation
- Welcome email trigger

**User Journey:**
- Choose role (candidate/recruiter)
- Fill registration form
- Verify email
- Complete profile
- Redirect to dashboard

**Validation:**
- Email format validation
- Password strength requirements
- Required fields check
- Duplicate email prevention

---

### `auth/forgot-password.vue` - Password Recovery
**Route:** `/auth/forgot-password`  
**Role:** Password reset initiation  
**Access:** Public (unauthenticated users only)

**Purpose:**
- Initiate password recovery process
- Send reset email
- Security verification

**Key Features:**
- Email input form
- Reset link email sending
- Success confirmation
- Rate limiting
- Back to login link

**User Journey:**
- Enter registered email
- Receive reset email
- Click link in email
- Redirect to reset page

**Security:**
- Token generation
- Time-limited links
- Rate limiting (prevent spam)

---

### `auth/reset-password.vue` - Password Reset Form
**Route:** `/auth/reset-password?token=xxx`  
**Role:** Complete password reset  
**Access:** Public (with valid token)

**Purpose:**
- Set new password
- Complete reset process
- Validate reset token

**Key Features:**
- Token validation
- New password form
- Password confirmation
- Strength indicator
- Success/error messages
- Auto-redirect after success

**User Journey:**
- Arrive via email link
- Enter new password
- Confirm password
- Redirect to login

**Security:**
- Token expiration (24 hours)
- One-time use tokens
- Password strength validation

---

## 👤 Candidate Pages (Authentication Required)

### `candidates/index.vue` - Candidate Dashboard
**Route:** `/candidates`  
**Role:** Central hub for job seekers  
**Access:** Authenticated candidates only

**Purpose:**
- Overview of candidate activities
- Quick access to key features
- Job recommendations
- Application status tracking

**Key Features:**
- Welcome message with name
- Recent applications summary
- Job recommendations
- Saved jobs count
- Profile completion status
- Quick action buttons
- Activity timeline
- Upcoming interviews
- Application statistics

**User Journey:**
- Daily starting point
- Check application status
- View recommendations
- Navigate to other sections

**Widgets:**
- Profile completion progress
- Application status cards
- Saved jobs preview
- Recommended jobs
- Recent activity feed

---

### `candidates/profile.vue` - Candidate Profile
**Route:** `/candidates/profile`  
**Role:** Professional profile management  
**Access:** Authenticated candidates only

**Purpose:**
- Build professional profile
- Showcase skills and experience
- Upload resume/CV
- Portfolio management

**Key Features:**
- Personal information form
- Work experience timeline
- Education history
- Skills & certifications
- Resume/CV upload
- Portfolio links
- Profile photo upload
- Social media links
- Bio/summary section
- Visibility settings

**User Journey:**
- Complete profile after registration
- Update information regularly
- Upload resume
- Add new experiences
- Showcase portfolio

**Profile Sections:**
- About Me
- Work Experience (with date ranges)
- Education
- Skills (tags/badges)
- Certifications
- Languages
- Resume/CV
- Portfolio

---

### `candidates/applications.vue` - Job Applications
**Route:** `/candidates/applications`  
**Role:** Application tracking  
**Access:** Authenticated candidates only

**Purpose:**
- View all submitted applications
- Track application status
- Manage application lifecycle
- Communication history

**Key Features:**
- Applications list with filters
- Status indicators (pending, reviewing, interview, rejected, offer)
- Sort options (date, status, company)
- Search functionality
- Application details view
- Withdraw application option
- Status timeline
- Messages from recruiters
- Interview scheduling
- Document submissions

**User Journey:**
- View all applications
- Check status updates
- Respond to interview requests
- Withdraw if needed
- Track progress

**Status Types:**
- Applied (initial)
- Under Review
- Interview Scheduled
- Interview Completed
- Offer Extended
- Rejected
- Withdrawn

---

### `candidates/saved.vue` - Saved Jobs
**Route:** `/candidates/saved`  
**Role:** Job bookmarking  
**Access:** Authenticated candidates only

**Purpose:**
- Save interesting jobs for later
- Compare opportunities
- Quick application access
- Job shortlist management

**Key Features:**
- Grid/list view toggle
- Saved jobs cards
- Remove from saved option
- Apply directly button
- Sort by date saved
- Search within saved jobs
- Empty state message
- Bulk actions
- Notes for each job

**User Journey:**
- Browse and save jobs
- Review saved jobs later
- Compare opportunities
- Apply when ready
- Remove if not interested

**Actions:**
- View job details
- Apply now
- Remove from saved
- Add notes
- Share job

---

## 💼 Recruiter Pages (Authentication Required)

### `recruiters/index.vue` - Recruiter Dashboard
**Route:** `/recruiters`  
**Role:** Central hub for hiring managers  
**Access:** Authenticated recruiters only

**Purpose:**
- Overview of recruitment activities
- Manage job postings
- Review applications
- Track hiring metrics

**Key Features:**
- Active job postings count
- New applications alert
- Candidate pipeline overview
- Quick post job button
- Recent activity feed
- Team members list
- Company profile status
- Analytics summary
- Pending tasks

**User Journey:**
- Daily starting point
- Check new applications
- Review metrics
- Post new jobs
- Manage team

**Widgets:**
- Active jobs counter
- Applications this week
- Interview schedule
- Hiring funnel stats
- Top performing jobs
- Urgent actions

---

### `recruiters/candidates.vue` - Browse Candidates
**Route:** `/recruiters/candidates`  
**Role:** Candidate discovery  
**Access:** Authenticated recruiters only

**Purpose:**
- Search candidate database
- Filter by criteria
- Review candidate profiles
- Initiate contact
- Build talent pool

**Key Features:**
- Advanced search filters
- Skills-based filtering
- Location filter
- Experience level filter
- Education filter
- Candidate cards with preview
- Contact candidates button
- Save to talent pool
- Sort options
- Pagination

**User Journey:**
- Search for candidates
- Apply filters
- Review profiles
- Shortlist candidates
- Reach out to prospects

**Search Filters:**
- Keywords (skills, job titles)
- Location/Remote
- Experience level
- Education level
- Salary expectations
- Availability
- Industry

---

### `recruiters/company.vue` - Company Profile
**Route:** `/recruiters/company`  
**Role:** Company branding  
**Access:** Authenticated recruiters only

**Purpose:**
- Manage company information
- Upload branding assets
- Showcase company culture
- Attract talent

**Key Features:**
- Company details form
- Logo upload
- Cover image
- About company section
- Company size/industry
- Benefits & perks
- Culture & values
- Office locations
- Photo gallery
- Videos
- Employee testimonials
- Social media links

**User Journey:**
- Complete company profile
- Update branding
- Add benefits
- Showcase culture
- Publish changes

**Profile Sections:**
- Basic Information
- Description
- Benefits
- Culture & Values
- Office Locations
- Gallery
- Team

---

### `recruiters/analytics.vue` - Recruitment Analytics
**Route:** `/recruiters/analytics`  
**Role:** Data insights and reporting  
**Access:** Authenticated recruiters only

**Purpose:**
- Track recruitment metrics
- Analyze hiring performance
- Generate reports
- Optimize recruitment strategy

**Key Features:**
- Dashboard with KPIs
- Applications over time graph
- Source of applications
- Time to hire metrics
- Conversion funnel
- Top performing jobs
- Candidate demographics
- Cost per hire
- Export reports
- Date range filters

**User Journey:**
- Review performance metrics
- Identify trends
- Generate reports
- Make data-driven decisions
- Share with team

**Key Metrics:**
- Total applications
- Applications by source
- Time to hire
- Offer acceptance rate
- Quality of hire
- Cost per hire
- Application completion rate

---

## 💼 Job Pages

### `jobs/index.vue` - Jobs Listing
**Route:** `/jobs`  
**Role:** Job discovery hub  
**Access:** Public (enhanced for authenticated users)

**Purpose:**
- Browse all available jobs
- Search and filter opportunities
- Quick apply access
- Job comparison

**Key Features:**
- Job cards grid/list view
- Search bar with keywords
- Advanced filters sidebar
  - Location
  - Job type (full-time, part-time, contract)
  - Remote/On-site
  - Salary range
  - Experience level
  - Company
  - Industry
- Sort options (recent, salary, relevance)
- Pagination (vue-awesome-paginate)
- Save job button (for logged-in users)
- Apply now button
- Results count
- Empty state

**User Journey:**
- Search for jobs by keywords
- Apply filters
- Browse results
- View job details
- Save interesting jobs
- Apply directly

**For Candidates:**
- Save jobs
- Quick apply
- Application history
- Recommended jobs badge

**For Public Users:**
- View jobs
- Must login to apply
- Registration prompt

---

### `jobs/[id].vue` - Job Detail Page
**Route:** `/jobs/:id`  
**Role:** Single job full information  
**Access:** Public (apply requires auth)

**Purpose:**
- Display complete job details
- Application submission
- Company information
- Share job

**Key Features:**
- Job title and company
- Salary range
- Location and remote status
- Job type (full-time, etc.)
- Experience required
- Detailed job description
- Requirements list
- Responsibilities
- Benefits
- Company information card
- Similar jobs section
- Apply button (prominent)
- Save job button
- Share job options
- Report job button
- Applicant count

**User Journey:**
- Arrive from job listing or search
- Read full description
- Review requirements
- Check company profile
- Apply or save for later
- Share with others

**Dynamic Content:**
- Job description (rich text)
- Requirements (bullet points)
- Company profile preview
- Application form/modal

---

### `jobs/post.vue` - Post New Job
**Route:** `/jobs/post`  
**Role:** Job creation  
**Access:** Authenticated recruiters only

**Purpose:**
- Create new job postings
- Define job details
- Set requirements
- Publish or save draft

**Key Features:**
- Multi-step form
  - Step 1: Basic Info (title, department, location)
  - Step 2: Job Details (description, responsibilities)
  - Step 3: Requirements (skills, experience, education)
  - Step 4: Compensation & Benefits
  - Step 5: Application Settings
- Rich text editor for description
- Skills tags input
- Salary range selector
- Remote/On-site toggle
- Employment type selection
- Draft save functionality
- Preview before publish
- Form validation
- Auto-save

**User Journey:**
- Navigate through steps
- Fill job information
- Add requirements
- Set compensation
- Preview posting
- Publish or save draft

**Form Fields:**
- Job title
- Department
- Location(s)
- Remote option
- Employment type
- Experience level
- Salary range
- Job description
- Responsibilities
- Requirements
- Preferred qualifications
- Benefits
- Application deadline

---

### `jobs/manage.vue` - Manage Jobs
**Route:** `/jobs/manage`  
**Role:** Job posting management  
**Access:** Authenticated recruiters only

**Purpose:**
- View all posted jobs
- Edit job postings
- Close/reopen positions
- View applicants
- Manage job status

**Key Features:**
- Jobs table/grid view
- Status filters (active, closed, draft)
- Search posted jobs
- Edit job button
- View applicants button
- Close/reopen job
- Duplicate job
- Delete draft
- Application count per job
- Performance metrics per job
- Quick actions menu

**User Journey:**
- View all posted jobs
- Check application counts
- Edit job details
- Close filled positions
- Reopen positions
- Review performance

**Job Status:**
- Draft
- Active
- Closed
- Paused
- Expired

**Actions Per Job:**
- Edit
- View applicants
- Close position
- Reopen
- Duplicate
- View analytics
- Delete (draft only)

---

## 🏢 Company Pages

### `companies/index.vue` - Companies Listing
**Route:** `/companies`  
**Role:** Company directory  
**Access:** Public

**Purpose:**
- Browse all companies
- Discover employers
- View company profiles
- See open positions

**Key Features:**
- Company cards with logo
- Company name and industry
- Location
- Company size
- Open positions count
- Follow company button (for logged-in users)
- Search companies
- Filter by industry
- Filter by location
- Filter by size
- Sort options
- Pagination (vue-awesome-paginate)
- Grid/list view toggle

**User Journey:**
- Browse companies
- Search by name or industry
- View company details
- See open positions
- Follow interesting companies

**Company Card Info:**
- Logo
- Company name
- Industry
- Location
- Size (employees)
- Open positions count
- Rating (if available)
- View profile button

---

### `companies/[id].vue` - Company Profile Page
**Route:** `/companies/:id`  
**Role:** Single company detailed view  
**Access:** Public

**Purpose:**
- Show company information
- Display company culture
- List open positions
- Attract candidates

**Key Features:**
- Cover image
- Company logo
- Company name and tagline
- Follow button
- About section
- Company stats (size, founded, industry)
- Office locations
- Benefits & perks list
- Culture & values
- Photo gallery
- Video about company
- Open positions list
- Reviews/ratings (if available)
- Social media links
- Website link
- Contact information

**User Journey:**
- Learn about company
- View culture and values
- Check benefits
- See open positions
- Follow company
- Apply to jobs

**Sections:**
- Overview
- About Us
- Benefits
- Culture
- Locations
- Open Jobs
- Reviews
- Gallery

---

## 👤 Profile Pages

### `profile/index.vue` - Public Profile View
**Route:** `/profile/:username` or `/profile/:id`  
**Role:** Public candidate profile  
**Access:** Public (visibility settings dependent)

**Purpose:**
- Display public candidate profile
- Portfolio showcase
- Professional presence
- Recruiter discovery

**Key Features:**
- Profile photo
- Name and title
- Location
- Bio/Summary
- Skills badges
- Work experience
- Education
- Portfolio items
- Resume download button
- Contact button (for recruiters)
- Social links
- Privacy controls

**User Journey:**
- Share profile link
- Discovered by recruiters
- Portfolio showcase
- Professional networking

**Visibility Settings:**
- Public (anyone can view)
- Logged-in users only
- Recruiters only
- Private

---

## ⚙️ Settings Pages

### `settings/index.vue` - Settings Hub
**Route:** `/settings`  
**Role:** Settings navigation  
**Access:** Authenticated users

**Purpose:**
- Central settings navigation
- Quick access to all settings
- Overview of account status

**Key Features:**
- Settings categories menu
- Account overview
- Quick links to settings pages
- Profile completion status
- Recent activity
- Subscription status (if applicable)

**User Journey:**
- Navigate to specific settings
- Overview of account
- Quick access to common settings

**Settings Categories:**
- Profile
- Account
- Notifications
- Privacy
- Theme
- Billing (if applicable)
- Role-specific settings

---

### `settings/profile.vue` - Profile Settings
**Route:** `/settings/profile`  
**Role:** Personal information management  
**Access:** Authenticated users

**Purpose:**
- Update personal information
- Manage profile photo
- Edit bio
- Update contact info

**Key Features:**
- Profile photo upload/change
- Name fields
- Email (with verification)
- Phone number
- Location
- Bio/About me
- Website/Portfolio URL
- Social media links
- Save changes button
- Success/error feedback

**User Journey:**
- Update personal info
- Change profile photo
- Update contact details
- Save changes

---

### `settings/account.vue` - Account Settings
**Route:** `/settings/account`  
**Role:** Account security and preferences  
**Access:** Authenticated users

**Purpose:**
- Change password
- Email management
- Account security
- Delete account

**Key Features:**
- Change password form
- Email change (with verification)
- Two-factor authentication toggle
- Active sessions list
- Login history
- Connected apps
- Delete account option
- Export data option

**User Journey:**
- Update password
- Enable 2FA
- Review sessions
- Manage security

**Security Features:**
- Current password verification
- Password strength indicator
- 2FA setup
- Session management
- Account deletion (with confirmation)

---

### `settings/notifications.vue` - Notification Settings
**Route:** `/settings/notifications`  
**Role:** Notification preferences  
**Access:** Authenticated users

**Purpose:**
- Manage notification preferences
- Email notification settings
- Push notification settings
- SMS settings (if available)

**Key Features:**
- Email notifications toggles
  - New jobs matching criteria
  - Application updates
  - Messages from recruiters
  - Newsletter
- Push notifications toggles
- SMS notifications (optional)
- Frequency settings
- Quiet hours
- Summary emails (daily/weekly)
- Save preferences button

**User Journey:**
- Customize notifications
- Reduce notification noise
- Set preferences
- Save changes

**Notification Types:**
- Job alerts
- Application status
- Messages
- Interview reminders
- Company updates
- Newsletter
- Marketing (opt-in)

---

### `settings/candidate.vue` - Candidate Settings
**Route:** `/settings/candidate`  
**Role:** Candidate-specific preferences  
**Access:** Authenticated candidates only

**Purpose:**
- Job search preferences
- Resume management
- Job alerts criteria
- Application settings

**Key Features:**
- Job search preferences
  - Desired job titles
  - Preferred locations
  - Remote preference
  - Salary expectations
  - Job type preferences
- Resume/CV upload
- Resume visibility settings
- Job alert criteria
- Application auto-fill settings
- Career level
- Industry preferences

**User Journey:**
- Set job preferences
- Upload resume
- Configure alerts
- Manage visibility

---

### `settings/recruiter.vue` - Recruiter Settings
**Route:** `/settings/recruiter`  
**Role:** Recruiter-specific preferences  
**Access:** Authenticated recruiters only

**Purpose:**
- Recruiting preferences
- Team management
- Company settings
- Integration settings

**Key Features:**
- Hiring workflow preferences
- Email templates
- Team member management
- Interview scheduling settings
- Candidate sourcing preferences
- Integration settings (ATS, Calendar)
- Auto-response settings
- Hiring pipeline customization

**User Journey:**
- Configure hiring workflow
- Manage team
- Set preferences
- Integrate tools

---

### `settings/theme.vue` - Theme Settings
**Route:** `/settings/theme`  
**Role:** Appearance customization  
**Access:** Authenticated users

**Purpose:**
- Customize appearance
- Dark/light mode
- Color preferences
- Accessibility settings

**Key Features:**
- Theme toggle (light/dark/auto)
- Accent color selection
- Font size adjustment
- Compact/comfortable view
- Accessibility options
  - High contrast
  - Reduce motion
  - Screen reader optimization
- Language preference
- Preview changes

**User Journey:**
- Choose theme
- Adjust for accessibility
- Customize appearance
- Save preferences

---

### `settings/billing/index.vue` - Billing & Subscription
**Route:** `/settings/billing`  
**Role:** Payment and subscription management  
**Access:** Authenticated users (recruiters/premium)

**Purpose:**
- Manage subscriptions
- Payment methods
- Invoices
- Upgrade/downgrade plan

**Key Features:**
- Current plan display
- Usage statistics
- Upgrade/downgrade options
- Payment method management
- Billing history
- Invoice downloads
- Cancel subscription
- Reactivate subscription
- Payment information form
- Next billing date
- Auto-renewal toggle

**User Journey:**
- View current plan
- Update payment method
- Upgrade/downgrade
- View invoices
- Manage subscription

**Plans (Example):**
- Free (candidates)
- Basic (recruiters)
- Professional (recruiters)
- Enterprise (companies)

---

## 📱 Special Pages

### `notification.vue` - Notification Center
**Route:** `/notification`  
**Role:** Centralized notifications  
**Access:** Authenticated users

**Purpose:**
- View all notifications
- Manage notification state
- Take actions on notifications
- Configure preferences

**Key Features:**
- Tabs for filtering (All, Jobs, Applications, Messages)
- Search notifications
- Mark as read/unread
- Delete notifications
- Notification types with icons:
  - Job matches
  - Application updates
  - Messages
  - Interview reminders
  - System notifications
  - Company updates
- Relative timestamps
- Action buttons per notification
- Notification preferences quick link
- Load more / pagination
- Empty state
- Select all / bulk actions

**User Journey:**
- Check new notifications
- Read and act on items
- Mark as read
- Delete old notifications
- Adjust preferences

**Notification Categories:**
- Jobs (new matches, saved job updates)
- Applications (status changes, recruiter actions)
- Messages (new messages from recruiters)
- System (account updates, security alerts)
- Company (followed companies updates)

---

## 🔒 Access Control Summary

### Public Access (No Authentication)
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page
- `/cookies` - Cookie policy
- `/faq` - FAQ
- `/help` - Help center
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/jobs` - Jobs listing
- `/jobs/:id` - Job details
- `/companies` - Companies listing
- `/companies/:id` - Company profile
- `/404` - Error page
- `/auth/*` - Auth pages (login, register, forgot-password, reset-password)

### Candidate Access (Requires Authentication)
- `/candidates/*` - All candidate pages
- `/profile/:id` - Public profiles
- `/notification` - Notifications
- `/settings/*` - Settings pages
- Can save jobs, apply, view applications

### Recruiter Access (Requires Authentication)
- `/recruiters/*` - All recruiter pages
- `/jobs/post` - Post new job
- `/jobs/manage` - Manage jobs
- `/notification` - Notifications
- `/settings/*` - Settings pages
- Can browse candidates, manage postings

### Admin Access (Requires Authentication + Admin Role)
- All of the above
- Additional admin-specific pages (if implemented)
- Platform management
- User management
- System settings

---

## 🎨 Common UI Patterns

### All Pages Follow These Patterns:

1. **Layout Structure:**
   - Uses default layout (Navbar + Footer)
   - Dashboard layout for authenticated pages
   - Admin layout for admin pages

2. **Responsive Design:**
   - Mobile-first approach
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Grid/stack layouts

3. **Color Scheme:**
   - Primary: Emerald 600 (#059669)
   - Gradients for hero sections
   - Consistent gray scale for text
   - Status colors (success, warning, error, info)

4. **Components:**
   - Cards with rounded-2xl and shadow-sm
   - Icons from MDI collection
   - Forms with validation
   - Loading states
   - Empty states
   - Success/error messages

5. **Animations:**
   - Fade-in-up on page load
   - Smooth transitions (300ms)
   - Hover effects on interactive elements
   - Loading spinners

6. **Navigation:**
   - Breadcrumbs on detail pages
   - Back buttons where appropriate
   - Clear CTAs
   - Tab navigation for filtering

7. **SEO:**
   - useSeoMeta for meta tags
   - Descriptive titles
   - Open Graph tags
   - Semantic HTML

---

## 📊 User Flow Examples

### Candidate Journey:
1. **Discovery:** Land on homepage → Browse jobs
2. **Registration:** `/auth/register` → Choose candidate role
3. **Profile:** `/candidates/profile` → Complete profile
4. **Job Search:** `/jobs` → Search and filter jobs
5. **Apply:** `/jobs/:id` → Apply to job
6. **Track:** `/candidates/applications` → Monitor status
7. **Manage:** `/settings/*` → Update preferences

### Recruiter Journey:
1. **Discovery:** Land on homepage → Learn about recruiting
2. **Registration:** `/auth/register` → Choose recruiter role
3. **Company:** `/recruiters/company` → Setup company profile
4. **Post Job:** `/jobs/post` → Create job posting
5. **Review:** `/jobs/manage` → Manage applications
6. **Source:** `/recruiters/candidates` → Find candidates
7. **Analytics:** `/recruiters/analytics` → Track metrics

---

## 🔄 Page Relationships

### Hierarchical Structure:
```
Homepage (/)
├── Jobs (/jobs)
│   ├── Job Detail (/jobs/:id)
│   ├── Post Job (/jobs/post) [Recruiter]
│   └── Manage Jobs (/jobs/manage) [Recruiter]
├── Companies (/companies)
│   └── Company Detail (/companies/:id)
├── Auth (/auth)
│   ├── Login
│   ├── Register
│   ├── Forgot Password
│   └── Reset Password
├── Candidates (/candidates) [Auth Required]
│   ├── Dashboard
│   ├── Profile
│   ├── Applications
│   └── Saved Jobs
├── Recruiters (/recruiters) [Auth Required]
│   ├── Dashboard
│   ├── Candidates
│   ├── Company
│   └── Analytics
├── Settings (/settings) [Auth Required]
│   ├── Profile
│   ├── Account
│   ├── Notifications
│   ├── Theme
│   ├── Candidate [Candidate]
│   ├── Recruiter [Recruiter]
│   └── Billing
├── Support Pages
│   ├── About
│   ├── Contact
│   ├── FAQ
│   ├── Help
│   ├── Privacy
│   ├── Terms
│   └── Cookies
└── Profile (/profile/:id)
```

---

## 📝 Implementation Notes

### Middleware Usage:
- `auth.global.ts` - Checks authentication on protected routes
- `role-candidate.ts` - Restricts candidate-only pages
- `role-recruiter.ts` - Restricts recruiter-only pages
- `role-admin.ts` - Restricts admin-only pages

### Composables Used:
- `useAuth()` - Authentication state and methods
- `useFetchJobs()` - Job data fetching
- `useNotifications()` - Notification management
- `useFormHandler()` - Form validation and submission

### Plugins:
- `api.ts` - API client configuration
- `seo.ts` - SEO meta tag management
- `toast.client.ts` - Toast notifications
- `vue-awesome-paginate.client.ts` - Pagination component

### State Management:
- Pinia stores (if implemented) for:
  - User state
  - Job filters
  - Application state
  - Notification state

---

## 🚀 Future Enhancements

### Potential New Pages:
- `/blog` - Company blog
- `/resources` - Downloadable resources
- `/events` - Job fairs and events
- `/salary-calculator` - Salary insights
- `/career-advice` - Career tips
- `/interview-prep` - Interview preparation
- `/resume-builder` - Resume building tool
- `/assessments` - Skills assessments
- `/certificates` - Certifications showcase
- `/referrals` - Referral program

---

## 📚 Related Documentation

- [Component Documentation](./COMPONENTS.md)
- [API Documentation](./API.md)
- [Authentication Flow](./AUTH_FLOW.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [FAQ Page Documentation](./FAQ_PAGE_DOCUMENTATION.md)
- [Cookie Policy Documentation](./COOKIES_PAGE_DOCUMENTATION.md)
- [Pagination Documentation](./PAGINATION_INTEGRATION.md)
- [Notification System Documentation](./NOTIFICATIONS_FEATURES.md)

---

**Total Pages:** 40+  
**Public Pages:** 14  
**Authenticated Pages:** 26+  
**Role-Based Pages:** 16 (8 Candidate + 8 Recruiter)  

**Last Updated:** October 17, 2025  
**Version:** 1.0  
**Maintained By:** FindPoint Development Team
