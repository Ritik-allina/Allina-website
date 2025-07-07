import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutHero } from '@/components/AboutHero';
import { MeetOurTeam } from '@/components/MeetOurTeam';
import { OurValues } from '@/components/OurValues';
import { VisionMissionSection } from '@/components/VisionMissionSection';
import { AboutLocationsSlider } from '@/components/AboutLocationsSlider';
import { CinematicLocationCarousel } from '@/components/CinematicLocationCarousel';

const About = () => {
  return (
    <div className='min-h-screen w-full bg-[#E7DED7] flex flex-col justify-start relative overflow-hidden'>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <AboutHero />
        <VisionMissionSection />
        <OurValues />
        <MeetOurTeam />
        <AboutLocationsSlider />
      </main>
      <Footer/>
    </div>
  );
};

export default About;
