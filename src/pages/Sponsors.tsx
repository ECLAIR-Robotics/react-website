import React from 'react';
import './Sponsors.css';

import serviceNowImg  from '../static/images/sponsor-images/serviceNow.webp';
import janeStreetImg  from '../static/images/sponsor-images/janeStreet_blue.webp';
import texasRoboticsImg  from '../static/images/sponsor-images/texasRobotics.webp';

export default function Sponsors() {

  return (
    <div className="page-wrapper">
      <section className="sponsors-section">

        <div className="sponsors-header">
          <div className="section-tag">Partner With Us</div>
          <h1 className="section-h2">Sponsors &amp;<br />Supporters</h1>
        </div>

        <div className="partnership-content">
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
              Your support funds hardware, demos, and the infrastructure that let
              students build things that matter.
            </p>
            <a
              href="mailto:eclairrobotics@gmail.com"
              className="btn-primary"
              style={{ marginTop: '8px', display: 'inline-block' }}
            >
              Become a Sponsor →
            </a>
          </div>

          <div className="current-sponsors">
            <div className="current-sponsors-label">Current Partners</div>

            <a href="https://www.servicenow.com/" target="_blank" rel="noreferrer" className="sponsor-item">
              <img src = {serviceNowImg} alt="ServiceNow" className="sponsor-logo" />
              <span className="sponsor-name">ServiceNow</span>
            </a>
            <a href="https://robotics.utexas.edu/" target="_blank" rel="noreferrer" className="sponsor-item">
              <img src = {texasRoboticsImg} alt="Texas Robotics" className="sponsor-logo" />
              <span className="sponsor-name">Texas Robotics</span>
            </a>
            <a href="https://www.janestreet.com/" target="_blank" rel="noreferrer" className="sponsor-item">
              <img src = {janeStreetImg} alt="Jane Street" className="sponsor-logo" />
              <span className="sponsor-name">Jane Street</span>
            </a>

          </div> 
        </div>

      </section>
    </div>
  );
}

