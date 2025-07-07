import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0a2240] text-center px-4">
      <h1 className="text-[80px] font-bold text-[#e3c6b2] mb-4" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>404</h1>
      <h2 className="text-[32px] font-semibold text-white mb-2" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>Oops! Page not found</h2>
      <p className="text-lg text-[#e3c6b2] mb-8" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="inline-block px-8 py-3 rounded-full bg-[#e3c6b2] text-[#0a2240] font-semibold text-lg transition hover:bg-[#ddb9a2]" style={{fontFamily: 'Myriad Pro, Helvetica, Arial, sans-serif'}}>Return to Home</Link>
    </div>
  );
};

export default NotFound;
