import React from "react";

export default function BenefitsSlide() {
  const features = [
    {icon:'', title:'Zero Defect Quality', text:'100% batch verification accuracy. Eliminates mix-up risks that threaten product recalls and regulatory audits. Protects brand reputation.'},
    {icon:'⚡', title:'Production Efficiency', text:'Faster than manual checks. Consistent cycle times minimize bottlenecks.'},
    {icon:'', title:'Zero Additional Investment', text:'Built entirely with existing resources. Uses Raspberry Pi, GM65 scanner, and integrates with current ACTJ/CPSR systems. Prevents rework and scrap without new CAPEX.'},
    {icon:'🤝', title:'Operator Empowerment', text:'Instant LED + buzzer feedback. Operators focus on action, not manual QR checks. Reduces fatigue and human error to zero.'},
    {icon:'', title:'Scalable Architecture', text:'Adaptable to any batch size or mould configuration. Future-ready for MES integration and multi-line rollout.'},
    {icon:'', title:'Regulatory Confidence', text:'Complete logging + remote audit access. Full traceability and automated documentation reduce audit prep time by 80%.'},
  ];
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> Production Floor Benefits & Value</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(12px,2.5vmin,20px)] max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl p-[clamp(16px,3vmin,24px)] text-white"
               style={{background:"linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)"}}>
            <h3 className="text-[clamp(1rem,3vmin,1.2rem)] font-semibold"><span className="mr-2">{f.icon}</span>{f.title}</h3>
            <p className="mt-[clamp(6px,1.5vmin,10px)] text-[clamp(0.95rem,2.6vmin,1.1rem)] leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
