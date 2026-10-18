
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  Award,
  TrendingUp,
} from "lucide-react";

import GlowCard from "../components/GlowCard";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  impactMetrics,
  recognitions,
} from "../data/impact";

export default function Impact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="impact"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
            04 / ENGINEERING IMPACT
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Results, not just{" "}
            <span className="text-indigo-400">
              responsibilities.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-slate-400">
            Engineering impact is about delivering
            measurable improvements in reliability,
            performance, cost efficiency, and team effectiveness.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((metric, index) => (
            <GlowCard
              key={metric.id}
              delay={index * 0.08}
              className="h-full"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  {metric.category}
                </span>

                <TrendingUp
                  size={20}
                  className="text-slate-500 transition-colors group-hover:text-indigo-400"
                />
              </div>

              <div className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {metric.label}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {metric.description}
              </p>

              <div className="mt-6 flex justify-end">
                <ArrowUpRight
                  size={19}
                  className="text-indigo-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Awards */}
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <Award size={25} className="text-indigo-400" />

            <h3 className="text-2xl font-bold text-white">
              Awards & Recognition
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {recognitions.map((award, index) => (
              <GlowCard key={award.title} delay={index * 0.1}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Award size={24} />
                </div>

                <h4 className="text-xl font-semibold text-white">
                  {award.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {award.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
