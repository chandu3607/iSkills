"use client";
import { ArrowUpRight, BookOpen, ChevronRight, Goal, Laptop, Wallet, } from "lucide-react";

const kpiCards = [
  {
    title: "Active Programs",
    value: "4",
    icon: BookOpen,
    iconWrap: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    title: "Live Sessions",
    value: "20",
    icon: Laptop,
    iconWrap: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Career Upside",
    value: "2x",
    icon: Wallet,
    iconWrap: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    title: "Job Readiness",
    value: "92%",
    icon: Goal,
    iconWrap: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

const learningTracks = [
  {
    name: "Full Stack Web Development",
    img: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo8594722065.jpeg",
    lesson: "React state patterns and API integration sprint",
  },
  {
    name: "Data Science Bootcamp",
    img: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo8905820244.jpeg",
    lesson: "Feature engineering and model evaluation lab",
  },
  {
    name: "Data Analytics",
    img: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo6591873527.jpeg",
    lesson: "Power BI dashboard storytelling workshop",
  },
  {
    name: "DSA Pattern & Competitive Programming",
    img: "https://s3-ap-south-1.amazonaws.com/iquantamedia/media/logo/course_logo2942910389.jpeg",
    lesson: "Dynamic programming pattern set with mentor review",
  },
];

const todayPlan = [
  {
    title: "Live Full Stack Cohort",
    time: "10:00 AM",
    status: "Live",
    statusStyle: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Portfolio Project Checkpoint",
    time: "02:30 PM",
    status: "Review",
    statusStyle: "bg-blue-100 text-blue-700",
  },
  {
    title: "1:1 Doubt Solving Window",
    time: "08:00 PM",
    status: "Scheduled",
    statusStyle: "bg-violet-100 text-violet-700",
  },
];

export default function DashboardHome() {
  return (
    <div className="space-y-4 sm:space-y-6 pb-6 w-full">
      <section className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-4 sm:p-5 px-4 sm:px-6 lg:col-span-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-blue-200/35 blur-2xl" />
          {/* <div className="pointer-events-none absolute -bottom-20 left-10 sm:left-20 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-emerald-100/60 blur-2xl" /> */}
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2 sm:space-y-3 ">
              <h2 className="text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-3xl">
                Welcome back, Leo. Keep your coding momentum high.
              </h2>
              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600">
                Resume your live cohorts, ship project milestones, and stay on
                track with the iSkills roadmap built for salary growth and job
                readiness.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 transition hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <span
                  className={`inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl border ${card.iconWrap}`}>
                  <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </span>
              </div>
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs uppercase tracking-[0.11em] text-slate-400">
                {card.title}
              </p>
              <p className="mt-0.5 sm:mt-1 text-lg sm:text-2xl font-semibold text-slate-900 truncate">
                {card.value}
              </p>

            </article>
          );
        })}
      </section>
      <section className="grid gap-3 sm:gap-4 md:grid-cols-12">
        <article className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white md:col-span-7 flex flex-col overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 px-4 sm:px-5 py-3 sm:py-4 gap-2 sm:gap-0">
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                Your Learning Tracks
              </h2>
              <p className="text-[11px] sm:text-sm text-slate-500 truncate">
                Continue the iSkills programs shaping your career path.
              </p>
            </div>
            <button className="w-full sm:w-auto rounded-xl border border-slate-200 bg-slate-50 sm:bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 shrink-0">
              Explore Programs
            </button>
          </div>
          <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 overflow-y-auto max-h-90 sm:max-h-none">
            {learningTracks.map((course) => (
              <div
                key={course.name}
                className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-2.5 sm:p-3 transition hover:border-slate-300 hover:bg-white overflow-hidden">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 overflow-hidden">
                    <div className="relative h-11 w-12 sm:h-12 sm:w-36 shrink-0 overflow-hidden rounded-md bg-linear-to-br from-blue-100 to-slate-200">
                      <img
                        src={course.img}
                        alt={course.name}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <p className="truncate whitespace-nowrap text-xs sm:text-sm font-semibold text-slate-900">
                        {course.name}
                      </p>
                      <p className="truncate whitespace-nowrap text-[10px] sm:text-xs text-slate-500">
                        {course.lesson}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 ml-2">
                    <ChevronRight
                      size={16}
                      className="text-slate-400"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
        <div className="space-y-3 sm:space-y-4 md:col-span-5 flex flex-col">
          <article className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3 sm:p-5 flex-1 ">
            <div className="flex items-center justify-between mb-2 sm:mb-0">
              <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                Today&apos;s Flow
              </h2>
              <span className="rounded-full bg-slate-100 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-slate-600 shrink-0">
                {todayPlan.length} tasks
              </span>
            </div>
            <div className="sm:mt-4 space-y-2 sm:space-y-3 overflow-y-auto max-h-50 md:max-h-none scrollbar-hide">
              {todayPlan.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 sm:py-2.5 gap-2">
                  <div className="min-w-0 flex-1 mr-2 overflow-hidden">
                    <p className="truncate text-xs sm:text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="truncate text-[10px] sm:text-xs text-slate-500">
                      {item.time}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold ${item.statusStyle}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </article>
          <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-linear-to-br from-blue-50 via-white to-indigo-50 p-4 sm:p-5 flex-1">
            <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 sm:h-36 sm:w-36 rounded-full bg-blue-200/45 blur-2xl" />
            <div className="relative">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                Spotlight
              </p>
              <h3 className="mt-1 sm:mt-1.5 text-base sm:text-xl font-semibold leading-tight text-slate-900">
                Build production-ready skills with live cohorts and portfolio projects.
              </h3>
              <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-sm text-slate-600 max-w-70 sm:max-w-none">
                From Full Stack and Data Science to DSA and Analytics, iSkills is
                structured for real outcomes with mentor-led sessions, project
                reviews, and career support.
              </p>
              <button className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-semibold text-white transition hover:bg-slate-800">
                Explore iSkills
                <ArrowUpRight size={14} className="sm:h-3.75 sm:w-3.75" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
