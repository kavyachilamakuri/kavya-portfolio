
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090D19] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg font-bold text-white">
            kavya<span className="text-indigo-400">.dev</span>
          </p>

          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} Sri Kavya Chilamakuri.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          Designed and built with React, TypeScript & Motion.
        </p>

        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
