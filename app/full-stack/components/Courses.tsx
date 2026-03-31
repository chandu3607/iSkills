import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Job Guarantee",
    image: "https://media.iquanta.in/ui_images/skills/web-gold.jpg",
    price: "₹1,25,000",
    oldPrice: "₹1,50,000",
    features: [
      "100% job guarantee or get 1,00,000 refunded",
      "Attend live data analytics training",
      "1-on-1 live doubt support",
      "Course completion certificate",
      "Personalized Resume Support",
      "Lifetime dashboard access",
      "5+ domain specific live projects",
      "One complimentary upgrade to the next batch",
    ],
    type: "gold",
  },
  {
    title: "Placement Assistance",
    image: "https://media.iquanta.in/ui_images/skills/FSBSILVER.jpg",
    price: "₹8,000",
    oldPrice: "₹10,000",
    features: [
      "Live sessions",
      "Community doubt support",
      "Course completion certificate",
      "Resume Support",
      "Mock Interviews",
      "1 year dashboard access",
      "1-on-1 live doubt support",
    ],
    type: "silver",
  },
];

export default function Courses() {
  return (
    <section className="relative overflow-hidden bg-black py-6 md:py-10">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="md:mb-10 mb-6 text-center">
          <h2 className="bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[26px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
            Invest In Your Success
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 max-w-3xl mx-auto">
          {courses.map((course) => {
            const isGold = course.type === "gold";
            return (
              <article
                key={course.title}
                className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)]"
              >
                <div
                  className={`absolute inset-0 ${
                    isGold
                      ? "bg-[linear-gradient(145deg,rgba(246,195,91,0.16)_0%,rgba(239,125,110,0.08)_42%,transparent_70%)]"
                      : "bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(18,126,241,0.08)_42%,transparent_72%)]"
                  }`}
                />
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)]" />
                <div className="relative z-10">
                  <div className="relative  overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover"
                    />
                    <div className="absolute inset-x-5 bottom-5"></div>
                  </div>
                  <div className="p-5 md:p-3">
                    <h3 className="text-[20px] font-semibold text-white mb-3">
                      {course.title}
                    </h3>
                    <div className=" rounded-[15px] border border-white/10 bg-black/30 p-3">
                      <h5
                        className={`text-[12px] font-semibold uppercase tracking-[0.18em] mb-3 ${
                          isGold
                            ? "text-[#F6C35B]"
                            : "bg-[linear-gradient(90deg,#f3f3f3,#8a8a8a,#e1e1e1,#b2b2b2)] bg-clip-text text-transparent"
                        }`}
                      >
                        Features
                      </h5>
                      <div
                        className="h-60 overflow-x-auto"
                        style={{
                          scrollbarWidth: "thin",
                          scrollbarColor: "#EFD4CB #1a1a1a",
                        }}
                      >
                        <ul className=" grid gap-2 mr-3">
                          {course.features.map((feature, index) => (
                            <li
                              key={feature}
                              className="flex items-start gap-1 rounded-2xl border border-white/8 bg-white/3 px-3 py-2 text-[12px] leading-6 text-white/80"
                            >
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                                  isGold
                                    ? "bg-[#F6C35B]/18 text-[#F6C35B]"
                                    : "bg-white/12 text-white/80"
                                }`}
                              >
                                {index + 1}
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-4 rounded-[22px] border border-white/10 bg-white/4 px-3 py-3">
                      <div>
                        <div className=" grid items-end gap-0">
                          <h4 className="text-[20px] font-semibold text-white">
                            {course.price}
                          </h4>
                          <p className="pb-1 text-[13px] text-white/35">
                            <del>{course.oldPrice}</del>
                          </p>
                        </div>
                      </div>
                      <div className=" flex flex-wrap gap-2">
                        <Link href="/checkout">
                          <button
                            className={`rounded-xl px-3 py-3 text-[13px] font-semibold text-black cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 ${
                              isGold
                                ? "bg-[linear-gradient(90deg,#e7be32,#f5e175,#f1cf54,#f6e987)]"
                                : "bg-[linear-gradient(90deg,#f3f3f3,#8a8a8a,#e1e1e1,#b2b2b2)]"
                            }`}
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </Link>
                        {isGold && (
                          <Link href="/terms">
                            <button className="rounded-xl cursor-pointer border border-white/20 bg-white/5 px-3 py-3 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-white/8">
                              T&C
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
