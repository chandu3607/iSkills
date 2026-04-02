"use client";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";
type CardProps = {
  className?: string;
};
const chips = [
  { label: "AI", letter: "A", href: "/ai-course" },
  { label: "Full Stack", letter: "B", href: "/full-stack" },
  { label: "Data Analytics", letter: "C", href: "/data-analytics" },
  { label: "Data Science", letter: "D", href: "/data-science" },
];
const Card: React.FC<CardProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-62 p-5 rounded-[30px]
      bg-[url('https://media.iquanta.in/ui_images/skills/inttrest-card-png.png')]
      backdrop-blur-[4.7px] border-2 border-[#9c9c9c] bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      ${className}`}>
      <h5
        className="text-[14px] italic font-extrabold mb-3
        bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
        bg-clip-text text-transparent"
      >
        What are you <br /> Interested in?
      </h5>
      <div className="grid gap-1.5">
        {chips.map((chip, i) => (
          <Link key={i} href={chip.href}>
            <div
              className="
              flex items-center gap-2 px-1 py-1 rounded-[10px]
              border-2 border-[#5A5257] bg-[#0B0D10]
              shadow-[0_5px_12px_rgba(0,0,0,0.7)]
              hover:bg-[linear-gradient(90deg,#727272,#B8B8B8)]
              cursor-pointer transition-all duration-200
              group">
              <span
                className="w-6 h-6 text-[10px] font-semibold flex items-center justify-center
               rounded-md border border-[#5A5257] bg-[#2F2B2A] text-white">
                {chip.letter}
              </span>
              <h6
                className="text-[10px] font-semibold
                  bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
                  bg-clip-text text-transparent">
                {chip.label}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Confused() {
    const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <section className="bg-black md:py-20 py-6 relative ">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute md:absolute left-0 top-0 w-full md:w-125 h-auto md:h-125 z-99">
            <div className="hidden md:block">
              <Card className="top-45 -left-57.5 opacity-60 blur-xs transition-all duration-600 hover:opacity-100 hover:blur-none" />
              <Card className="left-10 top-9 opacity-60 blur-xs transition-all duration-600 hover:opacity-100 hover:blur-none z-10" />
              <Card className="left-77.5 -top-1 opacity-60 blur-xs transition-all duration-600 hover:opacity-100 hover:blur-none z-10 " />
              <Card className="left-77.5 top-69 transition-all duration-600 hover:opacity-100 hover:blur-none z-10 " />
              <Card className="left-127.5 top-86 opacity-60 blur-xs transition-all duration-600 hover:opacity-100 hover:blur-none z-10" />
              <Card className="left-10 -bottom-19 opacity-60 blur-xs transition-all duration-600 hover:opacity-100 hover:blur-none z-10 " />
            </div>
          </div>
          <div className="flex justify-center relative z-10 ">
            <div className="relative">
              <div
                className="absolute w-62.5 md:w-200 h-37.5 md:h-75
                bg-[linear-gradient(271deg,#ff6a00,rgba(255,255,255,0.54),transparent)]
                blur-[60px] md:blur-[100px] opacity-50 -left-45 top-42.5" />
              <img
                src="https://media.iquanta.in/ui_images/skills/confuse-img.webp"
                className="w-55 md:w-100"
              />
            </div>
          </div>
          <div className="relative md:absolute md:-right-22.5 md:top-60 max-w-127.5 z-10 text-center md:text-left">
            <h2
              className="hidden md:block absolute text-[100px] font-bold 
            bg-[linear-gradient(338deg,#FEB5BA,#D5B1FD,#C3FFBE)]
            bg-clip-text text-transparent
            -rotate-90 -left-17.5 -top-42.5">
              Still
            </h2>
            <h3
              className="text-[36px] md:text-[80px] opacity-70 font-bold
              bg-[linear-gradient(90deg,#FEB5BA,#D5B1FD,#C3FFBE)]
              bg-clip-text text-transparent mb-2">
              Confused?
            </h3>
            <p className="text-white text-[14px] md:text-[18px] leading-6 md:leading-6.25 mb-6 px-2 md:px-0 md:pr-25">
              Unsure of where to start? Just connect with our expert counselors
              and get your detailed roadmap to success
            </p>
            <button
            onClick={() => setIsContactOpen(true)}
              className="px-6 py-3 rounded-full text-[14px] cursor-pointer
              bg-[linear-gradient(90deg,#ECECEC,#898989)]
              text-black flex items-center justify-center md:justify-start gap-2 shadow-md hover:shadow-lg transition mx-auto md:mx-0">
              Free Career Counselling
              <MoveRight size={16} />
            </button>
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
