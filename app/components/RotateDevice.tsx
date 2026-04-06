"use client";

import { useEffect, useState } from "react";

export default function RotateDevice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      setShow(window.innerWidth > window.innerHeight);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0a0a0f] overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[320px] h-80 rounded-full bg-[radial-gradient(circle,rgba(83,74,183,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute -bottom-15 -right-15 w-70 h-70 rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.14)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-40">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-8 max-w-xs w-full">
        <div className="relative w-20 h-20 flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-400/30" />
          <div className="absolute -inset-2 rounded-full border border-dashed border-purple-400/30 animate-spin" />
          <img
            src="https://media.iquanta.in/ui_images/skills/rotate.png"
            alt="rotate"
            className="w-10 h-10 animate-[rotatePhone_2.5s_ease-in-out_infinite]"
          />
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <span className="text-[11px] tracking-widest uppercase text-purple-300">
            Display Notice
          </span>
          <h2 className="text-lg font-semibold text-white">
            Rotate your device
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed ">
            This experience is designed for portrait mode. Please rotate your device to continue.
          </p>
        </div>
      </div>
    </div>
  );
}