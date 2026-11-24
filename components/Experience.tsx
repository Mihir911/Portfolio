import React from 'react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="section section-line"
      aria-labelledby="experience-title"
    >
      <div className="shell">
        <div className="section-top">
          <p className="section-count">
            <b>04</b> / Experience
          </p>
          <div>
            <h2 className="section-title" id="experience-title">
              Where I&apos;ve
              <br />
              made things.
            </h2>
          </div>
        </div>

        <div className="timeline">
          <Reveal>
            <article className="timeline-item">
              <p className="timeline-when">
                13 Oct 2026 – Present
                <span>Backend internship · Remote</span>
              </p>
              <div>
                <h3 className="timeline-role">Backend Developer Intern</h3>
                <p className="timeline-org">SkillNexGen</p>
                <ul className="timeline-list">
                  <li>
                    Building and maintaining RESTful APIs with Node.js and
                    Express, including request validation and error handling.
                  </li>
                  <li>
                    Designing MongoDB schemas and integrating them with backend
                    services for production-style features.
                  </li>
                  <li>
                    Working with JWT-based authentication and Git workflows,
                    including branching, commits and code reviews.
                  </li>
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="timeline-item">
              <p className="timeline-when">
                Dec 2025 – Present
                <span>Self-directed · Bhavnagar</span>
              </p>
              <div>
                <h3 className="timeline-role">Independent Developer</h3>
                <p className="timeline-org">Personal projects</p>
                <ul className="timeline-list">
                  <li>
                    Built and deployed 7+ production-grade MERN apps while
                    managing family responsibilities.
                  </li>
                  <li>
                    Developed backend APIs, integrated AI services, implemented
                    JWT/bcrypt authentication and designed MongoDB schemas.
                  </li>
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="timeline-item">
              <p className="timeline-when">
                Aug – Nov 2025
                <span>3-month internship · Remote</span>
              </p>
              <div>
                <h3 className="timeline-role">MERN Stack Developer Intern</h3>
                <p className="timeline-org">Zidio Development</p>
                <ul className="timeline-list">
                  <li>
                    Collaborated with a team to design and ship full-stack
                    features using React, Node.js, Express and MongoDB.
                  </li>
                  <li>
                    Built and integrated RESTful API endpoints, improving data
                    handling and backend reliability.
                  </li>
                  <li>
                    Implemented responsive UIs with React and Tailwind CSS,
                    while practising Git workflows, branching and code reviews.
                  </li>
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
