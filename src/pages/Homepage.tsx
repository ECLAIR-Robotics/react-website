import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Homepage.css';

export default function Homepage() {
  useReveal();
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-tag">UT Austin · CS Department · Est. 2021</div>

        <h1 className="hero-h1">
          Building the<br />
          <span className="grad-text">machines</span><br />
          of tomorrow.
        </h1>

        <p className="hero-sub">
          ECLAIR is UT Austin's undergraduate robotics organization — where engineers
          learn state-of-the-art AI and turn ambitious ideas into physical robots.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/projects')}>
            View Our Work
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            Get Involved →
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">30+</div>
            <div className="stat-label">Active Members</div>
          </div>
          <div className="stat">
            <div className="stat-num">5</div>
            <div className="stat-label">Active Projects</div>
          </div>
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">Alumni Network</div>
          </div>
          <div className="stat">
            <div className="stat-num">1</div>
            <div className="stat-label">Industry Sponsors</div>
          </div>
        </div>
      </section>

      {/* ── MISSION STRIP ────────────────────────────────────── */}
      <section className="mission-strip">
        <div className="mission-grid">
          <div className="mission-item reveal">
            <div className="mission-icon">🤖</div>
            <div className="mission-title">Build Real Robots</div>
            <div className="mission-text">Pitch any project and get it financed and supported by ECLAIR.</div>
          </div>
          <div className="mission-item reveal reveal-delay-1">
            <div className="mission-icon">🧠</div>
            <div className="mission-title">Learn Modern ML</div>
            <div className="mission-text">Workshops on RL, deep learning, computer vision, and ROS2.</div>
          </div>
          <div className="mission-item reveal reveal-delay-2">
            <div className="mission-icon">🔧</div>
            <div className="mission-title">World-Class Facilities</div>
            <div className="mission-text">Anna Hiss Gym, UT Makerspace, and GDC labs at your fingertips.</div>
          </div>
          <div className="mission-item reveal reveal-delay-3">
            <div className="mission-icon">🌐</div>
            <div className="mission-title">Industry Pipeline</div>
            <div className="mission-text">Direct connections to internships and roles at leading robotics companies.</div>
          </div>
        </div>
      </section>

      {/* ── WHERE WE MEET ─────────────────────────────────────── */}
      <section className="meet-section">
        <div className="meet-inner">
          <div className="reveal">
            <div className="section-tag">Find Us</div>
            <h2 className="section-h2">Gates-Dell Complex,<br />UT Austin.</h2>
            <p className="meet-body">
              We meet every <strong>Monday and Thursday, 6–8 PM</strong> in the GDC.
              Drop in and start building.
            </p>
            <div className="meet-actions">
              <a
                href="https://discord.gg/tgbvpCjNgV"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Join Discord
              </a>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Contact Us →
              </button>
            </div>
          </div>

          <div className="map-embed reveal reveal-delay-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.273583027798!2d-97.73916802475219!3d30.286272274802734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c98544379%3A0x1a0c2b90248ca2ed!2sGates%20Dell%20Complex!5e0!3m2!1sen!2sus!4v1737357273958!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gates-Dell Complex"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
