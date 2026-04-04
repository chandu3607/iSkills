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
    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
      {children}
    </label>
  );
}
export default function ContactModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-1200 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
      onClick={onClose}>
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.98)_0%,rgba(8,8,10,0.99)_100%)] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
        onClick={(e) => e.stopPropagation()}>
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-[#127EF1]/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#EF7D6E]/16 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all  cursor-pointer duration-200 hover:bg-white/8 hover:text-white hover:rotate-90"
            aria-label="Close modal">
            <X className="h-4 w-4 transition-transform duration-200" />
          </button>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
          <div className=" hidden md:block col-span-12 lg:col-span-5 border-b border-white/10 p-4 sm:p-5 md:p-6 lg:border-b-0 lg:border-r lg:p-8">
            <h3 className="mt-4 sm:mt-6 text-[22px] sm:text-[26px] md:text-[30px] font-semibold leading-tight text-white">
              Lets Have a Chat
            </h3>
            <p className="mt-3 sm:mt-4 max-w-sm text-[13px] sm:text-[14px] md:text-[15px] leading-6 sm:leading-7 text-[#BBC2CE]">
              Share a few details and our team will help you pick the right
              program, learning path, and career direction.
            </p>
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {[
                "Get guidance based on your current experience",
                "Find the right course and specialization",
                "Understand timelines, projects, and outcomes",
                ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 sm:gap-3 text-[13px] sm:text-[14px] leading-6 text-white/85">
                  <span className="mt-2 h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 rounded-full bg-[linear-gradient(180deg,#61E6C6_0%,#127EF1_60%,#EF7D6E_100%)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 p-4 sm:p-5 md:p-6 lg:p-8">
             <h3 className=" block md:hidden mb-2  text-[16px] sm:text-[26px] md:text-[30px] font-semibold leading-tight text-white">
              Lets Have a Chat
            </h3>
            <form>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Name</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                  <User className="h-4 w-4 text-white/45" />
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-white placeholder:text-white/30 outline-none"
                  />
                </div>
              </div>
              <div>
                <FieldLabel>Phone Number</FieldLabel>
                <div className="flex gap-2">
                  <div className="flex flex-1 items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                    <PhoneCall className="h-4 w-4 text-white/45" />
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full bg-transparent text-[12px] sm:text-[13px] text-white placeholder:text-white/30 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <FieldLabel>Email</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                  <Mail className="h-4 w-4 text-white/45" />
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-white placeholder:text-white/30 outline-none"
                  />
                </div>
              </div>
              <div>
                <FieldLabel>Skills</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                  <MessageSquareText className="h-4 w-4 text-white/45" />
                  <input
                    type="text"
                    placeholder="Enter skills"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-white placeholder:text-white/30 outline-none"
                  />
                </div>
              </div>
              <div className="relative">
                <FieldLabel>City</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                  <MapPin className="h-4 w-4 text-white/45" />
                  <select className="w-full appearance-none bg-transparent text-[12px] sm:text-[13px] text-white outline-none">
                    <option className="bg-[#0A0A0C]">Select city</option>
                    <option className="bg-[#0A0A0C]">Delhi</option>
                    <option className="bg-[#0A0A0C]">Mumbai</option>
                    <option className="bg-[#0A0A0C]">Bangalore</option>
                  </select>
                  <ChevronDown className="pointer-events-none h-4 w-4 text-white/40" />
                </div>
              </div>
              <div>
                <FieldLabel> Experience</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                  <BriefcaseBusiness className="h-4 w-4 text-white/45" />
                  <input
                    type="text"
                    placeholder="Enter experience"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-white placeholder:text-white/30 outline-none"
                  />
                </div>
              </div>
              <div>
                <FieldLabel>Domain</FieldLabel>
                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-white/4 px-3 sm:px-4 py-2.5 sm:py-3">
                  <Sparkles className="h-4 w-4 text-white/45" />
                  <input
                    type="text"
                    placeholder="Enter domain"
                    className="w-full bg-transparent text-[12px] sm:text-[13px] text-white placeholder:text-white/30 outline-none"
                  />
                </div>
              </div>
            </div>
            <button className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#ffffff_0%,#d9d9d9_100%)] px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer text-[13px] sm:text-[14px] font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5">
              Send Message
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
