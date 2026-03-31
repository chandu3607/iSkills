"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Headder from "./components/Headder";

export default function NotFound() {
    const router = useRouter();
  return (
    <>
    <Headder />
    <div className="fixed inset-0 bg-linear-to-br from-[#0f0f0f] via-[#191919] to-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center text-white">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          className="h-65 md:h-80 "
        />
        <div className="relative -top-10">
        <span className="text-[42px] md:text-[90px] font-black tracking-wide ">
          404 
        </span>
        <p className="text-white/60 text-[15px] md:text-[17px] mb-2">
          The page you were looking for could not be found
        </p>
        <p className="text-white/40 text-[13px] mb-6">
          You can go back or return to homepage
        </p>
       <div className="flex md:gap-3 gap-2 flex-wrap justify-center">
          <button
           onClick={() => router.back()}
            className="flex items-center gap-2 px-5 py-2.5 text-[13px] rounded-full text-black
            bg-[linear-gradient(90deg,#ECECEC,#898989)]
            shadow-[0_10px_30px_rgba(255,255,255,0.1)]
            hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]
            transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-black
            bg-[linear-gradient(90deg,#ffb056,#ff6b00)]
            shadow-[0_10px_30px_rgba(255,107,0,0.3)] text-[13px]
            hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,107,0,0.5)]
            transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

        </div>
      </div>
      </div>
    </div>
    </>
  );
}



