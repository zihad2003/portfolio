import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function TechStack() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Three.js", "Vite", "HTML5 / CSS3"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "Java / Spring", "Python", "Supabase", "Firebase", "MySQL"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Google Cloud", "Cloudflare", "Vercel / Netlify", "Docker", "Git / GitHub", "Figma / Canva"]
    }
  ];

  return (
    <section id="tech" ref={ref} className="py-[160px] px-6 md:px-12 text-center max-w-[1400px] mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-12 font-mono font-bold">
          <div className="w-12 h-[1px] bg-[var(--border)]" />
          03 — Tech Stack
          <div className="w-12 h-[1px] bg-[var(--border)]" />
        </div>
        <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1] tracking-tight mb-20 text-[var(--text)]">
          Tools I<br/><span className="italic text-[var(--accent)]">Work With</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-24">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-[var(--surface)] p-12 text-left relative group border border-transparent hover:border-[rgba(200,169,110,0.2)] transition-colors"
            >
              <div className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] mb-8 font-mono font-bold">
                {cat.title}
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-4 text-[13px] text-[var(--muted)] font-mono hover:text-[var(--text)] transition-colors">
                     <span className="text-[var(--accent)] text-[12px] opacity-40 group-hover:opacity-100 transition-opacity">▸</span>
                     {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
