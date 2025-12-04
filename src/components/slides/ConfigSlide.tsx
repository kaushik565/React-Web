import React from "react";

export default function ConfigSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold">⚙️ Batch Configuration Example</h2>
      </div>
      <div className="max-w-6xl mx-auto space-y-[clamp(16px,3vmin,24px)]">
        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] bg-white/5 ring-1 ring-white/10 backdrop-blur"
             style={{background:"linear-gradient(135deg,#1e293b 0%,#0f172a 100%)"}}>
          <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold text-white">Real Batch Setup</h3>
          <div className="mt-[clamp(10px,2vmin,14px)] grid grid-cols-1 sm:grid-cols-2 gap-[clamp(10px,2vmin,14px)] text-white/90">
            <div className="flex items-center justify-between">
              <span className="font-medium"> Batch Number:</span>
              <span>MVANC00045</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium"> Batch Line:</span>
              <span>A (Line A)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium"> Number of Moulds:</span>
              <span>3 Moulds</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium"> Allowed Range:</span>
              <span>VAN142536A0001  VAN142536B9999</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(12px,2.5vmin,20px)]">
          <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#43e97b 0%,#38f9d7 100%)"}}>
            <h3 className="font-semibold text-[clamp(1rem,3vmin,1.2rem)]"> PASS Examples</h3>
            <p>VAN142536A0001 — within range</p>
            <p>VAN142536A5000 — within range</p>
            <p>VAN142536B0002 — within range</p>
          </div>
          <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#eb3349 0%,#f45c43 100%)"}}>
            <h3 className="font-semibold text-[clamp(1rem,3vmin,1.2rem)]"> REJECT Examples</h3>
            <p>VAN142536C0003 — outside allowed range</p>
            <p>VBN142536B0100 — wrong line</p>
          </div>
          <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#f5af19 0%,#f12711 100%)"}}>
            <h3 className="font-semibold text-[clamp(1rem,3vmin,1.2rem)]"> DUPLICATE</h3>
            <p>VAN142536A0001 — already scanned in session</p>
          </div>
        </div>

        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white" style={{background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"}}>
          <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold"> How the Validation Logic Works</h3>
          <ul className="mt-[clamp(8px,2vmin,12px)] space-y-[clamp(6px,1.5vmin,8px)] text-[clamp(0.9rem,2.5vmin,1.05rem)] leading-relaxed">
            <li><strong>Step 1:</strong> Configure QR Start (VAN142536A0001) and QR End (VAN142536B9999) for the batch</li>
            <li><strong>Step 2:</strong> When QR is scanned, system checks: Is it within this range?</li>
            <li><strong>Step 3:</strong> Extract Line ID from Position 2 of QR  Compare with batch line (A)</li>
            <li><strong>Result:</strong> Both checks pass  GREEN (PASS) | Any check fails  RED (REJECT)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
