"use client";

import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Data Analytics", href: "/data-analytics" },
    { name: "Full Stack Web Development", href: "/full-stack" },
    { name: "Data Science Bootcamp", href: "/data-science" },
    { name: "DSA MAANG", href: "/dsa-maang" },
    { name: "DSA Pattern & Competitive Programming", href: "/dsa-cp" },
  ];
  return (
    <footer className="bg-black md:py-10 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-[linear-gradient(45deg,#FFB2A3,#1ABCFE)] p-px rounded-[40px] md:rounded-[200px]
      shadow-[0_7px_29px_rgba(255,255,255,0.34)] relative z-10"
        >
          <div className="bg-black rounded-[40px] md:rounded-[200px] px-5 md:px-20 py-8 md:py-12.5">
            <div className="grid md:gap-20 gap-10 md:grid-cols-3">
              <div>
                <h5 className="text-white text-[24px] md:text-[30px] mb-5">
                  Get in Touch
                </h5>
                <div className="bg-[linear-gradient(45deg,#FFB2A3,#1ABCFE)] p-[1.5px] rounded-[20px]">
                  <div className="bg-black rounded-[20px] p-2">
                    <div className="flex">
                      <select
                        className="w-16 md:w-15 h-12 text-[11px] 
                    bg-[#232323] text-white px-2 md:px-5
                    rounded-l-[18px] outline-none"
                      >
                        <option>+91</option>
                        <option>+1</option>
                      </select>
                      <input
                        placeholder="Phone Number"
                        className="flex-1 h-12 bg-[#232323] text-white px-3 md:px-4
                    rounded-r-[18px] outline-none text-[14px]"
                      />
                    </div>
                    <button
                      className="w-full mt-2 py-3 rounded-[20px]
                  bg-[linear-gradient(90deg,#683FBE,#EF7D6E)]
                  text-white text-[14px]"
                    >
                      Speak to an Expert
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <h6 className="text-white text-[18px] md:text-[19px] mb-3">
                  Courses
                </h6>
                <ul className="grid gap-2">
                  {links.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="text-white/60 text-[14px] hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h6 className="text-white text-[18px] md:text-[19px] mb-3">
                  Contact
                </h6>
                <ul className="grid gap-2">
                  <li>
                    <a
                      href="mailto:iskills.support@iquanta.pro"
                      className="text-white/60 text-[14px] hover:text-white"
                    >
                      iskills.support@iquanta.pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+917683043155"
                      className="text-white/60 text-[14px] hover:text-white"
                    >
                      +91 7683043155
                    </a>
                  </li>
                </ul>
                <div className="flex gap-4 mt-4 justify-start md:justify-start">
                  <div
                    className="cursor-pointer group transition-transform hover:scale-110"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/iskills-by-iquanta/",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-4.5 h-4.5 fill-[#A7A7A7] group-hover:fill-[#0077B5] transition"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </div>

                  <div
                    className="cursor-pointer group transition-transform hover:scale-110"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/skills_iquanta/",
                        "_blank",
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="w-4.5 h-4.5 fill-[#A7A7A7] group-hover:fill-pink-500 transition"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-white text-[13px] md:text-[16px] tracking-[1px]">
            ©2026 Indrajeet's iQuanta Edu Services Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
