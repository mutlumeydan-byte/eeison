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

interface FormData {
  name: string;
  email: string;
  phone: string;
  property: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  property?: string;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validateStep = () => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (step === 2) {
      if (!formData.property) newErrors.property = 'Property type is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) return;

    setIsSubmitting(true);
    setShowError(false);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          property: '',
          message: ''
        });
        setStep(1);
      } else {
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (step / 3) * 100;

  return (
    <>
      <section id="contact-form" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg')] bg-cover bg-center opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get Your Free Consultation
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-[#1a1a2e] rounded-2xl shadow-2xl shadow-amber-500/10 border-2 border-amber-500/30 overflow-hidden">
              <div className="h-2 bg-gray-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className={step >= 1 ? 'text-amber-500 font-semibold' : ''}>
                      Step 1: Contact Info
                    </span>
                    <span className={step >= 2 ? 'text-amber-500 font-semibold' : ''}>
                      Step 2: Property Details
                    </span>
                    <span className={step >= 3 ? 'text-amber-500 font-semibold' : ''}>
                      Step 3: Additional Info
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <Label htmlFor="name" className="text-white text-base mb-2">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          className="bg-[#0f0f1e] border-gray-700 text-white focus:border-amber-500 h-12"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white text-base mb-2">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className="bg-[#0f0f1e] border-gray-700 text-white focus:border-amber-500 h-12"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-white text-base mb-2">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className="bg-[#0f0f1e] border-gray-700 text-white focus:border-amber-500 h-12"
                          placeholder="+971 50 123 4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <Label htmlFor="property" className="text-white text-base mb-2">
                          Property Type *
                        </Label>
                        <Select
                          value={formData.property}
                          onValueChange={(value) => updateFormData('property', value)}
                        >
                          <SelectTrigger className="bg-[#0f0f1e] border-gray-700 text-white focus:border-amber-500 h-12">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1a1a2e] border-gray-700">
                            <SelectItem value="apartment" className="text-white hover:bg-amber-500/20">
                              Apartment
                            </SelectItem>
                            <SelectItem value="premium-apartment" className="text-white hover:bg-amber-500/20">
                              Premium Apartment
                            </SelectItem>
                            <SelectItem value="villa" className="text-white hover:bg-amber-500/20">
                              Villa
                            </SelectItem>
                            <SelectItem value="penthouse" className="text-white hover:bg-amber-500/20">
                              Penthouse
                            </SelectItem>
                            <SelectItem value="townhouse" className="text-white hover:bg-amber-500/20">
                              Townhouse
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.property && (
                          <p className="text-red-500 text-sm mt-1">{errors.property}</p>
                        )}
                      </div>

                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <Label htmlFor="message" className="text-white text-base mb-2">
                          Additional Message (Optional)
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData('message', e.target.value)}
                          className="bg-[#0f0f1e] border-gray-700 text-white focus:border-amber-500 min-h-[150px]"
                          placeholder="Tell us more about your property or specific concerns..."
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    {step > 1 && (
                      <Button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 h-12"
                      >
                        <ChevronLeft className="mr-2 h-5 w-5" />
                        Previous
                      </Button>
                    )}

                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold h-12"
                      >
                        Next
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-bold h-12"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Submit Request'
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-[#1a1a2e] border-2 border-amber-500 text-white">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-black" />
              </div>
            </div>
            <DialogTitle className="text-2xl text-center">Request Sent Successfully!</DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              Thank you for contacting Elite Engineering Inspections. We will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowSuccess(false)}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={showError} onOpenChange={setShowError}>
        <DialogContent className="bg-[#1a1a2e] border-2 border-red-500 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-red-500">Error</DialogTitle>
            <DialogDescription className="text-gray-400 text-center">
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowError(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
