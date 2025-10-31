

import React, { useState } from 'react';
import { translations } from '../translations';
import { ArrowRightIcon } from './icons/Icons';
import ProjectModal, { Project } from './ProjectModal';

interface ProjectsProps {
  t: typeof translations.en.projects;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]">{t.title}</h2>
          <p className="text-center text-sm text-[var(--text-secondary)] mb-12">{t.subtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, index) => (
              <div key={index} className="group bg-[var(--bg-color)] border border-[var(--primary-color)]/20 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 transition-all duration-300 ease-in-out">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[var(--primary-color)]">{project.category}</span>
                  <h3 className="text-xl font-bold text-[var(--text-color)] my-2">{project.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(project as Project)}
                    className="text-[var(--primary-color)] font-medium text-sm inline-flex items-center"
                  >
                    {t.viewMore} <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;
