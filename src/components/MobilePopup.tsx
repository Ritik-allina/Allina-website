import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Monitor, Smartphone } from 'lucide-react';

const MobilePopup = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup when on mobile device
    if (isMobile) {
      // Small delay to ensure smooth page load
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  if (!isMobile) {
    return null;
  }

  // Generate bubbles with random positions and delays
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 6, // 6-14px (smaller bubbles)
    left: Math.random() * 100, // 0-100%
    delay: Math.random() * 3, // 0-3s
    duration: Math.random() * 3 + 4, // 4-7s
  }));

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="!fixed !inset-0 !w-screen !h-screen !max-w-none !max-h-none !m-0 !rounded-none !border-0 !p-8 !flex !flex-col !justify-center !items-center !z-[100] !translate-x-0 !translate-y-0 !left-0 !top-0 [&>button]:hidden bg-primary relative">
        {/* Bubble Animation Background - Behind the card */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                bottom: '0px',
                backgroundColor: 'rgba(255, 215, 0, 0.3)',
                animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
                animationDelay: `${bubble.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Card Container with cream color */}
        <div className="bg-[#E7DED7] rounded-lg p-8 max-w-md w-full flex flex-col items-center shadow-2xl relative z-10">
          <DialogHeader className="text-center w-full">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Monitor className="h-16 w-16 text-primary animate-pulse" />
                <Smartphone 
                  className="h-8 w-8 text-primary/70 absolute -bottom-2 -right-2 animate-bounce" 
                  style={{ animationDuration: '2s' }}
                />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl md:text-3xl mb-4 text-[#06153A]">
              Better Experience on Desktop
            </DialogTitle>
            <DialogDescription className="text-center text-base md:text-lg pt-2 text-[#06153A]/80">
              For the best viewing experience, we recommend accessing this website
              on a desktop or tablet device. The full range of features and
              content are optimized for larger screens.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-8 w-full">
            <Button
              onClick={() => setOpen(false)}
              className="w-full h-12 text-base font-semibold bg-primary text-[#E7DED7] hover:bg-primary/90"
              size="lg"
            >
              I Understand
            </Button>
          </div>
        </div>

        {/* Bubble Animation Keyframes */}
        <style>{`
          @keyframes bubbleFloat {
            0% {
              transform: translateY(0);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-50vh);
              opacity: 0.5;
            }
            100% {
              transform: translateY(-100vh);
              opacity: 0;
            }
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
};

export default MobilePopup;

