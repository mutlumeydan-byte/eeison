'use client';

import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#050508] border-t border-amber-500/20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
          alt="Dubai skyline"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div
              onClick={scrollToTop}
              className="inline-block bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500 rounded-sm px-8 py-3 cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-amber-500/20"
            >
              <h3 className="text-3xl font-bold text-amber-500 tracking-[0.3em]">EEI</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elite Engineering Inspections - Your trusted partner for independent property inspections in the UAE.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-amber-500/30 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@eeiae.com">info@eeiae.com</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+971501234567">+971 50 123 4567</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-amber-500/30 pb-2">
              Business Hours
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="text-amber-500 font-semibold">Sunday - Thursday:</span>
                <br />
                8:00 AM - 6:00 PM
              </li>
              <li>
                <span className="text-amber-500 font-semibold">Saturday:</span>
                <br />
                9:00 AM - 2:00 PM
              </li>
              <li>
                <span className="text-amber-500 font-semibold">Friday:</span>
                <br />
                Closed
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 border-b border-amber-500/30 pb-2">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Elite Engineering Inspections. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Certified Professional Engineers | UAE Licensed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
