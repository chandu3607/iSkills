"use client";
import { useState } from "react";
import Link from "next/link";
import {  ChevronsLeft, Phone, X } from "lucide-react";
import CounsellingModal from "./CounsellingModal";
import SplashCursor from "./SplashCursor";
export default function ClientWrapper() {
  const [open, setOpen] = useState(true);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  return (
    <>
      {/* <SplashCursor /> */}
      <Link href="tel:+91 96670 69263">
        <div
          className="
        fixed 
        bottom-24 sm:bottom-30 md:bottom-35 
        right-3 sm:right-4 md:right-2.5 
        z-50 
        w-10 h-10 sm:w-11 sm:h-11 md:w-12.5 md:h-12.5 
        bg-[#e63145] 
        rounded-full 
        flex items-center justify-center 
        cursor-pointer 
        hover:scale-110 transition duration-300 
        shadow-[0_0_15px_rgba(230,49,69,0.6)] md:shadow-[0_0_20px_rgba(230,49,69,0.6)]" >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </Link>
      <div
        onClick={() => {
          window.open(
            "https://chat.whatsapp.com/FMDN6xTYWRUBgdHkLgvdJZ",
            "_blank",
          );
        }}
        className="
        fixed 
        bottom-10 sm:bottom-16 md:bottom-18.5 
        right-3 sm:right-4 md:right-2.5 
        z-50 
        w-10 h-10 sm:w-11 sm:h-11 md:w-12.5 md:h-12.5 
        bg-[#4eaf26] 
        rounded-full 
        flex items-center justify-center 
        cursor-pointer 
        hover:scale-110 transition duration-300 
        shadow-[0_0_15px_rgba(78,175,38,0.6)] md:shadow-[0_0_20px_rgba(78,175,38,0.6)]">
        <img
          src="https://media.iquanta.in/ui_images/whatssupp.png"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>
      <div className="fixed top-[36%] md:right-0 right-0 z-50">
        {open && (
          <div
            className="
              md:-right-14.5 -right-12.5 -rotate-90 relative
              transition-all duration-300 ease-out
              animate-[slideInRight_0.3s_ease-out]">
            <div
              className="
              relative isolate flex items-center
              text-white font-semibold md:text-[14px] text-[12px]
              rounded-t-[10px]
              bg-[linear-gradient(248deg,#FEC22E_23.04%,#D8950E_72.85%)]
              shadow-[0_2px_3px_1px_rgba(0,0,0,0.5)]
              transition-all duration-300 " >
              <button
                onClick={() => setIsCounsellingOpen(true)}
                className="px-4 md:px-5.5 py-1.5 md:py-3  cursor-pointer">
                Free Counselling
              </button>
              <button
                onClick={() => setOpen(false)}
                className="
                absolute -right-2.5 -top-2.5 
                bg-white/60 hover:bg-white 
                rounded-full p-1
                flex items-center justify-center text-black cursor-pointer
                transition-all duration-200 hover:scale-110" >
                <X size={12} />
              </button>
            </div>
          </div>
        )}
        {!open && (
          <div
            className="
              md:right-0 right-0 relative
              transition-all duration-300 ease-out
              animate-[slideInRight_0.3s_ease-out]">
            <button
              onClick={() => setOpen(true)}
              className="
              flex items-center justify-center
              bg-[#FEC22E]
              text-black
              p-2 rounded-l-md
              shadow-lg cursor-pointer
              transition-all duration-300
              hover:scale-105">
              <ChevronsLeft size={18} />
            </button>
          </div>
        )}
      </div>
      <CounsellingModal
        open={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
      />
    </>
  );
}
