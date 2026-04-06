"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const initialWishlist = [
  {
    title: "Full Stack Development Program",
    subtitle: "React, Node.js, APIs, and real-world project building",
    price: "₹19,999",
    oldPrice: "₹24,999",
    badge: "Popular",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    title: "DSA Mastery & Interview Prep",
    subtitle: "Pattern-based DSA, coding rounds, and MAANG-level questions",
    price: "₹9,999",
    oldPrice: "₹12,999",
    badge: "High Demand",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    title: "System Design + Backend Track",
    subtitle: "Scalable systems, databases, and backend architecture",
    price: "₹7,999",
    oldPrice: "₹10,999",
    badge: "New",
    accent: "bg-emerald-100 text-emerald-700",
  },
];

export default function DashboardWishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);
  const handleRemove = (title: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.title !== title));
  };
  return (
    <div className="space-y-4 sm:space-y-6 pb-6 w-full">
      <section className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-4 sm:p-6 lg:col-span-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-blue-200/35 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-16 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl" />
          <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700">
                <Heart size={18} />
              </span>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  My Wishlist
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                  Save your favorite courses and enroll when ready.
                </p>
              </div>
            </div>
            {/* <Link href="/dashboard/profile">Back To Profile</Link> */}
          </div>
        </article>
      </section>

      <section className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <aside className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 lg:col-span-4 xl:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.11em] text-slate-500">
            Quick Links
          </h2>
          <div className="mt-3 space-y-2">
            <Link
              href="/dashboard/profile"
              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              Personal Information
            </Link>
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700">
              Wishlist
            </div>
          </div>
        </aside>
        <article className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 lg:col-span-8 xl:col-span-9">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Wishlisted Courses
            </h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
              {wishlistItems.length} items
            </span>
          </div>
          <div className="mt-4 space-y-3">
            {wishlistItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.accent}`}
                    >
                      {item.badge}
                    </span>
                    <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      {item.subtitle}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm sm:text-base font-semibold text-slate-900">
                        {item.price}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400 line-through">
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition cursor-pointer hover:bg-slate-100"
                      onClick={() => handleRemove(item.title)}
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                    <button className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 cursor-pointer">
                      <ShoppingCart size={14} />
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
