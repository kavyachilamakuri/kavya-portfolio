
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  Code2,
} from "lucide-react";

import GlowCard from "./GlowCard";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <GlowCard
      delay={index * 0.08}
      className="h-full"
    >
      <article className="flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
            {project.category}
          </span>

          {project.featured && (
            <span className="text-xs font-medium text-slate-500">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-indigo-300">
          {project.title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-xl border border-indigo-400/10 bg-indigo-500/5 p-4">
          <TrendingUp
            size={19}
            className="mt-0.5 shrink-0 text-indigo-400"
          />

          <p className="text-sm font-medium text-indigo-300">
            {project.impact}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={`project-details-${project.id}`}
          className="mt-6 flex w-full items-center justify-between border-t border-white/10 pt-5 text-left text-sm font-semibold text-white transition-colors hover:text-indigo-300"
        >
          {expanded ? "Hide case study" : "Explore case study"}

          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.25,
            }}
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`project-details-${project.id}`}
              initial={
                reduceMotion
                  ? false
                  : { height: 0, opacity: 0 }
              }
              animate={{ height: "auto", opacity: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { height: 0, opacity: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.3,
              }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-7">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
                    The Challenge
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
                    The Solution
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
                    Key Contributions
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {project.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-indigo-400"
                        />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex flex-wrap gap-4 border-t border-white/10 pt-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white"
                      >
                        <Code2 size={17} />
                        View Code
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white"
                      >
                        Live Demo
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </GlowCard>
  );
}
