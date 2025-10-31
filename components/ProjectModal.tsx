
import React from 'react';
import { CloseIcon, GithubIcon } from './icons/Icons';

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[var(--bg-color)] rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors z-10"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
        
        <div className="p-8">
          <span className="text-sm font-semibold text-[var(--primary-color)] mb-2 inline-block">{project.category}</span>
          <h2 id="project-modal-title" className="text-3xl font-bold text-[var(--text-color)] mb-4">{project.title}</h2>
          <p className="text-[var(--text-secondary)] mb-6">{project.description}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-[var(--primary-color)] font-medium hover:underline"
          >
            View on GitHub <GithubIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
