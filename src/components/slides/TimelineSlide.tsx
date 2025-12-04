import React from "react";

export default function TimelineSlide() {
  const events = [
    {n:1, title:'Oct 6-7, 2025: Concept Approval & Material Procurement', text:'Project proposal submitted and approved by QA Manager. Hardware procured: Raspberry Pi 3B+, GM65 Scanner, SD Card from Maintenance Team'},
    {n:2, title:'Oct 9, 2025: Prototype Completion', text:'Prototype model completed and functioning. Demo video shared with stakeholders. Approval received for ACTJ integration and USB access'},
    {n:3, title:'Oct 10-14, 2025: BigTec Collaboration', text:'Source code received from BigTec Labs (Salman Khaja). Software integration with existing ACTJ firmware (v2.6) — no firmware modifications'},
    {n:4, title:'Nov 19, 2025: System Integration Complete', text:'Jig successfully integrated with CPSR. Demo with real-time run completed. 300 cartridges approved for validation testing'},
    {n:5, title:'Nov 20 - Dec 2025: Testing & Performance Evaluation ', text:'Completed: Performance evaluation with 300 cartridges. Cycle time tested: 1 min 03 sec per 20 cartridges'},
  ];
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> Project Timeline</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        {events.map(e => (
          <div key={e.n} className="relative flex gap-[clamp(12px,2.5vmin,20px)] rounded-xl p-[clamp(16px,3vmin,24px)] mb-[clamp(12px,2.5vmin,20px)] text-white"
               style={{background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"}}>
            <div className="flex-none w-[clamp(36px,6vmin,48px)] h-[clamp(36px,6vmin,48px)] rounded-full bg-white/20 grid place-items-center text-[clamp(1rem,3.5vmin,1.2rem)] font-bold">{e.n}</div>
            <div>
              <h3 className="text-[clamp(1rem,3.2vmin,1.2rem)] font-semibold">{e.title}</h3>
              <p className="mt-[clamp(6px,1.6vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] leading-relaxed">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
