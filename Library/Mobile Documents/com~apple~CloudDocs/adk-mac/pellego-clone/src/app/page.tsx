import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import CompAnalysis from '@/components/ui/CompAnalysis';
import Testimonials from '@/components/ui/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <CompAnalysis />
      <Testimonials />
      <Footer />
    </main>
  );
} 