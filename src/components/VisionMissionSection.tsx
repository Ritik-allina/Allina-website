import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ContentData {
  quote: string;
  description: string;
  emphasizedWords: string[];
}

export const VisionMissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const visionButtonRef = useRef<HTMLButtonElement>(null);
  const missionButtonRef = useRef<HTMLButtonElement>(null);
  const visionSectionRef = useRef<HTMLDivElement>(null);
  const missionSectionRef = useRef<HTMLDivElement>(null);
  const visionQuoteRef = useRef<HTMLParagraphElement>(null);
  const missionQuoteRef = useRef<HTMLParagraphElement>(null);

  const contentData: Record<string, ContentData> = {
    vision: {
      quote: "To illuminate the future with sustainable, smart, and reliable lighting solutions that enhance communities and protect our planet",
      description: "We envision a world where every street, every community, and every corner is illuminated by intelligent, energy-efficient lighting systems that not only provide safety and security but also contribute to environmental sustainability and urban development.",
      emphasizedWords: []
    },
    mission: {
      quote: "To deliver cutting-edge street lighting infrastructure through innovative technology, exceptional service, and unwavering commitment to excellence",
      description: "Our mission is to transform urban landscapes through state-of-the-art lighting solutions, providing comprehensive EPC services, IoT integration, and sustainable energy management that creates safer, smarter, and more connected communities worldwide.",
      emphasizedWords: []
    }
  };

  const renderAnimatedQuote = (quote: string, quoteId: string) => {
    const words = quote.split(' ');
      return (
      <>
        <span className="quote-mark">"</span>
        {words.map((word, index) => (
          <span key={index} className={`quote-word quote-word-${quoteId}`} data-word-index={index}>
            {word}
            {index < words.length - 1 && ' '}
          </span>
        ))}
        <span className="quote-mark">"</span>
      </>
      );
  };

  useGSAP(() => {
    const container = sectionRef.current;
    const scrollWrapper = scrollContentRef.current;
    const background = backgroundRef.current;
    const visionBtn = visionButtonRef.current;
    const missionBtn = missionButtonRef.current;

    if (!container || !scrollWrapper || !background || !visionBtn || !missionBtn) return;

    const sections = gsap.utils.toArray(
      scrollWrapper.children
    ) as HTMLElement[];

    // Text reveal animation function
    const createTextRevealAnimation = (className: string) => {
      const words = gsap.utils.toArray(`.${className}`) as HTMLElement[];
      
      // Set initial state - all grey
      gsap.set(words, { color: '#9CA3AF' });
      
      // Create timeline that plays automatically
      const tl = gsap.timeline({ paused: true });
      
      words.forEach((word, index) => {
        tl.to(word, {
          color: '#FFFFFF',
          duration: 0.2,
          ease: "power2.out",
        }, index * 0.06); // Stagger the animation
      });
      
      return tl;
    };

    let visionAnimation: gsap.core.Timeline;
    let missionAnimation: gsap.core.Timeline;
    let currentActiveSection = 'vision'; // Track which section is active

    // Initialize animations after a short delay
    setTimeout(() => {
      visionAnimation = createTextRevealAnimation('quote-word-vision');
      missionAnimation = createTextRevealAnimation('quote-word-mission');
      
      // Play vision animation with a small delay since it's the first section
      if (visionAnimation) {
        setTimeout(() => {
          visionAnimation.play();
        }, 300);
      }
    }, 200);

    // Main scroll animation
    gsap.to(scrollWrapper, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "center center", // Pin when section center aligns with viewport center
        end: `+=${container.offsetHeight * (sections.length - 1)}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const isVisionActive = self.progress < 0.5;
          const newActiveSection = isVisionActive ? 'vision' : 'mission';

          visionBtn.classList.toggle("text-white", !isVisionActive);
          visionBtn.classList.toggle("text-[#C1A278]", isVisionActive);

          missionBtn.classList.toggle("text-white", isVisionActive);
          missionBtn.classList.toggle("text-[#C1A278]", !isVisionActive);

          // Trigger animations when section changes
          if (newActiveSection !== currentActiveSection) {
            currentActiveSection = newActiveSection;
            
            if (isVisionActive && visionAnimation) {
              // Reset and play vision animation
              visionAnimation.restart();
              if (missionAnimation) {
                missionAnimation.pause();
                gsap.set('.quote-word-mission', { color: '#9CA3AF' });
              }
            } else if (!isVisionActive && missionAnimation) {
              // Reset and play mission animation
              missionAnimation.restart();
              if (visionAnimation) {
                visionAnimation.pause();
                gsap.set('.quote-word-vision', { color: '#9CA3AF' });
              }
            }
          }
        },
      },
    });

    // Background zoom animation
    gsap.fromTo(background, 
      {
        scale: 1.2, // Start zoomed in
      },
      {
        scale: 1.0, // End at original size
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center", // Start zoom when section center aligns with viewport center
          end: `+=${container.offsetHeight * (sections.length - 1)}`,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E7DED7] pt-12 sm:pt-19 md:pt-21 pb-4 sm:pb-6 md:pb-8 mb-0"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-9">
                      <h2 className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] text-center text-lg md:text-xl"
                          style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              fontWeight: 400
            }}>
            OUR PURPOSE
          </h2>
        </div>

        {/* Main Container */}
        <div className="w-full bg-black rounded-[30px] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 xl:gap-20 min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
          {/* Background Image with Zoom Effect - Covers Entire Component */}
          <div 
            ref={backgroundRef}
            className="absolute inset-0 w-full h-full z-0 rounded-[30px]"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dllukqtlt/image/upload/v1751111940/image2_is35il.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transformOrigin: 'center center',
              filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
              WebkitFilter: 'grayscale(100%) contrast(1.1) brightness(0.9)'
            }}
          ></div>
          
          {/* Dark Gradient Overlay - Covers Entire Component */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 rounded-[30px] z-10"></div>

          {/* Left Sidebar - Navigation */}
          <div className="relative flex flex-row lg:flex-col gap-6 lg:gap-8 z-20">
            <div></div>

            <button
              ref={visionButtonRef}
              className="text-left pl-4 lg:pl-8 text-[#C1A278]"
              style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              VISION
            </button>

            <button
              ref={missionButtonRef}
              className="text-left pl-4 lg:pl-8 text-white"
        style={{
                fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              MISSION
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="w-full rounded-[30px] overflow-hidden h-[500px] lg:h-[600px] relative z-20">
            
            <div ref={scrollContentRef} className="h-full w-full relative z-30">
              {/* Vision Section */}
              <div 
                ref={visionSectionRef} 
                className="h-full snap-start py-6 relative"
              >
                <div className="h-full flex flex-col justify-center px-8 py-12 lg:py-16">
                  {/* Main Quote */}
                  <div className="mb-10 lg:mb-12">
                    <p 
                      ref={visionQuoteRef}
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-relaxed text-center tracking-wide"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {renderAnimatedQuote(contentData.vision.quote, 'vision')}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="max-w-4xl mx-auto">
                    <p 
                      className="text-gray-300 text-base sm:text-lg leading-relaxed text-center"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.6',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {contentData.vision.description}
            </p>
          </div>
                </div>
              </div>

              {/* Mission Section */}
              <div 
                ref={missionSectionRef} 
                className="h-full snap-start py-6 relative"
              >
                <div className="h-full flex flex-col justify-center px-8 py-12 lg:py-16">
                  {/* Main Quote */}
                  <div className="mb-10 lg:mb-12">
                    <p 
                      ref={missionQuoteRef}
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-relaxed lg:leading-relaxed text-center tracking-wide"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.4'
                      }}
                    >
                      {renderAnimatedQuote(contentData.mission.quote, 'mission')}
                    </p>
        </div>

                  {/* Description */}
                  <div className="max-w-4xl mx-auto">
                    <p 
                      className="text-gray-300 text-base sm:text-lg leading-relaxed text-center"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        lineHeight: '1.6',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {contentData.mission.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Styles for quote animation */}
      <style>{`
        .quote-mark {
          color: #FFFFFF;
          opacity: 1;
        }
        
        .quote-word {
          color: #9CA3AF;
          transition: color 0.1s ease;
        }
        
        .quote-word-vision,
        .quote-word-mission {
          display: inline;
        }
      `}</style>
    </section>
  );
}; 