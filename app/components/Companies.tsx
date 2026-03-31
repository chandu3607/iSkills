"use client";

export default function Companies() {
  const logos = [
    "https://media.iquanta.in/ui_images/skills/company-1.png",
    "https://media.iquanta.in/ui_images/skills/company-2.png",
    "https://media.iquanta.in/ui_images/skills/company-3.png",
    "https://media.iquanta.in/ui_images/skills/company-4.png",
    "https://media.iquanta.in/ui_images/skills/company-5.png",
    "https://media.iquanta.in/ui_images/skills/company-6.png",
    "https://media.iquanta.in/ui_images/skills/company-7.png",
    "https://media.iquanta.in/ui_images/skills/company-8.png",
    "https://media.iquanta.in/ui_images/skills/company-9.png",
    "https://media.iquanta.in/ui_images/skills/company-10.png",
    "https://media.iquanta.in/ui_images/skills/company-11.png",
    "https://media.iquanta.in/ui_images/skills/company-12.png",
    "https://media.iquanta.in/ui_images/skills/company-13.png",
    "https://media.iquanta.in/ui_images/skills/company-14.png",
  ];
  return (
    <section className="bg-black md:py-10 py-6 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto mb-10 px-4">
        <h2 className=" text-[28px] leading-9.5 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
          Your Gateway to Top Companies
        </h2>
        <p className="text-gray-400 mt-2 md:text-[16px] text-[14px] md:px-0 px-8">
          Trusted by leading companies to prepare future-ready talent.
        </p>
      </div>
      <div className="flex gap-10 md:min-h-45 min-h-25">
        {[0, 1].map((track) => (
          <div
            key={track}
            className="flex md:gap-6 gap-2 companiesmarquee"
          >
            {[...logos, ...logos].map((item, i) => (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-42.5  w-25 md:h-42.5 h-25 rounded-full 
                bg-[linear-gradient(7deg,black,#8383839e)]
                flex items-center justify-center relative
                hover:scale-105 transition "
              >
                <div
                  className="md:w-35 md:h-35 w-22 h-22 rounded-full 
                  border border-white/50 bg-white 
                  flex items-center justify-center p-5"
                >
                  <img
                    src={item}
                    className="w-15 object-contain"
                    alt="company"
                  />
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

