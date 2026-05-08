"use client";
import { Play, X } from "lucide-react";
import React from "react";
import { useState } from "react";

export default function AboutIquanta() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white md:py-14 py-10" id="iQuantaAbout">
      <div className="max-w-368 mx-auto md:px-22 px-4">
        <div className="grid md:grid-cols-12 gap-10 items-center ">
          <div className="md:col-span-7">
            <div className=" relative ">
              <div className="md:h-[600px] md:[clip-path:polygon(20%_0%,100%_0,87%_51%,100%_100%,20%_100%,0_100%,0_0)]">
                <img
                  src="https://media.iquanta.in/ui_images/public_portal_img/aboutusgrp.webp"
                  alt="iQuanta toppers Meet"
                  className="w-auto h-full object-cover"
                />
              </div>
              <div
                onClick={() => setOpen(true)}
                className="absolute md:w-[140px] w-20 md:h-[140px] h-20  flex items-center justify-center md:bottom-[210px] -bottom-10 right-2.5  rounded-full bg-white md:border-8 border-3 cursor-pointer border-white shadow-lg
                md:before:content-[''] md:before:absolute md:before:w-0.5 md:before:h-50 md:before:rotate-18 md:before:bg-[#FF9000] md:before:-top-52 md:before:right-1 md:before:-translate-x-1/2
                md:after:content-[''] md:after:absolute md:after:w-0.5 md:after:h-50 md:after:bg-[#FF9000] md:after:-rotate-18 md:after:-bottom-52 md:after:-right-1  md:after:-translate-x-1/2">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="#1f2937" fontSize="13" letterSpacing="4">
                    <textPath href="#circlePath" startOffset="0%">
                      IQUANTA STUDENT MEET IQUANTA STUDENT MEET
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-full h-full rounded-full md:border-2 border border-[#FF9000]"></div>
                <div className="md:w-[70px] md:h-[70px] w-10 h-10 rounded-full bg-[#FF9000] flex items-center justify-center shadow-lg">
                  <Play fill="currentcolor" className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="">
              {/* <span className="md:text-[10px] text-[9px] uppercase tracking-[1px] px-3 py-1 rounded-full text-black border border-black/20 md:mb-4 mb-4 inline-block">
                Trusted by 50,000+ Students
              </span> */}
              <h2 className="text-black font-light md:text-[60px] text-[38px] md:leading-[60px] leading-[38px] mb-4">
                About iQuanta
              </h2>
              <h3 className="text-black font-semibold md:text-[18px] text-[14px] md:leading-6 leading-5 mb-4">
                India’s No.1 CAT Online Coaching
              </h3>
              <p className="text-black text-sm leading-6 mb-2">
               iQuanta is widely recognized as the best CAT online coaching in India and has the largest prep community, with 4 lakh+ members. What began small is now a focused learning space. With 580+ students scoring 99+%ile in CAT 2025, it has become a trusted platform for aspirants.
              </p>
              <p className="text-black text-sm leading-6 mb-2">
               But how is it different? It offers a dual-teaching methodology (conceptual + application) and personalised mentorship. iQuanta didn’t just compete with traditional offline coaching; instead, it challenged it by creating a result-driven online learning model which brings everything in one place, from concept clarity to quick mentorship. It is just one click away for learners who want to prepare from the comfort of their home.
              </p>
              <p className="text-black leading-6 text-sm">
               The journey began with its founder, Indrajeet Singh. He wanted to help students, especially those weak in Mathematics and Logical Reasoning. What began as guidance grew into something much bigger. In just a few years, iQuanta achieved results that many institutes take decades to achieve. The platform didn’t just expand; it evolved. It proved that online learning can deliver outstanding results. It’s still growing and is here to stay. It will help more students achieve their dream B-schools.
              </p>
              <p className="text-black leading-6 text-sm">iQuanta isn’t limited to just one exam. It now covers XAT, NMAT, SNAP, GMAT, IPMAT and many more. It will continue to grow across multiple verticals and reach more aspirants every year to ease their preparation. It is not just a coaching platform. It’s a space where students also support each other.
</p>
            </div>
          </div>
        </div>
      </div>
      {open && (
      <div
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/80 backdrop-blur-2xl"
      onClick={() => setOpen(false)} >
      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-white/5 " />
      <div
        className="relative w-[92%] md:w-[850px] aspect-video 
        rounded-2xl overflow-hidden 
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        border border-white/10
        bg-black/60 backdrop-blur-xl
        animate-[fadeInScale_.35s_ease]"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-3 right-3 z-50
            w-9 h-9 flex items-center justify-center
            rounded-full bg-white/10 backdrop-blur-md
            text-white hover:bg-white/20
            transition-all duration-300 hover:rotate-90">
          <X size={18} />
        </button>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/a0wbzWPBIJI?autoplay=1&rel=0"
          title="Video"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
      )}
    </div>
  );
}
