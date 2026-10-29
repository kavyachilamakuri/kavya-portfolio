
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Azure"
  | "Databases"
  | "Architecture"
  | "Quality";

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  initials: string;
}

export const categories: Array<"All" | SkillCategory> = [
  "All",
  "Frontend",
  "Backend",
  "Azure",
  "Databases",
  "Architecture",
  "Quality",
];

export const skills: Skill[] = [
  // FRONTEND
  {
    name: "React",
    category: "Frontend",
    description:
      "Reusable components, complex UI workflows, and scalable application architecture.",
    initials: "R",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "Type-safe frontend development and maintainable application code.",
    initials: "TS",
  },
  {
    name: "Angular",
    category: "Frontend",
    description:
      "Modern Angular development for enterprise healthcare workflows.",
    initials: "NG",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description:
      "Modern ES6+ development and asynchronous programming.",
    initials: "JS",
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    description:
      "Centralized state management and asynchronous application workflows.",
    initials: "RTK",
  },
  {
    name: "Material UI",
    category: "Frontend",
    description:
      "Responsive interfaces and reusable component systems.",
    initials: "MUI",
  },

  // BACKEND
  {
    name: "C# / ASP.NET Core",
    category: "Backend",
    description:
      "REST APIs, backend services, and enterprise application development.",
    initials: "C#",
  },
  {
    name: "Entity Framework Core",
    category: "Backend",
    description:
      "ORM-based data access, LINQ queries, and persistence.",
    initials: "EF",
  },
  {
    name: "REST API Development",
    category: "Backend",
    description:
      "API design, integration, validation, and error handling.",
    initials: "API",
  },

  // AZURE & DEVOPS
  {
    name: "Azure Functions",
    category: "Azure",
    description:
      "Serverless functions, scheduled jobs, and background processing.",
    initials: "AF",
  },
  {
    name: "Azure DevOps",
    category: "Azure",
    description:
      "Build and release pipelines with automated deployment workflows.",
    initials: "ADO",
  },
  {
    name: "Azure Container Apps",
    category: "Azure",
    description:
      "Deployment and operation of containerized cloud applications.",
    initials: "ACA",
  },
  {
    name: "Docker",
    category: "Azure",
    description:
      "Containerization and consistent application deployment environments.",
    initials: "DK",
  },
  {
    name: "Azure Service Bus",
    category: "Azure",
    description:
      "Message-based integration using queues and topics.",
    initials: "ASB",
  },
  {
    name: "Azure Blob Storage",
    category: "Azure",
    description:
      "Cloud object storage and secure file handling.",
    initials: "BLOB",
  },
  {
    name: "GitHub Actions",
    category: "Azure",
    description:
      "Automated build, validation, and deployment workflows.",
    initials: "GHA",
  },

  // DATABASES
  {
    name: "SQL Server",
    category: "Databases",
    description:
      "Relational data modeling, T-SQL, joins, and query optimization.",
    initials: "SQL",
  },
  {
    name: "Cosmos DB",
    category: "Databases",
    description:
      "NoSQL data access and automated data maintenance workflows.",
    initials: "DB",
  },

  // ARCHITECTURE
  {
    name: "Microfrontends / Single-SPA",
    category: "Architecture",
    description:
      "Modular frontend architecture and independent application integration.",
    initials: "MFE",
  },
  {
    name: "Microservices",
    category: "Architecture",
    description:
      "Distributed backend services and asynchronous integrations.",
    initials: "MS",
  },
  {
    name: "Apache Kafka",
    category: "Architecture",
    description:
      "Event-driven messaging and asynchronous data processing.",
    initials: "K",
  },
  {
    name: "GPT-4o Integration",
    category: "Architecture",
    description:
      "AI-assisted healthcare workflows integrated with .NET services.",
    initials: "AI",
  },

  // TESTING & QUALITY
  {
    name: "Jest / React Testing Library",
    category: "Quality",
    description:
      "Unit and component testing for React applications.",
    initials: "JT",
  },
  {
    name: "Cypress",
    category: "Quality",
    description:
      "Automated end-to-end testing of application workflows.",
    initials: "CY",
  },
  {
    name: "NUnit",
    category: "Quality",
    description:
      "Automated unit and integration testing for .NET applications.",
    initials: "NU",
  },
  {
    name: "SonarQube",
    category: "Quality",
    description:
      "Static code analysis and maintainability quality gates.",
    initials: "SQ",
  },
];
