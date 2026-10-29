
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Cloud,
  Users,
  Database,
  GitBranch,
  Gauge,
} from "lucide-react";
import GlowCard from "../components/GlowCard";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "React, Angular, TypeScript, Redux Toolkit, Single-SPA microfrontends, and reusable UI systems.",
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Engineering",
    description:
      "ASP.NET Core, C#, REST APIs, Azure Functions, and asynchronous service workflows.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "SQL Server, Entity Framework Core, Cosmos DB, query optimization, and data access patterns.",
  },
  {
    icon: GitBranch,
    title: "Event-Driven Systems",
    description:
      "Apache Kafka, microservices, asynchronous processing, and resilient service integrations.",
  },
  {
    icon: Gauge,
    title: "Performance & Quality",
    description:
      "Frontend optimization, Jest, Cypress, NUnit, SonarQube, and automated CI/CD pipelines.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "End-to-end ownership, mentoring, code reviews, architecture decisions, and cross-functional delivery.",
  },
];

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "5+", label: "Engineers Mentored" },
  { value: "50%", label: "Vendor Cost Reduction" },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-24 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading and introduction */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
            01 / ABOUT ME
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Engineering beyond{" "}
            <span className="text-indigo-400">
              the interface.
            </span>
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-base leading-8 text-slate-400 md:text-lg">
            <p>
              I'm a Lead Software Engineer with 6+ years of
              experience building and modernizing healthcare
              and enterprise applications.
            </p>

            <p>
              I enjoy being hands-on while taking ownership
              of delivery. From learning modern Angular to
              ship a critical feature ahead of schedule to
              integrating AI into healthcare workflows,
              I thrive on solving meaningful problems.
            </p>

            <p>
              I value curiosity, adaptability, and
              reliability. Whether I'm contributing
              independently or collaborating across teams,
              I focus on building solutions that create
              lasting impact.
            </p>
          </div>
        </motion.div>

        {/* Technical strengths */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <GlowCard
                key={item.title}
                delay={index * 0.08}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
                    <Icon size={25} />
                  </div>

                  <span className="text-xs text-slate-600 transition-colors group-hover:text-indigo-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </GlowCard>
            );
          })}
        </div>

        {/* Career highlights */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <GlowCard
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <p className="text-4xl font-bold text-indigo-400 transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </p>

              <p className="mt-3 text-sm text-slate-400">
                {stat.label}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
