import React from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const repeat = [...Array(8)].map((_, i) => i);

  return (
    <section id="contact" className="section section-line" aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact-top">
          <p className="eyebrow">05 / Contact</p>
          <p className="eyebrow">Have a role in mind? Let&apos;s talk.</p>
        </div>

        <Reveal>
          <h2 className="contact-title" id="contact-title">
            Let&apos;s
            <br />
            <span className="outline">talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact-cta">
            <p>
              Open to junior backend and full-stack roles, freelance builds, or
              a good conversation about web products.
            </p>
            <a className="contact-email" href="mailto:spygamer737@gmail.com">
              spygamer737@gmail.com ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="contact-grid">
            <div>
              <p className="detail-label">Email</p>
              <a className="contact-value" href="mailto:spygamer737@gmail.com">
                spygamer737@gmail.com
              </a>
            </div>
            <div>
              <p className="detail-label">Phone</p>
              <a className="contact-value" href="tel:+916355535756">
                +91 6355535756
              </a>
            </div>
            <div>
              <p className="detail-label">Location</p>
              <span className="contact-value">Bhavnagar, Gujarat, India</span>
            </div>
          </div>

          <div className="socials">
            <a
              className="social"
              href="https://www.linkedin.com/in/mihir-joshi-a31096378"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="social"
              href="https://github.com/Mihir911"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a className="social" href="mailto:spygamer737@gmail.com">
              Email ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="cta-marquee" aria-hidden="true">
        <div className="marquee-track">
          {repeat.map((i) => (
            <span className="marquee-item" key={i}>
              Let&apos;s work together <span>✳</span>
            </span>
          ))}
        </div>
      </div>

      <div className="shell">
        <footer className="footer">
          <span>© {new Date().getFullYear()} Mihir Joshi</span>
          <span>Built with Next.js</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
