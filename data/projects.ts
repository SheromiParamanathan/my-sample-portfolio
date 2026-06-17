import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ats-system",
    title: "High-Integrity Intelligence & Recruitment Ecosystem",
    description:
      "A production-grade recruitment ecosystem engineered to automate high-volume hiring through semantic AI evaluation, reducing manual screening effort by 70%.",
    longDescription:
      "A distributed recruitment ecosystem (ats.interns.lk · portal.prodesigncv.lk · selectra.balanita.lk) built with Laravel and MySQL. Features an LLM-orchestrated evaluation pipeline using OpenAI for deep semantic analysis, optimizing hiring workflows for scale.",
    tech: ["Laravel", "AI Orchestration", "MySQL", "Distributed Systems"],
    demoUrl: "https://ats.interns.lk",
    featured: true,
    status: "production",
    overview:
      "This ecosystem was designed to modernize traditional recruitment by integrating SelectraHR and ProDesignCV into a unified hiring workflow with 70% less manual effort.",
    features: [
      "LLM-based evaluation pipeline for resume–job matching analysis",
      "End-to-end recruitment ecosystem (ATS scoring, resume optimization)",
      "Built SelectraHR recruitment system with job postings, applications, and tracking",
      "Engineered backend architecture with authentication, RBAC, and file processing",
      "Automated email notification workflows and candidate rating systems",
      "Recruiter analytics dashboard with conversion and hiring metrics",
    ],
    engineeringDecisions: [
      "Independently designed the full system architecture from high-level business requirements.",
      "Translated business needs into full database design and backend implementations.",
      "Integrated OpenAI GPT-4o for nuanced semantic evaluation, moving beyond simple keyword matching.",
      "Optimized database queries and implemented caching, resulting in a 40% improvement in API performance.",
    ],
    challenges: [
      {
        challenge: "High manual overhead in candidate screening for volume hiring.",
        solution: "Engineered an automated AI scoring rubric that ranks candidates based on technical skill alignment, reducing screening time from days to minutes.",
      },
      {
        challenge: "Performance bottlenecks during heavy resume processing loads.",
        solution: "Implemented chunked file processing and optimized MySQL indexing, improving system responsiveness by 40%.",
      },
    ],
  },

  {
    slug: "ai-news-intelligence",
    title: "AI News Aggregation & Automation Tools",
    description:
      "Automated news ingestion system with similarity detection and duplicate removal using Perplexity API and OpenAI Embeddings.",
    longDescription:
      "An automated intelligence system for real-time topic-based content collection. It uses Perplexity API for fetching and OpenAI Embeddings for similarity-based duplicate removal and clustering.",
    tech: ["Perplexity API", "OpenAI Embeddings", "Laravel", "MySQL"],
    featured: false,
    status: "production",
    overview:
      "Built to eliminate manual news monitoring, this system automates the ingestion, deduplication, and reporting of industry-specific news. It ensures stakeholders only see high-signal, unique content.",
    features: [
      "Real-time topic-based automated news ingestion",
      "Embedding-based similarity detection for duplicate removal",
      "Content clustering for high-level industry trends",
      "Multi-user isolation and structured reporting workflows",
      "Cost-optimized caching layer for expensive API calls",
    ],
    engineeringDecisions: [
      "Selected OpenAI Embeddings to perform semantic deduplication, which is far more accurate than simple string matching.",
      "Designed a robust caching layer to reduce API costs while maintaining real-time freshness.",
      "Built a modular ingestion pipeline that can be easily extended to new news sources.",
    ],
    challenges: [
      {
        challenge: "Duplicate news coverage across multiple sources.",
        solution: "Calculated vector embeddings for article content and used cosine similarity to automatically flag and group duplicates.",
      },
    ],
  },
  {
    slug: "lms-intelligence",
    title: "LMS Intelligence System",
    description:
      "Learning analytics platform with ETL pipelines, automated reporting, and student performance dashboards.",
    longDescription:
      "A learning analytics platform that integrates external LMS data (courses, quizzes, enrollments, user activity) through a custom ETL pipeline to provide actionable insights and automated reporting.",
    tech: ["Laravel", "MySQL", "PHP", "DomPDF"],
    featured: false,
    status: "production",
    overview:
      "This system transforms raw LMS data into visual intelligence. By automating the ETL and reporting workflows, it eliminated hours of manual data entry and report generation for the administrative team.",
    features: [
      "ETL pipeline for extracting and transforming external LMS data",
      "Analytics dashboards with performance trends and student insights",
      "Automated PDF report generation, eliminating manual reporting workflows",
      "Real-time tracking of course completion and quiz performance",
      "Bulk data processing for enterprise-scale training records",
    ],
    engineeringDecisions: [
      "Designed a flexible ETL layer that handles inconsistent data formats from external sources.",
      "Offloaded heavy PDF generation to background workers to ensure UI responsiveness.",
      "Implemented optimized MySQL views for complex analytics queries to maintain dashboard performance.",
    ],
    challenges: [
      {
        challenge: "Inconsistent data structures from external LMS sources.",
        solution: "Built a normalization layer that transforms varied JSON/CSV structures into a unified internal schema for the analytics engine.",
      },
    ],
  },
  {
    slug: "executionos",
    title: "ExecutionOS – Personal Productivity & Execution Intelligence Platform",
    description:
      "A productivity-first SaaS platform built to measure execution performance through structured Morning Check-In and Evening Debrief workflows.",
    longDescription:
      "Designed and developed a productivity-focused platform to quantify execution through daily check-ins, automated task synchronization, and performance reporting for future team-based SaaS growth.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
    featured: false,
    status: "production",
    overview:
      "ExecutionOS is a dark-mode-first execution intelligence platform that combines daily workflow orchestration with analytics to help users track commitment, completion, and blockers over time.",
    features: [
      "Structured Morning Check-In and Evening Debrief workflows for execution performance measurement",
      "Automated task-state synchronization between reports and Kanban workflows",
      "KPI tracking and reporting for consistency, commitment accuracy, completion rates, and blocker frequency",
      "Role-based access control and organization-aware architecture for multi-tenant readiness",
      "Glassmorphism-inspired premium UI with dark-mode-first dashboards",
    ],
    engineeringDecisions: [
      "Engineered automated synchronization logic to eliminate duplicate task updates and ensure data consistency across execution reports and Kanban boards.",
      "Built modular KPI tracking modules to support future analytics enhancements like team leaderboards and manager dashboards.",
      "Implemented RBAC and organization-aware structures to support a secure, multi-tenant-ready SaaS experience.",
    ],
    challenges: [
      {
        challenge: "Duplicate task updates and inconsistent status propagation across execution workflows.",
        solution: "Created a centralized synchronization layer that reconciles task states between daily reports and Kanban boards, removing duplicate updates and preserving data integrity.",
      },
      {
        challenge: "Designing a premium SaaS experience while maintaining clean dark-mode usability.",
        solution: "Adopted glassmorphism-inspired interfaces and dark-first design patterns to deliver a modern, high-contrast productivity dashboard without visual clutter.",
      },
    ],
  },
  {
    slug: "yoga-pose-correction",
    title: "Real-Time Yoga Pose Correction System",
    description:
      "AI-powered mobile app using MoveNet for skeleton keypoint detection and a custom CNN for 90%+ accurate pose classification.",
    longDescription:
      "A mobile application that uses the MoveNet model for accurate skeleton keypoint detection and a custom-trained CNN in Keras to provide real-time corrective feedback for yoga practitioners.",
    tech: [
      "Python",
      "TensorFlow",
      "MoveNet",
      "Keras",
      "Android Studio",
      "Java",
      "TensorFlow.js",
    ],
    featured: true,
    status: "archived",
    overview:
      "This project leverages on-device computer vision to democratize personal yoga instruction. It achieved over 90% accuracy across multiple poses, providing low-latency corrective feedback directly on the device.",
    features: [
      "Real-time skeleton keypoint detection using MoveNet Lightning",
      "Custom CNN achieving 90%+ accuracy in pose classification",
      "Live corrective feedback system with visual overlays",
      "Cross-platform support via TensorFlow.js for web browsers",
      "Native Android implementation for low-latency performance",
    ],
    engineeringDecisions: [
      "Chose MoveNet for its high performance on mobile hardware without requiring a cloud GPU.",
      "Engineered the classification pipeline to be invariant to user distance and camera angle.",
      "Integrated TensorFlow.js to enable a 'zero-install' web version alongside the native app.",
    ],
    challenges: [
      {
        challenge: "Providing accurate feedback in varying lighting and environments.",
        solution: "Used robust keypoint normalization techniques to ensure the model focuses on joint relationships rather than absolute pixel positions.",
      },
    ],
  },
  {
    slug: "ess-smart-quest",
    title: "ESS Smart Quest - Employee Survey Management System",
    description:
      "Diagnosed and resolved critical data accuracy bugs and frontend responsiveness issues in a legacy system, improving stability and user experience.",
    longDescription:
      "An enterprise employee satisfaction survey platform. Successfully diagnosed and resolved critical data aggregation bugs and improved frontend responsiveness in a legacy system while implementing feature enhancements.",
    tech: ["PHP", "MySQL", "JavaScript"],
    featured: false,
    status: "production",
    overview:
      "Working on ESS Smart Quest required a deep dive into legacy code to fix production-stopping bugs and implement new, client-requested features without breaking existing functionality.",
    features: [
      "Enterprise-scale survey management and response collection",
      "Fixed critical data accuracy issues in survey aggregation",
      "Improved mobile and desktop frontend responsiveness",
      "Implemented client-specific feature enhancements",
      "Enhanced system stability and user experience",
    ],
    engineeringDecisions: [
      "Conducted thorough root-cause analysis before refactoring legacy calculation paths.",
      "Maintained system uptime while deploying critical fixes to the production database.",
    ],
    challenges: [
      {
        challenge: "Legacy code with inconsistent data structures causing survey errors.",
        solution: "Refactored core aggregation queries to use standardized SQL patterns, ensuring data accuracy across all report types.",
      },
    ],
  },

];

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
