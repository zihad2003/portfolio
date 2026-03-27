import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 bg-gradient-to-b from-[rgba(10,10,10,0.95)] to-transparent backdrop-blur-[2px]">
      <a 
        href="#hero" 
        className="font-serif text-[18px] font-bold text-[var(--accent)] tracking-[0.02em] no-underline"
      >
        ZH
      </a>
      
      <ul className="hidden md:flex gap-9 list-none items-center">
        {links.map((link) => (
          <li key={link.label}>
            <a 
              href={link.href} 
              className="text-[11px] tracking-[0.15em] uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors no-underline font-mono"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
