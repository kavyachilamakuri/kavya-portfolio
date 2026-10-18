
import { motion, useReducedMotion } from "motion/react";

type TypewriterProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
};

export default function Typewriter({
  text,
  className = "",
  delay = 0,
  speed = 0.065,
}: TypewriterProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {Array.from(text).map((char, index) => (
          <motion.span
            key={`${index}-${char}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.01,
              delay: delay + index * speed,
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
