export default function TitleSlide() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-[clamp(8px,1.5vmin,15px)] pb-[clamp(6px,0.8vmin,10px)] border-b-[3px] border-primary flex-shrink-0">
        <h1 className="text-[clamp(1.4em,2.8vmin,2.2em)] text-gray-800 mb-2 uppercase tracking-wide font-bold">
          Automatic QR Scanning JIG
        </h1>
        <p className="text-[clamp(0.8em,1.2vmin,1em)] text-gray-600">
          Cartridge Testing Automation & Batch Mix-up Prevention
        </p>
      </div>

      <div className="flex-1 overflow-auto pr-3 text-[clamp(0.75em,1.15vmin,0.95em)] text-gray-700 leading-[1.4]">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6 border border-purple-200">
          <h3 className="text-primary text-[clamp(1.05em,1.4vmin,1.3em)] font-bold mb-3 flex items-center gap-2">
            <span>🎯</span> Project Objective
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Develop an <strong>Automatic QR Scanning JIG</strong> that validates batch and line codes before cartridge insertion, 
            eliminates batch and line mix-ups — delivering <strong>100% verified accuracy</strong>.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
            <div className="text-[clamp(1.8em,2.5vmin,2.4em)] font-bold text-primary mb-2">300+</div>
            <div className="text-gray-600 font-semibold">Cartridges Tested</div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
            <div className="text-[clamp(1.8em,2.5vmin,2.4em)] font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600 font-semibold">Detection Accuracy</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-5 rounded-xl text-center shadow-lg">
          <h3 className="text-[clamp(1.1em,1.6vmin,1.5em)] font-bold mb-2">🏆 Project Impact</h3>
          <p className="leading-relaxed">
            A Champions 2.0 initiative that automates cartridge validation, 
            eliminates batch and line mix-ups — delivering 100% verified accuracy.
          </p>
        </div>

        <div className="mt-6 text-right text-gray-500 text-sm">
          <p><strong>Presented by:</strong> G.Kaushik</p>
          <p><strong>Department:</strong> Production Engineering | Quality Assurance</p>
        </div>
      </div>
    </div>
  );
}
