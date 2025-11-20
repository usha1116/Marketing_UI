import React from 'react'

export default function CaseStudies(){
  return (
    <section id="case-studies" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-6 sm:gap-8 items-center bg-white">
      <div className="relative">
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          <img 
            loading="lazy" 
            src="https://picsum.photos/id/1011/1200/720" 
            className="rounded-xxl w-full h-48 sm:h-64 object-cover shadow-lg" 
            alt="team presenting strategy" 
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img 
              loading="lazy" 
              src="https://picsum.photos/id/1012/800/480" 
              className="rounded-xxl h-28 sm:h-36 object-cover w-full" 
              alt="client meeting" 
            />
            <img 
              loading="lazy" 
              src="https://picsum.photos/id/1013/800/480" 
              className="rounded-xxl h-28 sm:h-36 object-cover w-full" 
              alt="brainstorm session" 
            />
          </div>
        </div>

        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2 sm:gap-3">
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Engagements</div>
            <div className="font-semibold text-sm sm:text-base">124K+</div>
          </div>
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Successful Campaigns</div>
            <div className="font-semibold text-sm sm:text-base">1300+</div>
          </div>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold">Achieve Your Marketing Goals Faster Than Ever</h3>
        <p className="text-slate-600 text-sm sm:text-base">Speak with our strategists and see a custom plan to accelerate reach and conversions.</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base w-full sm:w-auto">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
