import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: "110%" },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] as any 
      } 
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 overflow-hidden">
      {/* Background Floating Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <div className="font-serif font-black text-[clamp(120px,22vw,320px)] opacity-[0.02] tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px var(--accent)' }}>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            ZIHAD
          </motion.div>
        </div>
      </div>

      {/* Top Status and Year */}
      <div className="absolute top-12 left-6 md:left-12 right-6 md:right-12 flex justify-between items-start z-20">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-mono">
          <div className="w-[6px] h-[6px] rounded-full bg-[#4ade80] shadow-[0_0_10px_#4ade80]" />
          Available for work
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-mono">© 2025</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1400px] w-full"
      >
        <h1 className="font-serif text-[clamp(48px,8vw,110px)] font-black leading-[0.88] tracking-tighter mb-16 overflow-hidden">
          <motion.span variants={lineVariants} className="block text-[var(--text)]">Md Zeaul</motion.span>
          <motion.span variants={lineVariants} className="block text-[var(--accent)] italic">Hoque</motion.span>
          <motion.span variants={lineVariants} className="block text-[var(--text)]">Zihad</motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-t border-[var(--border)] pt-12"
        >
          <p className="max-w-[420px] text-[13px] leading-[1.8] text-[var(--muted)] font-mono">
            CSE Student & Full-Stack Developer.<br/>
            Building web apps with <span className="text-[var(--accent)] font-bold">React, Node.js & modern cloud stacks</span>.<br/>
            Based in Bangladesh.
          </p>
          
          <div className="flex flex-col gap-3 items-end">
            <motion.a
              whileHover={{ y: -2 }}
              href="#projects"
              className="bg-[var(--accent)] text-[#0a0a0a] px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              View Projects →
            </motion.a>
            <motion.a
              whileHover={{ y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
              href="https://github.com/zihad2003"
              target="_blank"
              className="border border-[var(--border)] text-[var(--muted)] px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all"
            >
              GitHub ↗
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 overflow-hidden">
         <motion.div 
            animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "top"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-b from-transparent to-[var(--accent)]"
         />
      </div>
    </section>
  );
}
