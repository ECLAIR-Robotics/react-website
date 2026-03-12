import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Sponsors.css';

export default function Sponsors() {
  useReveal();

  return (
    <div className="page-wrapper">
      <section className="sponsors-section">

        <div className="sponsors-header">
          <div className="section-tag">Partner With Us</div>
          <h1 className="section-h2 reveal">Sponsors &amp;<br />Supporters</h1>
        </div>

        <div className="sponsor-inner reveal">
          {/* Left col */}
          <div>
            <h3 className="sponsor-pitch">
              Invest in the next generation of roboticists.
            </h3>
            <p>
              ECLAIR builds a direct pipeline from UT Austin's CS program to the
              robotics industry. Our sponsors get early access to talented,
              project-tested engineers before they hit the job market.
            </p>
            <p>
              Your support funds hardware, demos, and the infrastructure that lets
              students build things that matter.
            </p>
            <a
              href="mailto:eclairrobotics@gmail.com"
              className="btn-primary"
              style={{ marginTop: '8px', display: 'inline-block' }}
            >
              Become a Sponsor →
            </a>

            <div className="current-sponsors">
              <div className="current-sponsors-label">Current Partners</div>
              <a href="https://www.servicenow.com/" target="_blank" rel="noreferrer" className="sponsor-name">
                ServiceNow
              </a>
              <a href="https://robotics.utexas.edu/" target="_blank" rel="noreferrer" className="sponsor-name">
                Texas Robotics
              </a>
              <a href="https://texel-arts.com/" target="_blank" rel="noreferrer" className="sponsor-name">
                Texel Arts
              </a>
            </div>
          </div>

          {/* Right col — tiers */}
          <div>
            <div className="sponsor-tiers">
              <TierCard
                name="Silver"
                label="Entry Tier"
                perks={[
                  'T-shirt listing (30+ members)',
                  'Instagram shoutout (150+ followers)',
                  'Featured on club website',
                  'Swag & flyers at our meetings',
                ]}
              />
              <TierCard
                name="Gold"
                label="Most Popular"
                perks={[
                  'All Silver perks',
                  'Logo on club T-shirt',
                  'Booth at Demo Days (40+ UT CS students)',
                  '2× recruiting events per semester',
                ]}
              />
              <TierCard
                name="Diamond"
                label="Premier Partner"
                perks={[
                  'All Gold perks',
                  'Full resume book (30+ engineers)',
                  'Priority recruiting access',
                  '50 campus flyers (~10K impressions)',
                  'Discord & mailing list (500+ network)',
                ]}
              />
            </div>
            <p className="sponsor-note">
              Custom partnership packages available. Reach out to discuss what works
              best for your organization.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}

function TierCard({ name, label, perks }: { name: string; label: string; perks: string[] }) {
  return (
    <div className={`tier tier--${name.toLowerCase()}`}>
      <div className="tier-name">{name}</div>
      <div className="tier-label">{label}</div>
      <ul className="tier-perks">
        {perks.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </div>
  );
}
