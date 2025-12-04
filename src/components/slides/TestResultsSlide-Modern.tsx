export default function TestResultsSlide() {
  const metrics = [
    { label: 'Test Cycles', value: '15', unit: 'runs', icon: '🔄', color: 'from-cyan-500 to-blue-600' },
    { label: 'Cartridges Tested', value: '300', unit: 'units', icon: '📦', color: 'from-purple-500 to-pink-600' },
    { label: 'Accuracy Rate', value: '100', unit: '%', icon: '✅', color: 'from-green-500 to-emerald-600' },
    { label: 'Avg Cycle Time', value: '63', unit: 'sec', icon: '⚡', color: 'from-orange-500 to-red-600' }
  ];

  const performance = [
    { label: 'Per-Unit Processing', value: '~3.15 seconds', desc: 'Faster than manual verification', icon: '⏱️' },
    { label: 'Detection Accuracy', value: '100% Validated', desc: 'Zero missed errors in testing', icon: '🎯' },
    { label: 'False Rejections', value: '0', desc: 'Perfect precision achieved', icon: '✨' },
    { label: 'Cost Avoidance', value: 'Significant', desc: 'Reduces rework & waste', icon: '💰' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          📊 Test Results & Performance Metrics
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* KPI Cards Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className={`glass-strong rounded-2xl p-6 text-center card-shadow transform hover:scale-105 transition-all duration-300 pulse-glow`}>
              <div className="text-5xl mb-3">{metric.icon}</div>
              <div className={`text-5xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm font-semibold">{metric.unit}</div>
              <div className="text-white text-sm mt-2 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Performance Cards */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {performance.map((item, idx) => (
            <div key={idx} className="glass rounded-xl p-6 border-l-4 border-cyan-500 hover:border-green-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-400 mb-1">{item.label}</h4>
                  <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="glass-strong rounded-2xl p-8 text-center border-2 border-green-500/30">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl">🏆</div>
            <div className="text-left">
              <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
                Testing Complete — Concept Proven
              </h3>
              <p className="text-gray-400 mt-2">
                All validation layers operational with perfect accuracy
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">300</div>
              <div className="text-sm text-gray-500">Units Validated</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">0</div>
              <div className="text-sm text-gray-500">Errors Missed</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
