export default function TimelineSlide() {
  const milestones = [
    { 
      phase: 'Planning & Design', 
      duration: 'Week 1', 
      tasks: ['Requirement analysis', 'System architecture design', 'Hardware selection'], 
      status: 'complete',
      icon: '📋',
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      phase: 'Development', 
      duration: 'Week 2-3', 
      tasks: ['Python validation logic', 'Tkinter UI development', 'SQLite integration', 'Flask dashboard'], 
      status: 'complete',
      icon: '⚙️',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      phase: 'Integration', 
      duration: 'Week 4', 
      tasks: ['ACTJ interface setup', 'GM65 scanner config', 'Raspberry Pi deployment'], 
      status: 'complete',
      icon: '🔌',
      color: 'from-orange-500 to-red-600'
    },
    { 
      phase: 'Testing', 
      duration: 'Week 5', 
      tasks: ['15 test cycles', '300 cartridges validated', 'Performance tuning'], 
      status: 'complete',
      icon: '🧪',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      phase: 'Deployment', 
      duration: 'Week 6', 
      tasks: ['Production rollout', 'Operator training', 'Documentation'], 
      status: 'complete',
      icon: '🚀',
      color: 'from-pink-500 to-rose-600'
    },
    { 
      phase: 'Monitoring', 
      duration: 'Ongoing', 
      tasks: ['Performance tracking', 'Continuous optimization', 'Support'], 
      status: 'active',
      icon: '📊',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float"></div>
      </div>

      <div className="text-center mb-6 pb-4 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white rounded-t-xl p-4 flex-shrink-0 relative z-10">
        <h2 className="text-[clamp(1.2em,2.2vmin,1.8em)] font-extrabold drop-shadow-lg">
          ⏱️ Project Timeline & Milestones
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 relative z-10">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500"></div>

          {/* Milestones */}
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-20">
                {/* Marker */}
                <div className={`absolute left-0 w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center text-3xl shadow-2xl ${milestone.status === 'active' ? 'pulse-glow' : ''}`}>
                  {milestone.icon}
                </div>

                {/* Card */}
                <div className={`glass-strong rounded-xl p-5 card-shadow transform hover:scale-[1.02] transition-all duration-300 ${milestone.status === 'active' ? 'border-2 border-green-500' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold text-xl">{milestone.phase}</h3>
                      <p className="text-cyan-400 font-semibold">{milestone.duration}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-lg ${milestone.status === 'complete' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'} font-bold text-sm`}>
                      {milestone.status === 'complete' ? '✓ COMPLETE' : '● ACTIVE'}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {milestone.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-2xl">
          <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
            <span className="text-3xl">⏳</span> Delivery Metrics
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-4xl font-black mb-2">6</div>
              <div className="text-sm opacity-90">Weeks Total</div>
            </div>
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-sm opacity-90">On Schedule</div>
            </div>
            <div className="glass-strong rounded-xl p-4 text-center">
              <div className="text-4xl font-black mb-2">$0</div>
              <div className="text-sm opacity-90">Budget Overrun</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
