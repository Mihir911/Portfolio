import React from 'react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="section section-line" aria-labelledby="about-title">
      <div className="shell">
        <div className="section-top">
          <p className="section-count">
            <b>01</b> / About
          </p>
          <div>
            <h2 className="section-title" id="about-title">
              Built by doing,
              <br />
              not just learning.
            </h2>
          </div>
        </div>

        <div className="about-layout">
          <Reveal>
            <p className="about-statement">
              I turn <em>ideas into working products</em> — front to back, from
              the first line of code to deployment.
            </p>

            <div className="stats">
              <div className="stat">
                <b>07+</b>
                <span>Projects shipped</span>
              </div>
              <div className="stat">
                <b>03 mo</b>
                <span>At Zidio Development</span>
              </div>
              <div className="stat">
                <b>04</b>
                <span>Live demos online</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about-copy">
              <p>
                I&apos;m a <strong>self-taught full stack developer</strong> who
                learned by shipping. Over the last year I&apos;ve built and
                deployed production web apps with React, Node.js, Express and
                MongoDB — including an Excel analytics platform, an AI study
                advisor, and a self-updating resume system.
              </p>
              <p>
                I spent three months as a MERN Stack Developer Intern at Zidio
                Development, collaborating on real features, REST APIs and
                responsive interfaces. Today I build independently while
                looking for a junior backend or full-stack role where I can
                keep owning work end to end.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="details">
            <div>
              <p className="detail-label">Education</p>
              <p className="detail-value">Diploma in Information Technology</p>
              <p className="detail-sub">
                Sir Bhavsinhji Polytechnic, Bhavnagar
                <br />
                2022 – 2023 · Completed 1st year
              </p>
            </div>
            <div>
              <p className="detail-label">Certification</p>
              <p className="detail-value">MERN Stack Internship Certificate</p>
              <p className="detail-sub">
                Zidio Development · Dec 2025
              </p>
            </div>
            <div>
              <p className="detail-label">Languages</p>
              <p className="detail-value">English, Hindi, Gujarati</p>
              <p className="detail-sub">
                Based in Bhavnagar, Gujarat, India
                <br />
                Working remotely
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
