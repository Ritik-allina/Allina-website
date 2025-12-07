import React, { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MetricData {
  value: string;
  label: string;
}

export const Metrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const keyFiguresButtonRef = useRef<HTMLButtonElement>(null);
  const climateCommitmentButtonRef = useRef<HTMLButtonElement>(null);
  const keySectionRef = useRef<HTMLDivElement>(null);
  const climateSectionRef = useRef<HTMLDivElement>(null);

  const keyFiguresData: MetricData[] = [
    { value: "1 Mn", label: "Streetlights Deployed" },
    { value: "20K+", label: "CCMS Panels Deployed" },
    { value: "98%", label: "Uptime of Lights" },
    { value: "100%", label: "On-Time Completion" },
  ];

  const climateCommitmentData: MetricData[] = [
    { value: "45%", label: "Energy Efficiency" },
    { value: "5 Mn Kg", label: "Carbon Emissions Reduced" },
  ];

  // State for animated values
  const [animatedKeyValues, setAnimatedKeyValues] = useState(keyFiguresData.map(() => 0));
  const [animatedClimateValues, setAnimatedClimateValues] = useState(climateCommitmentData.map(() => 0));

  // Utility function to extract numeric value and format
  const extractNumericValue = (valueString: string): number => {
    const numMatch = valueString.match(/[\d.]+/);
    return numMatch ? parseFloat(numMatch[0]) : 0;
  };

  const formatAnimatedValue = (animatedNum: number, originalValue: string): string => {
    const roundedNum = Math.round(animatedNum);
    
    if (originalValue.includes('Mn')) {
      return `${roundedNum} Mn`;
    } else if (originalValue.includes('K+')) {
      return `${roundedNum}K+`;
    } else if (originalValue.includes('%')) {
      return `${roundedNum}%`;
    } else if (originalValue.includes('Kg')) {
      return `${roundedNum} Mn Kg`;
    }
    
    return roundedNum.toString();
  };

  useGSAP(() => {
    const container = mainContainerRef.current;
    const scrollWrapper = scrollContentRef.current;
    const keyBtn = keyFiguresButtonRef.current;
    const climateBtn = climateCommitmentButtonRef.current;
    const keySection = keySectionRef.current;
    const climateSection = climateSectionRef.current;

    if (!container || !scrollWrapper || !keyBtn || !climateBtn || !keySection || !climateSection) return;

    const sections = gsap.utils.toArray(
      scrollWrapper.children
    ) as HTMLElement[];

    // Number counting animations for Key Figures
    keyFiguresData.forEach((metric, index) => {
      const targetValue = extractNumericValue(metric.value);
      
      ScrollTrigger.create({
        trigger: keySection,
        start: "top 80%",
        onEnter: () => {
          gsap.to({}, {
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              const progress = this.progress();
              const currentValue = progress * targetValue;
              setAnimatedKeyValues(prev => {
                const newValues = [...prev];
                newValues[index] = currentValue;
                return newValues;
              });
            }
          });
        },
        once: true
      });
    });

    // Number counting animations for Climate Commitment
    climateCommitmentData.forEach((metric, index) => {
      const targetValue = extractNumericValue(metric.value);
      
      ScrollTrigger.create({
        trigger: climateSection,
        start: "top 80%",
        onEnter: () => {
          gsap.to({}, {
            duration: 2,
            ease: "power2.out",
            onUpdate: function() {
              const progress = this.progress();
              const currentValue = progress * targetValue;
              setAnimatedClimateValues(prev => {
                const newValues = [...prev];
                newValues[index] = currentValue;
                return newValues;
              });
            }
          });
        },
        once: true
      });
    });

    gsap.to(scrollWrapper, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "center center", // Pin when main container center aligns with viewport center
        end: `+=${container.offsetHeight * (sections.length - 1)}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const isKeyActive = self.progress < 0.5;

          keyBtn.classList.toggle("text-white", isKeyActive);
          keyBtn.classList.toggle("text-[#C1A278]", !isKeyActive);

          climateBtn.classList.toggle("text-white", !isKeyActive);
          climateBtn.classList.toggle("text-[#C1A278]", isKeyActive);
        },
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E7DED7] pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-16 md:pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 
            ref={titleRef}
            className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] uppercase text-lg md:text-xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              fontWeight: 400
            }}
          >
            OUR METRICS
          </h2>
        </div>

        {/* Main Container - Increased Size */}
        <div 
          ref={mainContainerRef}
          className="w-full bg-black rounded-[20px] sm:rounded-[30px] p-6 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-24 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
        >
          
          {/* Left Side - Navigation Menu */}
          <div className="relative flex flex-row lg:flex-col gap-8 lg:gap-12">
            <div></div>
            
            {/* Navigation Buttons */}
            <button
              ref={keyFiguresButtonRef}
              className="text-left pl-4 lg:pl-8 text-white"
              style={{
                fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              Key Figures
            </button>

            <button
              ref={climateCommitmentButtonRef}
              className="text-left pl-4 lg:pl-8 text-[#C1A278]"
              style={{
                fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              Climate
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>Commitment
            </button>
          </div>

          {/* Right Side - Scroll Content */}
          <div className="w-full bg-black rounded-[30px] overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
            <div ref={scrollContentRef} className="h-full w-full">
              <div ref={keySectionRef} className="h-full snap-start py-6">
                <div className="relative h-full flex flex-col justify-center">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16 relative z-10">
                    {keyFiguresData.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="text-white font-normal mb-3 sm:mb-4 md:mb-6"
                          style={{
                            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            lineHeight: '1.1',
                            fontWeight: 300
                          }}
                        >
                          {formatAnimatedValue(animatedKeyValues[index], metric.value)}
                        </div>
                        <div 
                          className="text-gray-400"
                          style={{
                            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                            fontSize: 'clamp(12px, 2vw, 18px)',
                            fontWeight: 400,
                            letterSpacing: '0.05em'
                          }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={climateSectionRef} className="h-full snap-start py-6">
                <div className="relative h-full flex flex-col justify-center">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16 relative z-10">
                    {climateCommitmentData.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="text-white font-normal mb-3 sm:mb-4 md:mb-6"
                          style={{
                            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            lineHeight: '1.1',
                            fontWeight: 300
                          }}
                        >
                          {formatAnimatedValue(animatedClimateValues[index], metric.value)}
                        </div>
                        <div 
                          className="text-gray-400"
                          style={{
                            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                            fontSize: 'clamp(12px, 2vw, 18px)',
                            fontWeight: 400,
                            letterSpacing: '0.05em'
                          }}
                        >
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
