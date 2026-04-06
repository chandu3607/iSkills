"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Clock,
  Heart,
  LogOut,
  Maximize2,
  Megaphone,
  Menu,
  Moon,
  Search,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { useDashboardTheme } from "./DashboardThemeContext";

const announcementItems = [
  {
    tag: "Launch",
    title: "New Full Stack Project Module Released",
    description:
      "Build real-world apps using React, Node.js, and APIs with guided mentor support.",
    time: "Today",
  },
  {
    tag: "Update",
    title: "DSA Practice Sheet Updated",
    description:
      "New pattern-based problems added with optimized solutions for interview prep.",
    time: "1 day ago",
    image: "https://media.iquanta.in/ui_images/skills/DSA&CPPOSTER.jpg",
  },
  {
    tag: "Event",
    title: "Live Coding Interview Session",
    description:
      "Join live session to solve real MAANG-level problems with mentor guidance.",
    time: "2 days ago",
    image: "",
  },
];

const notificationItems = [
  {
    title: "Project Submission Successful",
    description:
      "Your Full Stack project has been reviewed. Check feedback and improve.",
    time: "5 mins ago",
  },
  {
    title: "New Lesson Added",
    description:
      "Advanced JavaScript concepts are now available in your course.",
    time: "1 hour ago",
  },
  {
    title: "Code Review Completed",
    description:
      "A mentor has reviewed your solution. See suggestions for optimization.",
    time: "3 hours ago",
  },
];

export default function DashBoardHeader() {
  const { theme, toggleTheme } = useDashboardTheme();
  const dashboardLogo =
    theme === "dark"
      ? "https://media.iquanta.in/ui_images/iquanta-logo-white.png"
      : "https://media.iquanta.in/ui_images/new-dashboard/logo-black.png";
  const [activeDrawer, setActiveDrawer] = useState<
    "announcements" | "notifications" | null
  >(null);
  const { setIsMobileOpen } = useSidebar();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      return;
    }
    document.exitFullscreen();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openDrawer = (drawer: "announcements" | "notifications") => {
    setShowProfileMenu(false);
    setActiveDrawer(drawer);
  };

  const actionBtn =
    "relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900";

  const drawerTitle =
    activeDrawer === "announcements" ? "Announcements" : "Notifications";

  return (
    <>
      <header className="w-full  md:rounded-3xl  bg-white px-2.5 sm:px-4 py-2.5 sm:py-3">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 lg:flex-nowrap lg:gap-4">
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="flex md:h-10 h-8 md:w-10 w-8 items-center justify-center md:rounded-xl rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              <Menu className="md:w-6 md:h-6 w-4 h-4" />
            </button>
            <Link href="/" >
            <img
              className="ml-1 md:w-24 w-22 object-contain"
              src={dashboardLogo}
              alt="iQuanta logo" />
            </Link>
          </div>
          <div className="order-last w-full lg:order-0 lg:w-auto lg:flex-1">
            <div className="relative w-full lg:w-100">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search courses, mocks, notes..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-[13px] sm:text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 lg:order-0 order-2 sm:order-0">
            <button
              type="button"
              onClick={toggleTheme}
              className={actionBtn}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="hidden sm:flex relative md:h-10 h-8 md:w-10 w-8 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              aria-label="Toggle fullscreen">
              <Maximize2 size={16} />
            </button>

            <button
              type="button"
              onClick={() => openDrawer("announcements")}
              className={actionBtn}
              aria-label="Announcements">
              <Megaphone size={16} />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[9px] font-bold text-white ring-2 ring-white">
                {announcementItems.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => openDrawer("notifications")}
              className={actionBtn}
              aria-label="Notifications">
              <Bell size={16} />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[9px] font-bold text-white ring-2 ring-white">
                {notificationItems.length}
              </span>
            </button>

            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 sm:flex">
              <CalendarDays size={14} />
              <span>{formattedDate}</span>
              {/* <span className="text-slate-300">|</span>
              <Clock size={14} />
              <span>{formattedTime}</span> */}
            </div>

            <div ref={profileRef} className="relative">
              <button
                type="button"
                onClick={() => setShowProfileMenu((prev) => !prev)}
                className="flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-slate-200 bg-white p-0.5 sm:p-1 sm:pr-3 transition hover:bg-slate-50">
                <img
                  src="https://s3-ap-south-1.amazonaws.com/iquantamedia/media/profile_pic/profile_pic/giphy.gif"
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-slate-100 object-cover"
                  alt="User profile"
                />
                <span className="hidden text-sm font-semibold text-slate-700 sm:block pt-px">
                  Leo
                </span>
              </button>

              <div
                className={`absolute z-30 right-0 mt-3 w-88 origin-top-right rounded-3xl border border-slate-200 bg-white p-4 transition duration-200 ${
                  showProfileMenu
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }`}>
                <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-3">
                  <p className="text-[11px] uppercase tracking-[0.11em] font-semibold text-slate-500">
                    Profile
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src="https://s3-ap-south-1.amazonaws.com/iquantamedia/media/profile_pic/profile_pic/giphy.gif"
                      className="h-12 w-12 rounded-xl border border-slate-200 object-cover"
                      alt="User profile" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Leo
                      </p>
                      <p className="text-xs text-slate-500">
                        Leo2000@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    <span className="flex items-center gap-2">
                      <UserRound size={16} />
                      My Profile
                    </span>
                    <ChevronRight size={16} className="text-slate-400" />
                  </Link>

                  <Link
                    href="/dashboard/wishlist"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    <span className="flex items-center gap-2">
                      <Heart size={16} />
                      Wishlist
                    </span>
                    <ChevronRight size={16} className="text-slate-400" />
                  </Link>
                </div>

                <div className="my-3 h-px bg-slate-200" />

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close drawer"
        onClick={() => setActiveDrawer(null)}
        className={`fixed inset-0 z-40 bg-slate-900/20 transition-opacity duration-150 ${
          activeDrawer ? "opacity-100" : "pointer-events-none opacity-0"
        }`}/>

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform-gpu will-change-transform border-l border-slate-200 bg-[#f8fafc] text-slate-800 transition-transform duration-200 ease-out ${
          activeDrawer
            ? "translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}>
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {drawerTitle}
            </h2>
            <p className="text-xs text-slate-500">
              {activeDrawer === "announcements"
                ? `${announcementItems.length} active updates`
                : `${notificationItems.length} new alerts`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveDrawer(null)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-900" >
            <X size={16} />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto px-4 py-4 space-y-4">
          {activeDrawer === "announcements" &&
            announcementItems.map((item) => (
              <article
                key={`${item.title}-${item.time}`}
                className="rounded-2xl border border-slate-200 bg-white p-3" >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {item.time}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="mt-3 h-32 w-full rounded-xl border border-slate-200 object-cover" />
                )}
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100" >
                  View Details
                  <ChevronRight size={14} />
                </button>
              </article>
            ))}

          {activeDrawer === "notifications" &&
            notificationItems.map((item) => (
              <article
                key={`${item.title}-${item.time}`}
                className="rounded-2xl border border-slate-200 bg-white p-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    <span className="mt-2 inline-block text-[11px] font-medium text-blue-700">
                      {item.time}
                    </span>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </aside>
    </>
  );
}
