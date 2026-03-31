import React from 'react'

export default function TermsBanner() {
  return (
<section className="relative overflow-hidden 
bg-[linear-gradient(to_bottom_right,#000000,#000033,#000066,#330066,#660033)] 
bg-fixed py-25 md:py-35 pb-12.5 md:pb-17.5">
  <div className="absolute inset-0 
  bg-[radial-gradient(circle_at_30%_20%,rgba(71,169,255,0.15),transparent_40%),
      radial-gradient(circle_at_80%_70%,rgba(255,71,107,0.15),transparent_40%)]" />
  <div className="relative max-w-7xl mx-auto px-4">
    <div className="text-left  mx-auto md:mx-0">
      <h1 className="
        text-white font-extrabold leading-tight
        text-[28px] sm:text-[34px] md:text-[54px]
      ">
        <span className="
          bg-[linear-gradient(104.04deg,#1472ff_-4%,#47a9ff_23%,#adc3ff_50%,#ffadc9_77%,#ff476b_104%)]
          bg-clip-text text-transparent block sm:inline
        ">
          Job Guarantee
        </span>

        <span className="text-white/90 block sm:inline">
          {" "}terms and conditions
        </span>
      </h1>
      <p className="
        mt-3 md:mt-4 
        text-white/60 
        text-[13px] sm:text-sm md:text-base 
        leading-relaxed
         mx-auto md:mx-0
      ">
        Clear guidelines and commitments to ensure your success with our job guarantee program.
      </p>

    </div>
  </div>
</section>
  )
}
