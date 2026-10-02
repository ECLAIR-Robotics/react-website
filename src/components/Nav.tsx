import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../static/images/logo/E.png';
import './Nav.css';

const NAV_LINKS = [
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team',     href: '/about#team' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'News',     href: '/news' },
  { label: 'Contact',  href: '/contact' },
];

export default function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const [aboutSection, setAboutSection] = useState<'about' | 'team'>('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
  if (location.pathname !== '/about') return;
  const updateAboutSection = () => {
    const teamSection = document.getElementById('team');
    if (!teamSection) return;
    if (teamSection.getBoundingClientRect().top <= 120) {
      setAboutSection('team');
    } else {
      setAboutSection('about');
    }
  };
    updateAboutSection();
    window.addEventListener('scroll', updateAboutSection, { passive: true });
    return () => window.removeEventListener('scroll', updateAboutSection);
  }, [location.pathname]);

  const isActive = (label: string, href: string) => {
  if (location.pathname === '/about') {
    if (label === 'About') return aboutSection === 'about';
    if (label === 'Team') return aboutSection === 'team';
  }
    return location.pathname === href;
  };

  // Close drawer on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
        <img src={Logo} alt="ECLAIR logo" className="nav-logo-img" />
        <span className="nav-logo-text">ECLAIR</span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link${isActive(label, href) ? ' nav-link--active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/sponsors" className="nav-cta">Partner With Us</a>

        <button
          className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-drawer${menuOpen ? ' nav-drawer--open' : ''}`}>
        <ul className="nav-drawer-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav-drawer-link">{label}</a>
            </li>
          ))}
          <li>
            <a href="/sponsors" className="nav-drawer-cta">Partner With Us</a>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <div className="nav-drawer-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
