/**
 * Dashboard Types
 * Type definitions for dashboard components
 */

export interface DashboardStat {
  title: string;
  value: string | number;
  icon: string;
  color?: "emerald" | "blue" | "purple" | "orange" | "red" | "indigo" | "pink";
  trend?: {
    value: number;
    direction: "up" | "down";
  };
  subtitle?: string;
  link?: string;
  badge?: string;
}

export interface Activity {
  id: string;
  type:
    | "application"
    | "interview"
    | "message"
    | "offer"
    | "job"
    | "profile"
    | "system";
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description?: string;
  time: string;
  link?: string;
  actionText?: string;
}

export interface QuickAction {
  title: string;
  description?: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  link: string;
  badge?: string | number;
}

/**
 * User Types
 */

export type UserRole = "candidate" | "recruiter" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface UserProfile extends User {
  phone?: string;
  location?: string;
  bio?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

/**
 * Job Types
 */

export type JobType =
  | "full-time"
  | "part-time"
  | "contract"
  | "temporary"
  | "internship";
export type ExperienceLevel = "entry" | "mid" | "senior" | "lead" | "executive";
export type JobStatus = "draft" | "active" | "paused" | "closed" | "expired";

export interface Salary {
  min: number;
  max: number;
  currency: string;
  period: "hour" | "month" | "year";
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  location: string;
  type: JobType;
  salary?: Salary;
  description: string;
  requirements: string[];
  responsibilities?: string[];
  benefits?: string[];
  skills?: string[];
  experienceLevel: ExperienceLevel;
  postedAt: Date;
  deadline?: Date;
  remote: boolean;
  status: JobStatus;
  applicantsCount?: number;
  viewsCount?: number;
}

/**
 * Company Types
 */

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  coverImage?: string;
  industry: string;
  size: string;
  location: string;
  website?: string;
  description: string;
  founded?: number;
  benefits?: string[];
  culture?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

/**
 * Application Types
 */

export type ApplicationStatus =
  | "pending"
  | "reviewing"
  | "shortlisted"
  | "interview"
  | "offer"
  | "accepted"
  | "rejected"
  | "withdrawn";

export interface Application {
  id: string;
  jobId: string;
  job?: Job;
  candidateId: string;
  candidate?: UserProfile;
  status: ApplicationStatus;
  appliedAt: Date;
  updatedAt: Date;
  coverLetter?: string;
  resume: string;
  portfolioUrl?: string;
  answers?: Record<string, any>;
  notes?: string;
}

/**
 * Notification Types
 */

export type NotificationType =
  | "job_match"
  | "application_update"
  | "interview"
  | "message"
  | "offer"
  | "system"
  | "company_update";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
  createdAt: Date;
  data?: Record<string, any>;
}

/**
 * Settings Types
 */

export interface NotificationPreferences {
  email: {
    jobAlerts: boolean;
    applicationUpdates: boolean;
    messages: boolean;
    newsletter: boolean;
    marketing: boolean;
  };
  push: {
    jobAlerts: boolean;
    applicationUpdates: boolean;
    messages: boolean;
  };
  frequency: "realtime" | "daily" | "weekly";
}

export interface PrivacySettings {
  profileVisibility: "public" | "logged-in" | "recruiters-only" | "private";
  showEmail: boolean;
  showPhone: boolean;
  searchable: boolean;
  showActivity: boolean;
}

export interface ThemePreferences {
  mode: "light" | "dark" | "system";
  accentColor: string;
  fontSize: "small" | "medium" | "large";
  compactMode: boolean;
  reducedMotion: boolean;
}

/**
 * API Response Types
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Form Types
 */

export interface FormError {
  field: string;
  message: string;
}

export interface FormState<T> {
  data: T;
  errors: FormError[];
  loading: boolean;
  success: boolean;
}
