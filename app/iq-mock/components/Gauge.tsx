"use client";

import { useState } from "react";

export default function Gauge() {
  const [value, setValue] = useState(20);
  const rotation = -54 + (value / 100) * 108;
  return (
    <div className="w-full max-w-150 mx-auto text-center">
      <div className="inline-block w-50"></div>
      <svg
        className="block mx-auto"
        width="273"
        height="155"
        viewBox="0 0 273 155">
        <circle
          r="96"
          cx="135"
          cy="142"
          className="fill-none stroke-[#E72F39]"
          style={{
            strokeWidth: 19,
            strokeDasharray: "115 400",
            strokeDashoffset: 253,
            transform: "skewX(-2deg) skewY(1deg)",
            transformOrigin: "center",
            strokeLinecap: "round",
          }}
        />
        <circle
          r="96"
          cx="135"
          cy="142"
          className="fill-none stroke-[#FF9100]"
          style={{
            strokeWidth: 19,
            strokeDasharray: "50 602",
            strokeDashoffset: 253,
            transform: "skewX(-2deg) skewY(1deg)",
            transformOrigin: "center",
            strokeLinecap: "round",
          }}
        />
        <circle
          r="96"
          cx="136"
          cy="142"
          className="fill-none stroke-[#FFC800]"
          style={{
            strokeWidth: 19,
            strokeDasharray: "50 551",
            strokeDashoffset: 128,
            strokeLinecap: "round",
          }}
        />
        <circle
          r="96"
          cx="136"
          cy="142"
          className="fill-none stroke-[#a3cd3b]"
          style={{
            strokeWidth: 19,
            strokeDasharray: "10 665",
            strokeDashoffset: 128,
            strokeLinecap: "round",
          }}
        />
        <circle
          r="96"
          cx="138"
          cy="142"
          className="fill-none stroke-[#a3cd3b]"
          style={{
            strokeWidth: 19,
            strokeDasharray: "40 543",
            strokeDashoffset: 5,
            transform: "skewX(2deg) skewY(1deg)",
            transformOrigin: "center",
            strokeLinecap: "round",
          }}
        />
        <polygon
          points="129,145 137,90 145,145"
          className="fill-black"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "137px 146px",
            transition: "transform 0.3s ease",
          }}
        />
        <circle r="10" cx="137" cy="145" className="fill-black" />
      </svg>
      <style jsx>{`
        input[type="range"]::-webkit-slider-runnable-track {
          height: 20px;
          border-radius: 25px;
          background: #0093d7;
        }
        input[type="range"]::-webkit-slider-thumb {
          width: 50px;
          height: 20px;
          border-radius: 25px;
          background: #ffc815;
          -webkit-appearance: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
