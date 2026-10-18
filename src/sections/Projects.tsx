
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import ProjectCard from "../components/ProjectCard";
import {
  projects,
  type ProjectCategory,
} from "../data/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = [
  "All",
  "Healthcare",
  "Frontend",
  "AI",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  const reduceMotion = useReducedMotion();

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" ||
      project.filterCategory === activeFilter
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
            05 / FEATURED WORK
          </p>

          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineering solutions with{" "}
            <span className="text-indigo-400">
              real impact.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Selected engineering initiatives spanning
            healthcare automation, frontend architecture,
            platform modernization, and generative AI.
          </p>
        </motion.div>

        {/* Category filters */}
        <div
          role="group"
          aria-label="Filter projects"
          className="mt-10 flex flex-wrap gap-3"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                  isActive
                    ? "border-indigo-400 bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                    : "border-white/10 bg-white/5 text-slate-400 hover:border-indigo-400/40 hover:text-white"
                }`}
              >
                {filter === "All"
                  ? "All Projects"
                  : filter}
              </button>
            );
          })}
        </div>

        {/* Animated project grid */}
        <motion.div
          layout={!reduceMotion}
          className="mt-10 grid min-w-0 grid-cols-1 items-start gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout={!reduceMotion}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.95, y: 15 }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.95, y: -10 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                }}
                className="min-w-0"
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-xs leading-6 text-slate-500">
          Professional work is summarized at a high level
          to respect employer confidentiality.
        </p>
      </div>
    </section>
  );
}
