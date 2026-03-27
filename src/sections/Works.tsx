import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PROJECTS = [
  {
    id: "001",
    title: "BigBazar Product Manager",
    category: "E-Commerce · Full-Stack",
    description: "A full-stack web app for small businesses to manage and showcase products. Features an admin panel for product CRUD, image/video uploads, and badge assignments. Customers can browse by category and order via WhatsApp or Messenger.",
    tech: ["React", "Supabase", "TailwindCSS", "JavaScript", "Vite"],
    footerInfo: "226 commits",
    link: "https://github.com/zihad2003/bigbazar-Products-Price-List"
  },
  {
    id: "002",
    title: "FitDay.ai",
    category: "AI · Health Tech",
    description: "Smart Fitness. Balanced Life. An AI-powered fitness platform designed to help users track workouts, balance nutrition, and build healthy habits with intelligent recommendations.",
    tech: ["TypeScript", "React", "AI/ML", "Next.js"],
    footerInfo: "TypeScript",
    link: "https://github.com/zihad2003/fitday.ai"
  },
  {
    id: "003",
    title: "Kiddoz Childcare System",
    category: "DBMS · AI · EdTech",
    description: "A comprehensive childcare management system built as a DBMS project. Integrates AI and smart features for managing child records, staff schedules, attendance tracking, and parent communication.",
    tech: ["JavaScript", "MySQL", "Node.js", "Express"],
    footerInfo: "JavaScript",
    link: "https://github.com/zihad2003/kiddoz-childcare-system"
  },
  {
    id: "004",
    title: "Radiance — Ladies Salon",
    category: "Web App · Beauty",
    description: "A modern web application for a ladies salon — featuring service listings, appointment booking flow, and a polished UI designed to attract and engage customers online.",
    tech: ["JavaScript", "React", "CSS3", "HTML5"],
    footerInfo: "JavaScript",
    link: "https://github.com/zihad2003/Radiance"
  },
  {
    id: "005",
    title: "YOLOv8 — Object Detection",
    category: "Computer Vision · ML",
    description: "Implementation and experimentation with YOLOv8 — one of the most powerful real-time object detection models. Exploring computer vision applications and AI model integration.",
    tech: ["Python", "YOLOv8", "Computer Vision", "Machine Learning"],
    footerInfo: "Python",
    link: "https://github.com/zihad2003/yolov8",
    isWide: true,
    bgText: "CV"
  },
];

export function Works() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="bg-[var(--surface)] py-[160px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-12 font-mono font-bold">
              02 — Selected Work
              <div className="w-12 h-[1px] bg-[var(--border)]" />
            </div>
            <h2 className="font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1] tracking-tight text-[var(--text)]">
              Digital<br/><span className="italic text-[var(--accent)]">Solutions</span>
            </h2>
          </motion.div>
          <motion.a 
            whileHover={{ y: -3, color: 'var(--accent)', borderColor: 'var(--accent)' }}
            href="https://github.com/zihad2003?tab=repositories" 
            target="_blank"
            className="border border-[var(--border)] text-[var(--muted)] px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all font-mono"
          >
            Explore Repo ↗
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`project-card group bg-[var(--bg)] p-12 relative overflow-hidden transition-all hover:-translate-y-1 ${project.isWide ? "md:col-span-2" : ""}`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-12">
                    <div className="text-[10px] tracking-[0.2em] text-[var(--muted)] mb-8 font-mono">{project.id}</div>
                    <span className="inline-block text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 bg-[var(--surface)] text-[var(--accent)] mb-6 font-mono font-bold">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-[clamp(24px,3vw,36px)] font-bold mb-6 group-hover:text-[var(--accent)] transition-colors tracking-tight text-[var(--text)]">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-[var(--muted)] leading-[1.8] mb-10 max-w-[480px] font-mono">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-12">
                      {project.tech.map(t => (
                        <span key={t} className="text-[9px] tracking-[0.1em] px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center border-t border-[var(--border)] pt-8">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] flex items-center gap-3 font-mono font-bold">
                        Source Code <span className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                      </span>
                      <span className="text-[10px] text-[var(--muted)] font-mono">{project.footerInfo}</span>
                    </div>
                  </div>
                  {project.bgText && (
                    <div className="absolute right-0 top-0 font-serif text-[180px] text-[var(--accent)] opacity-[0.03] font-black leading-none select-none pointer-events-none hidden lg:block">
                      {project.bgText}
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(200,169,110,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
