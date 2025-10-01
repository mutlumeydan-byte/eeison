'use client';

import { Award, Clock, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const featureIcons = [Award, Clock, Globe, ShieldCheck];
const featureGradients = [
  'from-amber-500 to-yellow-600',
  'from-amber-500 to-orange-600',
  'from-amber-500 to-amber-600',
  'from-amber-500 to-yellow-500',
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.whyChooseUs.features.certified.title,
      description: t.whyChooseUs.features.certified.description,
    },
    {
      title: t.whyChooseUs.features.reports.title,
      description: t.whyChooseUs.features.reports.description,
    },
    {
      title: t.whyChooseUs.features.multilingual.title,
      description: t.whyChooseUs.features.multilingual.description,
    },
    {
      title: t.whyChooseUs.features.independent.title,
      description: t.whyChooseUs.features.independent.description,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.whyChooseUs.title}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = featureIcons[index];
            const gradient = featureGradients[index];
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-gray-800 rounded-xl p-8 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="flex items-start gap-6">
                  <div className={`bg-gradient-to-br ${gradient} p-4 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border-2 border-amber-500/30 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t.whyChooseUs.trustTitle}
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              {t.whyChooseUs.trustDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a2e] rounded-lg p-6 border border-amber-500/30">
                <div className="text-3xl font-bold text-amber-500 mb-2">98%</div>
                <div className="text-gray-400">{t.whyChooseUs.stats.satisfaction}</div>
              </div>
              <div className="bg-[#1a1a2e] rounded-lg p-6 border border-amber-500/30">
                <div className="text-3xl font-bold text-amber-500 mb-2">500+</div>
                <div className="text-gray-400">{t.whyChooseUs.stats.properties}</div>
              </div>
              <div className="bg-[#1a1a2e] rounded-lg p-6 border border-amber-500/30">
                <div className="text-3xl font-bold text-amber-500 mb-2">5★</div>
                <div className="text-gray-400">{t.whyChooseUs.stats.rating}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
