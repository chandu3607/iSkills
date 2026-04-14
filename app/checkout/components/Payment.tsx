"use client";
import React from "react";
import {
  Award,
  Briefcase,
  CheckCircle2,
  CreditCard,
  FileText,
  Handshake,
  Infinity,
  Lock,
  MessagesSquare,
  Smartphone,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const paymentMethods = [
  { label: "Cards", icon: CreditCard },
  { label: "UPI", icon: Smartphone },
  { label: "Wallet", icon: Wallet },
];

const checkoutMentors = [
  {
    name: "Saurabh Moharikar",
    title: "DATA ANALYTICS & BI",
    subtitle: "Instructor at iQuanta",
    role: "Sr. Data Analyst 17+ Years\nNIT Raipur",
    img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/saurabh-moharikar.webp",
  },
  {
    name: "Kanika\nGupta",
    title: "PYTHON & SQL",
    subtitle: "Instructor at iQuanta",
    role: "SDE 2 Microsoft 10+\nIIT Madras",
    img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/kanika-gupta.webp",
  },
  {
    name: "Ajay Kumar Gupta",
    title: "DATA SCIENCE & AI",
    subtitle: "Instructor at iQuanta",
    role: "11+ years\nData Science Expert",
    img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/ajay-kumar.webp",
  },
];

export default function Payment() {
  return (
    <section className="bg-[#080808] px-4 pb-16 md:pt-28 pt-18 text-white ">
      <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-[#127EF1]/18 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#EF7D6E]/16 blur-3xl" />
      <div className="absolute bottom-0  left-1/3 h-72 md:w-72 rounded-full bg-[#61E6C6]/5 blur-3xl w-fit" />
      <div className="mx-auto max-w-6xl">
        {/* <div className="mb-8">
          <h1 className="mt-2 text-[32px] font-semibold leading-tight sm:text-[40px]">
            Complete your payment
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-[15px]">
            Review your program details and finish payment using your preferred
            method.
          </p>
        </div> */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-white/60 bg-[#080808] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8 ">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  {/* <p className="text-sm font-medium text-white/50 relative z-10">
                    Program
                  </p> */}
                  <h2 className="mt-2 text-[34px] font-semibold text-white relative z-10">
                    Data Analytics Job Guarantee
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 relative z-10">
                    Master complete Data analytics from scratch to advance,
                    Learn essential skills like Python, SQL, Statistics,
                    PowerBi, Tableau and advance excel. Get hands on experience
                    working on domain specific live projects and build a job
                    ready portfolio. This program is suitable for both tech and
                    non tech candidates as data analytics is a skills used
                    across various domain such as banking and finance, sales,
                    marketing, retail, ecommerce, security and surveillance and
                    many more.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 pt-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <Briefcase className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Job Guarantee (Unlimited Interview Opportunities)
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <Video className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Live Sessions
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <MessagesSquare className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    1 on 1 Live Doubt Support
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <Award className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Course Completion Certificate
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <FileText className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Personalised Resume Support
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <Handshake className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Personalised Mock Interviews
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <Infinity className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Lifetime Course Access
                  </h3>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/1.5 p-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/3 text-white/70">
                    <Users className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="mt-2 text-[13px] font-medium leading-4 text-white/85">
                    Community Doubt Support
                  </h3>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-white/60 bg-[#080808] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Meet Your Mentors
                  </h2>
                  <p className="text-sm text-white/55">
                    Learn directly from industry professionals with hands-on
                    experience.
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 text-white">
                  <Users className="h-5 w-5" />
                </span>
              </div>
              {/* <div className="mt-5 flex">
                <div
                  className="w-full max-w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-3 pr-1"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EFD4CB #0f0f0f",
                  }}>
                  <div className="flex w-max gap-4 pr-2">
                    {checkoutMentors.map((mentor) => (
                      <div
                        key={mentor.name}
                        className="relative h-60 w-90 snap-start flex-none overflow-hidden rounded-[30px] border border-white/35 bg-[linear-gradient(132deg,#221055_0%,#4D1DB1_35%,#0A124A_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#8D6DFF]/30 blur-3xl" />
                        <div className="absolute right-16 top-0 h-28 w-28 rounded-full bg-[#2EE7FF]/18 blur-2xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(11,8,34,0.2)_15%,rgba(9,9,24,0.62)_62%,rgba(9,9,24,0.9)_100%)]" />
                        <div className="relative z-10 p-5 pr-34 md:pr-38">
                          <h3 className="text-[17px] font-extrabold leading-7 text-white ">
                            {mentor.title}
                          </h3>
                          <p className="mt-1 text-[14px] font-semibold leading-5 text-white/95">
                            {mentor.subtitle}
                          </p>
                        </div>
                        <div className="relative z-50 px-5 py-3 pr-34 sm:pr-44">
                          <h4 className="text-[20px] font-extrabold leading-7 text-white whitespace-pre-line">
                            {mentor.name}
                          </h4>
                          <p className="mt-1 whitespace-pre-line text-[12px] font-semibold leading-5 text-white/85">
                            {mentor.role}
                          </p>
                        </div>
                        <img
                          src={mentor.img}
                          alt={mentor.name}
                          loading="lazy"
                          className="absolute -bottom-1 right-0 z-20 h-[99%] w-auto object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.55)]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
            <div className="rounded-3xl border-2 border-white/60 bg-[#080808] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 text-white">
                  <Lock className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Payment methods
                  </h2>
                  <p className="text-sm text-white/55">
                    Choose from the available digital payment options.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.label}
                      className="rounded-2xl border border-white/10 bg-white/2 p-4 text-center"
                    >
                      <Icon className="mx-auto h-5 w-5 text-white/80" />
                      <p className="mt-2 text-sm font-medium text-white/70">
                        {method.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border-2 border-white/60 bg-[#080808] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/50">
                    Order summary
                  </p>
                  <h2 className="mt-1 text-[24px] font-semibold text-white">
                    Payment details
                  </h2>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/6 text-white">
                  <CreditCard className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-6 space-y-4 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between text-sm text-white/65">
                  <span>Program fee</span>
                  <span className="font-medium text-white">₹10,000</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white/65">
                  <span>GST</span>
                  <span className="font-medium text-white">₹1,800</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/2 p-2">
                <div className="flex items-center gap-2">
                  <input
                    placeholder="Coupon code"
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/25"
                  />
                  <button className="rounded-xl bg-linear-to-r from-gray-200 to-gray-400 px-4 py-2 text-sm font-medium text-black cursor-pointer transition hover:bg-white/90">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-sm text-white/50">Total payable</p>
                  <p className="mt-1 text-[32px] font-semibold text-white flex items-end gap-2 leading-normal">
                    ₹11,800
                    <del className="rounded-full text-[16px] font-medium mb-1">
                      ₹20,800
                    </del>
                  </p>
                </div>
              </div>
              <Link href="/success">
                <button className="mt-6 flex w-full items-center justify-center gap-2 cursor-pointer rounded-2xl bg-linear-to-r from-purple-600 to-orange-400 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/90">
                  <CreditCard className="h-4 w-4" />
                  Proceed to Payment
                </button>
              </Link>
              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-white/3 px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm leading-6 text-white/55">
                  You’ll be redirected to the secure payment gateway after
                  confirming this order.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
