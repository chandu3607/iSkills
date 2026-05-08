"use client";
import React from "react";
import { useState } from "react";

const data = [
  {
    title: "The Smooth Operators",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Operations",
    image: "https://media.iquanta.in/ui_images/new-home/Journey-1.png",
  },
  {
    title: "The Virality Team",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Academic",
    image: "https://media.iquanta.in/ui_images/new-home/Journey-2.jpg",
  },
  {
    title: "The Virality Team",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Marketing",
    image: "https://media.iquanta.in/ui_images/new-home/Journey-3.jpg",
  },
  {
    title: "The Product Playground",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Product",
    image: "https://media.iquanta.in/ui_images/new-home/Journey-4.jpg",
  },
  {
    title: "The Bug Hunters",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "TECH",
    image: "https://media.iquanta.in/ui_images/new-home/Journey-5.jpg",
  },
  {
    title: "The Rapid Response Unit",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Founder’s Office",
    image: "https://media.iquanta.in/ui_images/new-home/Journey-1.png",
  },
];

export default function IquantaJourney() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="bg-white md:pb-14 pb-10">
      <div className="mx-auto mb-10 text-center">
        <span className="md:text-[10px] text-[9px] uppercase tracking-[1px] px-3 py-1 rounded-full text-black border border-black/20 mb-2 inline-block">
          Trusted by 50,000+ Students
        </span>
        <h2 className="text-black font-medium md:text-[60px] text-[34px] md:leading-[60px] leading-[38px] mb-3">
          Journey of iQuanta
        </h2>
        <p className="text-black md:text-md text-sm px-2">
          Numbers that reflect our mentorship impact and student success.
        </p>
      </div>
      <div
        className="flex gap-3 md:gap-1 bg-white 
        overflow-x-auto md:overflow-hidden px-3 md:px-0 "
         style={{
            scrollbarWidth: "none",
            scrollbarColor: "#EFD4CB #1a1a1a",
          }}
        onMouseLeave={() => setActive(0)}>
        {data.map((item, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)} 
              className={`
              relative h-[210px] md:h-[460px] rounded-[10px] overflow-hidden cursor-pointer
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              md:basis-0 md:min-w-0
              ${isActive ? "md:grow-3" : "md:grow"}
                min-w-[300px] shrink-0`}>
              <img
                src={item.image}
                alt={item.title}
                className={`
                object-cover h-full w-full transition-transform duration-700 ease-out
                ${isActive ? "scale-105" : "scale-100"}`} />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest px-3 py-1 rounded-full bg-black/70 text-white">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 m-6">
                <h3
                  className={`
                  text-white font-semibold transition-all duration-300
                  ${isActive ? "text-base md:text-3xl opacity-100" : "text-md leading-5 opacity-80"}
                  line-clamp-2`}>
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className={`
                  text-white/70 text-sm mt-1 transition-opacity duration-300
                   md:${isActive ? "opacity-100" : "opacity-0 md:h-0 md:overflow-hidden"}`}>
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
        <div className="block md:hidden text-center text-black/60 mt-3">
          <p className=" text-[10px] flex font-semibold items-center justify-center gap-2">
            <span className="">←</span>
            <span>Swipe to see more </span>
            <span className="">→</span>
          </p>
        </div>
    </div>
  );
}
