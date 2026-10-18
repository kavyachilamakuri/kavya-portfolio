
import {
  HeartPulse,
  PanelsTopLeft,
  BrainCircuit,
  Blocks,
} from "lucide-react";

import type { Project } from "../data/projects";

interface ProjectVisualProps {
  project: Project;
}

const visualConfig = {
  "lab-results": {
    Icon: HeartPulse,
    gradient: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-300",
    label: "Clinical Automation",
  },
  medpearl: {
    Icon: PanelsTopLeft,
    gradient: "from-indigo-500/20 to-blue-500/5",
    iconColor: "text-indigo-300",
    label: "Platform Engineering",
  },
  "ai-nutrition": {
    Icon: BrainCircuit,
    gradient: "from-purple-500/20 to-fuchsia-500/5",
    iconColor: "text-purple-300",
    label: "Applied AI",
  },
  microfrontends: {
    Icon: Blocks,
    gradient: "from-sky-500/20 to-cyan-500/5",
    iconColor: "text-sky-300",
    label: "Frontend Architecture",
  },
};

export default function ProjectVisual({
  project,
}: ProjectVisualProps) {
  const config =
    visualConfig[
      project.id as keyof typeof visualConfig
    ] ?? visualConfig.medpearl;

  const { Icon, gradient, iconColor, label } = config;

  return (
    <div
      className={`group/visual relative mb-7 flex h-44 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${gradient}`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative rings */}
      <div className="absolute h-36 w-36 rounded-full border border-white/10 transition-transform duration-500 group-hover/visual:scale-125" />
      <div className="absolute h-24 w-24 rounded-full border border-white/10 transition-transform duration-500 group-hover/visual:scale-110" />

      {/* Project icon */}
      <div
        className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#11182B]/80 shadow-xl transition-transform duration-500 group-hover/visual:scale-110 ${iconColor}`}
      >
        <Icon size={39} strokeWidth={1.5} />
      </div>

      <span className="absolute bottom-4 left-4 text-xs font-medium tracking-wide text-slate-300">
        {label}
      </span>
    </div>
  );
}
