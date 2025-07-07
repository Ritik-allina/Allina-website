import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Career from './pages/Career';
import Sustainability from './pages/Sustainability';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

// Initialize QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Configure browser scroll restoration behavior
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Ensure page always starts at top on load/reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <TooltipProvider>
            <div className="min-h-screen bg-[#E7DED7] dark:bg-black transition-colors duration-700">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/career" element={<Career />} />
                <Route path="/services" element={<Services />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toaster />
              <Sonner />
            </div>
          </TooltipProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
