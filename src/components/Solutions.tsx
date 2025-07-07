import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Solutions = () => {
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openAccordions, setOpenAccordions] = React.useState<Set<string>>(new Set());
  const scrollPositionRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: "01",
      title: "STREETLIGHT SUPPLY",
      image: "https://res.cloudinary.com/dllukqtlt/image/upload/v1751117987/streetlight_supply_bv9yw0.jpg",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "LED STREETLIGHTS",
            description: "Energy-efficient and long-lasting lighting solutions."
          },
          {
            title: "SOLAR-POWERED STREETLIGHT",
            description: "Sustainable and eco-friendly lighting systems powered by renewable energy."
          },
          {
            title: "SMART STREETLIGHT",
            description: "IoT-enabled lights with advanced features for enhanced connectivity and control."
          }
        ]
      }
    },
    {
      id: "02",
      title: "EPC FOR STREETLIGHTS",
      image: "https://res.cloudinary.com/dllukqtlt/image/upload/v1751117989/epc_services_fejsvn.jpg",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "OPTIMIZED PROCUREMENT",
            description: "Best-in-class poles, fixtures, cables—on budget, on time."
          },
          {
            title: "SEAMLESS CONSTRUCTION",
            description: "Pole erection, trenching, wiring & system integration.Seamless connection of lights to control panels and power sources."
          },
          {
            title: "QUALITY & SAFETY",
            description: "Rigorous testing, compliance checks with industry standards & turnkey handover and on-site testing protocols."
          }
        ]
      }
    },
    {
      id: "03",
      title: "OPERATION & MAINTENANCE (O&M)",
      image: "https://res.cloudinary.com/dllukqtlt/image/upload/v1751121731/operations_vgttjc.jpg",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "QR CODE TAGGING",
            description: "Scan. Track. Fix. Every light has a unique code for instant data access."
          },
          {
            title: "GIS MAPPING",
            description: "Pinpoint every fixture on an interactive map for lightning-fast planning and dispatch for quick access and performance optimization."
          },
          {
            title: "SURVEYS",
            description: "On-site checks ensure flawless installs and efficient future upkeep ensure each location meets design and safety standards"
          }
        ]
      }
    },
    {
      id: "04",
      title: "SMART LIGHTING SOLUTIONS",
      image: "https://res.cloudinary.com/dllukqtlt/image/upload/v1751117988/smart_lighting_solutions_nu3ywb.jpg",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "CCMS",
            description: "Remote lighting control via dashboard—track, dim, and fix in real time."
          },
          {
            title: "IOT INTEGRATION",
            description: "Use your smartphone or tablet to tailor brightness, schedules, and energy use anytime, anywhere."
          },
          {
            title: "AUTOMATION",
            description: "Auto-dimming, fault alerts & energy savings without lifting a finger. Analytics show you where to save energy and improve service."
          }
        ]
      }
    },
    {
      id: "05",
      title: "END-TO-END SOLUTIONS",
      image: "https://res.cloudinary.com/dllukqtlt/image/upload/v1751121605/end_to_end_qhbdtn.jpg",
      content: {
        description: "Connecting streetlights to smartphones and apps for advanced features such as dimming, scheduling, and real-time updates",
        features: [
          {
            title: "COMPLETE SUPPLY",
            description: "Top-tier LED lights, poles, and hardware, sourced and delivered."
          },
          {
            title: "EXPERT INSTALLATION",
            description: "Expert crews handle trenching, pole erection, wiring, commissioning—and all safety checks. Quick, safe, and standard-compliant."
          },
          {
            title: "AFTER-SUPPORT",
            description: "Flexible service plans bundle routine inspections, repairs, and upgrades for predictable ROI."
          }
        ]
      }
    }
  ];

  // Initialize GSAP
  useGSAP(() => {
    // Set initial state for all accordion contents
    contentRefs.current.forEach((contentRef) => {
      if (contentRef) {
        gsap.set(contentRef, { height: 0, opacity: 0, overflow: 'hidden' });
      }
    });
    
    // Ensure all accordion containers start clean
    accordionRefs.current.forEach((accordionRef) => {
      if (accordionRef) {
        gsap.set(accordionRef, { clearProps: "all" });
      }
    });
  }, []);

  const scrollToShowFullContent = (accordionRef: HTMLDivElement) => {
    setTimeout(() => {
      const rect = accordionRef.getBoundingClientRect();
      
      // Always scroll to position the heading just below the header (120px from top for header space)
      const scrollAmount = rect.top - 120;
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }, 300); // Wait for accordion animation to start
  };

  const toggleAccordion = (id: string) => {
    const index = solutions.findIndex(solution => solution.id === id);
    const contentRef = contentRefs.current[index];
    const accordionRef = accordionRefs.current[index];

    if (!contentRef || !accordionRef) return;

    const newOpenAccordions = new Set(openAccordions);

    if (openAccordions.has(id)) {
      // Close accordion
      newOpenAccordions.delete(id);
      setOpenAccordions(newOpenAccordions);
      
      gsap.to(contentRef, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });

      // Animate accordion item back to normal
      gsap.to(accordionRef, {
        backgroundColor: 'transparent',
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      // Open accordion
      newOpenAccordions.add(id);
      setOpenAccordions(newOpenAccordions);
      
      // Animate accordion item
      gsap.to(accordionRef, {
        backgroundColor: 'transparent',
        duration: 0.4,
        ease: "power2.out"
      });

      // Animate content
      gsap.to(contentRef, {
        height: 'auto',
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        onStart: () => {
          gsap.set(contentRef, { overflow: 'visible' });
        },
        onComplete: () => {
          // Auto-scroll to show full content
          scrollToShowFullContent(accordionRef);
        }
      });
    }
  };





  return (
    <>
      {/* STREETLIGHTING SOLUTIONS Section Title */}
      <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] text-center text-lg md:text-xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              fontWeight: 400
            }}>
          STREETLIGHTING SOLUTIONS
        </h2>
      </div>

      {/* STREETLIGHTING SOLUTIONS Content */}
      <div className="w-full bg-[#E7DED7] pt-0 pb-0" ref={sectionRef}>
        <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div style={{ width: '1360px', maxWidth: '100%' }}>
          <div className="w-full">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                ref={(el) => accordionRefs.current[index] = el}
                className="bg-transparent transition-all duration-300 ease-in-out"
                style={{ marginBottom: index < solutions.length - 1 ? '40px' : '0' }}
              >
                <button
                  onClick={() => toggleAccordion(solution.id)}
                  className="solutions-button flex items-center w-full hover:no-underline py-6 px-0 cursor-pointer transition-all duration-300 ease-in-out"
                  style={{
                    width: '100%',
                    height: '47px',
                    padding: '0',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none'
                  }}
                >
                  <div className="flex items-center gap-4 w-full">
                    <span 
                      className="solutions-number"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(20px, 3vw, 36px)',
                        lineHeight: '100%',
                        letterSpacing: '0.2em',
                        color: '#06153A'
                      }}
                    >
                      {solution.id}
                    </span>
                    <span 
                      className="solutions-title"
                      style={{
                        fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                        fontWeight: 300,
                        fontSize: 'clamp(16px, 2.5vw, 32px)',
                        lineHeight: '100%',
                        letterSpacing: '0.16em',
                        color: '#06153A'
                      }}
                    >
                      {solution.title}
                    </span>
                    <div className="ml-auto transition-transform duration-300 ease-in-out"
                         style={{
                           transform: openAccordions.has(solution.id) ? 'rotate(45deg)' : 'rotate(0deg)'
                         }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M4 12H20" stroke="#06153A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Decorative line */}
                <div className="decorative-line-container" style={{ margin: index === solutions.length - 1 ? '0' : '40px 0 30px 0' }}>
                  <div 
                    className="decorative-line"
                    style={{
                      width: '100%',
                      height: '1px',
                      backgroundColor: '#06153A',
                      border: 'none',
                      outline: 'none',
                      margin: 0,
                      padding: 0,
                      display: 'block'
                    }}
                  />
                </div>

                <div 
                  ref={(el) => contentRefs.current[index] = el}
                  className="accordion-content px-0 pt-2 pb-4"
                >
                  <p className="text-[#06153A] mb-8 text-lg">
                    {solution.content.description}
                  </p>
                  {solution.content.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      {solution.content.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="space-y-4">
                          <h3 className="text-[#06153A] font-medium text-lg">
                            {feature.title}
                          </h3>
                          <p className="text-[#06153A] text-base">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="w-full h-[450px] relative mt-8 overflow-hidden rounded-lg">
                    <img
                      src={solution.image}
                      alt={`${solution.title} illustration`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <style>{`
      /* Mobile devices */
      @media (max-width: 640px) {
        .solutions-number {
          font-size: clamp(18px, 4vw, 24px) !important;
        }
        .solutions-title {
          font-size: clamp(14px, 3.5vw, 20px) !important;
        }

      }
      
      /* Tablet and larger screens */
      @media (min-width: 768px) {
        .solutions-number {
          font-size: clamp(22px, 3vw, 32px) !important;
          font-weight: 500 !important;
        }
        .solutions-title {
          font-size: clamp(18px, 2.5vw, 26px) !important;
          font-weight: 400 !important;
        }
      }
      
      /* Desktop screens */
      @media (min-width: 1024px) {
        .solutions-number {
          font-size: clamp(26px, 3vw, 34px) !important;
          font-weight: 400 !important;
        }
        .solutions-title {
          font-size: clamp(22px, 2.5vw, 28px) !important;
          font-weight: 300 !important;
        }
      }
      
      /* Large desktop screens */
      @media (min-width: 1440px) {
        .solutions-number {
          font-size: clamp(28px, 3vw, 36px) !important;
          font-weight: 400 !important;
        }
        .solutions-title {
          font-size: clamp(24px, 2.5vw, 30px) !important;
          font-weight: 300 !important;
        }
      }
      
      /* Ultra-wide screens */
      @media (min-width: 1920px) {
        .solutions-number {
          font-size: clamp(30px, 3vw, 38px) !important;
          font-weight: 400 !important;
        }
        .solutions-title {
          font-size: clamp(26px, 2.5vw, 32px) !important;
          font-weight: 300 !important;
        }
      }
      
      /* Landscape mode optimizations for tablets */
      @media (max-height: 600px) and (min-width: 768px) {
        .solutions-number {
          font-size: clamp(20px, 3vw, 28px) !important;
        }
        .solutions-title {
          font-size: clamp(16px, 2.5vw, 24px) !important;
        }
      }
      
      /* Very short screens (like tablets in landscape) */
      @media (max-height: 500px) and (min-width: 768px) {
        .solutions-number {
          font-size: clamp(18px, 2.5vw, 24px) !important;
        }
        .solutions-title {
          font-size: clamp(14px, 2vw, 20px) !important;
        }
      }
      
      /* Mobile landscape adjustments */
      @media (max-width: 640px) and (max-height: 500px) {
        .solutions-number {
          font-size: clamp(16px, 4vw, 20px) !important;
        }
        .solutions-title {
          font-size: clamp(12px, 3vw, 16px) !important;
        }

      }
      
      /* Mobile responsive adjustments */
      @media (max-width: 768px) {
        .grid-cols-1.md\\:grid-cols-3 {
          grid-template-columns: 1fr;
        }

      }
      
      /* Ensure all decorative lines are exactly the same */
      .decorative-line-container {
        margin: 40px 0 30px 0 !important;
        padding: 0 !important;
        width: 100% !important;
        display: block !important;
      }
      
      .decorative-line {
        height: 1px !important;
        background-color: #06153A !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        display: block !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        opacity: 1 !important;
        transform: none !important;
        filter: none !important;
        position: relative !important;
        background-image: none !important;
        background-repeat: no-repeat !important;
        background-size: auto !important;
        background-position: 0 0 !important;
        background-attachment: scroll !important;
        background-origin: padding-box !important;
        background-clip: border-box !important;
      }
      
      /* Smooth transitions for all interactive elements */
      .solutions-button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        background: transparent !important;
        border: none !important;
        outline: none !important;
        position: relative !important;
        z-index: 10 !important;
        pointer-events: auto !important;
        will-change: transform !important;
      }
      
      .solutions-button:hover {
        transform: translateY(-1px) !important;
        background: transparent !important;
      }
      
      .solutions-button:active {
        transform: translateY(0) !important;
      }
      
      .solutions-button:focus {
        outline: none !important;
        box-shadow: none !important;
      }
      

      
      /* Ensure accordion containers don't interfere with button hover */
      .bg-transparent {
        pointer-events: auto !important;
        position: relative !important;
      }
      
      /* Smooth scroll behavior */
      html {
        scroll-behavior: smooth !important;
      }
      
      /* Accordion content styling */
      .accordion-content {
        will-change: height, opacity !important;
      }
      

    `}</style>
    </>
  );
};

export default Solutions; 