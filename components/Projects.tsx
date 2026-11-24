import React, { useState } from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
  tags: string[];
  type: 'Live demo' | 'Source code';
};

const projects: Project[] = [
  {
    title: 'SheetIQ',
    description:
      'Upload Excel files and turn raw rows into an analytics dashboard with clear, actionable metrics.',
    link: 'https://sheet-iq-excel-analytics-platform.vercel.app/',
    image: '/sheetIQ.png',
    alt: 'SheetIQ Excel analytics dashboard',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    type: 'Live demo',
  },
  {
    title: 'AI Counselling',
    description:
      'An AI-powered abroad study advisor delivering personalized guidance through a conversational interface.',
    link: 'https://a-ai-counselling-website-for-abroad.vercel.app/',
    image: '/AI-counselling.png',
    alt: 'AI Counselling study abroad advisor interface',
    tags: ['React', 'Node.js', 'Express', 'AI API'],
    type: 'Live demo',
  },
  {
    title: 'Resume System Backend',
    description:
      'A self-updating resume engine: backend APIs that keep a generated resume in sync with incoming data automatically.',
    link: 'https://github.com/Mihir911/resume-system-backend.git',
    image: '/resume-system.svg',
    alt: 'Resume System Backend terminal and API preview',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    type: 'Source code',
  },
  {
    title: 'Thought-Stream',
    description:
      'A secure blogging platform with JWT auth, encrypted passwords, full CRUD and scalable Mongoose schemas.',
    link: 'https://thought-stream-gold.vercel.app/',
    image: '/thought-stream.png',
    alt: 'Thought-Stream blogging platform',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'bcrypt'],
    type: 'Live demo',
  },
  {
    title: 'Contact Manager',
    description:
      'A clean contact management app with a RESTful API, full CRUD operations and a component-based UI.',
    link: 'https://contact-manager-alpha-ten.vercel.app/',
    image: '/contact-manager.png',
    alt: 'Contact Manager CRUD application',
    tags: ['React', 'Node.js', 'Express', 'Mongoose'],
    type: 'Live demo',
  },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="work" className="section section-line" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-top">
          <p className="section-count">
            <b>03</b> / Selected work
          </p>
          <div>
            <h2 className="section-title" id="work-title">
              Things I&apos;ve
              <br />
              actually shipped.
            </h2>
            <p className="section-intro">
              Five projects built end to end — real interfaces, real APIs, real
              deployments. Hover a name to preview it, click to explore.
            </p>
          </div>
        </div>

        <div className="work-layout">
          <div className="work-list">
            {projects.map((project, i) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`work-row ${active === i ? 'work-row-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={`${project.title} — open ${project.type} in a new tab`}
              >
                <span className="work-row-index">0{i + 1}</span>

                <div className="work-row-main">
                  <h3 className="work-row-title">{project.title}</h3>
                  <p className="work-row-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="work-row-image">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      unoptimized={project.image.endsWith('.svg')}
                    />
                  </div>
                </div>

                <span className="work-row-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 12.5L12.5 3.5M5 3.5h7.5V11"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <div className="work-preview" aria-hidden="true">
            <div className="work-preview-frame">
              {projects.map((project, i) => (
                <Image
                  key={project.title}
                  src={project.image}
                  alt=""
                  fill
                  className={`work-image ${active === i ? 'work-image-active' : ''}`}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  priority={i === 0}
                  unoptimized={project.image.endsWith('.svg')}
                />
              ))}
              <div className="work-preview-top">
                <span className="work-preview-type">{current.type}</span>
                <span className="work-preview-count">
                  0{active + 1} <i>/</i> 0{projects.length}
                </span>
              </div>
              <div className="work-preview-bottom">{current.title}</div>
            </div>
            <p className="work-preview-hint">
              Hover or focus a project to preview it ↗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
