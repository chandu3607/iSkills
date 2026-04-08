"use client";

import { PlayCircle } from "lucide-react";

type Course = {
  id: number;
  title: string;
  status: "Active" | "Expired";
  image?: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Data Analytics Job Guarantee",
    status: "Active",
    image:
      "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo8594722065.jpeg",
  },
  {
    id: 2,
    title: "Data Analytics Mastery placement Asst..",
    status: "Active",
    image:
      "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo8905820244.jpeg",
  },
  {
    id: 3,
    title: "DSA & System Design ",
    status: "Active",
    image:
      "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo6591873527.jpeg",
  },
  {
    id: 4,
    title: "DSA With Patterns & CP",
    status: "Expired",

    image:
      "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo2942910389.jpeg",
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-5 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            My Courses
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Track your active tracks, resume lessons quickly, and monitor
            completion progress in one place.
          </p>
        </div>
      </section>

      {/* <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search your courses..."
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Explore New Courses
            <ArrowUpRight size={15} />
          </button>
        </div>
      </section> */}

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
        {courses.map((course) => (
          <article
            key={course.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-md">
            {course.image && (
              <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute top-2 left-2 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    course.status === "Active"
                      ? "bg-emerald-600 text-white"
                      : "bg-white/90 text-slate-700 border border-slate-200"
                  }`}>
                  {course.status}
                </span>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2 min-h-10">
                <span className="text-slate-400 mr-1">{course.id}.</span>
                {course.title}
              </h3>
              <button
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium cursor-pointer transition ${
                  course.status === "Active"
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}>
                <PlayCircle size={15} />
                {course.status === "Active" ? "Continue" : "View Course"}
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
