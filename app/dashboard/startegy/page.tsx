"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ExamTab = "MBA" | "IIT JEE";
type IitTrack = "Crash Course" | "2years" | "1years" | "Dropper Batch";
type ColorTone = "blue" | "amber" | "green";
type TargetPercentile = 95 | 99 | 100;

type InfoCard = {
  title: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
  image?: string;
  highlight?: "red" | "blue";
};

type PhaseSectionData = {
  id: string;
  title: string;
  subtitle: string;
  dateNote?: string;
  statusLeft?: string;
  statusRight?: string;
  tone: ColorTone;
  groups: InfoCard[][];
  tips: string[];
};

const toneStyles: Record<
  ColorTone,
  {
    panel: string;
    header: string;
    line: string;
    dot: string;
    bar: string;
    tip: string;
    link: string;
  }
> = {
  blue: {
    panel: "bg-white border-slate-200 shadow-sm",
    header: "border-slate-200 bg-slate-50 text-slate-700",
    line: "bg-blue-200/70",
    dot: "bg-blue-500",
    bar: "bg-blue-500",
    tip: "bg-blue-50 text-blue-700 border border-blue-100",
    link: "text-blue-600",
  },
  amber: {
    panel: "bg-white border-slate-200 shadow-sm",
    header: "border-slate-200 bg-slate-50 text-slate-700",
    line: "bg-amber-200/80",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
    tip: "bg-amber-50 text-amber-700 border border-amber-100",
    link: "text-amber-600",
  },
  green: {
    panel: "bg-white border-slate-200 shadow-sm",
    header: "border-slate-200 bg-slate-50 text-slate-700",
    line: "bg-emerald-200/80",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    tip: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    link: "text-emerald-600",
  },
};

const examTabs: ExamTab[] = ["MBA", "IIT JEE"];
const iitTracks: Array<{ key: IitTrack; label: string }> = [
  { key: "Crash Course", label: "Crash Course" },
  { key: "2years", label: "2 years Course" },
  { key: "1years", label: "1 years Course" },
  { key: "Dropper Batch", label: "Dropper's Batch" },
];

const mbaPhases: PhaseSectionData[] = [
  {
    id: "mba-phase-1",
    title: "Preparation Phase 1",
    subtitle: "Completing Syllabus",
    statusLeft: "Enrolled in iQuanta!",
    statusRight: "if not enrol now...",
    tone: "blue",
    groups: [
      [
        {
          title: "Engineer's VARC Videos",
          ctaLabel: "Watch Now",
          href: "/dashboard/courses",
          image: "https://media.iquanta.in/ui_images/new-dashboard/str_01_img.jpg",
        },
        {
          title: "LRDI?",
          description: "Niche Dekho...",
          image: "https://media.iquanta.in/ui_images/new-dashboard/str_02_img.webp",
        },
        {
          title: "Non Engineer QA Videos",
          ctaLabel: "Watch Now",
          href: "/dashboard/courses",
        },
      ],
      [
        {
          title: "Live Classes",
          description: "Concept builder classes.",
          image: "https://media.iquanta.in/ui_images/new-dashboard/ph_live_classes.webp",
          highlight: "red",
        },
        {
          title: "Application Classes",
          description:
            "iQuanta's unique practice-driven classes handcrafted since 2017.",
          ctaLabel: "Check Now",
          href: "/dashboard/courses",
          image: "https://media.iquanta.in/ui_images/new-dashboard/jeeth_pi.webp",
          highlight: "blue",
        },
      ],
      [
        {
          title: "Dashboard Assignment",
          ctaLabel: "Attempt now",
          href: "/dashboard/courses",
          image:
            "https://media.iquanta.in/ui_images/new-dashboard/ph_ass_0023.webp",
        },
        {
          title: "Practice Sessions",
          ctaLabel: "Start Now",
          href: "/dashboard/courses",
        },
        {
          title: "LRDI Inception",
          description: "Coz they are CAT level!",
          ctaLabel: "Start Now",
          href: "/cat-lrdi-inception",
          image:
            "https://media.iquanta.in/ui_images/new-dashboard/ph_ass_0024.webp",
        },
      ],
      [
        {
          title: "CAT Books",
          ctaLabel: "Buy Now",
          href: "/best-cat-books",
          image: "https://media.iquanta.in/ui_images/new-dashboard/ph_cat_books.webp",
        },
        {
          title: "CAT Level Marathons",
          ctaLabel: "Check Now",
          href: "/dashboard/courses",
        },
        {
          title: "IIM ABC Batch",
          description: "Can take along with mocks too.",
          ctaLabel: "Start Now",
          href: "/details/cat-full-course",
        },
      ],
    ],
    tips: ["Like this syllabus will be over in 3-4 months and mocks start."],
  },
  {
    id: "mba-phase-2",
    title: "Preparation Phase 2",
    subtitle: "After Syllabus Completion",
    dateNote: "From June",
    statusLeft: "After Syllabus",
    tone: "amber",
    groups: [
      [
        {
          title: "Mocks & Sectionals",
          ctaLabel: "Attempt Now",
          href: "/dashboard/mocks",
          image:
            "https://media.iquanta.in/ui_images/new-dashboard/mocks_img_023.webp",
        },
        {
          title: "More Practice Sessions",
          ctaLabel: "Start Now",
          href: "/dashboard/courses",
        },
        {
          title: "Topic Wise Marathons",
          ctaLabel: "Watch Now",
          href: "/dashboard/courses",
        },
      ],
    ],
    tips: [
      "Start sectionals when 60% syllabus is done in that section.",
      "Start taking mocks when 60% syllabus overall is over.",
    ],
  },
  {
    id: "mba-phase-3",
    title: "Preparation Phase 3",
    subtitle: "Rigorous Practice",
    dateNote: "From September",
    statusLeft: "Crash Course Starts (Included in CAT Full Course)",
    tone: "green",
    groups: [
      [
        {
          title: "Quant",
          description: "Questions: 50 | Sectional: 1",
        },
        {
          title: "VARC",
          description: "Sets: 3-4 | Reading Material: 1-2",
        },
        {
          title: "LRDI",
          description: "Sets: 3-4 | Sectional: 1-2",
        },
      ],
      [
        {
          title: "Take 50 Mocks till CAT",
          description: "Aim: 100%ile",
          ctaLabel: "Start Now",
          href: "https://facebook.com/groups/iimabc2024/",
        },
      ],
    ],
    tips: ["Take 50 Mocks till CAT to achieve your goal 100%ile."],
  },
];

const iitPhasesByTrack: Record<IitTrack, PhaseSectionData[]> = {
  "Crash Course": [
    {
      id: "iit-crash-1",
      title: "Preparation Phase 1",
      subtitle: "Complete Revision of Syllabus",
      dateNote: "Batch Starts From: 20th Jan",
      statusLeft: "Enrolled in iQuanta!",
      statusRight: "if not enrol now...",
      tone: "blue",
      groups: [
        [
          {
            title: "Physics, Chemistry and Maths Strategy",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
            image: "https://media.iquanta.in/ui_images/iit-jee/Conceptual videos.jpeg",
          },
          {
            title: "Overall Strategy",
            description: "Niche Dekho...",
            image:
              "https://www.iquanta.in/blog/wp-content/uploads/2024/11/QxFM-aqKwZE-HQ-1.jpg",
          },
          {
            title: "80+ Chapterwise Tests",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
          },
        ],
        [
          {
            title: "Recorded Lectures + Concept Builder Videos",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
            image:
              "https://www.iquanta.in/blog/wp-content/uploads/2024/11/faculty-672c87b16a552.webp",
            highlight: "red",
          },
          {
            title: "100+ Application Classes",
            description: "Questions practice sessions.",
            ctaLabel: "Check Now",
            href: "/dashboard/courses",
            image: "https://media.iquanta.in/ui_images/new-dashboard/jeeth_pi.webp",
            highlight: "blue",
          },
        ],
        [
          {
            title: "Dashboard Assignment",
            ctaLabel: "Attempt now",
            href: "/dashboard/courses",
            image:
              "https://www.iquanta.in/blog/wp-content/uploads/2024/11/application-672c877d0b8b0.webp",
          },
          {
            title: "Practice Sessions",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "JEE Test Series",
            ctaLabel: "Start Now",
            href: "/jee-mock-test",
            image: "https://media.iquanta.in/ui_images/iit-jee/chip-3.jpg",
          },
        ],
      ],
      tips: ["With overall revision brush up all concepts and formulas."],
    },
    {
      id: "iit-crash-2",
      title: "Last Phase",
      subtitle: "Final Practice",
      tone: "amber",
      groups: [
        [
          {
            title: "Free Mentorship by IIT Alumni",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "Test Series",
            ctaLabel: "Start Now",
            href: "/jee-mock-test",
          },
          {
            title: "Video Solutions, JEE Past Papers",
            ctaLabel: "Start Now",
            href: "/jee-mock-test",
          },
        ],
      ],
      tips: [
        "Attend live marathons and learn shortcuts and formulas for your target rank.",
      ],
    },
  ],
  "Dropper Batch": [
    {
      id: "iit-dropper-1",
      title: "Phase 1",
      subtitle: "Detailed Syllabus Coverage",
      dateNote: "Batch Starts From: June 1st Week",
      statusLeft: "Enrolled in iQuanta!",
      statusRight: "if not enrol now...",
      tone: "blue",
      groups: [
        [
          {
            title: "Physics, Chemistry and Maths Strategy",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
            image: "https://media.iquanta.in/ui_images/iit-jee/Conceptual videos.jpeg",
          },
          {
            title: "Overall Strategy",
            description: "Niche Dekho...",
            image:
              "https://www.iquanta.in/blog/wp-content/uploads/2024/11/QxFM-aqKwZE-HQ-1.jpg",
          },
          {
            title: "1000+ Video Lectures",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
          },
        ],
        [
          {
            title: "Live Classes",
            description: "Concept clarity sessions.",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "Application Classes",
            description: "Questions practice sessions.",
            ctaLabel: "Check Now",
            href: "/dashboard/courses",
            image: "https://media.iquanta.in/ui_images/new-dashboard/jeeth_pi.webp",
          },
        ],
      ],
      tips: [
        "Cover the entire syllabus in 3-4 months and build an in-depth pattern understanding.",
      ],
    },
    {
      id: "iit-dropper-2",
      title: "Preparation Phase 2",
      subtitle: "Post Syllabus Completion",
      dateNote: "Last Week Nov",
      statusLeft: "After Syllabus",
      tone: "amber",
      groups: [
        [
          {
            title: "JEE Mocks: 40 Sectional + 20 Full",
            ctaLabel: "Attempt Now",
            href: "/dashboard/mocks",
          },
          {
            title: "Weekly Mentor Driven Practice Session",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "All India Test Series",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
          },
        ],
      ],
      tips: ["Take mock tests and analyze results to test your preparedness."],
    },
    {
      id: "iit-dropper-3",
      title: "Preparation Phase 3",
      subtitle: "Rigorous Practice",
      dateNote: "15th Dec",
      statusLeft: "Crash Course Starts (Included in IIT JEE Full Course)",
      tone: "green",
      groups: [
        [
          { title: "Rigorous Practice" },
          { title: "Attend Live Marathons" },
          { title: "Know all shortcuts and formulas" },
          { title: "Test Series" },
        ],
        [
          {
            title: "Take Mocks till IIT JEE",
            ctaLabel: "Start Now",
            href: "/jee-mock-test",
          },
        ],
      ],
      tips: [
        "Attend live marathons and know all shortcuts and formulas to achieve your goal.",
      ],
    },
  ],
  "1years": [
    {
      id: "iit-1yr-1",
      title: "Preparation Phase 1",
      subtitle: "Detailed Syllabus Coverage",
      dateNote: "Starts From: 15/03/2025",
      statusLeft: "Enrolled in iQuanta!",
      statusRight: "if not enrol now...",
      tone: "blue",
      groups: [
        [
          {
            title: "Physics, Chemistry and Maths Strategy",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
            image: "https://media.iquanta.in/ui_images/iit-jee/Conceptual videos.jpeg",
          },
          {
            title: "Overall Strategy",
            description: "Niche Dekho...",
            image:
              "https://www.iquanta.in/blog/wp-content/uploads/2024/11/QxFM-aqKwZE-HQ-1.jpg",
          },
          {
            title: "1000+ Video Lectures",
            description: "Live doubt and problem solving sessions online.",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
          },
        ],
      ],
      tips: [
        "Cover class 11 and 12 syllabus fully and build in-depth exam awareness.",
      ],
    },
    {
      id: "iit-1yr-2",
      title: "Preparation Phase 2",
      subtitle: "Post Syllabus Completion",
      dateNote: "From June",
      statusLeft: "After Syllabus",
      tone: "amber",
      groups: [
        [
          {
            title: "JEE Mocks 40 Sectional & 20 Full",
            ctaLabel: "Attempt Now",
            href: "/dashboard/mocks",
          },
          {
            title: "Weekly Mentor Driven Practice Session",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "All India Test Series",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
          },
        ],
      ],
      tips: ["Take mock tests and analyze mock results regularly."],
    },
    {
      id: "iit-1yr-3",
      title: "Preparation Phase 3",
      subtitle: "Rigorous Practice",
      dateNote: "From September",
      statusLeft: "Crash Course Starts (Included in IIT JEE Full Course)",
      tone: "green",
      groups: [
        [
          { title: "Rigorous Practice" },
          { title: "Attend Live Marathons" },
          { title: "Know all shortcuts and formulas" },
          { title: "Test Series" },
        ],
      ],
      tips: [
        "Attend live marathons and know all shortcuts and formulas to achieve your goal.",
      ],
    },
  ],
  "2years": [
    {
      id: "iit-2yr-1",
      title: "Phase 1",
      subtitle: "Detailed Syllabus Coverage",
      dateNote: "Batch Starts From: 1/4/2025",
      tone: "amber",
      groups: [
        [
          {
            title: "Year 1: Basic Concepts + Class 11th Topics",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "Sectional + Test Series",
            ctaLabel: "Attempt Now",
            href: "/dashboard/mocks",
          },
        ],
        [
          {
            title: "Year 2: Class 12th Topics",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "JEE Mocks, 40 Sectional & 20 Full",
            ctaLabel: "Attempt Now",
            href: "/dashboard/mocks",
          },
          {
            title: "Weekly Mentor Driven Practice Session",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
        ],
      ],
      tips: ["Take mock tests and analyze mock results to track readiness."],
    },
    {
      id: "iit-2yr-2",
      title: "Preparation Phase 2",
      subtitle: "Our Features",
      tone: "blue",
      groups: [
        [
          {
            title: "Physics, Chemistry and Maths Strategy",
            ctaLabel: "Watch Now",
            href: "/dashboard/courses",
            image: "https://media.iquanta.in/ui_images/iit-jee/Conceptual videos.jpeg",
          },
          {
            title: "Live Classes",
            description: "Concept clarity sessions.",
            ctaLabel: "Start Now",
            href: "/dashboard/courses",
          },
          {
            title: "100+ Application Classes",
            description: "Questions practice sessions.",
            ctaLabel: "Check Now",
            href: "/dashboard/courses",
          },
        ],
      ],
      tips: ["Use all feature tracks in parallel for faster improvement."],
    },
    {
      id: "iit-2yr-3",
      title: "Preparation Phase 3",
      subtitle: "Rigorous Practice",
      dateNote: "From November",
      statusLeft: "Crash Course Starts (Included in IIT JEE Full Course)",
      tone: "green",
      groups: [
        [
          { title: "Rigorous Practice" },
          { title: "Attend Live Marathons" },
          { title: "Know all shortcuts and formulas" },
        ],
        [
          { title: "Quick Revision of Class 11th Topics" },
          { title: "Full Mock Practice" },
          { title: "Video Solutions" },
        ],
      ],
      tips: [
        "Attend live marathons and practice aggressively to maximize score.",
      ],
    },
  ],
};

const targetPlans: Record<ExamTab, Record<TargetPercentile, string[]>> = {
  MBA: {
    95: ["20 QA Daily", "1-2 RC Sets", "1-2 LRDI Sets", "15-20 Mocks till CAT"],
    99: [
      "30 QA Daily",
      "2-3 RC Sets",
      "2-3 LRDI Sets",
      "1 Reading Material",
      "30 Mocks till CAT",
    ],
    100: [
      "50 QA Daily",
      "3-4 RC Sets",
      "3-4 LRDI Sets",
      "1-2 Reading Material",
      "50 Mocks till CAT",
    ],
  },
  "IIT JEE": {
    95: [
      "15 Questions for Physics",
      "20 Questions for Chemistry",
      "10 Questions for Mathematics",
      "1 Mock Test per Week",
    ],
    99: [
      "30 Questions for Physics",
      "40 Questions for Chemistry",
      "25 Questions for Mathematics",
      "3 Mock Tests per Week",
    ],
    100: [
      "50 Questions for Physics",
      "60 Questions for Chemistry",
      "40 Questions for Mathematics",
      "5 Mock Tests per Week",
    ],
  },
};

const importantLinks: Record<ExamTab, Array<{ label: string; href: string }>> = {
  MBA: [
    { label: "Know everything about CAT", href: "/dashboard/exam-details" },
    { label: "CAT Past Papers", href: "/dashboard/free-material" },
    { label: "Free CAT Study Material", href: "/free-cat-study-material" },
    { label: "IIM Call Predictor", href: "/iim-call-predictor" },
  ],
  "IIT JEE": [
    { label: "Know everything about IIT JEE", href: "/dashboard/exam-details" },
    { label: "IIT JEE Past Papers", href: "/dashboard/free-material" },
    { label: "Free IIT JEE Study Material", href: "/jee-study-material" },
  ],
};

function StrategyAction({
  href,
  label,
  className,
}: {
  href?: string;
  label: string;
  className: string;
}) {
  if (!href) {
    return <span className={className}>{label}</span>;
  }

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return <Link href={href} className={className}>{label}</Link>;
}

function ProgressTrack({ tone }: { tone: ColorTone }) {
  const style = toneStyles[tone];

  return (
    <div className="hidden md:flex items-center gap-2 px-8 py-5">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`${tone}-${i}`} className="flex flex-1 items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
          {i < 2 && <span className={`h-px flex-1 ${style.line}`} />}
        </div>
      ))}
    </div>
  );
}

function PhaseSection({ phase }: { phase: PhaseSectionData }) {
  const tone = toneStyles[phase.tone];

  return (
    <section className={`relative overflow-hidden rounded-3xl border p-4 md:p-6 ${tone.panel}`}>
      <div className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} />
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
        {phase.title}: <span className="font-normal">{phase.subtitle}</span>
      </h3>

      {phase.dateNote && (
        <p className="mt-2 text-sm font-semibold text-slate-700">{phase.dateNote}</p>
      )}

      {(phase.statusLeft || phase.statusRight) && (
        <div className={`mt-5 flex flex-col gap-1 rounded-2xl border px-4 py-3 md:flex-row md:items-center md:justify-between ${tone.header}`}>
          <p className="font-semibold">{phase.statusLeft}</p>
          {phase.statusRight && <p className="text-sm font-medium">{phase.statusRight}</p>}
        </div>
      )}

      {phase.groups.map((group, groupIndex) => (
        <div key={`${phase.id}-group-${groupIndex}`}>
          <ProgressTrack tone={phase.tone} />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {group.map((card) => {
              const cardAccent =
                card.highlight === "red"
                  ? "border-red-200 bg-red-50"
                  : card.highlight === "blue"
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 bg-white";

              return (
                <article
                  key={`${phase.id}-${groupIndex}-${card.title}`}
                  className={`relative overflow-hidden rounded-3xl border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow ${cardAccent}`}
                >
                  <div className={card.image ? "pr-24" : ""}>
                    <h4 className="text-base font-semibold leading-tight text-slate-900 md:text-lg">
                      {card.title}
                    </h4>
                    {card.description && (
                      <p className="mt-2 text-sm leading-snug text-slate-600">{card.description}</p>
                    )}

                    {card.ctaLabel && (
                      <StrategyAction
                        href={card.href}
                        label={card.ctaLabel}
                        className={`mt-3 inline-block text-sm font-semibold ${tone.link}`}
                      />
                    )}
                  </div>

                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute bottom-0 right-0 h-20 w-24 object-cover"
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-5">
        <p className="mb-2 text-base font-semibold text-slate-900">Tips</p>
        <div className="space-y-2">
          {phase.tips.map((tip, index) => (
            <p key={`${phase.id}-tip-${tip}`} className={`rounded-2xl px-4 py-3 text-sm font-medium ${tone.tip}`}>
              {index + 1}. {tip}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StrategyPage() {
  const [tab, setTab] = useState<ExamTab>("MBA");
  const [iitTrack, setIitTrack] = useState<IitTrack>("Crash Course");
  const [rangeVal, setRangeVal] = useState(1);

  const targetVal = useMemo<TargetPercentile>(() => {
    if (rangeVal <= 1) return 95;
    if (rangeVal === 2) return 99;
    return 100;
  }, [rangeVal]);

  const phases = tab === "MBA" ? mbaPhases : iitPhasesByTrack[iitTrack];

  return (
    <div className="pb-16 xl:pb-6">
      <header className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="relative space-y-2">
          <nav className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/dashboard" className="hover:text-slate-700">
                  Dashboard
                </Link>
              </li>
              <li>/</li>
              <li className="font-medium text-slate-700">Strategy</li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900">Strategy</h1>
          <p className="text-sm text-slate-600">
            Structured preparation roadmap with phase-wise actions, practice targets, and important resources.
          </p>
        </div>
      </header>

      <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="flex flex-wrap gap-2">
        {examTabs.map((exam) => (
          <button
            key={exam}
            type="button"
            onClick={() => setTab(exam)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === exam
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {exam}
          </button>
        ))}
        </div>
      </section>

      {tab === "IIT JEE" && (
        <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-3">
          <div className="flex flex-wrap gap-2">
          {iitTracks.map((track) => (
            <button
              key={track.key}
              type="button"
              onClick={() => setIitTrack(track.key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                iitTrack === track.key
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {track.label}
            </button>
          ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-5 xl:col-span-9">
          <div className="hidden justify-end sm:flex">
            <div className="w-fit rounded-2xl bg-blue-600 px-4 py-3 text-right text-white">
              <p className="text-sm font-semibold">24*7 Doubt Solving</p>
              <p className="text-xs text-blue-100">Through your course duration</p>
              <Link
                href="/dashboard/doubt"
                className="mt-2 inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold text-slate-900"
              >
                Ask doubts
              </Link>
            </div>
          </div>

          {phases.map((phase) => (
            <PhaseSection key={phase.id} phase={phase} />
          ))}
        </div>

        <aside className="xl:col-span-3">
          <div className="space-y-4 xl:sticky xl:top-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Daily Practice as per your Target Percentile
              </p>

              <div className="mt-4">
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={1}
                  value={rangeVal}
                  onChange={(event) => setRangeVal(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-blue-600"
                />
                <div className="mt-1 grid grid-cols-3 text-xs font-medium text-slate-500">
                  <span>95</span>
                  <span className="text-center">99</span>
                  <span className="text-right">100</span>
                </div>
              </div>

              <ul className="mt-4 space-y-1 text-sm text-blue-700">
                {targetPlans[tab][targetVal].map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">Important Links</h2>
              <ul className="space-y-2">
                {importantLinks[tab].map((item, index) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-3 py-2 text-sm ${
                        index < 3
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                          : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-blue-500/20 bg-blue-600 p-3 text-white sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">24*7 Doubt Solving</p>
          <Link
            href="/dashboard/doubt"
            className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900"
          >
            Ask doubts
          </Link>
        </div>
      </div>
    </div>
  );
}
