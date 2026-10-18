
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, Cloud, Users,Database,GitBranch,Gauge } from "lucide-react";
import GlowCard from "../components/GlowCard";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Frontend Architecture",
//     description:
//       "React, TypeScript, Microfrontends, and scalable UI systems.",
//   },
//   {
//     icon: Cloud,
//     title: "Backend & Cloud",
//     description:
//       ".NET, Azure Functions, SQL Server, APIs, and event-driven systems.",
//   },
//   {
//     icon: Users,
//     title: "Technical Leadership",
//     description:
//       "Architecture decisions, mentoring, code reviews, and engineering delivery.",
//   },
// ];


// import {
//   Code2,
//   Cloud,
//   Database,
//   GitBranch,
//   Gauge,
//   Users,
// } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "React, TypeScript, Redux Toolkit, Single-SPA microfrontends, reusable component systems, and responsive UI engineering.",
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Engineering",
    description:
      "ASP.NET Core, C#, REST APIs, Azure Functions, cloud integrations, and asynchronous service workflows.",
  },
  {
    icon: Database,
    title: "Database Engineering",
    description:
      "SQL Server, Entity Framework Core, Cosmos DB, data access patterns, query optimization, and OData filtering.",
  },
  {
    icon: GitBranch,
    title: "Distributed & Event-Driven Systems",
    description:
      "Apache Kafka, event-driven architecture, microservices, asynchronous processing, and resilient integrations.",
  },
  {
    icon: Gauge,
    title: "Performance & Quality",
    description:
      "Bundle optimization, Jest, Cypress, NUnit, SonarQube quality gates, automated testing, and CI/CD.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "End-to-end ownership, architecture decisions, mentoring 5+ engineers, code reviews, and cross-functional delivery.",
  },
];


const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "5+", label: "Engineers Mentored" },
  { value: "50%", label: "Vendor Cost Reduction" },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
            01 / ABOUT ME
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Engineering beyond{" "}
            <span className="text-indigo-400">the interface.</span>
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                I'm a Lead Software Engineer with 6+ years of
                experience designing and delivering scalable
                web applications and distributed services.
              </p>

              <p>
                At Providence India, I work across React,
                TypeScript, .NET microservices, and cloud
                technologies, combining hands-on engineering
                with architecture decisions, delivery ownership,
                and mentoring.
              </p>

              <p>
                My experience includes microfrontend
                architecture, event-driven systems, Azure
                integrations, SQL Server, and performance
                optimization.
              </p>
            </div>

            {/* <div className="grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: 25 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    whileHover={
                      reduceMotion ? undefined : { y: -4 }
                    }
                    className="group flex gap-4 rounded-xl border border-white/10 bg-[#171E35]/70 p-5 transition-colors hover:border-indigo-400/40"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="ml-auto shrink-0 text-slate-600 transition-colors group-hover:text-indigo-400"
                    />
                  </motion.div>
                );
              })}
            </div> */}
            
<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {highlights.map((item, index) => {
    const Icon = item.icon;

    return (
      <GlowCard key={item.title} delay={index * 0.08}>
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

          </div>
        </motion.div>

        {/* <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-xl border border-white/10 bg-[#171E35] p-6 text-center"
            >
              <p className="text-4xl font-bold text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div> */}

        
<div className="mt-16 grid gap-5 sm:grid-cols-3">
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
