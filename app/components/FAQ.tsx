"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  name: string;
  submenu: {
    answer: string;
    subanswers?: string[];
  }[];
};

export default function FAQ({ data }: { data: FAQItem[] }) {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="bg-black md:py-10 py-6">
      <div className="text-center md:mb-10 mb-8 max-w-6xl mx-auto">
        <h2 className="   text-[26px] leading-9.5 px-6 md:px-0 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-4xl mx-auto  overflow-y-auto px-4">
        <ul className="md:space-y-5 space-y-3">
          {data.map((item, i) => (
            <li
              key={i}
              className={`md:rounded-[40px] rounded-[20px] border-2 bg-black transition
              ${active === i ? "border-white/60" : "border-gray-500"}`}>
              <div
                onClick={() => toggle(i)}
                className="cursor-pointer md:px-6.25 px-3 md:py-5 py-3 relative">
                <h3 className="text-white md:text-[18px] text-[14px] font-medium pr-10">
                  <span className="md:mr-2">{i + 1}.</span> {item.name}
                </h3>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white">
                  {active === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300
                ${active === i ? "max-h-125" : "max-h-0"}`} >
                <div className="px-4.5 pb-4.5">
                  {item.submenu.map((sub, j) => (
                    <div key={j} className="mb-2">
                      <p className="text-white/60 md:text-[16px] text-[14px] md:leading-6">
                        {sub.answer}
                      </p>
                      {sub.subanswers?.map((s, k) => (
                        <p key={k} className="text-white/60 md:text-[16px] text-[14px] md:leading-6">
                          {s}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}