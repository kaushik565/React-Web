export default function ConsequencesSlide() {
  const risks = [
    { icon: '⚠️', risk: 'Mix-up undetected', impact: 'Line rejection, production delays, batch rework', severity: 'critical' },
    { icon: '😓', risk: 'Manual fatigue', impact: 'Higher human errors, inconsistent verification', severity: 'high' },
    { icon: '📝', risk: 'Missing traceability', impact: 'Documentation gaps, investigation delays', severity: 'medium' }
  ];

  const benefits = [
    { label: 'Cost Avoidance', value: '6 incidents', desc: 'Prevented in 2 months', icon: '💰', color: 'from-green-500 to-emerald-600' },
    { label: 'Time Savings', value: '2-3 hrs', desc: 'Per incident avoided', icon: '⏱️', color: 'from-cyan-500 to-blue-600' },
    { label: 'Zero Investment', value: '$0', desc: 'Used existing infrastructure', icon: '💎', color: 'from-purple-500 to-pink-600' },
    { label: 'ROI', value: 'Immediate', desc: 'Cost avoidance from day one', icon: '📈', color: 'from-orange-500 to-red-600' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ⚠️ If This Jig Was Not Implemented...
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Risk Analysis Table */}
        <div className="glass-strong rounded-2xl p-6 mb-6 border-2 border-red-500/30">
          <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
            <span className="text-3xl">🚨</span> Risk & Impact Analysis
          </h3>
          <div className="space-y-3">
            {risks.map((risk, idx) => (
              <div key={idx} className={`glass rounded-xl p-4 border-l-4 ${
                risk.severity === 'critical' ? 'border-red-500' : risk.severity === 'high' ? 'border-orange-500' : 'border-yellow-500'
              } hover:bg-white/10 transition-all`}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{risk.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white">{risk.risk}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        risk.severity === 'critical' ? 'bg-red-500/20 text-red-400' : 
                        risk.severity === 'high' ? 'bg-orange-500/20 text-orange-400' : 
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {risk.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-400">{risk.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Metrics Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-6 text-center card-shadow transform hover:scale-105 transition-all duration-300`}>
              <div className="text-5xl mb-3">{benefit.icon}</div>
              <div className="text-4xl font-black text-white mb-2">{benefit.value}</div>
              <div className="text-sm font-bold text-white/90 mb-1">{benefit.label}</div>
              <div className="text-xs text-white/70">{benefit.desc}</div>
            </div>
          ))}
        </div>

        {/* Bottom Line Message */}
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-strong rounded-2xl p-6 border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">💸</span> Without This Solution
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 6 incidents in 2 months = ongoing risk</li>
              <li>• Average 2-3 hours delay per incident</li>
              <li>• Rework + QA investigation costs</li>
              <li>• Material waste + rejected cartridges</li>
              <li>• Continuous vulnerability to mix-ups</li>
            </ul>
          </div>

          <div className="glass-strong rounded-2xl p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">💎</span> With This Solution
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Zero additional investment required</li>
              <li>• Used existing ACTJ/CPSR infrastructure</li>
              <li>• Raspberry Pi & scanner from maintenance</li>
              <li>• 100% in-house development</li>
              <li>• <strong className="text-green-400">Immediate cost avoidance</strong></li>
            </ul>
          </div>
        </div>

        {/* Final Impact Statement */}
        <div className="mt-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-black mb-3">🎯 Bottom Line</h3>
          <p className="text-xl leading-relaxed">
            Without this jig, we remain <strong>vulnerable to mix-ups and operational inefficiencies</strong> 
            that threaten quality, productivity, and regulatory compliance.
          </p>
        </div>
      </div>
    </div>
  );
}
