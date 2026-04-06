"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  MessageCircleQuestion,
} from "lucide-react";

const doubtItems = [
  {
    title: "Personalized 1-on-1 Doubt Support",
    decs: " Unlock Personalized paid 1-on-1 Doubt Support Today! ",
    image: "https://media.iquanta.in/ui_images/skills/1ON1DOUBTSUPPORT.jpg",
    link: "",
  },
  {
    title: "Free Community Doubt Support",
    decs: " Join Our Free Community Doubt Support Today! ",
    image:
      "https://media.iquanta.in/ui_images/skills/COMMUNITYDOUBTSUPPORT.jpg",
    link: "",
  },
];

export default function DoubtSolvingPage() {
  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            24/7 Doubt Solving
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Join category-specific doubt communities and get quick resolution
            from mentors and peers.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {doubtItems.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                  <MessageCircleQuestion size={18} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-600">
                {item.decs}
              </p>
            </div>
            {item.image && (
              <div className="w-full border-y border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full"
                />
              </div>
            )}
            <div className="p-5">
              <button
                onClick={() => window.open(item.link, "_blank")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold cursor-pointer text-white transition hover:bg-slate-800">
                Ask Doubt
                <ArrowUpRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
