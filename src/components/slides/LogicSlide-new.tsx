export default function LogicSlide() {
  const steps = [
    { num: 1, icon: '⚙️', title: 'Batch Configuration', desc: 'Operator inputs Batch Number, Line ID, Mould count, QR Start/End ranges', color: 'from-cyan-500 to-blue-600' },
    { num: 2, icon: '📱', title: 'QR Scanning', desc: 'GM65 scanner reads 14-char QRs; system validates & auto-routes to bins', color: 'from-purple-500 to-pink-600' },
    { num: 3, icon: '🔍', title: '4-Level Validation', desc: 'Format → Line ID → Batch Range → Duplicate checks ensure only correct units pass', color: 'from-green-500 to-emerald-600' },
    { num: 4, icon: '🎯', title: 'Visual Feedback & Routing', desc: 'GREEN (pass), YELLOW (duplicate), RED (reject) + ACTJ auto-diversion to bins', color: 'from-orange-500 to-red-600' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          🔄 The Core Logic & How The System Works
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Validation Logic Card */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-2xl p-6 mb-6 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">✨</span> Validation Logic Added
          </h3>
          <div className="space-y-3 text-lg">
            <p>✓ <strong>Set QR Start & End Numbers</strong> for each batch (defines valid range)</p>
            <p>✓ <strong>Scanned QR within range?</strong> → PASS | Outside? → REJECT</p>
            <p>✓ <strong>Extract Line ID</strong> from QR (Position 2) → Match with batch line</p>
            <p>✓ <strong>Line mismatch?</strong> → Immediate REJECT (prevents cross-line mix-up)</p>
          </div>
        </div>

        {/* What Stayed Same */}
        <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl p-6 mb-6 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">🔧</span> What Stayed the Same
          </h3>
          <p className="text-lg leading-relaxed">
            <strong>No hardware or firmware changes.</strong> The same ACTJ/CPSR jig and components are reused. 
            A <strong>Python validation layer on Raspberry Pi</strong> validates Line ID, Batch Range, and QR format/duplicates. 
            Jig control remains unchanged.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.num} className={`bg-gradient-to-br ${step.color} rounded-2xl p-6 card-shadow transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="glass-strong rounded-full w-16 h-16 flex items-center justify-center text-3xl font-black text-white flex-shrink-0">
                  {step.num}
                </div>
                <div className="text-5xl">{step.icon}</div>
              </div>
              <h4 className="text-xl font-black text-white mb-3">{step.title}</h4>
              <p className="text-white/90 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* System Overview */}
        <div className="mt-6 glass-strong rounded-2xl p-6 border-2 border-cyan-500/30">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span> Complete System Flow
          </h3>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="glass rounded-xl p-4 mb-2">
                <div className="text-3xl mb-2">📝</div>
                <div className="text-white font-bold">Configure</div>
              </div>
            </div>
            <div className="text-3xl text-cyan-400">→</div>
            <div className="text-center">
              <div className="glass rounded-xl p-4 mb-2">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-white font-bold">Scan</div>
              </div>
            </div>
            <div className="text-3xl text-cyan-400">→</div>
            <div className="text-center">
              <div className="glass rounded-xl p-4 mb-2">
                <div className="text-3xl mb-2">🔍</div>
                <div className="text-white font-bold">Validate</div>
              </div>
            </div>
            <div className="text-3xl text-cyan-400">→</div>
            <div className="text-center">
              <div className="glass rounded-xl p-4 mb-2">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-white font-bold">Route</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
