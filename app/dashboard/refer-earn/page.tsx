"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Copy,
  CreditCard,
  Gift,
  IndianRupee,
  Pencil,
  Search,
  Share2,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";

type HowItWorksItem = {
  title: string;
  description: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

type InviteItem = {
  title: string;
  image: string;
};

type ReferralEntry = {
  id: string;
  courseName: string;
  image: string;
  shareSlug: string;
  discount: number;
  earn: number;
};

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const profileData = {
  username: "Leo-316649",
  phoneNo: "9876543210",
  dob: "2000-08-16",
  referralCode: "IQSAI2000",
  referralCodeCount: 16,
};

const howItWorks: HowItWorksItem[] = [
  {
    title: "Login / Sign up",
    description: "Login or sign up to get your unique code and referral link.",
    color: "bg-blue-600",
    icon: UserPlus,
  },
  {
    title: "Share Your Code",
    description: "Share your referral code with friends and family.",
    color: "bg-emerald-600",
    icon: Share2,
  },
  {
    title: "Student Purchases Course",
    description: "Referred student gets discount while purchasing on iQuanta.",
    color: "bg-pink-600",
    icon: CreditCard,
  },
  {
    title: "Get Rewarded",
    description: "Earn up to 2000 for each successful referral.",
    color: "bg-red-600",
    icon: Gift,
  },
];

const inviteOptions: InviteItem[] = [
  {
    title: "Friends",
    image: "https://media.iquanta.in/ui_images/new-home/who-to-invite-01.svg",
  },
  {
    title: "Family",
    image: "https://media.iquanta.in/ui_images/new-home/who-to-invite-02.svg",
  },
  {
    title: "Colleagues",
    image: "https://media.iquanta.in/ui_images/new-home/who-to-invite-03.svg",
  },
];

const referralsData: ReferralEntry[] = [
  {
    id: "1",
    courseName: "CAT 2026 Full Course",
    image: "https://media.iquanta.in/ui_images/new-dashboard/cat-books.jpeg",
    shareSlug: "cat-2026-full-course",
    discount: 2000,
    earn: 1200,
  },
  {
    id: "2",
    courseName: "IPMAT Complete Mentorship",
    image: "https://media.iquanta.in/ui_images/new-dashboard/ipmat-books.jpeg",
    shareSlug: "ipmat-complete-mentorship",
    discount: 1500,
    earn: 900,
  },
  {
    id: "3",
    courseName: "JEE Main + Advanced Test Series",
    image: "https://media.iquanta.in/ui_images/iit-jee/iit-jee-books.png",
    shareSlug: "jee-main-advanced-test-series",
    discount: 1000,
    earn: 800,
  },
  {
    id: "4",
    courseName: "NEET Foundation Program",
    image: "https://media.iquanta.in/ui_images/boooks-NEET.webp",
    shareSlug: "neet-foundation-program",
    discount: 1500,
    earn: 1000,
  },
];

export default function ReferEarnPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading] = useState(false);
  const [showUpiForm, setShowUpiForm] = useState(false);
  const [savedUpiId, setSavedUpiId] = useState("sai@okicici");
  const [upiId, setUpiId] = useState("sai@okicici");
  const [codeCopied, setCodeCopied] = useState(false);

  const filteredReferrals = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return referralsData;
    }

    return referralsData.filter((entry) =>
      entry.courseName.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  const totalEarned = useMemo(
    () => referralsData.reduce((sum, entry) => sum + entry.earn, 0),
    [],
  );
  const totalWithdrawn = 1400;
  const totalInWallet = totalEarned - totalWithdrawn;

  const handleScrollToTable = () => {
    const section = document.getElementById("referral-table");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleCopyCode = async () => {
    if (!isLoggedIn) {
      handleLogin();
      return;
    }

    try {
      await navigator.clipboard.writeText(profileData.referralCode);
      setCodeCopied(true);
      window.setTimeout(() => setCodeCopied(false), 1400);
    } catch {
      // no-op
    }
  };

  const handleShare = async (slug: string) => {
    const referralLink = `https://www.iquanta.in/${slug}?ref=${profileData.referralCode}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "iQuanta Referral",
          text: "Use my referral code and get discount on iQuanta courses.",
          url: referralLink,
        });
        return;
      }

      await navigator.clipboard.writeText(referralLink);
    } catch {
      // no-op
    }
  };

  const handleSaveUpi = () => {
    const trimmed = upiId.trim();
    if (!trimmed) {
      return;
    }
    setSavedUpiId(trimmed);
    setShowUpiForm(false);
  };

  const handleClearUpi = () => {
    setUpiId("");
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
              <li className="font-medium text-slate-700">Refer &amp; Earn</li>
            </ol>
          </nav>

          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Refer &amp; Earn
            <span className="ml-2 text-base font-medium text-slate-600 md:text-lg">
              (Earn up to {formatter.format(2000)} per successful referral)
            </span>
          </h1>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
          <button
            type="button"
            onClick={handleScrollToTable}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Check referral amount
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${item.color}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-5">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold leading-tight text-slate-900">
              Refer friends, win exciting rewards
            </h3>
            <div className="mt-3 flex items-center gap-3">
              <ul className="flex items-center">
                {[1, 2, 3, 4].map((n, idx) => (
                  <li key={n} className={`h-8 w-8 overflow-hidden rounded-full ring-2 ring-white ${idx ? "-ml-2" : ""}`}>
                    <img
                      src={`https://media.iquanta.in/ui_images/new-home/referal-user-0${n}.svg`}
                      alt="learner"
                      className="h-full w-full object-cover"
                    />
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-600">10K+ learners have earned rewards</p>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-900 p-4 text-white sm:w-[85%]">
              <div>
                {!isLoggedIn && (
                  <p className="mb-1 text-xs text-slate-300">Login to view your referral code</p>
                )}
                <h4 className="text-3xl font-bold tracking-wider text-orange-400">
                  {isLoggedIn ? profileData.referralCode : "XXXXXXXX"}
                </h4>
              </div>
              <button
                type="button"
                onClick={isLoggedIn ? handleCopyCode : handleLogin}
                className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold hover:bg-slate-800"
              >
                {isLoggedIn ? <Copy size={15} /> : <UserPlus size={15} />}
                {isLoggedIn ? (codeCopied ? "Copied" : "Refer Now") : "Login"}
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs lg:col-span-5">
            <img
              src="https://media.iquanta.in/ui_images/new-home/gift-card.png"
              alt="Gift rewards"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-6">
        <h3 className="mb-4 text-center text-2xl font-semibold text-slate-900">Who to invite</h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {inviteOptions.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-3 text-center sm:p-4">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-black p-2">
                <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
              </div>
              <h4 className="text-sm font-semibold text-slate-900 sm:text-base">{item.title}</h4>
            </article>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <article className="rounded-3xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">iWallet card</h3>
            </div>

            {isLoggedIn ? (
              <>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div
                    className="bg-cover bg-center p-5"
                    style={{
                      backgroundImage:
                        "url('https://media.iquanta.in/ui_images/new-dashboard/img-card-bg.svg')",
                    }}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <p className="text-xs text-white/80">CARD NAME</p>
                        <p className="text-sm font-semibold text-white">
                          {profileData.username.split("-")[0]}
                        </p>
                      </div>
                      <img
                        src="https://ableproadmin.com/angular/default/assets/images/widget/img-card-master.svg"
                        alt="card"
                        className="h-8"
                      />
                    </div>

                    <p className="text-xl font-semibold text-white">*** *** {profileData.phoneNo.slice(6, 10)}</p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-white/90">
                      <span>{new Date(profileData.dob).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })}</span>
                      <span>{new Date(profileData.dob).getFullYear()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-2xl font-semibold text-slate-900">{formatter.format(totalInWallet)}</p>
                  <p className="text-sm text-slate-500">Total Balance</p>
                </div>
              </>
            ) : (
              <button
                type="button"
                onClick={handleLogin}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50"
              >
                Please Login
              </button>
            )}
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">Accounts</h3>
              {isLoggedIn && (
                <button
                  type="button"
                  onClick={() => setShowUpiForm((prev) => !prev)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                  aria-label="Edit account"
                >
                  <Pencil size={14} />
                </button>
              )}
            </div>

            {!isLoggedIn && (
              <button
                type="button"
                onClick={handleLogin}
                className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm text-slate-600 hover:bg-slate-50"
              >
                Please Login
              </button>
            )}

            {isLoggedIn && !showUpiForm && !savedUpiId && (
              <button
                type="button"
                onClick={() => setShowUpiForm(true)}
                className="w-full rounded-xl border border-dashed border-slate-300 px-4 py-6 text-sm text-slate-600 hover:bg-slate-50"
              >
                + Add Account
              </button>
            )}

            {isLoggedIn && !showUpiForm && savedUpiId && (
              <div className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <img
                    src="https://media.iquanta.in/ui_images/new-dashboard/upi_logo.webp"
                    alt="upi"
                    className="h-7"
                  />
                  <p className="text-sm font-semibold text-slate-800">{savedUpiId}</p>
                </div>
              </div>
            )}

            {isLoggedIn && showUpiForm && (
              <div className="space-y-3">
                <div>
                  <label htmlFor="upi" className="mb-1 block text-sm font-medium text-slate-700">
                    UPI ID
                  </label>
                  <input
                    id="upi"
                    type="text"
                    value={upiId}
                    onChange={(event) => setUpiId(event.target.value)}
                    placeholder="Enter UPI ID"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500/20 placeholder:text-slate-400 focus:ring"
                  />
                  <p className="mt-1 text-xs text-slate-500">Enter correct UPI ID to avoid failed transactions.</p>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClearUpi}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveUpi}
                    className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </article>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold text-slate-900">{profileData.referralCodeCount}</p>
                  <p className="text-sm text-slate-500">Total Referrals</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Users size={18} />
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold text-slate-900">{formatter.format(totalEarned)}</p>
                  <p className="text-sm text-slate-500">Total Earned</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Wallet size={18} />
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">                      
                <div>
                  <p className="text-2xl font-semibold text-slate-900">{formatter.format(totalWithdrawn)}</p>
                  <p className="text-sm text-slate-500">Amount Withdrawn</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <IndianRupee size={18} />
                </span>
              </div>
            </article>
          </div>

          <article id="referral-table" className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-4 py-3 md:px-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-900">Referral List</h3>

                {!isLoggedIn ? (
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="text-sm font-medium text-slate-600 hover:text-slate-800"
                  >
                    Please Login
                  </button>
                ) : (
                  <label className="relative w-full max-w-xs">
                    <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Search"
                      className="w-full rounded-xl border border-slate-300 py-2 pl-9 pr-3 text-sm outline-none ring-blue-500/20 placeholder:text-slate-400 focus:ring"
                    />
                  </label>
                )}
              </div>
            </div>

            {!isLoggedIn && (
              <div className="px-4 py-6 text-sm text-slate-500 md:px-5">Please login to view referral list.</div>
            )}

            {isLoggedIn && isLoading && (
              <div className="space-y-2 p-4 md:p-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={`skeleton-${idx}`} className="h-14 animate-pulse rounded-xl bg-slate-100" />
                ))}
              </div>
            )}

            {isLoggedIn && !isLoading && (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-4 py-3 md:px-5">Course</th>
                      <th className="px-4 py-3 text-center">Share</th>
                      <th className="px-4 py-3">Discount</th>
                      <th className="px-4 py-3">Earn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReferrals.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                          No records found.
                        </td>
                      </tr>
                    )}

                    {filteredReferrals.map((entry) => (
                      <tr key={entry.id} className="border-t border-slate-100">
                        <td className="px-4 py-3 md:px-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={entry.image}
                              alt={entry.courseName}
                              className="h-10 w-20 rounded-md object-cover"
                            />
                            <p className="font-medium text-slate-800">{entry.courseName}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button
                            type="button"
                            onClick={() => handleShare(entry.shareSlug)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                            aria-label="Share referral"
                          >
                            <Share2 size={15} />
                          </button>
                        </td>
                        <td className="px-4 py-3 text-slate-700">{formatter.format(entry.discount)}</td>
                        <td className="px-4 py-3 font-semibold text-slate-900">{formatter.format(entry.earn)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-start gap-2 text-emerald-700">
          <CheckCircle2 size={18} className="mt-0.5" />
          <p className="text-sm">
            Referral payout depends on product and purchase amount. Use &quot;Check referral amount&quot; to jump to your
            referral table quickly.
          </p>
        </div>
      </section>
    </div>
  );
}
