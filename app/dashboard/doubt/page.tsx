"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpenCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = "MBA" | "After 12th" | "IIT JEE" | "NEET";

type DoubtItem = {
  title: string;
  image?: string;
  link: string;
};

const categories: Category[] = [
  "MBA",
  "After 12th",
  "IIT JEE",
  "NEET",
];

const doubtData: Record<Category, DoubtItem[]> = {
  "MBA": [
    {
      title: "Ask your all doubts at one place (For All Batch Students)",
      image: "https://media.iquanta.in/ui_images/new-home/doubt-solving-1000.webp",
      link: "https://www.facebook.com/groups/iquantadoubtgroup/?ref=share&mibextid=NSMWBT",
    },
    {
      title: "Ask your all doubts at one place (For CAT 2026 Batch Students)",
      image: "https://media.iquanta.in/ui_images/doubt-solving-2026.webp",
      link: "https://www.facebook.com/groups/767818109377372",
    },
  ],

  "After 12th": [
    {
      title: "IPMAT Free Doubt Solving",
      link: "https://chat.whatsapp.com/L5Iz7OQILETCWrK0iIHFmg",
    },
    {
      title: "IPMAT Premium Doubt Solving",
      link: "https://chat.whatsapp.com/Kq0PFUyoyb8HqVVo6yDfnr",
    },
  ],

  "IIT JEE": [
    {
      title: "Free IIT JEE Doubt Solving",
      image:
        "https://www.iquanta.in/blog/wp-content/uploads/2024/09/jee-online-coaching.webp",
      link: "https://chat.whatsapp.com/Jh1f9XQmnUE5mLIp7vOkRG",
    },
  ],

  "NEET": [
    {
      title: "Free NEET Doubt Solving",
      image:
        "https://media.iquanta.in/ui_images/neet/neet-doubt-sloving.jpeg",
      link: "https://chat.whatsapp.com/BEJQ7B7m4ER6LPX6UWN6ZX?mode=ac_t",
    },
  ],
};

export default function DoubtSolvingPage() {
  const [activeTab, setActiveTab] = useState<Category>("MBA");
  const activeItems = doubtData[activeTab];

  const categoryIcons: Record<Category, LucideIcon> = {
    "MBA": BookOpenCheck,
    "After 12th": GraduationCap,
    "IIT JEE": FileText,
    "NEET": FlaskConical,
  };

  const imageCount = useMemo(
    () => activeItems.filter((item) => Boolean(item.image)).length,
    [activeItems],
  );

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
          
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            24/7 Doubt Solving
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Join category-specific doubt communities and get quick resolution from mentors and peers.
          </p>

           <div className=" mt-4 ">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];
            const active = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon size={15} />
                {cat}
              </button>
            );
          })}
        </div>
      </div>
        </div>
      </section>

    

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {activeItems.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                  <MessageCircleQuestion size={18} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-sm text-slate-600">
                Ask questions, share screenshots, and get rapid replies from the community.
              </p>
            </div>

            {item.image && (
              <div className="relative  w-full border-y border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-5">
              <button
                onClick={() => handleRedirect(item.link)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
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
