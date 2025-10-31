
import React from 'react';
import { AwardIcon, BriefcaseIcon, CheckCircleIcon } from './icons/Icons';
import { translations } from '../translations';
import StarBorder from './StarBorder';

interface AboutProps {
  t: typeof translations.en.about;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-[var(--text-color)]">{t.title}</h2>
        <p className="text-center text-sm text-[var(--text-secondary)] mb-12">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-sm mx-auto">
            <img 
              src="https://drive.google.com/file/d/1Vbv08C5wqjO6q3HKzXKkjnWjWwit6bMd/view?usp=sharing" 
              alt="Gilberto Gil"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
              <StarBorder as="div" color="var(--primary-color)" speed="5s">
                <AwardIcon className="mx-auto text-2xl text-[var(--primary-color)] mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-color)]">Experience</h3>
                <span className="text-xs text-[var(--text-secondary)]">{t.experience}</span>
              </StarBorder>
              <StarBorder as="div" color="var(--primary-color)" speed="5.5s">
                <BriefcaseIcon className="mx-auto text-2xl text-[var(--primary-color)] mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-color)]">Automations</h3>
                <span className="text-xs text-[var(--text-secondary)]">{t.automations}</span>
              </StarBorder>
              <StarBorder as="div" color="var(--primary-color)" speed="4.5s">
                 <CheckCircleIcon className="mx-auto text-2xl text-[var(--primary-color)] mb-2" />
                <h3 className="font-bold text-sm text-[var(--text-color)]">CSAT</h3>
                <span className="text-xs text-[var(--text-secondary)]">{t.csat}</span>
              </StarBorder>
            </div>
            <p className="text-[var(--text-secondary)] mb-8">{t.description}</p>
            <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--primary-color)] text-white font-medium py-3 px-6 rounded-lg inline-flex items-center hover:opacity-90">
              {t.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
