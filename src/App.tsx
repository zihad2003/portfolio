import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Works } from "./sections/Works";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";
import { Marquee } from "./components/Marquee";

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-[var(--accent)] selection:text-[#0a0a0a]">
      {/* Scroll to Top behavior is handled by anchor links */}
      
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="w-full max-w-[1400px] h-[1px] bg-[var(--border)] mx-auto opacity-40 px-6 md:px-12" />
        
        <Marquee />
        
        <About />

        <div className="w-full max-w-[1400px] h-[1px] bg-[var(--border)] mx-auto opacity-40 px-6 md:px-12" />
        
        <Works />

        <div className="w-full max-w-[1400px] h-[1px] bg-[var(--border)] mx-auto opacity-40 px-6 md:px-12" />

        <TechStack />

        <div className="w-full max-w-[1400px] h-[1px] bg-[var(--border)] mx-auto opacity-40 px-6 md:px-12" />

        <Contact />
      </main>

      <footer className="py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-[var(--border)] gap-3 text-center">
        <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] font-mono">© 2025 Md Zeaul Hoque Zihad</span>
        <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] font-mono">Built with React · Vite · Tailwind</span>
        <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] font-mono">Bangladesh 🇧🇩</span>
      </footer>
    </div>
  );
}
