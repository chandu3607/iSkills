import React from "react";

export default function DefineUs() {
  const ProfilesOne = [
    "https://media.iquanta.in/ui_images/Vinayak-Agarwal-topper-2025.webp",
    "https://media.iquanta.in/ui_images/Topper_2025_Parav_Goyal.webp",
    "https://media.iquanta.in/ui_images/Soumyadip Mukherjee-Topper-2025.webp",
    "https://media.iquanta.in/ui_images/Anmol-Gupta-Topper-2025.webp",
    "https://media.iquanta.in/ui_images/toppers2025/Swastik+Mukherjee_99.96.jpg",
  ];
  const ProfilesTwo = [
    "https://media.iquanta.in/ui_images/toppers2025/Harsh+Khudania_99.93.jpg",
    "https://media.iquanta.in/ui_images/toppers2025/Aditya+Shah_99.92.jpg",
    "https://media.iquanta.in/ui_images/toppers2025/Neha+Alatagi_99.48.jpg",
    "https://media.iquanta.in/ui_images/toppers2025/Ishan+Gundre%2C+CAT+99.7%25ile.png",
    "https://media.iquanta.in/ui_images/toppers2025/Manaal%2C+99.11.png",
  ];
  const ProfilesThree = [
    "https://media.iquanta.in/ui_images/cat-2025-toppers/Kanav.png",
    "https://media.iquanta.in/ui_images/cat-2025-toppers/Vedant+Chandewar.png",
    "https://media.iquanta.in/ui_images/cat-2025-toppers/Swaraj+Pal+Keseri.png",
    "https://media.iquanta.in/ui_images/cat-2025-toppers/Sanjeev.png",
    "https://media.iquanta.in/ui_images/cat-2025-toppers/Sanvie+Singhal.png",
  ];
  const ProfilesFour = [
    "https://media.iquanta.in/ui_images/CAT2023/Guru.jpeg",
    "https://media.iquanta.in/ui_images/CAT2023/swadesh+rath.jpeg",
    "https://media.iquanta.in/ui_images/CAT2023/Aditya+singh.jpeg",
    "https://media.iquanta.in/ui_images/CAT2023/rounaktikmani-670fac2e0af7d.webp",
    "https://media.iquanta.in/ui_images/CAT2023/Mayukh+roy.jpeg",
  ];

  const stats = [
    {
      value: "1800+ ",
      highlight: "99%ilers",
      description: "1800+ 99%ilers in just 9 Years",
      images: ProfilesOne,
    },
    {
      value: "3000+",
      highlight: "97%ilers",
      description: "3000+ 97%ilers in CAT 2025",
      images: ProfilesTwo,
    },
    {
      value: "580+",
      highlight: "99%iler ",
      description: "580+ 99%iler in CAT 2025",
      images: ProfilesThree,
    },
    {
      value: "99%",
      highlight: "Success Rate",
      description: "Live Strategy Sessions Conducted Every Year",
      images: ProfilesFour,
    },
  ];
  return (
    <div className="bg-white mx-auto px-1 ">
      <div className="bg-black md:rounded-[40px] rounded-[20px] md:py-14 py-8 md:px-20 px-4 md:pb-14 pb-4 text-center">
        <div className="mx-auto md:mb-14 mb-8">
          <span className="md:text-[10px] text-[8px] uppercase tracking-[1px] px-3 py-1 rounded-full text-white border border-white/20 md:mb-2 mb-4 inline-block">
            Trusted by 50,000+ Students
          </span>
          <h2 className="text-white font-medium md:text-[60px] text-[28px] md:leading-[60px] leading-7 mb-3">
            Results That Define Us
          </h2>
          <p className="text-white md:text-md text-xs md:px-0 px-2">
            This is where the exceptional result of iQuanta speaks for itself. These numbers define the determination, expert mentorship and guidance by the team to aspirants.
          </p>
        </div>
        {/* <div
          className="flex md:grid md:grid-cols-4 md:gap-4 gap-2 overflow-x-auto "
          style={{
            scrollbarWidth: "none",
            scrollbarColor: "#EFD4CB #1a1a1a",
          }}>
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.highlight}`}
              className="bg-[#131313] p-6 md:rounded-[35px] rounded-[20px] md:space-y-6 space-y-4 min-w-[260px] md-min-w-fll border border-white/10">
              <h3 className="text-white md:text-[40px] text-[32px] font-light text-start flex items-center md:gap-3 gap-2">
                {stat.value}{" "}
                <span className="md:text-[16px] text-[12px] text-[#FF9000]">
                  {stat.highlight}
                </span>
              </h3>
              <div className="flex md:-space-x-3 -space-x-2 relative z-10">
                {stat.images.map((image, index) => (
                  <img
                    key={`${stat.value}-${index}`}
                    src={image}
                    alt={`${stat.highlight} student ${index + 1}`}
                    className="md:w-12 w-10 md:h-12 h-10 rounded-full md:border-5 border-2 border-[#131313]
                    transition-all duration-300 ease-out object-cover
                    hover:scale-110 hover:-translate-y-1 hover:z-20"
                  />
                ))}
              </div>
              <p className="text-white text-start md:text-[16px] text-[14px] font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div> */}
        <div className="flex md:grid md:grid-cols-4 md:gap-5 gap-3 overflow-x-auto no-scrollbar px-1"
         style={{
            scrollbarWidth: "none",
            scrollbarColor: "#EFD4CB #1a1a1a",
          }}>
          {stats.map((stat) => (
            <div
              key={`${stat.value}-${stat.highlight}`}
              className="
                group
                min-w-60 md:min-w-0
                relative
                rounded-[22px] md:rounded-[30px]
                p-px
                bg-linear-to-b from-white/10 to-transparent
                transition-all duration-300 " >
              <div
                className="
                h-full w-full
                bg-[#111]
                rounded-[22px] md:rounded-[30px]
                p-5 md:p-6
                flex flex-col justify-between
                border border-white/10
                transition-all duration-300" >
                <div>
                  <h3 className="text-white text-[30px] md:text-[40px] font-semibold flex items-center gap-2">
                    {stat.value}
                    <span className="text-[#FF9000] text-[12px] md:text-[14px] font-medium">
                      {stat.highlight}
                    </span>
                  </h3>
                  <div className="h-px w-full bg-white/5 my-3" />
                  <div className="flex -space-x-3 mb-3">
                    {stat.images.slice(0, 5).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${stat.highlight} student ${index + 1}`}
                        className="
                        w-9 h-9 md:w-11 md:h-11
                        rounded-full
                        border-4 border-[#111]
                        object-cover
                        transition-all duration-300
                        group-hover:scale-105" />
                    ))}
                  </div>
                </div>
                <p className="text-white/60 text-start text-[13px] md:text-[14px] ">
                  {stat.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-[22px] md:rounded-[30px] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,144,0,0.15),transparent_60%)]" />
            </div>
          ))}
        </div>
        <div className="block md:hidden text-center text-white/60 mt-3">
          <p className=" text-[10px] flex font-semibold items-center justify-center gap-2 2">
            <span className="">←</span>
            <span>Swipe to see more</span>
            <span className="">→</span>
          </p>
        </div>
      </div>
    </div>
  );
}
