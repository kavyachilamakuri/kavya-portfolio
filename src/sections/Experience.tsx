
import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";
import {
  BriefcaseBusiness,
  ChevronDown,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { experiences } from "../data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(
    "providence-lead"
  );
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const toggle = (id: string) => {
    setExpanded((current) => (current === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
            03 / PROFESSIONAL JOURNEY
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Experience that drives{" "}
            <span className="text-indigo-400">impact.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-slate-400">
            From hands-on engineering to technical leadership,
            I've focused on building maintainable systems,
            improving delivery, and solving complex problems.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative mt-16"
        >
          {/* Timeline track */}
          <div className="absolute bottom-0 left-[11px] top-0 w-0.5 bg-white/10 md:left-[19px]" />

          {/* Animated progress */}
          <motion.div
            style={{
              scaleY: reduceMotion ? 1 : progress,
              transformOrigin: "top",
            }}
            className="absolute bottom-0 left-[11px] top-0 w-0.5 bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.8)] md:left-[19px]"
          />

          <div className="space-y-8">
            {experiences.map((job, index) => {
              const isExpanded = expanded === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: 30 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="relative pl-10 md:pl-16"
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute left-1 top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#0B1020] md:left-3 ${
                      job.current
                        ? "bg-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.8)]"
                        : "bg-slate-500"
                    }`}
                  />

                  <motion.article
                    whileHover={
                      reduceMotion ? undefined : { y: -4 }
                    }
                    className={`overflow-hidden rounded-2xl border bg-[#171E35]/80 transition-colors duration-300 ${
                      isExpanded
                        ? "border-indigo-400/60"
                        : "border-white/10 hover:border-indigo-400/40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(job.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`details-${job.id}`}
                      className="flex w-full items-start gap-4 p-6 text-left md:p-8"
                    >
                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 sm:flex">
                        <BriefcaseBusiness size={23} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-sm font-medium text-indigo-400">
                            {job.period}
                          </span>

                          {job.current && (
                            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
                          {job.role}
                        </h3>

                        <p className="mt-1 font-medium text-indigo-300">
                          {job.company}
                        </p>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {job.summary}
                        </p>

                        <span className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>

                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 shrink-0 text-slate-400"
                      >
                        <ChevronDown size={22} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`details-${job.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/10 px-6 pb-7 pt-6 md:px-8">
                            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
                              Key Contributions
                            </h4>

                            <ul className="space-y-4">
                              {job.achievements.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                                >
                                  <CheckCircle2
                                    size={18}
                                    className="mt-1 shrink-0 text-indigo-400"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>

                            <div className="mt-7 flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
