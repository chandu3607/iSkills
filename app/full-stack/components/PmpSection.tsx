"use client";
import { MoveRight } from 'lucide-react'
import React from 'react'

export default function PmpSection() {
  return (
    <section className="relative bg-black md:py-16 py-8 overflow-hidden">
      <div className="absolute -top-17.5 left-0 right-0 mx-auto 
        w-237.5 h-95  rounded-full 
        bg-[#3300FF] blur-[90px] md:opacity-40 opacity-20" />
      <div className="absolute top-0 opacity-40 w-full">
        <img
          src="https://media.iquanta.in/ui_images/skills/banner-bg.png"
          className="w-full"
        />
      </div>
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-8 md:gap-16 items-center">
        <div className='md:col-span-7'>
          <h2 className="
            text-[22px] sm:text-[26px] md:text-[32px]
            font-bold leading-8 sm:leading-9 md:leading-11.25 mb-2.5
            bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)]
            bg-clip-text text-transparent
          ">
           Full Stack Engineering <br className='hidden md:block' /> certification program
          </h2>

          <h6 className="text-[#EDEEF1] text-[13px] sm:text-[14px] md:text-[15px] italic font-semibold leading-6 sm:leading-7 md:leading-8.75">
           No prior knowledge needed | End to End learning with projects 
          </h6>

          <p className="text-[#EDEEF1] text-[14px] sm:text-[15px] md:text-[16px] leading-6">
            Master full stack development to become a valuable resource ace frontend and backend technologies from scratch from basics to advance. 
          </p>

          <p className="text-[#EDEEF1] text-[14px] sm:text-[15px] md:text-[16px] leading-6">
           Build staggering completely functional websites and open the doors to lucrative career options.
          </p>

          {/* <p className="text-[#EDEEF1] text-[14px] sm:text-[15px] md:text-[16px] leading-6">
            In today's data-driven world, mastering data analytics training is essential. With applications across industries, a data analytics certification is key to career success.
          </p> */}

          {/* STATS */}
          <div className="
            mt-6.25 p-px rounded-[20px]
            bg-[linear-gradient(45deg,#7BC1D7,transparent)]
            w-full sm:w-fit
          ">
            <ul className="
              flex flex-wrap sm:flex-nowrap
              gap-5 sm:gap-7.5 px-4 sm:px-5 py-3
              bg-black rounded-[20px]
            ">
              <li className="text-start">
                <h6 className="text-[#27B884] text-[18px] sm:text-[20px] md:text-[22px] font-bold mb-1">
                  200+
                </h6>
                <p className="text-white text-[12px] sm:text-[13px] md:text-[14px]">
                  Hours of Live Sessions
                </p>
              </li>

              <li className="text-start">
                <h6 className="text-[#27B884] text-[18px] sm:text-[20px] md:text-[22px] font-bold mb-1">
                  12
                </h6>
                <p className="text-white text-[12px] sm:text-[13px] md:text-[14px]">
                  Hours daily doubt solving
                </p>
              </li>

              <li className="text-start">
                <h6 className="text-[#27B884] text-[18px] sm:text-[20px] md:text-[22px] font-bold mb-1">
                  Sat & Sun
                </h6>
                <p className="text-white text-[12px] sm:text-[13px] md:text-[14px]">
                  3PM to 5PM IST
                </p>
              </li>
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-7.5">
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
              w-full sm:w-auto
              px-6 sm:px-7.5 py-2.5 text-[14px] text-white rounded-full
              bg-[linear-gradient(137deg,#683FBE_0%,#26B884_89.86%)]
              shadow-[rgb(42,176,137)_-23px_19px_42px_-11px]
              flex justify-center items-center gap-2 cursor-pointer
            ">
              Apply Now  <MoveRight className="w-4 h-4" />
            </button>

            <button className="
              w-full sm:w-auto
              px-6 sm:px-7.5 py-2.5 text-[14px] text-white rounded-full
              bg-[#111] border border-white/20 flex justify-center items-center
            ">
              Start Date: 10th January 2025
            </button>
          </div>
        </div>
        <div className='md:col-span-5'>
          <div className="
            p-2.5 rounded-[30px_37px_30px_30px]
            border-[3px] border-white/20
            bg-[linear-gradient(134deg,#0C0C0E_6.48%,#141418_56.76%,#0C0C0E_96.26%)]
            relative ">
            <div className="
              p-0.75 rounded-3xl
              bg-[linear-gradient(134deg,rgba(255,255,255,0.54)_6.48%,#3e3e51_56.76%,#4f4f5d_96.26%)] ">

              <ul className="
                bg-black rounded-[20px] p-4 sm:p-5.75
                grid md:gap-3 gap-2
              ">
                {[
                  "Live sessions by industry experts",
                  "Build fully functional website | master frontend and backend technologies",
                  "Learn Ui/Ux like a pro",
                  "Become a certified Full stack Engineer",
                  "Invite multiple freelancing opportunities",
                  "Build mobile responsive sites ",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-white text-[14px] sm:text-[16px] md:text-[18px] leading-6 sm:leading-7.25">
                    <img
                      src="https://media.iquanta.in/ui_images/skills/arrow.svg"
                      className="md:w-4 w-3 md:h-4 h-3 mt-1"
                    />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="
        absolute left-80 right-0 top-0 bottom-0 m-auto
        w-152.5 h-112.5
        rounded-full blur-2xl
        bg-[linear-gradient(271deg,#FF9C54_35.86%,rgba(255,255,255,0.54)_52.65%,transparent_72.38%)]
        opacity-90" />
    </section>
  )
}
