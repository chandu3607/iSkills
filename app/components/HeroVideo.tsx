"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function HeroVideo() {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-black md:pb-10 pb-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative  mx-auto">
          <div className="absolute -inset-px rounded-2xl bg-[linear-gradient(135deg,rgba(104,63,190,0.5),rgba(38,184,132,0.5))] opacity-0 group-hover:opacity-100 blur-sm" />
          <div className="p-px rounded-2xl bg-[linear-gradient(135deg,rgba(104,63,190,0.35),rgba(38,184,132,0.25))]">
            <div className="rounded-2xl overflow-hidden bg-[#0d0d10] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28ca42]" />
                </div>
                <span className="text-[11px] text-[#333340] font-medium tracking-wide">
                  iSkills
                </span>
                <div className="w-16" />
              </div>
              {!play ? (
                <div
                  onClick={() => setPlay(true)}
                  className="relative cursor-pointer group">
                  <img
                    src="https://img.youtube.com/vi/S3-yIpFaS9g/maxresdefault.jpg"
                    className="w-full h-44 sm:h-64 md:h-120 object-cover"
                    alt="Generative AI course preview" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-black/10 group-hover:from-black/50 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-3 pl-4 pr-5 py-2.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/18 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                        <Play
                          fill="currentColor"
                          className="w-3.5 h-3.5 text-[#080808] translate-x-px"/>
                      </div>
                      <span className="text-white text-[13px] font-medium">
                        Watch Preview
                      </span>
                    </div>
                  </div>
                </div>
                ) : (
                <div className="relative">
                  <button
                    onClick={() => setPlay(false)}
                    className="
                    absolute top-3 right-3 z-20
                    w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm
                    flex items-center justify-center text-white
                    border border-white/10
                    hover:bg-black/90 transition cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                  <iframe
                    src="https://www.youtube.com/embed/S3-yIpFaS9g?autoplay=1"
                    className="w-full h-44 sm:h-64 md:h-120"
                    allow="autoplay"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
