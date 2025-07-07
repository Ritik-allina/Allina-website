import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SustainabilityHero = () => {
  const navigate = useNavigate();
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const calculateHeroHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        setHeroHeight(`calc(100vh - ${headerHeight}px)`);
      } else {
        // Fallback if header not found
        setHeroHeight('calc(100vh - 80px)');
      }
    };

    // Calculate on mount
    calculateHeroHeight();

    // Recalculate on resize
    window.addEventListener('resize', calculateHeroHeight);

    // Cleanup
    return () => window.removeEventListener('resize', calculateHeroHeight);
  }, []);

  const handleAboutUs = () => {
    navigate('/about');
  };

  const handleExplore = () => {
    const commitmentSection = document.getElementById('our-commitment-section');
    if (commitmentSection) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const offset = headerHeight + 20; // Add some padding
      
      const elementPosition = commitmentSection.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="w-full relative z-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{ 
        height: heroHeight,
        minHeight: heroHeight,
        maxHeight: '100vh'
      }}
    >
      {/* Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-center max-w-7xl mx-auto w-full" style={{ gap: 'clamp(2rem, 5vh, 4rem)' }}>
        
        {/* Main Heading */}
        <h1 
          className="text-center leading-tight max-w-6xl"
          style={{
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            width: '1163px',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 7vw, 5rem)',
            lineHeight: '1.2',
            letterSpacing: '0.02em',
            color: '#DDB9A2'
          }}
        >
          Empowering a Sustainable<br />
          Future with Allina
        </h1>
        
        {/* Description */}
        <p 
          className="text-center max-w-4xl"
          style={{
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            lineHeight: '1.6',
            letterSpacing: '0.01em',
            color: 'white'
          }}
        >
          At ALLINA, we are committed to innovative solutions that prioritize sustainability and energy<br />
          efficiency. Join us in creating a greener future for our communities and the planet.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center w-full max-w-md">
          <button 
            onClick={handleExplore}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#e3c6b2] text-[#0a2240] font-semibold transition-all duration-300 hover:bg-[#ddb9a2] hover:scale-105" 
            style={{
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontSize: 'clamp(0.9rem, 2vw, 1.125rem)'
            }}
          >
            Explore
          </button>
          <button 
            onClick={handleAboutUs}
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#e3c6b2] text-[#e3c6b2] font-semibold transition-all duration-300 hover:bg-[#e3c6b2] hover:text-[#0a2240] hover:scale-105" 
            style={{
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontSize: 'clamp(0.9rem, 2vw, 1.125rem)'
            }}
          >
            About Us
          </button>
        </div>
      </div>
      
      {/* SVG Illustration */}
      <img
        src="/images/Sustainability_hero.svg"
        alt="Sustainability Hero"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 opacity-90 pointer-events-none select-none z-0"
        style={{
          width: 'clamp(400px, 60vw, 790px)',
          maxWidth: '90vw'
        }}
      />
    </section>
  );
};

export default SustainabilityHero; 