import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS, Project } from '../data/projects';
import './Projects.css';

type Filter = 'all' | 'active' | 'completed';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = PROJECTS.filter(
    (p) => filter === 'all' || p.status === filter
  );

  return (
    <div className="page-wrapper">
      <section className="projects-section">

        <div className="projects-header">
          <div>
            <div className="section-tag">What We Build</div>
            <h1 className="section-h2 reveal">Active Projects</h1>
          </div>
          <div className="filter-bar">
            {(['all', 'active', 'completed'] as Filter[]).map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? ' filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'active' ? 'In Progress' : 'Completed'}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i % 3} />
          ))}
        </div>

      </section>
    </div>
  );
}
function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <div className={`reveal reveal-delay-${delay}`}>
      <div className="project-card">
        <div className="project-num">{project.num} — {project.category}</div>
      <span className={`project-status project-status--${project.status}`}>
        {project.status === 'active' ? 'In Progress' : 'Completed'}
      </span>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-leads">
        {project.leads.join(' · ')}
      </div>
      <div className="project-ext-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-ext-link">
            GitHub ↗
          </a>
        )}
        {project.teamPage && (
          <a href={project.teamPage} target="_blank" rel="noreferrer" className="project-ext-link">
            Team Page ↗
          </a>
        )}
      </div>
      <div className="project-arrow">↗</div>
      </div>
    </div>
  );
}