import React from 'react';

const projects = [
  {
    title: 'Solar Streetlighting in Alwar.',
    desc: [
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful. keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful. keep in mind that solar lights are too useful.'
    ],
    img: 'https://res.cloudinary.com/dllukqtlt/image/upload/v1751524252/WhatsApp_Image_2025-07-03_at_11.50.01_97aaeb31_lssuri.jpg'
  },
  {
    title: 'LED Retrofit in Gurgaon.',
    desc: [
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.',
      'Thought the street lights are crucial parts of society and lifestyle, it is necessary to keep in mind that solar lights are too useful.'
    ],
    img: 'https://res.cloudinary.com/dllukqtlt/image/upload/v1751524247/WhatsApp_Image_2025-07-03_at_11.50.28_40f94d5c_hvq9vw.jpg'
  },
  {
    title: 'Smart City Project in Jaipur.',
    desc: [
      'Implementation of smart lighting solutions for enhanced urban infrastructure and energy efficiency.',
      'Integration of IoT-based control systems for optimal performance and monitoring capabilities.'
    ],
    img: 'https://res.cloudinary.com/dllukqtlt/image/upload/v1751113747/a948e410-c71d-4c71-90cb-a50cb9c5cb81_oplwld.png'
  }
];

export const GreenProjects = () => (
  <>
    {/* GREEN PROJECTS Section Title */}
    <div className="w-full flex justify-center bg-[#E7DED7] items-center py-8 sm:py-10 md:py-12 px-4">
              <h2 className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] text-center text-lg md:text-xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif', 
              fontWeight: 400
            }}>
        GREEN PROJECTS
      </h2>
    </div>

          {/* GREEN PROJECTS Content */}
      <section className="w-full bg-[#E7DED7] pt-0 pb-12 px-8 md:px-16 flex flex-col items-center">
    <div className="flex flex-col gap-24 w-full max-w-[1440px]">
      {projects.map((project, idx) => (
        <div 
          key={idx} 
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="w-full md:w-[657px] flex-shrink-0">
            <div 
              className="w-full md:w-[657px] h-[666px] rounded-[21px] overflow-hidden"
              style={{ border: '1px solid #06153A' }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:flex-1 flex flex-col">
            <div className="w-full md:w-[602px] mb-4">
              <h4 
                className="text-[#06153A] text-[46px] leading-[63px] font-semibold"
                style={{ 
                  fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                  letterSpacing: '0.02em',
                  fontWeight: 600
                }}
              >
                {project.title}
              </h4>
            </div>
            <div className="space-y-6">
              {project.desc.map((p, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-[638px]"
                >
                  <p 
                    className="text-[#676767] text-[19px]"
                    style={{ 
                      fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
                      fontWeight: 400,
                      lineHeight: '28px',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  </>
); 