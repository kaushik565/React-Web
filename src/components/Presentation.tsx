'use client';

import { useState, useEffect, useCallback } from 'react';
import SlideContainer from './SlideContainer';
import Navigation from './Navigation';
import StartupDialog from './StartupDialog';
import { slides } from './slides/slideData';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDialog, setShowDialog] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen().catch(console.error);
    }
  }, []);

  const handleDialogClose = useCallback(() => {
    setShowDialog(false);
    // Enter fullscreen when user clicks "Got it!"
    document.documentElement.requestFullscreen().catch(console.error);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleNext, handlePrev, toggleFullscreen]);

  return (
    <>
      <StartupDialog isOpen={showDialog} onClose={handleDialogClose} />
      
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SlideContainer>
          {slides[currentSlide]}
        </SlideContainer>

        <Navigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={handleNext}
          onPrev={handlePrev}
          onToggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
        />
      </div>
    </>
  );
}

// powershell
// cd "d:\BATCH MIX UP\batch-mix-presentation"
// gh auth login
// # Choose GitHub.com, HTTPS, and authenticate
// gh repo create your-username/batch-mix-presentation --source . --private --push
