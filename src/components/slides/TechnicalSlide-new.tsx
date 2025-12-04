export default function TechnicalSlide() {
  const specs = [
    { component: 'Processor Unit', spec: 'Raspberry Pi 3B+ with Adapter', status: 'Deployed', icon: '🖥️', color: 'from-blue-500 to-cyan-600' },
    { component: 'QR Scanner', spec: 'GM65 QR Scanner with Cable', status: 'Operational', icon: '📱', color: 'from-purple-500 to-pink-600' },
    { component: 'Storage', spec: 'Class 10 SD Card', status: 'Installed', icon: '💾', color: 'from-green-500 to-emerald-600' },
    { component: 'Detection Method', spec: 'QR Code Scanning with Validation', status: 'Active', icon: '🔍', color: 'from-orange-500 to-red-600' },
    { component: 'Batch Capacity', spec: '20 Cartridges per cycle', status: 'Tested', icon: '📦', color: 'from-indigo-500 to-purple-600' },
    { component: 'Software Platform', spec: 'Python 3 Tkinter UI + Systemd Auto-Start', status: 'Integrated', icon: '⚙️', color: 'from-teal-500 to-cyan-600' },
    { component: 'Duplicate Tracking', spec: 'SQLite (scan_state.db) - Persistent Per-Batch', status: 'Active', icon: '🗄️', color: 'from-pink-500 to-rose-600' },
    { component: 'Log Viewer', spec: 'Flask Web Dashboard (Remote Access :8080)', status: 'Deployed', icon: '🌐', color: 'from-amber-500 to-orange-600' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ⚙️ Technical Specifications & Hardware
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {specs.map((spec, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${spec.color} rounded-xl p-5 card-shadow transform hover:scale-[1.02] transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl flex-shrink-0">{spec.icon}</div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-1">{spec.component}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{spec.spec}</p>
                </div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-1 inline-block">
                <span className="text-white font-bold text-sm">✓ {spec.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="glass-strong rounded-xl p-5 text-center">
            <div className="text-4xl mb-2">🔧</div>
            <h4 className="text-white font-bold mb-2">Hardware Changes</h4>
            <p className="text-green-400 font-bold">NONE</p>
            <p className="text-gray-400 text-sm mt-1">Existing jig reused</p>
          </div>
          <div className="glass-strong rounded-xl p-5 text-center">
            <div className="text-4xl mb-2">💻</div>
            <h4 className="text-white font-bold mb-2">Firmware Changes</h4>
            <p className="text-green-400 font-bold">NONE</p>
            <p className="text-gray-400 text-sm mt-1">No ACTJ/CPSR mods</p>
          </div>
          <div className="glass-strong rounded-xl p-5 text-center">
            <div className="text-4xl mb-2">✅</div>
            <h4 className="text-white font-bold mb-2">Validation Features</h4>
            <p className="text-cyan-400 font-bold">4 LEVELS</p>
            <p className="text-gray-400 text-sm mt-1">All enabled</p>
          </div>
        </div>

        {/* Architecture Banner */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl">
          <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
            <span className="text-3xl">🏗️</span> System Architecture
          </h3>
          <div className="glass-strong rounded-xl p-5">
            <div className="flex items-center justify-between text-center">
              <div className="flex-1">
                <div className="text-3xl mb-2">📱</div>
                <div className="text-sm font-bold">GM65 Scanner</div>
              </div>
              <div className="text-2xl text-cyan-400">→</div>
              <div className="flex-1">
                <div className="text-3xl mb-2">🖥️</div>
                <div className="text-sm font-bold">Raspberry Pi</div>
              </div>
              <div className="text-2xl text-cyan-400">→</div>
              <div className="flex-1">
                <div className="text-3xl mb-2">🔍</div>
                <div className="text-sm font-bold">Python Validation</div>
              </div>
              <div className="text-2xl text-cyan-400">→</div>
              <div className="flex-1">
                <div className="text-3xl mb-2">🎛️</div>
                <div className="text-sm font-bold">ACTJ Routing</div>
              </div>
              <div className="text-2xl text-cyan-400">→</div>
              <div className="flex-1">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-sm font-bold">Flask Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
