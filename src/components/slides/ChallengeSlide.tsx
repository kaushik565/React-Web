export default function ChallengeSlide() {
  const incidents = [
    { id: 'IR25/III/QA/063', issue: 'Line-C materials stored in Line-A', type: 'Cross-line mix-up', severity: 'critical' },
    { id: 'IR25/III/QA/069', issue: 'Cartridge found without QR label', type: 'Missing QR label', severity: 'high' },
    { id: 'IR25/III/QA/068', issue: 'Cross-batch mixing S13 with S14 QR', type: 'Wrong batch & mould', severity: 'critical' },
    { id: 'IR25/III/QC/071', issue: '13/200 units from another line in QC', type: 'Wrong batch', severity: 'high' },
    { id: 'IR25/III/QA/072', issue: 'QR labels re-pasted; mould mismatch', type: 'QR tampering & mould', severity: 'critical' },
    { id: 'IR25/III/QA/074', issue: 'MVANC00051 with N13 QR on N11', type: 'Wrong mould', severity: 'high' }
  ];

  const features = [
    { icon: '🎯', title: 'Our Solution', desc: 'Automated QR Scanning Jig\nPython + CPSR integration\nReal-time validation' },
    { icon: '💎', title: 'Quality Impact', desc: 'Prevents batch/line mix-ups\nReduces rework\nZero additional cost' },
    { icon: '⚙️', title: 'Technology', desc: 'Raspberry Pi 3B+\nGM65 QR Scanner\nTkinter UI + Flask' },
    { icon: '✅', title: 'Proven Results', desc: '300 cartridges tested\n100% accuracy\n1:03 per 20 units' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          📋 The Challenge & Our Solution
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Problem Statement */}
        <div className="glass-strong rounded-2xl p-6 mb-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4">
            <div className="text-5xl">🚨</div>
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">The Problem</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                <strong>6 critical incidents in 2 months</strong> (Sept–Oct 2025) involving batch mix-ups, 
                cross-line contamination, QR tampering, and mould mismatches — all preventable with automated validation.
              </p>
            </div>
          </div>
        </div>

        {/* Incidents Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {incidents.map((incident, idx) => (
            <div key={idx} className={`glass rounded-xl p-4 border-l-4 ${incident.severity === 'critical' ? 'border-red-500' : 'border-orange-500'} hover:bg-white/10 transition-all`}>
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚠️</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-cyan-400 mb-1">{incident.id}</div>
                  <p className="text-white text-sm mb-2">{incident.issue}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    incident.severity === 'critical' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {incident.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Root Cause */}
        <div className="glass rounded-2xl p-6 mb-6 border-2 border-orange-500/30">
          <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span> Root Cause Analysis
          </h3>
          <div className="space-y-2 text-gray-300">
            <p>• <strong>CPSR Limitation:</strong> Only scans and counts — no Line ID, Batch, or range validation</p>
            <p>• <strong>Manual Checks:</strong> Inconsistent and error-prone for detecting mix-ups or tampering</p>
            <p>• <strong>Result:</strong> Rework delays, traceability gaps, and quality risks</p>
          </div>
        </div>

        {/* Solution Banner */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-6 mb-6 text-white shadow-2xl">
          <h3 className="text-2xl font-black mb-3 flex items-center gap-2">
            <span className="text-3xl">✨</span> The Solution
          </h3>
          <p className="text-lg leading-relaxed">
            <strong>Automated QR Scanning Jig</strong> using existing ACTJ infrastructure — validates Line ID, Batch range, 
            and format in real-time, auto-routing cartridges to PASS/REJECT bins with zero human intervention.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-strong rounded-xl p-5 text-center transform hover:scale-105 transition-all duration-300 card-shadow">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
