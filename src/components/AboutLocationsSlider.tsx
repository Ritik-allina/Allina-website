import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: 'https://res.cloudinary.com/dllukqtlt/image/upload/v1751113736/584738b7-1706-48ea-aa26-79d4efb1d336_alacjw.webp',
    location: 'JAIPUR',
  },
  {
    img: 'https://res.cloudinary.com/dllukqtlt/image/upload/v1751113727/8ae8fb50-df3d-4df3-b43a-6f43db7eb24c_rlty75.png',
    location: 'DELHI',
  },
  {
    img: 'https://res.cloudinary.com/dllukqtlt/image/upload/v1751117559/e69efff2-52f0-4be6-afff-0b2e1ec01dfe_zwpltl.jpg',
    location: 'GURGAON',
  },
];

const IMAGE_HEIGHT = 340;
const IMAGE_WIDTH = 480;
const SHRUNKEN_WIDTH = 0;
const ANIMATION_DURATION = 500;
const SLIDE_DURATION = 2000;

export const AboutLocationsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [shrinkPhase, setShrinkPhase] = useState(false); // true: shrinking, false: expanding

  useEffect(() => {
    let shrinkTimeout, expandTimeout;
    shrinkTimeout = setTimeout(() => {
      setShrinkPhase(true); // Start shrinking
      setTimeout(() => {
        setAnimating(true); // Swap image
        setCurrent((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setAnimating(false);
          setShrinkPhase(false); // Expand back
        }, ANIMATION_DURATION);
      }, ANIMATION_DURATION);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(shrinkTimeout);
      clearTimeout(expandTimeout);
    };
  }, [current]);

  // Calculate dynamic line width so lines always meet the image edge
  const imageWidth = shrinkPhase ? SHRUNKEN_WIDTH : IMAGE_WIDTH;
  const lineWidth = `calc((100% - ${imageWidth}px) / 2 - 48px)`; // From screen edge to image edge

  return (
    <>
      {/* OUR CASE STUDIES Section Title */}
      <div className="flex justify-center items-center py-3 sm:py-10 md:py-4 px-4">
        <h2 className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] text-center text-lg md:text-xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              fontWeight: 400
            }}>
          OUR CASE STUDIES
        </h2>
      </div>

      {/* OUR CASE STUDIES Content */}
      <section className="w-full bg-[#E7DED7] pt-0 pb-16 flex flex-col items-center min-h-[580px] mb-12 sm:mb-16 md:mb-[60px]">
      
      {/* Dots */}
      <div className="flex gap-2 mb-12">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-[#d9d9d9]'} transition-all`}
            style={{ display: 'inline-block' }}
          />
        ))}
      </div>
      {/* Animated lines and image */}
      <div className="relative flex items-center justify-center w-full max-w-6xl" style={{ minHeight: IMAGE_HEIGHT, marginBottom: '80px' }}>
        {/* Left line */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            width: lineWidth,
            borderRadius: 1,
          }}
        />
        {/* Left vertical line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            left: lineWidth,
          }}
        />
        {/* Right line */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            width: lineWidth,
            borderRadius: 1,
          }}
        />
        {/* Right vertical line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-[#7b7b7b] transition-all duration-500"
          style={{
            right: lineWidth,
          }}
        />
        {/* Image */}
        <div
          className="relative z-10 transition-all duration-500 flex items-center justify-center"
          style={{
            width: imageWidth,
            height: IMAGE_HEIGHT,
            borderRadius: 20,
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            margin: '0 48px',
            transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].location}
            className="w-full h-full object-cover rounded-[20px]"
            style={{ height: '100%', width: '100%', transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </div>
      </div>
      {/* Location */}
      <div className="flex flex-col items-center w-full max-w-4xl">
        {/* Upper decorative line with vertical connector */}
        <div className="w-full flex justify-center items-center mb-6">
          <div className="w-full h-px bg-[#7b7b7b] max-w-4xl relative">
            <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-[#7b7b7b] -translate-x-1/2 -translate-y-6" />
          </div>
        </div>
        
        {/* Location name with icon */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-orange-600 text-xl">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 4.25 5.7 8.54 7.13 9.6a1 1 0 0 0 1.13 0C11.3 17.54 17 13.25 17 9c0-3.87-3.13-7-7-7zm0 2a5 5 0 0 1 5 5c0 2.88-3.13 6.13-5 7.61C8.13 15.13 5 11.88 5 9a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
          </span>
          <span 
            className="text-[#06153A] font-semibold tracking-[0.15em]" 
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              letterSpacing: '0.15em',
              fontSize: '20px',
              
            }}
          >
            {slides[current].location}
          </span>
        </div>
        
        {/* Lower decorative line */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full h-px bg-[#7b7b7b] max-w-4xl" />
        </div>
      </div>
    </section>
    </>
  );
}; 