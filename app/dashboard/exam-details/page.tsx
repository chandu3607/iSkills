"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock3, PlayCircle, Radio, Users } from "lucide-react";
import Link from "next/link";

type Category =
  | "All Tracks"
  | "Data Analytics"
  | "Full Stack Web Development"
  | "Data Science Bootcamp"
  | "DSA MAANG"
  | "DSA Pattern & Competitive Programming";

type ModeFilter = "All" | "Live" | "Recorded";
type BatchFilter = "All" | "Batch 1" | "Batch 2" | "Batch 3";

type ClassSession = {
  id: number;
  title: string;
  category: Exclude<Category, "All Tracks">;
  mode: Exclude<ModeFilter, "All">;
  batch: Exclude<BatchFilter, "All">;
  date: string;
  time: string;
  duration: string;
  mentor: string;
  image: string;
  tag: string;
};

const categories: Category[] = [
  "All Tracks",
  "Data Analytics",
  "Full Stack Web Development",
  "Data Science Bootcamp",
  "DSA MAANG",
  "DSA Pattern & Competitive Programming",
];

const sessions: ClassSession[] = [
  {
    id: 1,
    title: "Data Analytics - SAT Live Classes",
    category: "Data Analytics",
    mode: "Live",
    batch: "Batch 1",
    date: "12 Dec 2024",
    time: "09:00 AM",
    duration: "2 Hrs",
    mentor: "Mentor Room with Vivek",
    image: "https://media.iquanta.in/ui_images/skills/DAMASTERYPOSTER.jpg",
    tag: "Live Class",
  },
  {
    id: 2,
    title: "Full Stack Web Development - React Sprint",
    category: "Full Stack Web Development",
    mode: "Recorded",
    batch: "Batch 2",
    date: "13 Dec 2024",
    time: "06:30 PM",
    duration: "1.5 Hrs",
    mentor: "Recorded by Product Engineering Team",
    image: "https://media.iquanta.in/ui_images/skills/FULLSTACKPOSTER.jpg",
    tag: "Recorded",
  },
  {
    id: 3,
    title: "Data Science Bootcamp - Python for ML",
    category: "Data Science Bootcamp",
    mode: "Live",
    batch: "Batch 1",
    date: "14 Dec 2024",
    time: "08:00 PM",
    duration: "2 Hrs",
    mentor: "Live with Ananya Sharma",
    image: "https://media.iquanta.in/ui_images/skills/DSBOOTCAMPPOSTER.jpg",
    tag: "Mentor Live",
  },
  {
    id: 4,
    title: "DSA MAANG - Graphs Revision Marathon",
    category: "DSA MAANG",
    mode: "Recorded",
    batch: "Batch 3",
    date: "15 Dec 2024",
    time: "07:30 AM",
    duration: "2.5 Hrs",
    mentor: "Recorded by Interview Prep Team",
    image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
    tag: "Practice Heavy",
  },
  {
    id: 5,
    title: "DSA Pattern & Competitive Programming - DP Patterns",
    category: "DSA Pattern & Competitive Programming",
    mode: "Live",
    batch: "Batch 2",
    date: "16 Dec 2024",
    time: "09:30 PM",
    duration: "2 Hrs",
    mentor: "Live with Shashank",
    image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
    tag: "Live Problem Solving",
  },
];
const modeOptions: ModeFilter[] = ["All", "Live", "Recorded"];
const batchOptions: BatchFilter[] = ["All", "Batch 1", "Batch 2", "Batch 3"];
export default function ExamDetailsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Tracks");
  const [modeFilter, setModeFilter] = useState<ModeFilter>("All");
  const [batchFilter, setBatchFilter] = useState<BatchFilter>("All");
  const filteredSessions = useMemo(
    () =>
      sessions.filter((session) => {
        const matchesCategory =
          activeCategory === "All Tracks" ||
          session.category === activeCategory;
        const matchesMode = modeFilter === "All" || session.mode === modeFilter;
        const matchesBatch =
          batchFilter === "All" || session.batch === batchFilter;
        return matchesCategory && matchesMode && matchesBatch;
      }),
    [activeCategory, batchFilter, modeFilter],
  );

  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        {/* <div className="pointer-events-none absolute bottom-0 left-10 h-28 w-28 rounded-full bg-emerald-100/60 blur-3xl" /> */}
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Classes
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Stay on top of live sessions, pick up recorded lessons quickly,
              and keep every batch track inside the dashboard flow.
            </p>
          </div>
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-current" />
                  )}
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid gap-3 grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block md:text-xs md:ml-0 ml-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Mode
              </span>
              <select
                value={modeFilter}
                onChange={(event) =>
                  setModeFilter(event.target.value as ModeFilter)
                }
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-blue-200 focus:bg-white">
                {modeOptions.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block md:text-xs text-[9px] md:ml-0 ml-2 font-semibold uppercase tracking-[0.12em] text-slate-500">
                Batch
              </span>
              <select
                value={batchFilter}
                onChange={(event) =>
                  setBatchFilter(event.target.value as BatchFilter)
                }
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-blue-200 focus:bg-white" >
                {batchOptions.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4">
        {filteredSessions.map((session) => {
          const isLive = session.mode === "Live";
          return (
            <article
              key={session.id}
              className="group rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-md">
              <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:gap-5 md:p-5">
                <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 md:h-28 md:w-64 md:min-w-64">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="h-full w-full object-cover"/>
                  <span
                    className={`absolute top-2 left-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      isLive
                        ? "bg-emerald-600 text-white"
                        : "bg-white/90 text-slate-700 border border-slate-200"
                    }`}>
                    {isLive ? <Radio size={10} /> : <PlayCircle size={10} />}
                    {session.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <span className="inline-block rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700">
                        {session.batch}
                      </span>
                      <h2 className="mt-2 text-sm font-semibold text-slate-900 leading-snug md:text-base line-clamp-2">
                        {session.title}
                      </h2>
                    </div>
                  <Link href={"/dashboard/videoplayer"}  > 
                    <button
                      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                        isLive
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`} >
                      <PlayCircle size={16} />
                      {isLive ? "Watch Now" : "Open"}
                    </button>
                    </Link>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock3 size={14} />
                      <span>{session.time}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">•</span>
                      <span className="ml-2">{session.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      {filteredSessions.length === 0 && (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-lg font-semibold text-slate-900">
            No classes match these filters.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Try switching the batch or mode to see more sessions.
          </p>
        </section>
      )}
    </div>
  );
}
