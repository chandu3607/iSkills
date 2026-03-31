"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Professional() {
  const [active, setActive] = useState("all");

  const tabs = [
    {
      id: "all",
      label: "All Programs",
      icon: "https://media.iquanta.in/ui_images/skills/tab-icon-3.svg",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "https://media.iquanta.in/ui_images/skills/tab-icon-3.svg",
    },
    {
      id: "dsa",
      label: "DSA & CP",
      icon: "https://media.iquanta.in/ui_images/skills/tab-icon-4.svg",
    },
    {
      id: "ai",
      label: "AI",
      icon: "https://media.iquanta.in/ui_images/skills/tab-icon-4.svg",
    },
    {
      id: "dev",
      label: "Software Development",
      icon: "https://media.iquanta.in/ui_images/skills/tab-icon-4.svg",
    },
    {
      id: "data",
      label: "Data Science",
      icon: "https://media.iquanta.in/ui_images/skills/tab-icon-4.svg",
    },
  ];

  const cards = [
    {
      title: "Data Analytics Mastery",
      img: "https://media.iquanta.in/ui_images/skills/data-1.gif",
      date: "8th December",
      category: "analytics",
      link: "/data-analytics",
    },
    {
      title: "DSA & CP",
      img: "https://media.iquanta.in/ui_images/skills/DSA-pattern.gif",
      date: "1st December",
      category: "dsa",
      link: "/dsa-cp",
    },
    {
      title: "Data Science Bootcamp",
      img: "https://media.iquanta.in/ui_images/skills/data.gif",
      date: "Launching Soon",
      category: "data",
      link: "/data-science",
    },
    {
      title: "Full Stack Web Development",
      img: "https://media.iquanta.in/ui_images/skills/full-web.gif",
      date: "Launching Soon",
      category: "dev",
      link: "/full-stack",
    },
  ];

  return (
    <section className="bg-black md:py-10 py-6 relative  overflow-hidden">
      <div className="absolute md:w-[950] w-[360] md:h-125 h-100 bg-[#3300FF] blur-[46px] rounded-full top-47.5 left-1/2 -translate-x-1/2 opacity-60" />
      <div className="text-center max-w-4xl mx-auto mb-10 px-4 relative z-10">
        <h2 className="  text-[26px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
          Choose from a Wide Range of Expert-Led Skill Courses
        </h2>
        <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-4">
          Become industry-ready with online coding courses led by expert mentors
          from top product companies.
        </p>
      </div>
      <div className="max-w-5xl md:mx-auto mx-3 mt-10 md:border-[3px] border-2 border-[rgba(209,209,209,0.25)] rounded-[28px] relative z-10">
        <div
          className="
          border-[5px] md:border-10 border-white/10 
          rounded-[26px] 
          bg-black/80 backdrop-blur-xl 
         flex flex-col md:flex-row
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
        "
        >
          <div
            className="
          md:w-75 w-full 
          bg-[#17181C]/80 backdrop-blur-xl 
          p-5 
          md:rounded-l-[20px] rounded-t-[20px]
          md:rounded-tr-none
          border-r border-white/5"
          >
            <h3 className="text-white md:text-[28px] text-[18px] leading-7 md:leading-10 font-black mb-4">
              Top In-Demand <br className="hidden md:block" /> Skills to Learn
            </h3>
            <div
              className="
              flex md:flex-col gap-3
              overflow-x-auto md:overflow-visible
              whitespace-nowrap
              [&::-webkit-scrollbar]:hidden
            "
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`group flex items-center gap-3 
          w-auto md:w-full shrink-0
          px-3 py-3 rounded-[10px] text-[14px] 
          transition-all duration-300 cursor-pointer
          
          ${
            active === tab.id
              ? "bg-[#232328] border border-[#B58E31] shadow-[0_0_12px_rgba(181,142,49,0.25)]"
              : "bg-[#0B0E12] border border-[#43415533] hover:bg-[#1a1b20]"
          }`}
                >
                  <img
                    src={tab.icon}
                    className="w-8 group-hover:scale-105 transition"
                  />
                  <span className="text-white group-hover:text-[#ffb056] transition whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className="
            flex-1 bg-[#0B0E12]/80 backdrop-blur-xl 
            md:rounded-r-2xl rounded-b-[20px]
            md:p-5 p-3
          "
          >
            <div className="grid md:grid-cols-2 gap-5">
              {cards
                .filter((card) => active === "all" || card.category === active)
                .map((card, i) => (
                  <div
                    key={i}
                    className="group relative p-[1.5px] rounded-2xl 
                  bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent)]
                  hover:bg-[linear-gradient(120deg,#ffb056,transparent)]
                  transition-all duration-300"
                  >
                    <div className="bg-black rounded-[14px] overflow-hidden border border-white/10 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition">
                      <div className="h-45 overflow-hidden relative">
                        <img
                          src={card.img}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                      </div>
                      <div className="flex p-3.5 bg-black">
                        <div className="w-[70%]">
                          <h3 className="text-white text-[14px] font-semibold mb-1 leading-snug">
                            {card.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px]">
                            <p className="text-gray-400">Live Batch Date:</p>
                            <span className="bg-[linear-gradient(93deg,#F3C481,#D98B1B)] bg-clip-text text-transparent font-semibold">
                              {card.date}
                            </span>
                          </div>
                        </div>
                        <div className="w-[30%] flex items-end justify-end">
                          <Link href={card.link}>
                            <button
                              className="group flex items-center gap-1 text-[10px] px-2 py-1.5 rounded-full 
                              bg-[linear-gradient(90deg,#ECECEC,#898989)]
                              shadow-[0_3px_10px_rgba(0,0,0,0.4)]
                              hover:shadow-[0_6px_18px_rgba(0,0,0,0.6)]
                              hover:-translate-y-px text-black
                              transition-all duration-300 cursor-pointer"
                            >
                              Get Started
                              <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
