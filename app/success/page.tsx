import Link from "next/link";
import { ArrowRight, CheckCircle2, Receipt, ShieldCheck } from "lucide-react";
import Headder from "../components/Headder";

const summaryItems = [
  { label: "Program", value: "Full Stack Development" },
  { label: "Amount Paid", value: "₹12,000" },
  // { label: "Payment ID", value: "PAY-ISK-2026-01482" },
];

export default function page() {
  return (
    <>
    <Headder />
    <section className="md:h-screen bg-[#080808]  md:py-30 py-20 text-white ">
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
            <CheckCircle2 size={32} />
          </div>
          <div className="mt-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
              Payment Successful
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Your payment has been confirmed.
            </h1>
            <p className="mt-3 md:text-sm text-xs leading-4.5 md:leading-6 text-white/60 md:px-8">
              Your iSkills enrollment is complete. You can now access your
              dashboard and continue with your learning journey.
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Receipt size={16} />
              Payment Summary
            </div>
            <div className="mt-4 space-y-3">
              {summaryItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/50">{item.label}</span>
                  <span className="text-right font-medium text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-white/10 bg-white/6 p-4 md:text-sm text-xs text-white/65">
            <ShieldCheck size={18} className="mt-0.5 shrink-0 text-blue-300" />
            <p>
              A confirmation email and receipt will be shared on your registered
              email address.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90" >
              Go to Dashboard
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
