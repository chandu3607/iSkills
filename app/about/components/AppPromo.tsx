"use client";

export default function AppPromo() {
  return (
    <section className="md:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center md:gap-16 gap-8">
          <div className="max-w-xl">
            <span className="inline-block md:text-[10px] text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 md:mb-5 mb-4">
              Smart Learning App
            </span>
            <h2 className="text-2xl md:text-[38px] font-semibold text-gray-900 leading-tight md:mb-6 mb-4">
             This app can make your CAT preparation {" "}
              <span className="text-[#f26b23]">5X faster</span>
            </h2>
            <p className="text-gray-600 md:text-[17px] text-[14px] leading-relaxed md:mb-10 mb-6">
             Challenge CAT toppers and see where you stand. Improve faster with AI-based mock analysis, speed reading & timed quizzes, smart notes creation, and a subject-wise error tracker.
            </p>
            <div className="flex items-center gap-2 ">
              <a
                href="https://apps.apple.com/in/app/iquanta/id6754868864" target="_blank"
                className="group transition-all duration-300 hover:-translate-y-1">
                <img
                  src="https://media.iquanta.in/ui_images/app_store-button.svg"
                  alt="App Store"
                  className="h-[50px]" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.iquanta.app&hl=en&pli=1" target="_blank"
                className="group transition-all duration-300 hover:-translate-y-1">
                <img
                  src="https://media.iquanta.in/ui_images/google-play-button.svg"
                  alt="Play Store"
                  className="h-[50px]"/>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-[320px] h-80 bg-orange-100 rounded-full blur-3xl opacity-40 right-10 top-1/2 -translate-y-1/2" />
            <div className="relative rounded-2xl overflow-hidden  ">
              <img
                src="https://media.iquanta.in/ui_images/resized_images/730x420.webp"
                alt="iQuanta app"
                className="w-full max-w-[560px] transition-transform duration-500 shadow-[0px_20px_60px_rgba(0,0,0,0.08)] hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}