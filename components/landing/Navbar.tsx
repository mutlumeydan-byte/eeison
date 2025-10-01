'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500 rounded-sm px-8 py-2 shadow-lg shadow-amber-500/20">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <h1 className="text-2xl font-bold text-amber-500 tracking-[0.3em] font-heading">
                EEI
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-md font-bold transition-all hover:scale-105"
            >
              Contact
            </button>
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

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-500/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={scrollToTop}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="text-gray-300 hover:text-amber-500 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
