interface SlideContainerProps {
  children: React.ReactNode;
}

export default function SlideContainer({ children }: SlideContainerProps) {
  return (
    <div className="w-full max-w-[1200px] h-[85vh] bg-white rounded-2xl shadow-2xl p-[clamp(15px,2vmin,30px)] overflow-hidden flex flex-col animate-slide-in">
      {children}
    </div>
  );
}
