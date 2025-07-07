import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { setJourneyInView } = useTheme();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    const scrollToTop = () => {
      // Immediate scroll for instant feedback
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Reset theme state - Journey is not in view on new page load
      setJourneyInView(false);
      
      // Ensure scroll position is maintained at top for all browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Force repaint to ensure smooth rendering
      document.documentElement.style.scrollBehavior = 'auto';
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    };

    // Handle initial page load (including refreshes)
    if (prevPathnameRef.current === null) {
      // First time loading the page (including refreshes)
      requestAnimationFrame(scrollToTop);
    } 
    // Handle route changes
    else if (prevPathnameRef.current !== pathname) {
      // User navigated to a different page
      requestAnimationFrame(scrollToTop);
    }

    // Update the previous pathname
    prevPathnameRef.current = pathname;
  }, [pathname, setJourneyInView]);

  return null;
}; 