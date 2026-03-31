"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

type ExamTab = "MBA" | "IIT JEE" | "NEET";
type MbaBatchTab = "CAT" | "NMAT" | "Last Batch";

type Initiative = {
  title: string;
  link: string;
  img: string;
  content?: string;
};

const examTabs: ExamTab[] = ["MBA", "IIT JEE", "NEET"];

const mbaExamInitiators: Initiative[] = [
  {
    title: "Daily RC",
    link: "https://www.facebook.com/groups/cat2025/permalink/597079019777060/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/2-2.jpg",
    content: "",
  },
  {
    title: "Daily Articles",
    link: "https://www.facebook.com/groups/cat2025/permalink/597079526443676/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/13-13.jpeg",
    content: "",
  },
  {
    title: "VARC Practice Session",
    link: "https://www.facebook.com/groups/cat2025/permalink/596511289833833/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/14-14.jpeg",
    content: "",
  },
  {
    title: "Quant Early Batch Practice Sessions",
    link: "https://www.facebook.com/groups/cat2025/permalink/512288158256147/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/15-15.jpeg",
    content: "",
  },
  {
    title: "Quant Practice Sessions",
    link: "https://www.facebook.com/groups/1171656941187365/permalink/1173192097700516/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/16-16.webp",
    content: "",
  },
  {
    title: "Daily Quiz",
    link: "https://www.facebook.com/groups/1171656941187365/permalink/1179334767086249/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/17-17.webp",
    content: "",
  },
  {
    title: "Vocab and Reading Doze",
    link: "https://www.facebook.com/groups/cat2025/permalink/603504649134497/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/18-18.webp",
    content: "",
  },
  {
    title: "Daily LRDI",
    link: "https://www.facebook.com/groups/1143181460790757/permalink/1154978509611052/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/6-6.jpg",
    content: "",
  },
];

const batchTwo: Initiative[] = [
  {
    title: "Daily RC",
    link: "https://www.facebook.com/groups/1633401987313400/posts/1641173626536236/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/2-2.jpg",
    content: "",
  },
  {
    title: "VARC Practice Session",
    link: "https://www.facebook.com/groups/1633401987313400/permalink/1641121553208110/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/14-14.jpeg",
    content: "",
  },
  {
    title: "Daily LRDI",
    link: "https://www.facebook.com/groups/1768957450722751/permalink/1781406886144474/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/6-6.jpg",
    content: "",
  },
  {
    title: "Quant Practice Sessions",
    link: "https://www.facebook.com/groups/3995014054071668/permalink/4004470776459329/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/16-16.webp",
    content: "",
  },
];

const lastBatch: Initiative[] = [
  {
    title: "Daily RC",
    link: "https://www.facebook.com/share/p/19mFHFfpsj/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/2-2.jpg",
    content: "",
  },
  {
    title: "VARC Practice Session",
    link: "https://www.facebook.com/share/p/19QbNzy7fY/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/14-14.jpeg",
    content: "",
  },
  {
    title: "Daily LRDI",
    link: "https://www.facebook.com/share/p/1Xtgo4m1mG/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/6-6.jpg",
    content: "",
  },
  {
    title: "Quant Practice Sessions",
    link: "https://www.facebook.com/share/p/1BAjUD4gbd/",
    img: "https://media.iquanta.in/ui_images/new-dashboard/16-16.webp",
    content: "",
  },
];

const iitInitiatives: Initiative[] = [
  {
    title: "Free study material for IIT JEE preparation",
    link: "https://chat.whatsapp.com/Jh1f9XQmnUE5mLIp7vOkRG",
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/11/iit-spical-initiative.jpg",
    content: "",
  },
  {
    title: "IIT JEE resources available at no cost.",
    link: "https://chat.whatsapp.com/HLTpQ1hwSyd1KoxwEc4M3m",
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/11/iit-spical-initiative.jpg",
    content: "",
  },
  {
    title: "Access free materials for IIT JEE exam preparation.",
    link: "https://chat.whatsapp.com/EVtZxYoKjFC6Dvm3xMxRPp",
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/11/iit-spical-initiative.jpg",
    content: "",
  },
  {
    title: "Free educational content for IIT JEE aspirants.",
    link: "https://chat.whatsapp.com/Jy4229J6YvLAT4NN9oPLRg",
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/11/iit-spical-initiative.jpg",
    content: "",
  },
  {
    title: "No-cost study resources for IIT JEE.",
    link: "https://chat.whatsapp.com/LUM1EvvhpI6F7zcNpcwp59",
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/11/iit-spical-initiative.jpg",
    content: "",
  },
];

const neetInitiatives: Initiative[] = [
  {
    title: "Free study material for NEET preparation",
    link: "/neet-study-material",
    img: "https://media.iquanta.in/ui_images/neet/neet-special-initiatives.webp",
    content: "",
  },
];

function InitiativeAction({ href }: { href: string }) {
  const className =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        Click Here
        <ArrowUpRight size={14} />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      Click Here
      <ArrowUpRight size={14} />
    </Link>
  );
}

function InitiativeCard({ item }: { item: Initiative }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="p-4 pb-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
            <BookOpen size={18} />
          </span>
          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
        </div>
      </div>

      <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />

      <div className="space-y-3 p-4">
        {item.content && (
          <p className="min-h-10 rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700">
            {item.content}
          </p>
        )}
        {!item.content && <div className="h-1" />}

        <InitiativeAction href={item.link} />
      </div>
    </article>
  );
}

export default function SpecialInitiatorsPage() {
  const [activeTab, setActiveTab] = useState<ExamTab>("MBA");
  const [activeMbaBatch, setActiveMbaBatch] = useState<MbaBatchTab>("CAT");

  const mbaList = useMemo(() => {
    if (activeMbaBatch === "CAT") return mbaExamInitiators;
    if (activeMbaBatch === "NMAT") return batchTwo;
    return lastBatch;
  }, [activeMbaBatch]);

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
              <li className="font-medium text-slate-700">Special Initiatives</li>
            </ol>
          </nav>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Special Initiatives
          </h1>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="flex flex-wrap gap-2">
          {examTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeTab === "MBA" && (
        <section className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <div className="flex flex-wrap gap-2">
              {[
                { key: "CAT" as const, label: "Batch 1" },
                { key: "NMAT" as const, label: "Batch 2" },
                { key: "Last Batch" as const, label: "Last Batch" },
              ].map((batch) => (
                <button
                  key={batch.key}
                  type="button"
                  onClick={() => setActiveMbaBatch(batch.key)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    activeMbaBatch === batch.key
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  {batch.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {mbaList.map((item) => (
              <InitiativeCard key={`${activeMbaBatch}-${item.title}`} item={item} />
            ))}
          </div>
        </section>
      )}

      {activeTab === "IIT JEE" && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {iitInitiatives.map((item) => (
            <InitiativeCard key={item.link} item={item} />
          ))}
        </section>
      )}

      {activeTab === "NEET" && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {neetInitiatives.map((item) => (
            <InitiativeCard key={item.link} item={item} />
          ))}
        </section>
      )}
    </div>
  );
}
