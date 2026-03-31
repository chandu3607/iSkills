"use client";

import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Target,
  BookOpen,
  MessageCircle,
  Wrench,
  Award,
  Gift,
  Book,
  HelpCircle,
  GraduationCap,
  Trophy,
  Headset,
  PanelRight,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import { useDashboardTheme } from "./DashboardThemeContext";

type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const mainItems: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Exam Details", href: "/dashboard/exam-details", icon: FileText },
  { name: "Strategy", href: "/dashboard/startegy", icon: Target },
  { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Mocks", href: "/dashboard/mocks", icon: HelpCircle },
  { name: "24/7 Doubt Solving", href: "/dashboard/doubt", icon: MessageCircle },
];

const resourcesItems: NavItem[] = [
  { name: "Free Material", href: "/dashboard/free-material", icon: FileText },
  { name: "Books", href: "/dashboard/books", icon: Book },
  { name: "Tools", href: "/dashboard/tools", icon: Wrench },
  { name: "Explore Courses", href: "/dashboard/explore-courses", icon: GraduationCap },
];


const growthItems: NavItem[] = [
  { name: "Special Initiatives", href: "/dashboard/special-initiators", icon: Award },
  { name: "Success Stories", href: "/dashboard/success-stories", icon: Trophy },
  { name: "Refer & Earn", href: "/dashboard/refer-earn", icon: Gift },
  { name: "Need Support", href: "/dashboard/support", icon: Headset },
];

export default function SideNav() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { isMobileOpen, setIsMobileOpen } = useSidebar();
  const { theme } = useDashboardTheme();
  const dashboardLogo =
    theme === "dark"
      ? "https://media.iquanta.in/ui_images/iquanta-logo-white.png"
      : "https://media.iquanta.in/ui_images/new-dashboard/logo-black.png";

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname, setIsMobileOpen]);

  const toggleNavLabel = collapsed ? "Open side nav" : "Close side nav";
  const cleanPath = pathname.replace(/\/$/, "");
  const isActivePath = (href: string) =>
    href === "/dashboard"
      ? cleanPath === href
      : cleanPath === href || cleanPath.startsWith(href + "/");
  const renderNavItems = (items: NavItem[]) =>
    items.map((item) => {
      const Icon = item.icon;
      const active = isActivePath(item.href);
      return (
        <Link
          key={item.name}
          href={item.href}
          title={collapsed ? item.name : undefined}
          className={`group relative flex items-center rounded-xl border px-3 py-2.5 text-sm transition ${collapsed ? "justify-center" : "gap-3"
            } ${active
              ? "border-blue-200 bg-blue-50 text-blue-700"
              : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
            }`}
        >
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition ${active
              ? "border-blue-200 bg-white text-blue-700"
              : "border-slate-200 bg-white text-slate-500 group-hover:text-slate-800"
              }`}
          >
            <Icon size={16} />
          </span>
          {!collapsed && (
            <span className="truncate font-medium">{item.name}</span>
          )}
        </Link>
      );
    });
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden ${isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:static lg:translate-x-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"
          } min-h-screen p-0 sm:p-3`}
      >
        <aside
          className={`relative flex flex-col border border-slate-200 bg-white transition-all duration-300 rounded-none lg:rounded-3xl h-screen lg:h-[calc(100vh-1.5rem)] ${collapsed ? "w-20" : "w-64"
            }`}
        >
          <div className="flex items-center justify-between px-6 py-5">
            {!collapsed && (
             <Link href={"/"}>
              <img
                className="w-28"
                src={dashboardLogo}
                alt="Logo"
              />
              </Link>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              aria-label={toggleNavLabel}
              className={`group relative rounded-lg border border-slate-200 bg-[#f6f6f6] p-2 text-slate-600 transition hover:bg-gray-100 hover:text-slate-900 hidden lg:block ${collapsed ? "cursor-e-resize" : "cursor-w-resize"
                }`}
            >
              <PanelRight
                size={18}
                className={`transition-transform ${collapsed ? "rotate-180" : ""
                  }`}
              />
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white shadow-lg group-hover:block">
                {toggleNavLabel}
              </span>
            </button>
            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
              className="lg:hidden flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X size={18} />
            </button>
          </div>
          <nav
            className={`flex-1 overflow-y-auto px-3 py-4 ${collapsed ? "space-y-4" : "space-y-5"}`}
            style={{
              scrollbarWidth: "none",
              scrollbarColor: "#d1d5db transparent",
            }}>
            {!collapsed && (
              <section className="space-y-2">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Main
                </p>
                <div className="space-y-1">{renderNavItems(mainItems)}</div>
              </section>
            )}
            {collapsed && (
              <div className="space-y-0.5">{renderNavItems(mainItems)}</div>
            )}
            {!collapsed && (
              <section className="space-y-2">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Resources
                </p>
                <div className="space-y-1">
                  {renderNavItems(resourcesItems)}
                </div>
              </section>
            )}
            {collapsed && (
              <div className="space-y-0.5">{renderNavItems(resourcesItems)}</div>
            )}
            {!collapsed && (
              <section className="space-y-2">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Growth
                </p>
                <div className="space-y-1">{renderNavItems(growthItems)}</div>
              </section>
            )}
            {collapsed && (
              <div className="space-y-0.5">{renderNavItems(growthItems)}</div>
            )}
          </nav>
          <div
            className={`rounded-2xl border border-slate-200 bg-linear-to-br from-blue-50 via-white to-indigo-50 transition-all duration-300 ${collapsed ? "m-2 p-2" : "m-3 p-3"
              }`}>
            <div
              className={`flex items-center ${collapsed ? "justify-center" : "gap-3 "
                }`}>
              <img
                src="https://s3-ap-south-1.amazonaws.com/iquantamedia/media/profile_pic/profile_pic/giphy.gif"
                alt="user"
                className="h-10 min-w-10 rounded-xl object-cover ring-2 ring-white" />
              {!collapsed && (
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              )}
              {!collapsed && (
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Sai Chandu
                  </p>
                  <p className="text-xs text-slate-500">ID: 316649</p>
                </div>
              )}
            </div>
            {!collapsed && (
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700">
                  CAT
                </span>
                <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-medium text-violet-700">
                  SNAP
                </span>
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
