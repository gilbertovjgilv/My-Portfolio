
import React from 'react';
import { CustomerSuccessIcon, AutomationIcon, TechIcon } from './icons/Icons';
import { translations } from '../translations';
import SpotlightCard from './SpotlightCard';

interface SkillsProps {
  t: typeof translations.en.skills;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  CustomerSuccessIcon,
  AutomationIcon,
  TechIcon,
};

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section id="skills" className="py-20 bg-[var(--bg-color-alt)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]">{t.title}</h2>
        <p className="text-center text-sm text-[var(--text-secondary)] mb-12">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <SpotlightCard 
                key={category.title}
                spotlightColor="rgba(13, 148, 136, 0.15)"
              >
                <div className="flex items-center mb-6">
                  {IconComponent && <IconComponent className="text-3xl text-[var(--primary-color)] mr-4" />}
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-color)]">{category.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <svg className="w-4 h-4 text-[var(--primary-color)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="text-[var(--text-color)] text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;