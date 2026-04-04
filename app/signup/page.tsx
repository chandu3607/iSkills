"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronDown,
  Ear,
  Mail,
  MapPin,
  Search,
  Smartphone,
  User,
  VenusAndMars,
} from "lucide-react";

import Headder from "../components/Headder";

export default function page() {
  return (
    <>
      <Headder />
      <section className="relative md:min-h-screen overflow-hidden flex items-center justify-center bg-[#050505] md:pt-28 pt-18 pb-10">
        <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-[#127EF1]/18 blur-3xl" />
        <div className="absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-[#EF7D6E]/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#61E6C6]/14 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid items-center md:gap-20 gap-8 md:grid-cols-2">
            <div className="">
              <h1 className="mt-6 text-[22px] leading-6.5 font-semibold md:leading-[1.05] text-white md:text-[40px]">
                Welcome back.
                <span className="md:mt-2 mt-1  block bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
                  Sign Up to your iSkills account.
                </span>
              </h1>
              <p className="md:mt-6 mt-3 max-w-xl text-sm md:leading-7 leading-5 text-[#B8BFCC] md:text-[16px]">
                Pick up your coursework, revision, projects, and live support
                from one place. Your dashboard is designed to keep momentum
                intact.
              </p>
              <div className="hidden md:block">
              <div className="mt-10 max-w-xl rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(97,230,198,0.16),transparent_35%),linear-gradient(160deg,rgba(15,15,20,0.98)_0%,rgba(7,7,10,0.98)_100%)] p-6 sm:p-7">
                  <div className="max-w-[60%]">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#61E6C6]">
                      Founder’s Note
                    </p>
                    <p className="mt-4 text-[14px] leading-6 text-[#C8CDD8] sm:text-[15px]">
                      At iSkills, we are building a learning experience that
                      helps serious learners move from ambition to execution
                      with structured support.
                    </p>
                    <div className="mt-5">
                      <p className="text-[16px] font-semibold text-white">
                        Indrajeet Singh
                      </p>
                      <p className="text-[13px] text-white/55">Founder & CEO</p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute bottom-0 right-0 w-[36%]">
                    <Image
                      src="https://media.iquanta.in/ui_images/skills/founder.png"
                      alt="Indrajeet Singh"
                      width={320}
                      height={360}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="mx-auto w-full ">
              <div className="md:rounded-[36px] rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,24,0.96)_0%,rgba(9,9,12,0.98)_100%)] md:p-3 p-1 shadow-[0_20px_90px_rgba(0,0,0,0.45)]">
                <div className="md:rounded-[30px] rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,#060606_0%,#0B0B0D_100%)] p-6 md:p-8">
                  <div className="md:mb-8 mb-4">
                    <h2 className=" text-[26px] font-semibold text-white md:text-[38px]">
                      Sign Up
                    </h2>
                    <p className="text-[14px] leading-7 text-[#AEB5C2] md:text-[16px]">
                      Welcome back ! Please enter your details
                    </p>
                  </div>

                  <form className="md:space-y-4 space-y-6">
                    <div className="grid grid-cols-1 md:gap-2 gap-3 md:grid-cols-2">
                      <div>
                        {/* <label className="mb-2 block text-[13px] font-medium text-white">
                          Username
                        </label> */}
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-4 py-3">
                          <User className="h-4 w-4 text-white/55" />
                          <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-4 py-3">
                          <Smartphone className="h-4 w-4 text-white/55" />
                          <input
                            type="text"
                            placeholder="Enter Number"
                            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                       
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                          <Mail className="h-4 w-4 text-white/55" />
                          <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                          <VenusAndMars className="h-4 w-4 text-white/55" />
                          <select className="w-full appearance-none bg-transparent text-white outline-none text-sm">
                            <option className="bg-[#0B0B0D]" value="">
                              Gender
                            </option>
                            <option className="bg-[#0B0B0D]" value="Male">
                              Male
                            </option>
                            <option className="bg-[#0B0B0D]" value="Female">
                              Female
                            </option>
                            <option className="bg-[#0B0B0D]" value="Other">
                              Other
                            </option>
                          </select>
                          <ChevronDown className="pointer-events-none h-4 w-4 text-white/45" />
                        </div>
                      </div>

                      <div>
                        
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                          <MapPin className="h-4 w-4 text-white/55" />
                          <input
                            type="text"
                            placeholder="City"
                            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                       
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                          <CalendarDays className="h-4 w-4 text-white/55" />
                          <input
                            type="date"
                            className="w-full bg-transparent text-white outline-none scheme-dark text-sm"
                          />
                        </div>
                      </div>

                      <div>
                       
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                          <BriefcaseBusiness className="h-4 w-4 text-white/55" />
                          <input
                            type="text"
                            placeholder="Enter Years of Experience"
                            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                          <Search className="h-4 w-4 text-white/55" />
                          <input
                            type="text"
                            placeholder="Enter Domain"
                            className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3.5">
                          <Ear className="h-4 w-4 text-white/55" />
                          <select className="w-full appearance-none bg-transparent text-white outline-none text-xs">
                            <option className="bg-[#0B0B0D]" value="">
                              Where did you hear about us?
                            </option>
                            <option className="bg-[#0B0B0D]" value="Instagram post / Story">
                              Instagram post / Story
                            </option>
                            <option className="bg-[#0B0B0D]" value="Youtube Video">
                              Youtube Video
                            </option>
                            <option className="bg-[#0B0B0D]" value="Google Search">
                              Google Search
                            </option>
                            <option className="bg-[#0B0B0D]" value="Friends / Family">
                              Friends / Family
                            </option>
                            <option className="bg-[#0B0B0D]" value="Instagram Ads">
                              Instagram Ads
                            </option>
                            <option className="bg-[#0B0B0D]" value="Google Ads">
                              Google Ads
                            </option>
                            <option className="bg-[#0B0B0D]" value="LinkedIn Post">
                              LinkedIn Post
                            </option>
                          </select>
                          <ChevronDown className="pointer-events-none h-4 w-4 text-white/45" />
                        </div>
                      </div>
                    </div>

                    <label className="flex items-start gap-3 md:text-[14px] text-[13px] text-white/78">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent"
                      />
                      <span>
                        I agree to the{" "}
                        <span className="font-medium text-white underline underline-offset-4">
                          Terms & Conditions
                        </span>
                      </span>
                    </label>

                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#ffffff_0%,#d8d8d8_100%)] px-5 py-3 text-[13px] font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5">
                      Sign up
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>

                  <p className="mt-3 text-center md:text-[15px] text-[14px] text-[#AEB5C2]">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-semibold text-white underline underline-offset-4"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
              <div className="block md:hidden">
                <div className="md:mt-10  max-w-xl rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(97,230,198,0.16),transparent_35%),linear-gradient(160deg,rgba(15,15,20,0.98)_0%,rgba(7,7,10,0.98)_100%)] p-6 sm:p-7">
                  <div className="max-w-[60%]">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#61E6C6]">
                      Founder’s Note
                    </p>
                    <p className="md:mt-4 mt-3 text-[13px] leading-4.5 md:leading-6 text-[#C8CDD8] sm:text-[15px]">
                      At iSkills, we are building a learning experience that
                      helps serious learners move from ambition to execution
                      with structured support.
                    </p>
                    <div className="md:mt-5 mt-3">
                      <p className="text-[16px] font-semibold text-white">
                        Indrajeet Singh
                      </p>
                      <p className="text-[13px] text-white/55">Founder & CEO</p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 right-0 md:w-[36%] w-[46%]">
                    <img
                      src="https://media.iquanta.in/ui_images/skills/founder.png"
                      alt="Indrajeet Singh"
                      width={320}
                      height={360}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
