import React, { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import './News.css';

declare global {
  interface Window {
    __bhldScript?: boolean;
  }
}

function loadBeholdScript() {
  if (window.__bhldScript) return;
  window.__bhldScript = true;
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://w.behold.so/widget.js';
  setTimeout(() => { document.head.append(script); }, 0);
}

export default function News() {
  useReveal();
  useEffect(() => { loadBeholdScript(); }, []);

  return (
    <div className="page-wrapper">
      <section className="news-section">

        <div className="section-tag">Stay Connected</div>
        <h1 className="section-h2 reveal">ECLAIR News</h1>
        <p className="news-sub reveal reveal-delay-1">
          Follow{' '}
          <a href="https://www.instagram.com/eclairrobotics" target="_blank" rel="noreferrer">
            @eclairrobotics
          </a>{' '}
          to keep up to date with events, robots, and opportunities.
        </p>

        <div className="news-embed reveal reveal-delay-2">
          <behold-widget feed-id="HjhZUQz7njoGOSVHDc4c" />
        </div>

      </section>
    </div>
  );
}
