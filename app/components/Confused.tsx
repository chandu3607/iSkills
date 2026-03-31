"use client";

import { MoveRight } from "lucide-react";

type CardProps = {
  className?: string;
};

const chips = [
  { label: "AI", letter: "A" },
  { label: "Full Stack", letter: "B" },
  { label: "Data Analytics", letter: "C" },
  { label: "Data Science", letter: "D" },
];

const Card: React.FC<CardProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[248px] p-5 rounded-[30px]
      bg-[url('https://media.iquanta.in/ui_images/skills/inttrest-card-png.png')]
      backdrop-blur-[4.7px] border-2 border-[#9c9c9c]
      ${className}`}
    >
      <h5
        className="text-[17px] italic font-extrabold mb-3
        bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
        bg-clip-text text-transparent"
      >
        What are you <br /> Interested in?
      </h5>

      <div className="grid gap-1.5">
        {chips.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-2 py-1 rounded-[10px]
            border-2 border-[#5A5257] bg-[#0B0D10]
            shadow-[0_5px_12px_rgba(0,0,0,0.7)]
            hover:bg-[linear-gradient(90deg,#727272,#B8B8B8)]
            cursor-pointer transition"
          >
            <span
              className="w-6 h-6 text-[11px] flex items-center justify-center
              rounded-md border border-[#5A5257] bg-[#2F2B2A] text-white"
            >
              {c.letter}
            </span>

            <h6
              className="text-[12px]
              bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
              bg-clip-text text-transparent"
            >
              {c.label}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Confused() {
  return (
    <section className="bg-black py-20 relative ">

      <div className="max-w-7xl mx-auto relative">

        {/* LEFT FLOATING CARDS */}
        <div className="absolute left-0 top-0 w-125 h-125">

          <Card className="top-15 opacity-60 blur-[2px]" />
          <Card className="left-[250px] top-[0px] opacity-60 blur-[2px]" />
          <Card className="left-[120px] top-[130px] opacity-60 blur-[2px]" />
          <Card className="left-[250px] top-40" />
          <Card className="left-[-790px] top-[-110px] opacity-60 blur-[2px]" />
          <Card className="left-[-66px] bottom-[-120px] opacity-80 blur-[2px]" />

        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center relative z-10">
          <div className="relative">

            {/* GLOW */}
            <div
              className="absolute w-[800px] h-[300px]
              bg-[linear-gradient(271deg,#ff6a00,rgba(255,255,255,0.54),transparent)]
              blur-[100px] opacity-50 left-[-180px] top-[170px]"
            />

            <img
              src="https://media.iquanta.in/ui_images/skills/confuse-img.webp"
              className="w-[400px]"
            />

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="absolute right-0 top-[130px] max-w-[400px]">

          {/* ROTATED TEXT */}
          <h2
            className="absolute text-[130px] font-bold 
            bg-[linear-gradient(338deg,#FEB5BA,#D5B1FD,#C3FFBE)]
            bg-clip-text text-transparent
            rotate-[-90deg] left-[-210px] top-[-240px]"
          >
            Still
          </h2>

          {/* MAIN TEXT */}
          <h3
            className="text-[120px] opacity-70 
            bg-[linear-gradient(90deg,#FEB5BA,#D5B1FD,#C3FFBE)]
            bg-clip-text text-transparent mb-2"
          >
            Confused?
          </h3>

          <p className="text-white text-[18px] leading-[25px] mb-6 pr-[100px]">
            Unsure of where to start? Just connect with our expert counselors
            and get your detailed roadmap to success
          </p>

          <button
            className="px-8 py-4 rounded-full text-[16px]
            bg-[linear-gradient(90deg,#ECECEC,#898989)]
            text-black flex items-center gap-2 shadow-md hover:shadow-lg transition"
          >
            Free Career Counselling
            <MoveRight size={16} />
          </button>

        </div>

      </div>

    </section>
  );
}