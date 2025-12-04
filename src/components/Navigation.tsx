interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}

export default function Navigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onToggleFullscreen,
  isFullscreen,
}: NavigationProps) {
  return (
    <>
      {/* Fullscreen Button */}
      <button
        onClick={onToggleFullscreen}
        className="fixed top-8 left-8 z-50 bg-white text-primary px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-[clamp(0.88em,0.95vw,1.05em)] flex items-center gap-2"
        title={isFullscreen ? 'Exit Fullscreen (F11)' : 'Enter Fullscreen (F11)'}
      >
        <span className="text-xl">{isFullscreen ? '↙' : '⛶'}</span>
        <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
      </button>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg text-[clamp(0.9em,0.98vw,1.08em)]">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-5">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="px-8 py-4 bg-white text-primary rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed text-[clamp(0.9em,0.98vw,1.08em)]"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="px-8 py-4 bg-white text-primary rounded-full font-semibold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed text-[clamp(0.9em,0.98vw,1.08em)]"
        >
          Next →
        </button>
      </div>
    </>
  );
}
