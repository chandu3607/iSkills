"use client";
import { MoveRight, CheckCircle2 } from "lucide-react";
import React from "react";

const stats = [
  { value: "200+", label: "Live Session Hours" },
  { value: "12h", label: "Daily Doubt Solving" },
  { value: "Sat & Sun", label: "3 PM – 5 PM IST" },
];

const features = [
  "Live sessions by industry experts",
  "Real-time industry experience with domain-specific projects",
  "Job-ready across 6+ technologies",
  "Become a certified Data Analyst",
  "Build stunning visual dashboards from complex data",
  "Solve real-world business problems and use cases",
];

export default function PmpSection() {
  return (
    <section className="relative bg-[#080808] py-20 md:py-0 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(104,63,190,0.1),transparent_65%)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — Content */}
          <div>
            {/* Label */}
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#4a4a58] font-medium mb-4">
              About the Program
            </p>

            {/* Heading */}
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold leading-[1.15] tracking-[-0.02em] text-white mb-4">
              Data Analytics{" "}
              <span className="bg-[linear-gradient(135deg,#683FBE,#26B884)] bg-clip-text text-transparent">
                Certification Program
              </span>
            </h2>

            {/* Tagline */}
            <p className="text-[13px] text-[#4a4a58] italic mb-5 font-medium">
              No prior knowledge needed &nbsp;·&nbsp; Updated industry-oriented syllabus
            </p>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-[#52525e] leading-relaxed mb-3">
              Master data analytics and business intelligence from scratch.
              Deep dive into data and extract hidden insights to optimize
              and solve complex business problems.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#52525e] leading-relaxed mb-8">
              Leveraging analytics helps you make complex decisions
              effortlessly and drive real impact at scale.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 mb-9">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] min-w-[100px]"
                >
                  <span className="text-[20px] font-bold text-[#26B884] leading-none mb-1">
                    {s.value}
                  </span>
                  <span className="text-[12px] text-[#4a4a58] leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById("Courses");
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="
                  group px-7 py-2.5 text-[14px] font-semibold text-white rounded-full
                  bg-[linear-gradient(135deg,#683FBE,#26B884)]
                  shadow-[0_4px_24px_rgba(104,63,190,0.3)]
                  hover:opacity-90 active:scale-[0.98]
                  flex items-center justify-center gap-2 cursor-pointer transition-all duration-200
                "
              >
                Apply Now
                <MoveRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              <button className="
                px-7 py-2.5 text-[14px] font-medium text-[#7a7a8a] rounded-full
                border border-white/[0.08] bg-white/[0.02]
                hover:text-white hover:border-white/[0.16]
                flex items-center justify-center gap-2 cursor-pointer transition-all duration-200
              ">
                Start Date: 10th Jan 2025
              </button>
            </div>
          </div>

          {/* Right — Feature card */}
          <div className="p-[1px] rounded-2xl bg-[linear-gradient(135deg,rgba(104,63,190,0.3),rgba(38,184,132,0.2))]">
            <div className="rounded-2xl bg-[#0d0d10] p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-widest text-[#383845] font-medium mb-5">
                What you'll learn
              </p>
              <ul className="grid gap-4">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#26B884] mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] sm:text-[15px] text-[#a0a0b0] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
