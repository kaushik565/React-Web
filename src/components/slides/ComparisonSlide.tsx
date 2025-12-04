import React from "react";

export default function ComparisonSlide() {
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> Before vs After</h2>
      </div>
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full border-separate border-spacing-[clamp(4px,1vmin,8px)]">
          <thead>
            <tr className="text-left text-[clamp(0.95rem,2.6vmin,1.1rem)]">
              <th className="p-[clamp(8px,2vmin,12px)] bg-gray-900/60 text-white rounded">Aspect</th>
              <th className="p-[clamp(8px,2vmin,12px)] bg-gray-100 rounded">Manual (Before)</th>
              <th className="p-[clamp(8px,2vmin,12px)] bg-indigo-600 text-white rounded">Jig (After)</th>
            </tr>
          </thead>
          <tbody className="text-[clamp(0.95rem,2.6vmin,1.1rem)]">
            {[
              {a:'QR Validation', b:'CPSR: QR scan + count only (no validation)', c:'4-level validation: Line ID, Batch Range, Format, Duplicate'},
              {a:'Detection', b:'Visual/manual, errors possible', c:'Automated validation prevents mix-ups'},
              {a:'Routing', b:'Manual sorting', c:'ACTJ auto-diversion'},
              {a:'Traceability', b:'Count data only', c:'Full validation logs: CSV + SQLite + Flask'},
            ].map((row, i) => (
              <tr key={i}>
                <td className="p-[clamp(8px,2vmin,12px)] bg-gray-900/40 text-white rounded-l">{row.a}</td>
                <td className="p-[clamp(8px,2vmin,12px)] bg-gray-50">{row.b}</td>
                <td className="p-[clamp(8px,2vmin,12px)] bg-indigo-50 text-indigo-900 rounded-r">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
