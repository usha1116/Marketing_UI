import React, { useRef, useState, useEffect } from 'react'

const items = [
  {name:'Arjun Sethi', role:'CMO', text:'They scaled our campaigns 3x in 6 months.', img:'https://i.pravatar.cc/60?img=5'},
  {name:'Sara Lee', role:'Founder', text:'Strategic and creative — a delight to work with.', img:'https://i.pravatar.cc/60?img=12'},
  {name:'Ravi Patel', role:'VP Marketing', text:'Clear ROI and fast execution.', img:'https://i.pravatar.cc/60?img=20'},
  {name:'Noah Williams', role:'Head of Growth', text:'Exceptional strategy and execution.', img:'https://i.pravatar.cc/60?img=30'},
  {name:'Emma Johnson', role:'Product Lead', text:'Creative direction lifted our brand presence.', img:'https://i.pravatar.cc/60?img=45'},
  {name:'Liam Brown', role:'Marketing Director', text:'Consistent results and excellent communication.', img:'https://i.pravatar.cc/60?img=15'}
]

export default function Testimonials(){
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let pointerDown = false
    let start = 0

    const onPointerDown = (e) => {
      pointerDown = true
      setIsDragging(true)
      start = e.touches ? e.touches[0].clientX : e.clientX
      setStartX(start)
    }
    const onPointerMove = (e) => {
      if (!pointerDown) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      const dx = start - x
      el.scrollLeft += dx
      start = x
    }
    const onPointerUp = (e) => {
      pointerDown = false
      setIsDragging(false)
    }

    el.addEventListener('touchstart', onPointerDown, {passive:true})
    el.addEventListener('touchmove', onPointerMove, {passive:true})
    el.addEventListener('touchend', onPointerUp)
    el.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup', onPointerUp)

    return () => {
      el.removeEventListener('touchstart', onPointerDown)
      el.removeEventListener('touchmove', onPointerMove)
      el.removeEventListener('touchend', onPointerUp)
      el.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', onPointerUp)
    }
  }, [])

  const scrollBy = (direction = 'next') => {
    const el = containerRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.8)
    el.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="bg-black text-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Results Backed by Trust</h3>

        <div className="relative">
          <button aria-label="Previous" onClick={() => scrollBy('prev')} className="testimonial-arrow left-2 hidden md:flex">‹</button>
          <div ref={containerRef} className={`flex gap-6 overflow-x-auto py-4 no-scrollbar snap-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
            {items.map((t,i)=> (
              <div key={i} className="min-w-[320px] p-6 rounded-xxl testimonial-glass card-shadow snap-card">
                <div className="flex items-center gap-4">
                  <img src={t.img} className="w-12 h-12 rounded-full border-2 border-white" alt={t.name} />
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-slate-300">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-slate-200">{t.text}</p>
                <div className="mt-4 h-0.5 w-12 bg-primary rounded-full"></div>
              </div>
            ))}
          </div>
          <button aria-label="Next" onClick={() => scrollBy('next')} className="testimonial-arrow right-2 hidden md:flex">›</button>
        </div>
      </div>
    </section>
  )
}
