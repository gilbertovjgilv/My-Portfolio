

import React, { useState } from 'react';
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './icons/Icons';
import { translations } from '../translations';
import { Language, Theme } from '../types';

interface HeaderProps {
  t: typeof translations.en.nav;
  name: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeChange: () => void;
}

const Header: React.FC<HeaderProps> = ({ t, name, language, onLanguageChange, theme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#skills', label: t.skills },
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience },
    { href: '#contact', label: t.contact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <button
        onClick={() => onLanguageChange('en')}
        className={`${language === 'en' ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'} hover:text-[var(--primary-color)] transition-colors`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-[var(--text-secondary)]">|</span>
      <button
        onClick={() => onLanguageChange('es')}
        className={`${language === 'es' ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'} hover:text-[var(--primary-color)] transition-colors`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );

  const ThemeSwitcher = () => (
    <button
      onClick={onThemeChange}
      className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--bg-color)]/80 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-[var(--primary-color)]">
            {name}
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                {link.label}
              </a>
            ))}
            <div className="ml-4 flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--text-color)]">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--bg-color)]">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;