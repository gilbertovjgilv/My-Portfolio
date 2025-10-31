import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import { DownloadIcon, ChevronDownIcon } from './icons/Icons';

interface HeroProps {
  t: typeof translations.en.hero;
  linkedinUrl: string; // This prop is kept for type consistency but is not used in the new design
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = t.roles;
    if (!roles || roles.length === 0) return;

    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedRole(current => current.substring(0, current.length - 1));
      } else {
        setDisplayedRole(current => currentRole.substring(0, current.length + 1));
      }
    };
    
    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);

    if (!isDeleting && displayedRole === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex, t.roles]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-color)] mb-4">
          {t.greeting}{' '}
          <span className="text-[var(--primary-color)]">{t.name}</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-secondary)] mb-6 h-12">
          I am a{' '}
          <span className="text-[var(--primary-color)]">{displayedRole}</span>
          <span className="typewriter-cursor"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] mb-10">{t.description}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="#projects" 
            onClick={handleScrollToProjects}
            className="bg-[var(--primary-color)] text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            {t.buttonProjects}
          </a>
          <a 
            href={t.cvUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[var(--bg-color-alt)] text-[var(--text-color)] font-medium py-3 px-8 rounded-lg hover:bg-opacity-80 transition-opacity inline-flex items-center gap-2 border border-[var(--border-color)]"
          >
            <DownloadIcon />
            {t.buttonCV}
          </a>
        </div>
      </div>
      <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'})}} className="absolute bottom-10 animate-bounce">
        <ChevronDownIcon className="w-8 h-8 text-[var(--text-secondary)]" />
      </a>
    </section>
  );
};

export default Hero;