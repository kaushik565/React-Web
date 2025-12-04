import React from "react";

export default function FinalSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold">🙏 Thank You</h2>
      </div>
      <div className="max-w-5xl mx-auto space-y-[clamp(16px,3vmin,24px)]">
        <div className="rounded-xl p-[clamp(20px,4vmin,32px)] text-white"
             style={{background:"linear-gradient(135deg,#667eea 0%,#764ba2 100%)"}}>
          <h3 className="text-[clamp(1.2rem,4vmin,1.6rem)] font-semibold mb-[clamp(8px,2vmin,12px)]"> Final Message</h3>
          <p className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold leading-relaxed">Built-in prevention, compliance, and traceability — embedded in the process.</p>
        </div>
        <div className="rounded-xl p-[clamp(18px,3.5vmin,28px)] text-white"
             style={{background:"linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)"}}>
          <h3 className="text-[clamp(1.1rem,3.5vmin,1.4rem)] font-semibold mb-[clamp(8px,2vmin,12px)]"> What We Achieved</h3>
          <p className="text-[clamp(0.95rem,2.6vmin,1.15rem)] leading-relaxed">
             Addressed a repeating quality issue with automated prevention<br/>
             Zero additional cost; verified accuracy in testing<br/>
             Full traceability for audits<br/><br/>
            <strong className="text-[clamp(0.95rem,2.6vmin,1.05rem)]">Champions 2.0 in action.</strong>
          </p>
        </div>
        <div className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white"
             style={{background:"linear-gradient(135deg,#f093fb 0%,#f5576c 100%)"}}>
          <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold">Regards</h3>
          <p>P. Lakshmana Sai Kaushik — QA Supervisor</p>
          <p>Molbio Diagnostics Limited - SITE III</p>
        </div>
      </div>
    </section>
  );
}
