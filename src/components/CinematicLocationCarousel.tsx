import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    city: 'JAIPUR',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    city: 'DELHI',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    city: 'GURGAON',
  },
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    city: 'ALWAR',
  },
];

const IMAGE_SIZE = 340;
const GLOW_COLOR = 'rgba(204,85,0,0.45)'; // #cc5500 with alpha
const ANIMATION_DURATION = 700;
const SLIDE_DURATION = 3200;

export const CinematicLocationCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<'idle'|'animating-out'|'animating-in'>('idle');

  // Animation sequence: out (lines in, image shrinks/fades), swap, in (lines out, image grows/fades in)
  useEffect(() => {
    let outTimeout, inTimeout, slideTimeout;
    if (phase === 'idle') {
      slideTimeout = setTimeout(() => setPhase('animating-out'), SLIDE_DURATION);
    } else if (phase === 'animating-out') {
      outTimeout = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setPhase('animating-in');
      }, ANIMATION_DURATION);
    } else if (phase === 'animating-in') {
      inTimeout = setTimeout(() => setPhase('idle'), ANIMATION_DURATION);
    }
    return () => {
      clearTimeout(outTimeout);
      clearTimeout(inTimeout);
      clearTimeout(slideTimeout);
    };
  }, [phase, current]);

  // Animation states
  const isOut = phase === 'animating-out';
  const isIn = phase === 'animating-in';
  const isIdle = phase === 'idle';

  // For rain effect (CSS only, simple)
  const Rain = () => (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            animation: `rain-fall 1.8s linear infinite`,
            animationDelay: `${(i * 0.13) % 1.8}s`,
            opacity: 0.18 + 0.12 * (i % 3),
            left: `${(i * 17) % 100}%`,
            width: 2,
            height: '100%',
            background: 'linear-gradient(180deg, #fff 0%, #fff0 80%)',
            borderRadius: 2,
          }}
        />
      ))}
      <style>{`
        @keyframes rain-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );

  // Animation values
  const imageScale = isOut ? 0.92 : isIn ? 1.08 : 1;
  const imageOpacity = isOut ? 0 : 1;
  const lineWidth = isOut ? '0%' : 'calc(50% - 170px)';
  const verticalLineHeight = isOut ? 0 : 48;
  const textOpacity = isOut ? 0 : 1;
  const textTranslate = isOut ? 24 : 0;

  return (
    <section className="w-full bg-[#f4f1ed] py-20 flex flex-col items-center min-h-[600px] transition-colors duration-700">
      {/* Dots */}
      <div className="flex gap-3 mb-8">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === current ? 'bg-[#cc5500]' : 'bg-[#e0d7ce]'}`}
            style={{ display: 'inline-block', boxShadow: idx === current ? '0 0 8px #cc5500' : undefined }}
          />
        ))}
      </div>
      {/* Animated lines and image */}
      <div className="relative flex items-center justify-center w-full max-w-4xl mb-12" style={{ minHeight: IMAGE_SIZE }}>
        {/* Horizontal lines */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#bdbdbd] transition-all duration-700"
          style={{
            width: lineWidth,
            borderRadius: 2,
            boxShadow: '0 0 2px #bdbdbd',
          }}
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#bdbdbd] transition-all duration-700"
          style={{
            width: lineWidth,
            borderRadius: 2,
            boxShadow: '0 0 2px #bdbdbd',
          }}
        />
        {/* Image with glow and rain */}
        <div
          className="relative z-10 flex items-center justify-center transition-all duration-700"
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            borderRadius: 32,
            overflow: 'hidden',
            background: '#222',
            boxShadow: `0 0 64px 12px ${GLOW_COLOR}, 0 0 0 1px #e0d7ce`,
            transform: `scale(${imageScale})`,
            opacity: imageOpacity,
            transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <img
            src={slides[current].img}
            alt={slides[current].city}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.95) contrast(1.08)', transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)' }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 40%, #cc550055 0%, #0000 60%)' }} />
          <Rain />
        </div>
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-full -translate-x-1/2 bg-[#bdbdbd] transition-all duration-700"
          style={{ width: 2, height: verticalLineHeight, borderRadius: 2, marginTop: 0 }}
        />
      </div>
      {/* City Name Section */}
      <div
        className="flex flex-col items-center mt-2"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslate}px)`,
          transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#cc5500] text-2xl">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 4.25 5.7 8.54 7.13 9.6a1 1 0 0 0 1.13 0C11.3 17.54 17 13.25 17 9c0-3.87-3.13-7-7-7zm0 2a5 5 0 0 1 5 5c0 2.88-3.13 6.13-5 7.61C8.13 15.13 5 11.88 5 9a5 5 0 0 1 5-5zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
          </span>
          <span className="text-[#1e1e1e] text-2xl font-serif tracking-[1px] uppercase" style={{ letterSpacing: '1px', fontFamily: 'serif' }}>{slides[current].city}</span>
        </div>
      </div>
    </section>
  );
}; 