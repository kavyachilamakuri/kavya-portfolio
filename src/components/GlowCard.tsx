
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function GlowCard({
  children,
  delay = 0,
  className = "",
}: GlowCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? false : { opacity: 0, y: 25 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.045,
              y: -7,
              transition: {
                type: "spring",
                stiffness: 280,
                damping: 20,
              },
            }
      }
      className={`
        group relative rounded-2xl
        border border-white/10
        bg-[#171E35]/80 p-6
        shadow-lg shadow-black/10
        transition-[border-color,box-shadow,background-color]
        duration-300
        hover:z-10
        hover:border-indigo-400/70
        hover:bg-[#202A4B]
        hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
