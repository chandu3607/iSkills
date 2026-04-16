"use client";
import React from "react";
import {
  Award,
  Briefcase,
  CornerDownRight,
  CreditCard,
  FileText,
  Handshake,
  Headset,
  Heart,
  Infinity,
  Lock,
  MessagesSquare,
  Share2,
  Smartphone,
  Users,
  Video,
  Wallet,
  X,
} from "lucide-react";
import Link from "next/link";
const paymentMethods = [
  { label: "Cards", icon: CreditCard },
  { label: "UPI", icon: Smartphone },
  { label: "Wallet", icon: Wallet },
];
const checkoutMentors = [
  {
    name: "Saurabh Moharikar",
    title: "DATA ANALYTICS & BI",
    subtitle: "Instructor at iQuanta",
    role: "Sr. Data Analyst 17+ Years\nNIT Raipur",
    img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/saurabh-moharikar.webp",
  },
  {
    name: "Kanika Gupta",
    title: "PYTHON & SQL",
    subtitle: "Instructor at iQuanta",
    role: "SDE 2 Microsoft 10+\nIIT Madras",
    img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/kanika-gupta.webp",
  },
  {
    name: "Ajay Kumar Gupta",
    title: "DATA SCIENCE & AI",
    subtitle: "Instructor at iQuanta",
    role: "11+ years\nData Science Expert",
    img: "https://iquantamedia.s3.ap-south-1.amazonaws.com/ui_images/skills/skill-home/ajay-kumar.webp",
  },
];
type Coupon = {
  code: string;
  title: string;
  description: string;
  discount: number;
};
const programFee = 10000;
const gstAmount = 1800;
const listPrice = 20800;
const availableCoupons: Coupon[] = [
  {
    code: "SKILLS1000",
    title: "Flat off on Program Fee",
    description: "Get instant discount on your enrollment amount.",
    discount: 1000,
  },
  {
    code: "NEWLEARN1500",
    title: "Welcome coupon",
    description: "Applicable for first-time learners only.",
    discount: 1500,
  },
  {
    code: "IQCARE2000",
    title: "Limited period offer",
    description: "Best value coupon for this checkout.",
    discount: 2000,
  },
  {
    code: "IQCARE3000",
    title: "Limited period offer",
    description: "Best value coupon for this checkout.",
    discount: 3000,
  },
  {
    code: "IQCARE4000",
    title: "Limited period offer",
    description: "Best value coupon for this checkout.",
    discount: 4000,
  },
];

export default function Payment() {
  const [isCouponDrawerOpen, setIsCouponDrawerOpen] = React.useState(false);
  const [isShareDrawerOpen, setIsShareDrawerOpen] = React.useState(false);
  const [appliedCoupon, setAppliedCoupon] = React.useState<Coupon | null>(null);
  const [couponInput, setCouponInput] = React.useState("");
  const [isLoved, setIsLoved] = React.useState(false);
  const [shareNotice, setShareNotice] = React.useState("");
  const subtotal = programFee + gstAmount;
  const discountAmount = appliedCoupon?.discount ?? 0;
  const payableAmount = Math.max(subtotal - discountAmount, 0);
  const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
  const openCouponDrawer = () => setIsCouponDrawerOpen(true);
  const closeCouponDrawer = () => setIsCouponDrawerOpen(false);
  const openShareDrawer = () => {
    setShareNotice("");
    setIsShareDrawerOpen(true);
  };
  const closeShareDrawer = () => setIsShareDrawerOpen(false);
  const applyCoupon = (coupon: Coupon) => {
    setAppliedCoupon(coupon);
    setCouponInput(coupon.code);
    closeCouponDrawer();
  };
  const removeAppliedCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
  };
  const applyManualCoupon = () => {
    const manualCode = couponInput.trim();
    if (!manualCode) {
      removeAppliedCoupon();
      return;
    }
    const matchedCoupon = availableCoupons.find(
      (coupon) => coupon.code.toLowerCase() === manualCode.toLowerCase(),
    );
    if (matchedCoupon) {
      setAppliedCoupon({ ...matchedCoupon, code: manualCode });
      closeCouponDrawer();
      return;
    }
    setAppliedCoupon({
      code: manualCode,
      title: "Manual coupon",
      description: "Coupon entered manually from checkout drawer.",
      discount: 0,
    });
    closeCouponDrawer();
  };
  const copyShareLink = async () => {
    const shareUrl = window.location.href;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setShareNotice("Link copied. You can paste it anywhere.");
        return;
      }
    } catch {}
    window.prompt("Copy this link", shareUrl);
    setShareNotice("Copy the link and share it manually.");
  };
  const openShareTarget = async (
    platform:
      | "whatsapp"
      | "instagram"
      | "facebook"
      | "twitter"
      | "telegram"
      | "copy",
  ) => {
    const shareUrl = window.location.href;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(
      "Check this Data Analytics Job Guarantee program",
    );
    if (platform === "copy") {
      await copyShareLink();
      return;
    }
    if (platform === "instagram") {
      await copyShareLink();
      window.open(
        "https://www.instagram.com/",
        "_blank",
        "noopener,noreferrer",
      );
      setShareNotice("Instagram opened. Paste the copied link there.");
      return;
    }
    const targetUrl =
      platform === "whatsapp"
        ? `https://wa.me/?text=${encodedText}%20${encodedUrl}`
        : platform === "facebook"
          ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
          : platform === "twitter"
            ? `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
            : `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      if (typeof navigator.share === "function") {
        await navigator.share({
          title: "Data Analytics Job Guarantee",
          text: "Check this program",
          url: shareUrl,
        });
        return;
      }
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        error.name === "AbortError"
      ) {
        return;
      }
    }

    openShareDrawer();
  };

  React.useEffect(() => {
    const isAnyDrawerOpen = isCouponDrawerOpen || isShareDrawerOpen;
    if (!isAnyDrawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (isShareDrawerOpen) closeShareDrawer();
      if (isCouponDrawerOpen) closeCouponDrawer();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isCouponDrawerOpen, isShareDrawerOpen]);

  return (
    <>
      <section className="bg-[#080808] px-4 pb-44 md:pb-6 md:pt-28 pt-20 text-white ">
        <div className="absolute left-0 top-14 h-72 w-72 rounded-full bg-[#127EF1]/18 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#EF7D6E]/16 blur-3xl" />
        <div className="absolute bottom-0  left-1/3 h-72 md:w-72 rounded-full bg-[#61E6C6]/5 blur-3xl w-fit" />
        <div className="mx-auto max-w-6xl">
          {/* <div className="mb-8">
          <h1 className="mt-2 text-[32px] font-semibold leading-tight sm:text-[40px]">
            Complete your payment
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-[15px]">
            Review your program details and finish payment using your preferred
            method.
          </p>
        </div> */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0 space-y-6">
              <div className="md:rounded-3xl rounded-3xl md:border-2 border border-white/60 bg-[#080808] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-8 ">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <h2 className=" md:text-[34px] text-[22px] font-semibold text-white relative z-10">
                      Data Analytics Job Guarantee
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 relative z-10">
                      Master complete Data analytics from scratch to advance,
                      Learn essential skills like Python, SQL, Statistics,
                      PowerBi, Tableau and advance excel. Get hands on
                      experience working on domain specific live projects and
                      build a job ready portfolio. This program is suitable for
                      both tech and non tech candidates as data analytics is a
                      skills used across various domain such as banking and
                      finance, sales, marketing, retail, ecommerce, security and
                      surveillance and many more.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap md:gap-3 gap-2  pt-6">
                  {[
                    { icon: Briefcase, text: "Job Guarantee (Unlimited Interview Opportunities)" },
                    { icon: Video, text: "Live Sessions" },
                    { icon: MessagesSquare, text: "1 on 1 Live Doubt Support" },
                    { icon: Award, text: "Course Completion Certificate" },
                    { icon: FileText, text: "Personalised Resume Support" },
                    { icon: Handshake, text: "Personalised Mock Interviews" },
                    { icon: Infinity, text: "Lifetime Course Access" },
                    { icon: Users, text: "Community Doubt Support" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md transition hover:bg-white/10" >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/70">
                          <Icon className="h-3 w-3" />
                        </span>
                        <span className="md:text-[12px] text-[11px] font-medium text-white/85 whitespace-nowrap">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-3xl md:border-2 border border-white/60 bg-[#080808] md:p-6 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Meet Your Mentors
                    </h2>
                    <p className="md:text-sm text-xs text-white/55">
                      Learn directly from industry professionals with hands-on
                      experience.
                    </p>
                  </div>
                  <span className="flex h-10 w-10 min-w-10 items-center justify-center rounded-xl bg-white/6 text-white">
                    <Users className="md:h-5 h-4 md:w-5 w-4  " />
                  </span>
                </div>
                <div className="mt-5 min-w-0 overflow-hidden">
                  <div
                    className="w-full min-w-0 overflow-x-auto overflow-y-hidden"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "#755ea5 #161616",
                    }}>
                    <div className="flex w-max md:gap-4 gap-2  pb-3 snap-x snap-mandatory">
                      {checkoutMentors.map((mentor) => (
                        <div
                          key={mentor.name}
                          className="relative md:h-60 h-48 w-72.5 md:w-90 shrink-0 snap-start overflow-hidden rounded-[30px] border border-white/35 bg-[linear-gradient(132deg,#221055_0%,#4D1DB1_35%,#0A124A_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.45)]" >
                          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#8D6DFF]/30 blur-3xl" />
                          <div className="absolute right-16 top-0 h-28 w-28 rounded-full bg-[#2EE7FF]/18 blur-2xl" />
                          <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(11,8,34,0.2)_15%,rgba(9,9,24,0.62)_62%,rgba(9,9,24,0.9)_100%)]" />
                          <div className="relative z-10 p-5 md:pr-32 pr-28">
                            <h3 className="md:text-[17px] text-[14px] font-extrabold text-white">
                              {mentor.title}
                            </h3>
                            <p className="mt-1 text-[14px] font-semibold text-white/95">
                              {mentor.subtitle}
                            </p>
                          </div>
                          <div className="relative z-20 px-5 py-3 md:pr-32 pr-28">
                            <h4 className="md:text-[20px] text-[16px] font-extrabold text-white whitespace-pre-line">
                              {mentor.name}
                            </h4>
                            <p className="mt-1 text-[12px] font-semibold text-white/85 whitespace-pre-line">
                              {mentor.role}
                            </p>
                          </div>
                          <img
                            src={mentor.img}
                            alt={mentor.name}
                            loading="lazy"
                            className="absolute bottom-0 right-0 z-10 md:h-full h-[70%] object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl md:border-2 border border-white/60 bg-[#080808] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 min-w-10 items-center justify-center rounded-xl bg-white/6 text-white">
                    <Lock className="h-4 w-4 md:h-5 md:w-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Payment methods
                    </h2>
                    <p className="md:text-sm text-xs text-white/55">
                      Choose from the available digital payment options.
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.label}
                        className="rounded-2xl border border-white/10 bg-white/2 p-4 text-center" >
                        <Icon className="mx-auto h-5 w-5 text-white/80" />
                        <p className="mt-2 md:text-sm text-xs font-medium text-white/70">
                          {method.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-3xl md:border-2 border border-white/60 bg-[#080808] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className=" text-[24px] font-semibold text-white">
                        Payment details
                      </h2>
                    </div>
                    <span className="flex md:h-11 h-10 md:w-11 w-10  items-center justify-center rounded-xl bg-white/6 text-white">
                      <CreditCard className="md:h-5 h-4 md:w-5 w-4" />
                    </span>
                  </div>
                  <div className="mt-6 space-y-4 border-b border-white/10 pb-6">
                    <div className="flex items-center justify-between text-sm text-white/65">
                      <span>Program fee</span>
                      <span className="font-medium text-white">
                        {formatPrice(programFee)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/65">
                      <span>GST</span>
                      <span className="font-medium text-white">
                        {formatPrice(gstAmount)}
                      </span>
                    </div>
                    {appliedCoupon ? (
                      <div className="flex min-w-0 items-center justify-between gap-3 text-sm text-white/65">
                        <span
                          className="min-w-0 truncate"
                          title={`Coupon (${appliedCoupon.code})`}
                        >
                          Coupon ({appliedCoupon.code})
                        </span>
                        <span className="shrink-0 font-medium text-emerald-300">
                          {discountAmount > 0
                            ? `-${formatPrice(discountAmount)}`
                            : "Applied"}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/2 p-2">
                    <div className="flex min-w-0 flex-wrap items-center gap-2 sm:flex-nowrap">
                      <input
                        placeholder="Coupon code"
                        value={couponInput}
                        readOnly
                        onClick={openCouponDrawer}
                        className="min-w-0 w-full flex-1 cursor-pointer bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/25" />
                      <button
                        type="button"
                        onClick={openCouponDrawer}
                        className="shrink-0 rounded-xl bg-linear-to-r from-gray-200 to-gray-400 px-4 py-2 text-xs font-medium text-black cursor-pointer transition hover:bg-white/90">
                        {appliedCoupon ? "Change" : "Apply"}
                      </button>
                      {appliedCoupon ? (
                        <button
                          type="button"
                          onClick={removeAppliedCoupon}
                          className="shrink-0 rounded-xl border border-white/15 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/8">
                          Remove
                        </button>
                      ) : null}
                    </div>
                    {appliedCoupon ? (
                      <p
                        className="break-all px-3 pt-1 text-[10px] text-emerald-300"
                        title={`${appliedCoupon.code} applied`}>
                        {appliedCoupon.code} applied
                        {discountAmount > 0
                          ? `. You saved ${formatPrice(discountAmount)}.`
                          : "."}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-white/50">Total payable</p>
                      <p className="mt-1 text-[32px] font-semibold text-white flex items-end gap-2 leading-normal">
                        {formatPrice(payableAmount)}
                        <del className="rounded-full text-[16px] font-medium mb-1">
                          {formatPrice(listPrice)}
                        </del>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-label="Like program"
                        onClick={() => setIsLoved((previous) => !previous)}
                        className="cursor-pointer" >
                        <Heart
                          className={`h-5 w-5 transition ${
                            isLoved ? "fill-red-500 text-red-500" : "text-white"
                          }`}/>
                      </button>
                      <button
                        type="button"
                        aria-label="Share program"
                        onClick={handleShare}
                        className="cursor-pointer">
                        <Share2 className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/success">
                      <button className="mt-6 flex w-full items-center justify-center gap-2 cursor-pointer rounded-xl bg-linear-to-r from-purple-600 to-orange-400 px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-white/90">
                        <CreditCard className="h-4 w-4" />
                        Buy Now
                      </button>
                    </Link>
                    <Link href="">
                      <button className="mt-6 flex w-full items-center justify-center gap-2 cursor-pointer rounded-xl bg-[#03692b] px-5 py-3.5 text-xs font-semibold text-white transition hover:bg-[#03692b]">
                        <Headset className="h-4 w-4" />
                        Enquire Now
                      </button>
                    </Link>
                  </div>
                  <div className="mt-4 flex items-start gap-3 justify-center w-fit mx-auto border-t border-white/20 pt-4">
                    <CornerDownRight className="mt-0.5 md:h-5 h-4 md:w-5 w-4 shrink-0 text-white" />
                    <p className="md:text-xs text-xs md:leading-6 leading-5 text-white/55 font-semibold">
                      Looking for <span className="text-orange-400">EMI</span>{" "}
                      Options?{" "}
                      <span className="hover:underline cursor-pointer text-orange-400">
                        Enquire Now!
                      </span>
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`fixed inset-0 z-9999 transition ${
          isCouponDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}>
        <button
          type="button"
          aria-label="Close coupon drawer"
          onClick={closeCouponDrawer}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isCouponDrawerOpen ? "opacity-100" : "opacity-0"
          }`} />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-hidden border-l border-white/15 bg-[#0c0c0c] p-4 md:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 ${
            isCouponDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`} >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/45">
                Offers
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Apply Coupon
              </h3>
            </div>
            <button
              type="button"
              onClick={closeCouponDrawer}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/80 transition hover:bg-white/12">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 rounded-2xl border border-white/12 bg-white/3 p-4">
            <p className="text-xs uppercase tracking-wide text-white/45">
              Have a coupon code?
            </p>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={couponInput}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  setCouponInput(nextValue);
                  if (!nextValue.trim()) {
                    setAppliedCoupon(null);
                  }
                }}
                placeholder="Enter coupon code"
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-sm text-white outline-none placeholder:text-white/25"/>
              <button
                type="button"
                onClick={applyManualCoupon}
                className="rounded-xl bg-linear-to-r from-gray-200 to-gray-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90">
                Apply
              </button>
            </div>
          </div>
          <div className="mt-3 min-h-0 flex-1 space-y-3 overflow-y-auto pb-24 pr-1 [scrollbar-gutter:stable]">
            {availableCoupons.map((coupon) => {
              const isApplied =
                appliedCoupon?.code.toLowerCase() === coupon.code.toLowerCase();

              return (
                <div
                  key={coupon.code}
                  className="rounded-2xl border border-white/12 bg-white/3 p-4">
                  <p className="text-sm font-semibold text-white">
                    {coupon.code}
                  </p>
                  <p className="mt-1 text-sm text-white/80">{coupon.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    {coupon.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-emerald-300">
                      Save {formatPrice(coupon.discount)}
                    </p>
                    <button
                      type="button"
                      onClick={() => applyCoupon(coupon)}
                      disabled={isApplied}
                      className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                        isApplied
                          ? "cursor-default bg-emerald-500/20 text-emerald-300"
                          : "cursor-pointer bg-linear-to-r from-gray-200 to-gray-400 text-black hover:bg-white/90"
                      }`}>
                      {isApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
      <div
        className={`fixed inset-0 z-10000 transition ${
          isShareDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}>
        <button
          type="button"
          aria-label="Close share drawer"
          onClick={closeShareDrawer}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isShareDrawerOpen ? "opacity-100" : "opacity-0"
          }`} />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-sm border-l border-white/15 bg-[#0c0c0c] p-4 md:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 ${
            isShareDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/45">
                Share
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                Share This Program
              </h3>
            </div>
            <button
              type="button"
              onClick={closeShareDrawer}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/80 transition hover:bg-white/12" >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => openShareTarget("whatsapp")}
              className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10" >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={() => openShareTarget("instagram")}
              className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Instagram
            </button>
            <button
              type="button"
              onClick={() => openShareTarget("facebook")}
              className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10" >
              Facebook
            </button>
            <button
              type="button"
              onClick={() => openShareTarget("twitter")}
              className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10" >
              X (Twitter)
            </button>
            <button
              type="button"
              onClick={() => openShareTarget("telegram")}
              className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10" >
              Telegram
            </button>
            <button
              type="button"
              onClick={() => openShareTarget("copy")}
              className="rounded-xl border border-white/12 bg-white/4 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"  >
              Copy Link
            </button>
          </div>
          {shareNotice ? (
            <p className="mt-4 text-xs text-emerald-300">{shareNotice}</p>
          ) : null}
        </aside>
      </div>
      <div className="block md:hidden">
        <div className="fixed inset-x-0 bottom-0 z-99 border-t border-white/10 bg-black p-3 px-4 shadow-[0px_8px_24px_rgba(255,255,255,0.3)] ">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="flex items-end gap-1.5 text-[22px] font-semibold leading-none text-white">
                {formatPrice(payableAmount)}
                <del className="mb-px text-[11px] font-medium text-white/65">
                  {formatPrice(listPrice)}
                </del>
              </p>
              {appliedCoupon ? (
                <p
                  className="mt-1 truncate text-[10px] text-emerald-300"
                  title={`${appliedCoupon.code} applied`}>
                  {appliedCoupon.code} applied
                  {discountAmount > 0
                    ? ` • Saved ${formatPrice(discountAmount)}`
                    : ""}
                </p>
              ) : null}
            </div>
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                aria-label="Like program"
                onClick={() => setIsLoved((previous) => !previous)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5" >
                <Heart
                  className={`h-4 w-4 transition ${
                    isLoved ? "fill-red-500 text-red-500" : "text-white"
                  }`}
                />
              </button>
              <button
                type="button"
                aria-label="Share program"
                onClick={handleShare}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5"  >
                <Share2 className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={openCouponDrawer}
              className="min-w-0 flex-1 rounded-lg border border-white/12 bg-white/4 px-3 py-2 text-left text-xs text-white/85"   >
              <span className="block truncate">
                {appliedCoupon ? appliedCoupon.code : "Apply coupon"}
              </span>
            </button>
            <button
              type="button"
              onClick={openCouponDrawer}
              className="shrink-0 rounded-lg bg-linear-to-r from-gray-200 to-gray-400 px-3 py-2 text-xs font-medium text-black"  >
              {appliedCoupon ? "Change" : "Apply"}
            </button>
            {appliedCoupon ? (
              <button
                type="button"
                onClick={removeAppliedCoupon}
                className="shrink-0 rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/80"  >
                Remove
              </button>
            ) : null}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link href="/success">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 to-orange-400 px-4 py-2.5 text-xs font-semibold text-white">
                <CreditCard className="h-4 w-4" />
                Buy Now
              </button>
            </Link>
            <Link href="">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#03692b] px-4 py-2.5 text-xs font-semibold text-white">
                <Headset className="h-4 w-4" />
                Enquire
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
