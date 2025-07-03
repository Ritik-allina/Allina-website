import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CareerHero } from '@/components/CareerHero';
import { OpenRoles } from '@/components/OpenRoles';
import { EmployeeTestimonials } from '@/components/EmployeeTestimonials';

const Career = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] flex flex-col justify-start relative overflow-hidden">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <CareerHero />
        <OpenRoles />
        <EmployeeTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Career; 