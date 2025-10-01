'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed K.',
      role: 'Property Investor',
      content: 'EEI saved me from making a costly mistake. Their thorough inspection revealed issues the developer had hidden. Professional, fast, and incredibly detailed.',
      rating: 5,
      initials: 'AK'
    },
    {
      name: 'Sarah M.',
      role: 'First-time Buyer',
      content: 'The team was amazing! They explained everything in detail and delivered the report in just 10 hours. Their expertise gave me confidence in my purchase.',
      rating: 5,
      initials: 'SM'
    },
    {
      name: 'Mohammed R.',
      role: 'Villa Owner',
      content: 'Outstanding service from start to finish. The engineers were thorough, professional, and their report was comprehensive. Highly recommended for any property inspection.',
      rating: 5,
      initials: 'MR'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our clients say about our inspection services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#1a1a2e] border-2 border-amber-500/30 hover:border-amber-500 transition-all hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16 text-amber-500" />
              </div>

              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
