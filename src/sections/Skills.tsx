
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import GlowCard from "../components/GlowCard";

import {
  skills,
  categories,
  type SkillCategory,
} from "../data/skills";

type Filter = "All" | SkillCategory;

export default function Skills() {
  const [active, setActive] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  const filteredSkills =
    active === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === active
        );

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
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
            02 / TECHNICAL EXPERTISE
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I{" "}
            <span className="text-indigo-400">
              work with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            From intuitive frontend experiences to
            resilient backend services, cloud integrations,
            and event-driven architectures.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === category
                  ? "border-indigo-400 bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border-white/10 bg-[#171E35] text-slate-400 hover:border-indigo-400/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated skills grid */}
        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.9 }
                }
                animate={{ opacity: 1, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.25 }}
              >
                <GlowCard className="h-full">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 font-bold text-indigo-300 transition-colors group-hover:bg-indigo-500/30">
                    {skill.initials}
                  </div>

                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {skill.description}
                  </p>

                  <span className="mt-5 inline-block text-xs font-medium text-indigo-400">
                    {skill.category}
                  </span>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
