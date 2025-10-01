'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg"
          alt="Dubai skyline at night"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/70 to-[#0a0a0f]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500 rounded-sm px-12 py-5 shadow-2xl shadow-amber-500/30 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 tracking-[0.3em] relative">
              <span className="relative">E</span>
              <span className="relative mx-1">E</span>
              <span className="relative">I</span>
            </h1>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          {t.hero.title}
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <p className="text-lg md:text-xl text-amber-500 mb-12 font-semibold">
          {t.hero.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
          >
            <Mail className="mr-2 h-5 w-5" />
            {t.hero.consultation}
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
          >
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.hero.whatsapp}
            </a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">500+</div>
            <div className="text-gray-300">{t.hero.stats.properties}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">12 Hours</div>
            <div className="text-gray-300">{t.hero.stats.hours}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-amber-500/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-300">{t.hero.stats.independent}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
