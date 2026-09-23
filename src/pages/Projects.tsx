import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS, Project } from '../data/projects';
import './Projects.css';

type Filter = 'all' | 'active' | 'completed';

const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const visible = PROJECTS.filter(
    (p) =>
      (filter === 'all' || p.status === filter) &&
      (activeTags.length === 0 || activeTags.some((t) => p.tags.includes(t)))
  );

  return (
    <div className="page-wrapper">
      <section className="projects-section">

        <div className="projects-header">
            <div className="section-tag">What We Build</div>
            <h1 className="section-h2 reveal">Projects</h1>
          <div className="filter-bar">
            {(['all', 'active', 'completed'] as Filter[]).map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? ' filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'active' ? 'Active' : 'Completed'}
              </button>
            ))}
          </div>
        </div>

        <div className="tag-filter-bar">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={`tag-filter-btn${activeTags.includes(tag) ? ' tag-filter-btn--active' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
          {activeTags.length > 0 && (
            <button className="tag-filter-clear" onClick={() => setActiveTags([])}>
              Clear ×
            </button>
          )}
        </div>

        {visible.length === 0 && (
          <p className="projects-empty">No projects match the selected filters.</p>
        )}

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
        <div className="project-num">{project.num} · {project.category}</div>
      <span className={`project-status project-status--${project.status}`}>
        {project.status === 'active' ? 'Active' : 'Completed'}
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