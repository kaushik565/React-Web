import React from "react";

export default function LogicSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> The Core Logic & How The System Works</h2>
      </div>
      <div className="space-y-[clamp(12px,3vmin,24px)] max-w-6xl mx-auto">
        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"}}>
          <h3 className="text-[clamp(1rem,3.5vmin,1.3rem)] font-semibold"> Validation Logic Added</h3>
          <ul className="mt-[clamp(8px,2vmin,12px)] space-y-[clamp(6px,1.5vmin,8px)] text-[clamp(0.95rem,2.8vmin,1.1rem)] leading-relaxed">
            <li>1 <strong>Set QR Start & End Numbers</strong> for each batch (defines valid range)</li>
            <li>2 <strong>Scanned QR within range?</strong>   PASS | Outside?   REJECT</li>
            <li>3 <strong>Extract Line ID</strong> from QR (Position 2)  Match with batch line</li>
            <li>4 <strong>Line mismatch?</strong>  Immediate REJECT (prevents cross-line mix-up)</li>
          </ul>
        </div>

        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-[#053b32]" style={{background:"linear-gradient(135deg,#43e97b 0%,#38f9d7 100%)"}}>
          <h3 className="text-[clamp(0.95rem,3.2vmin,1.2rem)] font-semibold"> What Stayed the Same</h3>
          <p className="mt-[clamp(8px,2vmin,12px)] text-[clamp(0.95rem,2.6vmin,1.05rem)] leading-relaxed">
            <strong>No hardware or firmware changes.</strong> The same ACTJ/CPSR jig and components are reused. A <strong>Python validation layer on Raspberry Pi</strong> validates Line ID, Batch Range, and QR format/duplicates. Jig control remains unchanged.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(12px,2.5vmin,20px)]">
          {[
            {title:"1 Batch Configuration", text:"Operator inputs: Batch Number, Line ID, Mould count, QR Start/End ranges"},
            {title:"2 QR Scanning", text:"GM65 scanner reads 14-char QRs; system validates & auto-routes to bins"},
            {title:"3 4-Level Validation", text:"Format  Line ID  Batch Range  Duplicate checks ensure only correct units pass"},
            {title:"4 Visual Feedback & Routing", text:"GREEN (pass), YELLOW (duplicate), RED (reject) + ACTJ auto-diversion to bins"}
          ].map((f, i) => (
            <div key={i} className="rounded-xl p-[clamp(14px,3vmin,22px)] bg-white/5 ring-1 ring-white/10 backdrop-blur"
                 style={{background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)"}}>
              <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold text-white">{f.title}</h3>
              <p className="mt-[clamp(6px,1.5vmin,10px)] text-[clamp(0.9rem,2.5vmin,1.05rem)] text-white/80 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
