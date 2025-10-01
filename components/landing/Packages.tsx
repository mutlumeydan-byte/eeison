'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Building2, Chrome as Home, Castle } from 'lucide-react';
import Image from 'next/image';

export default function Packages() {
  const packages = [
    {
      id: 'basic',
      title: 'Basic Apartment',
      price: 'AED 1,500',
      description: 'Perfect for standard apartments up to 1,500 sq ft',
      features: [
        'Complete structural inspection',
        'Electrical & plumbing check',
        'Finishing quality assessment',
        'Detailed photo documentation',
        '12-hour report delivery',
        'Post-inspection support',
        'Basic warranty coverage'
      ],
      icon: Building2,
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      popular: false,
    },
    {
      id: 'premium',
      title: 'Premium Apartment',
      price: 'AED 2,200',
      description: 'Comprehensive inspection for luxury apartments',
      features: [
        'Complete structural inspection',
        'Electrical & plumbing check',
        'Finishing quality assessment',
        'Detailed photo documentation',
        '12-hour report delivery',
        'Post-inspection support',
        'Extended warranty coverage'
      ],
      icon: Home,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      popular: true,
    },
    {
      id: 'villa',
      title: 'Villa Pro',
      price: 'AED 3,500',
      description: 'Complete villa inspection service',
      features: [
        'Complete structural inspection',
        'Electrical & plumbing check',
        'Finishing quality assessment',
        'Detailed photo documentation',
        '12-hour report delivery',
        'Post-inspection support',
        'Lifetime warranty coverage'
      ],
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
            Inspection Packages
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect inspection package for your property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className={`bg-[#1a1a2e] border-2 ${
                  pkg.popular ? 'border-amber-500' : 'border-gray-800'
                } hover:border-amber-500 transition-all hover:scale-105 relative overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="h-12 w-12 text-amber-500" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-white">{pkg.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {pkg.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-amber-500 mt-4">
                    {pkg.price}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <Check className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={scrollToForm}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold"
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
