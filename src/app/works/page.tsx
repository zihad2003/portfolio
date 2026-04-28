import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "BigBazar Catalog",
    category: "Retail · Catalog",
    problem: "Merchant had thousands of products but no digital presence. Stock inquiries were handled manually via phone.",
    solution: "Built a filterable product catalog with one-click WhatsApp ordering and a custom inventory dashboard.",
    outcome: "Created a clearer buyer flow that reduced manual inquiry friction and made the catalog useful as a sales tool.",
    highlights: ["Catalog UX", "Lead-ready inquiry flow", "Inventory workflow"],
    link: "https://bigbazarbariarhatbigbazarbariarhat.pages.dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "02",
    title: "FitDay.ai",
    category: "AI · Health",
    problem: "Generic fitness apps provided zero personalization for meal planning and workout routines.",
    solution: "Integrated OpenAI GPT-4 with Next.js to generate real-time, personalized fitness and meal plans.",
    outcome: "Turned a generic wellness concept into a more defensible AI product with stronger differentiation and user value.",
    highlights: ["OpenAI integration", "Personalized UX", "Product positioning"],
    link: "https://fitday-aifitday-ai.pages.dev",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "03",
    title: "Arch Studio",
    category: "Architecture · Studio",
    problem: "Architecture firm relying on static PDFs with no way to showcase 3D renders or capture leads online.",
    solution: "Built a premium showcase site with immersive gallery, client intake forms, and project booking flow.",
    outcome: "Reframed the studio as a premium digital brand and added a direct path from interest to qualified inquiry.",
    highlights: ["Premium showcase", "Lead capture", "Studio branding"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Works() {
  return (
    <main className="page-shell">
      <div className="container">
        <header className="section-heading">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Selected Works
          </div>
          <h1>Case studies with business context, not just screenshots.</h1>
          <p>
            Each project is shaped around a clearer offer, smoother user flow, and stronger proof for the
            people making buying decisions.
          </p>
        </header>

        <section className="content-section compact" style={{ paddingTop: 0 }}>
          <div className="proof-grid">
            {[
              "Offer clarity and positioning",
              "Editorial UI with premium presentation",
              "Conversion paths built into the experience",
            ].map((item) => (
              <div key={item} className="proof-card">
                <h3 style={{ fontSize: "1rem", marginBottom: 0 }}>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <div className="project-stack">
          {projects.map((project, i) => (
            <article key={project.id} className="project-card">
              <div className={`project-shell ${i % 2 === 1 ? "reverse" : ""}`}>
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div style={{ color: "white" }}>
                      <div className="project-kicker" style={{ color: "rgba(255,255,255,0.76)" }}>
                        Project {project.id}
                      </div>
                      <div style={{ marginTop: "0.5rem", fontSize: "1rem" }}>{project.category}</div>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="project-link"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="project-kicker">{project.category}</div>
                  <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "0.8rem 0 1rem" }}>
                    {project.title}
                  </h2>
                  <p className="muted">
                    A focused build that combined premium presentation, clearer user flow, and a stronger path
                    from interest to inquiry.
                  </p>

                  <div className="stacked-panels">
                    <div className="mini-panel">
                      <div className="micro-label">The challenge</div>
                      <p>{project.problem}</p>
                    </div>
                    <div className="mini-panel">
                      <div className="micro-label">The solution</div>
                      <p>{project.solution}</p>
                    </div>
                    <div className="mini-panel">
                      <div className="micro-label">The outcome</div>
                      <p>{project.outcome}</p>
                    </div>
                  </div>

                  <div className="tag-row" style={{ marginBottom: "1.5rem" }}>
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="tag">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="button-row" style={{ marginTop: 0 }}>
                    <Link href={project.link} target="_blank" className="btn-primary">
                      View Live Project <ArrowRight className="inline-icon" size={16} />
                    </Link>
                    <Link href="/contact" className="btn-ghost">
                      Build Something Similar
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="content-section">
          <div className="dark-card feature-panel text-center">
            <div className="eyebrow" style={{ marginInline: "auto" }}>
              <span className="eyebrow-dot" />
              Your project here
            </div>
            <h2 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", margin: "1.25rem 0 1rem" }}>
              Need a site that sells the work before the call even starts?
            </h2>
            <p style={{ maxWidth: "38rem", margin: "0 auto", color: "rgba(255,255,255,0.72)" }}>
              I can help turn a rough idea, an outdated portfolio, or a generic landing page into a more
              credible product experience with stronger conversion intent.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
