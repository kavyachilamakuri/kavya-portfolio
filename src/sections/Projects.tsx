
import {
  motion,
  useReducedMotion,
} from "motion/react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
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

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Engineering solutions with{" "}
            <span className="text-indigo-400">
              real impact.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of engineering initiatives spanning
            healthcare automation, frontend architecture,
            platform modernization, and generative AI.
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-slate-500">
          Selected professional work is summarized at a high level
          to respect employer confidentiality.
        </p>
      </div>
    </section>
  );
}
