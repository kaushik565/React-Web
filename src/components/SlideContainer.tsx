interface SlideContainerProps {
  children: React.ReactNode;
  direction?: 'forward' | 'backward';
}

export default function SlideContainer({ children, direction = 'forward' }: SlideContainerProps) {
  const animationClass = direction === 'forward' ? 'animate-slide-in' : 'animate-slide-in-back';
  
  return (
    <div className={`w-full max-w-[1200px] h-[85vh] bg-white rounded-2xl shadow-2xl p-[clamp(15px,2vmin,30px)] overflow-hidden flex flex-col ${animationClass}`}>
      {children}
    </div>
  );
}
