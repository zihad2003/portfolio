"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <main className="page-shell">
      <div className="container">
        <header className="section-heading">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Get In Touch
          </div>
          <h1>Start a project with a clearer path to launch.</h1>
          <p>
            Share the goal, current bottleneck, or rough idea. I&apos;ll reply within 24 hours with the best
            next step and whether the project is a good fit.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-panel">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              What happens next
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", margin: "1rem 0" }}>
              A simple intake designed to reduce back-and-forth.
            </h2>
            <p className="muted">
              Whether you need a portfolio refresh, a high-converting landing page, or a custom product
              experience, I&apos;ll use your answers to shape the fastest useful next step.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="micro-label">Step 1</div>
                <h3 style={{ fontSize: "1.3rem", margin: "0.4rem 0" }}>Tell me the goal</h3>
                <p className="muted">What are you trying to launch, improve, or fix right now?</p>
              </div>
              <div className="contact-item">
                <div className="micro-label">Step 2</div>
                <h3 style={{ fontSize: "1.3rem", margin: "0.4rem 0" }}>Get a grounded reply</h3>
                <p className="muted">You&apos;ll get a response with scope direction, fit, and the best next move.</p>
              </div>
              <div className="contact-item">
                <div className="micro-label">Step 3</div>
                <h3 style={{ fontSize: "1.3rem", margin: "0.4rem 0" }}>Move into discovery</h3>
                <p className="muted">If it&apos;s a match, we turn that direction into a focused plan and timeline.</p>
              </div>
            </div>

            <div className="contact-list">
              <div className="contact-item">
                <div className="micro-label">
                  <Mail size={14} style={{ marginRight: "0.45rem", verticalAlign: "text-bottom" }} />
                  Email
                </div>
                <p style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>zhzihad2000@gmail.com</p>
              </div>
              <div className="contact-item">
                <div className="micro-label">
                  <MapPin size={14} style={{ marginRight: "0.45rem", verticalAlign: "text-bottom" }} />
                  Location
                </div>
                <p style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>
              <span className="eyebrow-dot" />
              Project Intake
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" required placeholder="John Doe" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Business Email</label>
                <input id="email" type="email" required placeholder="john@company.com" />
              </div>
            </div>

            <div className="form-field" style={{ marginTop: "1rem" }}>
              <label htmlFor="projectType">Project Type</label>
              <select id="projectType" defaultValue="Landing Page">
                <option>Landing Page</option>
                <option>Custom Web App</option>
                <option>AI Integration</option>
                <option>Portfolio Refresh</option>
                <option>Full Branding</option>
              </select>
            </div>

            <div className="form-field" style={{ marginTop: "1rem" }}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                required
                rows={6}
                placeholder="Tell me what you are building, what feels stuck, and what outcome you want."
              />
            </div>

            <div className="contact-item" style={{ marginTop: "1rem", background: "rgba(212, 175, 55, 0.08)" }}>
              <div className="micro-label">
                <Sparkles size={14} style={{ marginRight: "0.45rem", verticalAlign: "text-bottom" }} />
                Trust note
              </div>
              <p className="form-note" style={{ marginTop: "0.5rem" }}>
                You&apos;ll get a human reply, practical next-step guidance, and no generic sales sequence.
              </p>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="btn-primary"
              style={{ width: "100%", marginTop: "1rem" }}
            >
              {status === "idle" && (
                <>
                  Send Project Details <Send className="inline-icon" size={18} />
                </>
              )}
              {status === "sending" && "Processing..."}
              {status === "sent" && "Message Sent ✓"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
