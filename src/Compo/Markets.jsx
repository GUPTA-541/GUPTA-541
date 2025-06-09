import React from "react";

const marketData = [
  { name: "NIFTY", value: "25,103.20", change: "+0.40%", positive: true },
  { name: "SENSEX", value: "82,445.21", change: "+0.31%", positive: true },
  { name: "Gold", value: "3,337.30", change: "-0.28%", positive: false },
  { name: "Silver", value: "36.56", change: "+1.15%", positive: true },
  { name: "Copper", value: "16.56", change: "-0.15%", positive: false },
  { name: "USD/INR", value: "85.636", change: "-0.14%", positive: false },
];

const Markets = () => (
  <div className=" bg-[#2a2a2a] rounded-xl  p-4 shadow-md ">
    <h2 className="text-lg font-semibold mb-4 text-green-400">📈 Markets</h2>
    <ul className="space-y-2">
      {marketData.map((item, i) => (
        <li key={i} className="flex justify-between items-center">
          <div>
            <p className="text-white font-semibold">{item.name}</p>
            <p className="text-xs text-gray-400">{item.name}</p>
          </div>
          <div className="text-right">
            <p className={`font-semibold ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
              {item.change}
            </p>
            <p className="text-sm text-white">{item.value}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className="text-right mt-2 font-extrabold text-orange-600 text-sm cursor-pointer">See market</div>
  </div>
);

export default Markets;