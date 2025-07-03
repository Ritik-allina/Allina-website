import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SustainabilityHero from '@/components/SustainabilityHero';
import { OurCommitments, SustainabilityIntro } from '@/components/OurCommitments';
import { GreenProjects } from '@/components/GreenProjects';
import { SustainabilitySlider } from '@/components/SustainabilitySlider';
import { CinematicLocationCarousel } from '@/components/CinematicLocationCarousel';

const Sustainability = () => {
  return (
    <div className="min-h-screen w-full bg-[#06153A] flex flex-col justify-start relative overflow-hidden">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <SustainabilityHero />
        <SustainabilityIntro />
        <OurCommitments />
        <GreenProjects />
        <SustainabilitySlider />
   
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability; 