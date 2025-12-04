export default function BenefitsSlide() {
  const benefits = [
    { 
      title: '💯 Zero Mix-Ups', 
      desc: '4-level validation ensures mix-ups impossible, cartridges never go to wrong batch', 
      highlight: '100% Accurate',
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      span: 'col-span-2 row-span-2'
    },
    { 
      title: '💰 No Investment', 
      desc: 'Uses existing jig + cheap Raspberry Pi, no capital expenditure required', 
      highlight: '$0 CAPEX',
      gradient: 'from-blue-500 via-cyan-600 to-sky-600',
      span: 'col-span-1'
    },
    { 
      title: '📊 Full Traceability', 
      desc: 'CSV + SQLite + Flask web dashboard provides complete validation audit trail', 
      highlight: 'Web Access',
      gradient: 'from-purple-500 via-indigo-600 to-violet-600',
      span: 'col-span-1'
    },
    { 
      title: '⚡ Fast & Efficient', 
      desc: 'Avg 3.15 sec per cartridge (63 sec for 20 pieces)', 
      highlight: '300 Tested',
      gradient: 'from-orange-500 via-amber-600 to-yellow-600',
      span: 'col-span-1'
    },
    { 
      title: '🔄 Zero Disruption', 
      desc: 'No changes to existing ACTJ/CPSR firmware or hardware', 
      highlight: 'Plug & Play',
      gradient: 'from-pink-500 via-rose-600 to-red-600',
      span: 'col-span-1'
    },
    { 
      title: '📋 QMS Traceability', 
      desc: 'Complete audit trail with timestamps, batch IDs, line IDs, and operator validation logs for regulatory compliance', 
      highlight: 'FDA Ready',
      gradient: 'from-indigo-500 via-blue-600 to-cyan-600',
      span: 'col-span-2'
    }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ✨ Key Benefits & Value Proposition
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`${benefit.span} bg-gradient-to-br ${benefit.gradient} rounded-2xl p-6 card-shadow transform hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-white font-black text-2xl mb-3">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed mb-4">{benefit.desc}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block self-start">
                <span className="text-white font-bold text-lg">{benefit.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Summary */}
        <div className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-2xl">
          <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
            <span className="text-4xl">📈</span> Return on Investment
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">∞%</div>
              <div className="text-sm opacity-90">ROI (Zero Investment)</div>
            </div>
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">100%</div>
              <div className="text-sm opacity-90">Accuracy Gain</div>
            </div>
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">$0</div>
              <div className="text-sm opacity-90">CAPEX Required</div>
            </div>
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">0</div>
              <div className="text-sm opacity-90">Downtime Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
