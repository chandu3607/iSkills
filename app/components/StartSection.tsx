"use client";

export default function StartSection() {
  return (
    <section className="bg-black md:py-10 py-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto ">
          <h2 className="  text-[26px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
            Why choose iSkills ?
          </h2>
          <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-4">
            Our online coding courses offer expert mentorship, hands-on
            projects, and personalized support to make learning seamless and
            impactful.
          </p>
        </div>
        <div className="flex justify-center  relative z-10 ">
          <img
            src="https://www.iquanta.in/blog/wp-content/uploads/2024/12/iSkill-Landing-Page.-FinalIGfr-1-1.png"
            className="w-full max-w-3xl" />
        </div>
        <div className="relative max-w-6xl">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 relative">
              <div className="absolute left-8.5  top-1/2 -translate-y-1/2 w-full z-10 hidden md:block">
                <div className="absolute left-[53%] top-[34%] -z-10">
                  <div
                    className="w-50 h-50 rounded-full 
                    bg-[linear-gradient(45deg,#E13170,#6831E1)]
                    blur-[31px] opacity-70"
                  />
                  <div
                    className="absolute inset-0 w-50 h-50 rounded-full 
                    bg-[linear-gradient(45deg,#E13170,#6831E1)]
                    blur-[31px] opacity-40 
                    animate-[glowPing_2.5s_ease-in-out_infinite]"
                  />
                </div>
                <img
                  src="https://media.iquanta.in/ui_images/skills/start-im1.webp"
                  className="w-full"
                />
              </div>
            </div>
            <div className="md:col-span-6">
              <div
                className="rounded-[26px] border border-[#666] 
                bg-[linear-gradient(180deg,rgba(26,31,29,0.41),rgba(20,20,20,0.41))]
                shadow-[inset_0_3px_8px_rgba(79,79,79,0.67)]
                md:p-6.25 p-4 relative z-10">
                <div className="grid md:grid-cols-2 md:gap-5 gap-3 ">
                  <div className="rounded-[10px] border-2 border-[#FFAA2E] bg-black p-5 md:min-h-70">
                    <h3
                      className="text-[22px] italic font-extrabold md:mb-4 mb-2 leading-7.25
                    bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
                    bg-clip-text text-transparent">
                      Live Interactive classes
                    </h3>
                    <p className="text-[#F1F1F1] text-[13px] leading-4.5">
                      Boost your coding skills with our live, interactive online
                      coding courses. Engage with expert mentors, ask questions,
                      and enjoy a hands-on learning experience. Perfect for all
                      skill levels—start coding live today!
                    </p>
                  </div>
                  <div className="rounded-[10px] border-2 border-[#1ABCFE] bg-black p-5 md:min-h-70">
                    <h3
                      className="text-[22px] italic font-extrabold md:mb-4 mb-2 leading-7.25
                        bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
                        bg-clip-text text-transparent"
                        >
                      Practical Learning
                    </h3>
                    <p className="text-[#F1F1F1] text-[13px] leading-4.5">
                      Our online coding courses offer practical, hands-on
                      experience through live projects that build real-world
                      skills. Showcase your expertise to recruiters with
                      domain-specific projects designed for thorough practice
                      and a deep understanding of technical skills.
                    </p>
                  </div>
                  <div className="rounded-[10px] border-2 border-[#FF7262] bg-black p-5 md:min-h-70">
                    <h3
                      className="text-[22px] italic font-extrabold md:mb-4 mb-2  leading-7.25
                      bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
                      bg-clip-text text-transparent">
                      Personalized Doubt Support
                    </h3>
                    <p className="text-[#F1F1F1] text-[13px] leading-4.5">
                      Our online coding courses offer one-on-one guidance, so
                      you're never left feeling stuck. Connect with expert
                      mentors for instant answers and tailored support on
                      challenging topics, helping you progress confidently and
                      reach your coding goals faster.
                    </p>
                  </div>

                  <div className="rounded-[10px] border-2 border-[#32ED8D] bg-black p-5 md:min-h-70">
                    <h3
                      className="text-[22px] italic font-extrabold md:mb-4 mb-2  leading-7.25
                    bg-[linear-gradient(90deg,#F1F1F1,#8B8B8B)]
                    bg-clip-text text-transparent"
                    >
                      Assistance and Job Guarantee
                    </h3>
                    <p className="text-[#F1F1F1] text-[13px] leading-4.5">
                      Our online coding courses are built on a robust curriculum
                      that’s our strength. Get personalized support, resume
                      building, and interview prep to become job-ready. With our
                      strong network and expert guidance, we’re committed to
                      helping you secure your future in tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
