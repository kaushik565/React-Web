import React from "react";

export default function TechnicalSlide() {
  const rows = [
    ['Processor Unit','Raspberry Pi 3B+ with Adapter',' Deployed'],
    ['QR Scanner','GM65 QR Scanner with Cable',' Operational'],
    ['Storage','Class 10 SD Card','✅ Installed'],
    ['Detection Method','QR Code Scanning with Validation','✅ Active'],
    ['Batch Capacity','20 Cartridges per cycle','✅ Tested'],
    ['Software Platform','Python 3 Tkinter UI + Systemd Auto-Start Service',' Integrated'],
    ['Duplicate Tracking','SQLite (scan_state.db) - Persistent Per-Batch',' Active'],
    ['Log Viewer','Flask Web Dashboard (Remote Access via IP:8080)',' Deployed'],
    ['Hardware Controller','GPIO-based LED/Buzzer Control on Raspberry Pi',' Operational'],
    ['Hardware Changes','None — Existing jig and components reused',' Confirmed'],
    ['Firmware Changes (ACTJ/CPSR)','None — No modifications to controller firmware',' Confirmed'],
    ['Validation Features','Line ID, Batch Range, QR Length Check',' Enabled'],
  ];
  return (
    <section className="w-full px-[clamp(16px,3vmin,32px)] py-[clamp(16px,4vmin,40px)]">
      <div className="text-center mb-[clamp(16px,4vmin,32px)]">
        <h2 className="text-[clamp(1.4rem,4.5vmin,2.2rem)] font-bold"> Technical Specifications & Hardware</h2>
      </div>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full border-separate border-spacing-[clamp(4px,1vmin,8px)]">
          <thead>
            <tr className="text-left text-[clamp(0.95rem,2.6vmin,1.1rem)]">
              <th className="p-[clamp(8px,2vmin,12px)] bg-gray-900/60 text-white rounded">Component</th>
              <th className="p-[clamp(8px,2vmin,12px)] bg-gray-100 rounded">Specification</th>
              <th className="p-[clamp(8px,2vmin,12px)] bg-green-600 text-white rounded">Status</th>
            </tr>
          </thead>
          <tbody className="text-[clamp(0.95rem,2.6vmin,1.1rem)]">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="p-[clamp(8px,2vmin,12px)] bg-gray-900/40 text-white rounded-l">{r[0]}</td>
                <td className="p-[clamp(8px,2vmin,12px)] bg-gray-50">{r[1]}</td>
                <td className="p-[clamp(8px,2vmin,12px)] bg-green-50 text-green-900 rounded-r">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
