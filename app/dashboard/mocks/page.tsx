"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Circle,
  FileText,
} from "lucide-react";

type Category =
  | "Data Analytics"
  | "Full Stack Web Development"
  | "Data Science Bootcamp"
  | "DSA Pattern & CP"
  | "DSA MAANG";

type MockItem = {
  title: string;
  desc: string;
  link: string;
};

const categories: Category[] = [
  "Data Analytics",
  "Full Stack Web Development",
  "Data Science Bootcamp",
  "DSA Pattern & CP",
  "DSA MAANG",
];

const allMocks: Record<Category, MockItem[]> = {
"Data Analytics": [
    {
      title: "Excel Fundamentals Test",
      desc: "Practice spreadsheets, formulas, and real-world datasets.",
      link: "",
    },
    {
      title: "SQL Query Challenge",
      desc: "Test your SQL skills with structured data problems.",
      link: "",
    },
  ],

  "Full Stack Web Development": [
    {
      title: "HTML & CSS Basics Quiz",
      desc: "Build strong frontend fundamentals with practical questions.",
      link: "",
    },
    {
      title: "JavaScript Logic Test",
      desc: "Improve problem-solving with JS-based scenarios.",
      link: "",
    },
  ],

  "Data Science Bootcamp": [
    {
      title: "Python for Data Science",
      desc: "Hands-on test covering NumPy, Pandas, and basics.",
      link: "",
    },
    {
      title: "Machine Learning Basics",
      desc: "Evaluate your understanding of ML concepts and models.",
      link: "",
    },
  ],

  "DSA Pattern & CP": [
    {
      title: "Array & String Patterns",
      desc: "Solve common DSA patterns asked in coding rounds.",
      link: "",
    },
    {
      title: "Competitive Programming Set",
      desc: "Timed problems to boost speed and accuracy.",
      link: "",
    },
  ],

  "DSA MAANG": [
    {
      title: "MAANG Interview Set 1",
      desc: "Top interview questions from FAANG-level companies.",
      link: "",
    },
    {
      title: "Advanced DSA Challenge",
      desc: "Hard-level problems for top product companies.",
      link: "",
    },
  ],
};

const categoryIcons: Record<
  Category,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "Data Analytics": Circle,
  "Full Stack Web Development": Circle,
  "Data Science Bootcamp": Circle,
  "DSA Pattern & CP": Circle,
  "DSA MAANG": Circle,
};

export default function MocksPage() {
  const [activeTab, setActiveTab] = useState<Category>("Data Analytics");
  const activeMocks = allMocks[activeTab];

  const freeCount = useMemo(
    () =>
      activeMocks.filter((mock) => {
        const text = `${mock.title} ${mock.desc}`.toLowerCase();
        return text.includes("free");
      }).length,
    [activeMocks],
  );

  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Quiz & Mocks
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Practice with exam-style mocks, analyze your accuracy, and build
            strong test-day consistency.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
       <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((skills) => {
          const active = activeTab === skills;
          return (
            <button
              key={skills}
              onClick={() => setActiveTab(skills)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                active
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}>
              <span
                className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                  active ? "border-blue-600" : "border-slate-400"
                }`}>
                {active && (
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                )}
              </span>
              {skills}
            </button>
          );
        })}
      </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
        {activeMocks.map((mock) => (
          <article
            key={mock.title + mock.link}
            className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <FileText size={18} />
              </span>
              {mock.desc.toLowerCase().includes("free") && (
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                  Free
                </span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {mock.title}
            </h3>
            <p className="mt-1 min-h-10 text-sm text-slate-600">
              {mock.desc ||
                "Mock tests designed for targeted preparation and timed practice."}
            </p>
            <Link
              href={mock.link}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Open Mock
              <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
