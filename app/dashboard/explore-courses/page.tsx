"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Category =
  | "Data Analytics"
  | "Full Stack Web Development"
  | "Data Science Bootcamp"
  | "DSA Pattern & CP"
  | "DSA MAANG";

type CourseItem = {
  title: string;
  link: string;
  image: string;
};

const categories: Category[] = [
  "Data Analytics",
  "Full Stack Web Development",
  "Data Science Bootcamp",
  "DSA Pattern & CP",
  "DSA MAANG",
];

const allCourses: Record<Category, CourseItem[]> = {
  "Data Analytics": [
    {
      title: "Data Analytics Mastery",
      link: "",
      image: "https://media.iquanta.in/ui_images/skills/DAMASTERYPOSTER.jpg",
    },
  ],

  "Full Stack Web Development": [
    {
      title: "Full Stack Web Development",
      link: "",
      image: "https://media.iquanta.in/ui_images/skills/FULLSTACKPOSTER.jpg",
    },
  ],

  "Data Science Bootcamp": [
    {
      title: "Data Science Bootcamp",
      link: "",
      image: "https://media.iquanta.in/ui_images/skills/DSBOOTCAMPPOSTER.jpg",
    },
  ],

  "DSA Pattern & CP": [
    {
      title: "DSA Pattern & Competitive Programming",
      link: "",
      image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
    },
  ],

  "DSA MAANG": [
    {
      title: "DSA MAANG",
      link: "",
      image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
    },
  ],
};

export default function ExploreCourses() {
  const [activeTab, setActiveTab] = useState<Category>("Data Analytics");
  const activeCourses = allCourses[activeTab];
  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Explore Courses
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            Access all your courses in one place—resume lessons, stay organized,
            and monitor your progress with ease.
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
                  }`} >
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
        {activeCourses.map((course) => (
          <article
            key={course.title + course.link}
            className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:shadow-md hover:border-slate-300">
            {course.image && (
              <div className="h-28 w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
                {course.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">Continue learning</p>
            </div>
            <Link
              href={course.link}
              className="mt-4 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-white bg-blue-700 transition ">
              <span>Open Course</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
