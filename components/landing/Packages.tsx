'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Building2, Chrome as Home, Castle } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Packages() {
  const { t } = useLanguage();

  const packages = [
    {
      id: 'basic',
      icon: Building2,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      popular: false,
    },
    {
      id: 'premium',
      icon: Home,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      popular: true,
    },
    {
      id: 'villa',
      icon: Castle,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      popular: false,
    },
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.packages.title}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            const pkgData = pkg.id === 'basic' ? t.packages.basic : pkg.id === 'premium' ? t.packages.premium : t.packages.villa;

            return (
              <Card
                key={pkg.id}
                className={`relative bg-[#1a1a2e] border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                  pkg.popular
                    ? 'border-amber-500 shadow-xl shadow-amber-500/20'
                    : 'border-gray-700 hover:border-amber-500/50'
                }`}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={pkg.image}
                    alt={pkgData.title}
                    fill
                    className="object-cover brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent"></div>

                  {pkg.popular && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-amber-500 text-black font-bold px-6 py-2 rounded-full text-sm shadow-lg">
                        {t.packages.mostPopular}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-amber-500 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-white">{pkgData.title}</CardTitle>
                  <CardDescription className="text-amber-500 font-semibold">
                    {pkgData.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-1">{pkgData.priceNote}</div>
                    <div className="text-3xl font-bold text-amber-500">{pkgData.price}</div>
                  </div>

                  <ul className="space-y-3">
                    {pkgData.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={scrollToForm}
                    className={`w-full font-semibold ${
                      pkg.popular
                        ? 'bg-amber-500 hover:bg-amber-600 text-black'
                        : 'bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black'
                    }`}
                  >
                    {t.packages.bookNow}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">
            {t.packages.footer}
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
          >
            {t.packages.customQuote}
          </Button>
        </div>
      </div>
    </section>
  );
}
