
import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useReducedMotion,
} from "motion/react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1.6,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();

  const [count, setCount] = useState(
    reduceMotion ? value : 0
  );

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const next = value * eased;

      setCount(
        Number.isInteger(value)
          ? Math.round(next)
          : Math.round(next * 10) / 10
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [inView, value, duration, reduceMotion]);

  const displayedValue = reduceMotion ? value : count;

  return (
    <span ref={ref} className="tabular-nums">
      {displayedValue}
      {suffix}
    </span>
  );
}
