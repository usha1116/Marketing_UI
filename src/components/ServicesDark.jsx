import React from 'react'

const services = [
  {title:'Brand Optimization', icon:'🔧'},
  {title:'Strategy Execution', icon:'⚡'},
  {title:'Content Growth', icon:'📈'},
  {title:'Creative Direction', icon:'🎨'}
]

export default function ServicesDark(){
  return (
    <section id="services" className="bg-darkbg text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">Brand Success Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((s, idx)=> (
            <div key={s.title} className="relative overflow-hidden p-6 rounded-xxl card-shadow service-gradient text-left transform hover:-translate-y-2 transition">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=60&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <div className="text-2xl mb-3">{s.icon}</div>
                <div className="font-semibold text-lg">{s.title}</div>
                <p className="text-sm text-slate-200 mt-2">Strategic approach and measurable results tailored to your brand.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-white text-darkbg px-6 py-3 rounded-2xl">See All Services</button>
        </div>
      </div>
    </section>
  )
}
