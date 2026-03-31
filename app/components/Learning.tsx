"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Learning() {
  const data = [
    {
      title: "Data \nScience",
      img: "https://media.iquanta.in/ui_images/skills/learn-icon-2.svg",
      desc: "Upskill in Data Science course and enter a field projected to grow 35% annually. Boost your career with skills that can elevate your salary by 80 to 140%, and become a leading expert in data-driven insights. ",
      link: "/data-science",
    },
    {
      title: "Web\nDevelopment",
      img: "https://media.iquanta.in/ui_images/skills/learn-icon-3.svg",
      desc: "Enroll in our Web Development course and tap into an industry expected to expand by 23% annually. Increase your career opportunities with skills that can raise your earning potential by 70 to 130%, and become a sought-after expert in creating cutting-edge digital experiences. ",
      link: "/full-stack",
    },
    {
      title: "Business \nAnalytics",
      img: "https://media.iquanta.in/ui_images/skills/learn-icon-5.svg",
      desc: "Choose Business Analytics and dive into a field growing at 25% annually. Elevate your career with skills that can increase your earning potential by 50 to 90%, and become a crucial asset in making data-driven business decisions.",
      link: "/data-analytics",
    },
    {
      title: "DSA Pattern & CP",
      img: "https://media.iquanta.in/ui_images/skills/learn-icon-6-svg.png",
      desc: "Develop a strong foundation in Data Structures, Algorithms, and Competitive Programming to significantly enhance your prospects of securing positions with leading product development companies. Mastering these skills will set you apart in the hiring process and prepare you to tackle complex technical challenges in top-tier roles. ",
      link: "/dsa-cp",
    },
    {
      title: "Generative \nAI",
      img: "https://media.iquanta.in/ui_images/skills/learn-icon-1.svg",
      desc: "Enter a booming field with a 30% annual growth rate. Elevate your career and potentially increase your earning power by up to 150%, positioning yourself as a leader in the future of AI ",
      coming: true,
      link: "/data-analytics",
    },
    {
      title: "Marketing",
      img: "https://media.iquanta.in/ui_images/skills/learn-icon-4.svg",
      desc: "Learn DevOps and enter a field with a 28% annual growth rate. Enhance your career with skills that can boost your earning potential by up to 70-135%, and become a pivotal player in streamlining and optimizing technology operations. ",
      coming: true,
      link: "/data-analytics",
    },
  ];

  return (
    <section className="bg-black md:py-10 py-6  overflow-hidden">
      <div className="max-w-6xl px-2 mx-auto">
        <div className="text-center max-w-4xl mx-auto md:mb-10 mb-6 relative">
          <h2 className="   text-[26px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
            Kickstart Your Learning Journey with iSkills
          </h2>
          <p className="text-white mt-2 md:text-[16px] text-[14px] md:px-0 px-4 relative z-10">
            Unlock your potential in high-demand fields with our expert-led
            online coding courses.
          </p>
        </div>
        <div className="relative border-4 border-[#d1d1d14d] rounded-4xl md:mt-15 mt-8">
          <div
            className="absolute md:w-260 w-[360] md:h-190 h-100
            bg-[linear-gradient(90deg,rgb(228,97,36)_25%,rgb(181,217,52)_42%,rgb(228,97,36)_62%,rgb(167,60,59)_84%)]
            -top-20 left-1/2 -translate-x-1/2
            blur-[98px] rounded-full"
          />
          <div
            className="relative rounded-[28px] p-2.5
            bg-[linear-gradient(180deg,#EF7D6E_0%,#4BEBAD_46.5%,rgba(127,124,169,0.74)_97%)]"
          >
            <div className="relative bg-black/90 backdrop-blur-[14px] rounded-[21px] py-10 md:px-10 px-2">
              <div className="absolute top-0 left-92.5 w-px h-full bg-white/10 hidden md:block" />
              <div className="absolute top-0 right-97.5 w-px h-full bg-white/10 hidden md:block" />
              <div className="absolute top-110.5 left-0 right-0 mx-auto w-full h-px bg-white/10 hidden md:block" />
              <div className="grid md:grid-cols-3 gap-10">
                {data.map((item, i) => (
                  <div key={i} className="px-5">
                    <div className="w-20 mb-3.75">
                      <img src={item.img} />
                    </div>
                    <h4
                      className="text-[30px] leading-9 font-bold mb-3.75
                      bg-[linear-gradient(90deg,#FFF_0%,#999_104%)]
                      bg-clip-text text-transparent whitespace-pre-line"
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm leading-5 text-white opacity-50 mb-5">
                      {item.desc}
                    </p>
                    {item.coming ? (
                      <div
                        className="inline-flex items-center gap-2.5 text-sm px-4 py-2.5 rounded-[40px] text-black opacity-60 cursor-not-allowed
                      bg-[linear-gradient(90deg,#ECECEC_0%,#898989_100%)]
                      shadow-[0_54px_55px_rgba(212,212,212,0.25),
                              0_-12px_30px_rgba(255,255,255,0.12),
                              0_4px_6px_rgba(255,255,255,0.12),
                              0_12px_13px_rgba(255,255,255,0.17),
                              0_-3px_5px_rgba(255,255,255,0.09)]"
                      >
                        Coming Soon
                      </div>
                    ) : (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2.5 text-sm px-4 py-2.5 rounded-[40px] text-black
                      bg-[linear-gradient(90deg,#ECECEC_0%,#898989_100%)]
                      shadow-[0_54px_55px_rgba(212,212,212,0.25),
                              0_-12px_30px_rgba(255,255,255,0.12),
                              0_4px_6px_rgba(255,255,255,0.12),
                              0_12px_13px_rgba(255,255,255,0.17),
                              0_-3px_5px_rgba(255,255,255,0.09)]
                      hover:-translate-y-0.5 hover:shadow-[0_60px_60px_rgba(212,212,212,0.3)]
                      transition-all duration-200"
                      >
                        Know More
                        <MoveRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
