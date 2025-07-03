import React from 'react';
import { motion } from 'framer-motion';

interface AutoShrinkTextIntroProps {
  backgroundText?: string;
  children?: React.ReactNode;
}

export const AutoShrinkTextIntro: React.FC<AutoShrinkTextIntroProps> = ({
  backgroundText = "ALLINA",
  children
}) => {
  return (
    <div className="h-screen w-full overflow-hidden relative bg-[#E7DED7] flex items-center justify-center">
      {/* Background Text */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-[-1] pointer-events-none"
        initial={{ scale: 1 }}
        animate={{ scale: 0.8 }}
        transition={{ 
          duration: 1,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div
          className="flex items-center justify-center text-[#06153A] opacity-10 font-bold select-none"
          style={{
            width: '1360px',
            height: '647px',
            borderRadius: '30px',
            fontSize: 'clamp(80px, 15vw, 160px)',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {backgroundText}
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-8 text-center max-w-4xl"
        initial={{ 
          opacity: 0, 
          y: 20 
        }}
        animate={{ 
          opacity: 1, 
          y: 0 
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 1
        }}
      >
        {children || (
          <div className="space-y-6">
            <h1 
              className="text-[#06153A] text-4xl md:text-6xl font-bold"
              style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
            >
              Welcome to ALLINA
            </h1>
            <p 
              className="text-[#06153A] text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
            >
              Pioneering sustainable energy solutions for a brighter tomorrow
            </p>
            <div className="pt-8">
              <button 
                className="bg-[#06153A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0a1f4a] transition-colors duration-300"
                style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
              >
                Explore Our Solutions
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}; 