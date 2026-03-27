import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "React", primary: true },
    { name: "TypeScript", primary: true },
    { name: "Node.js", primary: true },
    { name: "Next.js", primary: true },
    { name: "Java", primary: false },
    { name: "Python", primary: false },
    { name: "TailwindCSS", primary: false },
    { name: "Supabase", primary: false },
    { name: "Firebase", primary: false },
    { name: "MySQL", primary: false },
    { name: "Three.js", primary: false },
    { name: "Docker", primary: false },
    { name: "AWS", primary: false },
    { name: "Figma", primary: false },
  ];

  return (
    <section id="about" ref={ref} className="py-[160px] px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 items-start">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="about-left"
      >
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-8 font-mono font-bold">
          01 — About Me
          <div className="w-12 h-[1px] bg-[var(--border)]" />
        </div>
        <p className="font-serif text-[clamp(24px,3vw,32px)] font-normal leading-[1.4] mb-10 text-[var(--text)]">
          I'm a <em>CSE student</em> who spends 10% of my time actually coding and 90% wondering why it's broken — only to find a missing semicolon.
        </p>
        <div className="space-y-6 text-[13px] text-[var(--muted)] leading-[2] font-mono">
          <p>
            Passionate about building real-world web applications that solve actual problems.<br/>
            From product management systems to AI-powered fitness apps — I ship things that work.
          </p>
          <p>
            Currently exploring: <strong className="text-[var(--text)]">AI integration, Cloud Architecture & Full-Stack SaaS</strong>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col sm:flex-row items-start gap-10">
          <div className="relative shrink-0">
            <div className="w-[180px] h-[180px] bg-[var(--surface)] overflow-hidden">
              <img 
                src="https://avatars.githubusercontent.com/u/190203470?v=4" 
                alt="Md Zeaul Hoque Zihad" 
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 scale-105"
              />
            </div>
            <div className="absolute -inset-3 border border-[var(--accent)] opacity-20 pointer-events-none" />
          </div>
          <div className="font-mono pt-2">
            <div className="mb-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mb-2">Social Identity</p>
              <p className="text-[14px] text-[var(--accent)] font-bold tracking-tight">@zihad2003</p>
            </div>
            <div className="mb-6">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mb-2">Connect</p>
              <p className="text-[12px] text-[var(--text)]">zhzihad2000@gmail.com</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mb-3">Recognition</p>
              <div className="flex gap-3">
                <span className="text-[10px] text-[var(--accent)] font-bold bg-[var(--surface)] px-2 py-1 italic">🦈 Pull Shark</span>
                <span className="text-[10px] text-[var(--accent)] font-bold bg-[var(--surface)] px-2 py-1 italic">⚡ YOLO</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] mb-6 font-bold">Expertise</p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`text-[10px] uppercase tracking-[0.15em] px-4 py-2 border border-[var(--border)] transition-all cursor-default font-mono ${
                  skill.primary ? "bg-[var(--accent)] text-[#0a0a0a] border-[var(--accent)] font-bold" : "text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
