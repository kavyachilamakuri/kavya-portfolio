
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
];

const allLinks = [
  ...navLinks,
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const reduceMotion = useReducedMotion();

  // Detect scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = allLinks
        .map((link) =>
          document.getElementById(link.href.slice(1))
        )
        .filter(
          (section): section is HTMLElement =>
            section !== null
        );

      let current = "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) {
          current = section.id;
        }
      }

      // Highlight the last section when near page bottom
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (nearBottom && sections.length > 0) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Mobile menu behavior
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={
        reduceMotion ? false : { y: -80, opacity: 0 }
      }
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-white/10 bg-[#0B1020]/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12"
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          whileHover={
            reduceMotion ? undefined : { scale: 1.05 }
          }
          whileTap={
            reduceMotion ? undefined : { scale: 0.97 }
          }
          className="text-2xl font-bold tracking-tight text-white"
        >
          kavya
          <span className="text-indigo-400">.dev</span>
        </motion.a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.slice(1);

            return (
              <motion.a
                key={link.name}
                href={link.href}
                aria-current={
                  isActive ? "location" : undefined
                }
                whileHover={
                  reduceMotion ? undefined : { y: -2 }
                }
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}

                {/* Animated active underline */}
                {isActive ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-indigo-400"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-indigo-400/60 transition-all duration-300 group-hover:w-full" />
                )}
              </motion.a>
            );
          })}

          {/* Contact CTA */}
          <motion.a
            href="#contact"
            aria-current={
              activeSection === "contact"
                ? "location"
                : undefined
            }
            whileHover={
              reduceMotion ? undefined : { scale: 1.05 }
            }
            whileTap={
              reduceMotion ? undefined : { scale: 0.97 }
            }
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors ${
              activeSection === "contact"
                ? "bg-indigo-400 shadow-lg shadow-indigo-500/30"
                : "bg-indigo-500 hover:bg-indigo-400"
            }`}
          >
            Contact
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 rounded-lg border border-white/10 p-2 text-white transition-colors hover:border-indigo-400 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: -16 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -16 }
            }
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-white/10 bg-[#0B1020]/95 p-6 shadow-xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {allLinks.map((link, index) => {
                const isActive =
                  activeSection === link.href.slice(1);

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={
                      isActive ? "location" : undefined
                    }
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: -15 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduceMotion
                        ? 0
                        : index * 0.05,
                    }}
                    className={`rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                      isActive
                        ? "bg-indigo-500/10 text-indigo-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
