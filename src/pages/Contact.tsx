import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactHero } from '@/components/ContactHero';
import { ContactInfo } from '@/components/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] flex flex-col justify-start relative overflow-hidden">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 