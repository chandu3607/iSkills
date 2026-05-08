// import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const logos = [
  { src: "medium-logo-white-small.webp", link: "https://www.medium.com/@startupphilosophy/top-10-youngest-entrepreneurs-of-india-in-2019-startupphilosophy-dbe14fe6b0ef", dark: true ,alt: "medium logo", },
  { src: "mint-logo-color.webp", link: "https://www.livemint.com/brand-post/wizard-of-quant-indrajeet-singh-joins-as-director-narayana-business-school-11609929643088.html" ,alt: "mint logo", },
  { src: "brilliantread-logo-color.webp", link: "https://www.brilliantread.com/interview-with-indrajeet-singh-founder-and-ceo-at-iquanta/" ,alt: "brilliantread logo", },
  { src: "icons/toifavicon.ico", link: "https://www.timesofindia.indiatimes.com/iquanta-reshapes-cat-preparation-industry-one-facebook-group-at-a-time/articleshow/81630993.cms", alt: "TOI logo", },
  { src: "east-mojo-logo.webp", link: "https://www.eastmojo.com/news/2024/07/12/cat/", alt: "east-mojo-east-mojo- logo", },
  { src: "ani-white-logo.webp", link: "https://www.aninews.in/news/business/business/iquanta-reshapes-cat-preparation-industry-one-facebook-group-at-a-time20210322140723/", dark: true ,alt: "ANI logo",},
];

// const socialLinks = [
//   {
//     name: "Facebook",
//     href: "https://www.facebook.com/jeet.singh.412224/",
//     icon: Facebook,
//   },
//   {
//     name: "Instagram",
//     href: "https://www.instagram.com/indralion/",
//     icon: Instagram,
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/indralion/",
//     icon: Linkedin,
//   },
// ];

export default function Founder() {
  return (
    <div className="bg-white mx-auto px-1 ">
      <div className="bg-black md:rounded-[30px] rounded-[20px] md:pt-14 pt-4 pb-4 md:px-6 px-4 text-center">
        <div className="mx-auto md:mb-14 mb-4">
          <span className=" flex md:inline-flex items-center justify-start 
            md:text-[14px] text-[10px] mb-4 uppercase px-3 py-1 pr-1 gap-2 w-fit
            text-white border border-white/20">
            <span className="md:tracking-[5px]">About</span>{" "}
            <span className="bg-white md:text-[12px] text-[8px] md:px-2 px-1 py-0.5 text-black md:tracking-[2px]">
              Founder, Strategist, Quants & Lrdi Connoisseur
            </span>{" "}
            <span className="bg-[#FF9000] w-16 h-full text-[#FF9000] md:inline-block hidden">
              ---
            </span>
          </span>
          <h2 className="text-white md:text-center text-start  md:text-[54px] text-[20px] md:leading-[60px] leading-[30px] md:mb-3 mb-2 uppercase font-extralight">
            <span className="font-bold text-[#FF9000] md:text-[54px] text-[28px]">Indrajeet Singh</span> -
            Founder & CEO of iQuanta
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-4  items-stretch relative">
          <div className="md:col-span-7">
            <div className="relative h-full">
              <img
                src="https://media.iquanta.in/ui_images/new-home/Jeet-sir-car.webp"
                alt="Indrajeet Singh founder & CEO"
                className="w-full h-full object-cover hidden md:block" />
              <div className=" md:absolute relative  md:right-0 md:top-1/2 md:-translate-y-1/2 md:p-8 md:w-110 text-white text-start">
                <span>
                  <img src="https://media.iquanta.in/ui_images/new-home/quote-1.svg" className="md:w-7 w-5 md:h-7 h-5 " alt="Quuote" />
                </span>
                <h3 className="text-[#FF9000] font-semibold md:text-[15px] text-[18px] md:mb-3 mb-2">
                 Knowing the Wizard of Quant - "Indrajeet Singh”
                </h3>
                <p className="md:text-[14px] text-[14px] font-extralight md:leading-[23px] leading-5 ">
                 From CAT Aspirant to build Something Grand,  Cover the Journey of Indrajeet Singh (Founder & CEO of iQuanta)

                </p>
                <span>
                  <img
                    src="https://media.iquanta.in/ui_images/new-home/quote-2.svg" alt="Quote"
                    className="md:w-7 w-5 md:h-7 h-5   relative -top-2  ml-auto " />
                </span>
                <p className="md:text-xs text-[14px] font-light mb-4 md:leading-[18px] leading-5">
                  Started the journey as a CAT aspirant back in 2015. He started solving rigorous doubts of other aspirants in less than a minute, which attracted thousands of aspirants to be a part of the community, and this helped him earn the title of “Wizard of Quant”.
                  Soon iQuanta became the go-to place for the serious CAT aspirants and a top priority to join the platform as the best CAT online coaching among candidates with 580+ 99+%iler in CAT 2025. 

                </p>
                <p className="md:text-xs text-[14px] font-light mb-4 md:leading-[18px] leading-5">
                 Later, iQuanta started growing across other verticals with the acquisition of ATP Star Kota for IIT and NEET. The journey didn’t stop here only, but the iQuanta IPMAT, CLAT vertical has highly proved to be the top leading online course in India with excellent results. 
                 Talking about the achievements, Indrajeet Singh is an angel investor in multiple startups, with the prestigious tag of being the youngest owner of a Maybach S580 along with Forbes 30U30 and more.
                </p>
                <h4 className="text-[#FF9000] font-light text-[13px]">
                  Featured among Top 10 Entrepreneurs of India among various
                  sites given below:
                </h4>
                <ul className="flex flex-wrap items-center gap-2 my-4">
                  {logos.map((logo, i) => (
                    <li
                      key={i}
                      className="border-2 border-[#D4C8B8] rounded-[9px] p-2 bg-white">
                      <a
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block">
                        <div className="md:w-14 w-12 h-4 flex items-center justify-center">
                          <img
                            src={`https://media.iquanta.in/ui_images/${logo.src}`}
                            alt={logo.alt}
                            className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                              logo.dark ? "brightness-0" : ""
                            }`}
                          />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <h4 className="text-[#FF9000] font-light text-[13px]">
                  Follow me:
                </h4>
                <div className="mt-2 flex items-center gap-3">
                  {/* {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-black transition hover:border-gray-300 hover:text-gray-950">
                        <Icon size={18} />
                      </a>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative h-full">
              <img
                src="https://media.iquanta.in/ui_images/new-home/Jeet-sir-forbs.webp"
                alt="Indrajeet Singh 30U30"
                className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 bg-[#FF9000] w-full px-6"></div>
        </div>
      </div>
    </div>
  );
}
