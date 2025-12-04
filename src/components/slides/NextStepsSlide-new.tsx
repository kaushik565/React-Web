export default function NextStepsSlide() {
  const testResults = [
    { metric: 'Testing Complete', value: '300 cartridges tested', icon: '✅', color: 'from-green-500 to-emerald-600' },
    { metric: 'Detection Accuracy', value: '100% detection accuracy', icon: '🎯', color: 'from-blue-500 to-cyan-600' },
    { metric: 'False Rejections', value: 'Zero false rejections', icon: '💯', color: 'from-purple-500 to-indigo-600' },
    { metric: 'Performance Tested', value: '1 min 03 sec per 20 units', icon: '⚡', color: 'from-orange-500 to-amber-600' }
  ];

  const impacts = [
    { label: 'Quality Impact', detail: 'Eliminates batch mix-up risk', icon: '🛡️' },
    { label: 'Traceability', detail: 'Full traceability', icon: '📊' },
    { label: 'Documentation', detail: 'Complete audit documentation', icon: '📝' },
    { label: 'Next Phase', detail: 'If valuable, implement for production with BigTec\'s integration support', icon: '🚀' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ✅ Testing Complete — Concept Proven
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Test Results Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {testResults.map((result, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${result.color} rounded-2xl p-6 text-white card-shadow transform hover:scale-[1.02] transition-all duration-300`}>
              <div className="text-5xl mb-3">{result.icon}</div>
              <h3 className="text-xl font-bold mb-2">{result.metric}</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="font-bold text-lg">{result.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="glass-strong rounded-2xl p-6 mb-6">
          <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-2">
            <span className="text-3xl">📈</span> Quality & Process Impact
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {impacts.map((impact, idx) => (
              <div key={idx} className="glass rounded-xl p-5 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{impact.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-cyan-400 font-bold mb-1">{impact.label}</h4>
                    <p className="text-gray-300">{impact.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps Banner */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl pulse-glow">
          <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
            <span className="text-4xl">🚀</span> Next Steps — Concept Validation Complete
          </h3>
          <div className="glass-strong rounded-xl p-6">
            <p className="text-xl leading-relaxed mb-6">
              Prototype successfully tested with proven performance. If this concept is valuable for production lines, it can be implemented and scaled with BigTec&apos;s support for system integration and deployment.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">✓</div>
                <div className="text-sm">Prototype Validated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">✓</div>
                <div className="text-sm">Performance Proven</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">→</div>
                <div className="text-sm">Ready for Scale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
