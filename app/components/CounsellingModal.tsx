"use client";

import {
  BriefcaseBusiness,
  ChevronDown,
  Mail,
  MapPin,
  MessageSquareText,
  PhoneCall,
  Sparkles,
  User,
  X,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-black">
      {children}
    </label>
  );
}
export default function CounselingModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-1200 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
      onClick={onClose}>
      <div
        className="relative w-full max-w-3xl  rounded-4xl border-3 border-white/50 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
        onClick={(e) => e.stopPropagation()}>
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#127EF1]/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#EF7D6E]/16 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />
        <button
          onClick={onClose}
          className="absolute md:right-3 right-0 md:top-3 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border md:border-white/10 border-white/90 md:bg-black/5 bg-black md:text-black/75 text-white transition-all duration-200   cursor-pointer  hover:bg-black/8  hover:rotate-90 hover:text-black"
          aria-label="Close modal">
          <X className="h-4 w-4 transition-transform duration-200" />
        </button>
        <div className="relative z-10 grid lg:grid-cols-12">
          <div className="col-span-12 md:col-span-5 border-b border-black/10 p-3 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-8 lg:pr-0">
            <img
              src="https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/skills-counsellinng.webp"
              className="h-full w-full  object-cover rounded-3xl"
              alt=""
            />
          </div>
          <div className="col-span-12 md:col-span-7 p-4 sm:p-5 md:p-6 lg:p-8">
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <FieldLabel>Name</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border-2 border-[#ccc] bg-black/10 px-3 sm:px-4 py-2.5 sm:py-3">
                  <User className="h-4 w-4 text-black" />
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-black placeholder:text-black outline-none"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <FieldLabel>Phone Number</FieldLabel>
                <div className="flex gap-2">
                  <div className="flex flex-1 items-center gap-2 sm:gap-3 rounded-2xl border-2 border-[#ccc] bg-black/10 px-3 sm:px-4 py-2.5 sm:py-3">
                    <PhoneCall className="h-4 w-4 text-black" />
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full bg-transparent text-[12px] sm:text-[13px] text-black placeholder:text-black outline-none"/>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <FieldLabel>Email</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border-2 border-[#ccc] bg-black/10 px-3 sm:px-4 py-2.5 sm:py-3">
                  <Mail className="h-4 w-4 text-black" />
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-black placeholder:text-black outline-none" />
                </div>
              </div>
            </div>
            <button className="mt-5 sm:mt-6 flex w-full items-center justify-center gap-2 border-2 border-[#716fa5] rounded-2xl bg-[#c1befb] px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer text-[13px] sm:text-[14px] font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5">
              <img
                src="https://media.iquanta.in/ui_images/new-dashboard/power-icon.png"
                className="w-5 h-5 sm:w-6 sm:h-6"
                alt=""
              />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
