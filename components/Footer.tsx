
import React from 'react';
import SocialLinks from './SocialLinks';
import { translations } from '../translations';

interface FooterProps {
  t: typeof translations.en;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[var(--primary-color)] py-12 text-center text-sm text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-3xl font-bold mb-8 inline-block hover:opacity-80">{t.hero.name}</a>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12">
          <li><a href="#about" className="hover:text-white/80">{t.nav.about}</a></li>
          <li><a href="#skills" className="hover:text-white/80">{t.nav.skills}</a></li>
          <li><a href="#projects" className="hover:text-white/80">{t.nav.projects}</a></li>
        </ul>

        <div className="flex justify-center mb-10 text-xl">
           <SocialLinks linkedinUrl={t.about.linkedinUrl} iconClassName="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 border border-transparent" />
        </div>

        <div className="text-xs text-white/80">
          <small>{t.footer.rights}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
