import React from "react";

export default function TestResultsSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> Test Results & Performance</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[clamp(12px,2.5vmin,20px)]">
        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] bg-white text-gray-900 shadow-sm" >
          <h3 className="font-semibold text-[clamp(1rem,3vmin,1.2rem)]">📊 Test Run Results</h3>
          <div className="text-[clamp(2rem,10vmin,4rem)] font-bold tracking-tight my-[clamp(8px,2vmin,12px)]">1:03</div>
          <p className="text-[clamp(1rem,3.5vmin,1.6rem)] mb-[clamp(6px,1.5vmin,10px)]">Cycle time per 20 cartridges</p>
          <p className="text-[clamp(0.95rem,2.6vmin,1.1rem)]">(1 minute 03 seconds)</p>
        </div>
        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] bg-white/5 ring-1 ring-white/10 backdrop-blur"
             style={{background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)"}}>
          <h3 className="font-semibold text-white text-[clamp(1rem,3vmin,1.2rem)]">Performance Metrics — Test Run with 300 Cartridges</h3>
          <div className="mt-[clamp(8px,2vmin,12px)] space-y-[clamp(6px,1.5vmin,8px)] text-white/90">
            <div className="flex items-center justify-between"><span className="font-medium"> Test Batch Size:</span><span>20 Cartridges per cycle</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Cycle Time:</span><span>1 min 03 sec (63 seconds) — Consistently tested</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Per-unit processing:</span><span>~3.15 seconds — faster than manual verification</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Detection accuracy:</span><span>Consistently accurate — zero missed errors observed in tests</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Cost avoidance:</span><span>Reduces rework and waste; supports compliance</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
