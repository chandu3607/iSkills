"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Landmark,
  Sparkles,
} from "lucide-react";

type Category = "MBA" | "After 12th" | "IIT JEE" | "NEET" | "banking";

type MockItem = {
  title: string;
  desc: string;
  link: string;
};

const categories: Category[] = ["MBA", "After 12th", "IIT JEE", "NEET"];

const allMocks: Record<Category, MockItem[]> = {
  MBA: [
    { title: "CAT Free Material", desc: "Practice Questions | Past Papers ", link: "" },
    { title: "XAT Free Material", desc: "Past Papers ", link: "" },
    { title: "NMAT Free Material", desc: "Past Papers ", link: "" },
    { title: "SNAP Free Material", desc: "Past Papers ", link: "" },
    { title: "CMAT Free Material", desc: "CMAT 1.0 is Free!", link: "/cmat-mock-test" },
    { title: "MICAT", desc: "MICAT 1.0 is Free!", link: "/micat" },
    { title: "CUET PG Free Material", desc: "CUET PG 1.0 is Free!", link: "/cuet-pg-mock-test" },
    { title: "MHCET", desc: "MHCET PG 1.0 is Free!", link: "/mahcet-mock-test" },
  ],
  "After 12th": [
    { title: "IPMAT Mocks", desc: "Free IPMAT Past Papers", link: "/ipmat-mock-test" },
    { title: "CUET Mocks", desc: "1 Free Mock for Each Subject", link: "/cuet-mock-test" },
    { title: "CLAT Mocks", desc: "1 CLAT Mock is Free", link: "/clat-mock-test" },
  ],
  "IIT JEE": [
    { title: "JEE Main Mocks", desc: "Free JEE Past Papers", link: "/jee-mock-test" },
    { title: "Bitsat Mocks Test", desc: "Free Bitsat Past Papers", link: "/bitsat-mock-test" },
  ],
  NEET: [{ title: "NEET Mocks", desc: "NEET Mock Test 2026", link: "/neet-mock-test" }],
  banking: [
    { title: "Banking Mocks", desc: "Banking Mock Test 2026", link: "/banking-mock-test" },
  ],
};

const categoryIcons: Record<Category, React.ComponentType<{ size?: number; className?: string }>> = {
  MBA: BookOpenCheck,
  "After 12th": GraduationCap,
  "IIT JEE": FileText,
  NEET: FlaskConical,
  banking: Landmark,
};

export default function MocksPage() {
  const [activeTab, setActiveTab] = useState<Category>("MBA");
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
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
      
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
           Free Material 
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Practice with exam-style mocks, analyze your accuracy, and build strong test-day consistency.
          </p>

        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
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
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
        {activeMocks.map((mock) => (
          <article
            key={mock.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
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

            <h3 className="mt-4 text-lg font-semibold text-slate-900">{mock.title}</h3>
            <p className="mt-1 min-h-10 text-sm text-slate-600">
              {mock.desc || "Mock tests designed for targeted preparation and timed practice."}
            </p>

            <Link
              href={mock.link}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open Mock
              <ArrowUpRight size={15} />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
