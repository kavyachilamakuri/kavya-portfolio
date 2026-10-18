
import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Server,
  Workflow,
  Cloud,
  Database,
} from "lucide-react";

export interface ArchitectureNode {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  responsibilities: string[];
  icon: LucideIcon;
}

export const architectureNodes: ArchitectureNode[] = [
  {
    id: "frontend",
    title: "Frontend Applications",
    technologies: ["React", "Angular", "TypeScript"],
    description:
      "Modern interfaces for clinical and operational workflows.",
    responsibilities: [
      "Reusable components and state management",
      "Form validation and user experience",
      "Authentication-aware API integration",
    ],
    icon: Monitor,
  },
  {
    id: "backend",
    title: "Backend Services",
    technologies: ["ASP.NET Core", "C#", "REST APIs"],
    description:
      "Service layer responsible for business logic and API orchestration.",
    responsibilities: [
      "Business rules and validation",
      "Authorization and access control",
      "Service integration and error handling",
    ],
    icon: Server,
  },
  {
    id: "messaging",
    title: "Event Messaging",
    technologies: ["Kafka", "Azure Service Bus"],
    description:
      "Asynchronous communication for decoupled workflows.",
    responsibilities: [
      "Event publishing and consumption",
      "Retry and failure handling",
      "Decoupled service communication",
    ],
    icon: Workflow,
  },
  {
    id: "processing",
    title: "Background Processing",
    technologies: ["Azure Functions"],
    description:
      "Automated processing triggered by events or schedules.",
    responsibilities: [
      "Scheduled tasks and automation",
      "Event-triggered processing",
      "Monitoring and operational reliability",
    ],
    icon: Cloud,
  },
  {
    id: "database",
    title: "Data Persistence",
    technologies: ["SQL Server", "Cosmos DB", "EF Core"],
    description:
      "Persistence layer for application and workflow data.",
    responsibilities: [
      "Relational and NoSQL data modeling",
      "Query optimization",
      "Reliable data access",
    ],
    icon: Database,
  },
];
