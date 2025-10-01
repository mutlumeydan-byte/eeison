'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const testimonials = [
  {
    name: 'Ahmed M.',
    initials: 'AM',
    role: 'Villa Owner, Dubai Hills',
    rating: 5,
    text: 'Exceptional service! The inspector was thorough and professional. The detailed report helped me negotiate a better price and avoid costly repairs. Highly recommend EEI for anyone buying property in Dubai.',
  },
  {
    name: 'Sarah K.',
    initials: 'SK',
    role: 'Apartment Buyer, Downtown Dubai',
    rating: 5,
    text: 'I was impressed by the quick turnaround. The report arrived in just 10 hours, beautifully detailed with photos and clear explanations. The engineer answered all my questions patiently. Worth every dirham.',
  },
  {
    name: 'Mohammed R.',
    initials: 'MR',
    role: 'Investor, Dubai Marina',
    rating: 5,
    text: 'As a real estate investor, I need reliable inspections. EEI has never disappointed. Their multilingual team and independent assessments give me confidence in every property decision. My go-to inspection company.',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-20 w-20 text-amber-500" />
              </div>

              <CardContent className="pt-8 relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 text-base italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-amber-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            {t.testimonials.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
