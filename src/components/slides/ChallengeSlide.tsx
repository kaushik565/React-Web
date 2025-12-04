export default function ChallengeSlide() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-[clamp(8px,1.5vmin,15px)] pb-[clamp(6px,0.8vmin,10px)] border-b-[3px] border-primary flex-shrink-0">
        <h2 className="text-[clamp(1.1em,2vmin,1.6em)] text-primary font-bold">
          📋 The Challenge & Our Solution
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 text-[clamp(0.75em,1.15vmin,0.95em)] leading-[1.4]">
        <div className="grid grid-cols-2 gap-[clamp(10px,1.5vmin,14px)] mb-[clamp(12px,1.5vmin,16px)]">
          {/* Incidents Card */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-[clamp(12px,1.8vmin,16px)] rounded-xl border border-red-200 shadow-md">
            <div className="text-[clamp(0.92em,1.05vmin,1.05em)] font-bold mb-2 text-red-800">
              📌 Recent Incidents (Sept–Oct 2025)
            </div>
            <ul className="space-y-1 list-none">
              <li className="relative pl-6 before:content-['⚠️'] before:absolute before:left-0">
                IR25/III/QA/063 – Line-C materials stored in Line-A – <strong>Cross-line mix-up</strong>
              </li>
              <li className="relative pl-6 before:content-['⚠️'] before:absolute before:left-0">
                IR25/III/QA/069 – One cartridge found without QR label – <strong>Missing QR label</strong>
              </li>
              <li className="relative pl-6 before:content-['⚠️'] before:absolute before:left-0">
                IR25/III/QA/068 – Cross-batch mixing; S13 with S14 QR – <strong>Wrong batch</strong> & <strong>Wrong mould</strong>
              </li>
              <li className="relative pl-6 before:content-['⚠️'] before:absolute before:left-0">
                IR25/III/QC/071 – 13/200 units from another line in QC – <strong>Wrong batch</strong>
              </li>
              <li className="relative pl-6 before:content-['⚠️'] before:absolute before:left-0">
                IR25/III/QA/072 – QR labels re-pasted; mould mismatch – <strong>QR label tampering</strong> & <strong>Wrong mould</strong>
              </li>
              <li className="relative pl-6 before:content-['⚠️'] before:absolute before:left-0">
                IR25/III/QA/074 – MVANC00051 with N13 QR on N11 – <strong>Wrong mould</strong>
              </li>
            </ul>
          </div>

          {/* Root Cause Card */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-[clamp(12px,1.8vmin,16px)] rounded-xl border border-orange-200 shadow-md">
            <div className="text-[clamp(0.92em,1.05vmin,1.05em)] font-bold mb-2 text-orange-800">
              ⚠️ Root Cause
            </div>
            <ul className="space-y-1 list-none">
              <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-600">
                <strong>CPSR today:</strong> Scans and counts QR codes; does not validate Line ID, Batch, or QR range.
              </li>
              <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-600">
                <strong>Manual checks:</strong> Inconsistent for wrong batch, cross-line mix-ups, or tampered labels.
              </li>
              <li className="relative pl-5 before:content-['▸'] before:absolute before:left-0 before:text-orange-600">
                Result: Rework, delays, and traceability gaps.
              </li>
            </ul>
            <div className="mt-3 bg-orange-200/40 rounded-lg p-[clamp(8px,1.2vmin,12px)] text-[clamp(0.84em,0.95vmin,0.95em)] font-semibold">
              Common patterns: <strong>wrong batch</strong>, <strong>wrong mould</strong>, <strong>cross-line mix-up</strong> & <strong>QR tampering</strong> → Manual verification alone is not reliable.
            </div>
          </div>
        </div>

        {/* Solution Box */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-[clamp(12px,1.8vmin,16px)] rounded-xl mb-[clamp(12px,1.5vmin,16px)]">
          <div className="text-[clamp(0.92em,1.05vmin,1.05em)] font-bold mb-2">💡 The Solution</div>
          <p className="mb-2">
            <strong>By implementing this QR Scanning JIG in our production line, we can eliminate batch mix-ups and automatically detect cartridges mixed in wrong batches.</strong>
          </p>
          <p className="text-[clamp(0.84em,0.95vmin,0.92em)]">
            We used the existing <strong>ACTJ Jig</strong> for automated detection – it scans QR codes, validates Line ID, Batch range, and format in real-time, then automatically routes cartridges to PASS or REJECT bins. No manual intervention; zero human error.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-[clamp(10px,1.5vmin,14px)]">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
            <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 flex items-center gap-2">
              <span>🎯</span> Our Solution
            </h3>
            <p className="text-[clamp(0.84em,0.95vmin,0.92em)] leading-relaxed">
              <strong>Automated QR Scanning Jig</strong><br />
              Our New Python Software + CPSR integration<br />
              Real-time QR validation detects Batch Mix-Up.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
            <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 flex items-center gap-2">
              <span>💎</span> Quality Impact
            </h3>
            <p className="text-[clamp(0.84em,0.95vmin,0.92em)] leading-relaxed">
              Prevents batch/line mix-ups; reduces rework; full traceability<br />
              <strong>Zero additional cost – uses existing infra</strong>
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
            <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 flex items-center gap-2">
              <span>⚙️</span> Technology Stack
            </h3>
            <p className="text-[clamp(0.84em,0.95vmin,0.92em)] leading-relaxed">
              Raspberry Pi 3B+; GM65 QR Scanner; Tkinter UI; SQLite + Flask dashboard
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
            <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 flex items-center gap-2">
              <span>✅</span> Proven Results
            </h3>
            <p className="text-[clamp(0.84em,0.95vmin,0.92em)] leading-relaxed">
              300 cartridges tested<br />
              100% accuracy; zero false rejects<br />
              1 min 03 sec per 20 cartridges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
