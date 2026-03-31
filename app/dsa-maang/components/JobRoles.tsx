
const benefits = [
  {
    title: "Software Developer-DSA ",
    description:
      "Build strong problem-solving skills using data structures and algorithms to develop efficient and scalable software solutions.",
    icon: "https://media.iquanta.in/ui_images/skills/benefit-icon-1.svg",
    accent: "from-[#EF7D6E]/28 via-[#EF7D6E]/8 to-transparent",
  },
  {
    title: "Application Developer-DSA ",
    description:
      "Design and optimize applications with clean logic, efficient algorithms, and performance-focused coding practices.",
    icon: "https://media.iquanta.in/ui_images/skills/benefit-icon-2.svg",
    accent: "from-[#127EF1]/28 via-[#127EF1]/8 to-transparent",
  },
  {
    title: "Algorithm Engineer ",
    description:
      "Solve complex computational problems by designing optimized algorithms and advanced data structure solutions.",
    icon: "https://media.iquanta.in/ui_images/skills/benefit-icon-3.svg",
    accent: "from-[#61E6C6]/28 via-[#61E6C6]/8 to-transparent",
  },
  {
    title: "Technical Lead Architect",
    description:
      "Architect scalable systems and guide teams using deep expertise in algorithms, system design, and performance optimization.",
    icon: "https://media.iquanta.in/ui_images/skills/benefit-icon-4.svg",
    accent: "from-[#F6C35B]/28 via-[#F6C35B]/8 to-transparent",
  },
];

export default function JobRoles() {
  return (
    <section className="relative overflow-hidden bg-black md:py-10 py-6">
      {/* <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#127EF1]/18 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#EF7D6E]/16 blur-3xl" /> */}
      <div className="text-center max-w-3xl mx-auto md:mb-12 mb-10">
        <h2 className="  text-[26px] leading-8.5 md:text-[54px] md:leading-17 font-black bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-transparent">
          Job roles post course completion
        </h2>
      </div>
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="overflow-x-auto md:overflow-visible"
         style={{
                    scrollbarWidth: "none",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
          <div
            className="
          flex md:grid 
          md:grid-cols-4 
          gap-5 
          min-w-max md:min-w-0
          pb-2
        "
          >
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="
            group relative overflow-hidden rounded-[28px]
            border border-white/10
            bg-[linear-gradient(180deg,rgba(19,19,24,0.96)_0%,rgba(8,8,10,0.98)_100%)]
            p-5 sm:p-6 md:p-6
            transition-transform duration-300 hover:-translate-y-1
            w-70 sm:w-75 md:w-auto
            shrink-0 md:shrink
          "
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${benefit.accent} opacity-90`}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                      <img
                        src={benefit.icon}
                        alt={benefit.title}
                        width={34}
                        height={34}
                        className="bg-black rounded-full"
                      />
                    </div>

                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-white/45">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-4 md:mt-5">
                    <h3 className="mt-1 text-[16px] sm:text-[17px] md:text-[18px] font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 md:mt-4 text-[13px] md:text-[14px] leading-5 text-[#C9CDD8]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
