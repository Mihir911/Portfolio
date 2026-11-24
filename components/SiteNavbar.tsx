import React, { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Skills', href: '#skills', index: '02' },
  { label: 'Work', href: '#work', index: '03' },
  { label: 'Experience', href: '#experience', index: '04' },
  { label: 'Contact', href: '#contact', index: '05' },
];

const SiteNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 24);
      setProgress(max > 0 ? (top / max) * 100 : 0);

      let current = '';
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 140) current = link.href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />

      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="shell nav-inner">
          <a href="#top" className="logo" aria-label="Mihir Joshi, back to top">
            MJ<span>.</span>
          </a>

          <div className="nav-right">
            <nav className="nav-links" aria-label="Main navigation">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active === link.href ? 'nav-link-active' : ''}`}
                >
                  <span>{link.index}</span>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="availability">
              <i className="pulse" aria-hidden="true" />
              Available for work
            </div>

            <button
              type="button"
              className={`burger ${menuOpen ? 'burger-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-overlay ${menuOpen ? 'nav-overlay-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <span>{link.index}</span>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default SiteNavbar;
