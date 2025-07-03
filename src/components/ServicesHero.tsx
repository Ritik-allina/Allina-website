import React from 'react';

const ServicesHero = () => {
  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center services-hero-section" 
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dllukqtlt/image/upload/v1751524452/WhatsApp_Image_2025-07-03_at_11.50.52_7786b7fe_zhvhiv.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 'calc(100vh - 60px)',
        minHeight: 'calc(100vh - 60px)',
      }}
    >
      {/* Content container */}
      <div className="w-full mx-auto relative flex flex-col justify-start h-full z-10 pt-5 sm:pt-6 md:pt-6 lg:pt-8">
        {/* Text Container */}
        <div className="relative w-full flex flex-col items-center">
          {/* Main heading with full-width background */}
          <div className="w-screen relative left-1/2 transform -translate-x-1/2 main-heading-container">
            <div 
              className="w-full py-2 sm:py-3 md:py-4 lg:py-5"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div 
                className="text-center main-heading px-4"
                style={{
                  fontFamily: 'Myriad Pro, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 28px)',
                  fontWeight: '400',
                  letterSpacing: '0.16em',
                  color: '#DDB9A2',
                  zIndex: 10,
                  lineHeight: '100%',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                ALLINA: DELIVERING RELIABLE URBAN SOLUTIONS
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Background overlay to fade the image */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>

      {/* Responsive styles */}
      <style>{`
        /* Base styles for all screen sizes */
        .services-hero-section {
          height: calc(100vh - 60px);
          min-height: calc(100vh - 60px);
        }

        /* Mobile phones (up to 640px) */
        @media (max-width: 640px) {
          .services-hero-section {
            height: 100vh;
            min-height: 100vh;
          }
          
          .main-heading {
            font-size: 14px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Small tablets (641px - 768px) */
        @media (min-width: 641px) and (max-width: 768px) {
          .services-hero-section {
            height: calc(100vh - 80px);
            min-height: calc(100vh - 80px);
          }
          
          .main-heading {
            font-size: 18px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Tablets (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-hero-section {
            height: calc(100vh - 100px);
            min-height: calc(100vh - 100px);
          }
          
          .main-heading {
            font-size: 22px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Desktop (1025px - 1440px) */
        @media (min-width: 1025px) and (max-width: 1440px) {
          .services-hero-section {
            height: calc(100vh - 100px);
            min-height: calc(100vh - 100px);
          }
          
          .main-heading {
            font-size: 26px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Large desktop (1441px and up) */
        @media (min-width: 1441px) {
          .services-hero-section {
            height: calc(100vh - 100px);
            min-height: calc(100vh - 100px);
          }
          
          .main-heading {
            font-size: 28px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Landscape mode optimizations for short screens */
        @media (max-height: 600px) and (orientation: landscape) {
          .services-hero-section {
            height: 100vh;
            min-height: 100vh;
          }
          
          .main-heading {
            font-size: 16px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Very short screens (like tablets in landscape) */
        @media (max-height: 500px) and (orientation: landscape) {
          .main-heading {
            font-size: 14px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Ultra-wide screens */
        @media (min-width: 1920px) {
          .main-heading {
            font-size: 32px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }

        /* Ensure text doesn't overflow on very narrow screens */
        @media (max-width: 360px) {
          .main-heading {
            font-size: 12px !important;
            letter-spacing: 0.16em !important;
            line-height: 100% !important;
            text-transform: uppercase !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesHero; 