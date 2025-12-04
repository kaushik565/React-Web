interface StartupDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartupDialog({ isOpen, onClose }: StartupDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b-2 border-primary bg-gradient-to-r from-purple-50 to-blue-50">
          <h3 className="text-[clamp(1.2em,1.35vw,1.6em)] text-primary font-bold flex items-center gap-2">
            <span>👋</span> Welcome to ACTJ Presentation
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none transition-colors hover:rotate-90 duration-300"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="p-6 text-gray-700 text-[clamp(0.92em,1vw,1.1em)] space-y-4">
          <p className="leading-relaxed">
            This interactive presentation showcases the <strong>Automatic Cartridge Testing JIG</strong> — 
            a Champions 2.0 initiative for 100% verified accuracy.
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200">
            <p className="text-primary font-semibold flex items-center gap-2">
              <span>💡</span> Quick Tips:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 ml-6">
              <li>• Use arrow keys or swipe to navigate</li>
              <li>• Press <kbd className="px-2 py-1 bg-white rounded border text-xs">?</kbd> for keyboard shortcuts</li>
              <li>• Click fullscreen for best experience</li>
            </ul>
          </div>
          
          <p className="text-right text-sm text-gray-500 mt-4 italic">
            Regards,<br />
            <span className="font-semibold text-gray-700">Kaushik</span>
          </p>
        </div>

        <div className="p-6 pt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 text-[clamp(0.92em,1vw,1.1em)] flex items-center gap-2"
          >
            <span>🚀</span> Let&apos;s Begin!
          </button>
        </div>
      </div>
    </div>
  );
}
