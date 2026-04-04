"use client";

export default function CourseRoadmap() {
  const steps = [
    {
      text: "Master Ms Excel and Adv.Excel | master libraries for data manipulation   ",
      className: "left-[2.7vw] top-[10vw]",
      glow: "#F3641F",
      hover: "from-[#F3641E] to-[#CB4037]",
    },
    {
      text: "Learn fundamentals of ETL (Extract, Transform & Load) process | Master SQL and no SQL  ",
      className: "left-[20.9vw] top-[20.4vw]",
      glow: "#6362AE",
      hover: "from-[#6362AE] to-[#28347E]",
    },
    {
      text: "Learn Python Programming | Unleash the power with one of the most powerful and easiest programming language  ",
      className: "left-[34.2vw] top-[4vw]",
      glow: "#31D49D",
      hover: "from-[#31D49D] to-[#1E8678]",
    },
    {
      text: "Leverage Statistics | Analyze data like a pro, make accurate predictions and find meaningful insights from data  ",
      className: "left-[53vw] top-[14vw]",
      glow: "#5FC9F0",
      hover: "from-[#84D8F3] to-[#3C65B5]",
    },
    {
      text: "Master Data visualization | Create stunning and interactive dashboards with PoweBI & Tableau  ",
      className: "left-[68vw] top-[-3vw]",
      glow: "#9B3DA8",
      hover: "from-[#9E3BA8] to-[#7552A1]",
    },
    {
      text: "Placement assistance | Get mock interviews and resume support ",
      className: "left-[85vw] top-[8vw]",
      glow: "#DF9D14",
      hover: "from-[#FEC22E] to-[#D8950E]",
    },
  ];

  return (
    <section className="bg-black md:py-10 py-6 ">
      <div className="text-center md:mb-15 mb-10">
        <h2 className=" bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[26px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
         Explore your Roadmap to Success
        </h2>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:hidden">
        <div className="relative pl-8">
          <div className="absolute left-2 top-3 bottom-3 w-px bg-white/15" />
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.text} className="relative">
                <div
                  className="absolute -left-8 top-6 h-6 w-6 rounded-full border border-white/60"
                  style={{ background: step.glow }}
                />
                <div className="rounded-[22px] border border-white/12 bg-white/6 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-black text-white"
                      style={{ background: `linear-gradient(135deg, ${step.glow}, rgba(255,255,255,0.12))` }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Step {i + 1}
                    </span>
                  </div>
                  <p className="text-[15px] leading-6 font-semibold text-white">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="relative z-10">
          <img
            src="https://media.iquanta.in/ui_images/skills/roadmap.webp"
            className="w-full"
          />
        </div>
        {steps.map((step, i) => (
          <div
            key={i}
            className={`absolute ${step.className} 
                w-50 h-50 
                rounded-full border border-white/40 
                flex items-center justify-center z-10`}>
            <div className="w-50 h-50 rounded-full border border-white/20 flex items-center justify-center">
              <div
                className={`relative w-45 h-45 rounded-full 
                    bg-white/10 border border-white/50 
                    flex items-center justify-center px-3 text-center
                    transition-all duration-300
                    hover:scale-110 hover:border-4 hover:border-white/50 hover:shadow-[inset_0px_9px_11px_0px_rgba(0,0,0,0.5),0px_1px_12px_5px_rgba(0,0,0,0)]
                    hover:bg-linear-to-br ${step.hover}`}>
                <div
                  className="absolute w-40 h-40 rounded-full blur-[70px] 
                 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
                  style={{ background: step.glow }}
                />
                <h3 className="text-white text-[12px] leading-4 italic font-extrabold relative">
                  {step.text}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
