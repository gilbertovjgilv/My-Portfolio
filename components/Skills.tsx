import React from 'react';
import { CustomerSuccessIcon, AutomationIcon, TechIcon, BriefcaseIcon } from './icons/Icons';
import { translations } from '../translations';
import SpotlightCard from './SpotlightCard';
import { motion, Variants } from 'framer-motion';

interface SkillsProps {
  t: typeof translations.en.skills;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  CustomerSuccessIcon,
  AutomationIcon,
  TechIcon,
  BriefcaseIcon,
};

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-[var(--bg-color-alt)]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]" variants={itemVariants}>{t.title}</motion.h2>
        <motion.p className="text-center text-sm text-[var(--text-secondary)] mb-12" variants={itemVariants}>{t.subtitle}</motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
        >
          {t.categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div key={category.id} variants={itemVariants}>
                <SpotlightCard 
                  spotlightColor="rgba(13, 148, 136, 0.15)"
                  className="h-full"
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;