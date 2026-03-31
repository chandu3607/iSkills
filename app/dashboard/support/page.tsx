"use client";

import { useState } from "react";
import { CircleHelp, Mail, MessageCircle, PhoneCall } from "lucide-react";

const contactChannels = [
  {
    title: "WhatsApp Support",
    detail: "Fast updates on your ticket progress",
    icon: MessageCircle,
  },
  {
    title: "Email Support",
    detail: "Detailed responses from the support team",
    icon: Mail,
  },
  {
    title: "Call Back Request",
    detail: "Request a support call when needed",
    icon: PhoneCall,
  },
];

type TicketForm = {
  supportFor: string;
  examCategory: string;
  course: string;
  subject: string;
  description: string;
};

const initialForm: TicketForm = {
  supportFor: "",
  examCategory: "",
  course: "",
  subject: "",
  description: "",
};

export default function SupportPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<TicketForm>(initialForm);

  const updateField = (key: keyof TicketForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const clearForm = () => {
    setForm(initialForm);
  };

  const handleSave = () => {
    // Placeholder for API integration.
    setShowForm(false);
    clearForm();
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50";

  return (
    <div className="space-y-4 sm:space-y-6 pb-6 w-full">
      <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-linear-to-br from-white via-slate-50 to-blue-50 p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-700">
              <CircleHelp size={12} />
              Support Center
            </p>
            <h1 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              Need help with your dashboard?
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Get quick assistance for access, payments, classes, and technical issues.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Avg response: 1 day
          </span>
        </div>
      </section>

      <section className="grid gap-3 sm:gap-4 xl:grid-cols-12">
        <article className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 xl:col-span-7">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://media.iquanta.in/ui_images/new-dashboard/customer-support-1.png"
              alt="Support headset"
              
              className=" w-60 "
            />

            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Need support
            </h2>
            <p className="mt-1 text-lg sm:text-2xl text-slate-600">1 Day Response Time</p>

            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-700"
            >
              Get Support
            </button>
          </div>
        </article>

        <aside className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 xl:col-span-5">
          <h3 className="text-sm sm:text-base font-semibold text-slate-900">Support Channels</h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Choose how you want to connect with us.
          </p>

          <div className="mt-4 space-y-2.5">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{channel.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{channel.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </section>

      {showForm && (
        <section className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">
              Create Help Ticket
            </h2>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Close
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Need support for</label>
              <select
                value={form.supportFor}
                onChange={(e) => updateField("supportFor", e.target.value)}
                className={fieldClass}
              >
                <option value="">Select</option>
                <option value="course_access">Course access</option>
                <option value="payment">Payment issue</option>
                <option value="doubt_portal">Doubt portal</option>
                <option value="technical">Technical issue</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Select Exam Category</label>
              <select
                value={form.examCategory}
                onChange={(e) => updateField("examCategory", e.target.value)}
                className={fieldClass}
              >
                <option value="">Select</option>
                <option value="cat">CAT</option>
                <option value="snap">SNAP</option>
                <option value="xat">XAT</option>
                <option value="ipmat">IPMAT</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Select Course</label>
              <select
                value={form.course}
                onChange={(e) => updateField("course", e.target.value)}
                className={fieldClass}
              >
                <option value="">Select</option>
                <option value="cat_complete">CAT Complete Program</option>
                <option value="quant_accelerator">Quant Accelerator</option>
                <option value="varc_workshop">VARC Workshop</option>
              </select>
            </div>

            <div />

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                placeholder="Enter Subject"
                className={fieldClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Enter Description"
                className="min-h-[120px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-200 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />
            </div>

            <div className="md:col-span-2 flex justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={clearForm}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
