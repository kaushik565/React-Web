interface StartupDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartupDialog({ isOpen, onClose }: StartupDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b-2 border-primary">
          <h3 className="text-[clamp(1.2em,1.35vw,1.6em)] text-primary font-bold">
            Welcome to ACTJ Presentation
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6 text-gray-700 text-[clamp(0.92em,1vw,1.1em)] space-y-4">
          <p>This interactive presentation showcases the Automatic Cartridge Testing JIG.</p>
          <p className="text-red-600 font-semibold">
            💡 For better viewing experience, click on the fullscreen button
          </p>
          <p className="text-right text-sm text-gray-500 mt-4">
            Regards,<br />
            <span className="font-semibold">Kaushik</span>
          </p>
        </div>

        <div className="p-6 pt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-[clamp(0.92em,1vw,1.1em)]"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
