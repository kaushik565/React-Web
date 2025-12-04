export default function ComparisonSlide() {
  const comparisons = [
    { 
      aspect: '🔍 QR Validation', 
      before: 'CPSR: QR scan + count only (no validation)', 
      after: '4-level validation: Line ID, Batch Range, Format, Duplicate' 
    },
    { 
      aspect: '🎯 Detection', 
      before: 'Visual/manual, errors possible', 
      after: 'Automated validation prevents mix-ups' 
    },
    { 
      aspect: '🔄 Routing', 
      before: 'Manual sorting', 
      after: 'ACTJ auto-diversion' 
    },
    { 
      aspect: '📝 Traceability', 
      before: 'Count data only', 
      after: 'Full validation logs: CSV + SQLite + Flask' 
    },
    { 
      aspect: '⚡ Speed', 
      before: 'Slow, operator-dependent', 
      after: '~3.15 sec per cartridge' 
    },
    { 
      aspect: '📊 Accuracy', 
      before: 'Human error risk', 
      after: '100% validated, zero false rejects' 
    }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-orange-600 via-yellow-600 to-green-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          📊 Before vs After — Transformation Impact
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Split Headers */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="glass-strong rounded-2xl p-6 text-center border-2 border-red-500/30">
            <div className="text-5xl mb-2">❌</div>
            <h3 className="text-2xl font-bold text-red-400">BEFORE</h3>
            <p className="text-gray-400 text-sm mt-1">Manual Process</p>
          </div>
          <div className="glass-strong rounded-2xl p-6 text-center border-2 border-green-500/30 pulse-glow">
            <div className="text-5xl mb-2">✅</div>
            <h3 className="text-2xl font-bold text-green-400">AFTER</h3>
            <p className="text-gray-400 text-sm mt-1">Automated System</p>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-4">
          {comparisons.map((item, idx) => (
            <div key={idx} className="glass rounded-xl overflow-hidden card-shadow">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3">
                <h4 className="text-white font-bold text-lg">{item.aspect}</h4>
              </div>
              <div className="grid grid-cols-2 gap-px bg-gray-700">
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-red-400">❌</div>
                    <p className="text-gray-300 flex-1">{item.before}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-green-400">✅</div>
                    <p className="text-gray-300 flex-1 font-semibold">{item.after}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-6 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl text-center">
          <h3 className="text-3xl font-black mb-4">🚀 The Transformation</h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-sm opacity-90">Accuracy Achieved</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">0</div>
              <div className="text-sm opacity-90">Manual Errors</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">$0</div>
              <div className="text-sm opacity-90">Additional Cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
