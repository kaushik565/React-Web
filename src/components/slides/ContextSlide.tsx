export default function ContextSlide() {
  const problems = [
    { icon: '🔍', title: 'Manual Inspection', desc: 'Human error prone, inconsistent validation' },
    { icon: '⚠️', title: 'No Cross-Line Check', desc: 'Critical mix-up risk between batches' },
    { icon: '📊', title: 'No Range Validation', desc: 'Out-of-batch cartridges slip through' },
    { icon: '🔄', title: 'No Duplicate Detection', desc: 'Data integrity compromised' }
  ];

  const solutions = [
    { icon: '🤖', title: 'Automated QR Scanning', desc: '100% consistent, real-time validation', color: 'from-cyan-500 to-blue-600' },
    { icon: '✅', title: 'Line ID Verification', desc: 'Instant cross-line protection', color: 'from-green-500 to-emerald-600' },
    { icon: '📈', title: 'Batch Range Check', desc: 'Automatic boundary enforcement', color: 'from-purple-500 to-pink-600' },
    { icon: '🛡️', title: 'Duplicate Prevention', desc: 'Complete traceability & tracking', color: 'from-indigo-500 to-purple-600' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-green-900/10 pointer-events-none"></div>
      
      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ⚡ The Transformation Journey
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        <div className="grid grid-cols-2 gap-8 h-full relative">
          {/* BEFORE - Problems */}
          <div className="space-y-4">
            <div className="glass-strong rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">❌</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">BEFORE</h3>
              <p className="text-gray-400 text-sm">Manual & Error-Prone</p>
            </div>

            {problems.map((problem, idx) => (
              <div key={idx} className="glass rounded-xl p-5 border-l-4 border-red-500 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{problem.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{problem.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AFTER - Solutions */}
          <div className="space-y-4">
            <div className="glass-strong rounded-2xl p-6 text-center pulse-glow">
              <div className="text-4xl mb-2">✨</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">AFTER</h3>
              <p className="text-gray-400 text-sm">Automated & Intelligent</p>
            </div>

            {solutions.map((solution, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${solution.color} rounded-xl p-5 border-2 border-white/20 shadow-xl transform hover:scale-[1.02] transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{solution.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{solution.title}</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{solution.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center divider with arrow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="glass-strong rounded-full p-4 text-4xl animate-pulse">
              ➜
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
