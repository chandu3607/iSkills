"use client"
import { Check, Handshake } from "lucide-react";
import React from "react";

const features = [
  "24/7 Instant Doubt-Solving ",
  "Dual-Pedagogy Approach",
  "AI-Driven CAT Mock Test Series",
  "Personalized Mentorship",
  "Special Initiatives (QA250, LRDI70)",
];

export default function AboutHero() {
  return (
    <div className="bg-white py-10 ">
      <div className="max-w-368 mx-auto md:px-22 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-18 gap-6 items-center">
          <div className="banner-left ">
            <h1 className="md:text-[70px] text-[41px]  md:leading-18 leading-12 font-bold  mb-4 ">
              People Behind iQuanta
            </h1>
             
            {/* <h2 className="md:text-[20px] text-[16px] mb-4 font-medium">
              Built by a CAT 100%iler. Powered by 100,000+ Aspirants.
            </h2> */}
            <p className="md:text-[16px] text-[14px] font-light">
              iQuanta is well recognized as the best CAT preparation platform where 99%ilers are not just the expectation; instead, they are the standards. A team of experienced faculties, mentors and IIM converts has guided thousands of aspirants and helped them secure admission to the top B-schools in the country.
            </p>
            <div className="flex flex-wrap md:gap-2 gap-1 mt-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="iteam flex items-center md:gap-2 gap-1 md:px-3 px-1 py-1.5 border-[1.5px] border-[#F3E6D8] rounded-full md:shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]" >
                  <div className="md:w-5 w-3 md:h-5 h-3 rounded-full bg-[#FF9000] flex items-center justify-center">
                    <Check className="text-white md:w-3 w-2 md:h-3 h-2 m-auto" />
                  </div>
                  <span className="md:text-[13px] text-[10px] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
             <div className="block md:hidden">
          <div className="banner-right  my-4">
            <div className="">
              <div className=" relative">
                <div className="grid grid-cols-2 md:gap-4 gap-1 ">
                  <div className="relative bg-[#FFA401] md:h-[220px] md:rounded-3xl rounded-xl md:p-8 p-3 text-white overflow-hidden ">
                    <div className=" absolute  md:w-[230px] w-[110px]  right-0 bottom-0">
                      <img
                        src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-1.svg" alt="iQuanta About"
                        className=""
                      />
                    </div>
                    <div className="flex md:-space-x-3 -space-x-2 md:mb-4 mb-1 relative z-10">
                      {[
                         "https://media.iquanta.in/ui_images/toppers2025/Vinayak+Agarwal_99.99.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Parav+Goyal_99.98.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Soumyadip+Mukherjee_99.97.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Anmol+Gupta_99.96.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Swastik+Mukherjee_99.96.jpg",
                      ].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="iQuanta CAT Toppers"
                          className="
                            md:w-12 w-7.5 md:h-12 h-7.5 rounded-full 
                            md:border-[5px] border border-[#FFA401]
                            transition-all duration-300 ease-out
                            hover:scale-110 hover:-translate-y-1
                            hover:z-20 cursor-pointer"
                        />
                      ))}
                    </div>
                    <span className="md:text-[45px] text-[22px] md:leading-[50px] leading-[30px] font-semibold">
                    1800+
                    </span>
                    <p className="md:mt-2 mt-1 md:text-sm text-xs"> CAT 99%ilers</p>
                  </div>
                  <div className="relative bg-[#000000] md:rounded-3xl rounded-xl md:p-8 p-3 text-white overflow-hidden">
                    <div className=" absolute  md:w-[210px] w-[110px]  right-0 top-0">
                      <img
                        src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-2.svg" alt="iQuanta About"
                        className=""
                      />
                    </div>
                    <div className="relative z-10 text-right">
                      <div className="flex md:gap-3 gap-1 md:mb-5  mb-1  justify-end">
                        <div className="md:w-13.5 w-7.5 md:h-13.5 h-7.5 bg-white  flex items-center justify-center rounded-full">
                          <img
                            src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-question.svg" alt="Doubts Solved"
                            className="md:w-6 w-3 md:h-6 h-3" 
                          />
                        </div>
                        <div className="md:w-13.5 w-7.5 md:h-13.5 h-7.5 bg-white  flex items-center justify-center rounded-full">
                          <img
                            src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-metor.svg" alt="24/7 Instant Doubt-Solving"
                            className="md:w-6 w-3 md:h-6 h-3"
                          />
                        </div>
                        <div className="md:w-13.5 w-7.5 md:h-13.5 h-7.5 bg-white  flex items-center justify-center rounded-full font-bold">
                          <img
                            src="https://media.iquanta.in/ui_images/new-home/AboutBanner-check-icon.svg" alt="Dual-Pedagogy Approach"
                            className="md:w-6 w-3 md:h-6 h-3"
                          />
                        </div>
                      </div>
                      <span className="md:text-[45px] text-[22px] md:leading-[50px] leading-[30px] font-semibold">
                        5 Lakh+ 
                      </span>
                      <p className="md:mt-2 mt-1 md:text-sm text-xs">
                        Doubts Solved
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
                  <img
                    src="https://media.iquanta.in/ui_images/new-home/Jeet-Sir-banner.webp" alt="Indrajeet Singh"
                    className="md:w-[400px] w-[230px] md:min-w-[400px] min-w-[230px] object-contain"
                  />
                </div>
                <div className="mt-4 relative bg-[radial-gradient(circle,rgba(203,219,217,1)_0%,rgba(224,234,233,1)_100%)] md:rounded-[40px] rounded-[20px] md:h-[300px] h-[190px]"></div>
                <div className="absolute md:-left-13 -left-2 md:bottom-10 bottom-14 bg-white border border-[#DDDDDD] rounded-2xl md:rounded-[22px] md:p-4 p-3 shadow-md md:w-[120px] z-10">
                  <div className="mb-3">
                    <img
                      src="https://media.iquanta.in/ui_images/new-home/AboutBanner-cup.svg" alt="Cup Icon"
                      className="md:w-8 w-4 md:h-8 h-4"
                    />
                  </div>
                  <span className="md:text-[28px] text-[18px] font-bold">99%</span>
                  <p className="text-xs text-[#000707] font-light">
                    Success Rate
                  </p>
                </div>
                <div className="absolute z-10 md:right-12 right-4 md:bottom-18 bottom-4 bg-white md:rounded-[22px] rounded-2xl border border-[#DDDDDD] md:px-5 px-3 md:py-3 py-2 md:pb-4 pb-3 shadow-md w-fit">
                  <div className="">
                    <img
                      src="https://media.iquanta.in/ui_images/new-home/AboutBanner-iims.webp" alt="IIM icon"
                      className=" md:w-[200px] w-20"
                    />
                  </div>
                  <span className="md:text-[32px] text-[16px] font-semibold">
                    50,000 
                  </span>
                  <p className="text-black text-xs">IIM Calls in Just 9 Years</p>
                </div>
              </div>
            </div>
          </div>
          </div>
            <div className="md:flex grid grid-cols-2 md:gap-2 gap-1 md:mt-8 mt-4">
              <button
               onClick={() => {
              document
                .getElementById("iQuantaAbout")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
               className="md:px-6 px-2 md:py-3 py-3.5 bg-black text-white rounded-xl font-medium md:text-[14px] text-[13px] cursor-pointer text-center justify-center">
                Explore Our Journey
              </button>
              <button
              onClick={() => window.open('https://www.facebook.com/groups/Rockthecat/', '_blank')}
               className="md:px-6 px-2 md:py-3 py-3.5 bg-[#FF9000] text-white rounded-xl font-medium md:text-[14px] text-[13px] text-center flex gap-2 items-center cursor-pointer justify-center">
                <Handshake className="md:w-5 w-4 md:h-5 h-4" /> Join iquanta
              </button>
            </div>
          </div>
          <div className="hidden md:block">
          <div className="banner-right ">
            <div className="">
              <div className=" relative">
                <div className="grid grid-cols-2 md:gap-4 gap-1 ">
                  <div className="relative bg-[#FFA401] md:h-[220px] md:rounded-3xl rounded-xl md:p-8 p-3 text-white overflow-hidden ">
                    <div className=" absolute  md:w-[230px] w-[110px]  right-0 bottom-0">
                      <img
                        src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-1.svg" alt="iQuanta About"
                        className=""
                      />
                    </div>
                    <div className="flex md:-space-x-3 -space-x-2 md:mb-4 mb-1 relative z-10">
                      {[
                         "https://media.iquanta.in/ui_images/toppers2025/Vinayak+Agarwal_99.99.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Parav+Goyal_99.98.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Soumyadip+Mukherjee_99.97.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Anmol+Gupta_99.96.jpg",
                        "https://media.iquanta.in/ui_images/toppers2025/Swastik+Mukherjee_99.96.jpg",
                      ].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="iQuanta CAT Toppers"
                          className="
                            md:w-12 w-7.5 md:h-12 h-7.5 rounded-full 
                            md:border-[5px] border border-[#FFA401]
                            transition-all duration-300 ease-out
                            hover:scale-110 hover:-translate-y-1
                            hover:z-20 cursor-pointer"
                        />
                      ))}
                    </div>
                    <span className="md:text-[45px] text-[22px] md:leading-[50px] leading-[30px] font-semibold">
                    1800+
                    </span>
                    <p className="md:mt-2 mt-1 md:text-sm text-xs"> CAT 99%ilers</p>
                  </div>
                  <div className="relative bg-[#000000] md:rounded-3xl rounded-xl md:p-8 p-3 text-white overflow-hidden">
                    <div className=" absolute  md:w-[210px] w-[110px]  right-0 top-0">
                      <img
                        src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-2.svg" alt="iQuanta About"
                        className=""
                      />
                    </div>
                    <div className="relative z-10 text-right">
                      <div className="flex md:gap-3 gap-1 md:mb-5  mb-1  justify-end">
                        <div className="md:w-13.5 w-7.5 md:h-13.5 h-7.5 bg-white  flex items-center justify-center rounded-full">
                          <img
                            src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-question.svg" alt="Doubts Solved"
                            className="md:w-6 w-3 md:h-6 h-3" 
                          />
                        </div>
                        <div className="md:w-13.5 w-7.5 md:h-13.5 h-7.5 bg-white  flex items-center justify-center rounded-full">
                          <img
                            src="https://media.iquanta.in/ui_images/new-home/AboutBanner-icon-metor.svg" alt="iQuanta About24/7 Instant Doubt-Solving"
                            className="md:w-6 w-3 md:h-6 h-3"
                          />
                        </div>
                        <div className="md:w-13.5 w-7.5 md:h-13.5 h-7.5 bg-white  flex items-center justify-center rounded-full font-bold">
                          <img
                            src="https://media.iquanta.in/ui_images/new-home/AboutBanner-check-icon.svg" alt="Dual-Pedagogy Approach"
                            className="md:w-6 w-3 md:h-6 h-3"
                          />
                        </div>
                      </div>
                      <span className="md:text-[45px] text-[22px] md:leading-[50px] leading-[30px] font-semibold">
                        5 Lakh+ 
                      </span>
                      <p className="md:mt-2 mt-1 md:text-sm text-xs">
                        Doubts Solved
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
                  <img
                    src="https://media.iquanta.in/ui_images/new-home/Jeet-Sir-banner.webp" alt="Indrajeet Singh"
                    className="md:w-[400px] w-[230px] md:min-w-[400px] min-w-[230px] object-contain"
                  />
                </div>
                <div className="mt-4 relative bg-[radial-gradient(circle,rgba(203,219,217,1)_0%,rgba(224,234,233,1)_100%)] md:rounded-[40px] rounded-[20px] md:h-[300px] h-[190px]"></div>
                <div className="absolute md:-left-13 -left-2 md:bottom-10 bottom-14 bg-white border border-[#DDDDDD] rounded-2xl md:rounded-[22px] md:p-4 p-3 shadow-md md:w-[120px] z-10">
                  <div className="mb-3">
                    <img
                      src="https://media.iquanta.in/ui_images/new-home/AboutBanner-cup.svg" alt="Cup Icon"
                      className="md:w-8 w-4 md:h-8 h-4"
                    />
                  </div>
                  <span className="md:text-[28px] text-[18px] font-bold">99%</span>
                  <p className="text-xs text-[#000707] font-light">
                    Success Rate
                  </p>
                </div>
                <div className="absolute z-10 md:right-12 right-4 md:bottom-18 bottom-4 bg-white md:rounded-[22px] rounded-2xl border border-[#DDDDDD] md:px-5 px-3 md:py-3 py-2 md:pb-4 pb-3 shadow-md w-fit">
                  <div className="">
                    <img
                      src="https://media.iquanta.in/ui_images/new-home/AboutBanner-iims.webp" alt="IIM icon"
                      className=" md:w-[200px] w-20"
                    />
                  </div>
                  <span className="md:text-[32px] text-[16px] font-semibold">
                    50,000 

                  </span>
                  <p className="text-black text-xs">IIM Calls in Just 9 Years</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
