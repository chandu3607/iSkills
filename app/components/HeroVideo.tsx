"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function HeroVideo() {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-black md:pb-10 pb-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative rounded-[28px] overflow-hidden border-4 border-[rgba(209,209,209,0.302)] bg-[rgba(194,194,194,0.14)] md:p-3 p-2">
          {!play && (
            <div
              className="relative group cursor-pointer rounded-[18px] overflow-hidden"
              onClick={() => setPlay(true)}
            >
              <img
                src="https://img.youtube.com/vi/S3-yIpFaS9g/maxresdefault.jpg"
                className="w-full h-50  md:h-105 object-cover"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FFB056]/30 animate-ping" />
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-full 
                bg-[#FFB056]/20 backdrop-blur-xl border border-[#FFB056]/30
                flex items-center justify-center
                shadow-[0_0_40px_rgba(255,255,255,0.2)]
                group-hover:scale-110 transition"
                >
                  <Play
                    fill="currentColor"
                    className="text-[#FFB056]  w-8 h-8 ml-1"
                  />
                </div>
              </div>
            </div>
          )}
          {play && (
            <div className="relative rounded-[18px] overflow-hidden">
              <button
                onClick={() => setPlay(false)}
                className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md rounded-full p-2 text-white hover:scale-110 transition"
              >
                <X size={20} />
              </button>
              <iframe
                src="https://www.youtube.com/embed/S3-yIpFaS9g?autoplay=1"
                className="w-full h-50  md:h-105"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
