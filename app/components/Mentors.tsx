"use client";

export default function Mentors() {
  const mentors = [
    {
      name: "Saurabh Moharikar",
      img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/saurabh-moharikar.webp",
      role: "Sr. Data Analyst 17+ Years\nNIT Raipur",
      logos: ["https://media.iquanta.in/ui_images/skills/texas.png"],
    },
    {
      name: "Kanika\nGupta",
      img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/kanika-gupta.webp",
      role: "SDE 2 Microsoft 10+\nIIT Madras",
      logos: [
        "https://media.iquanta.in/ui_images/skills/microsoft.png",
        "https://media.iquanta.in/ui_images/skills/standard.png",
      ],
    },
    {
      name: "Puneet\nKansal",
      img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/puneet.webp",
      role: "10+ years | DSA Expert",
      logos: [
        "https://media.iquanta.in/ui_images/skills/gfg-gg-logo.svg",
        "https://media.iquanta.in/ui_images/skills/deltech.jpeg",
      ],
    },
    {
      name: "Ajay Kumar Gupta",
      img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/ajay-kumar.webp",
      role: "11+ years | Data Science Expert",
      logos: [
        "https://media.iquanta.in/ui_images/skills/novartis.png",
        "https://media.iquanta.in/ui_images/skills/synopsys.png",
      ],
    },
    {
      name: "Anirban\nPaul",
      img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/anirban.webp",
      role: "8+ Years in Data Science & AI",
      logos: [
        "https://media.iquanta.in/ui_images/skills/oracle.png",
        "https://media.iquanta.in/ui_images/skills/roorkee.png",
      ],
    },
  ];

  return (
    <section className="bg-black md:py-10 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto md:mb-16 mb-10">
          <h2 className="  text-[26px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
            Industry Expert Mentors
          </h2>
          <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-4">
            Learn from industry expert mentors from top product development
            companies via our online coding courses.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-44.25 w-204 h-12.5
    bg-[linear-gradient(180deg,#86FF73,#4FF2A5,#00E0EE)]
    blur-[47px] opacity-80"
          />

          <div
            className="
      flex gap-4 overflow-x-auto scroll-smooth px-1 no-scrollbar
      snap-x snap-mandatory
      md:grid md:grid-cols-5 md:gap-3 md:overflow-visible
    "
           style={{
                    scrollbarWidth: "none",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
            {mentors.map((m, i) => (
              <div
                key={i}
                className="
          snap-start min-w-65 md:min-w-0
          relative min-h-102.5 rounded-[30px] 
          bg-[#141414] overflow-hidden
        "
              >
                <img
                  src={m.img}
                  className="w-full absolute bottom-0 left-0 h-[90%] object-cover"
                />

                <div
                  className="absolute bottom-0 left-0 w-full h-62.5
          bg-[linear-gradient(4deg,#0C0C0E,transparent)]"
                />

                {/* Content */}
                <div className="absolute bottom-4.5 left-6.75 w-50">
                  <h4
                    className="text-[28px] md:text-[26px] italic font-extrabold leading-8 mb-4
            bg-[linear-gradient(90deg,#FFF,#999)]
            bg-clip-text text-transparent whitespace-pre-line"
                  >
                    {m.name}
                  </h4>

                  <p className="text-white text-[13px] whitespace-pre-line mb-3">
                    {m.role}
                  </p>

                  <div className="flex gap-2 items-center">
                    {m.logos.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo}
                        className="w-10 h-10 object-contain rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
