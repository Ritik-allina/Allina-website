import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import Solutions from '@/components/Solutions';
import { FutureServices } from '@/components/FutureServices';

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] flex flex-col justify-start relative overflow-hidden">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <ServicesHero />
        <Solutions />
        <FutureServices />
      </main>
      <Footer />
    </div>
  );
};

export default Services; 