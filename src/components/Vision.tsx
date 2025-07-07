import React from 'react';

export const Vision: React.FC = () => {
  return (
    <div
      className="w-full max-w-[1360px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[647px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-cover bg-center shadow-2xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1360&q=80')",
        filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
        WebkitFilter: 'grayscale(100%) contrast(1.1) brightness(0.9)'
      }}
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-widest drop-shadow-lg">VISION</h2>
      <p className="text-white text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl text-center drop-shadow-lg leading-relaxed">
        To be a global leader in delivering innovative, sustainable, and reliable solutions across industries. Our vision reflects our ambition to grow beyond streetlighting and become a multi-industry leader, offering cutting-edge solutions that empower communities, drive progress, and contribute to a sustainable future.
      </p>
    </div>
  );
}; 