'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Globe, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Certified Engineers',
      description: 'Our team consists of licensed professional engineers with years of experience in property inspection and construction quality control.'
    },
    {
      icon: Clock,
      title: '12-Hour Reports',
      description: 'Receive your comprehensive inspection report within 12 hours of completion, allowing you to make informed decisions quickly.'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'We provide services in English, Arabic, and Turkish to ensure clear communication and understanding throughout the process.'
    },
    {
      icon: Shield,
      title: 'Independent & Unbiased',
      description: 'We work exclusively for you, with no ties to developers or contractors, ensuring completely objective assessments.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trust the experts for your property inspection needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-gray-800 hover:border-amber-500 transition-all hover:scale-105 group"
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors">
                      <IconComponent className="h-12 w-12 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">500+</div>
            <div className="text-gray-400">Properties Inspected</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">12h</div>
            <div className="text-gray-400">Report Delivery</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">3</div>
            <div className="text-gray-400">Languages Supported</div>
          </div>
        </div>
      </div>
    </section>
  );
}
