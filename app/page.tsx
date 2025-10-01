import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Packages from '@/components/landing/Packages';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Testimonials from '@/components/landing/Testimonials';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';

export default function Page() {
  return (
    <main className="bg-[#0a0a0f] text-white">
      <Navbar />
      <Hero />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
