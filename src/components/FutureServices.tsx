import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export const FutureServices = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const accordionRefs = useRef([]);
  const contentRefs = useRef([]);
  const buttonRef = useRef(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const values = [
    { 
      num: '01.', 
      title: 'RENEWABLE ENERGY', 
      short: 'RENEWABLE ENERGY',
      desc: 'We are committed to environmentally responsible practices, ensuring that our projects contribute to a greener and more sustainable future.'
    },
    {
      num: '02.',
      title: 'SMART CITIES',
      short: 'SMART CITIES',
      desc: 'We embrace new technologies and ideas to deliver smarter, more efficient solutions that meet the evolving needs of our clients and communities.'
    },
    {
      num: '03.',
      title: 'URBAN INFRASTRUCTURE',
      short: 'URBAN INFRASTRUCTURE',
      desc: 'Excellence is at the heart of everything we do. From the materials we use to the services we provide, we maintain the highest standards of quality.'
    },
    {
      num: '04.',
      title: 'INDUSTRIAL SOLUTIONS',
      short: 'INDUSTRIAL SOLUTIONS',
      desc: 'We provide comprehensive industrial lighting and infrastructure solutions, designed to enhance productivity, safety, and operational efficiency across diverse industrial environments.'
    }
  ];

  const [openItems, setOpenItems] = useState([]);

  const allOpen = openItems.length === values.length;

  // GSAP animations - same as OurValues
  useGSAP(() => {
    // Initial animation for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
    
    // Stagger animation for accordion items
    gsap.fromTo(
      accordionRefs.current,
      { opacity: 0, x: 30, scale: 0.95 },
      {
      opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.4,
      }
    );

    // Button animation
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      }
    );
  }, []);

  const animateAccordionContent = (index: number, isOpen: boolean) => {
    const content = contentRefs.current[index];
    if (!content) return;

    if (isOpen) {
      // Set initial state
      gsap.set(content, {
        height: 0,
        opacity: 0,
        scaleY: 0,
        y: -15,
      });

      // Animate container
      gsap.to(content, {
        height: "auto",
        opacity: 1,
        scaleY: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Find and animate text content
      const textElement = content.querySelector('p');
      if (textElement) {
        gsap.fromTo(textElement,
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }
    } else {
      // Animate text out first
      const textElement = content.querySelector('p');
      if (textElement) {
        gsap.to(textElement, {
          opacity: 0,
          y: -10,
          scale: 0.98,
          duration: 0.3,
          ease: "power2.in",
        });
      }

      // Then animate container
      gsap.to(content, {
        height: 0,
        opacity: 0,
        scaleY: 0,
        y: -10,
        duration: 0.5,
        delay: 0.1,
        ease: "power2.in",
      });
    }
  };

  // Button hover animations - same as OurValues
  const handleButtonHover = () => {
    setIsButtonHovered(true);
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Accordion item hover effects - same as OurValues
  const handleAccordionHover = (index: number, isHovered: boolean) => {
    const accordionItem = accordionRefs.current[index];
    if (!accordionItem) return;

    gsap.to(accordionItem, {
      scale: isHovered ? 1.02 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const animateImage = (expandedCount: number) => {
    if (!imageRef.current) return;
    
    const baseOffset = expandedCount > 0 ? (expandedCount * 40) + 60 : 0;
    
    gsap.to(imageRef.current, {
      y: baseOffset,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  const handleExpandCollapseAll = () => {
    if (allOpen) {
      // Collapse all with staggered animation - same as OurValues
      openItems.forEach((item, index) => {
        setTimeout(() => {
          animateAccordionContent(parseInt(item), false);
        }, index * 80);
      });
      setOpenItems([]);
      animateImage(0);
    } else {
      // Expand all with staggered animation - same as OurValues
      const allIndices = values.map((_, idx) => idx.toString());
      allIndices.forEach((item, index) => {
        setTimeout(() => {
          animateAccordionContent(parseInt(item), true);
        }, index * 80);
      });
      setOpenItems(allIndices);
      animateImage(values.length);
    }
  };

  const handleAccordionChange = (items: string[]) => {
    const newItems = items.filter((item) => !openItems.includes(item));
    const removedItems = openItems.filter((item) => !items.includes(item));

    // Animate new items opening
    newItems.forEach((item) => {
      animateAccordionContent(parseInt(item), true);
    });

    // Animate removed items closing
    removedItems.forEach((item) => {
      animateAccordionContent(parseInt(item), false);
    });

    setOpenItems(items);
    
    // Animate image
    animateImage(items.length);
  };

  return (
    <>
      {/* FUTURE SERVICES Section Title */}
      <div className="flex justify-center items-center pt-2 sm:pt-3 md:pt-4 pb-6 sm:pb-7 md:pb-10 px-4">
        <h2 className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] text-center text-lg md:text-xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              fontWeight: 400
            }}>
          FUTURE SERVICES
        </h2>
      </div>

      {/* FUTURE SERVICES Content */}
      <div className="w-full overflow-hidden" style={{ backgroundColor: '#06153A' }} ref={containerRef}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Top Text and Expand/Collapse Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-20 mb-8 sm:mb-12 md:mb-16">
            <h3
              className="text-white font-normal text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-tight md:leading-[40px]"
              style={{
                fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                maxWidth: "854px",
                letterSpacing: "0.01em",
                fontWeight: 400,
                margin: 0,
              }}
            >
              At ALLINA, our core values define who we are and guide every decision we make. These values are the foundation of our success.
            </h3>
            <button
              ref={buttonRef}
              className={`text-base sm:text-lg font-normal tracking-[2px] px-4 sm:px-6 py-3 border border-white rounded-full mt-6 md:mt-0 transition-all duration-300 cursor-pointer ${
                isButtonHovered
                  ? "bg-white text-black shadow-lg shadow-white/20"
                  : "bg-transparent text-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20"
              }`}
              style={{ fontWeight: 400 }}
              onClick={handleExpandCollapseAll}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              {allOpen ? 'COLLAPSE ALL -' : 'EXPAND ALL +'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 lg:pb-16">
            {/* Left side - Image */}
            <div className="flex-1 w-full lg:w-[350px] xl:w-[500px] mx-auto lg:mx-0 flex justify-center order-2 lg:order-1">
              <div 
                ref={imageRef}
                className="w-full h-[600px] bg-cover rounded-lg overflow-hidden shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-black/40 transition-all duration-500 cursor-pointer"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/dllukqtlt/image/upload/v1751113722/47fbdec1-e5cf-4a28-9e4b-46f660e03537_cpyib6.jpg)',
                  backgroundPosition: 'center top',
                  backgroundSize: '100% 130%',
                  transformOrigin: 'center center'
                }}
                onMouseEnter={() => {
                  gsap.to(imageRef.current, {
                    scale: 1.02,
                    duration: 0.4,
                    ease: "power2.out",
                  });
                }}
                onMouseLeave={() => {
                  gsap.to(imageRef.current, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out",
                  });
                }}
              />
            </div>

            {/* Right side - Accordion Values */}
            <div className="flex-1 min-w-0 order-1 lg:order-2">
              <Accordion type="multiple" value={openItems} onValueChange={handleAccordionChange}>
                {values.map((value, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={idx.toString()} 
                    className="border-b border-white/30 transition-all duration-300 hover:border-white/50"
                    ref={(el) => (accordionRefs.current[idx] = el)}
                    onMouseEnter={() => handleAccordionHover(idx, true)}
                    onMouseLeave={() => handleAccordionHover(idx, false)}
                  >
                    <AccordionTrigger 
                      className="flex items-center gap-4 sm:gap-6 py-4 sm:py-6 transition-all duration-300 hover:bg-white/5 rounded-lg px-2 -mx-2" 
                      iconColor="#ffffff"
                    >
                      <span 
                        className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-normal min-w-[50px] sm:min-w-[60px] lg:min-w-[80px] transition-all duration-300"
                        style={{
                          fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {value.num}
                      </span>
                      <span
                        className="text-white font-normal text-left flex-1 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] leading-tight lg:leading-[79px] transition-all duration-300"
                        style={{
                          fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                          fontWeight: 400,
                          letterSpacing: "0.05em",
                          display: "block",
                          marginBottom: 0,
                        }}
                      >
                          {value.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        ref={(el) => (contentRefs.current[idx] = el)}
                        className="overflow-hidden"
                      >
                        <p 
                          className="text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 max-w-[500px] font-normal mt-0 pb-4 transition-all duration-300 ml-[84px] lg:ml-[104px]"
                          style={{
                            fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                            fontWeight: 400,
                            marginTop: 0,
                            letterSpacing: "0.03em",
                          }}
                        >
                            {value.desc}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive styles for landscape modes */}
      <style>{`
        /* Remove focus states and improve hover effects */
        [data-radix-accordion-trigger] {
          outline: none !important;
          box-shadow: none !important;
        }
        
        [data-radix-accordion-trigger]:focus {
          outline: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        
        [data-radix-accordion-trigger]:focus-visible {
          outline: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        
        [data-radix-accordion-trigger]:hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
        }
        

      `}</style>
    </>
  );
};

