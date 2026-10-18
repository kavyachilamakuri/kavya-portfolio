
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        updateVisibility
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.2,
          }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
        >
          <ArrowUp size={21} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
