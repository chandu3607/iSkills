import React from 'react'

export default function Certification() {
  return (
   <section className="bg-black md:py-10 py-6">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center md:mb-10 mb-6">
      <h2 className="   text-[26px] leading-9.5 px-6 md:px-0 md:text-[54px] md:leading-18.5 font-black bg-[linear-gradient(90deg,#FEB5BA_0%,#D5B1FD_46.5%,#C3FFBE_100%)] bg-clip-text text-transparent">
        Certifications
      </h2>
    </div>
    <div className="max-w-3xl mx-auto">
      <div className="relative rounded-[20px] overflow-hidden border border-white/10 
      bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] 
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 rounded-[20px] pointer-events-none
        bg-[linear-gradient(120deg,rgba(97,230,198,0.25),transparent,rgba(239,125,110,0.25))] opacity-20" />
        <img
          src="https://media.iquanta.in/ui_images/skills/GENERATIVE-AI-certi.jpg"
          alt="certificate"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>
    </div>
  </div>
</section>
  )
}
