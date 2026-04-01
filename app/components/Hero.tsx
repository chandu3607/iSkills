"use client";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
   const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
    <section className="relative bg-[#080808] overflow-hidden  md:min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://media.iquanta.in/ui_images/skills/banner-bg.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
        <div className="hidden md:block absolute ointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%] opacity-30 ">
        <img
          src="https://media.iquanta.in/ui_images/skills/flower.gif"
          className="w-full h-auto"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_20%,#080808_100%)] pointer-events-none" />
      <div
        className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-[62%]
        w-225 h-75 rounded-full blur-[80px] opacity-10
       bg-[linear-gradient(92deg,#00efff,#ff6b00)]"
      />
    
      <div
        className="relative z-10 text-center max-w-6xl w-full mx-auto px-6
        pt-30 pb-10 md:pt-45 md:pb-10">
        <p className="text-white/60 font-light tracking-widest uppercase text-sm md:text-base mb-5 font-[Inter,sans-serif]">
          2x Your Salary with
        </p>
        <h1
          className="text-white font-black uppercase md:leading-23.5 leading-12
            text-[38px] md:text-[72px] lg:text-[84px]"
          style={{ fontFamily: "Saira Stencil One, sans-serif" }}>
          Online Coding <br className="hidden md:block" />
          Courses by{" "}
          <span
            className="lowercase text-[#ff9000]"
            style={{ filter: "drop-shadow(0 0 24px rgba(255,144,3,0.55))" }} >
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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">
            <button
             onClick={() => {
                const el = document.getElementById("Learning");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className=" flex items-center justify-center  gap-2.5 px-8 py-3 rounded-full text-[#111] text-[15px] md:text-[16px] font-medium
                bg-linear-to-r from-gray-200 to-gray-400
                shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.7)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                transition-all duration-200 cursor-pointer"
            >
              Explore programs <MoveRight className="w-4 h-4" />
            </button>
            <button
            onClick={() => setIsContactOpen(true)}
              className="flex items-center justify-center  gap-2.5 px-8 py-3 rounded-full text-[#FFB056] text-[15px] md:text-[16px] font-light
                border border-[#FFB056]/50 bg-transparent
                hover:bg-[#FFB056]/10 hover:border-[#FFB056]
               
                hover:-translate-y-0.5
                transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              Free counseling <MoveRight className="w-4 h-4" />
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
