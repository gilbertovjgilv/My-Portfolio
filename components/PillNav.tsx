

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language, Theme } from '../types';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './icons/Icons';
import FlipButton, { FlipButtonFront, FlipButtonBack } from './FlipButton';

interface NavItem {
  href: string;
  label: string;
}

interface PillNavProps {
  logo: string;
  items: NavItem[];
  activeHref: string;
  baseColor: string;
  pillColor: string;
  hoveredPillTextColor: string;
  pillTextColor: string;
  borderColor: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeChange: () => void;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  items,
  activeHref,
  baseColor,
  pillColor,
  hoveredPillTextColor,
  pillTextColor,
  borderColor,
  language,
  onLanguageChange,
  theme,
  onThemeChange,
}) => {
  const [pillStyle, setPillStyle] = useState<{ width: number; left: number }>({ width: 0, left: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const updatePill = useCallback(() => {
    if (navRef.current) {
      const activeItem = navRef.current.querySelector(`[data-href="${activeHref}"]`) as HTMLLIElement;
      if (activeItem) {
        setPillStyle({
          width: activeItem.offsetWidth,
          left: activeItem.offsetLeft,
        });
      }
    }
  }, [activeHref]);

  useEffect(() => {
    setIsMounted(true);
    // Use timeout to ensure DOM is ready for measurement.
    const timer = setTimeout(() => {
      updatePill();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeHref, updatePill]);

  useEffect(() => {
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [updatePill]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-1 text-sm font-medium">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-2 py-1 rounded-md transition-colors ${language === 'en' ? 'text-[var(--primary-color)]' : ''}`}
        style={{ color: language !== 'en' ? pillTextColor : ''}}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span style={{ color: borderColor }}>|</span>
      <button
        onClick={() => onLanguageChange('es')}
        className={`px-2 py-1 rounded-md transition-colors ${language === 'es' ? 'text-[var(--primary-color)]' : ''}`}
        style={{ color: language !== 'es' ? pillTextColor : ''}}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );

  const ThemeSwitcher = () => (
     <FlipButton
        onClick={onThemeChange}
        isFlipped={theme === 'light'}
      >
        <FlipButtonFront>
            <div className="p-2 rounded-full" style={{ color: pillTextColor }}>
              <SunIcon />
            </div>
        </FlipButtonFront>
        <FlipButtonBack>
            <div className="p-2 rounded-full" style={{ color: pillTextColor }}>
              <MoonIcon />
            </div>
        </FlipButtonBack>
      </FlipButton>
  );

  const navLinks = (
    <>
      {items.map((item) => (
        <li
          key={item.href}
          data-href={item.href}
          className="relative z-10"
        >
          <a
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            className="block px-4 py-2 text-sm font-medium transition-colors duration-300"
            style={{ color: activeHref === item.href ? hoveredPillTextColor : pillTextColor }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-full shadow-lg border"
        style={{ backgroundColor: baseColor, borderColor, transition: 'background-color 300ms ease-in-out, border-color 300ms ease-in-out' }}
      >
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" style={{ backgroundColor: pillColor }}/>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center">
            <ul ref={navRef} className="flex items-center p-1 rounded-full relative" style={{ backgroundColor: pillColor, transition: 'background-color 300ms ease-in-out' }}>
              <div
                className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-0.5rem)] rounded-full transition-all duration-300 ease-in-out"
                style={{
                  ...pillStyle,
                  backgroundColor: baseColor,
                  opacity: isMounted && pillStyle.width > 0 ? 1 : 0,
                }}
              />
              {navLinks}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          
          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: pillTextColor }}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden mt-2 rounded-lg shadow-lg border"
          style={{ backgroundColor: baseColor, borderColor, transition: 'background-color 300ms ease-in-out, border-color 300ms ease-in-out' }}
        >
          <nav>
            <ul className="flex flex-col items-center space-y-2 p-4">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block px-4 py-2 text-sm font-medium rounded-md w-full text-center"
                    style={{
                      color: pillTextColor,
                      backgroundColor: activeHref === item.href ? pillColor : 'transparent',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center space-x-4 p-4 border-t" style={{ borderColor }}>
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default PillNav;