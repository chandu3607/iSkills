"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, BookOpen, GraduationCap, Microscope, NotebookPen } from "lucide-react";

type BookCategory = "MBA" | "After 12th" | "IIT JEE" | "NEET";

type BookItem = {
  title: string;
  image: string;
  description: string;
  href: string;
};

const categories: BookCategory[] = ["MBA", "After 12th", "IIT JEE", "NEET"];

const categoryIcons: Record<BookCategory, React.ComponentType<{ size?: number; className?: string }>> = {
  MBA: BookOpen,
  "After 12th": GraduationCap,
  "IIT JEE": NotebookPen,
  NEET: Microscope,
};

const booksByCategory: Record<BookCategory, BookItem[]> = {
  MBA: [
    {
      title: "IIM School Predictor",
      image: "https://media.iquanta.in/ui_images/new-dashboard/tools1.jpeg",
      description: "Get Free IIM School Prediction ",
      href: "/",
    },
    {
      title: "AI SOP Reviewer & Generator",
      image: "https://media.iquanta.in/ui_images/tools4.jpg",
      description: "Get your sop reviewed or generate now. ",
      href: "/",
    },
     {
      title: "CAT 2024 Score vs Percentiler",
      image: "https://media.iquanta.in/ui_images/tools3.jpg",
      description: "Predict your CAT 2024 Percentile.  ",
      href: "/",
    },
     {
      title: "CAT Score Calculator",
      image: "https://media.iquanta.in/ui_images/new-dashboard/tools2.jpeg",
      description: "Get Free CAT Score  ",
      href: "/",
    },
  ],
  "After 12th": [
    {
      title: "IPMAT Books",
      image: "https://media.iquanta.in/ui_images/new-dashboard/ipmat-books.jpeg",
      description: "7 Sets of IPMAT Material updated as per IPMAT 2024 Standards",
      href: "/best-ipmat-books",
    },
    {
      title: "CLAT Books",
      image: "/imgs/clat/clat-mentor-banner.jpg",
      description: "8 Sets of CLAT Material updated as per CLAT 2025 Standards",
      href: "/clat",
    },
  ],
  "IIT JEE": [
    {
      title: "IIT JEE Books",
      image: "https://media.iquanta.in/ui_images/iit-jee/iit-jee-books.png",
      description: "12 Sets of JEE Material updated as per JEE 2025 Standards",
      href: "/jee-study-material",
    },
  ],
  NEET: [
    {
      title: "NEET Books",
      image: "https://media.iquanta.in/ui_images/boooks-NEET.webp",
      description: "12 Sets of NEET Material updated as per NEET 2025 Standards",
      href: "/neet-online-coaching",
    },
  ],
};

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<BookCategory>("MBA");
  const activeBooks = booksByCategory[activeTab];

  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="relative space-y-2">
          <nav className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/dashboard" className="hover:text-slate-700">
                  Dashboard
                </Link>
              </li>
              <li>/</li>
              <li className="font-medium text-slate-700">Tools</li>
            </ol>
          </nav>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Tools</h2>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const active = activeTab === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Icon size={15} />
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {activeBooks.map((book) => (
          <article
            key={book.title}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="p-4 pb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                  <BookOpen size={18} />
                </span>
                <h2 className="text-lg font-semibold text-slate-900">{book.title}</h2>
              </div>
            </div>

            <img src={book.image} alt={book.title} className="h-52 w-full object-cover" />

            <div className="space-y-4 p-4">
              <p className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                {book.description}
              </p>

              <Link
                href={book.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:scale-[1.02] hover:bg-blue-700"
              >
                Click Here
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </article>
        ))}
      </section>

    </div>
  );
}
