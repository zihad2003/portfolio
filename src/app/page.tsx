"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCanvas from "@/components/HeroCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>("section");
    sections.forEach((section) => {
      const target = section.querySelector(".content");
      if (!target) return;

      gsap.fromTo(
        target,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            end: "bottom 24%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <main ref={mainRef}>
      <section className="content-section" style={{ minHeight: "100vh", overflow: "hidden" }}>
        <HeroCanvas />
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="content" style={{ maxWidth: "56rem" }}>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Available for New Projects
            </div>
            <h1 className="hero-title">
              Premium websites that look sharp and <span className="text-gold">convert hard.</span>
            </h1>
            <p className="hero-copy">
              I design and build high-performance product sites, portfolio experiences, and AI-enhanced
              web apps that help ambitious brands win trust faster and turn attention into qualified leads.
            </p>

            <div className="hero-proof">
              <span className="chip">
                <BadgeCheck size={16} /> Conversion-first structure
              </span>
              <span className="chip">
                <BriefcaseBusiness size={16} /> Case-study driven storytelling
              </span>
              <span className="chip">
                <Sparkles size={16} /> Premium design and modern performance
              </span>
            </div>

            <div className="hero-actions">
              <Link href="/works" className="btn-primary">
                View Case Studies <ArrowRight className="inline-icon" size={18} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[1, 2].map((i) => (
            <div key={i} style={{ display: "flex", gap: "5rem" }}>
              {[
                "Next.js",
                "React",
                "TypeScript",
                "GSAP",
                "Three.js",
                "AI Integration",
                "Digital Branding",
                "Fullstack Dev",
              ].map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="content-section compact">
        <div className="container">
          <div className="stats-grid">
            {[
              { val: "12+", lbl: "Products and portfolio launches" },
              { val: "10+", lbl: "Clients served across industries" },
              { val: "3+", lbl: "Years refining premium delivery" },
              { val: "24h", lbl: "Average first-response window" },
            ].map((stat) => (
              <div key={stat.lbl} className="stat-card content">
                <strong>{stat.val}</strong>
                <p>{stat.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section compact">
        <div className="container">
          <div className="section-heading content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Why clients hire me
            </div>
            <h2>Design, performance, and proof aligned around business growth.</h2>
            <p>
              The strongest sites do more than impress. They explain the offer clearly, reduce hesitation,
              and guide serious buyers toward the next step.
            </p>
          </div>

          <div className="proof-grid content">
            {[
              {
                title: "Positioning that sells",
                text: "Sharper messaging, stronger CTA placement, and sections built to move visitors from curiosity to contact.",
              },
              {
                title: "Showcase work with context",
                text: "Projects presented as business outcomes, not gallery thumbnails, so buyers immediately understand the value delivered.",
              },
              {
                title: "Fast and modern delivery",
                text: "Built with current tooling and production-ready structure so the final experience feels as polished under the hood as it does on screen.",
              },
            ].map((item) => (
              <article key={item.title} className="proof-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="split-section content">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Conversion systems
              </div>
              <h2 style={{ fontSize: "clamp(2.6rem, 7vw, 5.4rem)", margin: "1.25rem 0" }}>
                Design that earns attention. Structure that turns it into action.
              </h2>
              <p className="muted" style={{ fontSize: "1.05rem", maxWidth: "38rem" }}>
                Beyond aesthetics, I focus on the intersection of user experience and business goals.
                Every screen should clarify the offer, support trust, and make the next action obvious.
              </p>
              <div className="button-row">
                <Link href="/expertise" className="btn-ghost">
                  Explore Expertise <ArrowRight className="inline-icon" size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Discuss Your Project
                </Link>
              </div>
            </div>

            <div className="glass-card feature-panel">
              <div className="micro-label">What you get</div>
              <div className="stacked-panels">
                <div className="mini-panel">
                  <h4>Clear buyer journey</h4>
                  <p>Sections planned around trust, proof, objection handling, and the right CTA at the right moment.</p>
                </div>
                <div className="mini-panel">
                  <h4>Premium presentation</h4>
                  <p>Editorial layouts, elevated spacing, and refined motion that make a strong first impression.</p>
                </div>
                <div className="mini-panel">
                  <h4>High-performance execution</h4>
                  <p>Modern frontend architecture built to feel fast, stable, and launch-ready from day one.</p>
                </div>
              </div>
              <div className="display-mark">ZH</div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section compact">
        <div className="container">
          <div className="glass-card feature-panel content">
            <div className="split-section">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  Build with confidence
                </div>
                <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)", margin: "1.25rem 0" }}>
                  A focused process from discovery to launch.
                </h2>
                <p className="muted">
                  Whether you need a portfolio upgrade, a conversion-focused landing page, or a custom
                  web experience, the goal is the same: ship something credible, fast, and easy to say yes to.
                </p>
              </div>

              <div className="proof-grid" style={{ gridTemplateColumns: "1fr" }}>
                {[
                  "Discovery call to define goals and audience",
                  "Strategy-driven wireframing and design direction",
                  "Build, polish, and launch support with async communication",
                ].map((item) => (
                  <div key={item} className="proof-card">
                    <h3 style={{ fontSize: "1rem", marginBottom: 0 }}>{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="dark-card feature-panel text-center content">
            <div className="eyebrow" style={{ marginInline: "auto" }}>
              <span className="eyebrow-dot" />
              Next step
            </div>
            <h2 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", margin: "1.5rem 0 1rem" }}>
              Ready to turn your site into a stronger sales asset?
            </h2>
            <p style={{ maxWidth: "40rem", margin: "0 auto", color: "rgba(255,255,255,0.72)" }}>
              Let&apos;s map the gaps in your current experience and build a sharper, more convincing
              digital presence around your offer.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/works" className="btn-outline">
                Review My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
