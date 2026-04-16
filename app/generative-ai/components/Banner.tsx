"use client";
import ContactModal from "@/app/components/ContactModal";
import { MoveRight, Play, X } from "lucide-react";
import { useState } from "react";
import React from "react";

export default function Banner() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <>
      <section className="relative bg-[#080808] overflow-hidden min-h-screen flex flex-col items-center justify-center pt-28 pb-16">

        {/* Background — two soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(104,63,190,0.14),transparent_65%)] blur-3xl" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(38,184,132,0.07),transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">

          {/* Eyebrow */}
          <div className="flex justify-center mb-7">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.09] text-[12px] tracking-widest uppercase text-[#606070] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26B884] animate-pulse" />
              Live Classes &nbsp;·&nbsp; 10+ Projects &nbsp;·&nbsp; 8 Months
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-[42px] sm:text-[58px] md:text-[76px] font-extrabold leading-[1.05] tracking-[-0.04em]">
              <span className="text-white">Generative</span>
              <br />
              <span
                className="relative inline-block bg-[linear-gradient(135deg,#a78bfa_0%,#34d399_100%)] bg-clip-text text-transparent"
              >
                Artificial Intelligence
              </span>
            </h1>

            {/* Accent line */}
            <div className="mt-5 mx-auto w-20 h-[2px] rounded-full bg-[linear-gradient(90deg,#683FBE,#26B884)]" />
          </div>

          {/* Subtitle */}
          <p className="text-center text-[15px] sm:text-[16px] text-[#4e4e5e] max-w-md mx-auto leading-relaxed mb-10">
            Master LLMs, prompt engineering, RAG pipelines, and deploy
            production-grade AI — start to finish.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3.5 mb-14">
            <button
              onClick={() => setIsContactOpen(true)}
              className="
                group relative overflow-hidden
                px-8 py-3 text-[14px] font-semibold text-white rounded-full
                bg-[linear-gradient(135deg,#683FBE,#26B884)]
                hover:opacity-90 active:scale-[0.98]
                transition-all duration-200
                flex items-center justify-center gap-2 cursor-pointer
                shadow-[0_4px_24px_rgba(104,63,190,0.35)]
              "
            >
              Enquire Now
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("Courses");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="
                px-8 py-3 text-[14px] font-medium text-[#7a7a8a] rounded-full
                border border-white/[0.1] bg-white/[0.03]
                hover:text-white hover:bg-white/[0.06] hover:border-white/[0.18]
                transition-all duration-200
                flex items-center justify-center gap-2 cursor-pointer
              "
            >
              View Training Options
              <MoveRight className="w-4 h-4" />
            </button>
          </div>

          {/* Video Card */}
          <div className="relative max-w-[720px] mx-auto">
            {/* Glow ring */}
            <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(135deg,rgba(104,63,190,0.5),rgba(38,184,132,0.5))] opacity-0 group-hover:opacity-100 blur-sm" />

            {/* Outer border gradient */}
            <div className="p-[1px] rounded-2xl bg-[linear-gradient(135deg,rgba(104,63,190,0.35),rgba(38,184,132,0.25))]">
              <div className="rounded-2xl overflow-hidden bg-[#0d0d10] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">

                {/* Card header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28ca42]" />
                  </div>
                  <span className="text-[11px] text-[#333340] font-medium tracking-wide">
                    Course Preview
                  </span>
                  <div className="w-16" />
                </div>

                {/* Video area */}
                {!play ? (
                  <div
                    onClick={() => setPlay(true)}
                    className="relative cursor-pointer group"
                  >
                    <img
                      src="https://img.youtube.com/vi/l_hS9GeGnYU/maxresdefault.jpg"
                      className="w-full h-44 sm:h-64 md:h-[340px] object-cover"
                      alt="Generative AI course preview"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 group-hover:from-black/50 transition-all duration-300" />

                    {/* Play pill */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-3 pl-4 pr-5 py-2.5 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/20 group-hover:bg-white/[0.18] transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                          <Play fill="currentColor" className="w-3.5 h-3.5 text-[#080808] translate-x-px" />
                        </div>
                        <span className="text-white text-[13px] font-medium">Watch Preview</span>
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
                        hover:bg-black/90 transition cursor-pointer
                      "
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/l_hS9GeGnYU?autoplay=1&mute=0&rel=0"
                      className="w-full h-44 sm:h-64 md:h-[340px]"
                      allow="autoplay"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      <ContactModal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
