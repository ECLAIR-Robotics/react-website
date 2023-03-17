import React from 'react';
import '../styles/projects.css';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className='projectCards'>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1ojkTwww4f-TAXY3-BtJfe7nlULWY4vE6" h2='PCR'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1ViLB3YkHlQ2iQRTtHs7KU5Doxln0jLie" h2='Chess Teacher'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1tUeRQorUFeg53gdXJBONz_j4ZDJ8b7Yf" h2='Autonomous Drone'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1O8Yc-Tdzh5RZK1Nydo2iRyje76NVpS66" h2='Music Mood'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1DPXoEzWTZ6VwRIuxkaHGucIFBMXpH4J1" h2='AI Nose'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1vkVR4KX7UvAiZ8ql0-3IWdPGacsSAsEq" h2='Fitness Tracker'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=18k4112Of06u9Yb42pT8NL_o8Nk-GgEny" h2='Smart Mirror'/>
        <ProjectCard img ="https://drive.google.com/uc?export=view&id=1PtCjDrhR-OSC-A-SYzJsvkjie_redgZI" h2='Robotic Arm'/>
      </div>
      <h3>hiiiiii</h3>
    </div>
  )
}

export default Projects
