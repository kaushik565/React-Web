export default function TeamSlide() {
  const leadership = [
    { title: 'Plant Head', name: 'G.Uday Bhaskar', role: 'GM-Operations', detail: 'Champions 2.0 Implementation', icon: '👔', color: 'from-indigo-500 to-purple-600' },
    { title: 'QA Management', name: 'Hameed C.R.', role: 'Assistant Manager - QA', detail: 'Project Sponsor & Approver', icon: '🎯', color: 'from-pink-500 to-rose-600' },
    { title: 'Design Team', name: 'Gompa Naidu', role: 'HOD - DI', detail: 'Coordination with BigTec and source code', icon: '🛠️', color: 'from-orange-500 to-red-600' },
    { title: 'Technical Support', name: 'S. Chakravarthi', role: 'Maintenance Site-III', detail: 'Hardware & ACTJ Support', icon: '⚙️', color: 'from-cyan-500 to-blue-600' }
  ];

  const contributors = [
    { role: 'BigTec Labs', name: 'Salman Khaja - Source Code & Integration', icon: '💻' },
    { role: 'Production Lead', name: 'Santosh Yavvari - Guidance', icon: '🏭' },
    { role: 'IT Support', name: 'Raj Kumar Kanithi - USB Access & IT Infrastructure', icon: '🖥️' },
    { role: 'Materials', name: 'G.Bala Sri Ram & Vadlapudi Ramya - Cartridge Provision for Testing', icon: '📦' },
    { role: 'Maintenance Support', name: 'Sri Ram & Maintenance Team - Technical Support in Field', icon: '🔧' }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          👥 Project Team & Acknowledgments
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Leadership Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {leadership.map((leader, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${leader.color} rounded-2xl p-6 card-shadow transform hover:scale-[1.02] transition-all duration-300`}>
              <div className="text-5xl mb-3">{leader.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2">{leader.title}</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-2">
                <p className="text-white font-bold text-lg">{leader.name}</p>
                <p className="text-white/90 text-sm">{leader.role}</p>
              </div>
              <p className="text-white/90 text-sm">{leader.detail}</p>
            </div>
          ))}
        </div>

        {/* Key Contributors */}
        <div className="glass-strong rounded-2xl p-6 mb-6">
          <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
            <span className="text-2xl">🌟</span> Key Contributors
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {contributors.map((contributor, idx) => (
              <div key={idx} className="glass rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{contributor.icon}</div>
                  <div className="flex-1">
                    <span className="text-cyan-400 font-bold">{contributor.role}:</span>
                    <span className="text-gray-300 ml-2">{contributor.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Acknowledgment */}
        <div className="bg-gradient-to-br from-pink-500 via-rose-600 to-red-600 rounded-2xl p-6 mb-4 text-white shadow-2xl">
          <h3 className="text-2xl font-black mb-3 flex items-center gap-2">
            <span className="text-3xl">💖</span> Special Acknowledgment
          </h3>
          <div className="glass-strong rounded-xl p-5">
            <p className="text-lg leading-relaxed">
              <span className="font-black text-xl">CH. Praneet Raj</span> — For bringing this idea into focus, supporting me in the initial stage and every step. Without his encouragement and involvement, this project would not have reached its current form.
            </p>
          </div>
        </div>

        {/* Champions 2.0 Banner */}
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-2xl">
          <h3 className="text-2xl font-black mb-3 flex items-center gap-2">
            <span className="text-3xl">🏆</span> Champions 2.0 Initiative
          </h3>
          <div className="glass-strong rounded-xl p-5">
            <p className="text-lg leading-relaxed">
              This project was inspired by an initiative led by <span className="font-bold text-cyan-300">GM-Operations, G.Uday Bhaskar</span> under <span className="font-bold text-green-300">Champions 2.0</span>. The program encourages every new joiner to select a meaningful improvement task and implement it end-to-end. I chose this jig as my Champions 2.0 task and executed it fully — from concept to testing and handover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
