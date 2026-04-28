"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={clsx(
        "site-nav",
        isScrolled && "scrolled"
      )}
    >
      <div className="container">
        <div className="nav-shell">
          <Link href="/" className="brand-mark">
            ZH<span>.</span>
          </Link>

          <div className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(pathname === link.href && "active")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/contact" className="btn-primary nav-cta">
            Book Discovery Call
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-panel">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(pathname === link.href && "active")}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary">
              Book Discovery Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
