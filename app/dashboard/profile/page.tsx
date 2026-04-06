import Link from "next/link";
import { CalendarDays, Camera, ChevronDown, Heart, UserRound } from "lucide-react";

const fieldClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50";
const areaClass =
  "min-h-[96px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 transition focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50";
const labelClass = "mb-2 block text-sm font-medium text-slate-700";
export default function DashboardProfilePage() {
  return (
    <div className="space-y-4 sm:space-y-6 pb-6 w-full">
      <section className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-4 sm:p-6 lg:col-span-12">
          <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-blue-200/35 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-16 h-40 w-40 rounded-full bg-sky-100/60 blur-2xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 min-w-14 place-items-center rounded-full border-[5px] border-blue-600 bg-white text-sm font-semibold text-blue-700 sm:h-16 sm:w-16 sm:text-base">
                100%
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                  Edit Your Profile
                </h1>
                <p className="text-xs sm:text-sm text-slate-600">
                  Complete your profile to unlock all dashboard features.
                </p>
              </div>
            </div>
            <button className="w-full sm:w-auto rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Edit Your Profile
            </button>
          </div>
        </article>
      </section>
      <section className="grid gap-3 sm:gap-4 xl:grid-cols-12">
        <aside className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 xl:col-span-4">
          <div className="flex flex-col items-center">
            <div className="group relative h-24 w-24 sm:h-28 sm:w-28">
              <img
                src="https://s3-ap-south-1.amazonaws.com/iquantamedia/media/profile_pic/profile_pic/giphy.gif"
                alt="Leo's profile"
                className="h-full w-full rounded-2xl border border-slate-200 bg-slate-100 object-cover p-1"
              />
              <label
                htmlFor="profile-image-upload"
                className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl bg-slate-900/70 text-white opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
                <Camera size={16} />
                <span className="text-[11px] font-semibold">Upload Image</span>
              </label>
              <input
                id="profile-image-upload"
                type="file"
                accept="image/*"
                className="sr-only"
              />
            </div>
            <p className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Leo
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                DSA
              </span>
              <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                Full Stack
              </span>
             
            </div>
          </div>

          <div className="my-5 h-px bg-slate-200" />

          <nav className="space-y-2">
            <button className="flex w-full items-center gap-2.5 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2.5 text-left text-sm font-semibold text-blue-700">
              <UserRound size={16} />
              Personal Information
            </button>
            <Link
              href="/dashboard/wishlist"
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <Heart size={16} />
              Wishlist
            </Link>
          </nav>
        </aside>

        <article className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 xl:col-span-8">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">Personal Information</h2>
            <div className="mt-3 h-px bg-slate-200" />

            <div className="mt-4 grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Name</label>
                <input className={fieldClass} defaultValue="" />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  className={fieldClass}
                  defaultValue=""
                />
              </div>
              <div className="relative">
                <label className={labelClass}>Date of Birth</label>
                <input className={`${fieldClass} pr-11`} defaultValue="" />
                <CalendarDays
                  size={16}
                  className="pointer-events-none absolute right-4 top-[46px] text-slate-400"
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input className={fieldClass} defaultValue="" />
              </div>
              <div className="relative">
                <label className={labelClass}>Gender</label>
                <select className={`${fieldClass} appearance-none`} defaultValue="">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-[46px] text-slate-400"
                />
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">Address</h2>
            <div className="mt-3 h-px bg-slate-200" />
            <div className="mt-4 grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Address 01</label>
                <textarea className={areaClass} defaultValue="" />
              </div>
              <div>
                <label className={labelClass}>Address 02</label>
                <textarea className={areaClass} defaultValue="" />
              </div>
              <div>
                <label className={labelClass}>City</label>
                <input className={fieldClass} defaultValue="" />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <input className={fieldClass} defaultValue="" />
              </div>
              <div>
                <label className={labelClass}>Pincode</label>
                <input className={fieldClass} defaultValue="" />
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">Exam Details</h2>
            <div className="mt-3 h-px bg-slate-200" />
            <div className="mt-4 ">
              <div className="relative">
                <label className={labelClass}>Exam Course</label>
                <select className={`${fieldClass} appearance-none`} defaultValue="">
                  <option>Data Analytics Mastery</option>
                  <option>DSA Pattern & Competitive Programming</option>
                  <option>Data Science Bootcamp</option>
                  <option>Full Stack Web Development</option>
                  <option>DSA MAANG</option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-[46px] text-slate-400"
                />
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-slate-200 pt-4">
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Cancel
              </button>
              <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                Save Changes
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
