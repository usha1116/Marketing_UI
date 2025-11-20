import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight">
          Turning Brand Vision into Real-World Impact
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl">
          We combine brand strategy, creative design, and data-driven growth to scale ambitious companies.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <a href="#case-studies" className="bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl hover:shadow-lg transition inline-block text-center text-sm sm:text-base">
            Get Started
          </a>
          <a href="#services" className="border border-slate-200 px-5 py-2.5 sm:py-3 rounded-2xl text-primary inline-block text-center text-sm sm:text-base">
            Learn More
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
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

      <div className="flex justify-center md:justify-end order-first md:order-last">
        <div className="relative w-full max-w-md">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" 
            alt="team" 
            className="rounded-xxl object-cover w-full h-64 sm:h-80 md:h-96 shadow-lg" 
          />

          <div className="absolute -top-4 sm:-top-6 right-2 grid grid-cols-3 gap-2 bg-white rounded-xxl p-2 shadow-lg">
            {Array.from({length:6}).map((_,i)=> (
              <img 
                key={i} 
                src={`https://i.pravatar.cc/36?img=${i+10}`} 
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white" 
                alt="p" 
              />
            ))}
          </div>

          <div className="absolute top-1/2 right-0 transform translate-x-4 sm:translate-x-6 -translate-y-1/2 hidden sm:block">
            <div className="rating-vertical">
              <div className="text-xs text-slate-500">Clients</div>
              <div className="text-xl sm:text-2xl font-bold">4.5k</div>
              <div className="mt-3 text-xs text-slate-500">Rating</div>
              <div className="text-base sm:text-lg font-semibold">4.8</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
