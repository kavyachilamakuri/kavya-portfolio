
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
      "Leading scalable healthcare platform engineering, architecture decisions, and cross-functional delivery.",
    achievements: [
      "Brought Qualtrics implementation in-house, reducing third-party contract spend by approximately 50%.",
      "Integrated GPT-4o with .NET microservices through asynchronous pipelines for AI-powered dietary recommendations.",
      "Reduced frontend bundle size by 12% through dependency and performance optimization.",
      "Mentored 5+ engineers and introduced code review checklists, contributing to 15% improvement in team velocity.",
      "Designed secure external review workflows with controlled guest access and authorization.",
    ],
    technologies: [
      "React",
      "TypeScript",
      ".NET",
      "Azure",
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
      "Delivered UI architecture improvements, platform redesigns, and automated quality engineering.",
    achievements: [
      "Increased test coverage by 30% through standardized testing and quality gates.",
      "Led application-wide theming and UI redesign to improve maintainability and consistency.",
      "Selected as jury member for Ideathon 2024.",
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
      "Modernized frontend architecture and automated cloud deployment workflows.",
    achievements: [
      "Decomposed a monolithic React application into Single-SPA microfrontends.",
      "Automated deployments using Azure Pipelines.",
      "Built scheduled Cosmos DB cleanup utilities, saving approximately 1.5 hours of developer effort per day.",
      "Established SonarQube quality gates, maintaining an 85%+ quality score.",
    ],
    technologies: [
      "React",
      "Single-SPA",
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
      "Developed travel operations applications and reliable backend integrations.",
    achievements: [
      "Built a React travel operations platform with customer management, automated cost estimation, and trip lifecycle workflows.",
      "Implemented SFTP auto-retry mechanisms to reduce recurring operational failures.",
      "Worked with Redux Saga and backend service integrations.",
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
      "Built full-stack application features and event-driven integrations.",
    achievements: [
      "Developed features using React and .NET microservices.",
      "Implemented Kafka-based data pipelines using test-driven development.",
      "Created Cypress and NUnit tests and integrated Hotjar analytics.",
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
