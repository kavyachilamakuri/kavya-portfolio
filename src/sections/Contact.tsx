
import { motion, useReducedMotion } from "motion/react";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlowCard from "../components/GlowCard";

const contactLinks = [
  {
    label: "Email",
    value: "kavya.chilamakuri@gmail.com",
    href: "mailto:kavya.chilamakuri@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "kavyachilamakuri",
    href: "https://github.com/kavyachilamakuri",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/kavya-chilamakuri",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B1020] px-6 py-28 lg:px-12"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-sm font-semibold tracking-widest text-indigo-400">
            03 / GET IN TOUCH
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's build something{" "}
            <span className="text-indigo-400">impactful.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I'm interested in opportunities involving
            engineering leadership, scalable frontend systems,
            .NET services, and cloud-native architecture.
            Feel free to reach out.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={17} className="text-indigo-400" />
            Hyderabad, India
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <GlowCard key={item.label} delay={index * 0.1}>
                <a
                  href={item.href}
                  target={
                    item.label === "Email" ? undefined : "_blank"
                  }
                  rel={
                    item.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="block"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                      <Icon size={24} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-slate-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
                    />
                  </div>

                  <p className="text-sm text-slate-400">
                    {item.label}
                  </p>

                  <p className="mt-2 break-words font-semibold text-white transition-colors group-hover:text-indigo-300">
                    {item.value}
                  </p>
                </a>
              </GlowCard>
            );
          })}
        </div>

        {/* Bottom call to action */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-indigo-400/20 bg-indigo-500/5 p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white">
            Have an interesting opportunity?
          </h3>

          <p className="mt-3 text-slate-400">
            Let's connect and discuss how I can contribute.
          </p>

          <a
            href="mailto:kavya.chilamakuri@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-indigo-400"
          >
            Send me an email
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
