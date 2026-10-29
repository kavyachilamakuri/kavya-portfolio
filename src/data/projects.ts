
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
      "Delivered a clinical lab result management solution one month ahead of schedule, reducing manual nursing effort and improving clinical workflows.",
    challenge:
      "Manual lab result processing consumed valuable nursing time. The solution needed to simplify clinical workflows while meeting delivery commitments and stakeholder expectations.",
    solution:
      "Took ownership of feature delivery, rapidly learned modern Angular, and worked closely with engineering and business stakeholders to deliver the solution in five months against a six-month plan.",
    contributions: [
      "Owned feature delivery from requirements and implementation through release.",
      "Learned and applied modern Angular to build production healthcare workflows.",
      "Coordinated with engineering teams and business stakeholders to resolve delivery dependencies.",
      "Delivered the solution in five months against a planned six-month timeline.",
      "Implemented workflow improvements that reduced manual nursing effort.",
      "Earned stakeholder recognition for successful delivery.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      ".NET",
      "SQL Server",
    ],
    impact: "Delivered 1 month ahead of schedule",
    featured: true,
  },
  {
    id: "medpearl",
    title: "MedPearl Platform Engineering",
    category: "Frontend & Platform",
    filterCategory: "Frontend",
    summary:
      "Built and improved complex React-based healthcare workflows, including document review, search, rich-text editing, and reusable UI components.",
    challenge:
      "A growing healthcare knowledge platform required maintainable frontend architecture, sophisticated document workflows, consistent user experiences, and reliable performance.",
    solution:
      "Developed reusable React and TypeScript components, implemented specialized editing and review capabilities, and optimized frontend performance across the platform.",
    contributions: [
      "Developed reusable React and TypeScript components for complex healthcare workflows.",
      "Built an in-house CKEditor 5 Find & Replace extension supporting advanced text matching and replacement.",
      "Implemented external document review workflows with controlled guest access and commenting permissions.",
      "Enhanced search experiences and interactive document management interfaces.",
      "Reduced frontend bundle size by approximately 12% through dependency and build optimization.",
      "Contributed to code reviews, automated testing, and mentoring engineers.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "CKEditor 5",
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
      "Developed a healthcare AI prototype integrating GPT-4o with .NET microservices to generate context-aware dietary recommendations.",
    challenge:
      "Explore how generative AI could use relevant healthcare context to provide more personalized dietary guidance through a backend integration.",
    solution:
      "Integrated GPT-4o with .NET microservices and asynchronous request-processing workflows to demonstrate context-aware nutrition recommendations.",
    contributions: [
      "Integrated GPT-4o with C# and .NET backend services.",
      "Implemented asynchronous processing for AI requests and responses.",
      "Developed service orchestration for generating dietary recommendations.",
      "Explored the use of healthcare record context in personalized nutrition guidance.",
      "Contributed to a healthcare innovation prototype recognized at Hack4Health 2024.",
    ],
    technologies: [
      "GPT-4o",
      "C#",
      "ASP.NET Core",
      "Microservices",
      "Async/Await",
    ],
    impact: "Hack4Health 2024 Runner-Up",
    featured: true,
  },
  {
    id: "microfrontends",
    title: "Microfrontend Modernization",
    category: "Frontend Architecture",
    filterCategory: "Frontend",
    summary:
      "Contributed to modernizing a React monolith into modular microfrontends using Single-SPA and automated deployment pipelines.",
    challenge:
      "A growing monolithic frontend increased maintenance complexity and made independently evolving application features more difficult.",
    solution:
      "Helped introduce Single-SPA microfrontend boundaries and supported deployment automation using Azure DevOps pipelines.",
    contributions: [
      "Contributed to migrating a React monolith toward a Single-SPA microfrontend architecture.",
      "Supported modular application boundaries and reusable frontend patterns.",
      "Worked on frontend integration and application maintainability.",
      "Implemented deployment workflows using Azure DevOps pipelines.",
      "Supported code quality and engineering delivery practices.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Single-SPA",
      "Azure DevOps",
    ],
    impact: "Modular frontend architecture",
    featured: false,
  },
];
