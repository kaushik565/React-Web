import React from "react";

export default function NextStepsSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> Testing Complete — Concept Proven</h2>
      </div>
      <div className="max-w-6xl mx-auto space-y-[clamp(16px,3vmin,24px)]">
        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] bg-white/5 ring-1 ring-white/10 backdrop-blur"
             style={{background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)"}}>
          <h3 className="text-white font-semibold text-[clamp(1rem,3vmin,1.2rem)]"> Test Results Summary</h3>
          <div className="mt-[clamp(10px,2vmin,14px)] grid grid-cols-1 sm:grid-cols-2 gap-[clamp(10px,2vmin,14px)] text-white/90">
            <div className="flex items-center justify-between"><span className="font-medium"> Testing Complete:</span><span>300 cartridges tested | 100% detection accuracy | Zero false rejections</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Performance Tested:</span><span>1 min 03 sec per 20 units</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Quality Impact:</span><span>Eliminates batch mix-up risk | Full traceability | Complete audit documentation</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Next Phase:</span><span>If valuable, implement for production with BigTec's integration support</span></div>
          </div>
        </div>

        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"}}>
          <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold"> Next Steps — Concept Validation Complete</h3>
          <p className="mt-[clamp(6px,1.5vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] leading-relaxed">
            Prototype successfully tested with proven performance. If this concept is valuable for production lines, it can be implemented and scaled with BigTec's support for system integration and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
