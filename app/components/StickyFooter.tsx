"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  "benefits",
  "contact",
  "vsothers",
  "features",
  "skills",
  "community",
  "expects",
  "roadmap",
  "Curriculum",
  "Courses",
];

const labels: Record<string, string> = {
  benefits: "Course Benefits",
  contact: "Get in touch",
  vsothers: "Course Comparison",
  features: "Course features",
  skills: "Topics to Master",
  community: "Community",
  expects: "Mentors",
  roadmap: "Roadmap",
  Curriculum: "Curriculum",
  Courses: "Buy Now",
};

export default function StickyFooter() {
  const [activeTab, setActiveTab] = useState("");
  const containerRef = useRef<HTMLUListElement>(null);
  const goToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const top = element.offsetTop - offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < 120 && rect.top > 0) {
          current = id;
        }
      });
      if (current) setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const activeEl = document.getElementById(`tab-${activeTab}`);
        if (activeEl && containerRef.current) {
        activeEl.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
        }
    }, [activeTab]);

    return (
    <div className="fixed bottom-0.5 left-1/2 -translate-x-1/2  z-999 hidden md:block">
     <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-full px-3 py-2">
    <ul
      ref={containerRef}
      className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar">
      {sections.map((item) => (
        <li key={item}>
          <button
            id={`tab-${item}`}
            onClick={() => goToSection(item)}
            className={`
              relative whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium cursor-pointer
              transition-all duration-300 ease-out
              ${activeTab === item
                ? "text-white"
                : "text-white"
              }
              ${item === "Courses"
                ? "bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-lg "
                : ""
              }
            `}>
            {activeTab === item && item !== "Courses" && (
              <span className="absolute inset-0 bg-[linear-gradient(90deg,#683FBE_0%,#EF7D6E_100%)]  rounded-full -z-10 transition-all duration-300"></span>
            )}
            <span className="relative z-10">{labels[item]}</span>
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>
    );
}