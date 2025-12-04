import React from "react";

export default function TeamSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold">👥 Project Team & Acknowledgments</h2>
      </div>
      <div className="max-w-6xl mx-auto space-y-[clamp(16px,3vmin,24px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(12px,2.5vmin,20px)]">
          {[
            {title:'Plant Head', text:'G.Uday Bhaskar\nGM-Operations\nChampions 2.0 Implementation', bg:'linear-gradient(135deg,#667eea 0%,#764ba2 100%)'},
            {title:'QA Management', text:'Hameed C.R.\nAssistant Manager - QA\nProject Sponsor & Approver', bg:'linear-gradient(135deg,#f093fb 0%,#f5576c 100%)'},
            {title:'Design Team', text:'Gompa Naidu\nHOD - DI\nCoordination with BigTec and source code', bg:'linear-gradient(135deg,#f5af19 0%,#f12711 100%)'},
            {title:'Technical Support', text:'S. Chakravarthi\nMaintenance Site-III\nHardware & ACTJ Support', bg:'linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)'},
          ].map((c, i) => (
            <div key={i} className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:c.bg}}>
              <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold">{c.title}</h3>
              <p className="mt-[clamp(6px,1.5vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] whitespace-pre-line leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] bg-white/5 ring-1 ring-white/10 backdrop-blur"
             style={{background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)"}}>
          <h3 className="text-white font-semibold text-[clamp(1rem,3vmin,1.2rem)]">Key Contributors</h3>
          <div className="mt-[clamp(10px,2vmin,14px)] grid grid-cols-1 sm:grid-cols-2 gap-[clamp(10px,2vmin,14px)] text-white/90">
            <div className="flex items-center justify-between"><span className="font-medium"> BigTec Labs:</span><span>Salman Khaja - Source Code & Integration</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Production Lead:</span><span>Santosh Yavvari - Guidance</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> IT Support:</span><span>Raj Kumar Kanithi - USB Access & IT Infrastructure</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Materials:</span><span>G.Bala Sri Ram & Vadlapudi Ramya - Cartridge Provision for Testing</span></div>
            <div className="flex items-center justify-between"><span className="font-medium"> Maintenance Support:</span><span>Sri Ram & Maintenance Team - Technical Support in Field</span></div>
          </div>
        </div>

        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#f093fb 0%,#f5576c 100%)"}}>
          <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold">Special Acknowledgment</h3>
          <p className="mt-[clamp(6px,1.5vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] leading-relaxed">
            <strong>CH.Praneet Raj</strong> — For bringing this idea into focus, supporting me in the initial stage and every step. Without his encouragement and involvement, this project would not have reached its current form.
          </p>
        </div>

        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"}}>
          <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold"> Champions 2.0 Initiative</h3>
          <p className="mt-[clamp(6px,1.5vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] leading-relaxed">
            This project was inspired by an initiative led by <strong>GM-Operations, G.Uday Bhaskar</strong> under <strong>Champions 2.0</strong>. The program encourages every new joiner to select a meaningful improvement task and implement it end-to-end. I chose this jig as my Champions 2.0 task and executed it fully — from concept to testing and handover.
          </p>
        </div>
      </div>
    </section>
  );
}
