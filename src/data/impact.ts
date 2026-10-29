
export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  category: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    id: "lab-automation",
    value: 5,
    suffix: "h",
    label: "Nursing Time Saved Daily",
    description:
      "Automated lab result workflows, saving approximately 5 hours of nursing effort per working day.",
    category: "Healthcare Automation",
  },
  {
    id: "early-delivery",
    value: 1,
    suffix: " month",
    label: "Ahead of Schedule",
    description:
      "Delivered the Lab Result Management feature in 5 months against a planned 6-month timeline.",
    category: "Delivery Excellence",
  },
  {
    id: "cost",
    value: 50,
    suffix: "%",
    label: "Reduction in Vendor Spend",
    description:
      "Brought Qualtrics capabilities in-house, reducing third-party contract costs.",
    category: "Cost Efficiency",
  },
  {
    id: "coverage",
    value: 30,
    suffix: "%",
    label: "Increase in Test Coverage",
    description:
      "Improved automated testing practices and engineering quality gates.",
    category: "Quality",
  },
  {
    id: "velocity",
    value: 15,
    suffix: "%",
    label: "Improvement in Team Velocity",
    description:
      "Introduced structured code reviews and improved development practices.",
    category: "Leadership",
  },
  {
    id: "automation",
    value: 1.5,
    suffix: "h",
    label: "Developer Time Saved Daily",
    description:
      "Automated recurring Cosmos DB cleanup activities.",
    category: "Automation",
  },
  {
    id: "bundle",
    value: 12,
    suffix: "%",
    label: "Reduction in Bundle Size",
    description:
      "Optimized frontend dependencies and application performance.",
    category: "Performance",
  },
  {
    id: "mentorship",
    value: 5,
    suffix: "+",
    label: "Engineers Mentored",
    description:
      "Supported engineers through reviews, technical guidance, and delivery.",
    category: "People",
  },
];

export const recognitions = [
  {
    title: "BRAVO Award — 2× Recipient",
    description:
      "Recognized with BRAVO Awards in 2025 and 2026 for engineering contributions and delivery excellence.",
  },
  {
    title: "Lab Result Management — Delivery Recognition",
    description:
      "Received stakeholder accolades for coordinating and successfully delivering Lab Result Management one month ahead of schedule.",
  },
  {
    title: "Hack4Health 2024 — Runner-Up",
    description:
      "Recognized for developing an AI-powered nutrition assistant using GPT-4o.",
  },
  {
    title: "Employee of the Quarter — ValueLabs",
    description:
      "Recognized for engineering contributions in August 2021.",
  },
];
