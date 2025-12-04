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
  const [showHelp, setShowHelp] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'forward' | 'backward'>('forward');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalSlides = slides.length;
  const minSwipeDistance = 50;

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setSlideDirection('forward');
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      setSlideDirection('backward');
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

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') handlePrev();
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      }
      if (e.key === 'Home') setCurrentSlide(0);
      if (e.key === 'End') setCurrentSlide(totalSlides - 1);
      if (e.key === 'F11' || e.key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      }
      if (e.key === '?' || e.key === 'h') {
        setShowHelp(prev => !prev);
      }
      if (e.key === 'Escape' && showHelp) {
        setShowHelp(false);
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
  }, [handleNext, handlePrev, toggleFullscreen, totalSlides, showHelp]);

  return (
    <>
      <StartupDialog isOpen={showDialog} onClose={handleDialogClose} />
      
      <div 
        className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <SlideContainer direction={slideDirection}>
          {slides[currentSlide]}
        </SlideContainer>

        <Navigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={handleNext}
          onPrev={handlePrev}
          onToggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
          onShowHelp={() => setShowHelp(true)}
        />

        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` } as React.CSSProperties}
          />
        </div>

        {/* Help Overlay */}
        {showHelp && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowHelp(false)}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">⌨️ Keyboard Shortcuts</h3>
                <button
                  onClick={() => setShowHelp(false)}
                  className="text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">→</kbd>
                  <span>Next slide</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">←</kbd>
                  <span>Previous slide</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">Space</kbd>
                  <span>Next slide</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">Home</kbd>
                  <span>First slide</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">End</kbd>
                  <span>Last slide</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">F / F11</kbd>
                  <span>Toggle fullscreen</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">?</kbd>
                  <span>Toggle this help</span>
                </div>
                <div className="flex items-center gap-3">
                  <kbd className="px-3 py-2 bg-gray-100 rounded-lg font-mono text-sm border border-gray-300">Esc</kbd>
                  <span>Close help</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>💡 Tip:</strong> You can also swipe left/right on touch devices to navigate slides.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
