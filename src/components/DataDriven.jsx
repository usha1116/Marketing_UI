import React from 'react'

export default function DataDriven(){
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Driven by Data, Fueled by Ideas</h2>
        <p className="text-slate-600">Our approach combines rigorous analytics with creative strategy to deliver measurable growth for every channel.</p>

        <div className="flex items-center mt-4">
          <div className="-space-x-3 flex items-center">
            {Array.from({length:6}).map((_,i)=> (
              <img key={i} src={`https://i.pravatar.cc/36?img=${i+20}`} className="w-9 h-9 rounded-full border-2 border-white shadow" alt="avatar" />
            ))}
          </div>
          <div className="ml-4">
            <div className="text-sm text-slate-500">Trusted by</div>
            <div className="font-semibold">300+ Clients</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=80&auto=format&fit=crop" alt="charts" className="rounded-xxl w-full max-w-md h-64 object-cover shadow-lg" />
      </div>
    </section>
  )
}
