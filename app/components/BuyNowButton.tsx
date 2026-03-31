"use client";

import { ShoppingCart } from "lucide-react";

type Props = {
  targetId: string;
};

export default function BuyNowButton({ targetId }: Props) {
  return (
    <div
      className="
    fixed 
    bottom-37.5 md:bottom-52 
    right-3 md:right-2.5 
    z-50
    h-10 w-10 sm:h-11 sm:w-11 md:h-12.5 md:w-12.5 
    md:hover:w-27.5
    bg-[#0054c2] 
    rounded-full 
    cursor-pointer
    overflow-hidden
    flex items-center justify-center md:justify-start
    px-0 md:px-3.5
    transition-all duration-300 "
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }}
    >
      <ShoppingCart className="w-4 h-4 md:w-6 md:h-6 min-w-4 md:min-w-6 md:mr-4.5 text-white" />
      <span
        className="
    hidden md:block
    text-white text-[13px] leading-4.5 font-bold whitespace-nowrap"
      >
        Buy <br /> Now
      </span>
    </div>
  );
}
