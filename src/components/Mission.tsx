import React from 'react';

export const Mission: React.FC = () => {
  return (
    <div
      className="w-full max-w-[1360px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[647px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-cover bg-center shadow-2xl flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1360&q=80')"
      }}
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-widest drop-shadow-lg">MISSION</h2>
      <p className="text-white text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl text-center drop-shadow-lg leading-relaxed">
        To provide high-quality, energy-efficient streetlighting and infrastructure solutions that enhance safety, sustainability, and quality of life for communities. We are committed to engineering excellence, customer satisfaction, and environmental responsibility.
      </p>
    </div>
  );
}; 