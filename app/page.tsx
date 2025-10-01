import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Packages from '@/components/Packages';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

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
