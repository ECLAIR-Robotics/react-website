import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-brand">ECLAIR</div>
        <div className="footer-copy">© {new Date().getFullYear()} ECLAIR · UT Austin CS Department</div>
      </div>

      <ul className="footer-links">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://www.instagram.com/eclairrobotics/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://github.com/ECLAIR-Robotics" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://discord.gg/tgbvpCjNgV" target="_blank" rel="noreferrer">Discord</a>
      </div>
    </footer>
  );
}
