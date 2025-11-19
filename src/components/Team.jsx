import React from 'react'

const team = [
  {name:'Aisha Khan', role:'CEO'},
  {name:'Marco Diaz', role:'Head of Strategy'},
  {name:'Lina Park', role:'Creative Director'}
]

export default function Team(){
  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">The People Powering Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m)=> (
            <div key={m.name} className="p-6 rounded-xxl bg-white card-shadow">
              <img src={`https://i.pravatar.cc/120?u=${m.name}`} className="w-28 h-28 rounded-full mx-auto" alt={m.name} />
              <div className="mt-4 text-lg font-semibold">{m.name}</div>
              <div className="text-slate-500">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
