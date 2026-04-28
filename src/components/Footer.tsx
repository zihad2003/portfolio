import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="dark-card footer-shell">
          <div className="footer-grid">
            <div>
              <Link href="/" className="brand-mark">
                ZH<span>.</span>
              </Link>
              <p className="muted" style={{ marginTop: "1rem", maxWidth: "28rem" }}>
                Premium websites and high-conversion product experiences for brands that need
                more than a template. Based in Bangladesh, working with clients globally.
              </p>
              <div className="button-row" style={{ marginTop: "1.5rem" }}>
                <Link href="/works" className="btn-outline">
                  View Case Studies
                </Link>
                <Link href="/contact" className="btn-primary">
                  Start a Project
                </Link>
              </div>
            </div>

            <div>
              <div className="micro-label">Navigation</div>
              <div className="footer-links" style={{ marginTop: "1rem" }}>
                <Link href="/">Home</Link>
                <Link href="/expertise">Expertise</Link>
                <Link href="/works">Works</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <div className="micro-label">Proof</div>
              <div className="footer-links" style={{ marginTop: "1rem" }}>
                <span>12+ projects launched</span>
                <span>Next.js and AI delivery</span>
                <span>24-hour response time</span>
                <span>Global remote collaboration</span>
              </div>
            </div>

            <div>
              <div className="micro-label">Connect</div>
              <div className="footer-links" style={{ marginTop: "1rem" }}>
                <a href="mailto:zhzihad2000@gmail.com">zhzihad2000@gmail.com</a>
                <a href="https://github.com/zihad2003" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="#" aria-disabled="true">
                  LinkedIn
                </a>
                <a href="#" aria-disabled="true">
                  X / Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="footer-meta">
            <p>© 2026 Zihad. Built for conversion and clarity.</p>
            <p>Discovery calls, async updates, and production-ready delivery.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
