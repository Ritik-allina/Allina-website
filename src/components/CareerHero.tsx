import React, { useEffect, useState } from 'react';

export const CareerHero: React.FC = () => {
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const calculateHeroHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        // Increase hero size by adding extra height
        setHeroHeight(`calc(100vh - ${headerHeight}px + 100px)`);
      } else {
        // Fallback if header not found
        setHeroHeight('calc(100vh - 80px + 100px)');
      }
    };

    // Calculate on mount
    calculateHeroHeight();

    // Recalculate on resize
    window.addEventListener('resize', calculateHeroHeight);

    // Cleanup
    return () => window.removeEventListener('resize', calculateHeroHeight);
  }, []);

  const handleScrollToOpenRoles = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('open-roles');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section 
      className="w-full bg-[#06153A] relative overflow-hidden" 
      style={{ 
        height: heroHeight,
        minHeight: heroHeight,
        maxHeight: '100vh'
      }}
    >
      {/* Background Logo - Bottom positioned and responsive */}
      <div className="absolute pointer-events-none z-0 left-1/2 bottom-8 -translate-x-1/2 career-hero-logo">
        <svg 
          width="301.82" 
          height="490.05" 
          viewBox="0 0 303 491" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{
            width: 'clamp(240px, 35vw, 480px)',
            height: 'clamp(300px, 45vw, 600px)'
          }}
        >
          <path 
            d="M177.255 178.585C238.297 178.585 237.596 179.816 237.042 180.879H209.078C207.977 178.768 206.293 175.98 203.874 173.117L203.872 173.114C203.662 172.866 203.42 172.618 203.198 172.37H242.93ZM192.301 61.8262C195.523 57.0473 198.338 52.4615 201.622 48.8344L201.625 48.8308C206.907 42.9454 214.896 39.5555 223.003 39.5591H223.004H223.023C224.386 39.5598 225.752 39.6542 227.108 39.8459C231.548 40.4803 235.39 42.0466 238.913 44.395C242.42 46.7398 245.578 49.8933 248.356 53.6292C251.195 57.43 253.935 61.8925 257.261 66.2721C258.873 68.3877 260.665 70.4831 262.682 72.461H183.659C187.163 69.1143 189.872 65.4007 192.298 61.8298L192.301 61.8262ZM198.022 161.336L175.537 83.4958H217.387V161.336H198.022ZM290.965 479.716H230.783L230.781 296.887L290.965 338.136V479.716ZM140.948 307.316V479.717H82.0617L82.0625 195.102L140.947 160.723L140.948 220.016L140.941 220.008V271.824V286.673V307.316H140.948ZM230.781 283.387L230.78 191.913H244.739L246.091 188.173C246.122 188.093 246.237 187.804 246.423 187.392C247.077 185.932 248.654 182.839 251.166 179.945L251.169 179.942C252.902 177.931 255.061 176.018 257.61 174.644C260.185 173.266 263.099 172.38 266.799 172.37L268.47 172.367V161.336H258.974L282.326 83.4958H287.012C287.295 83.5066 287.656 83.5405 288.102 83.5419C288.596 83.5419 289.078 83.521 289.548 83.4958H298.895V72.461H287.13C285.466 72.3636 283.725 72.0378 281.991 71.4908C279.904 70.8341 277.824 69.8812 275.942 68.7762C272.281 66.634 269.277 63.5115 266.385 59.7085C263.493 55.9236 260.775 51.5021 257.552 47.1614C254.164 42.6117 250.141 38.5132 245.345 35.3041C240.555 32.0937 234.978 29.8037 228.739 28.9265C228.261 28.858 227.785 28.8284 227.308 28.7794V0.696838H215.958V29.1809C207.235 30.6903 199.078 34.9221 193.086 41.5615C188.878 46.2474 185.851 51.3017 182.819 55.7585L182.818 55.7621C179.792 60.2433 176.794 64.1075 173.01 66.8985C170.825 68.5196 168.295 69.9597 165.712 70.9559C163.427 71.8403 161.102 72.3543 158.896 72.461H144.37V83.4958H156.559C157.048 83.5225 157.550 83.5433 158.065 83.5433C158.595 83.5433 159.115 83.5239 159.628 83.4958H163.749L186.233 161.336H177.651V172.367L179.322 172.37C183.08 172.38 186.03 173.294 188.633 174.712C192.489 176.811 195.465 180.226 197.372 183.168L197.375 183.171C198.333 184.636 199.031 185.969 199.47 186.899C199.691 187.366 199.848 187.731 199.943 187.962L199.938 187.951L200.041 188.205L200.052 188.235L200.059 188.257L201.38 191.913H219.43L219.431 275.609L152.298 229.602V141.224L82.0625 182.231V172.236V166.857V105.533H70.7139V166.857V172.236V188.857L0.492188 229.856V490.751H11.8408V236.101L70.7139 201.729V490.751H146.622H152.298V285.047H152.29V273.449H152.298V271.811V243.102L219.431 289.108L219.433 490.751H302.313V332.414L230.781 283.387Z" 
            fill="#FFFFFF" 
            fillOpacity="0.13"
          />
        </svg>
      </div>

      {/* Desktop Layout - responsive specifications */}
      <div className="hidden xl:block relative z-10 w-full h-full">
        {/* Main Heading */}
        <h1 className="absolute z-30 career-hero-title"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
              fontWeight: 400,
              textAlign: 'center',
              color: '#DDB9A2',
              fontSize: 'clamp(60px, 6vw, 100px)',
              lineHeight: 'clamp(1.2, 1.4, 1.6)',
              letterSpacing: 'clamp(2px, 0.3vw, 5px)',
              top: 'clamp(200px, 25vh, 250px)',
              width: 'clamp(800px, 90vw, 1300px)',
              maxWidth: '95%'
            }}>
          BE PART OF OUR MISSION
        </h1>
        
        {/* Description */}
        <p className="absolute z-30 career-hero-description"
           style={{
             left: '50%',
             transform: 'translateX(-50%)',
             fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
             fontWeight: 400,
             textAlign: 'center',
             color: 'white',
             fontSize: 'clamp(16px, 1.5vw, 20px)',
             lineHeight: 'clamp(1.4, 1.5, 1.6)',
             letterSpacing: 'clamp(0.5px, 0.1vw, 1px)',
             top: 'clamp(350px, 40vh, 400px)',
             width: 'clamp(600px, 70vw, 743px)',
             maxWidth: '90%'
           }}>
          Our Philosophy is simple - hire a team of diverse, passionate people and foster a 
          culture that empowers you to do your best work.
        </p>

        {/* Button */}
        <div className="absolute z-30 career-hero-button"
             style={{
               left: '50%',
               transform: 'translateX(-50%)',
               top: 'clamp(450px, 55vh, 510px)'
             }}>
          <a href="#open-roles" 
             onClick={handleScrollToOpenRoles}
             className="bg-[#DDB9A2] hover:bg-[#DDB9A2]/90 text-black transition-all duration-300 inline-flex items-center justify-center"
             style={{
               fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
               fontWeight: 400,
               textAlign: 'center',
               borderRadius: '30px',
               border: '2px solid transparent',
               textTransform: 'uppercase',
               fontSize: 'clamp(14px, 1.2vw, 18px)',
               lineHeight: 'clamp(1.4, 1.6, 1.8)',
               letterSpacing: 'clamp(1px, 0.15vw, 2px)',
               width: 'clamp(180px, 18vw, 225px)',
               height: 'clamp(50px, 5vh, 60px)',
               padding: 'clamp(12px, 1vw, 15px) clamp(25px, 2.5vw, 35px)'
             }}>
            OPEN ROLES
          </a>
        </div>
      </div>

      {/* Mobile and Tablet Layout - centered */}
      <div className="xl:hidden flex items-center justify-center h-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Heading - responsive for mobile/tablet */}
            <h1 className="text-[#DDB9A2] font-normal leading-tight text-center mb-6 sm:mb-8 md:mb-10"
                style={{ 
                  fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
                  fontSize: 'clamp(24px, 6vw, 64px)',
                  letterSpacing: 'clamp(1px, 0.3vw, 5px)',
                  lineHeight: 'clamp(1.2, 1.3, 1.4)'
                }}>
              BE PART OF OUR MISSION
            </h1>

            {/* Description Text */}
            <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[600px] lg:max-w-[700px] mx-auto mb-8 sm:mb-10 md:mb-12">
              <p className="text-white leading-relaxed"
                 style={{
                   fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                   fontSize: 'clamp(14px, 3.5vw, 20px)',
                   lineHeight: 'clamp(1.4, 1.5, 1.6)',
                   letterSpacing: 'clamp(0.5px, 0.1vw, 1px)'
                 }}>
                Our Philosophy is simple - hire a team of diverse, passionate people and foster a 
                culture that empowers you to do your best work.
              </p>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <a href="#open-roles" 
                 onClick={handleScrollToOpenRoles}
                 className="bg-[#DDB9A2] hover:bg-[#DDB9A2]/90 text-black font-medium rounded-full transition-all duration-300 flex items-center justify-center"
                 style={{ 
                   fontFamily: '"Myriad Pro", Helvetica, Arial, sans-serif',
                   fontSize: 'clamp(14px, 2.5vw, 18px)',
                   fontWeight: 400,
                   textTransform: 'uppercase',
                   letterSpacing: 'clamp(1px, 0.2vw, 2px)',
                   padding: 'clamp(12px, 2.5vw, 15px) clamp(24px, 5vw, 35px)',
                   minWidth: 'clamp(140px, 30vw, 225px)',
                   height: 'clamp(44px, 8vw, 60px)'
                 }}>
                OPEN ROLES
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06153A]/20 via-transparent to-[#06153A]/20 pointer-events-none"></div>

      {/* Additional responsive styles */}
      <style>{`
        /* Ensure proper text rendering across all devices */
        .career-hero-title {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .career-hero-description {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Extra small devices (portrait phones, less than 576px) */
        @media (max-width: 575.98px) {
          .career-hero-logo {
            bottom: 1rem !important;
          }
        }

        /* Small devices (landscape phones, 576px and up) */
        @media (min-width: 576px) and (max-width: 767.98px) {
          .career-hero-logo {
            bottom: 1.5rem !important;
          }
        }

        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .career-hero-logo {
            bottom: 2rem !important;
          }
        }

        /* Large devices (desktops, 992px and up) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .career-hero-logo {
            bottom: 2.5rem !important;
          }
        }

        /* Extra large devices (large desktops, 1200px and up) */
        @media (min-width: 1200px) {
          .career-hero-logo {
            bottom: 2rem !important;
          }
        }

        /* Ultra-wide screens */
        @media (min-width: 1920px) {
          .career-hero-title {
            font-size: clamp(80px, 5vw, 120px) !important;
          }
          
          .career-hero-description {
            font-size: clamp(18px, 1.2vw, 24px) !important;
          }
          
          .career-hero-button a {
            font-size: clamp(16px, 1vw, 22px) !important;
            width: clamp(200px, 15vw, 250px) !important;
            height: clamp(55px, 4vh, 65px) !important;
          }
        }

        /* Very short screens (landscape mobile) */
        @media (max-height: 500px) and (orientation: landscape) {
          .career-hero-title {
            font-size: clamp(20px, 4vw, 36px) !important;
            line-height: 1.1 !important;
          }
          
          .career-hero-description {
            font-size: clamp(12px, 2vw, 16px) !important;
            line-height: 1.3 !important;
          }
          
          .career-hero-button a {
            font-size: clamp(12px, 2vw, 14px) !important;
            height: clamp(36px, 6vh, 44px) !important;
          }
          
          .career-hero-logo {
            display: none !important;
          }
        }

        /* Ensure no horizontal overflow */
        @media (max-width: 480px) {
          .career-hero-title {
            word-wrap: break-word;
            hyphens: auto;
            overflow-wrap: break-word;
          }
        }

        /* Fix for very tall screens */
        @media (min-height: 900px) {
          .career-hero-title {
            top: clamp(250px, 20vh, 300px) !important;
          }
          
          .career-hero-description {
            top: clamp(400px, 35vh, 450px) !important;
          }
          
          .career-hero-button {
            top: clamp(520px, 45vh, 580px) !important;
          }
        }
      `}</style>
    </section>
  );
}; 