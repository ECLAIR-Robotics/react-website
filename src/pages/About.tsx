import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { OFFICERS, FOUNDERS } from '../data/officers';
import type { Officer } from '../data/officers';
import './About.css';


export default function About() {
  useReveal();

  return (
    <div className="page-wrapper">

      {/* ── MISSION ─────────────────────────────────────────── */}
      <section className="about-mission" id="about">
        <div className="about-grid">
          <div>
            <div className="section-tag">About ECLAIR</div>
            <h1 className="section-h2 reveal">We build robots.<br />We build community.</h1>

            <div className="about-body reveal reveal-delay-1">
              <p>
                ECLAIR — Engineering &amp; Computational Learning of AI in Robotics —
                is an undergraduate organization in the Department of Computer Science
                at the University of Texas at Austin.
              </p>
              <p>
                We provide <strong>hardware, funding, and mentorship</strong> so any
                student with a robotics idea can build it. From neural networks to
                reinforcement learning, we teach the techniques that make robots intelligent.
              </p>
              <p>
                We meet every <strong>Monday and Thursday, 6–8 PM</strong> at the
                Gates-Dell Complex. Drop in, pitch a project, and start building.
              </p>
            </div>
          </div>

          {/* Terminal */}
          <div className="terminal-box reveal reveal-delay-2">
            <div className="terminal-header">
              <span className="t-dot" />
              <span className="t-dot" />
              <span className="t-dot" />
              <span className="terminal-title">eclair — bash</span>
            </div>
            <div className="terminal-body">
              <div><span className="t-prompt">~</span> ./eclair --init</div>
              <div className="t-dim">Loading ECLAIR environment...</div>
              <div>&nbsp;</div>
              <div><span className="t-prompt">~</span> status --all</div>
              <div><span className="t-hi">✓</span> Projects active: <span className="t-hi">5</span></div>
              <div><span className="t-hi">✓</span> Members: <span className="t-hi">30+ undergrads</span></div>
              <div><span className="t-hi">✓</span> Stack: <span className="t-hi">ROS2 · PyTorch · OpenCV</span></div>
              <div><span className="t-hi">✓</span> Facilities: <span className="t-hi">GDC · AHG · Makerspace</span></div>
              <div>&nbsp;</div>
              <div><span className="t-prompt">~</span> meetings --schedule</div>
              <div className="t-dim">→ Mon &amp; Thu  6:00 PM  GDC Bridges</div>
              <div>&nbsp;</div>
              <div><span className="t-prompt">~</span> git clone eclair/your-project<span className="t-cursor" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFICERS ────────────────────────────────────────── */}
      <section className="team-section" id="team">
        <div className="section-tag">The People</div>
        <h2 className="section-h2 reveal">Leadership &amp; Leads</h2>

        <div className="team-divider reveal">Officers</div>
        <div className="team-grid">
          {OFFICERS.map((officer, i) => (
            <MemberCard key={officer.name} officer={officer} delay={(i % 4) + 1} />
          ))}
        </div>

        <div className="team-divider reveal" style={{ marginTop: '48px' }}>Founders</div>
        <div className="team-grid">
          {FOUNDERS.map((founder, i) => (
            <MemberCard key={founder.name} officer={founder} delay={(i % 4) + 1} />
          ))}
        </div>
      </section>

    </div>
  );
}

function MemberCard({ officer, delay }: { officer: Officer; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`reveal reveal-delay-${delay}`}>
      <div
        className={`member-card${open ? ' member-card--open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="member-photo">
          {officer.img
            ? <img src={officer.img} alt={officer.name} />
            : <div className="member-initials"><span>{officer.initials}</span></div>
          }
        </div>

        <div className="member-nameplate">
          <div className="member-name">{officer.name}</div>
          <div className="member-role">{officer.role}</div>
        </div>

        <div className="member-overlay">
          <div className="member-overlay-inner">
            {officer.bio && <p className="member-bio">"{officer.bio}"</p>}
            <div className="member-links" onClick={e => e.stopPropagation()}>
              {officer.linkedin && (
                <a href={officer.linkedin} target="_blank" rel="noreferrer" className="member-link">
                  LinkedIn ↗
                </a>
              )}
              {officer.email && (
                <a href={`mailto:${officer.email}`} className="member-link">
                  Email ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="member-hint">{open ? '✕' : '+'}</div>
      </div>
    </div>
  );
}
