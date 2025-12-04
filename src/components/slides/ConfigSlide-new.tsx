import React from "react";

export default function ConfigSlide() {
  const settings = [
    { icon: '📝', label: 'Batch Number', value: 'VAN142536', desc: 'Unique batch identifier' },
    { icon: '🔤', label: 'Line ID', value: 'A, B, or C', desc: 'Production line assignment' },
    { icon: '🔢', label: 'Mould Count', value: '1-50', desc: 'Expected cartridges per batch' },
    { icon: '📊', label: 'QR Start Number', value: 'VAN142536A0001', desc: 'First valid QR in range' },
    { icon: '📊', label: 'QR End Number', value: 'VAN142536A9999', desc: 'Last valid QR in range' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ⚙️ Batch Configuration Dashboard
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Control Panel */}
        <div className="glass-strong rounded-2xl p-8 mb-6 border-2 border-indigo-500/30">
          <h3 className="text-3xl font-black text-indigo-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🎛️</span> Configuration Parameters
          </h3>
          <div className="space-y-4">
            {settings.map((setting, idx) => (
              <div key={idx} className="glass rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="text-4xl flex-shrink-0">{setting.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">{setting.label}</div>
                    <div className="text-2xl font-bold text-white mb-1">{setting.value}</div>
                    <div className="text-sm text-gray-500">{setting.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Example */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">📋</span> Configuration Example
          </h3>
          <div className="glass-strong rounded-xl p-6">
            <div className="grid grid-cols-2 gap-6 text-lg">
              <div>
                <div className="text-indigo-200 mb-2 font-semibold">Batch Details</div>
                <div className="space-y-2">
                  <p>• <strong>Batch:</strong> VAN142536</p>
                  <p>• <strong>Line:</strong> A</p>
                  <p>• <strong>Count:</strong> 20 moulds</p>
                </div>
              </div>
              <div>
                <div className="text-indigo-200 mb-2 font-semibold">QR Range</div>
                <div className="space-y-2">
                  <p>• <strong>Start:</strong> VAN142536A0001</p>
                  <p>• <strong>End:</strong> VAN142536A9999</p>
                  <p>• <strong>Valid Range:</strong> 9,999 QRs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-white/10 rounded-lg p-4">
            <p className="text-center font-semibold">
              ✓ Any QR outside this range or with Line ≠ A will be <strong>REJECTED</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
