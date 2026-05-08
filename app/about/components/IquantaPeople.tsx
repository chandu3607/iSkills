"use client";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    title: "The Mentors Table",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Faculty",
    image: "https://media.iquanta.in/ui_images/new-home/Faculty.webp",
  },
  {
    title: "The Virality Team",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Marketing",
    image: "https://media.iquanta.in/ui_images/new-home/Marketing.webp",
  },
  {
    title: "The Product Playground",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Product",
    image: "https://media.iquanta.in/ui_images/new-home/Product-Manager.webp",
  },
  {
    title: "The Smooth Operators",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "HR & Operators",
    image: "https://media.iquanta.in/ui_images/new-home/HR-Operations.webp",
  },
  {
    title: "The Bug Hunters",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "TECH",
    image: "https://media.iquanta.in/ui_images/new-home/Tech.webp",
  },
  {
    title: "Sales-o-Saurus",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Sales",
    image: "https://media.iquanta.in/ui_images/new-home/Sales.webp",
  },
  {
    title: "Pixels & Frames",
    subtitle: "Reached our first major milestone with systematic growth",
    category: "Creative",
    image: "https://media.iquanta.in/ui_images/new-home/The-Boys.webp",
  },
];

export default function IquantaPeople() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="bg-white md:pb-14 pb-10">
      <div className="mx-auto mb-10 text-center">
        <span className="md:text-[10px] text-[9px] uppercase tracking-[1px] px-3 py-1 rounded-full text-black border border-black/20 mb-2 inline-block">
          Trusted by 50,000+ Students
        </span>
        <h2 className="text-black font-medium md:text-[60px] text-[38px] md:leading-[60px] leading-[46px] mb-3">
         Meet The Team Behind iQuanta
        </h2>
        <p className="text-black md:text-md px-2 text-sm">
A team plays an indispensable role when it is about creation, thinking of new innovative ideas, collaborations and more to define success and growth. 
        </p>
      </div>
      <div
        className="flex gap-3 md:gap-1 bg-white 
       overflow-x-auto md:overflow-hidden px-3 md:px-0"
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
              relative aspect-1092/1058 h-auto md:aspect-auto md:h-[460px] md:min-h-[460px] rounded-[10px] overflow-hidden cursor-pointer
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#202020]
              md:basis-0 md:min-w-0 ${isActive ? "md:grow-3" : "md:grow"}
              w-[min(300px,calc(100vw-24px))] min-w-[min(300px,calc(100vw-24px))] md:w-auto shrink-0 `} >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 35vw, 300px"
                className="object-cover transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] tracking-widest px-3 py-1 rounded-full bg-black/70 text-white">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 md:hidden">
                <h3 className="text-white font-black text-[18px] leading-tight">
                  {item.title}
                </h3>
               
              </div>
              <div className="absolute inset-0 hidden md:flex items-end justify-start pl-8">
                {!isActive && (
                  <h3 className="text-white font-black text-[22px] -rotate-90 origin-left whitespace-nowrap transition-all duration-500">
                    {item.title}
                  </h3>
                )}
              </div>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 m-6 hidden md:block ">
                  <h3 className="text-white font-black md:text-[32px] text-[22px]">
                    {item.title}
                  </h3>
                  {/* {item.subtitle && (
                    <p className="text-white/70 text-sm mt-1">
                      {item.subtitle}
                    </p>
                  )} */}
                </div>
              )}
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
