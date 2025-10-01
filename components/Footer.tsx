'use client';

import Image from 'next/image';
import { Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-gray-800">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg"
          alt="Dubai skyline"
          fill
          className="object-cover grayscale"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <div className="bg-amber-500/10 border-2 border-amber-500 rounded-lg px-6 py-3 inline-block">
                <h3 className="text-2xl font-bold text-amber-500 tracking-wider">EEI</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/eeiae"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500/10 hover:bg-amber-500 border border-amber-500 rounded-full p-3 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-amber-500 hover:text-black" />
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500/10 hover:bg-amber-500 border border-amber-500 rounded-full p-3 transition-all hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 text-amber-500 hover:text-black" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">{t.footer.contactInfo}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">{t.footer.email}</p>
                  <a
                    href="mailto:info@eeiae.com"
                    className="text-white hover:text-amber-500 transition-colors"
                  >
                    info@eeiae.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">{t.footer.phone}</p>
                  <a
                    href="tel:+971501234567"
                    className="text-white hover:text-amber-500 transition-colors"
                  >
                    +971 50 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">{t.footer.location}</p>
                  <p className="text-white">{t.footer.locationValue}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">{t.footer.businessHours}</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>{t.footer.sunThu}</span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>{t.footer.friSat}</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
            </ul>

            <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <p className="text-amber-500 font-semibold mb-2">{t.footer.certified}</p>
              <p className="text-gray-400 text-sm">
                {t.footer.certifiedDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
