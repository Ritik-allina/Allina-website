import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ProjectStats } from './ProjectStats';
import { OngoingProjects } from './OngoingProjects';
import { CompletedProjects } from './CompletedProjects';

export const ProjectsContent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Streetlights');

  const categories = [
    'Streetlights'
  ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-[1440px] h-[2572px] bg-black mx-auto">
      <div
        style={{
          position: 'absolute',
          width: 922,
          height: 87,
          top: 45,
          left: 259,
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          fontSize: 15,
          lineHeight: '21.72px',
          letterSpacing: '7%',
          textAlign: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        At ALLINA, our projects reflect our commitment to innovation, sustainability, and excellence. With a proven track record in delivering high-quality streetlighting solutions, we have successfully transformed urban and rural landscapes across Haryana, Rajasthan, and beyond. This section showcases our expertise through ongoing and completed projects, providing insights into the scope, progress, and impact of our work.
      </div>
      <div className="absolute w-[1170px] h-[2315px] left-[135px] border border-[#323232]" style={{ top: 209 }}>
        {/* Top line */}
        <div className="absolute w-[1170px] h-[1px] top-[280px] left-[-1px] bg-[#323232]" />
        <div className="absolute w-[1170px] h-[2033px] top-[282px] left-0">
          {/* Main container */}
          <div className="absolute w-[1170px] h-[2033px] top-0 left-0">
            {/* Vertical line */}
            <div className="absolute w-[1px] h-[2033px] top-0 left-[342px] bg-[#323232]" />
            {/* Independent Components */}
            <OngoingProjects />
            <CompletedProjects />
          </div>
        </div>
        {/* Project Stats */}
        <ProjectStats />
      </div>
      {/* Dropdown button - moved to left side */}
      <div className="absolute left-[135px]" style={{ top: 150 }}>
        <button 
          className="flex w-[207px] h-[51px] items-center justify-between p-[10px] rounded-[1px] border border-[#323232] bg-transparent hover:bg-[#323232] transition-colors cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div 
            className="text-white text-[15px] text-left whitespace-nowrap"
            style={{ 
              fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
              letterSpacing: '1.05px',
              lineHeight: '21.7px'
            }}
          >
            {selectedCategory}
          </div>
          {isDropdownOpen ? (
            <ChevronLeft className="w-[23px] h-[23px] text-[#e3e3e3]" />
          ) : (
            <ChevronRight className="w-[23px] h-[23px] text-[#e3e3e3]" />
          )}
        </button>
        
        {/* Dropdown menu - opens to the right */}
        {isDropdownOpen && (
          <div className="absolute top-0 left-[210px] w-[207px] bg-[#1a1a1a] border border-[#323232] rounded-[1px] shadow-lg z-10">
            {categories.map((category, index) => (
              <button
                key={category}
                className="w-full px-4 py-3 text-left text-white text-[15px] hover:bg-[#323232] transition-colors first:rounded-t-[1px] last:rounded-b-[1px]"
                style={{ 
                  fontFamily: '"Myriad Pro-SemiExtended", Helvetica',
                  letterSpacing: '1.05px',
                  lineHeight: '21.7px'
                }}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
