"use client";
import React from "react";
import Ballpit from "../components/Ballpit";
import Headder from "../components/Headder";
import HeroVideo from "../components/HeroVideo";
import { Loader, MoveRight, Sparkles, TrendingUp } from "lucide-react";

export default function page() {
  return (
    <>
      <Headder />
      <div
        className=" rounded-4xl h-screen  "
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          background: "#000",
        }}
      >
        <Ballpit
          minSize={0.3}
          maxSize={1}
          count={120}
          gravity={0.1}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={[0x0a0a2e, 0x4444cc, 0x6655dd, 0x888899, 0xccccdd, 0xffffff]}
          materialParams={{
            metalness: 0.1,
            roughness: 0.3,
            clearcoat: 1,
            clearcoatRoughness: 0.4,
          }}
        />

        <div className=" absolute text-center max-w-6xl w-full mx-auto px-6 left-0 right-0 top-1/2 -translate-y-1/2">
          <p
            className="
              inline-flex items-center gap-2
              mx-auto w-fit
              px-4 py-1.5
              rounded-full
              text-white/70 text-[11px] md:text-xs
              font-medium tracking-widest  mb-6
              bg-white/6
              border border-white/10
              backdrop-blur-md
              shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
            "
          >
            <Loader className="w-3.5 h-3.5 text-[#ff9000]" />
            2x Your Salary with
          </p>
          <h1
            className="text-white font-black uppercase md:leading-23.5 leading-12
            text-[38px] md:text-[72px] lg:text-[84px]"
          >
            Online Coding <br className="hidden md:block" />
            Courses by{" "}
            <span
              className="lowercase text-[#ff9000]"
              style={{ filter: "drop-shadow(0 0 24px rgba(255,144,3,0.55))" }}
            >
              i
            </span>
            Skills
          </h1>
          <div className="w-16 h-px mx-auto my-4 bg-linear-to-r from-transparent via-[#ff9003] to-transparent" />
          <div className="max-w-180 mx-auto px-2 md:px-16">
            <p className="text-white/50 text-[15px] md:text-[17px] leading-relaxed font-light">
              Enhance your career and salary in 6 months with the best online
              coding courses. Get trained in updated curriculums by expert
              mentors.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-9"
              style={{ isolation: "isolate" }}
            >
              <button
                className=" flex items-center justify-center  gap-2.5 px-8 py-3 rounded-full text-[#111] text-[15px] md:text-[16px] font-medium
                bg-linear-to-r from-gray-200 to-gray-400
                shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.7)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                transition-all duration-200 cursor-pointer"
              >
                Explore programs <MoveRight className="w-4 h-4" />
              </button>
              <button
                className="
                  flex items-center justify-center gap-2.5
                  px-8 py-3
                  rounded-[50px]
                  text-[12px] md:text-[16px] font-medium
                  text-white/50
              bg-[linear-gradient(90deg,rgba(236,236,236,0.06)_0%,rgba(137,137,137,0.06)_100%)]
                  border border-white/10
                  backdrop-blur-xl
                  cursor-pointer
                  transition-all duration-200
                  hover:bg-white/10
                  hover:border-white/20
                  hover:text-white
                  hover:-translate-y-0.5
                "
              >
                Free counseling <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
