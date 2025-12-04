export default function ValidationSlide() {
  const validationSteps = [
    {
      n: 1,
      icon: '📝',
      title: 'Format Validation',
      checks: ['QR must be exactly 14 alphanumeric characters', 'No special characters or spaces allowed'],
      result: 'RED light if format invalid',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      n: 2,
      icon: '🔤',
      title: 'Line ID Validation',
      checks: ['Extract character at Position 2 (A-Z)', 'Must match configured Batch Line'],
      example: 'VAN142536A0001 → Line = A | If batch is Line B → REJECT',
      result: 'RED light + reject bin if Line mismatch',
      color: 'from-purple-500 to-pink-600'
    },
    {
      n: 3,
      icon: '📊',
      title: 'Batch Range Validation',
      checks: ['Operator sets QR Start & End Numbers', 'Scanned QR must fall within this range'],
      example: 'Range: VAN142536A0001 to VAN142536A9999',
      result: 'RED light + reject bin if out of range',
      color: 'from-green-500 to-emerald-600'
    },
    {
      n: 4,
      icon: '🔄',
      title: 'Duplicate Detection',
      checks: ['QR not previously scanned in current session', 'Prevents re-scanning same cartridge'],
      result: 'YELLOW light if duplicate, GREEN if all pass',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          🔍 4-Level Validation Process
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Progress Tracker */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {validationSteps.map((step, idx) => (
            <div key={step.n} className="flex items-center gap-4">
              <div className="text-center">
                <div className={`glass-strong rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black mb-2 border-2 ${
                  idx === 0 ? 'border-blue-500' : idx === 1 ? 'border-purple-500' : idx === 2 ? 'border-green-500' : 'border-orange-500'
                } pulse-glow`}>
                  {step.n}
                </div>
                <div className="text-xs text-gray-400">Level {step.n}</div>
              </div>
              {idx < validationSteps.length - 1 && (
                <div className="text-cyan-500 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Validation Steps */}
        <div className="grid grid-cols-2 gap-4">
          {validationSteps.map((step) => (
            <div
              key={step.n}
              className={`bg-gradient-to-br ${step.color} rounded-2xl p-6 card-shadow transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="glass-strong rounded-full w-14 h-14 flex items-center justify-center text-2xl font-black text-white flex-shrink-0">
                  {step.n}
                </div>
                <div className="text-4xl">{step.icon}</div>
              </div>
              
              <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
              
              <div className="space-y-2 text-white/90 text-sm mb-3">
                {step.checks.map((check, idx) => (
                  <p key={idx}>• {check}</p>
                ))}
              </div>

              {step.example && (
                <div className="bg-white/10 rounded-lg p-3 mb-3 font-mono text-xs text-white">
                  <strong>Example:</strong> {step.example}
                </div>
              )}

              <div className="bg-white/20 rounded-lg p-3 font-bold text-white text-sm border-l-4 border-white/40">
                ⚡ {step.result}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl text-center">
          <h3 className="text-2xl font-black mb-3 flex items-center justify-center gap-2">
            <span className="text-3xl">✅</span> Comprehensive Protection
          </h3>
          <p className="text-lg leading-relaxed">
            This 4-level validation system ensures <strong>100% accuracy</strong> by catching format errors, 
            cross-line mix-ups, out-of-range batches, and duplicate scans — providing complete protection 
            against all types of quality incidents.
          </p>
        </div>
      </div>
    </div>
  );
}
