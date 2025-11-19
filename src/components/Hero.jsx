import React from 'react'

export default function Hero(){
  return (

    <section id="home" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight">Turning Brand Vision into Real-World Impact</h1>
        <p className="text-slate-600 max-w-xl">We combine brand strategy, creative design, and data-driven growth to scale ambitious companies.</p>

        <div className="flex gap-3 items-center">
          <a href="#case-studies" className="bg-primary text-white px-6 py-3 rounded-2xl hover:shadow-lg transition inline-block">Get Started</a>
          <a href="#services" className="border border-slate-200 px-5 py-3 rounded-2xl text-primary inline-block">Learn More</a>
        </div>

        <div className="flex gap-3 mt-6">
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Success Rate</div>
            <div className="font-semibold">99%</div>
          </div>
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Rating</div>
            <div className="font-semibold">4.9</div>
          </div>
          <div className="metric-badge">
            <div className="text-xs text-slate-500">Impressions</div>
            <div className="font-semibold">2.5M+</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" alt="team" className="rounded-xxl object-cover w-full h-96 shadow-lg" />

          <div className="absolute -top-6 right-2 grid grid-cols-3 gap-2 bg-white rounded-xxl p-2 shadow-lg">
            {Array.from({length:6}).map((_,i)=> (
              <img key={i} src={`https://i.pravatar.cc/36?img=${i+10}`} className="w-9 h-9 rounded-full border-2 border-white" alt="p" />
            ))}
          </div>

          <div className="absolute top-1/2 right-0 transform translate-x-6 -translate-y-1/2">
            <div className="rating-vertical">
              <div className="text-xs text-slate-500">Clients</div>
              <div className="text-2xl font-bold">4.5k</div>
              <div className="mt-3 text-xs text-slate-500">Rating</div>
              <div className="text-lg font-semibold">4.8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
