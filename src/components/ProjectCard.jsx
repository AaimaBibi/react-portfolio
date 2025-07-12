import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="project-card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
