import React, { useState, useMemo } from 'react';

interface Role {
  id: number;
  title: string;
  description: string;
  type: string;
  payRange: string;
  location: string;
}

const engineeringRoles: Role[] = [
  { 
    id: 1, 
    title: 'IOT Engineer', 
    description: "Design and develop IoT systems for smart streetlight infrastructure and monitoring solutions.",
    type: 'Full-time',
    payRange: '80k-100k',
    location: 'Faridabad, India'
  },
  { 
    id: 2, 
    title: 'Mechanical Engineer', 
    description: "Work on mechanical design and implementation of streetlight poles and hardware systems.",
    type: 'Full-time',
    payRange: '75k-95k',
    location: 'Faridabad, India'
  },
  { 
    id: 3, 
    title: 'Electrical Engineer', 
    description: "Design electrical systems and energy-efficient lighting solutions for urban infrastructure.",
    type: 'Full-time',
    payRange: '70k-90k',
    location: 'Delhi, India'
  },
  { 
    id: 4, 
    title: 'Software Developer', 
    description: "Develop smart city applications and control systems for IoT-enabled infrastructure.",
    type: 'Full-time',
    payRange: '60k-80k',
    location: 'Faridabad, India'
  },
  { 
    id: 5, 
    title: 'Solar Engineer', 
    description: "Design and optimize solar-powered streetlight systems and renewable energy solutions.",
    type: 'Full-time',
    payRange: '65k-85k',
    location: 'Gurgaon, India'
  },
  { 
    id: 6, 
    title: 'Project Engineer', 
    description: "Manage engineering projects from concept to completion for lighting infrastructure.",
    type: 'Contract',
    payRange: '55k-75k',
    location: 'Faridabad, India'
  }
];

const managementRoles: Role[] = [
  { 
    id: 7, 
    title: 'HR Manager', 
    description: "Lead human resources operations and talent acquisition for our growing team.",
    type: 'Full-time',
    payRange: '90k-120k',
    location: 'Faridabad, India'
  },
  { 
    id: 8, 
    title: 'Team Manager', 
    description: "Manage cross-functional teams and drive project delivery for infrastructure solutions.",
    type: 'Full-time',
    payRange: '100k-130k',
    location: 'Faridabad, India'
  },
  { 
    id: 9, 
    title: 'Operations Manager', 
    description: "Oversee daily operations and ensure efficient workflow across all departments.",
    type: 'Full-time',
    payRange: '85k-110k',
    location: 'Delhi, India'
  },
  { 
    id: 10, 
    title: 'Sales Manager', 
    description: "Drive business growth through strategic sales initiatives and client relationships.",
    type: 'Full-time',
    payRange: '80k-120k',
    location: 'Mumbai, India'
  },
  { 
    id: 11, 
    title: 'Marketing Manager', 
    description: "Develop and execute marketing strategies to promote our sustainable infrastructure solutions.",
    type: 'Full-time',
    payRange: '70k-95k',
    location: 'Faridabad, India'
  },
  { 
    id: 12, 
    title: 'Finance Manager', 
    description: "Manage financial operations, budgeting, and strategic financial planning.",
    type: 'Full-time',
    payRange: '90k-115k',
    location: 'Gurgaon, India'
  }
];

const RoleCard: React.FC<{ role: Role }> = ({ role }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        width: '932px',
        height: '202px',
        backgroundColor: '#E7DED7',
        borderRadius: '15px',
        border: '1px solid #000000',
        marginBottom: '48px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circular expanding overlay */}
      <div 
        className="absolute inset-0 bg-black transition-all ease-in-out"
        style={{
          clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)',
          borderRadius: '15px',
          transitionDuration: '1200ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      {/* Description */}
      <p 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '550px',
          height: '27px',
          top: '75px',
          left: '41px',
          fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          color: isHovered ? '#ffffff' : '#666666',
          fontSize: '18.3px',
          letterSpacing: '0',
          lineHeight: 'normal',
          transition: 'color 1200ms ease-in-out'
        }}
      >
        {role.description}
      </p>

      {/* Title Section with Icon */}
      <div 
        className="relative z-10"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 0px',
          position: 'absolute',
          top: '23px',
          left: '30px'
        }}
      >
        {/* Icon */}
        <svg 
          style={{
            position: 'relative',
            width: '32px',
            height: '32px',
            transition: 'fill 1200ms ease-in-out'
          }}
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.9998 15.1792C14.8998 15.1792 13.9582 14.7875 13.1748 14.0042C12.3915 13.2209 11.9998 12.2792 11.9998 11.1792C11.9998 10.0792 12.3915 9.13753 13.1748 8.3542C13.9582 7.57087 14.8998 7.1792 15.9998 7.1792C17.0998 7.1792 18.0415 7.57087 18.8248 8.3542C19.6082 9.13753 19.9998 10.0792 19.9998 11.1792C19.9998 12.2792 19.6082 13.2209 18.8248 14.0042C18.0415 14.7875 17.0998 15.1792 15.9998 15.1792ZM6.6665 23.4359V22.6255C6.6665 22.0751 6.82673 21.5601 7.14717 21.0805C7.46784 20.6012 7.89906 20.229 8.44084 19.9639C9.69906 19.3605 10.9581 18.908 12.2178 18.6062C13.4776 18.3046 14.7383 18.1539 15.9998 18.1539C17.2614 18.1539 18.5221 18.3046 19.7818 18.6062C21.0416 18.908 22.3006 19.3605 23.5588 19.9639C24.1006 20.229 24.5318 20.6012 24.8525 21.0805C25.1729 21.5601 25.3332 22.0751 25.3332 22.6255V23.4359C25.3332 23.8272 25.2003 24.1558 24.9345 24.4215C24.6687 24.6875 24.3401 24.8205 23.9485 24.8205H8.05117C7.65961 24.8205 7.33095 24.6875 7.06517 24.4215C6.79939 24.1558 6.6665 23.8272 6.6665 23.4359ZM7.99984 23.4872H23.9998V22.6255C23.9998 22.3298 23.9045 22.052 23.7138 21.7922C23.5234 21.5324 23.2597 21.3128 22.9228 21.1332C21.8255 20.6016 20.6941 20.1944 19.5285 19.9115C18.3629 19.6286 17.1867 19.4872 15.9998 19.4872C14.8129 19.4872 13.6367 19.6286 12.4712 19.9115C11.3056 20.1944 10.1742 20.6016 9.07684 21.1332C8.73995 21.3128 8.47628 21.5324 8.28584 21.7922C8.09517 22.052 7.99984 22.3298 7.99984 22.6255V23.4872ZM15.9998 13.8459C16.7332 13.8459 17.3609 13.5848 17.8832 13.0625C18.4054 12.5403 18.6665 11.9125 18.6665 11.1792C18.6665 10.4459 18.4054 9.81809 17.8832 9.29587C17.3609 8.77364 16.7332 8.51253 15.9998 8.51253C15.2665 8.51253 14.6387 8.77364 14.1165 9.29587C13.5943 9.81809 13.3332 10.4459 13.3332 11.1792C13.3332 11.9125 13.5943 12.5403 14.1165 13.0625C14.6387 13.5848 15.2665 13.8459 15.9998 13.8459Z" fill={isHovered ? "#ffffff" : "#000000"}/>
        </svg>
        
        {/* Title */}
        <div 
          className="relative z-10"
          style={{
            position: 'relative',
            width: 'fit-content',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: isHovered ? '#ffffff' : '#000000',
            fontSize: '20.9px',
            letterSpacing: '0',
            lineHeight: 'normal',
            whiteSpace: 'nowrap',
            transition: 'color 1200ms ease-in-out'
          }}
        >
          {role.title}
        </div>
      </div>

      {/* Bottom Section - Full-time and Salary */}
      <div 
        className="relative z-10"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '40px',
          position: 'absolute',
          top: '157px',
          left: '30px'
        }}
      >
        {/* Full-time */}
        <div 
          style={{
            display: 'flex',
            width: '114.32px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <svg 
            style={{
              position: 'relative',
              width: '24px',
              height: '24px',
              transition: 'fill 1200ms ease-in-out'
            }}
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.6155 20C4.15517 20 3.77083 19.8458 3.4625 19.5375C3.15417 19.2292 3 18.8448 3 18.3845V8.6155C3 8.15517 3.15417 7.77083 3.4625 7.4625C3.77083 7.15417 4.15517 7 4.6155 7H9V5.61525C9 5.15508 9.15417 4.77083 9.4625 4.4625C9.77083 4.15417 10.1552 4 10.6155 4H13.3845C13.8448 4 14.2292 4.15417 14.5375 4.4625C14.8458 4.77083 15 5.15508 15 5.61525V7H19.3845C19.8448 7 20.2292 7.15417 20.5375 7.4625C20.8458 7.77083 21 8.15517 21 8.6155V18.3845C21 18.8448 20.8458 19.2292 20.5375 19.5375C20.2292 19.8458 19.8448 20 19.3845 20H4.6155ZM4.6155 19H19.3845C19.5385 19 19.6796 18.9359 19.8078 18.8077C19.9359 18.6796 20 18.5385 20 18.3845V8.6155C20 8.4615 19.9359 8.32042 19.8078 8.19225C19.6796 8.06408 19.5385 8 19.3845 8H4.6155C4.4615 8 4.32042 8.06408 4.19225 8.19225C4.06408 8.32042 4 8.4615 4 8.6155V18.3845C4 18.5385 4.06408 18.6796 4.19225 18.8077C4.32042 18.9359 4.4615 19 4.6155 19ZM10 7H14V5.61525C14 5.46142 13.9359 5.32042 13.8077 5.19225C13.6796 5.06408 13.5385 5 13.3845 5H10.6155C10.4615 5 10.3204 5.06408 10.1923 5.19225C10.0641 5.32042 10 5.46142 10 5.61525V7Z" fill={isHovered ? "#ffffff" : "#000000"}/>
          </svg>
          <span 
            style={{
              position: 'relative',
              width: '81.33px',
              height: '22.33px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: isHovered ? '#ffffff' : '#000000',
              fontSize: '19.5px',
              letterSpacing: '0',
              lineHeight: 'normal',
              whiteSpace: 'nowrap',
              transition: 'color 1200ms ease-in-out'
            }}
          >
            {role.type}
          </span>
        </div>

        {/* Salary */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '8px',
            position: 'relative'
          }}
        >
          <svg 
            style={{
              position: 'relative',
              width: '25px',
              height: '24px',
              transition: 'fill 1200ms ease-in-out'
            }}
            viewBox="0 0 25 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.8175 12.4232C13.2533 12.4232 12.779 12.231 12.3945 11.8465C12.0098 11.4618 11.8175 10.9874 11.8175 10.4232C11.8175 9.85921 12.0098 9.38487 12.3945 9.00021C12.779 8.61554 13.2533 8.42321 13.8175 8.42321C14.3817 8.42321 14.856 8.61554 15.2405 9.00021C15.6252 9.38487 15.8175 9.85921 15.8175 10.4232C15.8175 10.9874 15.6252 11.4618 15.2405 11.8465C14.856 12.231 14.3817 12.4232 13.8175 12.4232ZM7.62527 15.6157C7.18093 15.6157 6.8006 15.4575 6.48427 15.141C6.16793 14.8246 6.00977 14.4444 6.00977 14.0002V6.84646C6.00977 6.40212 6.16793 6.02179 6.48427 5.70546C6.8006 5.38912 7.18093 5.23096 7.62527 5.23096H20.0098C20.4541 5.23096 20.8344 5.38912 21.1508 5.70546C21.4671 6.02179 21.6253 6.40212 21.6253 6.84646V14.0002C21.6253 14.4444 21.4671 14.8246 21.1508 15.141C20.8344 15.4575 20.4541 15.6157 20.0098 15.6157H7.62527ZM8.62527 14.6157H19.0098C19.0098 14.1682 19.1679 13.787 19.4843 13.4722C19.8006 13.1575 20.1809 13.0002 20.6253 13.0002V7.84646C20.1778 7.84646 19.7967 7.68829 19.482 7.37196C19.1672 7.05546 19.0098 6.67512 19.0098 6.23096H8.62527C8.62527 6.67846 8.4671 7.05954 8.15077 7.37421C7.83443 7.68904 7.4541 7.84646 7.00977 7.84646V13.0002C7.45727 13.0002 7.83835 13.1584 8.15302 13.4747C8.46785 13.791 8.62527 14.1714 8.62527 14.6157ZM18.1638 18.6157H4.62527C4.18093 18.6157 3.8006 18.4575 3.48427 18.141C3.16793 17.8246 3.00977 17.4444 3.00977 17.0002V8.69246C3.00977 8.55079 3.05777 8.43204 3.15377 8.33621C3.24977 8.24037 3.36868 8.19246 3.51052 8.19246C3.65235 8.19246 3.77102 8.24037 3.86652 8.33621C3.96202 8.43204 4.00977 8.55079 4.00977 8.69246V17.0002C4.00977 17.154 4.07385 17.295 4.20202 17.4232C4.33035 17.5515 4.47143 17.6157 4.62527 17.6157H18.1638C18.3054 17.6157 18.4242 17.6636 18.52 17.7595C18.6158 17.8555 18.6638 17.9744 18.6638 18.1162C18.6638 18.258 18.6158 18.3767 18.52 18.4722C18.4242 18.5679 18.3054 18.6157 18.1638 18.6157ZM7.62527 14.6157H7.00977V6.23096H7.62527C7.4586 6.23096 7.31435 6.29187 7.19252 6.41371C7.07068 6.53554 7.00977 6.67979 7.00977 6.84646V14.0002C7.00977 14.1669 7.07068 14.3111 7.19252 14.433C7.31435 14.5548 7.4586 14.6157 7.62527 14.6157Z" fill={isHovered ? "#ffffff" : "#000000"}/>
          </svg>
          <span 
            style={{
              position: 'relative',
              width: '95.69px',
              marginTop: '-1px',
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: isHovered ? '#ffffff' : '#000000',
              fontSize: '19.5px',
              letterSpacing: '0',
              lineHeight: 'normal',
              transition: 'color 1200ms ease-in-out'
            }}
          >
            {role.payRange}
          </span>
        </div>
      </div>

      {/* Location Badge */}
      <div 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '159px',
          height: '29px',
          top: '18px',
          left: '731px',
          backgroundColor: isHovered ? '#000000' : '#e7ded7',
          borderRadius: '4px',
          border: isHovered ? '1px solid #ffffff' : '1px solid #06153A',
          transition: 'background-color 1200ms ease-in-out, border-color 1200ms ease-in-out'
        }}
      >
        <span 
          style={{
            position: 'absolute',
            height: '18px',
            top: '5px',
            left: '43px',
            fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: isHovered ? '#ffffff' : '#06153A',
            fontSize: '14.9px',
            textAlign: 'right',
            letterSpacing: '0',
            lineHeight: 'normal',
            transition: 'color 1200ms ease-in-out'
          }}
        >
          {role.location}
        </span>
        <svg 
          style={{
            position: 'absolute',
            width: '14px',
            height: '18px',
            top: '5px',
            left: '6px',
            transition: 'fill 1200ms ease-in-out'
          }}
          viewBox="0 0 24 24" 
          fill={isHovered ? "#ffffff" : "#06153A"}
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>

      {/* Circle Dot */}
      <div 
        className="relative z-10"
        style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          top: '202px',
          left: '444px',
          backgroundColor: isHovered ? '#ffffff' : '#000000',
          borderRadius: '6px',
          transition: 'background-color 1200ms ease-in-out'
        }}
      />
    </div>
  );
};

const NavigationDots: React.FC<{ 
  total: number; 
  current: number; 
  onPageChange: (page: number) => void;
}> = ({ total, current, onPageChange }) => (
  <div className="flex justify-center items-center gap-4 mt-6">
    {/* Previous Button */}
    <button
      onClick={() => current > 0 && onPageChange(current - 1)}
      disabled={current === 0}
      className={`px-4 py-2 rounded-full transition-all ${
        current === 0 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : 'bg-[#06153A] text-white hover:bg-[#06153A]/80'
      }`}
      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
    >
      Previous
    </button>

    {/* Dots */}
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === current ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
          }`}
        />
      ))}
    </div>

    {/* Next Button */}
    <button
      onClick={() => current < total - 1 && onPageChange(current + 1)}
      disabled={current === total - 1}
      className={`px-4 py-2 rounded-full transition-all ${
        current === total - 1 
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
          : 'bg-[#06153A] text-white hover:bg-[#06153A]/80'
      }`}
      style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
    >
      Next
    </button>
  </div>
);

export const OpenRoles: React.FC = () => {
  const [engineeringPage, setEngineeringPage] = useState(0);
  const [managementPage, setManagementPage] = useState(0);
  
  const CARDS_PER_PAGE = 2;

  // Pagination calculations
  const engineeringTotalPages = Math.ceil(engineeringRoles.length / CARDS_PER_PAGE);
  const managementTotalPages = Math.ceil(managementRoles.length / CARDS_PER_PAGE);

  // Get current page roles
  const currentEngineeringRoles = useMemo(() => {
    const startIndex = engineeringPage * CARDS_PER_PAGE;
    return engineeringRoles.slice(startIndex, startIndex + CARDS_PER_PAGE);
  }, [engineeringPage]);

  const currentManagementRoles = useMemo(() => {
    const startIndex = managementPage * CARDS_PER_PAGE;
    return managementRoles.slice(startIndex, startIndex + CARDS_PER_PAGE);
  }, [managementPage]);

  return (
    <section id="open-roles" className="w-full bg-[#E7DED7] pt-16 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-[#06153A] font-normal tracking-[2.5px] sm:tracking-[3px] md:tracking-[3.2px] uppercase mb-8 text-lg md:text-xl"
            style={{ 
              fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              margin: '0 auto'
            }}
          >
            OPEN ROLES
          </h1>
        </div>

        {/* Engineering Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title and Image */}
              <div>
                <div className="mb-8">
                  <h2 
                    className="text-4xl font-normal text-gray-900 mb-4"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Engineering
                  </h2>
                  <p 
                    className="text-gray-600 text-lg"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Open positions in our Engineering team.
                  </p>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://res.cloudinary.com/dllukqtlt/image/upload/v1751111932/Engineering_soeyqw.png" 
                    alt="Engineering Team" 
                    className="object-cover"
                    style={{
                      width: '402px',
                      height: '336px',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Job Cards */}
              <div style={{ marginLeft: '-250px' }}>
              {currentEngineeringRoles.map((role) => (
                    <RoleCard key={role.id} role={role} />
              ))}
              </div>
            </div>
            
            {/* Navigation for Engineering */}
          {engineeringTotalPages > 1 && (
              <NavigationDots 
                total={engineeringTotalPages} 
                current={engineeringPage}
                onPageChange={setEngineeringPage}
              />
            )}
            
            {/* Decorative Line SVG */}
              <div className="flex justify-center mt-12 mb-8 w-full">
                <div className="w-full">
                  <svg width="100%" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <line x1="0" y1="1" x2="1200" y2="1" stroke="#777777" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
          </div>

        {/* Management Section */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Title and Image */}
              <div>
                <div className="mb-8">
                  <h2 
                    className="text-4xl font-normal text-gray-900 mb-4"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Management
                  </h2>
                  <p 
                    className="text-gray-600 text-lg"
                    style={{ fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif' }}
                  >
                    Open positions in our Management team.
                  </p>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://res.cloudinary.com/dllukqtlt/image/upload/v1751120055/managementt_apaubx.jpg" 
                    alt="Management Team" 
                    className="object-cover"
                    style={{
                      width: '402px',
                      height: '336px',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Job Cards */}
              <div style={{ marginLeft: '-250px' }}>
              {currentManagementRoles.map((role) => (
                    <RoleCard key={role.id} role={role} />
              ))}
              </div>
            </div>
            
            {/* Navigation for Management */}
          {managementTotalPages > 1 && (
              <NavigationDots 
                total={managementTotalPages} 
                current={managementPage}
                onPageChange={setManagementPage}
              />
            )}
            
            {/* Decorative Line SVG */}
            <div className="flex justify-center mt-12 mb-0 w-full">
              <div className="w-full">
                <svg width="100%" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <line x1="0" y1="1" x2="1200" y2="1" stroke="#777777" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}; 