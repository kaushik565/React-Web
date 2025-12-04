interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onShowHelp: () => void;
}

export default function Navigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen,
  onShowHelp,
}: NavigationProps) {
  return (
    <>
      {/* Fullscreen Button */}
      <button
        onClick={onToggleFullscreen}
        className="fixed top-8 left-8 z-50 bg-white/95 backdrop-blur-sm text-primary px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-[clamp(0.88em,0.95vw,1.05em)] flex items-center gap-2 group"
        title={isFullscreen ? 'Exit Fullscreen (F11)' : 'Enter Fullscreen (F11)'}
        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      >
        <span className="text-xl">{isFullscreen ? '↙' : '⛶'}</span>
        <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
      </button>

      {/* Help Button */}
      <button
        onClick={onShowHelp}
        className="fixed top-8 left-[11rem] z-50 bg-white/95 backdrop-blur-sm text-primary px-4 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-[clamp(0.88em,0.95vw,1.05em)] flex items-center gap-2"
        title="Keyboard Shortcuts (?)"
        aria-label="Show keyboard shortcuts"
      >
        <span className="text-xl">⌨️</span>
        <span className="hidden sm:inline">Shortcuts</span>
      </button>

      {/* Slide Counter with Progress Percentage */}
      <div className="fixed top-8 right-8 z-50 bg-white/95 backdrop-blur-sm text-primary px-6 py-3 rounded-full font-semibold shadow-lg text-[clamp(0.9em,0.98vw,1.08em)] flex items-center gap-2">
        <span className="text-sm text-gray-500">Slide</span>
        <span className="font-bold">{currentSlide + 1}</span>
        <span className="text-gray-400">/</span>
        <span>{totalSlides}</span>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-5">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="px-8 py-4 bg-white/95 backdrop-blur-sm text-primary rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-[clamp(0.9em,0.98vw,1.08em)] flex items-center gap-2"
          aria-label="Previous slide"
        >
          <span>←</span>
          <span className="hidden sm:inline">Previous</span>
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="px-8 py-4 bg-white/95 backdrop-blur-sm text-primary rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-[clamp(0.9em,0.98vw,1.08em)] flex items-center gap-2"
          aria-label="Next slide"
        >
          <span className="hidden sm:inline">Next</span>
          <span>→</span>
        </button>
      </div>
    </>
  );
}
