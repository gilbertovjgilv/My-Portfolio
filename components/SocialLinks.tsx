
import React from 'react';
import { GithubIcon, LinkedInIcon } from './icons/Icons';

interface SocialLinksProps {
  iconClassName?: string;
  linkedinUrl: string;
  githubUrl: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ iconClassName, linkedinUrl, githubUrl }) => {
  const defaultClasses = "text-[var(--primary-color)] hover:opacity-80 transition-opacity";
  const finalClassName = iconClassName || defaultClasses;

  return (
    <div className="flex items-center space-x-4">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={finalClassName}>
        <LinkedInIcon />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={finalClassName}>
        <GithubIcon />
      </a>
    </div>
  );
};

export default SocialLinks;