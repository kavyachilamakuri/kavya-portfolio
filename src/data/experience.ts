
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "providence-lead",
    role: "Lead Software Engineer",
    company: "Providence India",
    period: "Oct 2024 – Present",
    location: "Hyderabad, India",
    current: true,
    summary:
      "Driving healthcare engineering initiatives through hands-on development, technical ownership, and cross-functional collaboration.",
    achievements: [
      "Led Lab Result Management delivery in 5 months against a planned 6-month timeline, coordinating with business and technical stakeholders.",
      "Quickly adopted modern Angular after promotion and delivered production-ready features in a new technology stack.",
      "Delivered lab result automation saving approximately 5 hours per nurse per day, earning stakeholder accolades.",
      "Brought Qualtrics capabilities in-house, reducing third-party contract spend by approximately 50%.",
      "Integrated GPT-4o with .NET microservices using asynchronous pipelines for AI-powered dietary recommendations.",
      "Reduced frontend bundle size by 12% through dependency and performance optimization.",
      "Mentored 5+ engineers and introduced structured code reviews, contributing to a 15% improvement in team velocity.",
      "Developed secure external review workflows with controlled guest access and authorization.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Angular",
      ".NET",
      "Azure",
      "SQL Server",
      "Microservices",
      "GPT-4o",
    ],
  },
  {
    id: "providence-senior",
    role: "Senior Software Engineer",
    company: "Providence India",
    period: "Feb 2023 – Oct 2024",
    location: "Hyderabad, India",
    summary:
      "Modernized healthcare applications and strengthened frontend quality, consistency, and maintainability.",
    achievements: [
      "Increased automated test coverage by 30% through standardized testing practices and quality gates.",
      "Led application-wide theming and UI redesign to improve consistency and maintainability.",
      "Selected as a jury member for Ideathon 2024.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Jest",
      "Cypress",
    ],
  },
  {
    id: "valuelabs-senior",
    role: "Senior Software Engineer",
    company: "ValueLabs",
    period: "Aug 2022 – Feb 2023",
    location: "India",
    summary:
      "Improved frontend scalability, cloud deployment workflows, and developer productivity.",
    achievements: [
      "Contributed to migrating a React monolith into independently maintainable Single-SPA microfrontends.",
      "Automated application deployments using Azure DevOps pipelines.",
      "Built scheduled Cosmos DB cleanup utilities, saving approximately 1.5 developer hours per day.",
      "Established SonarQube quality gates, maintaining an 85%+ quality score.",
    ],
    technologies: [
      "React",
      "Single-SPA",
      "TypeScript",
      "Azure DevOps",
      "Cosmos DB",
      "SonarQube",
    ],
  },
  {
    id: "valuelabs-engineer",
    role: "Software Engineer",
    company: "ValueLabs",
    period: "Aug 2020 – Jul 2022",
    location: "India",
    summary:
      "Built enterprise applications and resilient integrations supporting travel operations.",
    achievements: [
      "Developed a React-based travel operations platform covering customer management, cost estimation, and trip workflows.",
      "Implemented SFTP auto-retry mechanisms to improve reliability and reduce recurring operational failures.",
      "Integrated backend services using REST APIs and managed complex frontend workflows with Redux Saga.",
    ],
    technologies: [
      "React",
      "Redux Saga",
      "REST APIs",
      "SFTP",
    ],
  },
  {
    id: "valuelabs-intern",
    role: "Software Engineering Intern",
    company: "ValueLabs",
    period: "Aug 2019 – Apr 2020",
    location: "India",
    summary:
      "Developed full-stack features and gained experience with event-driven architecture and automated testing.",
    achievements: [
      "Developed application features using React and .NET microservices.",
      "Implemented Kafka-based data pipelines following test-driven development practices.",
      "Created automated Cypress and NUnit tests and integrated Hotjar analytics.",
    ],
    technologies: [
      "React",
      ".NET",
      "Kafka",
      "Cypress",
      "NUnit",
    ],
  },
];
