const features = [
  {
    icon: "https://media.iquanta.in/ui_images/skills/feature-1.svg",
    title: "Live sessions",
    desc: "100+ hours of live, interactive sessions with access to recordings for easy revision.",
  },
  {
    icon: "https://media.iquanta.in/ui_images/skills/feature-2.svg",
    title: "Daily practice questions with solution",
    desc: "Get 3 daily questions (easy, medium, and hard) with live solution walkthroughs! ",
  },
  {
    icon: "https://media.iquanta.in/ui_images/skills/feature-3.svg",
    title: "Master 100 + DSA questions",
    desc: "Explore multiple DSA pattern questions solved live.",
  },
  {
    icon: "https://media.iquanta.in/ui_images/skills/feature-4.svg",
    title: "Dashboard access with recordings",
    desc: "Enjoy access to all course materials, assignments, and session recordings.",
  },
  {
    icon: "https://media.iquanta.in/ui_images/skills/feature-5.svg",
    title: "Certification",
    desc: " Course completion certification",
  },
  {
    icon: "https://media.iquanta.in/ui_images/skills/feature-6.svg",
    title: "Competitive Programming",
    desc: " Learn, Practice and participate in live competitions with our expert support and build your ranks. ",
  },
];

export default function Features() {
  return (
    <section className="bg-black md:py-10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className=" text-center mb-10">
          <h2
            className="text-[30px] leading-9.5 md:text-[54px] md:leading-18.5 font-black 
            bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] 
            bg-clip-text text-transparent" >
            Course features
          </h2>
        </div>
        <div className="overflow-x-auto md:overflow-visible"
         style={{
                    scrollbarWidth: "none",
                    scrollbarColor: "#EFD4CB #1a1a1a",
          }}>
          <div
          className="
          flex md:grid
          md:grid-cols-3
          gap-4 sm:gap-6
          min-w-max md:min-w-0
          pb-2 ">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-65 sm:w-70 md:w-auto shrink-0 md:shrink">
                <div
                  className="p-0.5 rounded-[20px] 
                  bg-[linear-gradient(134deg,rgba(12,12,14,0.33)_6.48%,rgba(255,255,255,0.55)_56.76%,rgba(0,0,0,0.33)_96.26%)]">
                  <div className="bg-black rounded-[19px] p-5 sm:p-6.25 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 mx-auto bg-[#ffffff17] mb-3 sm:mb-4 rounded-full flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15"
                      />
                    </div>
                    <h4 className="text-white text-[16px] sm:text-[17px] md:text-[18px] font-semibold mb-2 capitalize">
                      {item.title}
                    </h4>
                    <p className="text-[#C8CACE] text-[13px] sm:text-[14px] font-light leading-5">
                      {item.desc}
                    </p>
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
