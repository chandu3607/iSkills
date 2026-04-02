"use client";
import React from "react";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  CreditCard,
  Lock,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";
import Link from "next/link";
const features = [
  {
    title: "Live classes",
    detail: "Expert-led sessions with structured learning support.",
    icon: BookOpen,
  },
  {
    title: "Career support",
    detail: "Resume guidance, mock interviews, and placement help.",
    icon: Briefcase,
  },
  {
    title: "Secure checkout",
    detail: "Review the order summary before completing payment.",
    icon: ShieldCheck,
  },
];

const paymentMethods = [
  { label: "Cards", icon: CreditCard },
  { label: "UPI", icon: Smartphone },
  { label: "Wallet", icon: Wallet },
];

export default function Payment() {
  return (
    <section className="bg-[#080808] px-4 pb-16 md:pt-28 pt-18 text-white">
         <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-[#127EF1]/18 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#EF7D6E]/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#61E6C6]/5 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="mt-2 text-[32px] font-semibold leading-tight sm:text-[40px]">
            Complete your payment
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-[15px]">
            Review your program details and finish payment using your preferred
            method.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-white/60 bg-[#080808] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-medium text-white/50">
                    Program
                  </p>
                  <h2 className="mt-2 text-[24px] font-semibold text-white">
                    Data Analytics Career Program
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                    6-month guided program with live sessions, projects, and
                    career preparation support.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/2 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/6 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-sm font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        {feature.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
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
                      className="rounded-2xl border border-white/10 bg-white/2 p-4 text-center">
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
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/25" />
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
              <Link  href="/success">
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