
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Typewriter from "./components/Typewriter";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";
import Impact from "./sections/Impact";
import Projects from "./sections/Projects";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <>
    <a
  href="#main-content"
  className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-indigo-500 px-4 py-3 font-semibold text-white shadow-xl transition-transform focus:translate-y-0"
>
  Skip to main content
</a>
    <Navbar />
    <main className="min-h-screen bg-[#0B1020] text-white" id="main-content">
      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* Background glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        {/* Animated hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium tracking-widest text-emerald-400">
            HELLO, I'M
          </p>

          {/* <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Sri Kavya
            <span className="block text-indigo-400">
              Chilamakuri
            </span>
          </h1> */}
          
         <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          <Typewriter
           text="Sri Kavya"
           delay={0.3}
           speed={0.09}
          />

           <span className="block text-indigo-400">
            <Typewriter
             text="Chilamakuri"
             delay={1.2}
             speed={0.09}
            />
         </span>
        </h1>


          <h2 className="mt-6 text-xl text-slate-300 md:text-3xl">
            Lead Software Engineer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Turning complex challenges into scalable, impactful solutions through hands-on engineering, adaptability, and technical leadership.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-500 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-indigo-400"
            >
              Explore My Work
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="rounded-lg border border-slate-600 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:border-indigo-400"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/kavyachilamakuri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-indigo-400"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/kavyachilamakuri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-indigo-400"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 text-slate-400 hover:text-indigo-400"
        >
          <ArrowDown size={24} />
        </motion.a>
      </section>
      <About />
      <Skills />
      <Experience />
      <Impact />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
    </>
  );
}

export default App;
