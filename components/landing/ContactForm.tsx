'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CircleCheck as CheckCircle2, ChevronLeft, ChevronRight, Loader as Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  property: string;
  size: string;
  location: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    property: '',
    size: '',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = t.contactForm.errors.nameRequired;
      if (!formData.email.trim()) {
        newErrors.email = t.contactForm.errors.emailRequired;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t.contactForm.errors.emailInvalid;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = t.contactForm.errors.phoneRequired;
      } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
        newErrors.phone = t.contactForm.errors.phoneInvalid;
      }
    }

    if (currentStep === 2) {
      if (!formData.property) newErrors.property = t.contactForm.errors.propertyRequired;
      if (!formData.size) newErrors.size = t.contactForm.errors.sizeRequired;
      if (!formData.location.trim()) newErrors.location = t.contactForm.errors.locationRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step !== 3) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Form submitted:', formData);

      await new Promise(resolve => setTimeout(resolve, 1000));

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        property: '',
        size: '',
        location: '',
        message: '',
      });
      setStep(1);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contactForm.title}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.contactForm.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-[600px] rounded-xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg"
                alt="Engineer inspecting property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Professional Property Inspection
                </h3>
                <p className="text-gray-300 text-lg">
                  Trust our certified engineers to provide thorough, unbiased assessments of your property investment.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border-2 border-amber-500/30 rounded-xl p-8">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          s === step
                            ? 'bg-amber-500 text-black'
                            : s < step
                            ? 'bg-amber-500/30 text-amber-500'
                            : 'bg-gray-700 text-gray-500'
                        }`}
                      >
                        {s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-1 mx-2 ${
                            s < step ? 'bg-amber-500' : 'bg-gray-700'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-center">
                  {step === 1 && t.contactForm.step1}
                  {step === 2 && t.contactForm.step2}
                  {step === 3 && t.contactForm.step3}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-white">
                        {t.contactForm.fields.name} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="mt-2 bg-[#0a0a0f] border-gray-700 text-white focus:border-amber-500"
                        placeholder={t.contactForm.placeholders.name}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">
                        {t.contactForm.fields.email} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="mt-2 bg-[#0a0a0f] border-gray-700 text-white focus:border-amber-500"
                        placeholder={t.contactForm.placeholders.email}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">
                        {t.contactForm.fields.phone} *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="mt-2 bg-[#0a0a0f] border-gray-700 text-white focus:border-amber-500"
                        placeholder={t.contactForm.placeholders.phone}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="property" className="text-white">
                        {t.contactForm.fields.property} *
                      </Label>
                      <Select
                        value={formData.property}
                        onValueChange={(value) => updateFormData('property', value)}
                      >
                        <SelectTrigger className="mt-2 bg-[#0a0a0f] border-gray-700 text-white">
                          <SelectValue placeholder={t.contactForm.placeholders.property} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">{t.contactForm.propertyTypes.apartment}</SelectItem>
                          <SelectItem value="villa">{t.contactForm.propertyTypes.villa}</SelectItem>
                          <SelectItem value="townhouse">{t.contactForm.propertyTypes.townhouse}</SelectItem>
                          <SelectItem value="penthouse">{t.contactForm.propertyTypes.penthouse}</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.property && (
                        <p className="text-red-500 text-sm mt-1">{errors.property}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="size" className="text-white">
                        {t.contactForm.fields.size} *
                      </Label>
                      <Select
                        value={formData.size}
                        onValueChange={(value) => updateFormData('size', value)}
                      >
                        <SelectTrigger className="mt-2 bg-[#0a0a0f] border-gray-700 text-white">
                          <SelectValue placeholder={t.contactForm.placeholders.size} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">{t.contactForm.sizes.studio}</SelectItem>
                          <SelectItem value="1br">{t.contactForm.sizes.oneBr}</SelectItem>
                          <SelectItem value="2br">{t.contactForm.sizes.twoBr}</SelectItem>
                          <SelectItem value="3br">{t.contactForm.sizes.threeBr}</SelectItem>
                          <SelectItem value="4br">{t.contactForm.sizes.fourPlusBr}</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.size && (
                        <p className="text-red-500 text-sm mt-1">{errors.size}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-white">
                        {t.contactForm.fields.location} *
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => updateFormData('location', e.target.value)}
                        className="mt-2 bg-[#0a0a0f] border-gray-700 text-white focus:border-amber-500"
                        placeholder={t.contactForm.placeholders.location}
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                      )}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="message" className="text-white">
                        {t.contactForm.fields.message}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.stopPropagation();
                          }
                        }}
                        className="mt-2 bg-[#0a0a0f] border-gray-700 text-white focus:border-amber-500 min-h-[150px]"
                        placeholder={t.contactForm.placeholders.message}
                      />
                    </div>

                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <p className="text-amber-500 text-sm">
                        {t.contactForm.disclaimer}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={handlePrevious}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold"
                    >
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      {t.contactForm.buttons.previous}
                    </Button>
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold"
                    >
                      {t.contactForm.buttons.next}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t.contactForm.buttons.submitting}
                        </>
                      ) : (
                        t.contactForm.buttons.submit
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-[#1a1a2e] border-2 border-amber-500">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-amber-500 rounded-full p-3">
                <CheckCircle2 className="h-12 w-12 text-black" />
              </div>
            </div>
            <DialogTitle className="text-2xl text-center text-white">
              {t.contactForm.successTitle}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-300 text-lg">
              {t.contactForm.successMessage}
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowSuccess(false)}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
          >
            {t.contactForm.close}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}