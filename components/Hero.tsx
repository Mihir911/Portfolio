import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date())
      );

    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  const trackPointer = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      '--mx',
      `${((event.clientX - rect.left) / rect.width) * 100}%`
    );
    event.currentTarget.style.setProperty(
      '--my',
      `${((event.clientY - rect.top) / rect.height) * 100}%`
    );
  };

  return (
    <section
      id="top"
      className="hero"
      onMouseMove={trackPointer}
      aria-labelledby="hero-name"
    >
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-spot" aria-hidden="true" />

      <div className="shell hero-inner">
        <p className="eyebrow hero-kicker">
          Full Stack Developer · Bhavnagar, India
        </p>

        <h1 className="hero-name" id="hero-name">
          <span className="hero-name-line">Mihir</span>
          <span className="hero-name-line hero-name-line-outline">
            Joshi<span className="hero-star">✳</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-copy">
            <p className="hero-role">
              I design, build and deploy <strong>end-to-end web products</strong>.
            </p>
            <p className="hero-sub">
              MERN stack developer, 7+ projects shipped, and a knack for turning
              rough ideas into fast, working software.
            </p>
            <div className="btn-row">
              <a href="#work" className="btn btn-primary">
                View my work <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <div className="scroll-cue" aria-hidden="true">
              <i />
              Scroll
            </div>
            <div>
              Based in
              <b>Bhavnagar, IN</b>
            </div>
            <div>
              Local time
              <b>{time} IST</b>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <span>Full Stack Developer · MERN Stack</span>
          <span>Open to junior backend / full-stack roles</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
