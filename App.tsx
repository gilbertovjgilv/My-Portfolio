
import React, { useState, useEffect } from 'react';
import PillNav from './components/PillNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuroraBackground from './components/AuroraBackground';
import { translations } from './translations';
import { Language, Theme } from './types';

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="80" font-weight="bold" font-family="Poppins, sans-serif">GG</text></svg>`;

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang === 'en' || savedLang === 'es') ? savedLang : 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark';
  });
  
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
      root.classList.remove('dark'); // for tailwind dark mode if ever used
    } else {
      root.classList.remove('light-theme');
      root.classList.add('dark');
    }
  }, [theme]);
  
  useEffect(() => {
    const sections = ['#home', '#about', '#skills', '#projects', '#contact'];
    const sectionElements = sections.map(id => document.querySelector(id));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = '';

      for (const el of sectionElements) {
        if (el) {
          const sectionTop = (el as HTMLElement).offsetTop - 100; // nav height offset
          const sectionHeight = el.clientHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = `#${el.id}`;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const t = translations[language];

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  // Theme-aware colors using CSS variables from index.html
  const navBaseColor = theme === 'light' ? '#f1f5f9' : '#1e293b'; // bg-alt
  const navPillColor = theme === 'light' ? '#ffffff' : '#0f172a'; // bg-color
  const hoveredPillTextColor = '#0d9488'; // primary-color for both themes
  const pillTextColor = theme === 'light' ? '#0f172a' : '#f1f5f9'; // text-color
  const logoColor = theme === 'light' ? '#f1f5f9' : '#0f172a'; // contrast color for logo background
  const borderColor = theme === 'light' ? 'rgba(15, 23, 42, 0.1)' : 'rgba(241, 245, 249, 0.1)';

  const logoDataUri = `data:image/svg+xml;base64,${btoa(logoSvg.replace('currentColor', logoColor))}`;


  return (
    <>
      <AuroraBackground />
      <PillNav
        logo={logoDataUri}
        items={navItems}
        activeHref={activeSection}
        baseColor={navBaseColor}
        pillColor={navPillColor}
        hoveredPillTextColor={hoveredPillTextColor}
        pillTextColor={pillTextColor}
        borderColor={borderColor}
        language={language}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onThemeChange={handleThemeChange}
      />
      <main>
        <Hero t={t.hero} linkedinUrl={t.about.linkedinUrl} />
        <About t={t.about} />
        <Skills t={t.skills} />
        <Projects t={t.projects} />
        <Testimonials t={t.experience} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;