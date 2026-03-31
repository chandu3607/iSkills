"use client";

import { useState } from "react";
import { BookOpenCheck, FileText, Sparkles } from "lucide-react";

type Category = "after12" | "iit" | "neet";
type Track = "cuet" | "ipmat" | "clat" | "iit-jee" | "neet-track";

export default function ExamDetailsPage() {
  const [category, setCategory] = useState<Category>("after12");
  const [track, setTrack] = useState<Track>("cuet");
  const [activeTab, setActiveTab] = useState("");

  const categoryLabel =
    category === "after12" ? "After 12th" : category === "iit" ? "IIT JEE" : "NEET";

  const trackLabel =
    track === "cuet"
      ? "CUET"
      : track === "ipmat"
      ? "IPMAT"
      : track === "clat"
      ? "CLAT"
      : track === "iit-jee"
      ? "IIT JEE"
      : "NEET";

  const tabCount =
    track === "cuet"
      ? 4
      : track === "ipmat"
      ? 6
      : track === "clat"
      ? 6
      : track === "iit-jee"
      ? 5
      : 4;

  const handleCategoryChange = (nextCategory: Category) => {
    setCategory(nextCategory);
    if (nextCategory === "after12") {
      setTrack("cuet");
    } else if (nextCategory === "iit") {
      setTrack("iit-jee");
    } else {
      setTrack("neet-track");
    }
    setActiveTab("");
  };

  const handleTrackChange = (nextTrack: Track) => {
    setTrack(nextTrack);
    setActiveTab("");
  };

  const topBtn = (isActive: boolean) =>
    `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "border-blue-200 bg-blue-50 text-blue-700"
        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
    }`;

  const chipBtn = (isActive: boolean) =>
    `rounded-lg border px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "border-slate-900 bg-slate-900 text-white"
        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
    }`;

  const tabBtn = (isActive: boolean) =>
    `rounded-lg border px-3.5 py-2 text-sm font-medium transition ${
      isActive
        ? "border-blue-200 bg-blue-50 text-blue-700"
        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
    }`;

  return (
    <div className="space-y-5 pb-8">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-5 md:p-6">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative">
          
          <h2 className=" text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Exam Details
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Explore exam structure, eligibility, and timelines with category-wise tabs.
          </p>

            <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => handleCategoryChange("after12")} className={topBtn(category === "after12")}>
            <BookOpenCheck size={14} />
            After 12th
          </button>
          <button type="button" onClick={() => handleCategoryChange("iit")} className={topBtn(category === "iit")}>
            <FileText size={14} />
            IIT JEE
          </button>
          <button type="button" onClick={() => handleCategoryChange("neet")} className={topBtn(category === "neet")}>
            <FileText size={14} />
            NEET
          </button>
        </div>

        {category === "after12" && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => handleTrackChange("cuet")} className={chipBtn(track === "cuet")}>
              CUET
            </button>
            <button type="button" onClick={() => handleTrackChange("ipmat")} className={chipBtn(track === "ipmat")}>
              IPMAT
            </button>
            <button type="button" onClick={() => handleTrackChange("clat")} className={chipBtn(track === "clat")}>
              CLAT
            </button>
          </div>
        )}

        {category === "iit" && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className={chipBtn(true)}>
              IIT JEE
            </button>
          </div>
        )}

        {category === "neet" && (
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className={chipBtn(true)}>
              NEET
            </button>
          </div>
        )}
      </div>

         
        </div>
      </section>

    

      <section className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
        <h3 className="text-base font-semibold text-slate-900">Topic Details</h3>
        <p className="mt-1 text-sm text-slate-500">
          Pick a section below to read detailed content for the selected track.
        </p>

        <div className="mb-5 mt-4 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          {track === "cuet" && (
            <>
              <button type="button" onClick={() => setActiveTab("")} className={tabBtn(activeTab === "")}>
                What is CUET UG?
              </button>
              <button type="button" onClick={() => setActiveTab("pattern")} className={tabBtn(activeTab === "pattern")}>
                CUET UG Exam Pattern
              </button>
              <button type="button" onClick={() => setActiveTab("calendar")} className={tabBtn(activeTab === "calendar")}>
                CUET UG Exam Calendar
              </button>
              <button type="button" onClick={() => setActiveTab("eligibility")} className={tabBtn(activeTab === "eligibility")}>
                CUET UG Eligibility
              </button>
            </>
          )}

          {track === "ipmat" && (
            <>
              <button type="button" onClick={() => setActiveTab("")} className={tabBtn(activeTab === "")}>
                Everything about IPMAT
              </button>
              <button type="button" onClick={() => setActiveTab("syllabus")} className={tabBtn(activeTab === "syllabus")}>
                IPMAT Syllabus
              </button>
              <button type="button" onClick={() => setActiveTab("pattern")} className={tabBtn(activeTab === "pattern")}>
                IPMAT Exam Pattern
              </button>
              <button type="button" onClick={() => setActiveTab("cutoff")} className={tabBtn(activeTab === "cutoff")}>
                IPMAT Cutoff
              </button>
              <button type="button" onClick={() => setActiveTab("colleges")} className={tabBtn(activeTab === "colleges")}>
                IPM All Colleges
              </button>
              <button type="button" onClick={() => setActiveTab("eligibility")} className={tabBtn(activeTab === "eligibility")}>
                IPMAT Eligibility
              </button>
            </>
          )}

          {track === "clat" && (
            <>
              <button type="button" onClick={() => setActiveTab("")} className={tabBtn(activeTab === "")}>
                Everything about CLAT
              </button>
              <button type="button" onClick={() => setActiveTab("syllabus")} className={tabBtn(activeTab === "syllabus")}>
                CLAT Syllabus
              </button>
              <button type="button" onClick={() => setActiveTab("pattern")} className={tabBtn(activeTab === "pattern")}>
                CLAT Exam Pattern
              </button>
              <button type="button" onClick={() => setActiveTab("cutoff")} className={tabBtn(activeTab === "cutoff")}>
                CLAT Cutoff
              </button>
              <button type="button" onClick={() => setActiveTab("colleges")} className={tabBtn(activeTab === "colleges")}>
                CLAT All Colleges
              </button>
              <button type="button" onClick={() => setActiveTab("eligibility")} className={tabBtn(activeTab === "eligibility")}>
                Exam Eligibility
              </button>
            </>
          )}

          {track === "iit-jee" && (
            <>
              <button type="button" onClick={() => setActiveTab("")} className={tabBtn(activeTab === "")}>
                What is IIT?
              </button>
              <button type="button" onClick={() => setActiveTab("about")} className={tabBtn(activeTab === "about")}>
                About Exam
              </button>
              <button type="button" onClick={() => setActiveTab("dates")} className={tabBtn(activeTab === "dates")}>
                IIT Important Dates
              </button>
              <button type="button" onClick={() => setActiveTab("mains")} className={tabBtn(activeTab === "mains")}>
                JEE Mains Eligibility
              </button>
              <button type="button" onClick={() => setActiveTab("adv")} className={tabBtn(activeTab === "adv")}>
                JEE Advanced Eligibility
              </button>
            </>
          )}

          {track === "neet-track" && (
            <>
              <button type="button" onClick={() => setActiveTab("")} className={tabBtn(activeTab === "")}>
                What is NEET?
              </button>
              <button type="button" onClick={() => setActiveTab("nta")} className={tabBtn(activeTab === "nta")}>
                What is NTA?
              </button>
              <button type="button" onClick={() => setActiveTab("eligibility")} className={tabBtn(activeTab === "eligibility")}>
                NEET Eligibility
              </button>
              <button type="button" onClick={() => setActiveTab("dates")} className={tabBtn(activeTab === "dates")}>
                NEET Important Dates
              </button>
            </>
          )}
        </div>

        <div className="prose prose-slate max-w-none text-[15px] leading-7 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-slate-200 [&_td]:p-3 [&_th]:border [&_th]:border-slate-200 [&_th]:bg-slate-50 [&_th]:p-3 [&_th]:text-left">
          {track === "cuet" && activeTab === "" && (
            <>
              <h3>Common University Entrance Test (CUET UG)</h3>
              <p>CUET UG is a centralized entrance test for admission into multiple central, state and private universities in India.</p>
              <h4>Top Universities</h4>
              <ul>
                <li>Delhi University</li>
                <li>Banaras Hindu University</li>
                <li>University of Allahabad</li>
                <li>Jamia Millia Islamia</li>
                <li>AMU Aligarh</li>
              </ul>
            </>
          )}

          {track === "cuet" && activeTab === "pattern" && (
            <>
              <h3>CUET UG Exam Pattern</h3>
              <table>
                <thead>
                  <tr><th>Section</th><th>Questions</th><th>Time</th></tr>
                </thead>
                <tbody>
                  <tr><td>Section 1: Languages</td><td>50</td><td>45 minutes</td></tr>
                  <tr><td>Section 2: Domain Subjects</td><td>50/45</td><td>45 minutes</td></tr>
                  <tr><td>Section 3: General Test</td><td>60</td><td>60 minutes</td></tr>
                </tbody>
              </table>
            </>
          )}

          {track === "cuet" && activeTab === "calendar" && (
            <>
              <h3>CUET UG Exam Calendar</h3>
              <table>
                <thead>
                  <tr><th>Event</th><th>Tentative Time</th></tr>
                </thead>
                <tbody>
                  <tr><td>Notification Release</td><td>First week of February</td></tr>
                  <tr><td>Application Start</td><td>Second week of February</td></tr>
                  <tr><td>Exam Window</td><td>May (3rd to 4th week)</td></tr>
                  <tr><td>Result</td><td>June</td></tr>
                </tbody>
              </table>
            </>
          )}

          {track === "cuet" && activeTab === "eligibility" && (
            <>
              <h3>CUET UG Eligibility</h3>
              <ul>
                <li>General category: minimum 50% in class 12.</li>
                <li>SC/ST/OBC/EWS/PwD: minimum 45% in class 12.</li>
                <li>Class 12 appearing students can also apply.</li>
              </ul>
            </>
          )}

          {track === "ipmat" && activeTab === "" && (
            <>
              <h3>Everything about IPMAT</h3>
              <p>IPMAT is an entrance exam for integrated management programs. It opens pathways to top IPM institutes including IIM programs.</p>
            </>
          )}

          {track === "ipmat" && activeTab === "syllabus" && (
            <>
              <h3>IPMAT Syllabus</h3>
              <ul>
                <li>Quantitative Aptitude</li>
                <li>Logical Reasoning</li>
                <li>Verbal Ability</li>
                <li>Higher Mathematics (exam dependent)</li>
              </ul>
            </>
          )}

          {track === "ipmat" && activeTab === "pattern" && (
            <>
              <h3>IPMAT Exam Pattern</h3>
              <p>Pattern varies across IPMAT Indore, IPMAT Rohtak and JIPMAT. Sections primarily include Quant, LR and Verbal components.</p>
            </>
          )}

          {track === "ipmat" && activeTab === "cutoff" && (
            <>
              <h3>IPMAT Cutoff</h3>
              <p>Cutoffs are different each year and vary by institute, reservation category and difficulty level.</p>
            </>
          )}

          {track === "ipmat" && activeTab === "colleges" && (
            <>
              <h3>IPM All Colleges</h3>
              <ul>
                <li>IIM Indore</li>
                <li>IIM Ranchi</li>
                <li>IIM Rohtak</li>
                <li>IIM Jammu</li>
                <li>IIM Bodh Gaya</li>
              </ul>
            </>
          )}

          {track === "ipmat" && activeTab === "eligibility" && (
            <>
              <h3>IPMAT Eligibility</h3>
              <p>Eligibility varies by institute. Most institutes require Class 10 and 12 score thresholds with category relaxations.</p>
            </>
          )}

          {track === "clat" && activeTab === "" && (
            <>
              <h3>Everything about CLAT</h3>
              <p>CLAT is the national entrance exam for admission to NLUs and top law colleges in India.</p>
            </>
          )}

          {track === "clat" && activeTab === "syllabus" && (
            <>
              <h3>CLAT Syllabus</h3>
              <ul>
                <li>English Language</li>
                <li>Current Affairs and General Knowledge</li>
                <li>Legal Reasoning</li>
                <li>Logical Reasoning</li>
                <li>Quantitative Techniques</li>
              </ul>
            </>
          )}

          {track === "clat" && activeTab === "pattern" && (
            <>
              <h3>CLAT Exam Pattern</h3>
              <p>CLAT is typically a 2-hour exam with objective questions and negative marking for incorrect answers.</p>
            </>
          )}

          {track === "clat" && activeTab === "cutoff" && (
            <>
              <h3>CLAT Cutoff</h3>
              <p>Cutoffs vary based on seat matrix, category, and exam difficulty.</p>
            </>
          )}

          {track === "clat" && activeTab === "colleges" && (
            <>
              <h3>CLAT All Colleges</h3>
              <p>CLAT scores are accepted across NLUs and several private law colleges.</p>
            </>
          )}

          {track === "clat" && activeTab === "eligibility" && (
            <>
              <h3>Exam Eligibility</h3>
              <p>For UG law admissions, candidates need class 12 qualification with category-specific minimum marks criteria.</p>
            </>
          )}

          {track === "iit-jee" && activeTab === "" && (
            <>
              <h3>What is IIT?</h3>
              <p>IIT JEE includes JEE Main and JEE Advanced, and is the key path to IITs and other top engineering institutes.</p>
            </>
          )}

          {track === "iit-jee" && activeTab === "about" && (
            <>
              <h3>About Exam</h3>
              <p>JEE Main is conducted by NTA, while JEE Advanced is conducted by IITs on a rotational basis.</p>
            </>
          )}

          {track === "iit-jee" && activeTab === "dates" && (
            <>
              <h3>IIT Important Dates</h3>
              <table>
                <thead>
                  <tr><th>Date</th><th>Event</th></tr>
                </thead>
                <tbody>
                  <tr><td>Jan-Feb</td><td>JEE Main registration windows</td></tr>
                  <tr><td>Apr-May</td><td>Exam sessions</td></tr>
                  <tr><td>May-Jun</td><td>Advanced + Results</td></tr>
                </tbody>
              </table>
            </>
          )}

          {track === "iit-jee" && activeTab === "mains" && (
            <>
              <h3>JEE Mains Eligibility</h3>
              <ul>
                <li>Class 12 with required subject combinations.</li>
                <li>Board marks/percentile criteria as per latest rules.</li>
                <li>Attempt and age criteria as per official notification.</li>
              </ul>
            </>
          )}

          {track === "iit-jee" && activeTab === "adv" && (
            <>
              <h3>JEE Advanced Eligibility</h3>
              <ul>
                <li>Top rankers from JEE Main are eligible.</li>
                <li>Age and attempt limits apply.</li>
                <li>Additional category rules may apply.</li>
              </ul>
            </>
          )}

          {track === "neet-track" && activeTab === "" && (
            <>
              <h3>What is NEET?</h3>
              <p>NEET UG is the standard entrance exam for MBBS/BDS and other medical programs in India.</p>
            </>
          )}

          {track === "neet-track" && activeTab === "nta" && (
            <>
              <h3>What is NTA?</h3>
              <p>NTA is the national testing body that conducts NEET and multiple other major entrance exams.</p>
            </>
          )}

          {track === "neet-track" && activeTab === "eligibility" && (
            <>
              <h3>NEET Eligibility</h3>
              <ul>
                <li>Class 12 with Physics, Chemistry and Biology.</li>
                <li>Minimum marks differ by category.</li>
                <li>Minimum age is 17 years in admission year.</li>
              </ul>
            </>
          )}

          {track === "neet-track" && activeTab === "dates" && (
            <>
              <h3>NEET Important Dates</h3>
              <table>
                <thead>
                  <tr><th>Event</th><th>Tentative Dates</th></tr>
                </thead>
                <tbody>
                  <tr><td>Application Window</td><td>Feb-March</td></tr>
                  <tr><td>Admit Card</td><td>May first week</td></tr>
                  <tr><td>Exam</td><td>May first week</td></tr>
                  <tr><td>Result</td><td>June</td></tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
