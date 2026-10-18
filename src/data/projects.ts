export type ProjectCategory = "Healthcare" | "Frontend" | "AI";

export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: ProjectCategory;
  summary: string;
  challenge: string;
  solution: string;
  contributions: string[];
  technologies: string[];
  impact: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}


export const projects: Project[] = [
  {
    id: "lab-results",
    title: "Lab Result Management",
    category: "Healthcare Automation",
    filterCategory: "Healthcare",
    summary:
      "Led the delivery of a clinical lab result management solution that streamlined nursing workflows and reduced manual effort.",
    challenge:
      "Clinical lab result workflows involved time-consuming manual activities, creating opportunities to improve nursing efficiency and operational productivity.",
    solution:
      "Owned end-to-end feature delivery, rapidly adopted modern Angular after promotion, and coordinated cross-functional stakeholders to deliver ahead of schedule.",
    contributions: [
      "Led feature delivery from planning through production release.",
      "Completed delivery in 5 months against a planned 6-month timeline.",
      "Rapidly upskilled in modern Angular and delivered production functionality.",
      "Coordinated business stakeholders and engineering teams throughout delivery.",
      "Delivered lab result automation that saves approximately 5 hours per nurse per day.",
      "Received stakeholder accolades for successful delivery.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      ".NET",
      "SQL Server",
    ],
    impact: "5 hours saved per nurse per day",
    featured: true,
  },
  {
    id: "medpearl",
    title: "MedPearl Platform Engineering",
    category: "Frontend & Platform",
    filterCategory: "Frontend",
    summary:
      "Enhanced a healthcare knowledge platform through React-based modernization, reusable UI architecture, and performance improvements.",
    challenge:
      "An evolving healthcare platform required consistent user experiences, maintainable frontend components, efficient performance, and secure collaboration workflows.",
    solution:
      "Delivered frontend enhancements, application-wide UI improvements, performance optimizations, and external review capabilities.",
    contributions: [
      "Built reusable React and TypeScript components for complex healthcare workflows.",
      "Contributed to UI redesign and application-wide theming.",
      "Delivered external review workflows with controlled guest access.",
      "Optimized frontend dependencies and reduced bundle size by 12%.",
      "Improved engineering quality through testing and deployment practices.",
      "Mentored engineers and supported cross-functional delivery.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Azure",
    ],
    impact: "12% frontend bundle reduction",
    featured: true,
  },
  {
    id: "ai-nutrition",
    title: "AI-Powered Nutrition Assistant",
    category: "AI & Backend Engineering",
    filterCategory: "AI",
    summary:
      "Developed a generative AI prototype combining GPT-4o and .NET microservices to generate context-aware nutrition recommendations.",
    challenge:
      "Explore how large language models could support personalized dietary guidance through a scalable backend integration.",
    solution:
      "Designed and implemented an AI-powered prototype integrating GPT-4o with .NET services and asynchronous processing workflows.",
    contributions: [
      "Integrated GPT-4o into a .NET-based application.",
      "Implemented asynchronous processing for AI requests.",
      "Developed backend orchestration for generating dietary recommendations.",
      "Explored practical applications of generative AI in healthcare.",
      "Presented the solution as part of a healthcare innovation initiative.",
    ],
    technologies: [
      "GPT-4o",
      "C#",
      "ASP.NET Core",
      "Microservices",
    ],
    impact: "AI-powered nutrition recommendations",
    featured: true,
  },
  {
    id: "microfrontends",
    title: "Microfrontend Modernization",
    category: "Frontend Architecture",
    filterCategory: "Frontend",
    summary:
      "Contributed to modernizing a React monolith into modular microfrontend applications using Single-SPA.",
    challenge:
      "A growing frontend monolith increased application complexity and made independent development and deployment more difficult.",
    solution:
      "Contributed to decomposing the application into Single-SPA microfrontends and automating frontend deployment workflows using Azure DevOps.",
    contributions: [
      "Contributed to migrating a React monolith to Single-SPA microfrontends.",
      "Supported modular frontend architecture and application boundaries.",
      "Implemented deployment automation using Azure Pipelines.",
      "Improved frontend maintainability and release workflows.",
      "Supported code quality and engineering best practices.",
    ],
    technologies: [
      "React",
      "Single-SPA",
      "TypeScript",
      "Azure DevOps",
    ],
    impact: "Modular frontend architecture",
    featured: false,
  },
];

