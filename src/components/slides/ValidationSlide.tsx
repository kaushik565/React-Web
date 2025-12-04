import React from "react";

export default function ValidationSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> 4-Level Validation Process</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        {[
          {
            n:1, title:'Format Validation',
            body:'QR must be exactly 14 alphanumeric characters. Rejects: wrong length, special characters, spaces. Result: RED light if failed.'
          },
          {
            n:2, title:'Line ID Validation',
            body:'Extract character at Position 2 (A-Z). Check: Does extracted Line ID match configured Batch Line? Example: QR = VAN142536A0001  Line = A; If batch is Line B  REJECT. Result: RED light + reject bin if Line mismatch.'
          },
          {
            n:3, title:'Batch Range Validation',
            body:'Operator sets QR Start Number & QR End Number per batch. Check: Is scanned QR within this range? Decision: Within range  PASS | Outside range  REJECT. Result: RED light + reject bin if out of range.'
          },
          {
            n:4, title:'Duplicate Detection',
            body:'Check: QR not previously scanned in current session. Prevents re-scanning same cartridge multiple times. Result: YELLOW light if duplicate, GREEN if all checks pass.'
          },
        ].map(item => (
          <div key={item.n} className="relative flex gap-[clamp(12px,2.5vmin,20px)] rounded-xl p-[clamp(16px,3vmin,24px)] mb-[clamp(12px,2.5vmin,20px)] text-white"
               style={{background:"linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)"}}>
            <div className="flex-none w-[clamp(36px,6vmin,48px)] h-[clamp(36px,6vmin,48px)] rounded-full bg-white/20 grid place-items-center text-[clamp(1rem,3.5vmin,1.2rem)] font-bold">
              {item.n}
            </div>
            <div>
              <h3 className="text-[clamp(1rem,3.2vmin,1.2rem)] font-semibold">{item.title}</h3>
              <p className="mt-[clamp(6px,1.6vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
