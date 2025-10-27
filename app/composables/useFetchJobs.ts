// Imports
import { ref } from 'vue';

// Define the job type for mock data
export interface JobItem {
  id: number;
  title: string;
  company: string;
  companyInitial: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  skills: string[];
  postedDate: string;
  workLocation?: string;
  deadline?: string;
  industry?: string;
  companySize?: string;
  companyLocation?: string;
  companyWebsite?: string;
  companyDescription?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  niceToHave?: string[];
  benefits?: string[];
}

// Mock jobs data
const jobsData: JobItem[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    companyInitial: "T",
    location: "San Francisco, CA",
    salary: "$120k - $180k",
    type: "Full-time",
    experience: "5+ years",
    skills: ["React", "TypeScript", "Node.js", "Python", "AWS"],
    postedDate: "2 days ago",
    workLocation: "Hybrid",
    deadline: "December 31, 2025",
    industry: "Technology",
    companySize: "201-500 employees",
    companyLocation: "San Francisco, CA",
    companyWebsite: "www.techcorp.com",
    companyDescription:
      "Leading technology company focused on innovative solutions that transform businesses.",
    description:
      "We are seeking a talented Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining scalable applications that serve millions of users worldwide.",
    responsibilities: [
      "Design and develop high-quality, scalable software solutions",
      "Collaborate with cross-functional teams to define and ship new features",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and provide constructive feedback",
      "Mentor junior developers and contribute to team growth",
      "Troubleshoot and debug applications to optimize performance",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of professional software development experience",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Solid understanding of software design patterns and best practices",
      "Excellent problem-solving and analytical skills",
      "Strong communication and teamwork abilities",
    ],
    niceToHave: [
      "Experience with microservices architecture",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Contributions to open-source projects",
      "Experience with CI/CD pipelines",
      "Familiarity with Agile/Scrum methodologies",
    ],
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work hours",
      "Remote work options",
      "Professional development budget",
      "Gym membership",
      "Catered meals",
      "Stock options",
    ],
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
    companyInitial: "D",
    location: "Remote",
    salary: "$90k - $130k",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    postedDate: "1 day ago",
    workLocation: "Remote",
    deadline: "November 15, 2025",
    industry: "Design",
    companySize: "51-200 employees",
    companyLocation: "New York, NY",
    companyWebsite: "www.designhub.com",
    companyDescription:
      "Creative design agency specializing in user-centered product design.",
    description:
      "Join our design team to create intuitive and beautiful user experiences for innovative products.",
    responsibilities: [
      "Design user interfaces and experiences for web and mobile applications",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Collaborate with product managers and developers",
      "Conduct user research and usability testing",
      "Maintain and evolve design systems",
    ],
    requirements: [
      "3+ years of product design experience",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Strong portfolio demonstrating UI/UX design skills",
      "Understanding of design principles and user-centered design",
      "Experience with prototyping tools",
    ],
    niceToHave: [
      "Experience with design systems",
      "Knowledge of front-end development",
      "Background in user research",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible work hours",
      "Professional development budget",
      "Creative work environment",
    ],
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataFlow Analytics",
    companyInitial: "D",
    location: "New York, NY",
    salary: "$100k - $150k",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
    postedDate: "3 days ago",
    workLocation: "On-site",
    deadline: "January 15, 2026",
    industry: "Finance",
    companySize: "101-500 employees",
    companyLocation: "New York, NY",
    companyWebsite: "www.dataflow.com",
    companyDescription: "Data analytics company providing insights for financial institutions.",
    description: "We are looking for a talented Data Scientist to join our analytics team. You will work with large datasets to extract meaningful insights that drive business decisions.",
    responsibilities: [
      "Analyze large datasets to identify trends and patterns",
      "Develop predictive models and machine learning algorithms",
      "Collaborate with business teams to understand data needs",
      "Create data visualizations and reports for stakeholders",
      "Implement statistical models for business forecasting",
      "Maintain and improve data pipelines",
      "Document methodologies and findings",
    ],
    requirements: [
      "4+ years of experience in data science or related field",
      "Strong proficiency in Python and statistical analysis",
      "Experience with machine learning frameworks (TensorFlow, scikit-learn)",
      "Expertise in SQL and relational databases",
      "Familiarity with big data technologies",
      "Strong analytical and problem-solving skills",
      "Excellent communication and teamwork abilities",
    ],
    niceToHave: [
      "Experience with cloud platforms (AWS, GCP)",
      "Knowledge of data pipeline tools (Airflow, Kafka)",
      "Background in financial services",
      "Experience with deep learning",
      "Advanced degree in quantitative field",
    ],
    benefits: [
      "Competitive salary and bonus",
      "Health, dental, and vision coverage",
      "Professional development stipend",
      "Flexible work arrangements",
      "Gym membership",
      "Catered meals",
      "Stock options",
    ],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "WebSolutions",
    companyInitial: "W",
    location: "Austin, TX",
    salary: "$80k - $120k",
    type: "Contract",
    experience: "2+ years",
    skills: ["Vue.js", "JavaScript", "CSS", "HTML", "Webpack"],
    postedDate: "5 days ago",
    workLocation: "Remote",
    deadline: "February 1, 2026",
    industry: "Technology",
    companySize: "11-50 employees",
    companyLocation: "Austin, TX",
    companyWebsite: "www.websolutions.com",
    companyDescription: "Creative web development agency specializing in modern user interfaces.",
    description: "Join our frontend development team to create beautiful and responsive web applications. We're looking for a skilled developer with passion for modern frontend technologies.",
    responsibilities: [
      "Develop responsive web applications using Vue.js",
      "Collaborate with designers to implement pixel-perfect interfaces",
      "Optimize applications for maximum speed and scalability",
      "Write clean, maintainable, and well-documented code",
      "Work with backend APIs and integrate frontend components",
      "Conduct code reviews and provide constructive feedback",
      "Stay up-to-date with emerging frontend technologies",
    ],
    requirements: [
      "2+ years of frontend development experience",
      "Strong proficiency in Vue.js and JavaScript (ES6+)",
      "Experience with HTML5, CSS3, and modern CSS frameworks",
      "Familiarity with build tools (Webpack, Vite)",
      "Understanding of responsive design principles",
      "Experience with version control (Git)",
      "Basic knowledge of backend integration",
    ],
    niceToHave: [
      "Experience with TypeScript",
      "Knowledge of component-based architecture",
      "Familiarity with Vue ecosystem (Pinia, Vue Router)",
      "Experience with CSS preprocessors (Sass, Less)",
      "Background in UX/UI principles",
      "Experience with testing frameworks (Jest, Vue Test Utils)",
    ],
    benefits: [
      "Competitive contract rate",
      "Remote work flexibility",
      "Flexible hours",
      "Learning budget",
      "Creative work environment",
    ],
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "BrandBoost",
    companyInitial: "B",
    location: "Boston, MA",
    salary: "$70k - $100k",
    type: "Full-time",
    experience: "5+ years",
    skills: ["SEO", "Content Strategy", "Analytics", "Social Media", "PPC"],
    postedDate: "1 week ago",
    workLocation: "Hybrid",
    deadline: "November 30, 2025",
    industry: "Marketing",
    companySize: "51-200 employees",
    companyLocation: "Boston, MA",
    companyWebsite: "www.brandboost.com",
    companyDescription: "Growth marketing agency helping businesses scale their online presence.",
    description: "We are seeking a talented Marketing Manager to lead our digital marketing initiatives. You will develop and execute comprehensive marketing strategies to drive growth and acquisition.",
    responsibilities: [
      "Develop and execute comprehensive marketing campaigns",
      "Manage SEO, PPC, and social media advertising",
      "Coordinate with content and design teams for campaigns",
      "Analyze campaign performance and provide insights",
      "Manage marketing analytics and reporting",
      "Lead market research and competitive analysis",
      "Collaborate with sales team on lead generation",
      "Optimize landing pages and conversion rates",
    ],
    requirements: [
      "5+ years of digital marketing experience",
      "Proven track record of successful campaign management",
      "Experience with Google Ads, Facebook Ads, and analytics platforms",
      "Strong SEO, SEM, and social media knowledge",
      "Proficiency in marketing analytics tools",
      "Excellent communication and presentation skills",
      "Experience with content marketing strategies",
      "Understanding of A/B testing and conversion optimization",
    ],
    niceToHave: [
      "Experience with marketing automation tools",
      "Knowledge of email marketing platforms",
      "Background in startup growth marketing",
      "Familiarity with SaaS marketing",
      "Experience with influencer marketing",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health and dental coverage",
      "Professional development budget",
      "Flexible work schedule",
      "401(k) matching",
      "Team-building events",
    ],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech",
    companyInitial: "C",
    location: "Seattle, WA",
    salary: "$110k - $160k",
    type: "Full-time",
    experience: "4+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    postedDate: "4 days ago",
    workLocation: "On-site",
    deadline: "December 20, 2025",
    industry: "Cloud Computing",
    companySize: "201-500 employees",
    companyLocation: "Seattle, WA",
    companyWebsite: "www.cloudtech.com",
    companyDescription: "Leading cloud infrastructure provider enabling digital transformation.",
    description: "Join our DevOps team to build and maintain scalable, reliable cloud infrastructure. You'll work with cutting-edge technologies to enable seamless deployment and monitoring of our cloud services.",
    responsibilities: [
      "Design and implement CI/CD pipelines using Jenkins/GitLab",
      "Manage cloud infrastructure on AWS using Terraform",
      "Monitor system performance and reliability",
      "Automate deployment processes and infrastructure provisioning",
      "Collaborate with development teams on best practices",
      "Implement security measures and compliance standards",
      "Optimize infrastructure costs and performance",
      "Document infrastructure and processes",
    ],
    requirements: [
      "4+ years of DevOps or infrastructure experience",
      "Strong experience with AWS services",
      "Proficiency in Docker, Kubernetes, and containerization",
      "Experience with Infrastructure as Code (Terraform, CloudFormation)",
      "Knowledge of CI/CD tools and methodologies",
      "Experience with monitoring and logging solutions",
      "Strong scripting skills (Bash, Python)",
      "Understanding of security best practices",
    ],
    niceToHave: [
      "AWS certifications (DevOps Professional, Solutions Architect)",
      "Experience with microservices architecture",
      "Knowledge of serverless technologies (Lambda, API Gateway)",
      "Familiarity with service mesh (Istio, Linkerd)",
      "Experience with chaos engineering practices",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health benefits",
      "Flexible work arrangements",
      "Professional development budget",
      "Gym membership and wellness program",
      "Catered lunches",
      "401(k) with company match",
      "Stock options",
    ],
  },
  {
    id: 7,
    title: "UX Researcher",
    company: "UserFirst Design",
    companyInitial: "U",
    location: "Remote",
    salary: "$85k - $125k",
    type: "Full-time",
    experience: "3+ years",
    skills: [
      "User Research",
      "Usability Testing",
      "Data Analysis",
      "Interviews",
    ],
    postedDate: "2 days ago",
    workLocation: "Remote",
    deadline: "November 25, 2025",
    industry: "Design",
    companySize: "26-100 employees",
    companyLocation: "San Francisco, CA",
    companyWebsite: "www.userfirstdesign.com",
    companyDescription: "User-centered design studio creating intuitive digital experiences.",
    description: "We're looking for a talented UX Researcher to join our research team. You'll conduct user research initiatives to inform design decisions and improve user experiences across our digital products.",
    responsibilities: [
      "Plan and conduct user research studies (interviews, surveys, usability tests)",
      "Analyze research data and synthesize findings into actionable insights",
      "Collaborate with design and product teams to understand research needs",
      "Create research reports and present findings to stakeholders",
      "Identify user needs, pain points, and opportunities",
      "Develop and maintain research repositories and databases",
      "Conduct competitive analysis and user journey mapping",
      "Design research methodologies appropriate for various project needs",
    ],
    requirements: [
      "3+ years of user experience research experience",
      "Strong background in qualitative and quantitative research methods",
      "Experience conducting user interviews and usability testing",
      "Proficiency in research tools and software",
      "Excellent analytical and synthesis skills",
      "Strong communication and presentation abilities",
      "Understanding of UX design principles and processes",
      "Experience with data analysis and statistical methods",
    ],
    niceToHave: [
      "Experience with remote testing and research tools",
      "Tool proficiency: UserTesting, Lookback, Optimal Workshop",
      "Knowledge of accessibility principles and testing",
      "Background in psychology or behavioral science",
      "Experience working with enterprise clients",
    ],
    benefits: [
      "Competitive salary",
      "100% remote flexible work",
      "Professional development stipend",
      "Home office equipment stipend",
      "Health and wellness benefits",
      "Flexible PTO policy",
      "Collaborative and creative environment",
    ],
  },
  {
    id: 8,
    title: "Backend Engineer",
    company: "ServerSide Inc.",
    companyInitial: "S",
    location: "Denver, CO",
    salary: "$95k - $140k",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Redis"],
    postedDate: "6 days ago",
    workLocation: "Hybrid",
    deadline: "January 8, 2026",
    industry: "Software Development",
    companySize: "51-200 employees",
    companyLocation: "Denver, CO",
    companyWebsite: "www.serverside.inc",
    companyDescription: "Software development company specializing in scalable backend systems.",
    description: "Join our backend engineering team to build and maintain high-performance, scalable applications that serve millions of users. You'll work with modern technologies and contribute to our microservices architecture.",
    responsibilities: [
      "Design and implement RESTful APIs and microservices",
      "Optimize database queries and improve application performance",
      "Collaborate with frontend developers and product teams",
      "Write clean, scalable, and maintainable code",
      "Participate in code reviews and technical discussions",
      "Implement automated testing and CI/CD pipelines",
      "Monitor application performance and troubleshoot issues",
      "Document API specifications and system architecture",
    ],
    requirements: [
      "4+ years of backend development experience",
      "Strong proficiency in Java and Spring Boot framework",
      "Experience with relational databases (PostgreSQL, MySQL)",
      "Knowledge of microservices architecture principles",
      "Familiarity with caching technologies (Redis, Memcached)",
      "Understanding of REST APIs and web services",
      "Experience with version control systems (Git)",
      "Strong problem-solving and analytical skills",
    ],
    niceToHave: [
      "Experience with NoSQL databases (MongoDB, Cassandra)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Experience with API gateway patterns",
      "Familiarity with cloud platforms (AWS, Azure)",
      "Background in high-traffic application development",
    ],
    benefits: [
      "Competitive salary with yearly raises",
      "Health, dental, and vision insurance",
      "401(k) retirement plan with matching",
      "Uncapped PTO",
      "Home office stipend",
      "Learning and conference budget",
      "Flexible work schedule",
    ],
  },
  {
    id: 9,
    title: "Product Manager",
    company: "InnovateCo",
    companyInitial: "I",
    location: "Los Angeles, CA",
    salary: "$100k - $150k",
    type: "Full-time",
    experience: "5+ years",
    skills: [
      "Agile",
      "Product Strategy",
      "Roadmapping",
      "Analytics",
      "Leadership",
    ],
    postedDate: "3 days ago",
    workLocation: "On-site",
    deadline: "December 5, 2025",
    industry: "Technology",
    companySize: "201-500 employees",
    companyLocation: "Los Angeles, CA",
    companyWebsite: "www.innovateco.com",
    companyDescription: "Innovative technology company developing cutting-edge software solutions.",
    description: "We are looking for an experienced Product Manager to lead product strategy and execution. You'll work closely with engineering, design, and business teams to deliver exceptional products that drive business growth.",
    responsibilities: [
      "Define product strategy and roadmap based on business goals",
      "Conduct market research and competitive analysis",
      "Collaborate with engineering and design teams on implementation",
      "Write detailed product requirements and user stories",
      "Manage product release cycles and milestones",
      "Monitor product performance using analytics and metrics",
      "Gather and analyze customer feedback and insights",
      "Present product updates to stakeholders and executive team",
    ],
    requirements: [
      "5+ years of product management experience",
      "Proven track record of successfully shipping products",
      "Strong analytical skills and data-driven decision making",
      "Experience with Agile/Scrum methodologies",
      "Excellent communication and leadership abilities",
      "Understanding of technical architecture and development",
      "Experience writing product requirements and documentation",
      "Strong stakeholder management and presentation skills",
    ],
    niceToHave: [
      "Experience with product analytics tools",
      "Background in mobile app or platform products",
      "Knowledge of user research and A/B testing",
      "Experience with customer segmentation and personas",
      "Familiarity with product lifecycle management",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Stock options and equity package",
      "Comprehensive health coverage",
      "Flexible work arrangements",
      "Professional development budget",
      "Mentorship and career growth opportunities",
      "Modern office with amenities",
      "Catered meals and snacks",
    ],
  },
];

/**
 * Purpose: Fetch and filter job listings
 * Logic: Provides reactive job data with search, filter, and pagination capabilities
 * Uses: API plugin, query params, reactive state management
 */
export const useFetchJobs = () => {
  // Return reactive jobs data
  const jobs = ref(jobsData);

  // Get job by ID
  const getJobById = (id: number) => {
    return jobs.value.find(job => job.id === id);
  };

  return {
    jobs,
    getJobById,
  };
};

// Global selected job state for passing job data as props
const selectedJob = ref<JobItem | undefined>();

export const useSelectedJob = () => {
  const setSelectedJob = (job: JobItem) => {
    selectedJob.value = job;
  };

  const getSelectedJob = () => {
    return selectedJob.value;
  };

  return {
    setSelectedJob,
    getSelectedJob,
  };
};
