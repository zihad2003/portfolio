import Link from "next/link";
import { ArrowRight, Cloud, Code, Cpu, Database, Layout, ShoppingBag } from "lucide-react";

const skills = [
  {
    name: "Frontend Mastery",
    icon: Layout,
    lvl: 95,
    outcome: "High-end interfaces that feel fast, polished, and built for decision-making.",
    tags: ["React.js", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    name: "Backend Logic",
    icon: Database,
    lvl: 88,
    outcome: "Reliable product foundations for forms, dashboards, auth, and business workflows.",
    tags: ["Node.js", "Express", "Supabase", "PostgreSQL"],
  },
  {
    name: "AI Integration",
    icon: Cpu,
    lvl: 82,
    outcome: "AI features that create real utility, differentiation, and stronger product narratives.",
    tags: ["OpenAI API", "HuggingFace", "Python", "RAG"],
  },
  {
    name: "Digital Design",
    icon: Code,
    lvl: 90,
    outcome: "Sharper visual systems that elevate brand perception and improve content clarity.",
    tags: ["Figma", "UI/UX", "Branding", "Prototyping"],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    lvl: 85,
    outcome: "Deployment and infrastructure decisions that keep launches smoother and more scalable.",
    tags: ["AWS", "Vercel", "Docker", "CI/CD"],
  },
  {
    name: "E-Commerce",
    icon: ShoppingBag,
    lvl: 92,
    outcome: "Conversion-aware commerce experiences designed to reduce friction and drive action.",
    tags: ["Stripe", "Auth", "Inventory", "Orders"],
  },
];

export default function Expertise() {
  return (
    <main className="page-shell">
      <div className="container">
        <header className="section-heading">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            My Arsenal
          </div>
          <h1>Capabilities mapped to business outcomes.</h1>
          <p>
            I combine design, engineering, and product thinking to build digital experiences that feel
            premium and make the next step easier for your audience.
          </p>
        </header>

        <div className="card-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-icon">
                <skill.icon size={30} />
              </div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{skill.name}</h2>
              <p className="muted" style={{ minHeight: "4.5rem" }}>
                {skill.outcome}
              </p>
              <div className="meta-row" style={{ margin: "1rem 0 0.75rem" }}>
                {skill.lvl}% confidence in delivery
              </div>
              <div className="progress-bar" style={{ marginBottom: "1rem" }}>
                <span style={{ width: `${skill.lvl}%` }} />
              </div>
              <div className="tag-row">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="content-section">
          <div className="dark-card feature-panel">
            <div className="split-section">
              <div className="content">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  Constant evolution
                </div>
                <h2 style={{ fontSize: "clamp(2.6rem, 6vw, 4.75rem)", margin: "1.25rem 0" }}>
                  Built for current expectations, not last year&apos;s standards.
                </h2>
                <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: "36rem" }}>
                  The web changes quickly. I keep refining the stack, interaction patterns, and implementation
                  choices so your project feels current, credible, and ready to scale.
                </p>
                <div className="button-row">
                  <Link href="/works" className="btn-outline">
                    Review My Work <ArrowRight className="inline-icon" size={16} />
                  </Link>
                  <Link href="/contact" className="btn-primary">
                    Start a Project
                  </Link>
                </div>
              </div>

              <div className="proof-grid">
                {[
                  "Product-focused execution",
                  "Design systems with business intent",
                  "AI-ready implementation where it adds value",
                ].map((item) => (
                  <div key={item} className="proof-card">
                    <h3 style={{ fontSize: "1rem", marginBottom: 0 }}>{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
