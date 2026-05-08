// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/iQuanta.in/",
    // icon: Facebook,
    bg: "#1877F2",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iquanta.in/",
    // icon: Instagram,
    bg: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/iquanta-edu-services",
    // icon: Linkedin,
    bg: "#0A66C2",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@CatpreparationiQuanta",
    // icon: Youtube,
    bg: "#FF0000",
  },
];

export default function Community() {
  return (
    <div className="bg-white md:py-14 py-4 ">
      <div className="max-w-368 mx-auto md:px-22 px-1">
        <div className="bg-black md:rounded-[54px] rounded-[20px] md:py-14 py-2 md:px-20 px-2 text-center">
          <div className="grid md:grid-cols-12 items-center ">
            <div className="md:col-span-5">
              <div className="bg-white rounded-[20px] overflow-hidden">
                <img
                  src="https://media.iquanta.in/ui_images/new-home/iquanta-facebook-page.webp" 
                  className="select-none w-full"
                  alt="iQuanta FaceBook"/>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="border-l-0 md:border border-white rounded-r-[20px] py-6 md:px-14 text-left w-full">
                <div className="mx-auto md:mb-10 mb-6 text-center">
                  <span className="md:text-[10px] text-[8px] uppercase tracking-[3px] px-3 py-1 rounded-full font-light text-white  bg-white/15 mb-2 inline-block">
                    iQuanta Community
                  </span>
                  <h2 className="text-white font-medium md:text-[30px] text-[24px] md:leading-[30px] leading-6 mb-3">
                    Join India’s Most Active CAT Community
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-2 md:px-0 px-2">
                  <div className="bg-white md:rounded-[19px] rounded-[14px] py-3 md:px-6 px-3  ">
                    <h3 className="md:text-[32px] text-[22px] font-light mb-1">
                      5000+
                    </h3>
                    <p className="md:text-[14px] text-xs font-light">
                      Doubts Solved Monthly 
                    </p>
                  </div>
                  <div className="bg-white md:rounded-[19px] rounded-[14px] py-3 md:px-6 px-3  ">
                    <h3 className="md:text-[32px] text-[22px] font-light mb-1">
                      250,000+
                    </h3>
                    <p className="md:text-[14px] text-xs font-light">
                      Active Members 
                    </p>
                  </div>
                  <div className="bg-white md:rounded-[19px] rounded-[14px] py-3 md:px-6 px-3  ">
                    <h3 className="md:text-[32px] text-[22px] font-light mb-1">
                      24/7
                    </h3>
                    <p className="md:text-[14px] text-xs font-light">
                      Doubt-Solving Support
                    </p>
                  </div>
                  <div className="bg-white md:rounded-[19px] rounded-[14px] py-3 md:px-6 px-3 ">
                    <h3 className="md:text-[32px] text-[22px] font-light mb-1">
                      500+
                    </h3>
                    <p className="md:text-[14px] text-xs font-light">
                     Daily Discussions & Interactions
                    </p>
                  </div>
                </div>   
                <div className="flex md:flex-row flex-col items-center justify-center gap-2 mt-6">
                <p className="text-white">Join Our Community:</p>
                  {/* <div className="flex items-center gap-2">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.name}
                          style={{ background: social.bg }}
                          className="flex h-10 w-10 items-center justify-center 
                          rounded-xl text-white transition-all duration-300 
                          hover:scale-110 hover:shadow-lg">
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div> */}
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center gap-4 mt-6">
                  <div className="flex md:-space-x-3 -space-x-2  relative z-10">
                     {[
                        "https://media.iquanta.in/ui_images/toppers2025/Vinayak+Agarwal_99.99.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Parav+Goyal_99.98.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Soumyadip+Mukherjee_99.97.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Anmol+Gupta_99.96.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Swastik+Mukherjee_99.96.jpg",
                      ].map((img, i) => (
                        <img
                          key={i}
                          alt="iQuanta Toppers"
                          src={img}
                          className="
                            md:w-12 w-8 md:h-12 h-8 rounded-full 
                            md:border-[5px] border-3 border-black
                            transition-all duration-300 ease-out
                            hover:scale-110 hover:-translate-y-1
                            hover:z-20 cursor-pointer"
                        />
                      ))}
                  </div>
                  <p className="text-white md:text-[14px] text-xs font-medium">
                    Join <span className="text-[#FF9000] ">4 lakh+ </span>
                      members in our Facebook community.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
