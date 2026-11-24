import React from 'react';
import Reveal from './Reveal';

const groups = [
  { label: 'Frontend', items: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'bcrypt'] },
  { label: 'Database', items: ['MongoDB', 'Mongoose', 'Schema Design'] },
  { label: 'Tools & DevOps', items: ['Git', 'GitHub', 'Vercel', 'VS Code'] },
];

const marqueeItems = [
  'React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind', 'REST APIs', 'JWT', 'Vercel',
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section section-line" aria-labelledby="skills-title">
      <div className="shell">
        <div className="section-top">
          <p className="section-count">
            <b>02</b> / Toolkit
          </p>
          <div>
            <h2 className="section-title" id="skills-title">
              The stack behind
              <br />
              the work.
            </h2>
            <p className="section-intro">
              Practical tools I use to take a product from empty folder to
              deployed URL — with authentication, data modelling and clean
              interfaces baked in.
            </p>
          </div>
        </div>

        <div className="skills-layout">
          <div className="skills-aside">
            <p className="eyebrow">What I work with</p>
            <h3>
              MERN
              <br />
              first.
            </h3>
            <p>
              Comfortable across the whole stack, with a soft spot for APIs,
              authentication and the systems that make an app reliable.
            </p>
          </div>

          <div>
            {groups.map((group, i) => (
              <Reveal key={group.label} delay={i * 70}>
                <div className="skill-group">
                  <p className="skill-group-head">
                    <b>0{i + 1}</b> {group.label}
                  </p>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <span className="skill-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span className="marquee-item" key={`${item}-${i}`}>
                {item} <span>✳</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
