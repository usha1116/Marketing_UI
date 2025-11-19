import React from 'react'

export default function CaseStudies(){
  return (
    <section id="case-studies" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center bg-white">
      <div className="relative">
        <div className="grid grid-cols-1 gap-4">
          <img loading="lazy" src="https://picsum.photos/id/1011/1200/720" className="rounded-xxl w-full h-64 object-cover shadow-lg" alt="team presenting strategy" />
          <div className="grid grid-cols-2 gap-4">
            <img loading="lazy" src="https://picsum.photos/id/1012/800/480" className="rounded-xxl h-36 object-cover w-full" alt="client meeting" />
            <img loading="lazy" src="https://picsum.photos/id/1013/800/480" className="rounded-xxl h-36 object-cover w-full" alt="brainstorm session" />
          </div>
        </div>

        <div className="absolute top-6 left-6 flex flex-col gap-3">
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Engagements</div>
            <div className="font-semibold">124K+</div>
          </div>
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Successful Campaigns</div>
            <div className="font-semibold">1300+</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Achieve Your Marketing Goals Faster Than Ever</h3>
        <p className="text-slate-600">Speak with our strategists and see a custom plan to accelerate reach and conversions.</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-primary text-white px-5 py-3 rounded-2xl">Book a Consultation</button>
        </div>
      </div>
    </section>
  )
}
