export default function TitleSlide() {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-8">
        {/* Main Title with Glassmorphism */}
        <div className="glass-strong rounded-3xl p-12 max-w-5xl w-full text-center card-shadow transform hover:scale-[1.02] transition-all duration-500">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 Innovation Project 2025
          </div>
          
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent gradient-animate">
              Batch Mix-Up Detection Jig
            </span>
          </h1>
          
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mb-6"></div>
          
          <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-gray-300 mb-8 font-light">
            Intelligent QR-Based Validation System for<br/>
            <span className="text-cyan-400 font-semibold">Pharmaceutical Quality Assurance</span>
          </p>

          {/* Author Info Cards */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="glass rounded-2xl px-8 py-4 hover:bg-white/10 transition-all">
              <div className="text-sm text-gray-400 mb-1">Presented by</div>
              <div className="text-xl font-bold text-white">P. Lakshmana Sai Kaushik</div>
              <div className="text-sm text-cyan-400 mt-1">QA Supervisor</div>
            </div>
            
            <div className="glass rounded-2xl px-8 py-4 hover:bg-white/10 transition-all">
              <div className="text-sm text-gray-400 mb-1">Organization</div>
              <div className="text-xl font-bold text-white">Molbio Diagnostics Pvt Ltd</div>
              <div className="text-sm text-purple-400 mt-1">Manufacturing Excellence</div>
            </div>
            
            <div className="glass rounded-2xl px-8 py-4 hover:bg-white/10 transition-all">
              <div className="text-sm text-gray-400 mb-1">Timeline</div>
              <div className="text-xl font-bold text-white">October – December 2025</div>
              <div className="text-sm text-pink-400 mt-1">Q4 Implementation</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-10 flex gap-8">
          <div className="text-center glass rounded-xl px-6 py-3 pulse-glow">
            <div className="text-3xl font-bold text-cyan-400">100%</div>
            <div className="text-sm text-gray-400">Accuracy</div>
          </div>
          <div className="text-center glass rounded-xl px-6 py-3 pulse-glow" style={{animationDelay: '0.5s'}}>
            <div className="text-3xl font-bold text-purple-400">0</div>
            <div className="text-sm text-gray-400">Mix-ups</div>
          </div>
          <div className="text-center glass rounded-xl px-6 py-3 pulse-glow" style={{animationDelay: '1s'}}>
            <div className="text-3xl font-bold text-pink-400">Real-time</div>
            <div className="text-sm text-gray-400">Detection</div>
          </div>
        </div>
      </div>
    </div>
  );
}
