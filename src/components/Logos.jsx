import React from 'react'

const logos = [
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Acme', alt:'Acme'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=CloudCo', alt:'CloudCo'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=NeoTech', alt:'NeoTech'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Pulse', alt:'Pulse'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Zoomer', alt:'Zoomer'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Orbit', alt:'Orbit'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Symbio', alt:'Symbio'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Pixel', alt:'Pixel'},
  {src:'https://dummyimage.com/140x40/ffffff/111.png&text=Verto', alt:'Verto'}
]

export default function Logos(){
  return (
    <section id="trusted" className="py-10 sm:py-12 bg-darkbg text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Backed by Industry Leaders</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
          {logos.map((l,i)=> (
            <div key={i} className="flex items-center justify-center opacity-90 transition logo-item">
              <img src={l.src} alt={`${l.alt} logo`} className="max-h-8 sm:max-h-10 filter brightness-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
