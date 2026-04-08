"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock3, PlayCircle } from "lucide-react";

type Lesson = {
  id: number;
  title: string;
  module: string;
  subtitle: string;
  duration: string;
  image: string;
  embedUrl: string;
};

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Data Analytics",
    subtitle: "SAT Live Classes",
    module: "Module 01",
    duration: "2 Hrs",
    image: "https://media.iquanta.in/ui_images/skills/DAMASTERYPOSTER.jpg",
    embedUrl: "https://www.youtube.com/embed/dCLhUialKPQ?rel=0",
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    subtitle: "React Sprint",
    module: "Module 02",
    duration: "1.5 Hrs",
    image: "https://media.iquanta.in/ui_images/skills/FULLSTACKPOSTER.jpg",
    embedUrl: "https://www.youtube.com/embed/4UZrsTqkcW4?rel=0",
  },
  {
    id: 3,
    title: "Data Science Bootcamp",
    subtitle: "Python for ML",
    module: "Module 03",
    duration: "2 Hrs",
    image: "https://media.iquanta.in/ui_images/skills/DSBOOTCAMPPOSTER.jpg",
    embedUrl: "https://www.youtube.com/embed/bMknfKXIFA8?rel=0",
  },
  {
    id: 4,
    title: "DSA MAANG ",
    subtitle: "Graphs Revision Marathon",
    module: "Module 04",
    duration: "2.5 Hrs",
    image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
    embedUrl: "https://www.youtube.com/embed/bMknfKXIFA8?rel=0",
  },
  {
    id: 5,
    title: "DSA Pattern & Competitive Programming ",
    subtitle: "DP Patterns",
    module: "Module 03",
    duration: "2 Hrs",
    image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
    embedUrl: "https://www.youtube.com/embed/bMknfKXIFA8?rel=0",
  },
];

export default function VideoPlayerPage() {
  const [activeLessonId, setActiveLessonId] = useState(lessons[0].id);
  const activeLesson =
    lessons.find((lesson) => lesson.id === activeLessonId) ?? lessons[0];
    return (
        <div className="space-y-4 pb-6 w-full">
        <section className="grid gap-4 xl:grid-cols-12">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 xl:col-span-8">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {activeLesson.title}
                </h2>
                <p className="mt-1 text-sm text-slate-600">{activeLesson.subtitle}</p>
                {/* <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                    {activeLesson.module}
                </span>                                             
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    <Clock3 className="h-3.5 w-3.5" />
                    {activeLesson.duration}
                </span>
                </div> */}
            </div>
            <div className="overflow-hidden rounded-2xl bg-slate-950">
                <iframe
                src={activeLesson.embedUrl}
                title={activeLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full" />
            </div>
            </article>
            <aside className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 xl:col-span-4">
            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900">Lessons</h3>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                {lessons.length}
                </span>
            </div>
            <div className="mt-4 space-y-3 h-112.5 overflow-auto pr-2.5">
                {lessons.map((lesson) => {
                const isActive = lesson.id === activeLesson.id;
                return (
                    <button
                    key={lesson.id}
                    type="button"
                    onClick={() => setActiveLessonId(lesson.id)}
                    className={`group w-full rounded-2xl border p-2.5 text-left transition cursor-pointer ${
                        isActive
                        ? "border-blue-300 bg-blue-50"
                        : "border-slate-200 bg-slate-50 hover:bg-white"
                    }`}>
                    <div className="flex gap-3 items-center">
                        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-200">
                        <img
                            src={lesson.image}
                            alt={lesson.title}
                            sizes="112px"       
                            className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
                            <PlayCircle className="h-8 w-8 text-white drop-shadow-md" />
                        </div>
                        {isActive && (
                            <div className="absolute top-1.5 left-1.5 rounded-md bg-blue-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                            Playing
                            </div>
                        )}
                        </div>
                        <div className="min-w-0 flex-1">
                        <div className="min-w-0">
                            <p
                            className={`line-clamp-2 text-sm font-semibold transition ${
                                isActive ? "text-blue-900" : "text-slate-900"
                            }`} >
                            {lesson.title}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-600">{lesson.subtitle}</p>
                            <p className="mt-1 text-xs text-slate-500">{lesson.duration}</p>
                        </div>
                        </div>
                    </div>
                    </button>
                );
                })}
            </div>
            </aside>
        </section>
        </div>
    );
}
