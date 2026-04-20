"use client";
import { useState } from "react";
import { Phone, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import ContactModal from "./ContactModal";

export default function Headder({ className = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(true);
  return (
    <>
        <header className={`fixed top-0 w-full z-999 bg-[linear-gradient(90deg,rgba(236,236,236,0.06)_0%,rgba(137,137,137,0.06)_100%)] backdrop-blur-2xl md:rounded-b-[50px] rounded-b-[20px] ${className}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between md:px-6 px-6 md:py-3 py-4">
            <div className="flex items-center gap-12">
              <a href="/" className=" cursor-pointer">
                <img
                  src="https://media.iquanta.in/ui_images/iquanta-logo-white.png"
                  className="md:w-32 w-24 cursor-pointer"
                  alt="logo"
                />
              </a>
              <div className="hidden md:flex items-center gap-5">
                <div
                  className="cursor-pointer group transition-transform hover:scale-110"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/iskills-by-iquanta/",
                      "_blank",
                    )}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-4.5 h-4.5 fill-[#A7A7A7] group-hover:fill-[#0077B5] transition" >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </div>
                <div
                  className="cursor-pointer group transition-transform hover:scale-110"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/skills_iquanta/",
                      "_blank",
                    )}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-4.5 h-4.5 fill-[#A7A7A7] group-hover:fill-pink-500 transition">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-5">
              <div className="relative group">
                <button className="text-white text-[14px] font-light flex items-center gap-1 cursor-pointer">
                  All Programs
                  <ChevronDown size={16} />
                </button>
                <div className="relative group">
                  <div
                    className="
                    absolute right-0 top-full
                    mt-3 w-70
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-300
                    z-50">
                    <div
                      className="
                      rounded-2xl p-3
                      bg-[#17181C]
                      backdrop-blur-xl text-sm
                      border border-white/20
                      shadow-[0_10px_40px_rgba(0,0,0,0.6)] ">
                      {[
                        {
                          name: "Data Analytics",
                          path: "/data-analytics",
                        },
                        {
                          name: "Full Stack Web Development",
                          path: "/full-stack",
                        },
                        {
                          name: "Data Science Bootcamp",
                          path: "/data-science",
                        },
                        {
                          name: "DSA MAANG",
                          path: "/dsa-maang",
                        },
                        {
                          name: "DSA Competitive Programming",
                          path: "/dsa-cp",
                        },
                      ].map((item) => (
                        <Link key={item.name} href={item.path}>
                          <div
                            className="
                              text-white px-3 py-2 rounded-md
                              hover:bg-white hover:text-black
                              transition-all duration-200
                              cursor-pointer
                            ">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link href="https://www.iquanta.in/blog/" target="_blabk">
                <button className="text-white text-[14px] cursor-pointer">
                  Blog
                </button>
              </Link>
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-linear-to-r from-gray-200 to-gray-400 text-black text-[13px] px-4 py-2 rounded-full cursor-pointer">
                Contact Us
              </button>
              <Link href="/login">
                <button className="bg-linear-to-r from-purple-600 to-orange-400 text-white text-[13px] px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer">
                  <img
                    src="https://media.iquanta.in/ui_images/skills/log-in.png"
                    className="w-4.75"
                    alt="login"/>
                  Login
                </button>
              </Link>
              <Link href="tel:+91 96670 69263">
                <div className="w-9.5 h-9.5 bg-green-500 rounded-[20px] flex items-center justify-center">
                  <Phone size={18} className="text-black" />
                </div>
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-6 h-6 flex items-center justify-center">
              <span
                className={`
                absolute h-0.5 w-4.5 bg-white transition-all duration-300
                ${isMenuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1"}
                `}/>
              <span
                className={`
              absolute h-0.5 w-4.5 bg-white transition-all duration-300
              ${isMenuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"}
              `} />
              <span
                className={`
                absolute h-0.5 w-4.5 bg-white transition-all duration-300
                ${isMenuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-1"}
              `}/>
            </button>
          </div>
          {isMenuOpen && (
            <div className="lg:hidden px-6 pb-6 text-white md:space-y-4 space-y-3 h-dvh overflow-y-auto">
              <div>
                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  className="flex items-center justify-between w-full text-lg" >
                  All Programs
                  <ChevronDown
                    size={16}
                    className={`transition ${mobileDropdown ? "rotate-180" : ""}`}/>
                </button>
                {mobileDropdown && (
                  <div className="mt-2 space-y-3 pl-1 text-md text-gray-300">
                    {[
                      {
                        name: "Data Analytics",
                        path: "/data-analytics",
                      },
                      {
                        name: "Full Stack Web Development",
                        path: "/full-stack",
                      },
                      {
                        name: "Data Science Bootcamp",
                        path: "/data-science",
                      },
                      {
                        name: "DSA MAANG",
                        path: "/dsa-maang",
                      },
                      {
                        name: "DSA Competitive Programming",
                        path: "/dsa-cp",
                      },
                    ].map((item) => (
                      <Link key={item.name} href={item.path}>
                        <div className="pb-2 flex items-center ">
                          {" "}
                          <ChevronRight className=" w-4 h-4" />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="https://www.iquanta.in/blog/" target="_blabk">
                <button className="text-white text-lg">Blog</button>
              </Link>
              <div
                className="text-lg m-0 py-2"
                onClick={() => setIsContactOpen(true)}>
                Contact Us
              </div>
              <Link href="/login">
                <button className="text-white text-lg">Login</button>
              </Link>
              <div className="flex gap-3 pt-8">
                <div
                  className="cursor-pointer group transition-transform hover:scale-110 bg-[#0077B5] p-2 rounded-full w-10 h-10 flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/iskills-by-iquanta/",
                      "_blank",
                    )
                  }>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-4.5 h-4.5 fill-[#ffffff] group-hover:fill-[#0077B5] transition" >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </div>
                <div
                  className="cursor-pointer group transition-transform hover:scale-110 bg-pink-500 p-2 rounded-full w-10 h-10 flex items-center justify-center"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/skills_iquanta/",
                      "_blank",
                    )
                  }>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-4.5 h-4.5 fill-[#ffffff] group-hover:fill-pink-500 transition" >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </header>
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}