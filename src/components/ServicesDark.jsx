import React from 'react'

const services = [
  {title:'Brand Optimization', icon:'🔧'},
  {title:'Strategy Execution', icon:'⚡'},
  {title:'Content Growth', icon:'📈'},
  {title:'Creative Direction', icon:'🎨'}
]

export default function ServicesDark(){
  return (
    <section id="services" className="bg-darkbg text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Brand Success Solutions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s, idx)=> (
            <div key={s.title} className="relative overflow-hidden p-5 sm:p-6 rounded-xxl card-shadow service-gradient text-left transform hover:-translate-y-2 transition">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=60&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
              <div className="relative z-10">
                <div className="text-2xl mb-3">{s.icon}</div>
                <div className="font-semibold text-base sm:text-lg">{s.title}</div>
                <p className="text-xs sm:text-sm text-slate-200 mt-2">Strategic approach and measurable results tailored to your brand.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8">
          <button className="bg-white text-darkbg px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base">
            See All Services
          </button>
        </div>
      </div>
    </section>
  )
}
