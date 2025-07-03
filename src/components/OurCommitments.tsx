import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const SustainabilityIntro = () => (
  <section
    id="commitment-section"
    className="w-full bg-[#E7DED7] py-10 flex justify-center items-center"
  >
    <p
      className="text-[#06153A] text-center mx-auto"
      style={{
        maxWidth: 900,
        fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "28px",
        letterSpacing: "0.5%",
        margin: 0,
      }}
    >
      At ALLINA, sustainability is at the core of everything we do. We believe
      in creating solutions that not only meet the needs of today but also
      preserve resources for future generations. From energy-efficient
      streetlighting to renewable energy projects, our commitment to green
      practices drives us to innovate and deliver infrastructure that
      contributes to a sustainable and brighter future.
    </p>
  </section>
);

export const OurCommitments = () => {
  const containerRef = useRef(null);
  const accordionRefs = useRef([]);
  const contentRefs = useRef([]);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const commitments = [
    {
      num: "01.",
      title: "ENERGY EFFICIENCY",
      desc: "We are committed to environmentally responsible practices, ensuring that our projects contribute to a greener and more sustainable future.",
    },
    {
      num: "02.",
      title: "RENEWABLE ENERGY",
      desc: "We embrace new technologies and ideas to deliver smarter, more efficient solutions that meet the evolving needs of our clients and communities.",
    },
    {
      num: "03.",
      title: "SUSTAINABLE PRACTICES",
      desc: "Excellence is at the heart of everything we do. From the materials we use to the services we provide, we maintain the highest standards of quality.",
    },
    {
      num: "04.",
      title: "COMMUNITY IMPACT",
      desc: "We strive to create positive social and economic impacts in the communities we serve through responsible infrastructure development.",
    },
    {
      num: "05.",
      title: "SMART INFRASTRUCTURE",
      desc: "We integrate IoT technology and intelligent systems into our streetlighting and infrastructure projects to create connected, efficient, and future-ready urban environments.",
    },
  ];

  const [openItems, setOpenItems] = useState([]);

  const allOpen = openItems.length === commitments.length;

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

    // Image animation - start with initial offset
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.85, y: 80 },
      {
        opacity: 1,
        scale: 1,
        y: 80,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.6,
      }
    );
  }, []);

  // Animate accordion content with enhanced text animation
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

  // Animate image based on expanded count
  const animateImage = (expandedCount: number) => {
    if (!imageRef.current) return;
    
    // Start with initial offset + additional offset per expanded accordion
    const initialOffset = 40; // Initial downward position
    const additionalOffset = expandedCount * 60; // 60px per expanded item
    const totalOffset = initialOffset + additionalOffset;
    
    gsap.to(imageRef.current, {
      y: totalOffset,
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
      const allIndices = commitments.map((_, idx) => idx.toString());
      allIndices.forEach((item, index) => {
        setTimeout(() => {
          animateAccordionContent(parseInt(item), true);
        }, index * 80);
      });
      setOpenItems(allIndices);
      animateImage(commitments.length);
    }
  };

  const handleAccordionChange = (items) => {
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
    
    // Animate image based on number of open items
    animateImage(items.length);
  };

  return (
    <section id="our-commitment-section" className="w-full bg-[#00343C] overflow-hidden py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-0">
          {/* Title */}
          <h2
            id="our-commitment-title"
            className="text-white font-normal"
            style={{
              fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(30px, 5vw, 55px)',
              lineHeight: "1.2",
              letterSpacing: "0.05em",
            }}
          >
            OUR COMMITMENT
          </h2>

          {/* Description Text */}
          <p
            className="text-white font-normal max-w-7xl"
            style={{
              fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
              fontWeight: 100,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "1.75",
              letterSpacing: "0.01em",
            }}
          >
            At ALLINA, we are dedicated to sustainable development and energy
            efficiency. Our mission is to create infrastructure solutions that
            minimize environmental impact while maximizing energy savings and
            operational efficiency. By integrating advanced technologies like
            IoT, solar power, and energy-efficient systems, we aim to reduce
            carbon emissions and promote eco-friendly practices in every project
            we undertake.
          </p>

          {/* Expand/Collapse Button */}
          <div className="flex justify-start mt-0">
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
              {allOpen ? "COLLAPSE ALL -" : "EXPAND ALL +"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 lg:pb-16">
          {/* Left side - Accordion Commitments */}
          <div className="flex-1 min-w-0 order-1 lg:order-1" ref={containerRef}>
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={handleAccordionChange}
            >
              {commitments.map((commitment, idx) => (
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
                      {commitment.num}
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
                      {commitment.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      ref={(el) => (contentRefs.current[idx] = el)}
                      className="overflow-hidden"
                    >
                    <p
                        className="text-white text-sm sm:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 max-w-[500px] font-normal mt-0 pb-4 transition-all duration-300 ml-[112px]"
                      style={{
                        fontFamily: "Myriad Pro, Helvetica, Arial, sans-serif",
                        fontWeight: 400,
                          marginTop: 0,
                          letterSpacing: "0.03em",
                      }}
                    >
                      {commitment.desc}
                    </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 w-full lg:w-[350px] xl:w-[500px] mx-auto lg:mx-0 flex justify-center order-2 lg:order-2">
            <div
              ref={imageRef}
              className="w-full h-[600px] bg-cover bg-center rounded-lg shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-black/40 transition-all duration-500 cursor-pointer"
              style={{
                backgroundImage: "url(https://res.cloudinary.com/dllukqtlt/image/upload/v1751113742/935601e6-19ea-419e-a893-8a895f9c0dbc_unpjlb.png)",
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
        </div>
      </div>
    </section>
  );
};
