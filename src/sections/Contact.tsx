import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const copyEmail = () => {
    navigator.clipboard.writeText('zhzihad2000@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/zihad2003" },
    { label: "Facebook", href: "https://facebook.com/Zihad.Aurko" },
    { label: "Instagram", href: "https://instagram.com/zihad_aurko" },
  ];

  return (
    <section id="contact" ref={ref} className="bg-[var(--surface)] py-[120px] px-6 md:px-12 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] mb-12 font-mono">
            04 — Get In Touch
          </div>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-tight mb-6 text-[var(--text)]">
            Let's Build<br/><span className="italic text-[var(--accent)]">Something</span>
          </h2>
          <p className="text-[13px] text-[var(--muted)] leading-[1.8] max-w-[400px] mx-auto mb-10 font-mono">
            Available for freelance projects, collaborations, and full-time opportunities. Let's talk.
          </p>

          <button
            onClick={copyEmail}
            className="font-serif text-[clamp(28px,4vw,52px)] font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors block mx-auto mb-10 break-all cursor-pointer underline-offset-8 hover:underline"
          >
            zhzihad2000@gmail.com
          </button>
          
          <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-10 font-mono italic">Click to copy ↑</p>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                href={social.href}
                target="_blank"
                className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] px-5 py-2.5 border border-[var(--border)] transition-all font-mono"
              >
                {social.label} ↗
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copy Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-8 right-8 bg-[var(--accent)] text-[#0a0a0a] px-5 py-3 text-[11px] uppercase tracking-[0.1em] font-mono z-[200] shadow-2xl"
          >
            Email Copied! ✓
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
