"use client";

import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  PlayCircle,
  Search,
  Sparkles,
} from "lucide-react";

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
    image: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo8594722065.jpeg",
  },
  {
    id: 2,
    title: "Data Analytics Mastery placement Asst..",
    status: "Active",
    image: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo8905820244.jpeg",
  },
  {
    id: 3,
    title: "DSA & System Design ",
    status: "Active",
    image: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo6591873527.jpeg",
  },
  {
    id: 4,
    title: "DSA With Patterns & CP",
    status: "Expired",
   
    image: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo2942910389.jpeg",
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
            Track your active tracks, resume lessons quickly, and monitor completion progress in one place.
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
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-sm">
            {course.image && (
              <div className="relative h-30 w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="line-clamp-2 text-md font-semibold text-slate-900 leading-5">
                  {course.id}. {course.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    course.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`} >
                  {course.status}
                </span>
              </div>


              <button
                className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition ${
                  course.status === "Active"
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-100"
                }`} >
                <PlayCircle size={16} />
                {course.status === "Active" ? "Start Course" : "View Course"}
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
