"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";

export default function Community() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black md:py-10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="  text-[26px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
            Join our free coding community and start learning today!
          </h2>
          <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-4">
            Access exclusive study materials, stay updated on webinars and
            hackathons, network with mentors and like-minded individuals, and
            explore job opportunities.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="border border-[rgba(209,209,209,0.3)] rounded-[30px]">
              <div className="border-[7px] border-white/15 rounded-[30px] bg-black p-3.75">
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src="https://media.iquanta.in/ui_images/skills/community-img.jpeg"
                    className="md:h-40 w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-center">
                  <button
                    onClick={() => setOpen(!open)} 
                    className="mx-auto px-5 py-2 rounded-[20px] 
                    bg-[linear-gradient(90deg,#ECECEC,#898989)]
                    text-black text-[13px] shadow-md cursor-pointer"
                  >
                    {open ? "Close" : "Join Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div
            className="
              md:mt-6 mt-4
              flex gap-4 overflow-x-auto scroll-smooth px-1 no-scrollbar
              snap-x snap-mandatory
              md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
            "
          >
            <div className="snap-start min-w-70 md:min-w-0 border border-[rgba(209,209,209,0.3)] rounded-[30px]">
              <div className="border-[7px] border-white/15 rounded-[30px] bg-black md:p-3.75 p-3">
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src="https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/data-science-community.webp"
                    className="md:h-40 w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-white md:text-[18px] text-[16px] mb-4">
                    Data Science
                  </h3>
                  <button
                    onClick={() => {
                      window.open(
                        "https://chat.whatsapp.com/EUuhFxuhkVE6Slh4GEz2gU",
                        "_blank",
                      );
                    }}
                    className="mx-auto px-5 py-2 rounded-[20px] cursor-pointer
                  bg-[linear-gradient(90deg,#ECECEC,#898989)]
                  text-black text-[13px] shadow-md"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div className="snap-start min-w-70 md:min-w-0 border border-[rgba(209,209,209,0.3)] rounded-[30px]">
              <div className="border-[7px] border-white/15 rounded-[30px] bg-black md:p-3.75 p-3">
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src="https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/data-analytics-community.webp"
                    className="md:h-40 w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-white md:text-[18px] text-[16px] mb-4">
                    Data Analytics
                  </h3>
                  <button
                    onClick={() => {
                      window.open(
                        "https://chat.whatsapp.com/Iuz82xuSb7u5GPBim8pCFc",
                        "_blank",
                      );
                    }}
                    className="mx-auto px-5 py-2 rounded-[20px] cursor-pointer
                    bg-[linear-gradient(90deg,#ECECEC,#898989)]
                    text-black text-[13px] shadow-md"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div className="snap-start min-w-70 md:min-w-0 border border-[rgba(209,209,209,0.3)] rounded-[30px]">
              <div className="border-[7px] border-white/15 rounded-[30px] bg-black md:p-3.75 p-3">
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src="https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/dsa-cp.webp"
                    className="md:h-40 w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-white md:text-[18px] text-[16px] mb-4">
                    DSA & Competitive Programming
                  </h3>
                  <button
                    onClick={() => {
                      window.open(
                        "https://chat.whatsapp.com/JGyStpu18Jz1YvV63pnVag",
                        "_blank",
                      );
                    }}
                    className="mx-auto px-5 py-2 rounded-[20px] cursor-pointer
                  bg-[linear-gradient(90deg,#ECECEC,#898989)]
                  text-black text-[13px] shadow-md"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
