
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
  {
    name: "React",
    category: "Frontend",
    description: "Reusable components and scalable UI architecture",
    initials: "R",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe frontend application development",
    initials: "TS",
  },
  
{
  name: "AngularJS",
  category: "Frontend",
  description:
    "Rapidly adopted a new frontend framework to deliver healthcare lab result management workflows.",
  initials: "A",
},

  {
    name: "Redux Toolkit",
    category: "Frontend",
    description: "Predictable application state management",
    initials: "RTK",
  },
  {
    name: "Single-SPA",
    category: "Architecture",
    description: "Independent microfrontend applications",
    initials: "SPA",
  },
  {
    name: "ASP.NET Core",
    category: "Backend",
    description: "REST APIs and microservices using C#",
    initials: "C#",
  },
  {
    name: "Entity Framework Core",
    category: "Backend",
    description: "ORM-based data access and persistence",
    initials: "EF",
  },
  {
    name: "Azure Functions",
    category: "Azure",
    description: "Serverless and scheduled background workflows",
    initials: "ƒ",
  },
  {
    name: "Azure DevOps",
    category: "Azure",
    description: "CI/CD pipelines and automated deployments",
    initials: "AZ",
  },
  {
    name: "Azure Blob Storage",
    category: "Azure",
    description: "Cloud object storage and secure file uploads",
    initials: "BS",
  },
  {
    name: "SQL Server",
    category: "Databases",
    description: "Relational databases, joins, and T-SQL",
    initials: "SQL",
  },
  {
    name: "Cosmos DB",
    category: "Databases",
    description: "NoSQL storage and scheduled cleanup utilities",
    initials: "DB",
  },
  {
    name: "Apache Kafka",
    category: "Architecture",
    description: "Event-driven messaging and asynchronous processing",
    initials: "K",
  },
  {
    name: "Microservices",
    category: "Architecture",
    description: "Distributed service design and integration",
    initials: "MS",
  },
  {
    name: "Cypress",
    category: "Quality",
    description: "Automated end-to-end testing",
    initials: "CY",
  },
  {
    name: "Jest / RTL",
    category: "Quality",
    description: "Frontend unit and component testing",
    initials: "JT",
  },
  {
    name: "SonarQube",
    category: "Quality",
    description: "Static analysis and engineering quality gates",
    initials: "SQ",
  },
];
