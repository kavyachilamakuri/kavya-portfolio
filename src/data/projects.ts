
export interface Project {
  id: string;
  title: string;
  category: string;
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
    summary:
      "Streamlining clinical lab result workflows through modern application engineering.",
    challenge:
      "Clinical lab result workflows required improvements to reduce manual effort and support efficient nursing operations.",
    solution:
      "Led the end-to-end feature delivery, coordinating cross-functional stakeholders and adopting modern Angular after promotion.",
    contributions: [
      "Delivered the feature in 5 months against a planned 6-month timeline.",
      "Learned and applied modern Angular in production.",
      "Coordinated technical and business stakeholders.",
      "Contributed to lab result workflow automation.",
      "Received accolades for successful feature delivery.",
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
    summary:
      "Improving a healthcare knowledge platform through frontend modernization and performance engineering.",
    challenge:
      "The platform needed evolving user experiences, maintainable frontend components, and reliable review workflows.",
    solution:
      "Contributed to frontend architecture, UI redesign, performance optimization, and secure external review capabilities.",
    contributions: [
      "Implemented reusable React and TypeScript components.",
      "Contributed to application-wide theming and UI redesign.",
      "Delivered external review workflows with controlled access.",
      "Reduced frontend bundle size by 12%.",
      "Supported testing and deployment quality improvements.",
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
    summary:
      "A healthcare-focused AI assistant prototype for generating personalized dietary guidance.",
    challenge:
      "Explore how generative AI could provide useful, context-aware nutrition recommendations.",
    solution:
      "Built a GPT-4o-powered prototype using .NET services and asynchronous processing.",
    contributions: [
      "Integrated GPT-4o with .NET services.",
      "Implemented asynchronous processing workflows.",
      "Explored context-aware dietary recommendation generation.",
      "Demonstrated practical generative AI integration.",
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
    summary:
      "Modernizing a monolithic frontend into independently maintainable application modules.",
    challenge:
      "A growing frontend monolith made modular development and deployment more complex.",
    solution:
      "Contributed to a Single-SPA migration and automated frontend deployment workflows.",
    contributions: [
      "Decomposed a React monolith into Single-SPA microfrontends.",
      "Established modular frontend application boundaries.",
      "Automated deployments using Azure Pipelines.",
      "Supported maintainability and engineering quality improvements.",
    ],
    technologies: [
      "React",
      "Single-SPA",
      "TypeScript",
      "Azure DevOps",
    ],
    impact: "Modular frontend architecture",
  },
];
