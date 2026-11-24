import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import SiteNavbar from '../components/SiteNavbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mihir Joshi',
  jobTitle: 'Full Stack Developer',
  description:
    'Self-taught MERN stack developer building and deploying production web applications.',
  email: 'mailto:spygamer737@gmail.com',
  telephone: '+91 6355535756',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhavnagar',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://github.com/Mihir911',
    'https://www.linkedin.com/in/mihir-joshi-a31096378',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'JWT Authentication',
  ],
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mihir Joshi — Full Stack Developer</title>
        <meta
          name="description"
          content="Mihir Joshi is a self-taught MERN stack developer from Bhavnagar, India. 7+ deployed projects, an Excel analytics platform, AI counselling tools, and secure full-stack APIs."
        />
        <meta name="author" content="Mihir Joshi" />
        <meta
          name="keywords"
          content="Mihir Joshi, full stack developer, MERN stack, React, Node.js, Express, MongoDB, portfolio, Bhavnagar"
        />
        <meta name="theme-color" content="#08090a" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mihir Joshi — Full Stack Developer" />
        <meta
          property="og:description"
          content="I design, build and deploy end-to-end web products. Explore selected work from a self-taught MERN stack developer."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mihir Joshi — Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Selected work and experience of Mihir Joshi, full stack developer."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <SiteNavbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default Home;
