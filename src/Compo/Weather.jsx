
import React from "react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";

const Weather = () => {
  const forecast = [
    { time: "9 PM", temp: "37°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "10 PM", temp: "36°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "11 PM", temp: "34°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "12 AM", temp: "34°C", icon: <WiNightClear size={28} />, chance: "1%" },
    { time: "1 AM", temp: "33°C", icon: <WiNightClear size={28} />, chance: "1%" },
    { time: "9 PM", temp: "37°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "11 PM", temp: "34°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "12 AM", temp: "34°C", icon: <WiNightClear size={28} />, chance: "1%" },
    { time: "1 AM", temp: "33°C", icon: <WiNightClear size={28} />, chance: "1%" },
    { time: "9 PM", temp: "37°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "10 PM", temp: "36°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "11 PM", temp: "34°C", icon: <WiNightClear size={28} />, chance: "0%" },
    { time: "12 AM", temp: "34°C", icon: <WiNightClear size={28} />, chance: "1%" },
    { time: "1 AM", temp: "33°C", icon: <WiNightClear size={28} />, chance: "1%" },
  ];

  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-4 shadow-lg">
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-white">New Delhi</h2>
        <p className="text-4xl font-bold text-orange-400 flex items-center gap-2">
          <WiDaySunny size={36} /> 37°C
        </p>
        <p className="text-sm text-gray-400 mt-1">
          🌡️ Expect 6 days with hot weather ahead starting Tomorrow.
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar py-2">
        {forecast.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#2a2a2a] rounded-lg p-2 w-20 text-center text-sm shrink-0"
          >
            <p className="text-gray-300">{item.time}</p>
            <div className="text-yellow-400 flex justify-center">{item.icon}</div>
            <p className="font-semibold text-white">{item.temp}</p>
            <p className="text-gray-400">{item.chance}</p>
          </div>
        ))}
      </div>

      <button className="mt-3 text-sm text-orange-600 hover:underline">
        See full forecast
      </button>
    </div>
  );
};

export default Weather;
