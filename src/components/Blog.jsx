import React, { useRef, useState, useEffect } from 'react'

const posts = [
  {title:'How to build a growth flywheel', img:'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&q=60'},
  {title:'Creative testing that converts', img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=60'},
  {title:'Data-driven media buying', img:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=60'},
  {title:'Design systems that scale', img:'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=1200&q=60'},
  {title:'Audience-first content strategies', img:'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?w=1200&q=60'},
  {title:'Measuring brand lift with data', img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=60'}
]

export default function Blog(){
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let pointerDown = false
    let start = 0

    const onPointerDown = (e) => {
      pointerDown = true
      setIsDragging(true)
      start = e.touches ? e.touches[0].clientX : e.clientX
    }
    const onPointerMove = (e) => {
      if (!pointerDown) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      const dx = start - x
      el.scrollLeft += dx
      start = x
    }
    const onPointerUp = () => {
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
    <section id="blog" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Fuel for Thought</h3>
        <div className="relative">
          <button aria-label="Previous" onClick={() => scrollBy('prev')} className="testimonial-arrow left-2 hidden md:flex">‹</button>
          <div ref={containerRef} className={`flex gap-4 sm:gap-6 overflow-x-auto py-4 no-scrollbar snap-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
            {posts.map((p,i)=> (
              <article key={i} className="min-w-[280px] sm:min-w-[320px] rounded-xxl overflow-hidden card-shadow bg-white snap-card">
                <img loading="lazy" src={p.img} className="w-full h-40 sm:h-44 object-cover" alt={p.title} />
                <div className="p-4">
                  <div className="font-semibold text-sm sm:text-base">{p.title}</div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">Short snippet about the article to entice the reader.</p>
                  <div className="mt-3 sm:mt-4">
                    <button className="text-primary font-medium text-sm sm:text-base">Read More</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button aria-label="Next" onClick={() => scrollBy('next')} className="testimonial-arrow right-2 hidden md:flex">›</button>
        </div>
      </div>
    </section>
  )
}
