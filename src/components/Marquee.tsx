import { motion } from "framer-motion";

export function Marquee() {
  const techs = ["React", "Next.js", "TypeScript", "Supabase", "TailwindCSS", "Node.js", "Firebase", "Three.js", "Python", "Java", "AWS", "Docker"];
  
  return (
    <div className="overflow-hidden py-6 border-y border-[var(--border)] bg-[var(--bg)]">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {techs.map((tech) => (
          <div key={tech} className="flex items-center gap-12 text-[13px] italic text-[var(--muted)] shrink-0 font-serif">
            {tech} <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
          </div>
        ))}
        {techs.map((tech) => (
          <div key={`${tech}-2`} className="flex items-center gap-12 text-[13px] italic text-[var(--muted)] shrink-0 font-serif">
            {tech} <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
