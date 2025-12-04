export default function ConsequencesSlide() {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-[clamp(8px,1.5vmin,15px)] pb-[clamp(6px,0.8vmin,10px)] border-b-[3px] border-primary flex-shrink-0">
        <h2 className="text-[clamp(1.1em,2vmin,1.6em)] text-primary font-bold">
           Impact & Risk Analysis
        </h2>
      </div>

      <div className="flex-1 overflow-auto pr-3 text-[clamp(0.75em,1.15vmin,0.95em)] leading-[1.4]">
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-[clamp(14px,2vmin,18px)] rounded-xl border border-red-200 shadow-md mb-[clamp(12px,1.5vmin,16px)]">
          <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-3 text-red-800"> What Could Go Wrong?</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[clamp(0.8em,1vmin,0.92em)]">
              <thead>
                <tr className="bg-red-200/60">
                  <th className="border border-red-300 p-2 text-left">Risk</th>
                  <th className="border border-red-300 p-2 text-left">Without JIG</th>
                  <th className="border border-red-300 p-2 text-left">With JIG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-red-300 p-2 font-semibold">Wrong Batch Insertion</td>
                  <td className="border border-red-300 p-2">Manual check; often missed</td>
                  <td className="border border-red-300 p-2 bg-green-100">100% detected before filling</td>
                </tr>
                <tr>
                  <td className="border border-red-300 p-2 font-semibold">Product Recall</td>
                  <td className="border border-red-300 p-2">High risk if mix-up shipped</td>
                  <td className="border border-red-300 p-2 bg-green-100">Zero risk; blocked at source</td>
                </tr>
                <tr>
                  <td className="border border-red-300 p-2 font-semibold">Batch Rework/Rejection</td>
                  <td className="border border-red-300 p-2">Happens after filling starts</td>
                  <td className="border border-red-300 p-2 bg-green-100">Prevented upfront</td>
                </tr>
                <tr>
                  <td className="border border-red-300 p-2 font-semibold">Traceability Issues</td>
                  <td className="border border-red-300 p-2">Incomplete or manual logs</td>
                  <td className="border border-red-300 p-2 bg-green-100">Automated, timestamped logs</td>
                </tr>
                <tr>
                  <td className="border border-red-300 p-2 font-semibold">Production Downtime</td>
                  <td className="border border-red-300 p-2">Mid-filling halt for verification</td>
                  <td className="border border-red-300 p-2 bg-green-100">Pre-validated; no interruption</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(10px,1.5vmin,14px)]">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
            <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 flex items-center gap-2">
              <span></span> Cost Avoidance
            </h3>
            <ul className="space-y-1 text-[clamp(0.8em,0.95vmin,0.9em)] list-none">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Prevents batch rejection costs</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Avoids product recall expenses</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Eliminates rework labor & material loss</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Reduces quality investigation overhead</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-[clamp(14px,2vmin,18px)] rounded-xl shadow-lg">
            <h3 className="text-[clamp(0.95em,1.1vmin,1.1em)] font-bold mb-2 flex items-center gap-2">
              <span></span> Compliance & Safety
            </h3>
            <ul className="space-y-1 text-[clamp(0.8em,0.95vmin,0.9em)] list-none">
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Meets GMP traceability standards</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Protects patient safety</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Reduces regulatory audit risks</li>
              <li className="relative pl-5 before:content-[''] before:absolute before:left-0">Strengthens quality assurance processes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
