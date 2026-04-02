"use client"
import React from 'react'

export default function CourseCommunity() {
  return (
      <section className="bg-black md:py-10 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className=" bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[26px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
           Join our free coding community and start learning today!
          </h2>
          <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-4">
           Join our Data Science community for exclusive masterclasses, free study materials, and networking with experts. Plus, get access to job openings in AI, machine learning, and data science. 
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div className="border border-[rgba(209,209,209,0.3)] rounded-[30px]">
              <div className="border-[7px] border-white/15 rounded-[30px] bg-black p-3.75">
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src="https://media.iquanta.in/ui_images/skills/commu-science.jpeg"
                    className="md:h-40 w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-center">
                  <button
                  onClick={() => {
                      window.open(
                        "https://chat.whatsapp.com/EUuhFxuhkVE6Slh4GEz2gU",
                        "_blank",
                      );
                    }}
                    className="mx-auto px-5 py-2 rounded-[20px]  cursor-pointer
                    bg-[linear-gradient(90deg,#ECECEC,#898989)]
                    text-black text-[13px] shadow-md"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  )
}
