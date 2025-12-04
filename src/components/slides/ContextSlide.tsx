export default function ContextSlide() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-[clamp(8px,1.5vmin,15px)] pb-[clamp(6px,0.8vmin,10px)] border-b-[3px] border-primary flex-shrink-0">
        <h2 className="text-[clamp(1.1em,2vmin,1.6em)] text-primary font-bold">
           Project Context
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 text-[clamp(0.75em,1.15vmin,0.95em)] leading-[1.4]">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-[clamp(14px,2vmin,18px)] rounded-xl border border-blue-200 shadow-md mb-[clamp(12px,1.5vmin,16px)]">
          <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-3 text-blue-800"> Current Storage Setup</h3>
          <div className="grid grid-cols-2 gap-[clamp(10px,1.5vmin,14px)] text-[clamp(0.8em,0.95vmin,0.9em)]">
            <div className="bg-white/60 p-3 rounded-lg">
              <div className="font-bold text-blue-700 mb-1"> Line-A (MVANC00051)</div>
              <div>Batch S11, S12, S13 stored together in designated area</div>
            </div>
            <div className="bg-white/60 p-3 rounded-lg">
              <div className="font-bold text-blue-700 mb-1"> Line-B (MVANC00051)</div>
              <div>Batch N11, N12, N13 stored in separate zone</div>
            </div>
            <div className="bg-white/60 p-3 rounded-lg">
              <div className="font-bold text-blue-700 mb-1"> Line-C (Different Product)</div>
              <div>Completely different product line & storage</div>
            </div>
            <div className="bg-white/60 p-3 rounded-lg">
              <div className="font-bold text-red-700 mb-1"> Risk Zone</div>
              <div>Adjacent storage  easy to pick wrong batch/line</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-[clamp(14px,2vmin,18px)] rounded-xl border border-yellow-200 shadow-md mb-[clamp(12px,1.5vmin,16px)]">
          <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 text-yellow-800"> Why This Matters</h3>
          <ul className="space-y-1 text-[clamp(0.8em,0.95vmin,0.9em)] list-none">
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:text-yellow-600">
              Each Line uses <strong>20 cartridges per filling operation</strong>
            </li>
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:text-yellow-600">
              Operators manually pick cartridges from storage shelves
            </li>
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:text-yellow-600">
              All cartridges look identical; only QR code differs
            </li>
            <li className="relative pl-5 before:content-[''] before:absolute before:left-0 before:text-yellow-600">
              One wrong cartridge = entire batch at risk
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
          <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2"> The Insight</h3>
          <p className="text-[clamp(0.84em,0.95vmin,0.92em)] leading-relaxed">
            <strong>Manual QR checking is unreliable.</strong> Even experienced operators can miss a wrong cartridge among 20 identical-looking units. We needed an <strong>automated, foolproof validation step</strong> before filling starts — that''s why we built this JIG.
          </p>
        </div>
      </div>
    </div>
  );
}
