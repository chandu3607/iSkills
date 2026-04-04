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
      <section className="relative bg-[#080808] overflow-hidden md:min-h-screen flex items-center justify-center pt-25 pb-12 md:pt-20 md:pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center md:mb-7.5 mb-5">
            <h1
              className="
            text-[34px] sm:text-[48px] md:text-[68px]
            font-bold leading-tight tracking-tight
            bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)]
            bg-clip-text text-transparent z-10"
            >
              Generative AI 
            </h1>
          </div>
          <div className="relative md:mt-10 mt-6">
            <div
              className="
              absolute left-1/2 -translate-x-1/2 
              -top-10 md:-top-13.75
              w-62.5 sm:w-100 md:w-130.5 
              h-30 md:h-50
              bg-[linear-gradient(92deg,#00efff,#ff6b00)]
              blur-[60px] opacity-90 rounded-full"
            />
            <div className="relative w-full md:w-145 mx-auto">
              <div
                className="absolute inset-0 rounded-2xl 
                bg-[linear-gradient(90deg,#00efff,#ff6b00)]
                blur-[20px] opacity-30"
              />
              <div className="relative w-full md:max-w-145 max-w-full mx-auto">
                {!play ? (
                  <div
                    onClick={() => setPlay(true)}
                    className="relative cursor-pointer group"
                  >
                    <img
                      src="https://img.youtube.com/vi/l_hS9GeGnYU/maxresdefault.jpg"
                      className="w-full h-50 sm:h-75 md:h-78.75 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <span
                          className="
                        absolute w-10 h-10 md:w-13 md:h-13 rounded-full
                        bg-[#FEC22E]
                        opacity-60
                        animate-ping
                        "
                        ></span>
                        <div
                          className="
                          relative z-10
                          w-10 h-10 md:w-13 md:h-13 rounded-full
                          bg-[linear-gradient(248deg,#FEC22E_23.04%,#D8950E_72.85%)]
                          flex items-center justify-center
                          group-hover:scale-110 transition "
                        >
                          <Play
                            fill="currentColor"
                            className="w-4 h-4 md:w-5 md:h-5 text-white "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setPlay(false)}
                      className="
                      absolute top-2 right-2 z-20
                      bg-[linear-gradient(248deg,#FEC22E_23.04%,#D8950E_72.85%)] hover:bg-black
                      text-white rounded-full p-2 cursor-pointer
                      transition
                      "
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/l_hS9GeGnYU?autoplay=1&mute=0&rel=0"
                      className="w-full h-50 sm:h-75 md:h-78.75 rounded-xl border border-white/10"
                      allow="autoplay"
                    />
                  </div>
                )}
              </div>

              {/* Decorative Images (hidden on mobile for clean UI) */}
              <div className="hidden md:block absolute -left-45 -top-13 w-47.5 z-10">
                <img src="https://media.iquanta.in/ui_images/skills/vedio-layer-left.png" />
              </div>
              <div className="hidden md:block absolute -right-45.5 -top-13.5 w-58.5 z-10">
                <img src="https://media.iquanta.in/ui_images/skills/vedio-layer-right.png" />
              </div>
            </div>
          </div>

          <div className="mt-6.25 text-center">
            <ul
              className="
                flex flex-wrap justify-center items-center 
                gap-2 sm:gap-5 
                text-[#A6A6AE] text-[14px] sm:text-[16px]
              "
            >
              <li>
                <span className="text-white">Mode:</span> Live Classes
              </li>
              <span className="opacity-40 hidden sm:inline">|</span>
              <li>
                <span className="text-white">Live Projects:</span> 10+
              </li>
              <span className="opacity-40 hidden sm:inline">|</span>
              <li>
                <span className="text-white">Duration:</span> 8 Months
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7.5">
              <button
                onClick={() => setIsContactOpen(true)}
                className="
              px-6 sm:px-7.5 py-2.5 text-[14px] text-white rounded-full
              bg-[linear-gradient(137deg,#683FBE_0%,#26B884_89.86%)]
              shadow-[rgb(42,176,137)_-23px_19px_42px_-11px]
              hover:scale-105 hover:shadow-[0_10px_30px_rgba(38,184,132,0.5)]
              transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
              "
              >
                Enquire Now <MoveRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("Courses");
                  if (el) {
                    const y =
                      el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="
              px-6 sm:px-7.5 py-2.5 text-[14px] text-white rounded-full
              border border-[#26B884]
              bg-[linear-gradient(137deg,#683fbe24_0%,#26b8842e_89.86%)]
              hover:scale-105 hover:border-[#4fffb0]
              transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
              "
              >
                View Training Options <MoveRight className="w-4 h-4" />
              </button>
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
