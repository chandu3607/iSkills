"use client";

import SideNav from "./components/SideNav";
import DashBoardHedder from "./components/DashBoardHedder";
import { SidebarProvider } from "./components/SidebarContext";
import {
  DashboardThemeProvider,
  useDashboardTheme,
} from "./components/DashboardThemeContext";

function DashboardLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useDashboardTheme();
  return (
    <div data-dashboard-theme={theme} className="dashboard-theme-root min-h-screen">
      <div className="min-h-screen bg-[#e7e9e9] transition-colors">
        <div className="flex h-screen">
          <SideNav />
          <div className="flex min-w-0 flex-col flex-1 py-1 md:py-3 pr-1 md:pl-0 pl-1 md:pr-3">
            <DashBoardHedder />
            <main className="flex-1 min-w-0 overflow-hidden mt-2 sm:mt-3 rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white mx-1 sm:mx-0">
              <div
                className="h-full overflow-y-auto overflow-x-hidden"
                style={{
                  scrollbarWidth: "none",
                  scrollbarColor: "#d1d5db transparent",
                }}
              >
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          [data-dashboard-theme="dark"] {
            color-scheme: dark;
          }

          [data-dashboard-theme="dark"] .dashboard-theme-root,
          [data-dashboard-theme="dark"] .dashboard-theme-root > div,
          [data-dashboard-theme="dark"] .bg-\\[\\#e7e9e9\\] {
            background-color: #030303 !important;
          }

          [data-dashboard-theme="dark"] .bg-white {
            background-color: #0d0d10 !important;
          }

          [data-dashboard-theme="dark"] .bg-slate-50 {
            background-color: #15151a !important;
          }

          [data-dashboard-theme="dark"] .bg-slate-100 {
            background-color: #202029 !important;
          }

          [data-dashboard-theme="dark"] .bg-\\[\\#f8fafc\\] {
            background-color: #0f0f13 !important;
          }

          [data-dashboard-theme="dark"] .bg-\\[\\#f6f6f6\\] {
            background-color: #1a1a21 !important;
          }

          [data-dashboard-theme="dark"] .border-slate-200 {
            border-color: #2c2c35 !important;
          }

          [data-dashboard-theme="dark"] .border-slate-300,
          [data-dashboard-theme="dark"] .border-slate-100 {
            border-color: #373744 !important;
          }

          [data-dashboard-theme="dark"] .text-slate-900 {
            color: #f3f4f6 !important;
          }

          [data-dashboard-theme="dark"] .text-slate-800 {
            color: #e5e7eb !important;
          }

          [data-dashboard-theme="dark"] .text-slate-700 {
            color: #d1d5db !important;
          }

          [data-dashboard-theme="dark"] .text-slate-600 {
            color: #9ca3af !important;
          }

          [data-dashboard-theme="dark"] .text-slate-500 {
            color: #818796 !important;
          }

          [data-dashboard-theme="dark"] .text-slate-400 {
            color: #6e7483 !important;
          }

          [data-dashboard-theme="dark"] .text-slate-300 {
            color: #959dae !important;
          }

          [data-dashboard-theme="dark"] .placeholder\\:text-slate-400::placeholder {
            color: #6e7483 !important;
          }

          [data-dashboard-theme="dark"] .text-white {
            color: #ffffff !important;
          }

          [data-dashboard-theme="dark"] .bg-slate-900 {
            background-color: #15151a !important;
          }

          [data-dashboard-theme="dark"] .hover\\:bg-slate-800:hover {
            background-color: #202029 !important;
          }

          [data-dashboard-theme="dark"] button.bg-slate-900,
          [data-dashboard-theme="dark"] a.bg-slate-900 {
            background-color: #282834 !important;
            border-color: #3a3a49 !important;
            color: #f3f4f6 !important;
          }

          [data-dashboard-theme="dark"] button.bg-slate-900:hover,
          [data-dashboard-theme="dark"] a.bg-slate-900:hover {
            background-color: #333345 !important;
          }

          [data-dashboard-theme="dark"] button.border.border-slate-200.bg-white,
          [data-dashboard-theme="dark"] a.border.border-slate-200.bg-white {
            background-color: #17171f !important;
            border-color: #343443 !important;
            color: #d1d5db !important;
          }

          [data-dashboard-theme="dark"] button.border.border-slate-200.bg-white:hover,
          [data-dashboard-theme="dark"] a.border.border-slate-200.bg-white:hover {
            background-color: #20202a !important;
            color: #f3f4f6 !important;
          }

          [data-dashboard-theme="dark"] .hover\\:bg-slate-100:hover {
            background-color: #2a2a35 !important;
          }

          [data-dashboard-theme="dark"] .hover\\:bg-slate-50:hover {
            background-color: #1d1d24 !important;
          }

          [data-dashboard-theme="dark"] .hover\\:bg-gray-100:hover {
            background-color: #262631 !important;
          }

          [data-dashboard-theme="dark"] .border-transparent {
            border-color: transparent !important;
          }

          [data-dashboard-theme="dark"] .bg-blue-50 {
            background-color: #0c1d33 !important;
          }

          [data-dashboard-theme="dark"] .bg-violet-50 {
            background-color: #1f1933 !important;
          }

          [data-dashboard-theme="dark"] .bg-emerald-50 {
            background-color: #0f2723 !important;
          }

          [data-dashboard-theme="dark"] .bg-amber-50 {
            background-color: #2f2414 !important;
          }

          [data-dashboard-theme="dark"] .bg-blue-100 {
            background-color: #123154 !important;
          }

          [data-dashboard-theme="dark"] .bg-violet-100 {
            background-color: #31264d !important;
          }

          [data-dashboard-theme="dark"] .bg-emerald-100 {
            background-color: #17433b !important;
          }

          [data-dashboard-theme="dark"] .bg-amber-100 {
            background-color: #4a3618 !important;
          }

          [data-dashboard-theme="dark"] .bg-blue-600,
          [data-dashboard-theme="dark"] .bg-blue-700,
          [data-dashboard-theme="dark"] .bg-blue-800 {
            background-color: #1d43d8 !important;
          }

          [data-dashboard-theme="dark"] .hover\\:bg-blue-700:hover,
          [data-dashboard-theme="dark"] .hover\\:bg-blue-800:hover,
          [data-dashboard-theme="dark"] .hover\\:bg-blue-100:hover {
            background-color: #1e40af !important;
          }

          [data-dashboard-theme="dark"] button.bg-blue-600,
          [data-dashboard-theme="dark"] a.bg-blue-600,
          [data-dashboard-theme="dark"] button.bg-blue-700,
          [data-dashboard-theme="dark"] a.bg-blue-700 {
            background-color: #214ec7 !important;
            color: #ffffff !important;
          }

          [data-dashboard-theme="dark"] button.bg-blue-600:hover,
          [data-dashboard-theme="dark"] a.bg-blue-600:hover,
          [data-dashboard-theme="dark"] button.bg-blue-700:hover,
          [data-dashboard-theme="dark"] a.bg-blue-700:hover {
            background-color: #1a3fa5 !important;
          }

          [data-dashboard-theme="dark"] .border-blue-100,
          [data-dashboard-theme="dark"] .border-blue-200 {
            border-color: #244b7c !important;
          }

          [data-dashboard-theme="dark"] .border-blue-600,
          [data-dashboard-theme="dark"] .border-blue-700 {
            border-color: #373744 !important;
          }

          [data-dashboard-theme="dark"] .border-violet-100,
          [data-dashboard-theme="dark"] .border-violet-200 {
            border-color: #4c3f75 !important;
          }

          [data-dashboard-theme="dark"] .border-emerald-100,
          [data-dashboard-theme="dark"] .border-emerald-200 {
            border-color: #275d52 !important;
          }

          [data-dashboard-theme="dark"] .border-amber-100,
          [data-dashboard-theme="dark"] .border-amber-200 {
            border-color: #745a2a !important;
          }

          [data-dashboard-theme="dark"] .text-blue-700 {
            color: #7aa2d8 !important;
          }

          [data-dashboard-theme="dark"] .text-blue-600,
          [data-dashboard-theme="dark"] .text-blue-500,
          [data-dashboard-theme="dark"] .text-violet-600,
          [data-dashboard-theme="dark"] .text-emerald-600,
          [data-dashboard-theme="dark"] .text-amber-600 {
            color: #7ea4d8 !important;
          }

          [data-dashboard-theme="dark"] .hover\\:text-blue-700:hover,
          [data-dashboard-theme="dark"] .hover\\:text-slate-800:hover {
            color: #f3f4f6 !important;
          }

          [data-dashboard-theme="dark"] .text-violet-700 {
            color: #a78bfa !important;
          }

          [data-dashboard-theme="dark"] .text-emerald-700 {
            color: #34d399 !important;
          }

          [data-dashboard-theme="dark"] .text-amber-700 {
            color: #f59e0b !important;
          }

          [data-dashboard-theme="dark"] .from-slate-900 {
            --tw-gradient-from: #0a0a0d var(--tw-gradient-from-position) !important;
            --tw-gradient-to: rgb(10 10 13 / 0) var(--tw-gradient-to-position) !important;
          }

          [data-dashboard-theme="dark"] .to-slate-800 {
            --tw-gradient-to: #17171e var(--tw-gradient-to-position) !important;
          }

          [data-dashboard-theme="dark"] .from-white {
            --tw-gradient-from: #0d0d10 var(--tw-gradient-from-position) !important;
            --tw-gradient-to: rgb(13 13 16 / 0) var(--tw-gradient-to-position) !important;
          }

          [data-dashboard-theme="dark"] .via-slate-50 {
            --tw-gradient-stops: var(--tw-gradient-from), #15151a var(--tw-gradient-via-position), var(--tw-gradient-to) !important;
          }

          [data-dashboard-theme="dark"] .to-blue-50,
          [data-dashboard-theme="dark"] .to-indigo-50 {
            --tw-gradient-to: #1e1e26 var(--tw-gradient-to-position) !important;
          }

          [data-dashboard-theme="dark"] .focus\\:border-blue-200:focus {
            border-color: #26528a !important;
          }

          [data-dashboard-theme="dark"] .focus\\:ring-blue-50:focus {
            --tw-ring-color: rgb(29 78 216 / 0.3) !important;
          }

          [data-dashboard-theme="dark"] .ring-blue-500\\/20 {
            --tw-ring-color: rgb(59 130 246 / 0.22) !important;
          }

          [data-dashboard-theme="dark"] .ring-white {
            --tw-ring-color: rgb(56 56 68 / 1) !important;
          }

          [data-dashboard-theme="dark"] .from-blue-50 {
            --tw-gradient-from: #141419 var(--tw-gradient-from-position) !important;
            --tw-gradient-to: rgb(20 20 25 / 0) var(--tw-gradient-to-position) !important;
          }

          [data-dashboard-theme="dark"] .via-white {
            --tw-gradient-stops: var(--tw-gradient-from), #1a1a21 var(--tw-gradient-via-position), var(--tw-gradient-to) !important;
          }

          [data-dashboard-theme="dark"] .bg-blue-200\\/35,
          [data-dashboard-theme="dark"] .bg-sky-100\\/60,
          [data-dashboard-theme="dark"] .bg-blue-200\\/45 {
            opacity: 0.08 !important;
          }
        `,
        }}
      />
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardThemeProvider>
      <SidebarProvider>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </SidebarProvider>
    </DashboardThemeProvider>
  );
}
