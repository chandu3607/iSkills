import { MoveRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black md:py-10 py-6">
   <div className="max-w-6xl mx-auto px-4">
  <div className="grid grid-cols-12 items-center gap-6 md:gap-10">
    <div className="col-span-12 md:col-span-6">
      <h2 className="text-white text-[28px] sm:text-[36px] md:text-[54px] leading-9 sm:leading-11 md:leading-15 font-normal md:mb-4 mb-3">
        Connect with Us
      </h2>
      <p className="text-[#ACAEB4] text-[13px] sm:text-[16px] md:text-[18px]">
        Have a doubt ? Let our expert career counselor assist you.
      </p>
      <div className="mt-8 sm:mt-10 md:mt-12">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="text-white text-sm mb-1 block">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none text-white py-2 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none text-white py-2 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none text-white py-2 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Ex. name@.com"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none text-white py-2 placeholder-gray-500"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="text-white text-sm mb-1 block">
              Leave a comment
            </label>
            <textarea
              rows={3}
              placeholder="Ex. It makes me feel..."
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none text-white py-2 placeholder-gray-500 resize-none"
            />
          </div>

          <div className="col-span-1 sm:col-span-2 mt-2">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#683FBE_0%,#EF7D6E_100%)] text-white px-8 py-3.5 cursor-pointer rounded-full hover:bg-white md:text-[15px] text-[13px] transition">
              Send Message
              <MoveRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </div>
    <div className="col-span-12 md:col-span-6 order-first md:order-0 mb-6 md:mb-0 hidden md:block">
      <img
        src="https://media.iquanta.in/ui_images/skills/skill-get-in.gif"
        alt="contact"
        width={600}
        height={500}
        className="w-[80%] sm:w-[70%] md:w-full mx-auto h-auto object-contain"
      />
    </div>

  </div>
</div>
    </section>
  );
}