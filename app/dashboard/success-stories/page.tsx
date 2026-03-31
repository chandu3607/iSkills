"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

type Tab = "MBA" | "IIT JEE" | "NEET";

type VideoItem = {
  video: string;
  img: string;
  title: string;
};

type ImageItem = {
  img: string;
};

type BlogItem = {
  img: string;
  title: string;
  content: string;
  link: string;
};

const tabs: Tab[] = ["MBA", "IIT JEE", "NEET"];

const videoList: VideoItem[] = [
  { video: "https://www.youtube.com/embed/d8Datuvi4L4?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/1.PNG", title: "CAT 2019 100 Percentiler Interview- Topper : Rishi Mittal" },
  { video: "https://www.youtube.com/embed/oKOobI2gn7M?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/2.PNG", title: "CAT 2018 Topper Aditya Prasad 99.54%ler (IIM Ahmedabad convert)" },
  { video: "https://www.youtube.com/embed/apsnogTzGjg?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta23.jpg", title: "CAT 2018 Topper Interview: IIM convert Mansi Sankhe" },
  { video: "https://www.youtube.com/embed/-A2g5Fx8Twg?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta3.PNG", title: "CAT 2018 Topper Interview: Jatin Singla – 99.33 Percentiler" },
  { video: "https://www.youtube.com/embed/zHxUBf-yOhk?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta4.PNG", title: "Fighting Disabilities,CAT 2018 Topper (99.97%le) Mihir Kapse, lands at IIM Ahmedabad" },
  { video: "https://www.youtube.com/embed/0udGFVgMd84?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta5.PNG", title: "CAT Topper 2019 Bihar boy Avinash Singh 99.5%iler who belonged to a place with No School Cracks CAT" },
  { video: "https://www.youtube.com/embed/_LUgZG3q8eA?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta6.PNG", title: "Why Join iQuanta CAT Online Coaching?" },
  { video: "https://www.youtube.com/embed/Cm5CTx03SYI?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta7.PNG", title: "Abhinav jain IIM Bangalore" },
  { video: "https://www.youtube.com/embed/pmqAqARQO_I?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta8.PNG", title: "Himangshu Sinha, IIM Udaipur" },
  { video: "https://www.youtube.com/embed/ocpQ6ghmIYw?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta9.PNG", title: "Soumyadeep Paul, IIFT Convert" },
  { video: "https://www.youtube.com/embed/QCZwPLbXsok?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta10.PNG", title: "Sandeep Kaushik, IIT Bombay" },
  { video: "https://www.youtube.com/embed/kKQMNYtwm3Q?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta11.PNG", title: "Harshit Mittal, XLRI Convert" },
  { video: "https://www.youtube.com/embed/22RCI5BeYSo?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta12.PNG", title: "Aditya Anand, XLRI Convert" },
  { video: "https://www.youtube.com/embed/WCNG42nihps?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta13.PNG", title: "Sambhid Gaurav, IIM Shillong" },
  { video: "https://www.youtube.com/embed/lYMB_pwDUCk?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta14.PNG", title: "Abhinav Sharma, SP jain Convert" },
  { video: "https://www.youtube.com/embed/HhdHqttb6zU?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta15.PNG", title: "Mayank Gupta, IIT Bombay" },
  { video: "https://player.vimeo.com/video/431801896", img: "https://media.iquanta.in/ui_images/toppersvideos/image.png", title: "" },
  { video: "https://www.youtube.com/embed/0DqX-6nhRSU?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta16.PNG", title: "CAT Success Story : Shivam Khurana, IIT Delhi Convert" },
  { video: "https://www.youtube.com/embed/NOCRYD6zCqE?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta17.PNG", title: "Amar Agrahari, 99.67%le in CAT 2018 shares his CAT journey and insecurities of a fresher!!" },
  { video: "https://www.youtube.com/embed/rDMsl4_y2xQ?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta18.PNG", title: "Soumyadeep Paul IIFT Delhi, shares his ups and downs of CAT preparation journey." },
  { video: "https://www.youtube.com/embed/FjQPFPxlEjc?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta19.PNG", title: "From 83 Percentile to 99 Percentile in CAT, Karal Maheshwari CAT 2019 Topper" },
  { video: "https://www.youtube.com/embed/3hKoGXGpg3s?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta20.PNG", title: "CAT Topper 2019 : IIM Kozhikode Convert Palak Aneja" },
  { video: "https://www.youtube.com/embed/uUUseqANr7w?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta21.PNG", title: "How iQuanta Student Kislay Jha Cracked CAT and Made It To IIM Ahmedabad | CAT 99.96 Percentiler" },
  { video: "https://www.youtube.com/embed/a0wbzWPBIJI?rel=0", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta22.PNG", title: "iQuanta India's No 1 CAT Online Coaching" },
  { video: "https://player.vimeo.com/video/431928519", img: "https://media.iquanta.in/ui_images/toppersvideos/iquanta24.jpg", title: "" },
  { video: "https://www.youtube.com/embed/Ug8lHINfDuM?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-1.jpeg", title: "How I scored from 46%le to 99.11%le my untapped CAT strategy | FMS Delhi" },
  { video: "https://www.youtube.com/embed/v8O8ELvatPc?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-2.jpeg", title: "IIM Bangalore Convert, Mayank, CAT 99.76 Percentile, Shares his Tips & CAT Journey with iQuanta!" },
  { video: "https://www.youtube.com/embed/GIrpNkOa8kQ?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-3.jpeg", title: "CAT 99.92 Percentiler, IIM Calcutta Convert, Rahul Agrawal Shares his Journey with iQuanta" },
  { video: "https://www.youtube.com/embed/DX4Vc4OFP0A?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-4.jpeg", title: "99.38 Percentiler, IIM Indore Convert Charchil Jain visited iQuanta Office for an interivew. 🙂" },
  { video: "https://www.youtube.com/embed/MnMo2bI8gS8?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-5.jpeg", title: "From 87 to 99.2 Percentile in CAT 2020, Journey of Piyush Aras with iQuanta!" },
  { video: "https://www.youtube.com/embed/NOCRYD6zCqE?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-6.jpeg", title: "Amar Agrahari, 99.67%le in CAT 2018 shares his CAT journey and insecurities of a fresher!!" },
  { video: "https://www.youtube.com/embed/U7v8MmhfaOQ?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-7.jpeg", title: "CAT 99.56 Percentiler, FMS Convert with less than 60% in Graduation, Karan Dutta Shares his Journey" },
  { video: "https://www.youtube.com/embed/8zEpUEvLB_E?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-8.jpeg", title: "All India XAT Topper 99.94%iler | ISB Convert | Farzan Shaikh shares his CAT/XAT Strategy - iQuanta" },
  { video: "https://www.youtube.com/embed/AvDNi1DvEOs?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-9.jpeg", title: "CAT 2021 Topper | How I Cracked CAT Exam In My First Attempt And Got Into IIM Bangalore" },
  { video: "https://www.youtube.com/embed/DJmhsIurcZM?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-10.jpeg", title: "IIM Bangalore Convert Rishab Rahiman on Scoring 99+%ile in CAT, XAT & SNAP | iQuanta Results" },
  { video: "https://www.youtube.com/embed/O5o8XDzGdSY?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-11.jpeg", title: "IIM Lucknow Convert Mouzzam Ali on Scoring 97.32%ile in CAT Along With Job" },
  { video: "https://www.youtube.com/embed/VdpXbeGGeWw?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-12.jpeg", title: "Pavan Choudhary on Converting IIM Ahmedabad Along With a Mechanical Engineering Job | CAT 99.73%iler" },
  { video: "https://www.youtube.com/embed/e13raAEXOD0?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-13.jpeg", title: "How I Scored 99.95%ile In My First Attempt | CAT Topper Interview 🔥" },
  { video: "https://www.youtube.com/embed/dULm1oDHDmk?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-14.jpeg", title: "CAT Topper 2023 Rounak Tikmani 99.9%iler | How I Became CAT Topper ??" },
  { video: "https://www.youtube.com/embed/BYhgMQQTsRY?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-15.jpeg", title: "CAT Topper Rishav Banerjee Reveals How He Converted IIM Ahmedabad | CAT Result 2024 | CAT" },
  { video: "https://www.youtube.com/embed/PmapeLnukLg?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-16.jpeg", title: "CAT 2023 Topper: How I Scored 99.99%ile in CAT 2023 - Prakshit Tomer" },
  { video: "https://www.youtube.com/embed/SUV-O2edop0?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-17.jpeg", title: "A Co-Founder's Journey From IIM Indore to being an Entrepreneur | Edge by iQuanta Ep - 02" },
  { video: "https://www.youtube.com/embed/SMuZ0osfu14?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-18.jpeg", title: "IIM Ahmedabad Convert Harkiran on Switching Careers and Scoring 99.41%ile in CAT #iimahmedabad" },
  { video: "https://www.youtube.com/embed/FzJp_rJ-pLE?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-19.jpeg", title: "IIM Bangalore Convert Pranav on Scoring 99.82%ile in CAT While Working at a PSU" },
  { video: "https://www.youtube.com/embed/fnZaymmE2Vk?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-20.jpeg", title: "All India CAT Topper | My Strategy To Score 100 Percentile In First CAT attempt | IIM Bangalore" },
  { video: "https://www.youtube.com/embed/Hi76WplL9ZA?rel=0", img: "https://media.iquanta.in/ui_images/new-home/topper-vd-21.jpeg", title: "A roller coaster STORY of an IIM Calcutta alumnus |Edge by iQuanta ft. Arunabh" },
];

const iitList: ImageItem[] = [
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR1.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR2.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR3.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR4.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR5.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR6.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR7.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR8.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR9.jpg" },
  { img: "https://media.iquanta.in/ui_images/iit-reviews/IITR10.jpg" },
];

const neetList: ImageItem[] = [
  { img: "https://media.iquanta.in/ui_images/neet/neetfeedback1.webp" },
  { img: "https://media.iquanta.in/ui_images/neet/neetfeedback2.webp" },
  { img: "https://media.iquanta.in/ui_images/neet/neetfeedback3.webp" },
  { img: "https://media.iquanta.in/ui_images/neet/neetfeedback4.webp" },
  { img: "https://media.iquanta.in/ui_images/neet/neetfeedback5.webp" },
  { img: "https://media.iquanta.in/ui_images/neet/neetfeedback6.webp" },
];

const blogList: BlogItem[] = [
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-28-at-1.48.22-PM-1.jpeg",
    title: "How Souradeep Cleared CAT with a 99.95%ile in His 1st Attempt",
    content: "Here’s the Interview of CAT Topper Souradeep Banerjee who",
    link: "https://www.iquanta.in/blog/how-souradeep-cleared-cat-with-a-99-95ile-in-his-1st-attempt/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-4.25.52-PM-1.jpeg",
    title: "How CAT 99.9%iler Rounak Converted IIM B Despite Gap Year",
    content: "Here’s the Interview of iQuanta CAT Full Course student Rounak Tikmani,",
    link: "https://www.iquanta.in/blog/how-cat-99-9iler-rounak-converted-iim-b/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-22-at-2.44.23-PM-1.jpeg",
    title: "How Nayana (CAT 99.8%iler) Converted IIM A With Job",
    content: "Here’s the Interview of Nayana Nair who cleared the CAT exam with 99.8%ile",
    link: "https://www.iquanta.in/blog/how-nayana-cat-99-8iler-converted-iim-a-with-job/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-21-at-2.06.59-PM-1-1.jpeg",
    title: "IIM Lucknow Convert Shares his CAT Preparation Strategy With Job",
    content: "Here’s the Interview of Mouzzam Ali, who cleared the CAT exam with 97.32%ile",
    link: "https://www.iquanta.in/blog/iim-lucknow-convert-shares-his-cat-preparation-strategy/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-18-at-5.03.27-PM-1.jpeg",
    title: "CAT, XAT & SNAP 99%iler Rishab Who Converted all Top Bschools",
    content: "Here’s the Interview of Rishab Rahiman who cracks CAT with 99.63%ile",
    link: "https://www.iquanta.in/blog/cat-xat-snap-99iler-rishab-converted-all-top-bschools/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-1.13.13-PM-1.jpeg",
    title: "How Pranav (CAT 99.82%ile) Converted IIM B With a PSU Job",
    content: "Here’s the Interview of CAT Topper Pranav Maheshwari who cracks",
    link: "https://www.iquanta.in/blog/how-pranav-cat-99-82ile-converted-iim-b/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-16-at-2.28.57-PM-1.jpeg",
    title: "From Law School to IIM Ahmedabad with CAT 99.41%iler Harkiran",
    content: "Here’s the Interview of CAT topper Harkiran, a law graduate who cleared",
    link: "https://www.iquanta.in/blog/from-law-school-to-iim-ahmedabad-with-harkiran/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-2.51.40-PM-1.jpeg",
    title: "IIM Indore Convert Charchil (CAT 99.38%ile) Shares his Success Story",
    content: "Here’s the Interview of CAT Topper Charchil Jain who cleared CAT",
    link: "https://www.iquanta.in/blog/iim-indore-convert-charchil-cat-99-38ile-shares-his-success-story/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/PmapeLnukLg-HD-2-1.jpg",
    title: "How Parikshit Cracked CAT with 99.99%ile & Converted IIM B",
    content: "Here’s the Interview of CAT Topper Parikshit Tomar who cleared the CAT",
    link: "https://www.iquanta.in/blog/parikshit-cracked-cat-with-99-99ile/",
  },
  {
    img: "https://www.iquanta.in/blog/wp-content/uploads/2024/10/VdpXbeGGeWw-HD-1-1.jpg",
    title: "How Pavan (CAT 99.73%ile) Converted IIM A With Job",
    content: "Here’s the Interview of CAT Topper Pavan Chaudhary who cracks the CAT",
    link: "https://www.iquanta.in/blog/how-pavan-cat-99-73ile-converted-iim-a-with-job/",
  },
];

function MediaModal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
      >
        <X size={18} />
      </button>
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
}

export default function SuccessStoriesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("MBA");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const galleryImages = useMemo(() => {
    if (activeTab === "IIT JEE") {
      return iitList.map((item) => item.img);
    }
    if (activeTab === "NEET") {
      return neetList.map((item) => item.img);
    }
    return [];
  }, [activeTab]);

  const openPrevImage = () => {
    if (activeGalleryIndex === null || galleryImages.length === 0) return;
    setActiveGalleryIndex(
      activeGalleryIndex === 0 ? galleryImages.length - 1 : activeGalleryIndex - 1,
    );
  };

  const openNextImage = () => {
    if (activeGalleryIndex === null || galleryImages.length === 0) return;
    setActiveGalleryIndex(
      activeGalleryIndex === galleryImages.length - 1 ? 0 : activeGalleryIndex + 1,
    );
  };

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
              <li className="font-medium text-slate-700">Success Stories</li>
            </ol>
          </nav>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Success Stories
          </h1>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setActiveGalleryIndex(null);
              }}
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
        <>
          <section className="rounded-3xl border border-slate-200 bg-white">
            <header className="border-b border-slate-200 px-4 py-4 md:px-5">
              <h2 className="text-base font-semibold text-slate-900">Student feedbacks</h2>
            </header>

            <div className="p-4 md:p-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {videoList.map((item, index) => (
                  <article
                    key={`${item.video}-${index}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="relative block w-full overflow-hidden"
                    >
                      <Image
                        src={item.img}
                        alt={item.title || `Feedback ${index + 1}`}
                        width={640}
                        height={360}
                        className="h-36 w-full object-cover transition duration-200 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-linear-to-t from-black/35 to-black/10" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900">
                          <Play size={17} className="ml-0.5" />
                        </span>
                      </span>
                    </button>
                    <div className="px-3 py-3">
                      <p className="line-clamp-3 text-sm font-medium text-slate-800">
                        {item.title || "Student feedback"}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white">
            <header className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-4 md:px-5">
              <h2 className="text-base font-semibold text-slate-900">Blog</h2>
              <a
                href="https://www.iquanta.in/blog/category/cat/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-700"
              >
                View More
                <ArrowUpRight size={15} />
              </a>
            </header>

            <div className="p-4 md:p-5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {blogList.map((blog, index) => (
                  <article
                    key={`${blog.link}-${index}`}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={640}
                      height={360}
                      className="h-36 w-full object-cover"
                    />
                    <div className="space-y-2 p-3">
                      <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{blog.title}</h3>
                      <p className="line-clamp-2 text-xs text-slate-600">{blog.content}</p>
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        Read more
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {(activeTab === "IIT JEE" || activeTab === "NEET") && (
        <section className="rounded-3xl border border-slate-200 bg-white">
          <header className="border-b border-slate-200 px-4 py-4 md:px-5">
            <h2 className="text-base font-semibold text-slate-900">Student feedbacks</h2>
          </header>

          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4 md:p-5">
            {(activeTab === "IIT JEE" ? iitList : neetList).map((item, index) => (
              <button
                type="button"
                key={`${item.img}-${index}`}
                onClick={() => setActiveGalleryIndex(index)}
                className="overflow-hidden rounded-xl border border-slate-200"
              >
                <Image
                  src={item.img}
                  alt={`${activeTab} review ${index + 1}`}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      )}

      {activeVideo && (
        <MediaModal onClose={() => setActiveVideo(null)}>
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl">
            <div className="aspect-video w-full">
              <iframe
                title={activeVideo.title || "Student feedback video"}
                src={activeVideo.video}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </MediaModal>
      )}

      {activeGalleryIndex !== null && galleryImages[activeGalleryIndex] && (
        <MediaModal onClose={() => setActiveGalleryIndex(null)}>
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl">
            <Image
              src={galleryImages[activeGalleryIndex]}
              alt={`${activeTab} feedback`}
              width={1400}
              height={1000}
              className="max-h-[80vh] w-full object-contain"
            />

            <button
              type="button"
              onClick={openPrevImage}
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              onClick={openNextImage}
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/60"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </MediaModal>
      )}
    </div>
  );
}
