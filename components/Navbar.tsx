'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

const languages = [
  { code: 'en' as Language, name: 'English', flag: 'EN' },
  { code: 'tr' as Language, name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇦🇪' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-gray-800" dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500 rounded-sm px-6 py-2 shadow-lg shadow-amber-500/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <h1 className="text-2xl font-bold text-amber-500 tracking-[0.3em] relative">
                <span className="relative">E</span>
                <span className="relative mx-0.5">E</span>
                <span className="relative">I</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <button
              onClick={scrollToTop}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium whitespace-nowrap"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium whitespace-nowrap"
            >
              {t.nav.packages}
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium whitespace-nowrap"
            >
              {t.nav.whyChooseUs}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium whitespace-nowrap"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium whitespace-nowrap"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-base font-bold transition-all px-3 py-1.5 rounded min-w-[44px] text-center ${
                    language === lang.code
                      ? 'text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] bg-amber-500/10'
                      : 'text-gray-400 hover:text-amber-400 hover:bg-gray-800/50'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={scrollToTop}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                {t.nav.packages}
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                {t.nav.whyChooseUs}
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                {t.nav.testimonials}
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
