export default function FinalSlide() {
  const achievements = [
    { text: 'Addressed a repeating quality issue with automated prevention', icon: '✅' },
    { text: 'Zero additional cost; verified accuracy in testing', icon: '💰' },
    { text: 'Full traceability for audits', icon: '📊' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 space-y-6">
        {/* Thank You Header */}
        <div className="text-center mb-8">
          <h2 className="text-[clamp(2.5rem,8vmin,4rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 drop-shadow-2xl animate-pulse">
            🙏 Thank You!
          </h2>
        </div>

        {/* Final Message - Hero */}
        <div className="glass-strong rounded-3xl p-10 mb-6 border-4 border-purple-500/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
              <span className="text-4xl">💡</span> Final Message
            </h3>
            <p className="text-2xl font-bold leading-relaxed text-center">
              Built-in prevention, compliance, and traceability — embedded in the process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* What We Achieved */}
          <div className="glass-strong rounded-2xl p-8 card-shadow transform hover:scale-[1.02] transition-all duration-300">
            <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 rounded-xl p-6 text-white h-full">
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                <span className="text-3xl">🎯</span> What We Achieved
              </h3>
              <div className="space-y-3 mb-4">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <p className="flex-1 text-lg">{achievement.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-center">
                <p className="text-xl font-black">🏆 Champions 2.0 in action.</p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="glass-strong rounded-2xl p-8 card-shadow transform hover:scale-[1.02] transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-xl p-6 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <span className="text-3xl">👤</span> Regards
              </h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 space-y-3">
                <p className="text-3xl font-black">P. Lakshmana Sai Kaushik</p>
                <p className="text-xl font-bold opacity-95">QA Supervisor</p>
                <p className="text-lg opacity-90">Molbio Diagnostics Limited - SITE III</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center glass rounded-2xl p-6 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20">
          <p className="text-2xl font-bold text-white">
            <span className="text-green-400">✓</span> Prototype Validated 
            <span className="mx-3 text-cyan-400">•</span> 
            <span className="text-green-400">✓</span> Performance Proven 
            <span className="mx-3 text-cyan-400">•</span> 
            <span className="text-green-400">✓</span> Ready for Production
          </p>
        </div>
      </div>
    </div>
  );
}
